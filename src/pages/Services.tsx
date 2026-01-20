// src/pages/Services.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceModal from "@/components/ServiceModal";
import SEOHead from "@/components/SEOHead";
import {
  buildSchemaGraph,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";
import { servicePages } from "@/data/servicePages";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
  StaggerContainer,
} from "@/components/animations";

import {
  Palette,
  Building,
  Zap,
  Sofa,
  Home,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const services = [
    {
      icon: Palette,
      title: "Office Interior Design & Architecture",
      description:
        "As office design & build specialists, we create modern office interior design concepts that blend aesthetics and functionality for corporate and commercial spaces.",
      link: "/services/office-design-build",
      features: [
        "Modern office interior design ideas",
        "Space planning & office workspace design",
        "3D visualization & rendering",
        "Brand-aligned color, material & lighting",
        "Interior fit out-ready design packages",
      ],
      image:
        "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Service%20Page%20/Office%20Interior.jpg",
    },
    {
      icon: Building,
      title: "Turnkey Construction, EPC & PEB",
      description:
        "End-to-end office design & build, construction, Engineered Procurement Construction (EPC), and Pre-Engineered Buildings (PEB) with strict quality and timeline control.",
      link: "/services/construction",
      features: [
        "Turnkey office design & build execution",
        "EPC services & project management",
        "PEB for warehouses & industrial projects",
        "Quality assurance & safety compliance",
        "Cost & timeline optimization",
      ],
      image:
        "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Service%20Page%20/Construction%20.jpg",
    },
    {
      icon: Zap,
      title: "MEP Design, HVAC & Fire Safety",
      description:
        "Complete MEP design services for modern offices and commercial spaces, covering HVAC, electrical, plumbing, and firefighting systems.",
      link: "/services/mep",
      features: [
        "MEP design for office buildings",
        "HVAC design & installation",
        "Firefighting & life safety systems",
        "Electrical distribution & data cabling",
        "Building automation & energy efficiency",
      ],
      image:
        "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Service%20Page%20/Construction%20.jpg",
    },
    {
      icon: Sofa,
      title: "Office Furniture & Workspace Design",
      description:
        "Custom office furniture and ergonomic workspace design that supports productivity, comfort, and brand identity.",
      link: "/services/interior-fit-out",
      features: [
        "Custom workstations & executive cabins",
        "Ergonomic office furniture solutions",
        "Collaboration & breakout zone design",
        "Reception & visitor lounge styling",
        "Installation & on-site coordination",
      ],
      image:
        "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/workstation1.jpg",
    },
    {
      icon: Home,
      title: "Interior Fit-Out & Execution",
      description:
        "Complete interior fit out for commercial and hospitality spaces. We manage every detail from shell to ready-to-move-in office.",
      link: "/services/interior-fit-out",
      features: [
        "False ceilings, partitions & glazing",
        "Flooring, wall finishes & joinery",
        "Lighting, signage & branding elements",
        "Coordination with MEP & civil teams",
        "Turnkey interior fit out delivery",
      ],
      image:
        "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Service%20Page%20/Interior%20FitOut%20&%20Execution.png",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Understanding your business, workspace needs, and budget for office design & build.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Creating detailed modern office interior design and MEP design plans with 3D visuals.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Coordinated interior fit out, construction, and MEP implementation with quality control.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Final handover of a ready-to-move, fully functional modern office workspace.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Office Design & Build Services | Interior, MEP, EPC & Fit-Out"
        description="Office design & build services in Delhi NCR for modern interiors, MEP design, EPC & PEB construction, and turnkey office fit-outs."
        canonical="https://hagerstone.com/services"
        keywords="Office design and build, modern office interior design, office workspace design, mep design services, interior fit out company, turnkey office design, EPC and PEB construction Delhi NCR"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "WebPage",
            name: "Office Design & Build Services",
            url: `${SITE_URL}/services`,
            description:
              "Office design & build services covering interiors, MEP, construction, and fit-out delivery.",
          },
          {
            "@type": "ItemList",
            name: "Hagerstone Service Lines",
            itemListElement: servicePages.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: `${SITE_URL}/services/${service.slug}`,
            })),
          },
        ])}
      />

      {/* Hero Section */}
      <AnimatedBackground
        variant="aurora"
        className="relative text-primary-foreground py-20"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal
            as="h1"
            variant="words"
            className="text-5xl md:text-6xl font-bold mb-6 text-gold"
          >
            Office Design & Build Services
          </TextReveal>
          <ScrollReveal variant="slide-up" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From{" "}
              <span className="font-semibold">
                modern office interior design
              </span>{" "}
              and{" "}
              <span className="font-semibold">office workspace design</span> to{" "}
              <span className="font-semibold">MEP design</span>,{" "}
              <span className="font-semibold">EPC &amp; PEB</span>, and{" "}
              <span className="font-semibold">interior fit out</span> solutions—
              delivered by one of the{" "}
              <span className="font-semibold">
                leading office design &amp; build companies in Delhi NCR
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </AnimatedBackground>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group bg-gradient-card border-0 shadow-luxury hover:shadow-hover transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-hero/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-gold-foreground" />
                          </div>
                          <CardTitle className="text-2xl text-primary">
                            {service.title}
                          </CardTitle>
                        </div>
                        <p className="text-muted-foreground dark:text-white/80">
                          {service.description}
                        </p>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="mt-6 group/btn"
                          variant="outline"
                          onClick={() => handleServiceClick(service)}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                        <Link
                          to={service.link}
                          className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
                        >
                          Explore {service.title}
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-[#1b1b1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Our Office Design & Build Process
            </h2>
            <p className="text-xl text-white/80 animate-slide-up">
              A streamlined approach to deliver modern, high-performance
              workspaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card
                key={step.step}
                className="bg-[#25252b] border border-white/10 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Explore Detailed Service Pages
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Review scope, deliverables, and related projects for each of our
                core service lines.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block border border-border rounded-xl p-6 hover:border-primary hover:shadow-sm transition"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in text-gold">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-slide-up">
            Get in touch with our office design &amp; build experts for a
            consultation.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300 animate-scale-in"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Services;
