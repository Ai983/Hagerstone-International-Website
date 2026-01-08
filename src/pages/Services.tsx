// src/pages/Services.tsx

import { useState } from "react";
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
      features: [
        "Modern office interior design ideas",
        "Space planning & office workspace design",
        "3D visualization & rendering",
        "Brand-aligned color, material & lighting",
        "Interior fit out-ready design packages",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      icon: Building,
      title: "Turnkey Construction, EPC & PEB",
      description:
        "End-to-end office design & build, construction, Engineered Procurement Construction (EPC), and Pre-Engineered Buildings (PEB) with strict quality and timeline control.",
      features: [
        "Turnkey office design & build execution",
        "EPC services & project management",
        "PEB for warehouses & industrial projects",
        "Quality assurance & safety compliance",
        "Cost & timeline optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    },
    {
      icon: Zap,
      title: "MEP Design, HVAC & Fire Safety",
      description:
        "Complete MEP design services for modern offices and commercial spaces, covering HVAC, electrical, plumbing, and firefighting systems.",
      features: [
        "MEP design for office buildings",
        "HVAC design & installation",
        "Firefighting & life safety systems",
        "Electrical distribution & data cabling",
        "Building automation & energy efficiency",
      ],
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    },
    {
      icon: Sofa,
      title: "Office Furniture & Workspace Design",
      description:
        "Custom office furniture and ergonomic workspace design that supports productivity, comfort, and brand identity.",
      features: [
        "Custom workstations & executive cabins",
        "Ergonomic office furniture solutions",
        "Collaboration & breakout zone design",
        "Reception & visitor lounge styling",
        "Installation & on-site coordination",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      icon: Home,
      title: "Interior Fit-Out & Execution",
      description:
        "Complete interior fit out for commercial and hospitality spaces. We manage every detail from shell to ready-to-move-in office.",
      features: [
        "False ceilings, partitions & glazing",
        "Flooring, wall finishes & joinery",
        "Lighting, signage & branding elements",
        "Coordination with MEP & civil teams",
        "Turnkey interior fit out delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
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
        title="Office Design & Build Services Delhi NCR | Interior, MEP, EPC & Fit-Out"
        description="Comprehensive office design & build services in Delhi NCR: modern office interior design, MEP design, EPC & PEB construction, and turnkey interior fit outs for corporate and commercial spaces."
        canonical="https://hagerstone.com/services"
        keywords="office design and build, modern office interior design, office workspace design, mep design services, interior fit out company, turnkey office design, EPC and PEB construction Delhi NCR"
      />

      {/* Hero Section */}
      <AnimatedBackground
        variant="aurora"
        className="relative text-primary-foreground py-20"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal
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
            size="lg"
            variant="secondary"
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300 animate-scale-in"
          >
            Contact Us Today
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
