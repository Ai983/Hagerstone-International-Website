import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  direction?: "vertical" | "horizontal" | "both";
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
  delay = 0,
  direction = "vertical",
}: FloatingElementProps) {
  const getAnimation = () => {
    switch (direction) {
      case "horizontal":
        return { x: [-amplitude, amplitude, -amplitude] };
      case "both":
        return {
          x: [-amplitude / 2, amplitude / 2, -amplitude / 2],
          y: [-amplitude, amplitude, -amplitude],
        };
      default:
        return { y: [-amplitude, amplitude, -amplitude] };
    }
  };

  return (
    <motion.div
      className={`${className} motion-reduce:!transform-none`}
      animate={getAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingElement;
