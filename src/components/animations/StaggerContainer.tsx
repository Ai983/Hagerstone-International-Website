import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useRef, Children } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  variant?: "fade" | "slide-up" | "scale" | "slide-left" | "slide-right";
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  delay = 0,
  once = true,
  variant = "fade",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariantsMap: Record<string, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration, ease: [0.25, 0.4, 0.25, 1] } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, ease: [0.25, 0.4, 0.25, 1] } },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration, ease: [0.25, 0.4, 0.25, 1] } },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration, ease: [0.25, 0.4, 0.25, 1] } },
    },
  };

  const itemVariants = itemVariantsMap[variant];

  return (
    <motion.div
      ref={ref}
      className={`${className} motion-reduce:!opacity-100`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants} className="motion-reduce:!opacity-100 motion-reduce:!transform-none">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StaggerContainer;
