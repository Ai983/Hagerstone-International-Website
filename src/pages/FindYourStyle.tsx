import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles, Zap } from "lucide-react";
import { EstimatorProvider } from "@/components/estimator/context";
import EstimatorFlow from "@/components/estimator/EstimatorFlow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import QuizQuestionCard from "@/components/style-quiz/QuizQuestionCard";
import LiveProfileSummary from "@/components/style-quiz/LiveProfileSummary";
import LeadCaptureOTP from "@/components/style-quiz/LeadCaptureOTP";
import AIResultDisplay from "@/components/style-quiz/AIResultDisplay";

type StyleId = 'modern_collab' | 'minimal_industrial' | 'luxury_corporate' | 'biophilic_calm' | 'creative_hybrid' | 'traditional_private';

const STYLES: Record<StyleId, { name: string; desc: string }> = {
  modern_collab: { name: 'Modern Collaborative', desc: 'Open layouts, glass partitions, flexible hubs and clean lines.' },
  minimal_industrial: { name: 'Minimalist Industrial', desc: 'Exposed concrete/brick, steel details, monochrome palette.' },
  luxury_corporate: { name: 'Luxury Corporate', desc: 'Executive presence with rich woods, brass accents, plush textures.' },
  biophilic_calm: { name: 'Biophilic Calm', desc: 'Natural woods, plants, daylight strategy, soft acoustics.' },
  creative_hybrid: { name: 'Creative Hybrid', desc: 'Playful color pops, modular zones, writeable walls.' },
  traditional_private: { name: 'Traditional Private Office', desc: 'Quiet enclosed offices, refined finishes, formal meeting suites.' }
};

const QUESTIONS: { id: string; prompt: string; options: { label: string; style: StyleId }[] }[] = [
  { id: 'layout', prompt: 'Which workspace layout fits your team best?', options: [
    { label: 'Open, buzzing collaboration zones', style: 'modern_collab' },
    { label: 'Quiet, enclosed private offices', style: 'traditional_private' },
    { label: 'Flexible mix of zones', style: 'creative_hybrid' }
  ]},
  { id: 'aesthetic', prompt: 'Pick an aesthetic vibe:', options: [
    { label: 'Sleek & modern', style: 'modern_collab' },
    { label: 'Raw & industrial', style: 'minimal_industrial' },
    { label: 'Premium & executive', style: 'luxury_corporate' },
    { label: 'Natural & calming', style: 'biophilic_calm' }
  ]},
  { id: 'materials', prompt: 'Favorite materials & textures?', options: [
    { label: 'Glass, light woods, clean finishes', style: 'modern_collab' },
    { label: 'Exposed brick, steel, concrete', style: 'minimal_industrial' },
    { label: 'Rich wood, brass, plush textiles', style: 'luxury_corporate' },
    { label: 'Plants, stone, rattan, daylight', style: 'biophilic_calm' }
  ]},
  { id: 'brand', prompt: 'Your brand personality leans more…', options: [
    { label: 'Innovative & energetic', style: 'creative_hybrid' },
    { label: 'Classic & authoritative', style: 'luxury_corporate' },
    { label: 'Grounded & wellness-oriented', style: 'biophilic_calm' },
    { label: 'Efficient & minimal', style: 'minimal_industrial' }
  ]},
  { id: 'priority', prompt: 'Top priority for your new space?', options: [
    { label: 'Boost collaboration & energy', style: 'modern_collab' },
    { label: 'Privacy, focus & acoustics', style: 'traditional_private' },
    { label: 'Brand experience for clients', style: 'luxury_corporate' }
  ]}
];

