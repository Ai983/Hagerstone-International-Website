import { SITE_URL } from "@/lib/seo";
import { projects } from "@/data/project";
import { videos, homepageWalkthroughVideo } from "@/data/videos";

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

/** Image sitemap — every project portfolio image grouped under its project page. */
export const buildImageSitemapXml = (): string => {
  const blocks = projects.map((project) => {
    const pageUrl = `${SITE_URL}/projects/${project.id}`;
    const sources = [
      project.hero,
      ...project.sections.flatMap((section) => section.images?.map((img) => img.src) ?? []),
    ].filter((src): src is string => Boolean(src));

    const images = [...new Set(sources.map(toAbsoluteUrl))]
      .map((loc) => `    <image:image>\n      <image:loc>${escapeXml(loc)}</image:loc>\n    </image:image>`)
      .join("\n");

    return `  <url>\n    <loc>${escapeXml(pageUrl)}</loc>\n${images}\n  </url>`;
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
