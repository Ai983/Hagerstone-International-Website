import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getRecentPosts } from "@/data/blogPosts";
import {
  BRAND_NAME,
  SITE_URL,
  buildSchemaGraph,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const slug = "commercial-interior-designers";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;
const ogImage = `${SITE_URL}/blog/${slug}/commercial-interior-designers-office-lounge.jpg`;

export default function CommercialInteriorDesignersBlog() {
  const lastUpdated = new Date();
  const lastUpdatedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(lastUpdated);
  const lastUpdatedIso = lastUpdated.toISOString();

  const relatedBlogPosts = getRecentPosts(4)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const tocItems = [
    {
      id: "introduction",
      label: "Introduction: Why Commercial Interior Designers Matter More Than Ever",
    },
    {
      id: "what-do-commercial-interior-designers-do",
      label: "What Do Commercial Interior Designers Do?",
    },
    {
      id: "types-of-commercial-interior-design-services",
      label: "Types of Commercial Interior Design Services",
    },
    {
      id: "why-hiring-commercial-interior-designers-is-a-smart-business-decision",
      label: "Why Hiring Commercial Interior Designers Is a Smart Business Decision",
    },
    {
      id: "key-design-elements-used-by-commercial-interior-designers",
      label: "Key Design Elements Used by Commercial Interior Designers",
    },
    {
      id: "latest-trends-in-commercial-interior-design",
      label: "Latest Trends in Commercial Interior Design",
    },
    {
      id: "how-to-choose-the-right-commercial-interior-designer",
      label: "How to Choose the Right Commercial Interior Designer",
    },
    {
      id: "conclusion-invest-in-commercial-interiors-that-work-for-you",
      label: "Conclusion: Invest in Commercial Interiors That Work for You",
    },
    {
      id: "call-to-action",
      label: "Call to Action",
    },
  ];

  const relatedServices = [
    { title: "Office Design & Build Services", href: "/services/office-design-build" },
    { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
    { title: "MEP Design & Consultancy", href: "/services/mep" },
    { title: "Commercial Construction", href: "/services/construction" },
  ];

  return (
    <>
      <SEOHead
        title={`Commercial Interior Designers for Productivity, Brand & Growth | ${BRAND_NAME}`}
        description="Commercial interior designers create functional, branded, and productive business spaces that enhance employee wellbeing and customer experience."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Modern office lounge showcasing commercial interior design for collaborative teams"
        ogType="article"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline:
              "Commercial Interior Designers: Transforming Business Spaces for Productivity, Brand & Growth",
            description:
              "Commercial interior designers create functional, branded, and productive business spaces that enhance employee wellbeing and customer experience.",
            image: [ogImage],
            author: {
              "@type": "Organization",
              name: BRAND_NAME,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: BRAND_NAME,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
              },
            },
            datePublished: lastUpdatedIso,
            dateModified: lastUpdatedIso,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Commercial Interior Designers",
                item: canonicalUrl,
              },
            ],
          },
        ])}
      />

      <main className="bg-background">
        <article className="min-h-screen">
          <nav
            aria-label="Breadcrumb"
            className="max-w-4xl mx-auto px-4 py-6 md:py-8"
          >
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground flex-wrap">
              <li className="flex items-center space-x-2">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Commercial Interior Designers</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Commercial Interior Designers: Transforming Business Spaces for Productivity,
              Brand &amp; Growth
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>
                Last updated{" "}
                <time dateTime={lastUpdatedIso}>{lastUpdatedLabel}</time>
              </span>
            </div>
            <img
              src="/blog/commercial-interior-designers/commercial-interior-designers-office-lounge.jpg"
              srcSet="/blog/commercial-interior-designers/commercial-interior-designers-office-lounge.jpg 800w"
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Modern office lounge showcasing commercial interior design for collaborative teams"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-lg"
              width="800"
              height="533"
              loading="eager"
              decoding="async"
            />
          </header>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <nav
              aria-label="Table of contents"
              className="bg-muted/50 p-6 md:p-8 rounded-lg border border-border"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
              <ol className="space-y-3">
                {tocItems.map((item, index) => (
                  <li key={item.id} className="text-base">
                    <a
                      href={`#${item.id}`}
                      className="text-primary hover:underline transition-colors"
                    >
                      {index + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="introduction" className="text-3xl font-bold text-primary">
              Introduction: Why Commercial Interior Designers Matter More Than Ever
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Commercial interior designers play a far more strategic role today than simply
              shaping how a workspace looks. In an increasingly competitive and
              experience-driven business environment, the design of commercial spaces directly
              influences productivity, brand perception, employee satisfaction, and operational
              efficiency.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Across India, businesses are rethinking how their physical environments support
              modern work styles. From corporate offices in Noida and Gurgaon to retail showrooms
              in Lucknow and Kanpur, organizations are investing in commercial interior design to
              create spaces that support collaboration, wellbeing, and brand consistency.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Modern workplaces must do more than house employees. They must encourage focus,
              support hybrid work models, enable teamwork, and reflect company values. Thoughtful
              office workspace design impacts employee morale, safety, workflow efficiency, and
              even talent retention. As businesses grow and evolve, commercial interior designers
              help translate business goals into functional, scalable physical environments.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              With increasing emphasis on commercial space planning, sustainability, and
              brand-led design, professional interior designers have become essential partners in
              long-term business growth rather than optional service providers.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-do-commercial-interior-designers-do" className="text-3xl font-bold text-primary">
              What Do Commercial Interior Designers Do?
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial interior designers specialize in planning and designing interiors for
              business environments such as offices, retail stores, hospitality spaces, healthcare
              facilities, and co-working hubs. Their work balances functionality, aesthetics,
              brand identity, safety, and regulatory compliance.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Unlike residential interiors, commercial projects demand durability, scalability,
              and strict adherence to building codes. Designers focus on how people move, interact,
              work, and experience the space daily. For turnkey delivery, many teams align early
              with <Link to="/services/office-design-build" className="text-primary hover:underline">office design &amp; build services</Link>,
              and coordinate detailing with <Link to="/services/interior-fit-out" className="text-primary hover:underline">interior fit-out delivery</Link>
              to keep planning and execution synchronized.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">
              Key Responsibilities of Commercial Interior Designers
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Commercial space planning and layout optimization</li>
              <li>Developing customized interior design concepts</li>
              <li>Selecting furniture, lighting systems, finishes, and materials</li>
              <li>Integrating brand identity into spatial design</li>
              <li>Designing ergonomic, employee-focused environments</li>
              <li>Coordinating with architects, contractors, vendors, and suppliers</li>
              <li>Ensuring compliance with safety, fire, and accessibility standards</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Every design decision is tied to operational efficiency, employee performance, and
              brand perception. The goal is to create spaces that work seamlessly for both people
              and processes.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="types-of-commercial-interior-design-services" className="text-3xl font-bold text-primary">
              Types of Commercial Interior Design Services
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">Office Interior Design</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Office interior designers focus on creating environments that support productivity,
              collaboration, and employee wellbeing. A well-designed office is not about trends—it
              is about how people actually work.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Effective office workspace design includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Open-plan workstations combined with quiet focus areas</li>
              <li>Collaboration zones and informal meeting spaces</li>
              <li>Ergonomic desks, chairs, and workstations</li>
              <li>Flexible layouts that support hybrid and remote work models</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              By designing activity-based work zones, commercial interior designers ensure
              employees can move between focused work, collaboration, and relaxation without
              disruption. These design strategies improve efficiency while reducing fatigue and
              burnout.
            </p>

            <img
              src="/blog/commercial-interior-designers/commercial-interior-designers-open-office.jpg"
              srcSet="/blog/commercial-interior-designers/commercial-interior-designers-open-office.jpg 800w"
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Open-plan workspace with commercial interior design and ergonomic workstations"
              className="w-full h-[320px] md:h-[380px] object-cover rounded-lg shadow-lg"
              width="800"
              height="533"
              loading="lazy"
              decoding="async"
            />

            <h3 className="text-2xl font-semibold text-foreground">Corporate Interior Design</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Corporate interior design represents a company’s professionalism, culture, and
              authority. From the moment a client or visitor enters the space, the interior should
              communicate trust, credibility, and brand values.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Corporate interior design typically focuses on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Branded reception and waiting areas</li>
              <li>Executive cabins and leadership offices</li>
              <li>Boardrooms equipped for presentations and meetings</li>
              <li>Collaboration zones for teams and departments</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Thoughtfully designed corporate spaces boost employee confidence and reinforce the
              company’s market positioning.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Retail Interior Design</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Retail interior designers shape customer experiences that directly influence
              purchasing decisions. Every design element—from layout to lighting—guides how
              customers move through the space and interact with products.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Strategic retail interior design helps to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Improve product visibility and merchandising</li>
              <li>Enhance customer flow and navigation</li>
              <li>Reinforce brand identity through visual storytelling</li>
              <li>Increase dwell time and conversion rates</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Well-planned retail interiors create immersive brand experiences that translate into
              stronger customer engagement and sales performance.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Hospitality &amp; Commercial Public Spaces</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Hotels, restaurants, clinics, and co-working spaces require interiors that balance
              comfort, durability, and brand alignment. These environments experience high foot
              traffic and must remain functional while feeling welcoming.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial interior designers focus on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Comfortable seating and intuitive layouts</li>
              <li>Durable materials suitable for heavy use</li>
              <li>Lighting that enhances ambiance and usability</li>
              <li>Brand-consistent design across public areas</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              The result is a space that feels inviting while supporting smooth daily operations.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2
              id="why-hiring-commercial-interior-designers-is-a-smart-business-decision"
              className="text-3xl font-bold text-primary"
            >
              Why Hiring Commercial Interior Designers Is a Smart Business Decision
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">1. Optimized Space Utilization</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Professional commercial interior designers ensure that every square foot of space
              serves a purpose. Through strategic commercial space planning, they:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Maximize usable areas</li>
              <li>Improve traffic flow</li>
              <li>Eliminate underutilized zones</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Efficient layouts reduce unnecessary real estate costs and improve operational
              efficiency over time.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">2. Enhanced Employee Productivity &amp; Wellbeing</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Work environments directly affect how employees feel and perform. Commercial interior
              designers incorporate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Ergonomic furniture systems</li>
              <li>Natural lighting and ventilation strategies</li>
              <li>Acoustic solutions to reduce noise distractions</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              These elements reduce physical strain, improve focus, and support long-term employee
              health and satisfaction.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">3. Stronger Brand Identity</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial interior design visually communicates a brand’s personality and values.
              From color palettes and materials to signage and spatial flow, designers ensure
              consistency across the environment.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A cohesive interior strengthens brand recognition and creates memorable experiences
              for employees, clients, and visitors alike.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">4. Compliance, Safety &amp; Accessibility</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial interiors must meet regulatory requirements. Designers ensure compliance
              with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Local building codes</li>
              <li>Fire and safety regulations</li>
              <li>Accessibility standards</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              This minimizes legal risks and creates inclusive, safe spaces for everyone.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2
              id="key-design-elements-used-by-commercial-interior-designers"
              className="text-3xl font-bold text-primary"
            >
              Key Design Elements Used by Commercial Interior Designers
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">Space Planning &amp; Layout Design</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Successful commercial interiors balance collaboration with privacy. Designers create
              layouts that support different work styles through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Activity-based zoning</li>
              <li>Clear circulation paths</li>
              <li>Flexible partitions and furniture systems</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              This allows teams to work efficiently without constant disruptions.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Lighting Design</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Lighting has a direct impact on productivity and mood. Commercial interior designers
              combine:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Natural daylight optimization</li>
              <li>Energy-efficient LED systems</li>
              <li>Task lighting for focused work</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Well-planned lighting improves visual comfort while reducing energy consumption.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Color Psychology in Commercial Interiors</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Colors influence behavior and emotional response:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Blues and greens encourage focus and calm</li>
              <li>Neutral tones convey professionalism</li>
              <li>Accent colors stimulate creativity and brand energy</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Designers carefully balance color usage to align with brand identity and workplace
              goals.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Furniture &amp; Ergonomics</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Modern commercial interiors prioritize employee comfort and adaptability through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Height-adjustable desks</li>
              <li>Ergonomic seating</li>
              <li>Modular furniture systems</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              These solutions promote flexibility, reduce physical strain, and support evolving work
              patterns.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2
              id="latest-trends-in-commercial-interior-design"
              className="text-3xl font-bold text-primary"
            >
              Latest Trends in Commercial Interior Design
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              To remain competitive and future-ready, businesses are adopting emerging design
              trends such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Hybrid and flexible workspaces</li>
              <li>Sustainable and eco-friendly materials</li>
              <li>Biophilic design elements that bring nature indoors</li>
              <li>Smart technology integration</li>
              <li>Wellness-focused environments</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              These trends enhance both employee experience and long-term business performance.
            </p>

            <img
              src="/blog/commercial-interior-designers/commercial-interior-designers-retail-boutique.jpg"
              srcSet="/blog/commercial-interior-designers/commercial-interior-designers-retail-boutique.jpg 800w"
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Boutique retail space highlighting commercial interior design and warm lighting"
              className="w-full h-[320px] md:h-[380px] object-cover rounded-lg shadow-lg"
              width="800"
              height="533"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2
              id="how-to-choose-the-right-commercial-interior-designer"
              className="text-3xl font-bold text-primary"
            >
              How to Choose the Right Commercial Interior Designer
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              When selecting a commercial interior designer, businesses should evaluate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Relevant industry experience</li>
              <li>Portfolio quality and real-world case studies</li>
              <li>Understanding of business objectives</li>
              <li>Clear project timelines and processes</li>
              <li>End-to-end design and execution capabilities</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              The right designer prioritizes problem-solving, efficiency, and measurable outcomes—not
              just visual appeal. For complex builds, early input from <Link to="/services/mep" className="text-primary hover:underline">MEP design &amp; consultancy</Link> teams can also ensure the interior concept integrates with core building systems.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2
              id="conclusion-invest-in-commercial-interiors-that-work-for-you"
              className="text-3xl font-bold text-primary"
            >
              Conclusion: Invest in Commercial Interiors That Work for You
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial interior designers play a critical role in shaping spaces that support
              productivity, brand growth, and employee wellbeing. Their expertise combines strategic
              planning, creativity, and functionality to deliver environments that evolve with
              business needs.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Whether you are launching a new office, renovating a retail store, or upgrading a
              corporate facility, investing in professional commercial interior design services
              creates long-term value, stronger brand perception, and more engaged teams.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning to upgrade your commercial space?
              Consult experienced commercial interior designers to create a workspace that reflects
              your brand, supports your people, and drives measurable business results.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-10">
            <aside className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">Related Services</h3>
              <ul className="space-y-4">
                {relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-10">
            <h3 className="text-2xl font-bold text-primary mb-8">Related Blogs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-primary font-medium inline-flex items-center gap-1">
                      Read More <ChevronRight className="h-4 w-4" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
