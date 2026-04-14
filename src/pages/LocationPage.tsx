import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import type { LocationPageData } from "@/data/locationPages";
import {
  BRAND_NAME,
  SITE_URL,
  buildSchemaGraph,
  createBreadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

interface Props {
  data: LocationPageData;
}

const LocationPage = ({ data }: Props) => {
  const canonical = `${SITE_URL}/${data.slug}`;

  const structuredData = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    createBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: data.h1, url: canonical },
    ]),
    {
      "@type": "LocalBusiness",
      name: `${BRAND_NAME} — ${data.city}`,
      url: canonical,
      telephone: "+91-88829-79328",
      image: `${SITE_URL}/logo.png`,
      description: data.metaDescription,
      areaServed: {
        "@type": "City",
        name: data.city,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: data.city,
        addressRegion: data.region,
        addressCountry: "IN",
      },
    },
    {
      "@type": "Service",
      serviceType: "Office Design & Build",
      name: `Office Design & Build in ${data.city}`,
      description: data.metaDescription,
      provider: {
        "@type": "Organization",
        name: BRAND_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "City",
        name: data.city,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={data.title}
        description={data.metaDescription}
        canonical={canonical}
        keywords={data.keywords}
        structuredData={structuredData}
        appendSiteName={false}
      />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm mb-6">
            <MapPin className="h-4 w-4" /> Serving {data.city}, {data.region}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold">
            {data.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Get a Free {data.city} Site Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20">
              <Link to="/projects">View Projects Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Hagerstone in this city */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Why {data.city} Corporates Choose Hagerstone
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.whyChooseCity.map((point) => (
              <div key={point} className="flex gap-3 p-6 rounded-xl bg-muted/30">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Office Design & Build Services in {data.city}
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            End-to-end workspace solutions for {data.city} corporates — design, engineering,
            construction, MEP, HVAC, and fit-out under one roof.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.servicesInCity.map((service) => (
              <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-accent hover:underline text-sm font-medium"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local areas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Areas We Cover in {data.city}
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Hagerstone delivers office fit-out, MEP, and construction services across all major
            commercial and industrial belts of {data.city}.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.localAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            {data.city} Office Fit-Out FAQs
          </h2>
          <div className="space-y-6">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl p-6 border">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planning an Office in {data.city}?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Share your brief and our {data.city} team will get back within 24 hours with a
            scoped proposal, layout direction, and indicative cost range.
          </p>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/contact">Request {data.city} Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
