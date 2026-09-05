import { cities, type City } from "@/data/cities";
import { localServices, type LocalService } from "@/data/localServices";

// The location matrix is the single source of truth for every programmatic
// local page — it drives the routes, the prerender list, and the sitemap.
// Pages exist only for published cities × published services, so the rollout is
// controlled by the `published` flags in cities.ts / localServices.ts.

export interface ServiceCityPage {
  /** Route path, e.g. "/office-interior-designers-in-gurugram". */
  path: string;
  service: LocalService;
  city: City;
}

export interface LocationMatrix {
  hubs: City[];
  serviceCities: ServiceCityPage[];
}

export const buildLocationMatrix = (): LocationMatrix => {
  const hubs = cities.filter((c) => c.published);
  const services = localServices.filter((s) => s.published);

  const serviceCities: ServiceCityPage[] = [];
  for (const city of hubs) {
    for (const service of services) {
      serviceCities.push({ path: `/${service.urlPrefix}-${city.slug}`, service, city });
    }
  }

  return { hubs, serviceCities };
};

/** Resolve a single-segment path to a service×city page (used by the route). */
export const getServiceCityByPath = (path: string): ServiceCityPage | undefined =>
  buildLocationMatrix().serviceCities.find((p) => p.path === path);

/** Published service×city pages for a given city (used for cross-linking). */
export const getServiceCitiesForCity = (citySlug: string): ServiceCityPage[] =>
  buildLocationMatrix().serviceCities.filter((p) => p.city.slug === citySlug);

/** Every location path — consumed by prerender.js and the sitemap generator. */
export const getLocationPrerenderPaths = (): string[] => {
  const { hubs, serviceCities } = buildLocationMatrix();
  return [
    ...hubs.map((c) => `/locations/${c.slug}`),
    ...serviceCities.map((p) => p.path),
  ];
};
