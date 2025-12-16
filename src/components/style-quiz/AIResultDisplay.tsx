import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { 
  Sparkles, Clock, Palette, Layers, Calendar, 
  Download, Phone, ExternalLink, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import GeneratedVisualGallery from "./GeneratedVisualGallery";

interface AIResultDisplayProps {
  styleName: string;
  quizAnswers: Record<string, string>;
  areaSqft?: number;
  pkg?: string;
  userName?: string;
}

const AIResultDisplay: React.FC<AIResultDisplayProps> = ({
  styleName,
  quizAnswers,
  areaSqft,
  pkg,
  userName,
}) => {
  const [loading, setLoading] = useState(true);
  const [styleTitle, setStyleTitle] = useState("");
  const [styleDescription, setStyleDescription] = useState("");
  const [imagePrompt, setImagePrompt] = useState("");
  const [recommendations, setRecommendations] = useState<{
    timeline?: string;
    materials?: string;
  }>({});
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    generateStyleContent();
  }, []);

  const generateStyleContent = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-ai-style', {
        body: {
          quizAnswers,
          styleName,
          areaSqft,
          pkg
        }
      });

      if (error) throw error;

      if (data?.success) {
        setStyleTitle(data.styleTitle || styleName);
        setStyleDescription(data.styleDescription || '');
        setImagePrompt(data.imagePrompt || '');
        setRecommendations(data.recommendations || {});
        
        // Generate first image
        if (data.imagePrompt) {
          generateImage(data.imagePrompt);
        }
      }
    } catch (error) {
      console.error('Generate style error:', error);
      toast.error('Failed to generate style recommendations');
      // Fallback content
      setStyleTitle(styleName);
      setStyleDescription(`Your ${styleName} workspace combines contemporary design principles with functional excellence, creating an environment that inspires productivity and reflects your brand values.`);
    } finally {
      setLoading(false);
    }
  };

  const generateImage = async (prompt: string) => {
    setImageLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-ai-image', {
        body: { prompt, style: styleName }
      });

      if (error) throw error;

      if (data?.success && data.imageUrl) {
        setGeneratedImages(prev => [...prev, data.imageUrl]);
      }
    } catch (error) {
      console.error('Generate image error:', error);
      // Don't show toast for image errors - graceful degradation
    } finally {
      setImageLoading(false);
    }
  };

  const generateMoreImages = () => {
    if (imagePrompt && generatedImages.length < 4) {
      generateImage(imagePrompt);
    }
  };

  // Parse description into sections
  const renderDescription = () => {
    if (!styleDescription) return null;
    
    const sections = styleDescription.split('\n\n').filter(s => s.trim());
    
    return sections.map((section, index) => {
      // Check if it's a heading (starts with # or is bold)
      if (section.startsWith('#') || section.startsWith('**')) {
        const cleanHeading = section.replace(/^#+\s*/, '').replace(/\*\*/g, '');
        return (
          <h3 key={index} className="font-playfair text-lg font-semibold mt-6 mb-2 text-foreground">
            {cleanHeading}
          </h3>
        );
      }
      
      // Check for bullet points
      if (section.includes('\n-') || section.startsWith('-')) {
        const items = section.split('\n').filter(line => line.trim().startsWith('-'));
        return (
          <ul key={index} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^-\s*/, '')}</li>
            ))}
          </ul>
        );
      }
      
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {section}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              <span className="text-lg font-medium">Generating your personalized style...</span>
            </div>
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="aspect-video rounded-lg" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Hero Section */}
      <Card className="overflow-hidden border-0 shadow-xl">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-primary-foreground p-8 md:p-12">
          <Badge className="bg-accent text-accent-foreground mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Generated Style
          </Badge>
          
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {styleTitle}
          </h1>
          
          {userName && (
            <p className="text-lg opacity-90 mb-6">
              Personalized for {userName}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {areaSqft && (
              <div className="flex items-center gap-2 bg-background/10 rounded-full px-4 py-2">
                <Layers className="w-4 h-4" />
                <span>{areaSqft.toLocaleString()} sq.ft</span>
              </div>
            )}
            {recommendations.timeline && (
              <div className="flex items-center gap-2 bg-background/10 rounded-full px-4 py-2">
                <Calendar className="w-4 h-4" />
                <span>{recommendations.timeline}</span>
              </div>
            )}
            {recommendations.materials && (
              <div className="flex items-center gap-2 bg-background/10 rounded-full px-4 py-2">
                <Palette className="w-4 h-4" />
                <span>{recommendations.materials}</span>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* AI Generated Images */}
      {(generatedImages.length > 0 || imageLoading) && (
        <GeneratedVisualGallery
          images={generatedImages}
          loading={imageLoading}
          styleName={styleTitle}
          onGenerateMore={generateMoreImages}
          canGenerateMore={generatedImages.length < 4 && !!imagePrompt}
        />
      )}

      {/* Style Description */}
      <Card>
        <CardContent className="p-6 md:p-8">
          <h2 className="font-playfair text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Your Style Blueprint
          </h2>
          
          <div className="prose prose-sm max-w-none">
            {renderDescription()}
          </div>
        </CardContent>
      </Card>

      {/* CTAs */}
      <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
        <CardContent className="p-6 md:p-8">
          <h3 className="font-playfair text-xl font-semibold mb-4">
            Ready to Transform Your Workspace?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our design experts are ready to bring your vision to life with India's first AI-driven interior design approach.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="/contact">
                <Phone className="w-4 h-4" />
                Book a Free Consultation
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="/projects">
                <ExternalLink className="w-4 h-4" />
                View Similar Projects
              </a>
            </Button>
            
            <Button variant="ghost" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Style PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content */}
      <Card className="bg-muted/30">
        <CardContent className="p-6">
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            About AI Interior Design
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hagerstone International leverages cutting-edge AI technology to revolutionize office interior design in Delhi NCR. 
            Our AI-driven approach combines years of design expertise with machine learning to deliver personalized workspace 
            solutions. From turnkey office fit-outs to commercial interior design, we use construction automation and 
            design perception technology to ensure your space is not just beautiful, but optimally functional. Experience 
            the future of workspace layout planning with India's first AI-powered interior design company.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIResultDisplay;
