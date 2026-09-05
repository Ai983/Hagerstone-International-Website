import { Link, useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { SITE_URL, type FaqItem } from "@/lib/seo";
import { getServiceCityByPath, getServiceCitiesForCity } from "@/lib/locationPages";
import { buildServiceCitySchema } from "@/lib/locationSchema";
import { getCityBySlug } from "@/data/cities";

const ServiceCity = () => {
  const { pathname } = useLocation();
  const page = getServiceCityByPath(pathname);

  if (!page) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find that service and city combination.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    );
  }

  const { service, city } = page;
  const canonical = `${SITE_URL}${page.path}`;
  const title = `${service.headTerm} in ${city.name}`;

  const nearbyCities = city.nearbyCitySlugs
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.published));

  const otherServices = getServiceCitiesForCity(city.slug).filter((p) => p.path !== page.path);

  const faqs: FaqItem[] = [
    {
      question: `Does Hagerstone provide ${service.label.toLowerCase()} in ${city.name}?`,
      answer: `Yes. Hagerstone delivers ${service.label.toLowerCase()} across ${city.name}, including ${city.districts
        .slice(0, 3)
        .join(", ")}. We coordinate design and execution from our Noida head office and mobilise dedicated site teams to ${city.name}.`,
    },
    {
      question: `Has Hagerstone completed projects in or near ${city.name}?`,
      answer:
        city.projects.length > 0
          ? `Yes — recent work in the ${city.name} area includes ${city.projects
              .map((p) => p.name)
              .slice(0, 3)
              .join(", ")}. ${city.marketNote}`
          : `We serve ${city.name} as part of our ${city.region} coverage, with delivery teams operating from our Noida head office. ${city.marketNote}`,
    },
    {
      question: `What does a ${service.label.toLowerCase()} engagement in ${city.name} include?`,
      answer: `${service.summary} Each ${city.name} project is scoped, quoted, and delivered as a single accountable package with defined milestones and handover documentation.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${title} – ${service.label} | Hagerstone`}
        description={`${service.headTerm} in ${city.name}: ${service.summary} Serving ${city.districts
          .slice(0, 3)
          .join(", ")} and across ${city.name}.`}
        canonical={canonical}
        keywords={service.keywordSeeds.map((k) => `${k} in ${city.name}`).join(", ")}
        structuredData={buildServiceCitySchema(service, city, canonical, faqs)}
      />

      <header className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link to={`/services/${service.parentServiceSlug}`} className="hover:text-white">
              {service.label}
            </Link>{" "}
            / <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Hagerstone provides {service.label.toLowerCase()} in {city.name} for {service.angle}.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Local context + deliverables */}
        <section className="grid lg:grid-cols-2 gap-10 mb-16">
          <article className="bg-card rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              {service.label} in {city.name}
            </h2>
            <p className="text-muted-foreground mb-6">{city.marketNote}</p>
            <p className="text-muted-foreground">{service.summary}</p>
          </article>
          <article className="bg-muted/40 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">What We Deliver</h2>
            <ul className="space-y-3 text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Local coverage */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Areas We Cover in {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {city.districts.map((d) => (
              <span
                key={d}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>
        </section>

        {/* Nearby project proof */}
        {city.projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Our Work in the {city.name} Area
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.projects.map((project) =>
                project.slug ? (
                  <Link
                    key={project.name}
                    to={`/projects/${project.slug}`}
                    className="block border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-1">{project.name}</h3>
                    {project.detail && (
                      <p className="text-sm text-muted-foreground">{project.detail}</p>
                    )}
                    <span className="mt-3 inline-flex text-sm font-medium text-accent">
                      View project →
                    </span>
                  </Link>
                ) : (
                  <div
                    key={project.name}
                    className="border border-border rounded-xl p-6 bg-card"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-1">{project.name}</h3>
                    {project.detail && (
                      <p className="text-sm text-muted-foreground">{project.detail}</p>
                    )}
                  </div>
                ),
              )}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {service.headTerm} in {city.name} — FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        {(otherServices.length > 0 || nearbyCities.length > 0) && (
          <section className="mb-16 grid md:grid-cols-2 gap-10">
            {otherServices.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Other Services in {city.name}
                </h2>
                <ul className="space-y-2">
                  {otherServices.map((p) => (
                    <li key={p.path}>
                      <Link to={p.path} className="text-accent hover:underline">
                        {p.service.headTerm} in {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {nearbyCities.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Nearby Cities</h2>
                <ul className="space-y-2">
                  {nearbyCities.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/locations/${c.slug}`} className="text-accent hover:underline">
                        {service.label} in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Planning {service.label.toLowerCase()} in {city.name}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Talk to our team for a tailored scope, timeline, and quotation for your {city.name}{" "}
            project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={`/services/${service.parentServiceSlug}`}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              About {service.label}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceCity;
