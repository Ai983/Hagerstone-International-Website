import type { ComponentType } from "react";
import { allContent, contentIndex } from "@/content/.generated";
import type { ContentEntry } from "@/content/types";
import type { Collection } from "@/content/schema";

// Resolves a content route to its MDX body.
//
// The glob is LAZY: Vite turns each .mdx file into its own chunk, fetched only
// when that article is visited. The eager equivalent lives in
// contentModules.server.ts and is imported solely by ServerApp, so the browser
// never downloads every article at once.

export type MdxModule = { default: ComponentType };

const lazyModules = import.meta.glob("/src/content/**/*.mdx") as Record<
  string,
  () => Promise<MdxModule>
>;

/** Dynamic import for one entry's body, or undefined if the file is missing. */
export const loadContentBody = (entry: ContentEntry) => lazyModules[entry.file];

export { allContent, contentIndex };

/** Published entry for a path, e.g. "/glossary/spandrel-glass". */
export const getContentByPath = (path: string): ContentEntry | undefined =>
  contentIndex.find((entry) => entry.path === path);

/** Published entries in one collection, newest first. */
export const getCollection = (collection: Collection): ContentEntry[] =>
  contentIndex.filter((entry) => entry.collection === collection);

/**
 * Resolve the `related` slugs on an entry to real published entries.
 * Unresolvable slugs are dropped rather than throwing — a link to content that
 * hasn't been written yet is a normal intermediate state, not an error.
 */
export const getRelated = (entry: ContentEntry): ContentEntry[] =>
  entry.related
    .map((slug) => contentIndex.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ContentEntry => Boolean(candidate));
