import {
  BRAND_NAME,
  HAGERSTONE_ADDRESS,
  SITE_URL,
  buildFaqSchema,
  buildSchemaGraph,
  organizationSchema,
  type FaqItem,
} from "@/lib/seo";
import type { City } from "@/data/cities";
import type { LocalService } from "@/data/localServices";

export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const cityProvider = (city: City) => ({
  "@type": "LocalBusiness",
  name: BRAND_NAME,
  telephone: "+91-88829-79328",
  address: HAGERSTONE_ADDRESS,
  areaServed: { "@type": "City", name: city.name },
});

export const buildServiceCitySchema = (
  service: LocalService,
  city: City,
  canonical: string,
  faqs: FaqItem[],
) =>
  buildSchemaGraph([
    organizationSchema,
    {
      "@type": "Service",
      serviceType: service.label,
      name: `${service.headTerm} in ${city.name}`,
      url: canonical,
      areaServed: { "@type": "City", name: city.name },
      provider: cityProvider(city),
      description: service.summary,
    },
    buildBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: service.label, url: `${SITE_URL}/services/${service.parentServiceSlug}` },
      { name: `${service.headTerm} in ${city.name}`, url: canonical },
    ]),
    buildFaqSchema(faqs),
  ]);

export const buildCityHubSchema = (city: City, canonical: string, faqs: FaqItem[]) =>
  buildSchemaGraph([
    organizationSchema,
    {
      "@type": "LocalBusiness",
      name: `${BRAND_NAME} — ${city.name}`,
      url: canonical,
      telephone: "+91-88829-79328",
      address: HAGERSTONE_ADDRESS,
      areaServed: { "@type": "City", name: city.name },
      description: `Office design & build, interiors, MEP, and turnkey fit-out services in ${city.name}, ${city.state}.`,
    },
    buildBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Locations", url: `${SITE_URL}/locations/${city.slug}` },
      { name: city.name, url: canonical },
    ]),
    buildFaqSchema(faqs),
  ]);
