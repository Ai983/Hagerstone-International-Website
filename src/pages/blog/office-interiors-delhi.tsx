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

const slug = "office-interiors-delhi";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;
const publishedIso = "2026-04-13T09:00:00+05:30";

// Hero image — Connaught Place heritage-style office (Unsplash CDN, dimensioned for OG 1200x630)
const ogImage =
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&h=630&q=80";
const heroImageAlt =
  "Heritage-style office interior with exposed brick, arched windows, and bespoke joinery in Connaught Place, Delhi by Hagerstone International";

const faqs = [
  {
    q: "Who are the best office interior designers in Delhi?",
    a: "The best office interior designers in Delhi combine design expertise with technical MEP capability and turnkey delivery experience. Look for a company with a substantial portfolio of corporate office interiors in Delhi, positive client references, and an integrated design-and-build model. Hagerstone International is consistently recognised as one of the top office interior design companies in Delhi for corporate and Fortune 500 clients.",
  },
  {
    q: "What is the price of office interiors in Delhi?",
    a: "Office interior prices in Delhi range from ₹800–₹1,200/sq. ft. for budget fit-outs, ₹1,500–₹2,500/sq. ft. for mid-range corporate office interiors in Delhi, and ₹3,000–₹6,000+ per sq. ft. for luxury specifications. Contact Hagerstone International for a free estimate specific to your building and scope.",
  },
  {
    q: "How long does an office interior fit-out take in Delhi?",
    a: "A standard office interior fit-out in Delhi for 5,000–15,000 sq. ft. typically takes 8–14 weeks from design sign-off. Heritage buildings in Connaught Place or NDMC-jurisdiction properties may add 2–4 weeks for approvals. An experienced office interior designer in Delhi will give you a realistic programme upfront.",
  },
  {
    q: "Do you offer luxury office interiors in Delhi?",
    a: "Yes. Hagerstone International delivers luxury office interiors in Delhi for law firms, financial institutions, Fortune 500 companies, and premium co-working operators. Our luxury office interior projects in Delhi feature imported materials, bespoke joinery, high-end lighting, and smart building integration.",
  },
  {
    q: "Can you design small office interiors in Delhi?",
    a: "Absolutely. Hagerstone International specialises in small office interiors in Delhi as well as large corporate campuses. We bring the same design quality and project management discipline to every office interior project in Delhi, regardless of size.",
  },
  {
    q: "Do you handle office renovation in Delhi?",
    a: "Yes — office renovation in Delhi is one of our core services. Whether you are refreshing an existing space or doing a full strip-out and refit, our design-and-build team manages the complete office renovation process in Delhi from brief to handover.",
  },
];

