import { SITE_URL } from "@/lib/seo";
import { projects } from "@/data/project";
import { videos, homepageWalkthroughVideo } from "@/data/videos";
import { contentIndex } from "@/content/.generated/index";
import { COLLECTION_BASE_PATH, COLLECTIONS, type Collection } from "@/content/schema";

// Build-time generators for the image and video sitemaps + the sitemap index.
// They read the same TypeScript data the site renders from, so the sitemaps can
// never drift from the actual project portfolio / embedded videos. prerender.js
// writes the output into dist/ during the build (see build:prerender).

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Root-relative asset paths are served from hagerstone.com; absolute CDN URLs
// (Supabase storage) are already fully qualified and pass through untouched.
const toAbsoluteUrl = (src: string): string =>
  /^https?:\/\//i.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;

const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';

interface SitemapImage {
  loc: string;
  /** Google reads only <image:loc>; Bing still parses the rest. */
  title?: string;
  caption?: string;
}

interface ImageSitemapEntry {
  pageUrl: string;
  images: SitemapImage[];
}

/** A group of pages that carry images. One per data source. */
type ImageSitemapSource = () => ImageSitemapEntry[];

/** Portfolio images, grouped by project page. */
const projectImageSource: ImageSitemapSource = () =>
  projects.map((project) => ({
    pageUrl: `${SITE_URL}/projects/${project.id}`,
    images: [
      ...(project.hero ? [{ loc: project.hero, title: project.heroAlt }] : []),
      ...project.sections.flatMap((section) =>
        (section.images ?? []).map((img) => ({
          loc: img.src,
          title: img.alt,
          caption: img.caption,
        })),
      ),
    ],
  }));

/**
 * Hero and gallery images from every published MDX page — /our-designs today,
 * any collection that adopts `gallery` later. The alt text and caption come from
 * frontmatter, where the schema already guarantees they exist.
 */
const contentImageSource: ImageSitemapSource = () =>
  contentIndex.map((entry) => ({
    pageUrl: `${SITE_URL}${entry.path}`,
    images: [
      ...(entry.heroImage
        ? [{ loc: entry.heroImage, title: entry.heroImageAlt ?? entry.title }]
        : []),
      ...entry.gallery.map((image) => ({
        loc: image.src,
        title: image.alt,
        caption: image.caption,
      })),
    ],
  }));

/** Image sitemap — every page that has images, with the images it has. */
export const buildImageSitemapXml = (
  sources: ImageSitemapSource[] = [projectImageSource, contentImageSource],
): string => {
  const blocks = sources
    .flatMap((source) => source())
    .map((entry) => {
      // Dedupe within a page; a hero often repeats inside the gallery.
      const seen = new Set<string>();
      const images = entry.images
        .map((image) => ({ ...image, loc: toAbsoluteUrl(image.loc) }))
        .filter((image) => {
          if (seen.has(image.loc)) return false;
          seen.add(image.loc);
          return true;
        });
      return { ...entry, images };
    })
    // A page with no images would emit an empty <url> block, which is invalid.
    .filter((entry) => entry.images.length > 0)
    .map((entry) => {
      const images = entry.images
        .map((image) =>
          [
            "    <image:image>",
            `      <image:loc>${escapeXml(image.loc)}</image:loc>`,
            image.title ? `      <image:title>${escapeXml(image.title)}</image:title>` : null,
            image.caption
              ? `      <image:caption>${escapeXml(image.caption)}</image:caption>`
              : null,
            "    </image:image>",
          ]
            .filter(Boolean)
            .join("\n"),
        )
        .join("\n");

      return `  <url>\n    <loc>${escapeXml(entry.pageUrl)}</loc>\n${images}\n  </url>`;
    });

  return `${XML_HEADER}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${blocks.join("\n")}\n</urlset>\n`;
};

interface VideoEntry {
  title: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  publicationDate?: string;
}

const renderVideo = (video: VideoEntry): string => {
  const lines = [
    "    <video:video>",
    `      <video:thumbnail_loc>${escapeXml(toAbsoluteUrl(video.thumbnailUrl))}</video:thumbnail_loc>`,
    `      <video:title>${escapeXml(video.title)}</video:title>`,
    `      <video:description>${escapeXml(video.description)}</video:description>`,
    `      <video:content_loc>${escapeXml(toAbsoluteUrl(video.contentUrl))}</video:content_loc>`,
  ];
  if (video.publicationDate) {
    lines.push(`      <video:publication_date>${escapeXml(video.publicationDate)}</video:publication_date>`);
  }
  lines.push("    </video:video>");
  return lines.join("\n");
};

