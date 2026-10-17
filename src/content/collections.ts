// Collection names and URL bases, shared by the browser app, the prerenderer and
// the build scripts.
//
// Split out of schema.ts so the browser bundle doesn't pull in zod (~150 KB of
// source) just to read these constants. schema.ts re-exports everything here, so
// existing imports from "@/content/schema" keep working; browser code should
// import runtime values from "@/content/collections".

export const COLLECTIONS = [
  "insights",
  "glossary",
  "compliance",
  "materials",
  "compare",
  "cost",
  "guides",
  "architects",
  "calculators",
  "facade",
  "interiors",
  "mep",
  "peb",
  "civil",
  "estates",
  "industries",
  "design",
] as const;

export type Collection = (typeof COLLECTIONS)[number];

/** URL prefix per collection. The slug is appended to this. */
export const COLLECTION_BASE_PATH: Record<Collection, string> = {
  insights: "/blog",
  glossary: "/glossary",
  compliance: "/compliance",
  materials: "/materials",
  compare: "/compare",
  cost: "/cost",
  guides: "/guides",
  architects: "/architects",
  calculators: "/calculators",
  // Nested under the existing service page so the URL carries the topical
  // hierarchy: /services/facade-glazing/unitized-curtain-wall.
  facade: "/services/facade-glazing",
  interiors: "/services/interior-fit-out",
  mep: "/services/mep",
  peb: "/services/peb",
  civil: "/services/construction",
  estates: "/estates",
  industries: "/industries",
  // Deliberately not nested under /services/office-design-build: that page sells
  // the service, this section shows the work. Separate prefix, separate intent,
  // so the two do not compete for the same queries.
  design: "/our-designs",
};

/**
 * Collections whose base path is already a real page, so the generic listing
 * template must not claim that route.
 *
 * `facade` sits under /services/facade-glazing, which ServiceDetail already
 * renders from servicePages.ts. That page acts as the hub and links down to the
 * sub-services, rather than being replaced by an auto-generated index.
 */
export const COLLECTIONS_WITHOUT_INDEX: Collection[] = [
  // Insights are served under /blog, whose listing page is Blog.tsx. It lists
  // both the legacy .tsx posts and these MDX ones — see src/lib/blogList.ts.
  "insights",
  "facade",
  "interiors",
  "mep",
  "peb",
  "civil",
];

/**
 * Collections where being wrong carries real professional risk. Pages are
 * published in batches without human review, so these stay locked: nothing in
 * them goes live until someone at Hagerstone puts their name on it.
 *
 * Calculators are not here. They are limited instead to calculations that are
 * safe unreviewed: quantities from the user's own inputs, formulas shown,
 * assumptions editable, and no Hagerstone rates or structural/statutory verdicts.
 * See "Publishing rule" in SEO-PROJECT-STATUS.md.
 */
export const REVIEW_REQUIRED: Collection[] = ["compliance", "cost"];

/** Collections whose pages must open with a `definition` (see superRefine). */
export const DEFINITION_REQUIRED: Collection[] = [
  "glossary",
  "compare",
  "guides",
  "insights",
  "industries",
  "estates",
  "materials",
  "facade",
  "interiors",
  "mep",
  "peb",
  "civil",
];

/** Full site path for a content entry. */
export const contentPath = (collection: Collection, slug: string): string =>
  `${COLLECTION_BASE_PATH[collection]}/${slug}`;
