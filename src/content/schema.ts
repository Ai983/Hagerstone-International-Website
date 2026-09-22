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
  "design",
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
  // Deliberately not nested under /services/office-design-build: that page sells
  // the service, this section shows the work. Separate prefix, separate intent,
  // so the two do not compete for the same queries.
  design: "/office-design",
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

const faqSchema = z.object({
  question: z.string().min(10),
  answer: z.string().min(30),
});

/**
 * A gallery image. Structured rather than embedded in the MDX body so the build
 * can enforce alt text, verify the file against its declared dimensions, and
 * harvest every image into the image sitemap and ImageObject schema. A raw
 * <img> in a body can do none of that.
 *
 * `src` points at the 1600px variant. The 800px sibling is derived by
 * convention and its existence is checked by scripts/check-images.mjs, so the
 * gallery can emit a srcset without a second frontmatter field.
 */
const galleryImageSchema = z.object({
  src: z
    .string()
    .regex(
      /^\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+-1600\.webp$/,
      "must be /<section>/<slug>/<name>-1600.webp, all lowercase-kebab-case",
    ),
  /** Describes what is in the image, for screen readers and Google Images. */
  alt: z.string().min(15).max(160),
  /** Visible caption. Text near an image is what answer engines quote. */
  caption: z.string().min(10).max(200).optional(),
  /** Real intrinsic pixels, verified against the file, so nothing shifts on load. */
  width: z.number().int().positive().max(1600),
  height: z.number().int().positive().max(1600),
  /** Ties the image to a galleryGroups[].id. */
  group: z.string().regex(/^[a-z0-9-]+$/).optional(),
});

/** A headed section of the gallery, rendered in declaration order. */
const galleryGroupSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  heading: z.string().min(5).max(90),
  intro: z.string().min(30).max(600).optional(),
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

    /**
     * The short answer shown above the fold — required for glossary, and the
     * AEO device for every other collection that wants a quotable summary.
     */
    definition: z.string().max(400).optional(),

    /** Structured images, rendered after the body and harvested by the sitemap. */
    gallery: z.array(galleryImageSchema).max(12).default([]),
    /** Headings the gallery is grouped under. */
    galleryGroups: z.array(galleryGroupSchema).default([]),

    /**
     * Honesty gate for design studies. Decks are client proposals, so the
     * default is `concept` and the template says so on the page. `delivered`
     * asserts we actually built it, which is a project claim — see the
     * reviewedBy rule below.
     */
    designStage: z.enum(["concept", "delivered"]).default("concept"),
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

    // Every image must sit under a declared group, or it renders nowhere; every
    // group must have an image, or a heading renders with nothing under it.
    const groupIds = new Set(data.galleryGroups.map((group) => group.id));
    for (const image of data.gallery) {
      if (image.group && !groupIds.has(image.group)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["gallery"],
          message: `gallery image references unknown group "${image.group}"`,
        });
      }
    }
    for (const group of data.galleryGroups) {
      if (!data.gallery.some((image) => image.group === group.id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["galleryGroups"],
          message: `galleryGroups "${group.id}" has no images`,
        });
      }
    }

    // A design study is the drawings and the views. Without them it is a page
    // describing images nobody can see.
    if (
      data.status === "published" &&
      data.collection === "design" &&
      data.gallery.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["gallery"],
        message: "design pages require at least one gallery image before publishing",
      });
    }

    // "We built this" is a project claim, and the site has already published
    // one set of those wrongly. Same gate as compliance and cost.
    if (data.status === "published" && data.designStage === "delivered" && !data.reviewedBy) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["reviewedBy"],
        message: 'designStage "delivered" is a project claim — requires reviewedBy',
      });
    }
  });

export type Frontmatter = z.infer<typeof frontmatterSchema>;

/** Full site path for a content entry. */
export const contentPath = (collection: Collection, slug: string): string =>
  `${COLLECTION_BASE_PATH[collection]}/${slug}`;
