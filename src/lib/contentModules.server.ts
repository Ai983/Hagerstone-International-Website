import type { ContentDetails, ContentEntry, ContentSummary } from "@/content/types";
import { contentIndex, detailsKey, type MdxModule } from "@/lib/contentModules";

// Eager counterpart to contentModules.ts, for the SSR build only.
//
// renderToString cannot await a dynamic import mid-render, so the prerenderer
// needs every body and every details file resolved synchronously. Bundle size
// is irrelevant here — the SSR bundle runs in Node during the build and is
// never served to a browser.
//
// IMPORTANT: import this from server-only modules (ServerApp, entry-server,
// sitemap). Pulling it into any module the client bundle reaches would inline
// every article into the browser payload, which is exactly what the lazy globs
// exist to avoid.

const eagerModules = import.meta.glob("/src/content/**/*.mdx", {
  eager: true,
}) as Record<string, MdxModule>;

const eagerDetails = import.meta.glob("/src/content/.generated/details/*/*.json", {
  eager: true,
  import: "default",
}) as Record<string, ContentDetails>;

/** Synchronously resolved MDX body for one entry. */
export const getContentBodySync = (entry: ContentSummary) =>
  eagerModules[entry.file]?.default;

// A missing file fails the build: silently rendering an article without its
// FAQs, sources or gallery would ship a thinner page with no warning.
const withDetails = (entry: ContentSummary): ContentEntry => {
  const details = eagerDetails[detailsKey(entry)];
  if (!details) {
    throw new Error(`${detailsKey(entry)} is missing — run node scripts/build-content-index.mjs`);
  }
  return { ...entry, ...details };
};

/** Published entries with every field — for prerender, the sitemap and llms.txt. */
export const fullContentIndex: ContentEntry[] = contentIndex.map(withDetails);

/** Full published entry for a path. */
export const getFullContentByPath = (path: string): ContentEntry | undefined =>
  fullContentIndex.find((entry) => entry.path === path);
