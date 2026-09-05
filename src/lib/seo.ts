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

// Reusable postal address (HQ) used by LocalBusiness schema across pages.
export const HAGERSTONE_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "91springboard, D-107, D Block, Sector 2",
  addressLocality: "Noida",
  addressRegion: "Uttar Pradesh",
  postalCode: "201301",
  addressCountry: "IN",
};

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
