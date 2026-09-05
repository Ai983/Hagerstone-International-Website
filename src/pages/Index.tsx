import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import HeroSlider from "@/components/HeroSlider";
import AIStyleFeatureSection from "@/components/AIStyleFeatureSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import AchievementSection from "@/components/AchievementSection";
import FAQSection from "@/components/FAQSection";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import { projects } from "@/data/project";
import { homepageWalkthroughVideo } from "@/data/videos";
import { clientLogos } from "@/data/clientLogos";
import { Badge } from "@/components/ui/badge";
import {
  BRAND_NAME,
  SITE_URL,
  buildSchemaGraph,
  createImageObject,
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  officeDesignBuildServiceSchema,
} from "@/lib/seo";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
  StaggerContainer,
  GlowingBorder,
  MagneticButton,
} from "@/components/animations";
import {
  Building2,
  Users,
  ArrowRight,
  Palette,
  Building,
  Zap,
  CheckCircle,
  Briefcase,
  Ruler,
  FileText,
  Projector,
  Globe,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior Design & Fit-Outs",
      description:
        "Modern office interior design and interior fit out for corporate and commercial spaces in Delhi, Noida, Gurugram.",
      link: "/services/interior-fit-out",
    },
    {
      icon: Building,
      title: "EPC & PEB Construction",
      description:
        "Engineered Procurement Construction and Pre-Engineered Buildings for industrial and commercial projects.",
      link: "/services/construction",
    },
    {
      icon: Zap,
      title: "MEP & HVAC Services",
      description:
        "Complete MEP design including Mechanical, Electrical, Plumbing, HVAC, and firefighting solutions.",
      link: "/services/mep",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Ltd.",
      content:
        "Hagerstone transformed our office space beautifully. The attention to detail and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fashion Retail Chain",
      content:
        "Outstanding work on our showroom design. The team understood our vision and delivered exactly what we wanted.",
      rating: 5,
    },
    {
      name: "Ananya Desai",
      company: "Realty Corp",
      content:
        "Reliable and creative. The entire process from design to execution was seamless.",
      rating: 5,
    },
    {
      name: "Karan Bansal",
      company: "RetailNest",
      content: "Very collaborative and punctual. We loved the experience.",
      rating: 5,
    },
    {
      name: "Vikram Mehta",
      company: "InfraBuild India",
      content:
        "Professional team and premium execution. We highly recommend Hagerstone.",
      rating: 5,
    },
  ];
  const processSteps = [
    {
      title: "Fast 2D Layout Design",
      description:
        "Quick space planning with accurate layouts to validate flow, seating, and adjacencies early.",
      icon: Ruler,
    },
    {
      title: "Fast BOQ Documentation Process",
      description:
        "Clear bills of quantities and scope documents for faster approvals and cost control.",
      icon: FileText,
    },
    {
      title: "3D Design",
      description:
        "Photorealistic visuals and material boards to align stakeholders before execution.",
      icon: Projector,
    },
    {
      title: "Site Execution",
      description:
        "Coordinated fit-out delivery with MEP integration, quality checks, and on-time handover.",
      icon: Building2,
    },
  ];
  const homepageVideo = homepageWalkthroughVideo;
  const homepageImages = [
    { url: `${SITE_URL}/hero-images/office.avif`, name: "Office design & build hero image" },
    { url: `${SITE_URL}/hero-images/PEBbackground.jpg`, name: "PEB construction hero image" },
    { url: `${SITE_URL}/hero-images/interior.avif`, name: "Hospitality interior design hero image" },
    ...clientLogos.map((logo) => ({
      url: `${SITE_URL}${logo.logo}`,
      name: `${logo.name} logo`,
    })),
  ].map((image) => createImageObject(image.url, image.name));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Office Design & Build Company in Delhi NCR"
        description="Office design & build company in Delhi NCR delivering modern interiors, MEP, and fit-outs with 11+ years of experience and 7M+ sq. ft. delivered."
        canonical="https://hagerstone.com/"
        keywords="office design and build, modern office interior design ideas, best interior design for office, office interior design, mep design, mep consultants, interior fit out company, commercial interior design company, office workspace design, turnkey office design, top interior design companies in india"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          localBusinessSchema,
          officeDesignBuildServiceSchema,
          {
            "@type": "WebPage",
            name: "Office Design & Build Company in Delhi NCR",
            url: `${SITE_URL}/`,
            description:
              "Office design & build company delivering modern office interiors, MEP design, and turnkey fit-outs.",
          },
          homepageVideo
            ? {
                "@type": "VideoObject",
                name: homepageVideo.title,
                description: homepageVideo.description,
                thumbnailUrl: [homepageVideo.thumbnailUrl],
                uploadDate: homepageVideo.uploadDate,
                contentUrl: homepageVideo.contentUrl,
                embedUrl: `${SITE_URL}/`,
                inLanguage: "en-IN",
                keywords: homepageVideo.keywords.join(", "),
                publisher: {
                  "@type": "Organization",
                  name: BRAND_NAME,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.png`,
                  },
                },
              }
            : null,
          ...homepageImages,
        ].filter(Boolean) as Record<string, unknown>[])}
      />

      {/* Hero Slider */}
      <HeroSlider />

      {/* AI Style Feature Section */}
      <AIStyleFeatureSection />

      {/* SEO-Optimized Introduction Section */}
      <AnimatedBackground variant="mesh" className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal
            variant="blur"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-8"
          >
            Transform Spaces. Inspire Excellence.
          </TextReveal>
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal variant="slide-up" delay={0.2}>
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
                Hagerstone International is a premier{" "}
                <strong>office design &amp; build company</strong> serving
                corporate, commercial, hospitality, and industrial sectors. As
                one of the{" "}
                <strong>top interior fit out companies in Delhi NCR</strong>, we
                deliver turnkey office design and build solutions across Delhi,
                Noida, Gurugram, and 25+ cities globally.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Our team of{" "}
                <strong>international interior designers</strong> excels in
                comprehensive services—from{" "}
                <Link
                  to="/services"
                  className="text-accent hover:text-accent/80 underline"
                >
                  office interior design
                </Link>{" "}
                and <strong>office workspace design</strong> to{" "}
                <strong>MEP design</strong>, HVAC, PEB, and EPC solutions. We
                are recognized among the{" "}
                <strong>top interior design companies in India</strong> for
                modern office interior design ideas and turnkey delivery for
                Fortune 500 clients.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={0.4}>
              <p className="text-base md:text-lg text-muted-foreground mb-10">
                With{" "}
                <Link
                  to="/about"
                  className="text-accent hover:text-accent/80 underline"
                >
                  11+ years of office design &amp; build excellence
                </Link>{" "}
                and 7M+ sq. ft. delivered, discover why leading organizations
                trust us as their{" "}
                <strong>design &amp; build construction partner</strong> for
                commercial and corporate interiors.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={0.5}>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:scale-105 transition-all"
                  >
                    <Link to="/projects">View Our Portfolio</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all"
                  >
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </AnimatedBackground>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Best Office Design & Build Company: Making an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As a leading{" "}
              <strong>office design &amp; build and construction firm</strong>,
              our numbers reflect our commitment to excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Briefcase,
                value: 11,
                suffix: "+ YEARS",
                label: "Of Office Design & Build Experience",
              },
              {
                icon: Ruler,
                value: 7,
                suffix: " MILLION+ SQFT",
                label: "Modern Office Interiors Designed & Delivered",
              },
              {
                icon: Projector,
                value: 250,
                suffix: "+ PROJECTS",
                label: "Office Design, MEP & Fit-Out Projects Delivered",
              },
              {
                icon: Users,
                value: 350,
                suffix: "+ MANPOWER",
                label: "Expert design, MEP & execution workforce across India",
              },
              {
                icon: Building2,
                value: 25,
                suffix: "+ CITIES",
                label: "Office design & build presence across India",
              },
              {
                icon: Globe,
                value: 7,
                suffix: "+ COUNTRIES",
                label: "Global exposure in office workspace design",
              },
            ].map(({ icon: Icon, value, suffix, label }, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center transition hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-primary dark:text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {inView && (
                      <CountUp
                        start={0}
                        end={value}
                        duration={2}
                        suffix={` ${suffix}`}
                      />
                    )}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Valued Clients */}
      <ClientLogoCarousel />

      {/* Services Preview */}
      <AnimatedBackground
        variant="gradient"
        className="py-20 px-6 md:px-16 text-center"
      >
        <div className="relative">
          <TextReveal
            variant="words"
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Comprehensive Office Design & Build Services
          </TextReveal>
          <ScrollReveal variant="slide-up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              From <strong>office interior design</strong> and{" "}
              <strong>office workspace design</strong> to{" "}
              <strong>hospitality interior design</strong>, we deliver premium{" "}
              <strong>interior fit out</strong> and{" "}
              <strong>modern office interior design</strong> solutions across
              all sectors.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="slide-up" delay={0.3}>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              As a <strong>design &amp; build office specialist</strong>, we
              integrate <strong>MEP design</strong>, <strong>EPC</strong>,{" "}
              <strong>PEB</strong>, <strong>HVAC</strong>,{" "}
              <strong>lighting solutions</strong>, and{" "}
              <strong>commercial interior design</strong> to deliver complete{" "}
              <Link to="/services" className="text-accent hover:underline">
                turnkey office design &amp; build solutions
              </Link>{" "}
              for <strong>interior design in Delhi, Noida, and Gurugram</strong>
              .
            </p>
          </ScrollReveal>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variant="slide-up"
            staggerDelay={0.15}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                aria-label={`Learn more about ${service.title}`}
              >
                <GlowingBorder>
                  <div className="bg-muted rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                    <service.icon
                      className="w-12 h-12 text-accent mb-4 mx-auto"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="text-accent hover:underline text-sm font-medium">
                      Learn More →
                    </span>
                  </div>
                </GlowingBorder>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedBackground>

      {/* Our Process */}
      <section className="py-20 bg-white dark:bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined delivery path built for speed, clarity, and quality
              across every office design &amp; build project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-muted/40 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View Services</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
              Featured Office Design & Build Projects
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up mb-4">
              Showcasing our expertise as a{" "}
              <strong>
                top office design &amp; build and commercial interior design
                firm
              </strong>{" "}
              in corporate and hospitality spaces.
            </p>
            <p className="text-base text-muted-foreground">
              <Link to="/projects" className="text-accent hover:underline">
                Explore our complete portfolio
              </Link>{" "}
              of office workspace design, MEP projects, and interior fit-outs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                aria-label={`View ${project.title} project details`}
              >
                <Card
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.hero}
                      alt={
                        project.heroAlt ||
                        `${project.title} - ${project.sector} interior design by Hagerstone`
                      }
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="text-sm bg-accent px-2 py-1 rounded mb-2">
                        {project.sector}
                      </Badge>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievement Section - Replaces Client Testimonials */}
      <AchievementSection />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* Why Choose Us */}
      <AnimatedBackground
        variant="aurora"
        className="py-20 bg-[#1a1a1a] text-white"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal
              variant="blur"
              className="text-4xl font-bold mb-4 text-white"
            >
              Why Choose Hagerstone as Your Office Design & Build Partner?
            </TextReveal>
            <ScrollReveal variant="slide-up" delay={0.2}>
              <p className="text-xl text-white/90 mb-2">
                Excellence in every office project, innovation in every design.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="slide-up" delay={0.3}>
              <p className="text-base text-white/80">
                From{" "}
                <Link
                  to="/about"
                  className="text-accent hover:underline"
                >
                  our experienced team
                </Link>{" "}
                to Fortune 500 clients, discover what makes us the{" "}
                <strong>best interior designer</strong> and{" "}
                <strong>office design &amp; build company</strong> for your
                workspace.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variant="scale"
            staggerDelay={0.1}
          >
            {[
              "11+ Years of Office Design & Build Excellence",
              "500+ Satisfied Corporate Clients",
              "Fortune 500 Workspace Experience",
              "End-to-End Turnkey Solutions",
            ].map((benefit) => (
              <div key={benefit} className="text-center">
                <CheckCircle
                  className="h-12 w-12 text-gold mx-auto mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedBackground>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Ready to Transform Your Office or Commercial Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-4 animate-slide-up">
            Partner with India&apos;s leading{" "}
            <strong>office design &amp; build company</strong> for your next
            project.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            Whether you need{" "}
            <Link to="/services" className="text-accent hover:underline">
              corporate office interiors
            </Link>
            , modern workspace design, hospitality interiors, or complete MEP
            and construction services, we deliver excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg animate-scale-in"
            >
              <Link to="/contact">Start Your Project Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-muted hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Link to="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
