import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  variant?: "gradient" | "particles" | "mesh" | "aurora";
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedBackground({ 
  variant = "gradient", 
  className = "",
  children 
}: AnimatedBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (variant === "gradient") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 opacity-30 motion-reduce:opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${x.get()}px ${y.get()}px, hsl(var(--primary) / 0.15), transparent 40%)`,
          }}
          animate={{
            background: [
              "radial-gradient(600px circle at 0% 0%, hsl(var(--primary) / 0.15), transparent 40%)",
              "radial-gradient(600px circle at 100% 0%, hsl(var(--accent) / 0.15), transparent 40%)",
              "radial-gradient(600px circle at 100% 100%, hsl(var(--primary) / 0.15), transparent 40%)",
              "radial-gradient(600px circle at 0% 100%, hsl(var(--accent) / 0.15), transparent 40%)",
              "radial-gradient(600px circle at 0% 0%, hsl(var(--primary) / 0.15), transparent 40%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {children}
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20 motion-reduce:hidden"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: ["-20%", "120%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
        {children}
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 motion-reduce:opacity-50">
          <motion.div
            className="absolute -inset-[100px] opacity-50"
            style={{
              background: `
                radial-gradient(at 40% 20%, hsl(var(--primary) / 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsl(var(--accent) / 0.2) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsl(var(--primary) / 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsl(var(--accent) / 0.3) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsl(var(--primary) / 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsl(var(--accent) / 0.2) 0px, transparent 50%)
              `,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        {children}
      </div>
    );
  }

  if (variant === "aurora") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 overflow-hidden motion-reduce:opacity-30">
          <motion.div
            className="absolute -inset-[200px] blur-3xl"
            style={{
              background: `linear-gradient(to right, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), hsl(var(--primary) / 0.3))`,
            }}
            animate={{
              x: ["-50%", "50%", "-50%"],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -inset-[200px] blur-3xl"
            style={{
              background: `linear-gradient(to left, hsl(var(--accent) / 0.2), hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2))`,
            }}
            animate={{
              x: ["50%", "-50%", "50%"],
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        {children}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
}

export default AnimatedBackground;
