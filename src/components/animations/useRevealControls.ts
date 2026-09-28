import { useAnimation } from "framer-motion";
import { type RefObject, useEffect, useState } from "react";

/**
 * Scroll-reveal that is visible at rest.
 *
 * The reveal wrappers used to start every element at `initial="hidden"` and
 * switch to "visible" once `useInView` fired. `useInView` is always false during
 * server rendering, so the prerendered HTML shipped that content at `opacity:0`
 * — 62 elements on the homepage, 47 on /about, including each page's main
 * heading. Crawlers that read the static file saw a page whose text was styled
 * invisible.
 *
 * Here nothing is hidden until the page is running in a browser. On mount, an
 * element that is already on screen is left alone: it stays visible and simply
 * doesn't animate. Only an element that starts below the fold is set to
 * "hidden" (instantly, off screen, so nobody sees it disappear) and then
 * revealed when it scrolls into view — the same effect as before, without
 * shipping invisible text.
 *
 * Pass the returned controls as `animate`, with `initial={false}` on the motion
 * element so the server render carries no hidden-state styles.
 */
export function useRevealControls(ref: RefObject<Element>, isInView: boolean) {
  const controls = useAnimation();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (!onScreen) {
      controls.set("hidden");
      setArmed(true);
    }
  }, [controls, ref]);

  useEffect(() => {
    if (armed) controls.start(isInView ? "visible" : "hidden");
  }, [armed, isInView, controls]);

  return controls;
}
