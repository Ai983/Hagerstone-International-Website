import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type Phase = "logo" | "greeting" | "exit" | "done";

export function useSplashController() {
  const [phase, setPhase] = useState<Phase>("logo");
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number | null>(null);

  // only once per session
  useEffect(() => {
    const seen = localStorage.getItem("diwaliSplash2025");
    if (seen) {
      setPhase("done");
      setVisible(false);
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // quick fade only
      const t = setTimeout(() => {
        localStorage.setItem("diwaliSplash2025", "true");
        setPhase("done");
        setVisible(false);
      }, 800);
      return () => clearTimeout(t);
    }

    // timeline: 0-2s logo, 2-4.5 greeting, 4.5-5 exit
    const t1 = setTimeout(() => setPhase("greeting"), 2000);
    const t2 = setTimeout(() => setPhase("exit"), 4500);
    const t3 = setTimeout(() => {
      localStorage.setItem("diwaliSplash2025", "true");
      setPhase("done");
      setVisible(false);
    }, 5000);

    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return useMemo(() => ({ phase, visible }), [phase, visible]);
}

export function useIsHome() {
  const { pathname } = useLocation();
  return pathname === "/";
}
