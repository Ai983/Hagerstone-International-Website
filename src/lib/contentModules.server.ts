import type { ContentEntry } from "@/content/types";
import type { MdxModule } from "@/lib/contentModules";

// Eager counterpart to contentModules.ts, for the SSR build only.
//
// renderToString cannot await a dynamic import mid-render, so the prerenderer
// needs every body resolved synchronously. Bundle size is irrelevant here — the
// SSR bundle runs in Node during the build and is never served to a browser.
//
// IMPORTANT: import this from ServerApp only. Pulling it into any module the
// client bundle reaches would inline every article into the browser payload,
// which is exactly what the lazy glob exists to avoid.

const eagerModules = import.meta.glob("/src/content/**/*.mdx", {
  eager: true,
}) as Record<string, MdxModule>;

/** Synchronously resolved MDX body for one entry. */
export const getContentBodySync = (entry: ContentEntry) =>
  eagerModules[entry.file]?.default;
