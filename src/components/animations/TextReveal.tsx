import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  variant?: "words" | "chars" | "lines" | "slide" | "blur";
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function TextReveal({
  children,
  className = "",
  variant = "words",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  as = "div",
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const MotionTag = (motion as Record<string, typeof motion.div>)[as] ?? motion.div;

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

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const slideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const blurVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 0.8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const getVariants = () => {
    switch (variant) {
      case "chars":
        return charVariants;
      case "slide":
        return slideVariants;
      case "blur":
        return blurVariants;
      default:
        return wordVariants;
    }
  };

  const getContent = () => {
    if (variant === "chars") {
      return children.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={getVariants()}
          className="inline-block motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:filter-none"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ));
    }

    if (variant === "lines") {
      return children.split("\n").map((line, i) => (
        <motion.span
          key={i}
          variants={getVariants()}
          className="block motion-reduce:opacity-100 motion-reduce:transform-none"
        >
          {line}
        </motion.span>
      ));
    }

    return children.split(" ").map((word, i) => (
      <motion.span
        key={i}
        variants={getVariants()}
        className="inline-block mr-[0.25em] motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:filter-none"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <MotionTag
      ref={ref}
      className={`${className} motion-reduce:!opacity-100`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {getContent()}
    </MotionTag>
  );
}

export default TextReveal;
