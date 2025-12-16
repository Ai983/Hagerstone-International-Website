import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatINR, PACKAGES, PackageId } from "@/components/estimator/config";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CostEstimateCardProps {
  areaSqft: number;
  selectedPkg?: PackageId;
  onSelectPackage: (pkg: PackageId) => void;
}

const ICONS: Record<PackageId, React.ReactNode> = {
  basic: <Zap className="w-5 h-5" />,
  mid: <Sparkles className="w-5 h-5" />,
  luxury: <Crown className="w-5 h-5" />,
};

const CostEstimateCard: React.FC<CostEstimateCardProps> = ({
  areaSqft,
  selectedPkg,
  onSelectPackage,
}) => {
  const computeRange = (rate: number | [number, number]) => {
    if (Array.isArray(rate)) {
      return `${formatINR(rate[0] * areaSqft)} – ${formatINR(rate[1] * areaSqft)}`;
    }
    return formatINR(rate * areaSqft);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
          Select Your Budget Tier
        </h2>
        <p className="text-muted-foreground">
          Estimated costs for {areaSqft.toLocaleString()} sq.ft office space
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(Object.keys(PACKAGES) as PackageId[]).map((pkgId, index) => {
          const pkg = PACKAGES[pkgId];
          const isSelected = selectedPkg === pkgId;
          
          return (
            <motion.div
              key={pkgId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 h-full",
                  "hover:shadow-lg hover:-translate-y-1",
                  isSelected 
                    ? "border-accent ring-2 ring-accent/20 bg-accent/5" 
                    : "border-border hover:border-accent/50"
                )}
                onClick={() => onSelectPackage(pkgId)}
              >
                <CardContent className="p-5 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isSelected ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        {ICONS[pkgId]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{pkg.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {Array.isArray(pkg.ratePerSqft) 
                            ? `₹${pkg.ratePerSqft[0]}-${pkg.ratePerSqft[1]}/sq.ft`
                            : `₹${pkg.ratePerSqft}/sq.ft`
                          }
                        </p>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <Badge className="bg-accent text-accent-foreground">
                        Selected
                      </Badge>
                    )}
                  </div>

                  {/* Image */}
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={pkg.image}
                      alt={`${pkg.title} office interior package`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Price */}
                  <div className="text-center py-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">
                      {computeRange(pkg.ratePerSqft)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Estimated Total
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {pkg.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground text-center mt-4">
        * Estimates are indicative and may vary based on specific requirements, material choices, and site conditions.
        Contact us for a detailed quotation.
      </p>
    </div>
  );
};

export default CostEstimateCard;
