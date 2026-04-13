import { Link } from "react-router-dom";
import { Calendar, Clock, User, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getRecentPosts } from "@/data/blogPosts";
import {
  BRAND_NAME,
  SITE_URL,
  buildSchemaGraph,
  createBreadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const slug = "office-interiors-noida";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;
const publishedIso = "2026-04-13T09:00:00+05:30";

// Hero image — neutral Noida workspace hero (Unsplash CDN, crawlable, dimensioned for OG 1200x630)
const ogImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&h=630&q=80";
const heroImageAlt =
  "Modern luxury office interior in Noida with biophilic design, living wall, and natural wood finishes by Hagerstone International";

const faqs = [
  {
    q: "Who are the best office interior designers in Noida?",
    a: "The best office interior designer in Noida for your project depends on your budget, size, and sector. Look for a firm with a proven portfolio of commercial office interiors in Noida, in-house MEP capability, and a turnkey delivery model. Hagerstone International, headquartered in Sector 2 Noida, is consistently ranked among the top office interior design companies in Noida for corporate and Fortune 500 clients.",
  },
  {
    q: "How much does office interior design cost in Noida?",
    a: "Office interior design costs in Noida range from ₹800 to ₹5,000+ per sq. ft. depending on finish level. Budget fit-outs start at ₹800–₹1,200/sq. ft., mid-range corporate office interiors in Noida typically cost ₹1,500–₹2,500/sq. ft., and luxury or premium projects run ₹3,000–₹5,000+ per sq. ft.",
  },
  {
    q: "How long does an office interior fit-out take in Noida?",
    a: "A typical office interior fit-out in Noida for 5,000–15,000 sq. ft. takes 8–14 weeks from design sign-off to handover. Smaller office interiors in Noida (under 3,000 sq. ft.) can be completed in 4–6 weeks. Timelines depend on design complexity, landlord approval speed, and MEP requirements.",
  },
  {
    q: "What is a turnkey office interior in Noida?",
    a: "A turnkey office interior in Noida means a single company manages everything from design through construction and handover — so you receive a completed, move-in-ready office. This includes space planning, 3D design, BOQ, civil works, MEP (HVAC, electrical, plumbing, fire), joinery, furniture, and snagging. Hagerstone International provides fully turnkey office interior services in Noida.",
  },
  {
    q: "Do you offer luxury office interiors in Noida?",
    a: "Yes. Hagerstone International delivers luxury office interiors in Noida for Fortune 500 companies, large corporates, and premium co-working operators. Our luxury office interior projects in Noida feature premium materials, bespoke joinery, high-end lighting design, and smart building integration.",
  },
];

const tocItems = [
  { id: "why-matters", label: "Why Office Interiors Matter More Than Ever in Noida" },
  { id: "trends-2026", label: "Top Office Interior Design Trends in Noida for 2026" },
  { id: "cost", label: "Office Interior Design Cost in Noida: What to Expect in 2026" },
  { id: "choose", label: "How to Choose the Best Office Interior Designer in Noida" },
  { id: "hagerstone", label: "Hagerstone International: Your Trusted Office Interior Designer in Noida" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const relatedServices = [
  { title: "Office Design & Build Services", href: "/services/office-design-build" },
  { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
  { title: "MEP Design & Consultancy", href: "/services/mep" },
  { title: "HVAC Installation", href: "/services/hvac" },
];

export default function OfficeInteriorsNoidaBlog() {
  const relatedBlogPosts = getRecentPosts(6)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const structuredData = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    createBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: "Office Interiors Noida", url: canonicalUrl },
    ]),
    {
      "@type": "BlogPosting",
      headline:
        "Office Interiors Noida: The Complete Guide to Designing Your Perfect Workspace in 2026",
      description:
        "Looking for the best office interiors in Noida? Hagerstone International delivers luxury & modern office interior design, turnkey fit-out & commercial interiors across Noida.",
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
      datePublished: publishedIso,
      dateModified: publishedIso,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      articleSection: "Office Design & Build",
      keywords: [
        "office interiors Noida",
        "best office interior designers Noida",
        "office interior design cost Noida",
        "luxury office interiors Noida",
        "turnkey office fit out Noida",
        "commercial interior designers Noida",
      ],
      wordCount: 2200,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]);

  return (
    <>
      <SEOHead
        title="Office Interiors Noida: Best Office Interior Designers & Design Ideas 2026"
        description="Looking for the best office interiors in Noida? Hagerstone International delivers luxury & modern office interior design, turnkey fit-out & commercial interiors across Noida. Free consultation."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="office interiors Noida, office interior designers Noida, best office interior designers Noida, luxury office interiors Noida, office interior design cost Noida, turnkey office fit out Noida, commercial interior designers Noida, modern office interior design Noida, office interior design Sector 62, office interior design Noida Expressway"
        structuredData={structuredData}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-24 pb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li aria-current="page" className="text-foreground font-medium">
              Office Interiors Noida
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="max-w-4xl mx-auto px-4 pb-8">
          <div className="mb-4 flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              <MapPin className="h-3.5 w-3.5" /> Noida, Uttar Pradesh
            </span>
            <span className="text-muted-foreground">Design Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Office Interiors Noida: The Complete Guide to Designing Your Perfect Workspace in 2026
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> Hagerstone International
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> April 13, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 11 min read
            </span>
          </div>
          <img
            src={ogImage}
            alt={heroImageAlt}
            className="w-full h-[280px] md:h-[420px] object-cover rounded-xl shadow-luxury"
            width={1200}
            height={630}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </header>

        {/* Table of Contents */}
        <aside className="max-w-4xl mx-auto px-4 mb-12">
          <nav aria-label="Table of contents" className="rounded-xl border border-border bg-muted/20 p-6">
            <h2 className="text-lg font-semibold text-primary mb-3">In this guide</h2>
            <ol className="space-y-2 text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-accent hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            If you are searching for <strong>office interiors in Noida</strong> that truly transform
            how your team works, you have landed in the right place. Noida has become one of
            India's most dynamic corporate corridors — home to Fortune 500 companies,
            fast-growing startups, pharmaceutical giants, and technology leaders. And as businesses
            compete harder for top talent, the quality of <strong>office interior design in Noida</strong>{" "}
            has never mattered more.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-10">
            At Hagerstone International, headquartered in Sector 2, Noida, we have been designing
            and building exceptional office interiors across Noida for over 11 years. In this guide,
            we cover everything you need to know — from design trends to cost, from choosing the
            right office interior designer in Noida to understanding what a turnkey fit-out actually
            includes.
          </p>

          {/* Section: Why Matters */}
          <section id="why-matters" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Why Office Interiors Matter More Than Ever in Noida
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Noida's commercial market has evolved dramatically. In Sector 62, Sector 63, Sector 125,
              and across the Noida Expressway corridor, companies are competing to offer workspaces
              that attract and retain talent. A poorly designed office is no longer just an aesthetic
              problem — it is a business problem.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Research consistently shows that well-designed office interiors improve employee
              productivity by 20–30%, reduce absenteeism, and make a measurable difference in how
              clients and recruits perceive your brand. The best <strong>corporate office interiors in Noida</strong>{" "}
              in 2026 are no longer just rows of workstations. They are carefully planned
              environments that balance focused work, collaboration, wellness, and brand identity —
              all within a budget that makes commercial sense.
            </p>
          </section>

          {/* Section: Trends */}
          <section id="trends-2026" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Top Office Interior Design Trends in Noida for 2026
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              As one of the leading <strong>office interior designers in Noida</strong>, Hagerstone
              International tracks what is working right now across the NCR market. Here are the
              trends we are delivering most frequently for Noida-based clients this year.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              1. Activity-Based Working (ABW) Layouts
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              The most effective <strong>modern office interiors in Noida</strong> are moving away
              from fixed assigned desks toward activity-based environments. Employees choose their
              setting based on the task — a focus pod for deep work, a collaborative table for team
              projects, a lounge zone for informal catch-ups. ABW layouts typically deliver 20–25%
              more usable capacity from the same floor plate, making them especially popular for
              <strong> small office interiors in Noida</strong> where every square foot counts.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              2. Luxury Office Interiors with Biophilic Design
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Luxury office interiors in Noida</strong> are increasingly defined by natural
              materials — real wood, stone surfaces, rattan accents — combined with indoor planting,
              living walls, and maximised natural light. Biophilic design is no longer a premium
              add-on; it is becoming a baseline expectation for companies hiring from Noida's
              competitive tech and BFSI talent pool.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              3. Small Office Interiors — Making Every Square Foot Work
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Small office interiors in Noida present a unique design challenge. With real estate
              prices climbing across Sector 2, Sector 16, Sector 62, and the Expressway corridor,
              making every square foot work harder is essential. The most effective strategies
              include using height (tall storage, mezzanine platforms), multifunctional furniture
              (meeting tables that convert to training rooms), glass partitions that create visual
              separation without losing light, and activity-based layouts that eliminate the wasted
              space that comes with fixed-desk plans.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Hagerstone International has delivered small office interiors across Noida ranging
              from 1,500 sq. ft. boutique offices to 10,000 sq. ft. tech startup campuses — always
              with the same commitment to maximising usability and creating spaces that feel
              generous even at modest scale.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              4. Brand-Integrated Office Interiors
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              The best <strong>commercial interior designers in Noida</strong> design offices that
              communicate your brand identity from the moment someone walks through the door. Brand
              colours, materials, graphics, and spatial layout all carry messaging. In 2026,
              brand-integrated office interiors in Noida are a key differentiator for companies
              building strong employer brand presence. Your office reception is your brand's first
              handshake.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              5. High-Performance Acoustic Design
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              With open-plan office workspaces in Noida dominating new fit-outs, acoustic design has
              become critical. Acoustic ceiling panels, upholstered screens, carpet zones, and white
              noise systems are now standard features of well-designed modern office interiors
              across Noida's Expressway corridor and Sector 62 tech parks.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              6. Smart &amp; Tech-Integrated Workspaces
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Wireless charging surfaces, room booking panels, AV-over-IP meeting room systems, and
              IoT-enabled building controls are now expected in corporate office interiors in Noida.
              These must be coordinated at the design stage — a key reason why engaging a specialist
              office interior designer in Noida with{" "}
              <Link to="/services/mep" className="text-accent hover:underline">
                in-house MEP capability
              </Link>{" "}
              is so important.
            </p>
          </section>

          {/* Section: Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Office Interior Design Cost in Noida: What to Expect in 2026
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              One of the most searched questions for anyone planning office interiors in Noida is:
              what will it cost? Here is an honest, data-led breakdown from our team.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
              <div className="rounded-xl border border-border p-6 bg-muted/20">
                <h4 className="font-bold text-primary mb-2">Economy / Budget</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹800–₹1,200/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Basic partitioning, standard suspended ceilings, functional lighting, minimal
                  joinery. Suited to back-office functions, budget-conscious startups, or satellite
                  offices in Sector 58–65.
                </p>
              </div>
              <div className="rounded-xl border-2 border-primary p-6 bg-primary/5">
                <h4 className="font-bold text-primary mb-2">Mid-Range Corporate</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹1,500–₹2,500/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Quality workstations, glass partitions, feature reception, brand-integrated
                  interiors, and full MEP (HVAC, electrical, plumbing, fire). Most popular range for
                  IT, pharma, and professional services.
                </p>
              </div>
              <div className="rounded-xl border border-border p-6 bg-muted/20">
                <h4 className="font-bold text-primary mb-2">Luxury / Premium</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹3,000–₹5,000+/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Premium materials, bespoke joinery, high-end lighting design, smart building
                  integration, executive-suite finishes. Common for Fortune 500 HQs and financial
                  institutions on the Expressway.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              What Drives the Cost of Office Interiors in Noida?
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              The key cost drivers are the quality of materials, MEP complexity (particularly HVAC
              in Noida's extreme summers), bespoke joinery requirements, the specific building's
              access and logistics constraints, and your programme timeline. Accelerated programmes
              — common when lease deadlines are fixed — typically cost 10–15% more due to additional
              resource loading.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The single biggest cost-saving opportunity in any office interior fit-out in Noida is
              engaging a design-and-build company like Hagerstone International, where design, MEP,
              and construction sit under one contract. This typically saves 10–20% versus the
              traditional route of separate designer + MEP consultant + contractor.
            </p>
          </section>

          {/* Section: Choose */}
          <section id="choose" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              How to Choose the Best Office Interior Designer in Noida
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Noida has hundreds of interior designers and interior design companies claiming to be
              the best. Here is what to actually look for.
            </p>
            <ul className="space-y-4 my-6">
              <li>
                <strong className="text-primary">In-house MEP capability.</strong> The biggest
                source of delays and cost overruns in office fit-outs across Noida is poor
                coordination between the interior designer and the MEP contractor. Look for a
                company whose MEP engineers and interior designers work together from day one.
              </li>
              <li>
                <strong className="text-primary">A relevant portfolio.</strong> Ask to see office
                interior projects in Noida of a similar size and sector to yours. Residential design
                experience does not translate to corporate office interiors in Noida.
              </li>
              <li>
                <strong className="text-primary">A clear contract structure.</strong> Turnkey
                design-and-build contracts offer the greatest protection. One contract, one point of
                accountability, one team from brief to handover.
              </li>
              <li>
                <strong className="text-primary">Knowledge of Noida's commercial property market.</strong>{" "}
                An experienced office interior design company in Noida will know the landlord
                approval process in Sector 62, the building management protocols at major Noida
                tech parks, and the local authority requirements that affect your fit-out programme.
              </li>
              <li>
                <strong className="text-primary">References you can actually call.</strong> Ask for
                references from previous office interior design clients in Noida and follow up with
                a real conversation about delivery quality, responsiveness, and snagging resolution.
              </li>
            </ul>
          </section>

          {/* Section: Hagerstone */}
          <section id="hagerstone" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Hagerstone International: Your Trusted Office Interior Designer in Noida
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Based in Sector 2, Noida, Hagerstone International is one of the most experienced
              office interior design companies in Noida, with 11+ years of delivery, 7M+ sq. ft.
              completed, and 500+ satisfied corporate clients. Our in-house team covers every aspect
              of your office interior project in Noida — from concept design and space planning
              through 3D visualisation, BOQ preparation,{" "}
              <Link to="/services/mep" className="text-accent hover:underline">MEP design</Link>,{" "}
              <Link to="/services/interior-fit-out" className="text-accent hover:underline">
                interior fit-out
              </Link>
              , and final handover.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We serve clients across all of Noida's major commercial districts — Sector 2, Sector
              16, Sector 62, Sector 63, Sector 125, Sector 132, Sector 135, the Noida Expressway
              corridor, and Greater Noida — as well as{" "}
              <Link to="/office-design-delhi" className="text-accent hover:underline">Delhi</Link>,{" "}
              <Link to="/office-design-gurgaon" className="text-accent hover:underline">Gurgaon</Link>,
              Bangalore, and 25+ cities nationally.
            </p>
            <div className="my-8">
              <Link
                to="/office-design-noida"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                See our full Noida office design services →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 mt-12">
              Frequently Asked Questions: Office Interiors in Noida
            </h2>
            <div className="space-y-6 not-prose">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border p-6 bg-card">
                  <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 my-16">
          <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
              Ready to transform your office in Noida?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact Hagerstone International for a free site visit and consultation anywhere
              across Noida and Greater Noida.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/contact">Request Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20"
              >
                <a href="tel:+918882979328">
                  <Phone className="h-4 w-4 mr-2" /> +91 88829 79328
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <a href="mailto:ea@hagerstone.com" className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4" /> ea@hagerstone.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Sector 2, Noida
              </span>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="max-w-4xl mx-auto px-4 my-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Related services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="flex items-center justify-between rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <span className="font-medium text-foreground">{service.title}</span>
                <ChevronRight className="h-5 w-5 text-accent" />
              </Link>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        {relatedBlogPosts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 my-16">
            <h2 className="text-2xl font-bold text-primary mb-6">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-accent font-medium mb-2">{post.category}</p>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