const FindYourStyle = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<StyleId[]>([]);
  const [answerLabels, setAnswerLabels] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<StyleId | null>(null);
  const [verifiedUser, setVerifiedUser] = useState<{ name: string; email: string; phone: string; company: string } | null>(null);

  const handleAnswer = (style: StyleId) => setSelectedAnswer(style);

  const handleNext = () => {
    if (!selectedAnswer) return;
    const question = QUESTIONS[currentQuestion];
    const selectedOption = question.options.find(o => o.style === selectedAnswer);
    
    setAnswers([...answers, selectedAnswer]);
    setAnswerLabels({ ...answerLabels, [question.id]: selectedOption?.label || '' });
    setSelectedAnswer(null);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLeadCapture(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(null);
    }
  };

  const calculateResult = (): StyleId => {
    const counts: Record<StyleId, number> = { modern_collab: 0, minimal_industrial: 0, luxury_corporate: 0, biophilic_calm: 0, creative_hybrid: 0, traditional_private: 0 };
    answers.forEach(s => counts[s]++);
    return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as StyleId;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setAnswerLabels({});
    setShowResults(false);
    setShowLeadCapture(false);
    setSelectedAnswer(null);
    setVerifiedUser(null);
  };

  const handleVerified = (data: { name: string; email: string; phone: string; company: string }) => {
    setVerifiedUser(data);
    setShowLeadCapture(false);
    setShowResults(true);
  };

  const result = calculateResult();
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <>
      <Helmet>
        <title>Find Your Office Style | AI Interior Design & Cost Estimator – Hagerstone</title>
        <meta name="description" content="Discover your ideal office style with India's first AI-driven interior design quiz. Get personalized workspace recommendations, cost estimates, and AI-generated visualizations for office fit-out in Delhi NCR." />
      </Helmet>

      <main className="min-h-screen bg-background pt-24 md:pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Banner */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              India's First AI-Driven Interior Design Company
            </div>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-3">Find Your Office Style</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI-powered workspace design recommendations. Delivered with efficiency and record time.
            </p>
          </motion.div>

          {showResults && verifiedUser ? (
            <div className="space-y-6">
              <AIResultDisplay 
                styleName={STYLES[result].name} 
                quizAnswers={answerLabels} 
                userName={verifiedUser.name}
              />
              <div className="text-center">
                <Button onClick={resetQuiz} variant="ghost" className="gap-2">
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </Button>
              </div>
            </div>
          ) : showLeadCapture ? (
            <div className="max-w-xl mx-auto">
              <LeadCaptureOTP onVerified={handleVerified} />
              <div className="text-center mt-4">
                <Button variant="ghost" onClick={() => setShowLeadCapture(false)} className="gap-2">
                  <ChevronLeft className="w-4 h-4" /> Back to Quiz
                </Button>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="quiz" className="space-y-6">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
                <TabsTrigger value="quiz" className="gap-2"><Sparkles className="w-4 h-4" />Style Quiz</TabsTrigger>
                <TabsTrigger value="estimator" className="gap-2"><Zap className="w-4 h-4" />Cost Estimator</TabsTrigger>
              </TabsList>

              <TabsContent value="quiz">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Progress */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <motion.div className="bg-accent h-2 rounded-full" animate={{ width: `${progress}%` }} />
                      </div>
                      <span className="text-sm text-muted-foreground">{currentQuestion + 1}/{QUESTIONS.length}</span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <QuizQuestionCard
                          prompt={QUESTIONS[currentQuestion].prompt}
                          options={QUESTIONS[currentQuestion].options}
                          selectedAnswer={selectedAnswer}
                          onSelect={handleAnswer}
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between">
                      <Button onClick={handleBack} variant="outline" disabled={currentQuestion === 0} className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Back
                      </Button>
                      <Button onClick={handleNext} disabled={!selectedAnswer} className="gap-2">
                        {currentQuestion === QUESTIONS.length - 1 ? 'Get Results' : 'Next'} <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <LiveProfileSummary answers={answerLabels} currentStep={currentQuestion} totalSteps={QUESTIONS.length} />
                </div>
              </TabsContent>

              <TabsContent value="estimator">
                <EstimatorProvider><EstimatorFlow /></EstimatorProvider>
              </TabsContent>
            </Tabs>
          )}

          {/* SEO Content */}
          <Card className="mt-12 bg-muted/30 border-0">
            <CardContent className="p-6">
              <h2 className="font-playfair text-lg font-semibold mb-3">AI-Driven Office Interior Design</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hagerstone's AI Office Style Quiz combines interior design expertise with cutting-edge artificial intelligence 
                to help businesses discover their ideal workspace style, layout and cost estimate. Get personalized recommendations 
                for office interior design, turnkey fit-out, and material selections in Delhi NCR. Our construction automation 
                and BOQ automation ensures efficient project delivery with premium quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default FindYourStyle;