const tocItems = [
  { id: "market-2026", label: "Delhi's Office Interiors Market in 2026: What's Changed" },
  { id: "ideas-2026", label: "Modern Office Interior Design Ideas for Delhi Offices in 2026" },
  { id: "cost", label: "Office Interior Design Cost in Delhi: 2026 Price Guide" },
  { id: "small-offices", label: "Small Office Interiors in Delhi: Smart Design for Tight Spaces" },
  { id: "choose", label: "How to Choose the Right Office Interior Designer in Delhi" },
  { id: "hagerstone", label: "Hagerstone International: Delivering Office Interiors Across Delhi" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const relatedServices = [
  { title: "Office Design & Build Services", href: "/services/office-design-build" },
  { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
  { title: "MEP Design & Consultancy", href: "/services/mep" },
  { title: "HVAC Installation", href: "/services/hvac" },
];

export default function OfficeInteriorsDelhiBlog() {
  const relatedBlogPosts = getRecentPosts(6)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const structuredData = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    createBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: "Office Interiors Delhi", url: canonicalUrl },
    ]),
    {
      "@type": "BlogPosting",
      headline:
        "Office Interiors Delhi: The Complete 2026 Guide for Corporate & Commercial Spaces",
      description:
        "Top office interiors in Delhi — luxury, modern & turnkey office interior design by Hagerstone International. Serving Connaught Place, Nehru Place, Okhla, Saket & all of Delhi.",
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
        "office interiors Delhi",
        "best office interior designers Delhi",
        "office interior design cost Delhi",
        "luxury office interiors Delhi",
        "turnkey office fit out Delhi",
        "office interior Connaught Place",
        "office interior Nehru Place",
        "office interior Saket",
      ],
      wordCount: 2300,
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
        title="Office Interiors Delhi: Best Office Interior Designers, Cost & Trends 2026"
        description="Top office interiors in Delhi — luxury, modern & turnkey office interior design by Hagerstone International. Serving Connaught Place, Nehru Place, Okhla, Saket & all of Delhi. Free consultation."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="office interiors Delhi, office interior designers Delhi, best office interior designers Delhi, luxury office interiors Delhi, office interior design cost Delhi, turnkey office fit out Delhi, office interior Connaught Place, office interior Nehru Place, office interior Saket, office interior Aerocity, office interior Okhla, office renovation Delhi"
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
              Office Interiors Delhi
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="max-w-4xl mx-auto px-4 pb-8">
          <div className="mb-4 flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              <MapPin className="h-3.5 w-3.5" /> Delhi NCT
            </span>
            <span className="text-muted-foreground">Design Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Office Interiors Delhi: The Complete 2026 Guide for Corporate &amp; Commercial Spaces
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> Hagerstone International
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> April 13, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 12 min read
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

        {/* TOC */}
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
            <strong>Office interiors in Delhi</strong> span the full spectrum — from the heritage
            grandeur of Connaught Place to the sleek glass towers of Aerocity, from the mid-market
            commercial density of Nehru Place to the premium south Delhi addresses of Saket and
            Vasant Kunj. Delhi's corporate landscape is as diverse as the city itself, and the best
            <strong> office interior designers in Delhi</strong> understand that one size never fits
            all.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            This guide covers everything you need to know about <strong>office interior design in Delhi</strong>{" "}
            in 2026 — costs, trends, how to choose the right company, and what separates truly great
            office interiors in Delhi from mediocre ones.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-10">
            Hagerstone International is a leading office interior design and build company serving
            Delhi from our Noida headquarters and our Bangalore studio, with 11+ years of delivery,
            500+ corporate clients, and a full in-house team of designers, MEP engineers, and
            project managers.
          </p>

          {/* Market 2026 */}
          <section id="market-2026" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Delhi's Office Interiors Market in 2026: What's Changed
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Delhi's commercial office interior design market has seen significant evolution in the
              last two years. Three trends are shaping demand in 2026 more than any others.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>First,</strong> the return-to-office movement has driven a wave of office
              renovation and refurbishment in Delhi — companies that shelved their fit-out plans
              during uncertain years are now investing to create offices that genuinely compete with
              the home environment for employee preference.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Second,</strong> there is a growing polarisation between basic budget office
              interiors in Delhi (driven by cost pressure in the NCR's saturated commercial market)
              and premium and luxury office interiors in Delhi (driven by the war for talent in
              sectors like fintech, law, consulting, and pharmaceuticals). The middle ground is
              compressing.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Third,</strong> sustainability credentials are increasingly factoring into
              office interior design decisions in Delhi — particularly for companies with ESG
              reporting requirements or tenants in green-certified buildings.
            </p>
          </section>

          {/* Ideas 2026 */}
          <section id="ideas-2026" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Modern Office Interior Design Ideas for Delhi Offices in 2026
            </h2>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              Connaught Place &amp; Central Delhi: Heritage Meets Modern
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              The commercial buildings around Connaught Place present a unique design challenge —
              older building stock with height constraints, listed facades, and complex MEP
              infrastructure. The best office interior designers in Delhi approach these buildings
              as creative opportunities. Exposed brick, dark metal accents, industrial lighting, and
              bespoke joinery that references architectural heritage can produce <strong>modern office
              interiors in Delhi's historic heart</strong> that feel genuinely unique.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
              "Connaught Place is unlike any other commercial address in India. The buildings carry
              history — and the best office interiors in Delhi's historic heart lean into it.
              Exposed brick. Arched windows. Dark metal. Bespoke joinery. When you pair colonial-era
              architecture with precision modern interior design, you get something no glass tower
              can replicate — an office with genuine character and a story to tell. Hagerstone
              International specialises in office interiors inside Delhi's heritage commercial
              buildings — navigating NDMC approvals, listed facade requirements, and complex MEP
              infrastructure so you don't have to."
            </blockquote>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              South Delhi Offices: Premium and Brand-Conscious
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Saket, Vasant Kunj, and Greater Kailash commercial addresses attract businesses that
              want <strong>premium office interiors in South Delhi</strong> — executive-quality
              materials, impressive receptions, and spaces that communicate success to high-value
              clients. Hagerstone delivers luxury office interiors in South Delhi with full MEP
              integration and bespoke joinery.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
              "In South Delhi — Saket, Vasant Kunj, Greater Kailash — your office needs to
              communicate one thing above all else: credibility. The best luxury office interiors in
              Delhi for law firms, investment banks, and senior consulting practices are not loud.
              They are refined. Dark oak panelling. Leather surfaces. Brass details. Warm lighting
              that flatters the room and the people in it."
            </blockquote>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              East &amp; West Delhi: Value-Led Corporate Interiors
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Rohini, Janakpuri, Dwarka, and Okhla commercial zones house a large volume of small
              and mid-range office interiors in Delhi. These projects demand smart design that
              maximises usability and visual quality within tighter budgets — exactly the kind of
              challenge our{" "}
              <Link to="/services/office-design-build" className="text-accent hover:underline">
                design and build model
              </Link>{" "}
              is built for.
            </p>

            <h3 className="text-xl font-bold text-primary mt-8 mb-3">
              Aerocity &amp; Hospitality-Adjacent Offices: International Standard
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Delhi's Aerocity zone demands internationally benchmarked office interiors that meet
              the expectations of global travellers and MNC tenants. We deliver office interior
              projects in Aerocity that match international Grade A building standards for MEP,
              fit-out quality, and design sophistication.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
              "Delhi Aerocity plays by international rules. The MNC tenants here expect office
              interiors that match what they would find in Singapore, Dubai, or London — and
              Hagerstone International delivers exactly that. White marble receptions. Minimalist
              open floor plates. Geometric LED ceilings. Frosted glass meeting rooms."
            </blockquote>
          </section>

          {/* Cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Office Interior Design Cost in Delhi: 2026 Price Guide
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              What does office interior design cost in Delhi? Here is a detailed breakdown based on
              hundreds of real projects delivered across the capital.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
              <div className="rounded-xl border border-border p-6 bg-muted/20">
                <h4 className="font-bold text-primary mb-2">Budget</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹800–₹1,200/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Functional, clean office interiors with standard ceilings, economy workstations,
                  basic partitioning, adequate lighting. Suitable for back-office operations,
                  satellite offices, NGOs, and startups in East or West Delhi commercial areas.
                </p>
              </div>
              <div className="rounded-xl border-2 border-primary p-6 bg-primary/5">
                <h4 className="font-bold text-primary mb-2">Mid-Range Corporate</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹1,500–₹2,500/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Most popular specification for professional services, technology, pharma, and
                  growing corporates across Central and South Delhi. Branded reception, glass
                  partitions, quality workstations, collaborative zones, full MEP.
                </p>
              </div>
              <div className="rounded-xl border border-border p-6 bg-muted/20">
                <h4 className="font-bold text-primary mb-2">Luxury</h4>
                <p className="text-2xl font-bold text-accent mb-3">₹3,000–₹6,000+/sq. ft.</p>
                <p className="text-sm text-muted-foreground">
                  Premium corporate office interiors for law firms, investment banks, luxury
                  retailers, Fortune 500 HQs. Bespoke joinery, imported materials, high-end lighting,
                  smart building systems, executive washrooms.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              <strong>Factors that affect office interior prices in Delhi:</strong> building type
              (heritage, Grade A, secondary), NDMC vs MCD jurisdiction, MEP complexity, landlord
              approval requirements, programme timeline, and bespoke content. Projects in Connaught
              Place's NDMC jurisdiction have specific regulatory requirements that affect timeline
              and cost — an experienced office interior company in Delhi will know these
              intimately.
            </p>
          </section>

          {/* Small offices */}
          <section id="small-offices" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Small Office Interiors in Delhi: Smart Design for the Capital's Tight Spaces
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Commercial real estate in Central and South Delhi is among the most expensive in
              India. <strong>Small office interiors in Delhi</strong> — under 3,000 sq. ft. —
              require exceptional design efficiency. Key strategies include: vertical storage to
              reduce floor footprint, glass partitions to maintain visual openness and light,
              activity-based layouts that eliminate the 30–40% of space typically wasted by
              fixed-desk plans, and multifunctional furniture that allows the same space to serve
              multiple functions through the day.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Hagerstone International has delivered over 50 small office interior projects in Delhi
              — from 1,200 sq. ft. boutique law firm offices in Connaught Place to 4,000 sq. ft.
              tech startups in Okhla. In every case, our approach to small office interior design in
              Delhi focuses on creating spaces that feel bigger, work harder, and look more
              expensive than their square footage suggests.
            </p>
          </section>

          {/* Choose */}
          <section id="choose" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              How to Choose the Right Office Interior Designer in Delhi
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Delhi has hundreds of interior designers and interior design companies competing for
              your project. Here is how to separate the genuine specialists from the generalists.
            </p>
            <ul className="space-y-4 my-6">
              <li>
                <strong className="text-primary">Look for commercial-only or commercial-led portfolios.</strong>{" "}
                Many Delhi interior designers work across residential and commercial. The best
                office interior designers in Delhi focus on commercial and corporate — they
                understand workplace strategy, MEP coordination, and the compliance requirements of
                commercial buildings in ways that residential designers simply do not.
              </li>
              <li>
                <strong className="text-primary">Insist on in-house MEP.</strong> Delhi's summers
                are brutal and HVAC design is mission-critical for any office interior in Delhi. A
                company with in-house MEP engineers will design the HVAC system as part of the
                interior design — not as an afterthought bolted on by a subcontractor.
              </li>
              <li>
                <strong className="text-primary">Check their delivery model.</strong> Turnkey
                design-and-build companies provide a single contract, a single point of
                accountability, and typically faster delivery than traditional multi-vendor
                arrangements. For most office interior projects in Delhi, a turnkey design-and-build
                approach saves 10–20% in time and cost.
              </li>
              <li>
                <strong className="text-primary">Ask about regulatory experience.</strong> Office
                fit-outs in Delhi require various approvals depending on the building and
                municipality — NDMC, MCD, DDA, and fire authority requirements all differ. An
                experienced office interior company in Delhi will have navigated these processes
                dozens of times and will know how to minimise approval delays.
              </li>
            </ul>
          </section>

          {/* Hagerstone */}
          <section id="hagerstone" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-12">
              Hagerstone International: Delivering Office Interiors Across Delhi
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hagerstone International delivers office interiors across all of Delhi — from
              Connaught Place and Nehru Place to Saket, Okhla, Jasola, Aerocity, Rohini, Janakpuri,
              and Dwarka. Our Delhi office interior projects cover corporate headquarters,
              pharmaceutical offices, co-working spaces, law firm offices, financial services
              interiors, and hospitality environments.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              What makes Hagerstone the right choice for office interiors in Delhi is our integrated
              model. We are not a design firm that hands over to a contractor. We are not a
              contractor that does design as an afterthought. We are an integrated{" "}
              <Link to="/services/office-design-build" className="text-accent hover:underline">
                office design and build company
              </Link>{" "}
              — with designers, MEP engineers, quantity surveyors, and site managers all working
              together from your first brief through to the day you move in.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              With 11+ years of experience, 7M+ sq. ft. delivered, and 500+ satisfied clients across
              Delhi NCR and India, we bring a depth of corporate office interior design experience
              in Delhi that few companies can match.
            </p>
            <div className="my-8">
              <Link
                to="/office-design-delhi"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                See our full Delhi office design services →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 mt-12">
              Frequently Asked Questions: Office Interiors in Delhi
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
              Ready to transform your office in Delhi?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact Hagerstone International for a free consultation and site visit anywhere
              across the capital.
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
                <MapPin className="h-4 w-4" /> Serving all of Delhi
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
