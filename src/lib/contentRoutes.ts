import { COLLECTIONS, COLLECTION_BASE_PATH } from "@/content/schema";
import { contentIndex } from "@/content/.generated";

// Bridges the content index to the router, the prerenderer and the sitemap.
//
// Mirrors the role locationPages.ts already plays for city pages: one exported
// path list that every consumer reads, so a new file cannot be live in the
// browser yet missing from the static HTML. Registering a collection here is
// the only manual step, and there are nine of those — not one per article.

/** One router pattern per collection, e.g. "/glossary/:slug". */
export const getContentRoutePatterns = (): string[] =>
  COLLECTIONS.map((collection) => `${COLLECTION_BASE_PATH[collection]}/:slug`);

/**
 * Every published content URL — consumed by prerender.js and the sitemap.
 * Drafts are absent from contentIndex, so they never reach either.
 */
export const getContentPrerenderPaths = (): string[] =>
  contentIndex.map((entry) => entry.path);

/** Collections that currently have at least one published entry. */
export const getActiveCollections = () =>
  COLLECTIONS.filter((collection) =>
    contentIndex.some((entry) => entry.collection === collection),
  );
