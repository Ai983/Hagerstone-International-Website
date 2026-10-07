import type { ComponentType } from "react";
import { allContent, contentIndex } from "@/content/.generated";
import type { ContentDetails, ContentSummary } from "@/content/types";
import type { Collection } from "@/content/schema";

// Resolves a content route to its MDX body and its article-only details.
//
// Both globs are LAZY: Vite turns each .mdx file, and each details JSON, into
// its own chunk, fetched only when that article is visited. The eager
// equivalents live in contentModules.server.ts and are imported solely by the
// SSR build, so the browser never downloads every article at once.

export type MdxModule = { default: ComponentType };

const lazyModules = import.meta.glob("/src/content/**/*.mdx") as Record<
  string,
  () => Promise<MdxModule>
>;

const lazyDetails = import.meta.glob("/src/content/.generated/details/*/*.json", {
  import: "default",
}) as Record<string, () => Promise<ContentDetails>>;

/** Where an entry's details file sits, as a glob key. */
export const detailsKey = (entry: Pick<ContentSummary, "collection" | "slug">) =>
  `/src/content/.generated/details/${entry.collection}/${entry.slug}.json`;

/** Dynamic import for one entry's body, or undefined if the file is missing. */
export const loadContentBody = (entry: ContentSummary) => lazyModules[entry.file];

/** Dynamic import for one entry's details, or undefined if the file is missing. */
export const loadContentDetails = (entry: ContentSummary) => lazyDetails[detailsKey(entry)];

export { allContent, contentIndex };

/** Published entry for a path, e.g. "/glossary/spandrel-glass". */
export const getContentByPath = (path: string): ContentSummary | undefined =>
  contentIndex.find((entry) => entry.path === path);

/** Published entries in one collection, newest first. */
export const getCollection = (collection: Collection): ContentSummary[] =>
  contentIndex.filter((entry) => entry.collection === collection);

/**
 * Resolve the `related` slugs on an entry to real published entries.
 * Unresolvable slugs are dropped rather than throwing — a link to content that
 * hasn't been written yet is a normal intermediate state, not an error.
 */
export const getRelated = (entry: ContentSummary): ContentSummary[] =>
  entry.related
    .map((slug) => contentIndex.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ContentSummary => Boolean(candidate));
