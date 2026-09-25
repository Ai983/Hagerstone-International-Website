import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { contentIndex } from "@/content/.generated";

// One list for the /blog listing page, merged from the two ways an article can
// exist on this site.
//
// The 16 original posts are React pages in src/pages/blog/, each needing an
// entry in blogPosts.ts plus a <Route> in BOTH App.tsx and ServerApp.tsx. That
// fourth step is the one that has shipped 404s to Google twice, and it does not
// scale to the article volume this site is aiming at.
//
// New articles are MDX in src/content/insights/, which the `insights` collection
// serves under /blog. One file, no router edits, frontmatter validated by the
// build. React Router ranks the static /blog/<slug> routes above the collection's
// /blog/:slug pattern, so the two coexist and the legacy posts keep working.
//
// Without this merge an MDX article would be an orphan — in the sitemap but
// linked from nowhere, which Google heavily discounts.

/** What a listing card needs, regardless of which system the article came from. */
export type BlogListItem = {
  key: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Legacy posts always have one; MDX articles may not, so cards must cope. */
  image?: string;
  imageAlt?: string;
  author: string;
  /** Display string, e.g. "September 22, 2026". */
  date: string;
  /** Sort key — an ISO date. Kept separate because `date` is for humans. */
  sortDate: string;
  readTime: string;
  category: string;
  featured: boolean;
};

const DISPLAY_DATE = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * Legacy posts store `date` as free text ("September 22, 2026"), which sorts
 * incorrectly as a string. Parse it where possible and fall back to the raw
 * value, so an unparseable date sinks rather than throwing.
 */
const toSortDate = (value: string): string => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
};

const fromLegacyPost = (post: BlogPost): BlogListItem => ({
  key: `legacy-${post.slug}`,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  image: post.image,
  imageAlt: post.imageAlt || post.title,
  author: post.author,
  date: post.date,
  sortDate: toSortDate(post.date),
  readTime: post.readTime,
  category: post.category,
  featured: post.featured === true,
});

const fromContentEntry = (
  entry: (typeof contentIndex)[number],
): BlogListItem => ({
  key: `mdx-${entry.slug}`,
  slug: entry.slug,
  title: entry.title,
  // `definition` is the page's above-the-fold answer and reads better as a card
  // summary than the meta description, which is written for a search result.
  excerpt: entry.definition ?? entry.metaDescription,
  image: entry.heroImage,
  imageAlt: entry.heroImageAlt ?? entry.title,
  author: entry.author,
  date: DISPLAY_DATE.format(new Date(entry.publishedOn)),
  sortDate: entry.publishedOn,
  readTime: `${entry.readingMinutes} min read`,
  category: "Insights",
  featured: false,
});

/** Every article under /blog, newest first. */
export const getBlogListItems = (): BlogListItem[] =>
  [
    ...blogPosts.map(fromLegacyPost),
    ...contentIndex
      .filter((entry) => entry.collection === "insights")
      .map(fromContentEntry),
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

/**
 * The hero article. Honours an explicitly featured legacy post, otherwise the
 * newest article of either kind.
 */
export const getFeaturedBlogItem = (): BlogListItem | undefined => {
  const items = getBlogListItems();
  return items.find((item) => item.featured) ?? items[0];
};

/** 3 columns × 4 rows. */
export const POSTS_PER_PAGE = 12;

export const getBlogPageCount = (): number =>
  Math.max(1, Math.ceil(getBlogListItems().length / POSTS_PER_PAGE));

/**
 * Listing URLs, including every pagination page.
 *
 * Pagination has to live in the path, not in a `?page=` query string. The site
 * is prerendered to static files, and a query string cannot be a static file —
 * so with query pagination the static /blog only ever links the first twelve
 * articles, and everything beyond page one is orphaned in the HTML crawlers
 * actually read. At the article volume this section is aiming at, that would
 * orphan almost all of it.
 */
export const getBlogListingPaths = (): string[] => [
  "/blog",
  ...Array.from({ length: getBlogPageCount() - 1 }, (_, i) => `/blog/page/${i + 2}`),
];
