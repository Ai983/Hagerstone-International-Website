import { SAME_AS } from "@/lib/social";

export const SITE_URL = "https://hagerstone.com";
export const BRAND_NAME = "Hagerstone International Pvt. Ltd.";
// Short form for <title> tags — the full legal name pushes titles past
// Google's ~60-char display limit and gets truncated mid-word in results.
export const SHORT_BRAND_NAME = "Hagerstone";

// Stable identifiers for the company and the site. Every page emits the same
// Organization under this @id, and other nodes (the WebSite, article
// publishers) point at it, so search engines read one company rather than a
// separate unnamed Organization per page.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Reusable postal address (HQ) used by the Organization and LocalBusiness schema.
export const HAGERSTONE_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "91springboard, D-107, D Block, Sector 2",
  addressLocality: "Noida",
  addressRegion: "Uttar Pradesh",
  postalCode: "201301",
  addressCountry: "IN",
};

// The one Organization node.
//
// The address, founders and headcount below were previously emitted only on
// /about, in a second Organization node with no @id — so that page described
// the company twice and every other page described a thinner version of it.
// They are consolidated here unchanged. `foundingDate` is deliberately left out:
// the site states 2014 on /about and 2013 in llms.txt, so /about keeps its own
// value (About.tsx) rather than one being spread sitewide.
export const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Office design & build company delivering modern office interiors, MEP, HVAC, EPC, and turnkey fit-out services across India.",
  address: HAGERSTONE_ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-88829-79328",
    contactType: "Sales",
    email: "ea@hagerstone.com",
    areaServed: "IN",
  },
  founder: [
    {
      "@type": "Person",
      name: "Dhruv Agarwal",
      jobTitle: "Founder & Managing Director",
      image: `${SITE_URL}/founders/dhruvsir.png`,
      description:
        "Civil Engineer from Delhi College of Engineering with over 10 million sq ft of projects delivered across UAE, Myanmar, and India.",
    },
    {
      "@type": "Person",
      name: "Bhaskar Tyagi",
      jobTitle: "Director - Operations",
      image: `${SITE_URL}/founders/bhaskarsir.png`,
      description:
        "Director with 16+ years of experience in hospitality industry specializing in interior design.",
    },
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 350,
  },
  sameAs: SAME_AS,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Hagerstone International",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

// Named author used across blog post schema so articles carry a real,
// credentialed byline (E-E-A-T) instead of the Organization as author.
export const AUTHOR_NAME = "Dhruv Agarwal";
export const AUTHOR_ROLE = "Founder & Managing Director, Hagerstone International";

export const AUTHOR_PROFILE_PATH = "/about#dhruv-agarwal";

export const authorSchema = {
  "@type": "Person",
  name: AUTHOR_NAME,
  jobTitle: AUTHOR_ROLE,
  url: `${SITE_URL}${AUTHOR_PROFILE_PATH}`,
  worksFor: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
  },
};

export const buildSchemaGraph = (items: Array<Record<string, unknown>>) => ({
  "@context": "https://schema.org",
  "@graph": items,
});

export type FaqItem = { question: string; answer: string };

export const buildFaqSchema = (items: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export interface ImageObjectExtras {
  /** Visible caption. Google reads it, and answer engines quote it. */
  caption?: string;
  width?: number;
  height?: number;
  /** The page the image appears on, so credit attaches to the right URL. */
  pageUrl?: string;
  representativeOfPage?: boolean;
}

export const createImageObject = (
  url: string,
  name: string,
  extra?: ImageObjectExtras,
) => ({
  "@type": "ImageObject",
  contentUrl: url,
  ...(extra?.pageUrl ? { url: extra.pageUrl } : {}),
  name,
  ...(extra?.caption ? { caption: extra.caption, description: extra.caption } : {}),
  ...(extra?.width ? { width: extra.width } : {}),
  ...(extra?.height ? { height: extra.height } : {}),
  ...(extra?.representativeOfPage ? { representativeOfPage: true } : {}),
  creator: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  creditText: "Hagerstone International",
  copyrightNotice: "© 2026 Hagerstone International",
  acquireLicensePage: `${SITE_URL}/contact`,
  license: `${SITE_URL}/contact`,
});

/**
 * ImageGallery for a page whose images carry as much meaning as its text.
 *
 * Each image is a licensed ImageObject with its caption, which is what makes
 * the set eligible for the Licensable badge in Google Images and gives answer
 * engines something attributable to cite.
 */
export const buildImageGallerySchema = (opts: {
  id: string;
  name: string;
  url: string;
  images: Array<{
    contentUrl: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  }>;
}) => ({
  "@type": "ImageGallery",
  "@id": opts.id,
  name: opts.name,
  url: opts.url,
  associatedMedia: opts.images.map((image) =>
    createImageObject(image.contentUrl, image.alt, {
      caption: image.caption,
      width: image.width,
      height: image.height,
      pageUrl: opts.url,
    }),
  ),
});

// LocalBusiness schema — the single most important structured-data block for
// local SEO. Previously hardcoded in index.html but stripped by the Vite build;
// emitted here via Helmet so it prerenders on the homepage (and seeds the
// per-city LocalBusiness graphs added for location pages).
export const localBusinessSchema = {
  "@type": "LocalBusiness",
  name: BRAND_NAME,
  image: `${SITE_URL}/logo.png`,
  url: `${SITE_URL}/`,
  telephone: "+91-88829-79328",
  email: "ea@hagerstone.com",
  address: HAGERSTONE_ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.583621",
    longitude: "77.316563",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  areaServed: ["Delhi", "Noida", "Gurugram", "Greater Noida", "Faridabad"].map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: organizationSchema.sameAs,
  description:
    "Leading office design & build company in Delhi NCR specializing in modern office interior design, MEP design, interior fit out services, and commercial interior design projects. 11+ years experience, 7M+ sqft delivered.",
};

// Primary service schema for the homepage.
export const officeDesignBuildServiceSchema = {
  "@type": "Service",
  serviceType: "Office Design & Build",
  provider: {
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    telephone: "+91-88829-79328",
    address: HAGERSTONE_ADDRESS,
  },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete office design & build services including modern office interior design, MEP design, interior fit out, and office workspace design for corporate and commercial spaces.",
};
