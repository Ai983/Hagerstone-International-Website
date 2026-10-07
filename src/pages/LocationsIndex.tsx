import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs, breadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { buildLocationMatrix } from "@/lib/locationPages";
import { SITE_URL, buildSchemaGraph, organizationSchema } from "@/lib/seo";
import type { City } from "@/data/cities";

// /locations: every published city page in one place, grouped by region.
//
// The parent the city breadcrumbs point at (it used to be plain text), and the
// one page that links to every city. Built from the same published list as the
// routes, prerender and sitemap, so a city appears here exactly when its page
// is live.

const REGION_ORDER: City["region"][] = [
  "NCR",
  "North India",
  "West India",
  "Central India",
  "South India",
];

const CRUMBS: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
];

const LocationsIndex = () => {
  const { hubs } = buildLocationMatrix();
  const canonical = `${SITE_URL}/locations`;
  const regions = REGION_ORDER.map((region) => ({
    region,
    cities: hubs.filter((city) => city.region === region).sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((group) => group.cities.length > 0);

  const schema = buildSchemaGraph([
    organizationSchema,
    {
      "@type": "CollectionPage",
      name: "Locations we serve",
      url: canonical,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: hubs.map((city, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: city.name,
          url: `${SITE_URL}/locations/${city.slug}`,
        })),
      },
    },
    breadcrumbSchema(CRUMBS),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Locations: Office Design & Build Across India | Hagerstone"
        description="City pages for Hagerstone's office interiors, MEP, facade and construction work, with each city's business districts and local approval authorities."
        canonical={canonical}
        structuredData={schema}
      />

      <header className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={CRUMBS} tone="onDark" className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locations We Serve</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Office design & build, interiors, MEP and construction, delivered from our Noida head
            office. Each city page covers its business districts and the approval authorities a
            project there has to clear.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {regions.map(({ region, cities }) => (
          <section key={region} className="mb-14">
            <h2 className="text-2xl font-semibold text-primary mb-6">{region}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="block border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition"
                >
                  <h3 className="text-lg font-semibold text-primary mb-1">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{city.state}</p>
                  <p className="text-sm text-muted-foreground">{city.districts.slice(0, 3).join(" · ")}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">Your city not listed?</h2>
          <p className="text-muted-foreground mb-6">
            Tell us where the site is and what you are planning, and our team will come back to you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Talk to Us
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LocationsIndex;
