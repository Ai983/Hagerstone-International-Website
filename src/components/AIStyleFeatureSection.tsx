import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Layout, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIStyleFeatureSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    { icon: Sparkles, text: "AI-powered workspace recommendations" },
    { icon: Layout, text: "Personalized interior design insights" },
    { icon: DollarSign, text: "Instant cost estimate & layout ideas" },
    { icon: Zap, text: "Delivered with speed and precision" },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          "name": "AI Office Style Designer Tool",
          "description": "AI-powered office interior design tool providing personalized workspace recommendations, layout ideas, and cost estimates.",
          "url": "https://hagerstone.com/find-your-style"
        })
      }} />

      <section
        ref={ref}
        className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
        aria-labelledby="ai-style-heading"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl motion-reduce:animate-none"
            animate={inView ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl motion-reduce:animate-none"
            animate={inView ? { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.span
                className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                ✨ New Feature
              </motion.span>

              <h2
                id="ai-style-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              >
                Try Our Built-In{" "}
                <span className="text-accent relative">
                  AI Office Style Designer
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-accent/50 rounded-full motion-reduce:animate-none"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h2>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-foreground/90 text-lg justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <feature.icon className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-gold rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity motion-reduce:animate-none animate-pulse" />
                <Button
                  asChild
                  size="lg"
                  className="relative bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  <Link to="/find-your-style" aria-label="Discover your personalized office interior style with our AI tool">
                    <Sparkles className="w-5 h-5 mr-2" aria-hidden="true" />
                    Discover Your Office Style
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Animated Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent/30 motion-reduce:animate-none"
                  animate={inView ? { rotate: 360 } : {}}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-primary/20 motion-reduce:animate-none"
                  animate={inView ? { rotate: -360 } : {}}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Center content */}
                <motion.div
                  className="absolute inset-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm flex items-center justify-center shadow-2xl motion-reduce:animate-none"
                  animate={inView ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center p-6">
                    <Sparkles className="w-12 h-12 text-accent mx-auto mb-3" aria-hidden="true" />
                    <p className="text-sm font-semibold text-primary">AI-Powered</p>
                    <p className="text-xs text-muted-foreground">Design Intelligence</p>
                  </div>
                </motion.div>

                {/* Floating icons */}
                {[Layout, DollarSign, Zap].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center motion-reduce:animate-none"
                    style={{
                      top: `${20 + index * 30}%`,
                      left: index % 2 === 0 ? "-5%" : "auto",
                      right: index % 2 !== 0 ? "-5%" : "auto",
                    }}
                    animate={inView ? { y: [0, -10, 0] } : {}}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SEO Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto text-center"
          >
            <p className="text-muted-foreground leading-relaxed">
              Our <strong>AI interior design</strong> tool helps you unlock{" "}
              <strong>office interior ideas</strong> tailored to your team, layout and budget.
              Get personalized <strong>workspace cost estimator</strong> insights,{" "}
              <strong>corporate office design</strong> recommendations, and{" "}
              <strong>turnkey interior solutions</strong> in minutes — powered by smart
              algorithms and years of commercial interior experience.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIStyleFeatureSection;
