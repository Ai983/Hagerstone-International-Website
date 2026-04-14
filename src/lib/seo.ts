export const SITE_URL = "https://hagerstone.com";
export const BRAND_NAME = "Hagerstone International Pvt. Ltd.";

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

export const buildSchemaGraph = (items: Array<Record<string, unknown>>) => ({
  "@context": "https://schema.org",
  "@graph": items,
});

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
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
