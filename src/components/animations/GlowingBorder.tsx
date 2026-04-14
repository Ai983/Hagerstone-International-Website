import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

export function GlowingBorder({
  children,
  className = "",
  glowColor = "hsl(var(--primary))",
  borderRadius = "1rem",
}: GlowingBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        className="absolute -inset-0.5 rounded-[inherit] opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-500 motion-reduce:hidden"
        style={{
          background: `linear-gradient(90deg, ${glowColor}, hsl(var(--accent)), ${glowColor})`,
          backgroundSize: "200% 200%",
          borderRadius,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
}

export default GlowingBorder;
