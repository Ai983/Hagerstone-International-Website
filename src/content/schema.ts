import { z } from "zod";

// Frontmatter contract for every file in src/content/.
//
// Validated at build time by scripts/build-content-index.mjs, so a malformed or
// half-finished draft fails the build rather than reaching Search Console.
//
// The load-bearing field is `status`. Only 'published' entries reach the route
// registry, the prerender list and the sitemap — which means drafts can be
// committed freely and reviewed at whatever pace the team can manage, with no
// risk of unreviewed content going live.

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
] as const;

export type Collection = (typeof COLLECTIONS)[number];

/** URL prefix per collection. The slug is appended to this. */
export const COLLECTION_BASE_PATH: Record<Collection, string> = {
  insights: "/insights",
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
  "facade",
  "interiors",
  "mep",
  "peb",
  "civil",
];

/** Collections where being wrong carries real professional risk. */
export const REVIEW_REQUIRED: Collection[] = ["compliance", "cost", "calculators"];

const faqSchema = z.object({
  question: z.string().min(10),
  answer: z.string().min(30),
});

const citationSchema = z.object({
  /** Display label, e.g. "NBC 2016, Part 4". */
  label: z.string().min(3),
  /** Clause or section, e.g. "Cl. 4.3.2". */
  clause: z.string().optional(),
  url: z.string().url().optional(),
});

export const frontmatterSchema = z
  .object({
    title: z.string().min(10).max(90),
    /** <title> tag. Google truncates around 60 characters. */
    metaTitle: z.string().min(10).max(65),
    /** Meta description. Under 70 chars gets ignored, over 160 gets cut. */
    metaDescription: z.string().min(70).max(165),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be lowercase-kebab-case"),
    collection: z.enum(COLLECTIONS),

    status: z.enum(["draft", "review", "published"]).default("draft"),
    /** Name of the Hagerstone expert who checked this. */
    reviewedBy: z.string().optional(),
    reviewedOn: z.string().date().optional(),

    publishedOn: z.string().date(),
    updatedOn: z.string().date().optional(),

    author: z.string().default("Dhruv Agarwal"),

    heroImage: z.string().optional(),
    heroImageAlt: z.string().min(10).optional(),

    /** Rendered as an accordion and emitted as FAQPage schema. */
    faqs: z.array(faqSchema).default([]),
    /** Slugs of related content, for internal linking. */
    related: z.array(z.string()).default([]),

    primaryKeyword: z.string().min(3),
    keywords: z.array(z.string()).default([]),

    /** Standards cited in the body — the E-E-A-T signal that matters most here. */
    citations: z.array(citationSchema).default([]),

    /** Glossary only: the one-sentence definition shown above the fold. */
    definition: z.string().max(400).optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    // A hero image without alt text is an accessibility and SEO defect.
    if (data.heroImage && !data.heroImageAlt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["heroImageAlt"],
        message: "heroImageAlt is required whenever heroImage is set",
      });
    }

    // Glossary entries lead with a definition; without it the template has no
    // above-the-fold answer and the page reads as thin.
    if (data.collection === "glossary" && !data.definition) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["definition"],
        message: "glossary entries require a `definition`",
      });
    }

    // The human-review gate. Publishing compliance or cost guidance that no
    // named expert has checked is the single most damaging thing this system
    // could do, so the build refuses it outright.
    if (
      data.status === "published" &&
      REVIEW_REQUIRED.includes(data.collection) &&
      !data.reviewedBy
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["reviewedBy"],
        message: `${data.collection} content requires reviewedBy before it can be published`,
      });
    }
  });

export type Frontmatter = z.infer<typeof frontmatterSchema>;

/** Full site path for a content entry. */
export const contentPath = (collection: Collection, slug: string): string =>
  `${COLLECTION_BASE_PATH[collection]}/${slug}`;