/** Video sitemap — homepage walkthrough + testimonials, plus project walkthroughs. */
export const buildVideoSitemapXml = (): string => {
  const homepageVideos: VideoEntry[] = [
    {
      title: homepageWalkthroughVideo.title,
      description: homepageWalkthroughVideo.description,
      thumbnailUrl: homepageWalkthroughVideo.thumbnailUrl,
      contentUrl: homepageWalkthroughVideo.contentUrl,
      publicationDate: homepageWalkthroughVideo.uploadDate,
    },
    ...videos.map((video) => ({
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      contentUrl: video.contentUrl,
      publicationDate: video.uploadDate,
    })),
  ];

  const blocks: string[] = [
    `  <url>\n    <loc>${escapeXml(`${SITE_URL}/`)}</loc>\n${homepageVideos.map(renderVideo).join("\n")}\n  </url>`,
  ];

  for (const project of projects) {
    if (!project.heroVideo) continue;
    const entry: VideoEntry = {
      title: `${project.title} — Project Walkthrough`,
      description: project.summary,
      thumbnailUrl: project.hero,
      contentUrl: project.heroVideo,
    };
    blocks.push(
      `  <url>\n    <loc>${escapeXml(`${SITE_URL}/projects/${project.id}`)}</loc>\n${renderVideo(entry)}\n  </url>`,
    );
  }

  return `${XML_HEADER}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${blocks.join("\n")}\n</urlset>\n`;
};

/**
 * Priority and change frequency by URL shape.
 *
 * Replaces the hand-tuned values in the old public/sitemap.xml. Deriving them
 * from the path means a new page is scored automatically instead of being
 * forgotten — the previous file had to be edited by hand for every addition and
 * would have drifted the moment content started scaling.
 */
const sitemapWeight = (path: string): { priority: string; changefreq: string } => {
  if (path === "/") return { priority: "1.0", changefreq: "weekly" };
  if (path.startsWith("/services")) return { priority: "0.9", changefreq: "monthly" };
  if (path.startsWith("/projects")) return { priority: "0.8", changefreq: "monthly" };
  // Design studies carry the portfolio proof buyers look for, so they rank
  // alongside projects rather than with reference content.
  if (path.startsWith("/our-designs")) return { priority: "0.8", changefreq: "monthly" };
  if (path.startsWith("/locations") || path.includes("-in-"))
    return { priority: "0.8", changefreq: "monthly" };
  if (path.startsWith("/insights") || path.startsWith("/blog"))
    return { priority: "0.7", changefreq: "monthly" };
  if (path.startsWith("/glossary") || path.startsWith("/materials"))
    return { priority: "0.6", changefreq: "yearly" };
  return { priority: "0.7", changefreq: "monthly" };
};

/**
 * URL sitemap, generated from the same route list prerender.js iterates.
 *
 * public/sitemap.xml used to hold this by hand. Because Vite copies publicDir
 * last, that file would silently overwrite this one in dist/ — so it must be
 * deleted, not merely left unused.
 */
