import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import {
  AnimatedBackground,
  TextReveal,
  ScrollReveal,
  StaggerContainer,
  ParallaxSection,
} from "@/components/animations";
import {
  buildSchemaGraph,
  createImageObject,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SEOHead
        title="About Hagerstone International | Office Design & Build Company"
        description="Learn about Hagerstone International, an office design & build company delivering modern interiors, MEP design, and fit-outs across India."
        canonical="https://hagerstone.com/about"
        keywords="office design and build, modern office interior design, office workspace design, interior fit out company, commercial interior design company, mep design consultants, top interior design companies in india"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "AboutPage",
            name: "About Hagerstone International",
            url: `${SITE_URL}/about`,
            description:
              "Company profile for Hagerstone International, an office design & build firm serving Delhi NCR and India.",
          },
          {
            "@type": "Organization",
            name: "Hagerstone International",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "91Springboard, Plot No. D-107, Vyapar Marg, D Block, Sector 2",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201301",
              addressCountry: "IN",
            },
            founder: [
              {
                "@type": "Person",
                name: "Dhruv Agarwal",
                jobTitle: "Founder & Managing Director",
                image: `${SITE_URL}/founders/dhruvsir.png`,
                description:
                  "Civil Engineer from Delhi College of Engineering with over 10 million sq ft of projects delivered across UAE, Myanmar, and India.",
              },
              {
                "@type": "Person",
                name: "Bhaskar Tyagi",
                jobTitle: "Director - Operations",
                image: `${SITE_URL}/founders/bhaskarsir.png`,
                description:
                  "Director with 16+ years of experience in hospitality industry specializing in interior design.",
              },
            ],
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: 350,
            },
            foundingDate: "2014",
          },
          createImageObject(
            `${SITE_URL}/founders/dhruvsir.png`,
            "Dhruv Agarwal portrait"
          ),
          createImageObject(
            `${SITE_URL}/founders/bhaskarsir.png`,
            "Bhaskar Tyagi portrait"
          ),
        ])}
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
                  7+ countries, the team designs and executes high-performance
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
                  and construction under one roof. Learn more about our{" "}
                  <Link to="/services" className="text-accent hover:underline">
                    office design &amp; build services
                  </Link>{" "}
                  and explore the{" "}
                  <Link to="/projects" className="text-accent hover:underline">
                    project portfolio
                  </Link>{" "}
                  to see completed workspace transformations.
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
                      "Client-first collaboration and transparency",
                      "Sustainable, future-ready workspace solutions",
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
                    "To be India’s most trusted technology-enabled office design & build partner, delivering modern office interior design, MEP design, and interior fit out solutions that transform workplaces across every sector.",
                },
                {
                  title: "Our Mission",
                  content:
                    "To create long-term value for clients and team members by combining design innovation, engineering excellence, and transparent project management. The mission is to grow the Hagerstone family, build shared ownership, and deliver office workspaces that improve everyday life for people using them.",
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
                  <div key={`${client.name}-${index}`} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={`${client.name} - Hagerstone client logo`}
                      width={120}
                      height={64}
                      className="h-16 w-auto object-contain"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">Our Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="group bg-gradient-card border-0 shadow-luxury p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-fade-in">
              <CardContent className="text-center">
                <div className="relative mb-6 inline-block">
                  <img 
                    src="/founders/dhruvsir.png" 
                    alt="Dhruv Agarwal - Founder & Managing Director"
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-luxury group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent group-hover:from-primary/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">Dhruv Agarwal</h3>
                <p className="text-lg text-secondary font-semibold mb-4">Founder & Managing Director</p>
                <p className="text-foreground leading-relaxed">
                  Civil Engineer from Delhi College of Engineering. With over 10 million sq ft of projects delivered across UAE, Myanmar, and India, Dhruv established Hagerstone to provide seamless, end-to-end design and build services blending creativity with functionality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-card border-0 shadow-luxury p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="text-center">
                <div className="relative mb-6 inline-block">
                  <img 
                    src="/founders/bhaskarsir.png" 
                    alt="Bhaskar Tyagi - Director"
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-luxury group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent group-hover:from-primary/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">Bhaskar Tyagi</h3>
                <p className="text-lg text-secondary font-semibold mb-4">Director</p>
                <p className="text-foreground leading-relaxed">
                  Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* Safety First */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Safety Always and Everywhere
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our comprehensive safety system ensures excellence with 79+ quality
              checkpoints, prioritizing the wellbeing of our team and clients on
              every project.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Hard Hats",
              "Safety Glasses or Goggles",
              "High-Visibility Clothing",
              "Steel-Toed Safety Boots",
              "Reflective Vests",
              "Ear Protection",
              "Protective Gloves",
              "First Aid Kits",
              "Safety Signs and Labels",
              "Scaffolding and Ladders",
              "Protective Clothing",
              "79+ Quality Checkpoints",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-4 rounded-lg hover:bg-white/70 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-2xl font-bold text-primary bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-lg text-foreground/80">
              Hear from our satisfied clients about their experience with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              "Throughout the project, Hagerstone International demonstrated remarkable project management skills. They kept us informed every step of the way, adhered to timelines, and stayed within budget. Their commitment to quality and client satisfaction is truly commendable.",
              "Your team managed the project professionally, delivering exceptional quality. Completing the entire building construction within 60 days was impressive and satisfying. Your quick response time consistently enabled us to make informed decisions efficiently throughout the process.",
              "We loved your team's positivity and professionalism. Before working with Hagerstone, we never imagined office interiors could be done so smoothly. The project was hassle-free, completed with top-notch quality, and delivered within our 45-day timeline. Truly impressive!",
              "We are satisfied with the office delivered, meeting our requirements with satisfactory quality. The project was completed within the timeline, and we look forward to collaborating with Hagerstone International on future projects. Best wishes for their endeavors.",
              "We faced a unique gym lounge design challenge, and this firm exceeded expectations. They understood our vision, incorporated ideas beautifully, and ensured flawless execution. The result is a stunning, functional space perfect for our needs. Highly recommended!",
              "We hired Hagerstone International to design and build our new office space interiors. Their expertise and experience truly stand out. We are extremely satisfied with their work and look forward to working with them again in the future.",
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-card p-8 rounded-2xl shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-l-4 border-primary"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <blockquote className="text-foreground leading-relaxed italic text-lg">
                  “{testimonial}”
                </blockquote>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="ml-4">
                    <div className="text-primary font-semibold">
                      Satisfied Client
                    </div>
                    <div className="text-foreground/60 text-sm">
                      Hagerstone International
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
