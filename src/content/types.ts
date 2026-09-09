import type { Frontmatter, Collection } from "@/content/schema";

export interface ContentFaq {
  question: string;
  answer: string;
}

export interface ContentCitation {
  /** Display label, e.g. "NBC 2016, Part 4". */
  label: string;
  /** Clause or section, e.g. "Cl. 4.3.2". */
  clause?: string;
  url?: string;
}

/**
 * One content file as it appears in the generated index.
 *
 * Frontmatter plus the fields the build script derives — the resolved URL, the
 * source file, and reading-time stats. Deliberately excludes the article body:
 * listing pages and the sitemap read this and must never pull MDX modules into
 * their bundle.
 *
 * The array fields are restated rather than inherited because Zod's `.default([])`
 * makes them optional in the inferred type, while every entry in the generated
 * index is guaranteed to have them — the build script fills the defaults in.
 */
export interface ContentEntry
  extends Omit<Frontmatter, "faqs" | "citations" | "keywords" | "related" | "collection"> {
  collection: Collection;
  faqs: ContentFaq[];
  citations: ContentCitation[];
  keywords: string[];
  related: string[];

  /** Resolved site path, e.g. "/glossary/spandrel-glass". */
  path: string;
  /** Source file, repo-relative, e.g. "/src/content/glossary/spandrel-glass.mdx". */
  file: string;
  wordCount: number;
  readingMinutes: number;
}