export const buildUrlSitemapXml = (paths: string[], lastmod: string): string => {
  const entries = [...new Set(paths)].sort().map((path) => {
    const { priority, changefreq } = sitemapWeight(path);
    return [
      "  <url>",
      `    <loc>${escapeXml(`${SITE_URL}${path === "/" ? "/" : path}`)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  });

  return `${XML_HEADER}\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
};

/** Sitemap index referencing the URL, image, and video sitemaps. */
export const buildSitemapIndexXml = (lastmod: string): string => {
  const entries = ["sitemap.xml", "sitemap-images.xml", "sitemap-videos.xml"]
    .map(
      (file) =>
        `  <sitemap>\n    <loc>${SITE_URL}/${file}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    )
    .join("\n");

  return `${XML_HEADER}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;
};

/** Human-readable section names for llms.txt, keyed by collection. */
const COLLECTION_HEADING: Record<Collection, string> = {
  design: "Our Designs",
  insights: "Insights",
  glossary: "Glossary",
  compliance: "Compliance & Approvals",
  materials: "Materials",
  compare: "Comparisons",
  cost: "Costs & Benchmarks",
  guides: "Guides",
  architects: "For Architects",
  calculators: "Calculators",
  facade: "Facade & Glazing Services",
  interiors: "Interior Fit-Out Services",
  mep: "MEP Services",
  peb: "PEB Services",
  civil: "Construction Services",
  estates: "Business Districts & Estates",
  industries: "Industries",
};

/**
 * llms.txt — the plain-text map AI answer engines read.
 *
 * Generated rather than hand-written. The static public/llms.txt it replaces
 * listed 13 pages out of 235, and carried company statistics that contradict
 * the website itself (500+ vs 250+ projects, 7.9M vs 7,91,433 sq ft). Deriving
 * it from the content index means it cannot go stale, and the disputed numbers
 * stay out until someone confirms them.
 *
 * `paths` is the same route list prerender.js renders, so nothing is listed that
 * does not exist.
 */
export const buildLlmsTxt = (paths: string[]): string => {
  const known = new Set(paths);
  const lines: string[] = [];

  lines.push("# Hagerstone International");
  lines.push("");
  lines.push(
    "> Hagerstone International is a turnkey office design and build company based in " +
      "Noida, India, working across Delhi NCR and cities in north and west India. The firm " +
      "delivers interiors, MEP, facades, pre-engineered buildings and civil construction " +
      "under a single contract, and publishes its own design work, technical references and " +
      "material guides on this site.",
  );
  lines.push("");

  const core: Array<[string, string]> = [
    ["/", "Services, portfolio and capabilities"],
    ["/about", "Company history, team and credentials"],
    ["/services", "Full service portfolio"],
    ["/services/office-design-build", "Turnkey office design and build"],
    ["/services/interior-fit-out", "Commercial interior fit-out"],
    ["/services/mep", "Mechanical, electrical and plumbing"],
    ["/services/hvac", "HVAC design and installation"],
    ["/services/facade-glazing", "Facade, glazing and cladding"],
    ["/services/peb", "Pre-engineered buildings"],
    ["/services/construction", "Civil and industrial construction"],
    ["/projects", "Completed project portfolio"],
    ["/our-designs", "Our own design work: layout options, plans and 3D views across commercial and residential projects"],
    ["/blog", "Articles on office design and building services"],
    ["/our-team", "Leadership and team"],
    ["/contact", "Enquiries and consultations"],
  ];

  lines.push("## Key Pages");
  lines.push("");
  for (const [path, note] of core) {
    if (known.has(path)) lines.push(`- [${path}](${SITE_URL}${path}): ${note}`);
  }
  lines.push("");

  // One section per collection that has published pages. Each page gets its own
  // above-the-fold summary where it has one, since that is the line an answer
  // engine is most likely to quote.
  //
  // Ordered by commercial weight rather than by the COLLECTIONS array, so the
  // sections a buyer cares about come first in the file.
  const sectionOrder: Collection[] = [
    "design",
    "insights",
    "guides",
    "cost",
    "compare",
    "materials",
    "glossary",
    "compliance",
    "calculators",
    "architects",
    "interiors",
    "facade",
    "mep",
    "peb",
    "civil",
    "estates",
    "industries",
  ];
  const orderedCollections = [
    ...sectionOrder,
    ...COLLECTIONS.filter((collection) => !sectionOrder.includes(collection)),
  ];

  for (const collection of orderedCollections) {
    const entries = contentIndex.filter((entry) => entry.collection === collection);
    if (entries.length === 0) continue;

    lines.push(`## ${COLLECTION_HEADING[collection]}`);
    lines.push("");
    const indexPath = COLLECTION_BASE_PATH[collection];
    if (known.has(indexPath)) lines.push(`- [${indexPath}](${SITE_URL}${indexPath}): index`);
    for (const entry of entries) {
      const summary = entry.definition ?? entry.metaDescription;
      lines.push(`- [${entry.title}](${SITE_URL}${entry.path}): ${summary}`);
    }
    lines.push("");
  }

  const locationPaths = paths.filter((path) => path.startsWith("/locations/")).sort();
  if (locationPaths.length > 0) {
    lines.push("## Locations");
    lines.push("");
    for (const path of locationPaths) {
      const city = path.replace("/locations/", "").replace(/-/g, " ");
      lines.push(`- [${city}](${SITE_URL}${path})`);
    }
    lines.push("");
  }

  lines.push("## Key Facts");
  lines.push("");
  lines.push("- Founded: 2013");
  lines.push("- Founder: Dhruv Agarwal");
  lines.push("- Head office: Noida, Uttar Pradesh, India");
  lines.push("- Services: interiors, MEP, HVAC, facade and glazing, PEB, civil construction");
  lines.push("- Director – Facade: Akhilesh Kumar Singh");
  lines.push("- Certifications: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018");
  lines.push("");
  lines.push("## Social Profiles");
  lines.push("");
  lines.push("- LinkedIn: https://www.linkedin.com/company/hagerstone");
  lines.push("- Instagram: https://www.instagram.com/hagerstone_international/");
  lines.push("- Facebook: https://www.facebook.com/HagerstoneInternational");
  lines.push("- YouTube: https://www.youtube.com/channel/UCvl0bmeUgX6LvzQYcR-HHIw");
  lines.push("- Crunchbase: https://www.crunchbase.com/organization/hagerstone-international");
  lines.push("");

  return `${lines.join("\n")}`;
};
