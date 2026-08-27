import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface QuizQuestionCardProps {
  prompt: string;
  options: {
    label: string;
    style: string;
    icon?: React.ReactNode;
    helper?: string;
  }[];
  selectedAnswer: string | null;
  onSelect: (style: string) => void;
}

const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  prompt,
  options,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
      <CardContent className="p-6 md:p-8">
        <h2 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
          {prompt}
        </h2>
        <div className="space-y-3">
          {options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelect(option.style)}
              className={cn(
                "w-full p-4 md:p-5 text-left rounded-xl border-2 transition-all duration-300",
                "flex items-center gap-4 group",
                selectedAnswer === option.style
                  ? "border-accent bg-accent/10 shadow-md"
                  : "border-border bg-card hover:border-accent/50 hover:bg-accent/5 hover:shadow-sm"
              )}
              aria-pressed={selectedAnswer === option.style}
            >
              {/* Selection indicator */}
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                selectedAnswer === option.style
                  ? "border-accent bg-accent"
                  : "border-muted-foreground/30 group-hover:border-accent/50"
              )}>
                {selectedAnswer === option.style && (
                  <Check className="w-4 h-4 text-accent-foreground" />
                )}
              </div>
              
              <div className="flex-1">
                <span className={cn(
                  "font-medium text-base md:text-lg transition-colors",
                  selectedAnswer === option.style ? "text-accent" : "text-foreground"
                )}>
                  {option.label}
                </span>
                {option.helper && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {option.helper}
                  </p>
                )}
              </div>

              {option.icon && (
                <div className={cn(
                  "text-2xl opacity-60 group-hover:opacity-100 transition-opacity",
                  selectedAnswer === option.style && "opacity-100"
                )}>
                  {option.icon}
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestionCard;
