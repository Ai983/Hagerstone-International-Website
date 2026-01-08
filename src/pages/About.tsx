import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
  StaggerContainer,
  ParallaxSection,
} from "@/components/animations";

const About = () => {
  return (
    <>
      <SEOHead
        title="About Hagerstone International | Office Design & Build Company Delhi NCR"
        description="Learn about Hagerstone International – leading office design & build company in Delhi NCR. 11+ years of modern office interior design, MEP design, and interior fit out projects across 25+ cities."
        canonical="https://hagerstone.com/about"
        keywords="office design and build, modern office interior design, office workspace design, interior fit out company, commercial interior design company, mep design consultants, top interior design companies in india"
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <AnimatedBackground variant="aurora" className="relative py-20 px-6">
          <div className="relative max-w-7xl mx-auto text-center">
            <TextReveal
              variant="chars"
              className="text-6xl font-bold text-primary mb-6"
            >
              About Hagerstone International
            </TextReveal>
            <ScrollReveal variant="slide-up" delay={0.3}>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
                A leading{" "}
                <span className="font-semibold">
                  office design &amp; build company
                </span>{" "}
                and{" "}
                <span className="font-semibold">
                  commercial interior design firm
                </span>{" "}
                delivering modern office interior design, MEP design, and
                interior fit out solutions across 25+ cities in India and
                overseas.
              </p>
            </ScrollReveal>
          </div>
        </AnimatedBackground>

        <div className="max-w-7xl mx-auto px-6">
          {/* Our Story */}
          <section className="py-20">
            <div className="text-center mb-16">
              <TextReveal
                variant="words"
                className="text-5xl font-bold text-primary mb-6"
              >
                Our Story
              </TextReveal>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            </div>

            <StaggerContainer
              className="grid lg:grid-cols-3 gap-8 mb-16"
              variant="scale"
              staggerDelay={0.1}
            >
              {["11+", "7M+", "250+"].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-card p-8 rounded-2xl shadow-luxury hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-lg text-foreground">
                    {idx === 0
                      ? "Years of Office Design & Build Excellence"
                      : idx === 1
                      ? "Sq. Ft. of Modern Office Interiors Delivered"
                      : "Office Design, MEP & Interior Fit Out Projects"}
                  </div>
                </div>
              ))}
            </StaggerContainer>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="slide-right">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Hagerstone International is a premier{" "}
                  <span className="font-semibold">
                    office design &amp; build and commercial interior design
                    company
                  </span>{" "}
                  recognized among the{" "}
                  <span className="font-semibold">
                    top interior design companies in India
                  </span>
                  . With 11+ years of experience, over 7 million sq. ft.
                  completed, and 250+ projects delivered across 25+ cities in
                  7+ countries, the team designs and executes high‑performance
                  workspaces for corporate, commercial, hospitality, and
                  industrial clients.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  As a{" "}
                  <span className="font-semibold">
                    specialist in modern office interior design
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    turnkey interior fit out
                  </span>
                  , Hagerstone integrates architecture, MEP design, HVAC, PEB,
                  and construction under one roof. This design‑build approach
                  ensures seamless coordination, faster timelines, and
                  consistent quality for every office workspace design project.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="slide-left" delay={0.2}>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Our Core Values
                  </h3>
                  <ul className="space-y-3 text-foreground">
                    {[
                      "Innovation in office design & build",
                      "Quality excellence in every fit out and MEP project",
                      "Client‑first collaboration and transparency",
                      "Sustainable, future‑ready workspace solutions",
                    ].map((val, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12"
              variant="slide-up"
              staggerDelay={0.2}
            >
              {[
                {
                  title: "Our Vision",
                  content:
                    "To be India’s most trusted technology‑enabled office design & build partner, delivering modern office interior design, MEP design, and interior fit out solutions that transform workplaces across every sector.",
                },
                {
                  title: "Our Mission",
                  content:
                    "To create long‑term value for clients and team members by combining design innovation, engineering excellence, and transparent project management. The mission is to grow the Hagerstone family, build shared ownership, and deliver office workspaces that improve everyday life for people using them.",
                },
              ].map((block, idx) => (
                <div key={idx}>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    {block.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {block.content}
                  </p>
                </div>
              ))}
            </StaggerContainer>
          </section>
        </div>

        {/* Our Valued Clients */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl mb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Valued Clients
              </h2>
              <p className="text-lg text-foreground/80">
                Trusted by leading corporate, industrial, and hospitality brands
                for office design &amp; build and commercial interior design
                projects.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-[slide_20s_linear_infinite] space-x-8 items-center">
                {[
                  { name: "Monin", logo: "/clients-logo/Monin.jpeg" },
                  { name: "AECOM", logo: "/clients-logo/AECOM.png" },
                  { name: "TAJ", logo: "/clients-logo/Taj.jpeg" },
                  {
                    name: "UltraTech Cement",
                    logo: "/clients-logo/Ultratech.jpeg",
                  },
                  { name: "Air India", logo: "/clients-logo/airindia.jpeg" },
                  { name: "Lufthansa", logo: "/clients-logo/lufthansa.jpeg" },
                  // duplicate for seamless scroll
                  { name: "Monin", logo: "/clients-logo/Monin.jpeg" },
                  { name: "AECOM", logo: "/clients-logo/AECOM.png" },
                  { name: "TAJ", logo: "/clients-logo/Taj.jpeg" },
                  {
                    name: "UltraTech Cement",
                    logo: "/clients-logo/Ultratech.jpeg",
                  },
                  { name: "Air India", logo: "/clients-logo/airindia.jpeg" },
                  { name: "Lufthansa", logo: "/clients-logo/lufthansa.jpeg" },
                ].map((client, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={`${client.name} – Hagerstone office design & build client`}
                      className="h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
