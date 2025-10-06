import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SplashFireworks from "./SplashFireworks";

export default function SplashGate({ children }: PropsWithChildren) {
  // Render splash only on the very first app mount.
  // If you later want it on every route, you can toggle by pathname here.
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    // if diwaliSplash2025 present, don't show
    const seen = localStorage.getItem("diwaliSplash2025");
    if (seen) setShow(false);
  }, []);

  return (
    <>
      {show && <SplashFireworks />}
      {children}
    </>
  );
}
