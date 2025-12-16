import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Building2, Palette, Target, Users } from "lucide-react";

interface ProfileData {
  layout?: string;
  aesthetic?: string;
  materials?: string;
  brand?: string;
  team?: string;
  color?: string;
  priority?: string;
}

interface LiveProfileSummaryProps {
  answers: ProfileData;
  currentStep: number;
  totalSteps: number;
}

const LABELS: Record<keyof ProfileData, { icon: React.ReactNode; label: string }> = {
  layout: { icon: <Building2 className="w-4 h-4" />, label: "Layout" },
  aesthetic: { icon: <Palette className="w-4 h-4" />, label: "Aesthetic" },
  materials: { icon: <Sparkles className="w-4 h-4" />, label: "Materials" },
  brand: { icon: <Target className="w-4 h-4" />, label: "Brand" },
  team: { icon: <Users className="w-4 h-4" />, label: "Work Style" },
  color: { icon: <Palette className="w-4 h-4" />, label: "Palette" },
  priority: { icon: <Target className="w-4 h-4" />, label: "Priority" },
};

const LiveProfileSummary: React.FC<LiveProfileSummaryProps> = ({
  answers,
  currentStep,
  totalSteps,
}) => {
  const answeredItems = Object.entries(answers).filter(([_, value]) => value);

  if (answeredItems.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden lg:block"
    >
      <Card className="sticky top-32 border-accent/20 bg-gradient-to-br from-card to-accent/5">
        <CardHeader className="pb-3">
          <CardTitle className="font-playfair text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Your Style Profile
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Building as you answer...
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <AnimatePresence mode="popLayout">
            {answeredItems.map(([key, value]) => {
              const labelInfo = LABELS[key as keyof ProfileData];
              if (!labelInfo) return null;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-start gap-2"
                >
                  <Badge variant="outline" className="flex-shrink-0 gap-1 text-xs">
                    {labelInfo.icon}
                    {labelInfo.label}
                  </Badge>
                  <span className="text-sm text-foreground line-clamp-2">
                    {value as string}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Progress indicator */}
          <div className="pt-3 border-t border-border/50">
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
              <span>Profile completion</span>
              <span>{Math.round((answeredItems.length / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <motion.div
                className="bg-accent h-1.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(answeredItems.length / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LiveProfileSummary;
