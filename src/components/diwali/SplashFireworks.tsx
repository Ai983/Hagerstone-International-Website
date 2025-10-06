import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { useIsHome, useSplashController } from "./useSplashController";

export default function SplashFireworks() {
  const { phase, visible } = useSplashController();
  const isHome = useIsHome();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stopRef = useRef(false);

  // manage scroll lock while visible
  useEffect(() => {
    if (!visible) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [visible]);

  // fireworks loop
  useEffect(() => {
    if (!visible) return;
    stopRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

    // burst every ~280ms with varied angles/colors
    const colors = ["#ffd166", "#f77f00", "#ef476f", "#06d6a0", "#6c63ff", "#ffb703"];
    const interval = setInterval(() => {
      if (stopRef.current) return;
      const angle = Math.random() * 90 + 45;  // 45..135
      const spread = 55 + Math.random() * 20;
      const startX = Math.random() < 0.5 ? 0.2 + Math.random() * 0.2 : 0.6 + Math.random() * 0.2;
      const startY = 0.6 + Math.random() * 0.25; // lower half

      myConfetti({
        particleCount: 40 + Math.floor(Math.random() * 30),
        angle,
        spread,
        startVelocity: 55 + Math.random() * 20,
        ticks: 160,
        origin: { x: startX, y: startY },
        gravity: 1.1,
        scalar: 0.9,
        colors
      });

      // occasional comet
      if (Math.random() > 0.75) {
        myConfetti({
          particleCount: 12,
          angle: 60 + Math.random() * 60,
          spread: 20,
          startVelocity: 80,
          gravity: 0.9,
          origin: { x: Math.random(), y: 0.8 },
          colors: ["#ffd166", "#fff3b0"],
          scalar: 1.2
        });
      }
    }, 280);

    return () => {
      stopRef.current = true;
      clearInterval(interval);
    };
  }, [visible]);

  if (!visible && phase === "done") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Diwali splash"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 60%, rgba(0,0,0,0.65), rgba(0,0,0,0.92))"
          }}
        >
          {/* canvas layer */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo (0-2s) */}
            <motion.img
              src="/logoo.png"
              alt="Hagerstone"
              className="w-24 h-24 md:w-28 md:h-28"
              initial={{ opacity: 1, scale: 0.96 }}
              animate={{
                opacity: phase === "logo" ? 1 : 0,
                scale: phase === "logo" ? 1 : 0.98
              }}
              transition={{ duration: 0.35 }}
              style={{ filter: "drop-shadow(0 8px 24px rgba(255, 215, 0, 0.25))" }}
            />

            {/* Greeting (2.0s–4.5s) — home only */}
            {isHome && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: phase === "greeting" ? 1 : 0, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-4"
              >
                <div className="text-2xl md:text-4xl font-bold text-white tracking-wide"
                     style={{ textShadow: "0 6px 24px rgba(255,255,255,0.25)" }}>
                  Happy Diwali
                </div>
                <div className="mt-2 text-white/70 text-sm md:text-base">
                  from Hagerstone International
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
