import { Link, useParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { SITE_URL, type FaqItem } from "@/lib/seo";
import { getCityBySlug } from "@/data/cities";
import { getServiceCitiesForCity } from "@/lib/locationPages";
import { buildCityHubSchema } from "@/lib/locationSchema";

const CityHub = () => {
  const { city: citySlug } = useParams();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city || !city.published) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Location not found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find a page for that city.
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

  const canonical = `${SITE_URL}/locations/${city.slug}`;
  const services = getServiceCitiesForCity(city.slug);

  const faqs: FaqItem[] = [
    {
      question: `What services does Hagerstone offer in ${city.name}?`,
      answer: `In ${city.name}, Hagerstone offers turnkey office design & build, interior fit-out, MEP, HVAC, civil construction, PEB, facade & glazing, and aluminium doors & windows — as an integrated design-build package delivered from our Noida head office.`,
    },
    {
      question: `Which areas of ${city.name} does Hagerstone cover?`,
      answer: `We cover all of ${city.name}, including ${city.districts.join(", ")}.`,
    },
    {
      question: `Has Hagerstone delivered projects in ${city.name}?`,
      answer:
        city.projects.length > 0
          ? `Yes — our ${city.name}-area work includes ${city.projects.map((p) => p.name).join(", ")}. ${city.marketNote}`
          : `We serve ${city.name} as part of our ${city.region} coverage. ${city.marketNote}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Office Interior & Fit-Out Company in ${city.name} | Hagerstone`}
        description={`Hagerstone is an office design & build company in ${city.name}, ${city.state} — interiors, MEP, HVAC, construction, PEB, and facade services. 11+ years, 7M+ sq. ft. delivered.`}
        canonical={canonical}
        keywords={`office interior design ${city.name}, interior fit out ${city.name}, office design and build ${city.name}, construction company ${city.name}`}
        structuredData={buildCityHubSchema(city, canonical, faqs)}
      />

      <header className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / <span className="text-white">Locations / {city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Office Design & Build Company in {city.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Turnkey office interiors, MEP, and construction across {city.name}, {city.state}.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="bg-card rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Your Design & Build Partner in {city.name}
          </h2>
          <p className="text-muted-foreground mb-4">{city.marketNote}</p>
          <p className="text-muted-foreground">
            As an integrated office design & build company, Hagerstone handles design, MEP,
            construction, and fit-out under one roof — giving {city.name} clients a single point of
            accountability from concept to handover.
          </p>
        </section>

        {/* Services in this city */}
        {services.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-6">Services in {city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="block border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {p.service.headTerm} in {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.service.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Local coverage */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">Areas We Cover</h2>
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

        {/* Project proof */}
        {city.projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Projects Delivered in the {city.name} Area
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
                  <div key={project.name} className="border border-border rounded-xl p-6 bg-card">
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
            Office Design & Build in {city.name} — FAQs
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Start your {city.name} project
          </h2>
          <p className="text-muted-foreground mb-6">
            Talk to our specialists for a tailored design, MEP, and fit-out roadmap in {city.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              View Our Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CityHub;
