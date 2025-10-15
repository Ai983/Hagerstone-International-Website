import { useEffect, useRef } from "react";

/**
 * Circular custom cursor with:
 * - inner dot + outer ring
 * - enlarges on hover of interactive elements
 * - click feedback
 * - disabled on touch devices
 */
export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // bail out on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const move = () => {
      tx = lerp(tx, x, 0.2);
      ty = lerp(ty, y, 0.2);
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${x - 0.5}px, ${y - 0.5}px) translate(-50%, -50%)`;
        ringRef.current.style.transform = `translate(${tx - 0.5}px, ${ty - 0.5}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(move);
    };

    const onMouseMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const onMouseDown = () => wrapRef.current?.classList.add("cursor-down");
    const onMouseUp = () => wrapRef.current?.classList.remove("cursor-down");

    let raf = requestAnimationFrame(move);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });

    // hover handling for interactive targets
    const hoverSelector = "a, button, [role='button'], input, select, textarea, .cursor-hover";
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(hoverSelector)) wrapRef.current?.classList.add("cursor-hover");
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(hoverSelector)) wrapRef.current?.classList.remove("cursor-hover");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div ref={wrapRef} className="cursor-wrap">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
