export const SITE_URL = "https://hagerstone.com";
export const BRAND_NAME = "Hagerstone International Pvt. Ltd.";
// Short form for <title> tags — the full legal name pushes titles past
// Google's ~60-char display limit and gets truncated mid-word in results.
export const SHORT_BRAND_NAME = "Hagerstone";

export const organizationSchema = {
  "@type": "Organization",
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Office design & build company delivering modern office interiors, MEP, HVAC, EPC, and turnkey fit-out services across India.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-88829-79328",
    contactType: "Sales",
    email: "ea@hagerstone.com",
    areaServed: "IN",
  },
  sameAs: [
    "https://www.instagram.com/hagerstone_international/",
    "https://www.facebook.com/HagerstoneInternational",
    "https://www.linkedin.com/company/14708271/",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  name: "Hagerstone International",
  url: SITE_URL,
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

export const createImageObject = (url: string, name: string) => ({
  "@type": "ImageObject",
  contentUrl: url,
  name,
  creator: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  creditText: "Hagerstone International",
  copyrightNotice: "© 2026 Hagerstone International",
  acquireLicensePage: `${SITE_URL}/contact`,
  license: `${SITE_URL}/contact`,
});
