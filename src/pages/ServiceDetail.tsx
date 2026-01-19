import { Link, useParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { getServicePageBySlug, servicePages } from "@/data/servicePages";
import {
  BRAND_NAME,
  SITE_URL,
  buildSchemaGraph,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServicePageBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The service page you are looking for does not exist. Explore our main services
            or contact us for a tailored solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => servicePages.find((page) => page.slug === relatedSlug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`${SITE_URL}/services/${service.slug}`}
        keywords={service.keywords.join(", ")}
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "WebPage",
            name: service.title,
            url: `${SITE_URL}/services/${service.slug}`,
            description: service.metaDescription,
          },
          {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            provider: {
              "@type": "Organization",
              name: BRAND_NAME,
              url: SITE_URL,
            },
            areaServed: "IN",
            serviceType: service.title,
          },
        ])}
      />

      <header className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.h1}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            {service.summary}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="grid lg:grid-cols-2 gap-10 mb-16">
          <article className="bg-card rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              What We Deliver
            </h2>
            <p className="text-muted-foreground mb-6">{service.summary}</p>
            <ul className="space-y-3 text-muted-foreground">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="bg-muted/40 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Key Deliverables
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                View Related Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </article>
        </section>

        {relatedServices.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related?.slug}
                  to={`/services/${related?.slug}`}
                  className="block border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {related?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {related?.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Ready to plan your next workspace?
          </h2>
          <p className="text-muted-foreground mb-6">
            Talk to our specialists for a tailored design, MEP, or fit-out roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              Explore All Services
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

export default ServiceDetail;
