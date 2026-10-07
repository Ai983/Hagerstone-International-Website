/**
 * Video metadata and testimonials for SEO and display purposes
 */

export interface VideoMetadata {
  id: string;
  title: string;
  description: string;
  client: string;
  role: string;
  videoUrl: string;
  contentUrl: string; // Full URL for search engines
  thumbnailUrl: string;
  duration: string; // ISO 8601 format (e.g., "PT2M")
  uploadDate: string; // ISO 8601 format
  keywords: string[];
}

// Homepage hero video. Re-encoded from the 16.8 MB Supabase original
// (1080p, 9.8 Mbps, with an audio track it never plays) to VP9 without audio:
// 4.8 MB at 1080p, 2.4 MB at 720p for phones. Self-hosted because Supabase
// served it `no-cache`; vercel.json caches /hero/*.webm as immutable, so a
// replacement must get a new file name (-v3), never overwrite these.
export const homepageWalkthroughVideo = {
  id: "homepage-walkthrough",
  title: "Hagerstone Office Design & Build Walkthrough",
  description:
    "Walkthrough video showcasing Hagerstone International's office design and build expertise, modern workspace interiors, turnkey fit-out delivery, MEP coordination, and commercial interior solutions.",
  videoUrl: "/hero/walkthrough-v2-1080.webm",
  /** Served instead of videoUrl on screens up to 767px wide. */
  mobileVideoUrl: "/hero/walkthrough-v2-720.webm",
  contentUrl: "https://hagerstone.com/hero/walkthrough-v2-1080.webm",
  thumbnailUrl: "https://hagerstone.com/hero-images/office.avif",
  uploadDate: "2026-05-01T09:00:00+05:30",
  keywords: [
    "office design and build walkthrough",
    "office interior design",
    "workspace design",
    "turnkey fit-out",
    "commercial interior design",
    "MEP coordination",
    "Delhi NCR office design",
  ],
};

export const videos: VideoMetadata[] = [
  {
    id: "vst-united",
    title: "VST United Group - Office Interior Design Testimonial",
    description: "Professional office interior design and fit-out project by Hagerstone International for VST United Group. Corporate client testimonial showcasing our expertise in modern workspace design and execution for corporate clients in Delhi NCR.",
    client: "VST United Group",
    role: "Corporate Client",
    videoUrl: "/testimonials/VSTUnitedGroupVideo.webm",
    contentUrl: "https://hagerstone.com/testimonials/VSTUnitedGroupVideo.webm",
    thumbnailUrl: "https://hagerstone.com/hero-images/officeinterior.webp",
    duration: "PT2M",
    uploadDate: "2026-01-13T09:00:00+05:30",
    keywords: [
      "office design",
      "interior design",
      "corporate office",
      "testimonial",
      "fit-out",
      "Delhi office design",
      "commercial interior design",
      "workspace design",
    ],
  },
  {
    id: "cr63",
    title: "CR63 Premium Office Space - Interior Design Showcase",
    description: "CR63 premium office space project showcase by Hagerstone International. This project demonstrates our expertise in designing and constructing high-end commercial office spaces with modern architecture and premium finishes for corporate environments.",
    client: "CR63 - Premium Office Space",
    role: "Commercial Project",
    videoUrl: "/testimonials/CR63.webm",
    contentUrl: "https://hagerstone.com/testimonials/CR63.webm",
    thumbnailUrl: "https://hagerstone.com/hero-images/officeinterior.webp",
    duration: "PT2M",
    uploadDate: "2026-01-13T09:00:00+05:30",
    keywords: [
      "office design",
      "interior design",
      "commercial space",
      "premium office",
      "construction",
      "corporate office",
      "workplace design",
      "fit-out services",
    ],
  },
];

/**
 * Generate VideoObject schema markup for a video
 */
export const generateVideoObjectSchema = (video: VideoMetadata) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnailUrl],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.contentUrl,
  };
};

/**
 * Generate Organization schema with video collection
 */
export const generateOrganizationVideoSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hagerstone International",
    url: "https://hagerstone.com",
    logo: "https://hagerstone.com/logo.png",
    description: "Interior design, EPC construction, and MEP services for commercial and industrial projects",
    video: videos.map(generateVideoObjectSchema),
  };
};
