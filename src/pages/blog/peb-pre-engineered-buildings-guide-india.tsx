import { Link } from "react-router-dom";
import { Calendar, ChevronRight, User } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FaqSection from "@/components/blog/FaqSection";
import RelatedTopics from "@/components/blog/RelatedTopics";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { getRelatedPosts } from "@/data/blogPosts";
import {
  AUTHOR_NAME,
  AUTHOR_PROFILE_PATH,
  AUTHOR_ROLE,
  BRAND_NAME,
  SHORT_BRAND_NAME,
  SITE_URL,
  authorSchema,
  buildFaqSchema,
  buildSchemaGraph,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import type { FaqItem } from "@/lib/seo";

const slug = "peb-pre-engineered-buildings-guide-india";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const ogImage =
  "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1600&h=1067&q=80";

const relatedTopics = [
  "Pre-Engineered Buildings",
  "Steel Structures",
  "Industrial Construction",
  "Warehouses",
  "PEB Design",
];

const faqItems: FaqItem[] = [
  {
    question: "What is a pre-engineered building (PEB)?",
    answer:
      "A PEB is a steel structure where the primary frame, secondary members (purlins and girts), and cladding are designed and fabricated off-site to an optimised, often tapered profile, then bolted together on site. The structural design is engineered specifically for the loads the building will carry, rather than assembled from standard hot-rolled sections sized generically — which is what makes PEB frames lighter and faster to erect than conventional steel construction for the same span.",
  },
  {
    question: "How is PEB different from conventional steel or RCC construction?",
    answer:
      "Conventional steel construction uses standard rolled sections and is typically designed and fabricated with more built-in redundancy; RCC (reinforced concrete) construction is cast or precast on site. PEB frames are custom-engineered per project — tapered where bending moment is lower, uniform where it's higher — and largely factory-fabricated, which shortens site construction time and typically reduces steel tonnage for clear-span industrial and commercial buildings.",
  },
  {
    question: "What's a tapered frame and why does PEB use it?",
    answer:
      "A tapered frame varies its cross-section depth along its length to match the bending moment diagram — deeper where stress is highest, shallower where it's lower — instead of using a constant-depth section throughout. It uses less steel for the same structural capacity, which is a core reason PEB is typically more material-efficient than conventional steel framing for large clear-span buildings.",
  },
  {
    question: "How long does PEB construction take?",
    answer:
      "PEB is faster than conventional construction mainly because fabrication happens in parallel with site foundation work, and erection itself is largely bolted assembly rather than on-site welding or concrete curing time. Exact timelines depend heavily on span, building size, and site readiness, so they're best confirmed against your specific structural design rather than a generic number.",
  },
  {
    question: "What does PEB construction cost in India?",
    answer:
      "Cost is driven primarily by steel tonnage (a function of span, bay spacing, and design loads), roofing and wall cladding specification (standard sheeting vs insulated PIR/rock wool panels), foundation type, and any mezzanine or crane-gantry loading. As with any structural project, itemized quotes against an identical load and span specification are the only reliable way to compare fabricators.",
  },
  {
    question: "What foundation does a PEB need?",
    answer:
      "It depends on soil bearing capacity and the column base reactions from the frame design — a raft foundation works where soil bearing capacity is adequate near the surface, while a pile foundation is needed where it isn't. What matters more than the foundation type itself is timing: concrete needs close to 28 days to cure to design strength, so foundation work has to start early and run in parallel with steel fabrication, not after it, or it becomes the actual bottleneck on an otherwise fast PEB schedule.",
  },
  {
    question: "Does a PEB's location actually change its design?",
    answer:
      "Yes, significantly. IS 875 sets basic wind speeds that vary widely across India — from calmer interior regions to the cyclone-prone eastern and southeastern coastline — and IS 1893 maps seismic risk from Zone II through Zone V, covering the Himalayan belt, the Northeast, and parts of Gujarat. Both feed directly into how much steel the frame and its connections need. A frame design isn't safely transferable between sites in different wind or seismic zones without re-running the load assessment.",
  },
  {
    question: "How much maintenance does a PEB structure need?",
    answer:
      "Steel members are protected by galvanising or paint applied during fabrication, and that coating needs periodic inspection and recoating over the building's life — more frequently in coastal or high-humidity environments where corrosion risk is higher. Roof sheeting fasteners, gutters, and downspouts also need regular checks, since a small issue caught early is far cheaper than the water damage or sheet failure that results if it's ignored.",
  },
];

export default function PebPreEngineeredBuildingsGuideIndiaBlog() {
  const lastUpdated = new Date();
  const lastUpdatedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(lastUpdated);
  const lastUpdatedIso = lastUpdated.toISOString();

  const relatedBlogPosts = getRelatedPosts(slug, 3);

  const tocItems = [
    { id: "introduction", label: "Introduction: What a Pre-Engineered Building Actually Is" },
    { id: "peb-vs-conventional", label: "PEB vs Conventional RCC/Steel Construction" },
    { id: "how-a-peb-frame-works", label: "How a PEB Frame Works" },
    { id: "peb-design-engineering-process", label: "The PEB Design & Engineering Process" },
    { id: "wind-seismic-zones", label: "Wind & Seismic Zones: Why Location Changes the Design" },
    { id: "foundation-design", label: "Foundation Design: Why It's Not an Afterthought" },
    { id: "roofing-cladding-insulation", label: "Roofing, Wall Cladding & Insulation" },
    { id: "mezzanines-and-extensions", label: "Mezzanine Floors & Steel Extensions" },
    { id: "peb-accessories", label: "PEB Accessories: Cranes, Ventilation & Natural Light" },
    { id: "peb-erection", label: "PEB Erection: What Happens On Site" },
    { id: "where-peb-makes-sense", label: "Where PEB Makes Sense" },
    { id: "peb-costs-india", label: "What PEB Costs in India" },
    { id: "peb-maintenance", label: "Maintenance & Lifespan of a PEB" },
    { id: "common-peb-mistakes", label: "Common PEB Mistakes & Risks" },
    { id: "choosing-a-peb-contractor", label: "Choosing a PEB Contractor" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "PEB Structures", href: "/services/peb" },
    { title: "PEB Design & Engineering", href: "/services/peb/peb-design-and-engineering" },
    { title: "PEB Industrial Buildings & Warehouses", href: "/services/peb/peb-industrial-buildings-and-warehouses" },
    { title: "PEB Roofing & Wall Cladding", href: "/services/peb/peb-roofing-and-wall-cladding" },
    { title: "Mezzanine Floors & Steel Structures", href: "/services/peb/mezzanine-floors-and-steel-structures" },
  ];

  return (
    <>
      <SEOHead
        title={`Pre-Engineered Buildings (PEB) Explained | ${SHORT_BRAND_NAME}`}
        description="A technical guide to pre-engineered buildings (PEB) in India — design & engineering, roofing & cladding, mezzanines, warehouses, and real cost drivers."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Dramatic dark, angular steel space-frame truss structure"
        ogType="article"
        keywords="pre-engineered buildings india, peb construction, peb design engineering, industrial steel structures, peb warehouse construction, peb cost india, peb vs rcc construction, peb erection contractor"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Pre-Engineered Buildings: How Tapered Steel Frames Cut Cost and Construction Time",
            description:
              "A technical guide to pre-engineered buildings (PEB) in India — design & engineering, roofing & cladding, mezzanines, warehouses, and real cost drivers.",
            image: [ogImage],
            author: authorSchema,
            publisher: {
              "@type": "Organization",
              name: BRAND_NAME,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
            },
            datePublished: lastUpdatedIso,
            dateModified: lastUpdatedIso,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
            articleSection: "Technical",
            keywords:
              "pre-engineered buildings india, peb construction, peb design engineering, industrial steel structures, peb warehouse construction, peb cost india, peb vs rcc construction, peb erection contractor",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "Pre-Engineered Buildings, Explained", item: canonicalUrl },
            ],
          },
          buildFaqSchema(faqItems),
        ])}
      />

      <main className="bg-background">
        <article className="min-h-screen">
          <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground flex-wrap">
              <li className="flex items-center space-x-2">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Pre-Engineered Buildings, Explained</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Pre-Engineered Buildings: How Tapered Steel Frames Cut Cost and Construction Time
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>
                  By{" "}
                  <Link to={AUTHOR_PROFILE_PATH} className="text-foreground font-medium hover:text-primary transition-colors">
                    {AUTHOR_NAME}
                  </Link>
                  , {AUTHOR_ROLE}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  Last updated <time dateTime={lastUpdatedIso}>{lastUpdatedLabel}</time>
                </span>
              </div>
            </div>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/PebStructure.avif"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/PebStructure.avif 1600w"
              sizes="(max-width: 768px) 100vw, 1600px"
              alt="Dramatic dark, angular steel space-frame truss structure"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-lg"
              width="1600"
              height="1067"
              loading="eager"
              decoding="async"
            />
          </header>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <nav aria-label="Table of contents" className="bg-muted/50 p-6 md:p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
              <ol className="space-y-3">
                {tocItems.map((item, index) => (
                  <li key={item.id} className="text-base">
                    <a href={`#${item.id}`} className="text-primary hover:underline transition-colors">
                      {index + 1}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="introduction" className="text-3xl font-bold text-primary">
              Introduction: What a Pre-Engineered Building Actually Is
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              "Pre-engineered building" gets used loosely to mean any metal shed, but it's
              actually a specific structural approach: the primary frame is custom-engineered for
              the exact loads the building will carry — not assembled from generic, standard-sized
              sections — then largely fabricated off-site and bolted together on site. That
              distinction is why PEB is usually lighter, faster to erect, and more cost-efficient
              than conventional steel or RCC construction for large clear-span buildings.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide covers how a PEB frame actually works, the design-to-erection process,
              where PEB genuinely makes sense versus conventional construction, and what drives
              cost in India.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It also covers the parts that don't show up in a generic pitch — how wind and
              seismic zone actually change a frame's design, why foundation timing (not steel
              fabrication) is often the real scheduling constraint, what accessories like crane
              gantries and ventilation need to be planned into the frame rather than added later,
              and what upkeep a finished PEB structure actually needs. Most of this is routine
              engineering, but it's exactly the routine engineering that separates a PEB built
              for its actual site conditions from one that just looks like every other metal shed.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-vs-conventional" className="text-3xl font-bold text-primary">
              PEB vs Conventional RCC/Steel Construction
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Conventional steel construction typically uses standard hot-rolled sections sized
              with more built-in redundancy, assembled with a mix of site welding and bolting.
              RCC construction is cast (or precast) concrete, which brings its own curing-time
              and formwork sequencing constraints. PEB frames, by contrast, are engineered
              per-project — the steel section varies along its length to match the actual bending
              moment the structure experiences — and are largely factory-fabricated, so site work
              is mostly bolted assembly.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The trade-off: PEB is typically faster and lighter for large clear-span,
              rectangular-plan buildings (warehouses, factories, workshops), while conventional
              RCC or steel construction remains more common for buildings with complex geometry,
              heavy point loads, or multi-storey occupied space where PEB's clear-span advantage
              matters less. See{" "}
              <Link to="/services/construction/industrial-and-factory-construction" className="text-primary hover:underline">
                industrial &amp; factory construction
              </Link>{" "}
              for how these approaches get combined on a single site.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="how-a-peb-frame-works" className="text-3xl font-bold text-primary">
              How a PEB Frame Works
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The defining feature of a PEB frame is the{" "}
              <Link to="/glossary/tapered-frame-peb" className="text-primary hover:underline">
                tapered frame
              </Link>{" "}
              — the primary rafter and column sections get deeper where bending moment is
              highest and shallower where it's lowest, instead of using one constant-depth
              section for the whole span. This uses meaningfully less steel than a uniform
              section sized for the worst-case moment throughout.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The primary frame is then braced and clad using secondary structural members —{" "}
              <Link to="/glossary/purlins-and-girts" className="text-primary hover:underline">
                purlins and girts
              </Link>{" "}
              — which support the roof and wall sheeting between the main frames and transfer
              wind and gravity loads back into the primary structure.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-design-engineering-process" className="text-3xl font-bold text-primary">
              The PEB Design &amp; Engineering Process
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              PEB design starts with a load assessment — dead load, live load, wind load, and
              seismic load per{" "}
              <a
                href="https://www.bis.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IS 875 and IS 1893
              </a>{" "}
              — with the steel frame itself designed to{" "}
              <a
                href="https://www.bis.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IS 800
              </a>
              . That load assessment feeds into frame, bracing, and
              connection design, and finally fabrication drawings issued to the shop floor.
              Foundation design runs in parallel and depends on soil conditions and column
              reactions from the frame design, not the other way around, which is why foundation
              work can often start before the full structural design is finalised — provided the
              reactions are confirmed early. See{" "}
              <Link to="/services/peb/peb-design-and-engineering" className="text-primary hover:underline">
                PEB design &amp; engineering
              </Link>{" "}
              for the full process.
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/StructureSketch.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/StructureSketch.jpg 1200w"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Close-up of hands drafting a technical structural drawing with a ruler"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="wind-seismic-zones" className="text-3xl font-bold text-primary">
              Wind &amp; Seismic Zones: Why Location Changes the Design
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A PEB frame designed for Nagpur isn't automatically safe in Bhuj or Guwahati. IS 875
              maps India into wind zones with basic wind speeds ranging roughly from 33 m/s in the
              calmest interior regions to 55-50 m/s along the cyclone-prone eastern and
              southeastern coastline — a difference that directly changes how much steel a frame
              needs to resist wind uplift and lateral load. IS 1893 does the same for seismic
              risk, from Zone II (lowest hazard, much of peninsular India) through Zone V (highest
              hazard, the Himalayan belt, the Northeast, and Kutch), which governs how the frame
              and its connections are designed to survive ground motion rather than just gravity
              and wind loads.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The practical implication: a PEB fabricator quoting a "standard" frame design
              without confirming the project's actual wind and seismic zone is either
              over-engineering (wasting steel and cost) or under-engineering (a genuine safety
              risk) the structure. This is also why fabrication drawings from one project — even
              a similar span and use case — can't simply be reused for a different site without
              re-running the load assessment.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="foundation-design" className="text-3xl font-bold text-primary">
              Foundation Design: Why It's Not an Afterthought
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A PEB's speed advantage is easy to lose at the foundation stage if it's treated as
              a separate, sequential task rather than a parallel one. Column base reactions from
              the frame design determine the foundation loads, and soil bearing capacity
              determines whether a{" "}
              <Link to="/glossary/raft-vs-pile-foundation" className="text-primary hover:underline">
                raft or pile foundation
              </Link>{" "}
              is appropriate — a decision that has to be made from an actual soil investigation,
              not assumed from a nearby project's foundation type. See{" "}
              <Link to="/services/construction/rcc-structure-and-foundations" className="text-primary hover:underline">
                RCC structure &amp; foundations
              </Link>{" "}
              for how this civil scope is typically delivered.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The real scheduling constraint, though, is{" "}
              <Link to="/glossary/concrete-curing" className="text-primary hover:underline">
                concrete curing
              </Link>{" "}
              time — foundations typically need close to 28 days to reach design strength before
              they can safely carry the erected frame's full load, and that clock doesn't speed
              up just because steel fabrication is running fast in parallel. Projects that start
              foundation excavation and casting early, alongside fabrication rather than after it,
              are the ones that actually realise PEB's speed advantage; projects that treat
              foundation as something to start once the steel arrives usually find the foundation,
              not the frame, is what determines their actual handover date.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="roofing-cladding-insulation" className="text-3xl font-bold text-primary">
              Roofing, Wall Cladding &amp; Insulation
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              PEB envelopes are typically metal sheeting on the roof and walls, with skylights and
              ventilators integrated into the roof design for daylighting and natural
              ventilation. Where thermal performance or acoustic control matters — cold storage,
              conditioned warehousing, or noise-sensitive operations — insulated panel systems
              (PIR or rock wool core) replace single-skin sheeting. See{" "}
              <Link to="/services/peb/peb-roofing-and-wall-cladding" className="text-primary hover:underline">
                PEB roofing &amp; wall cladding
              </Link>{" "}
              and{" "}
              <Link to="/services/facade-glazing/wall-and-roof-insulation" className="text-primary hover:underline">
                wall &amp; roof insulation
              </Link>{" "}
              for system options.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Sheeting profile and gauge matter more than they might seem to from a drawing.
              Deeper trapezoidal profiles span further between purlins without oil-canning
              (visible waviness), and thicker gauge sheeting holds up better against wind uplift
              and hail impact — both are specification decisions tied back to the same wind-zone
              data that shapes the primary frame, not arbitrary finish choices. Roof pitch also
              affects drainage performance in high-rainfall regions, which is worth discussing
              explicitly with the design team rather than defaulting to whatever profile a
              fabricator stocks most readily.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="mezzanines-and-extensions" className="text-3xl font-bold text-primary">
              Mezzanine Floors &amp; Steel Extensions
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              PEB shells are frequently fitted with structural steel mezzanine floors after the
              fact — for office space within a warehouse, additional storage, or production
              area — which requires its own load design distinct from the primary frame, since
              mezzanine loading wasn't necessarily accounted for in the original structure. See{" "}
              <Link to="/services/peb/mezzanine-floors-and-steel-structures" className="text-primary hover:underline">
                mezzanine floors &amp; steel structures
              </Link>
              .
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The design question that actually matters is whether a mezzanine is planned from
              day one or added after the shell is already standing. Building it into the original
              frame design lets the primary columns and foundations account for the extra load
              from the start; retrofitting one into an existing PEB shell means checking — and
              often reinforcing — columns and footings that weren't sized for it, which is a
              meaningfully more expensive way to arrive at the same additional floor area.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-accessories" className="text-3xl font-bold text-primary">
              PEB Accessories: Cranes, Ventilation &amp; Natural Light
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A lot of what makes a PEB shed actually functional as a factory or warehouse gets
              decided after the primary frame is settled. EOT (electric overhead traveling) crane
              gantries, if the facility needs one, have to be accounted for in the frame design
              from the start — the gantry columns and crane loads are a structural input, not
              something bolted on afterward. Getting this sequencing backwards is one of the more
              expensive PEB mistakes, since retrofitting crane capacity into a frame that wasn't
              designed for it usually means reinforcing or replacing columns.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Ventilation and daylighting are simpler additions but still worth planning
              deliberately: turbo ventilators or ridge ventilators vent hot air that collects
              under a metal roof, reducing the load on any mechanical ventilation, while
              translucent roof sheets or skylight panels bring in natural light without the
              energy cost of running lighting through daylight hours — both are far cheaper to
              specify at the roofing design stage than to add after the sheeting is installed.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-erection" className="text-3xl font-bold text-primary">
              PEB Erection: What Happens On Site
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Once the foundation has cured and anchor bolts are set, erection follows a fairly
              predictable sequence: columns are set and plumbed first, rafters are lifted and
              bolted to the columns to complete each primary frame bay, bracing is installed to
              stabilise the frame laterally, and purlins and girts are then fixed across the bays
              before roof and wall sheeting closes the building up. Because the bulk of the
              connections are bolted rather than field-welded, erection is largely a fitting and
              torquing exercise rather than a welding one — which is both faster and easier to
              quality-check, since a bolted connection can be visually verified in a way a site
              weld often can't be without additional testing.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              None of this removes the ordinary risks of steel erection — working at height,
              crane operations, and temporary bracing before the structure is fully tied
              together are exactly where erection accidents happen on any steel project, PEB or
              otherwise, which is why sequencing and site safety supervision matter as much as
              the structural design itself.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="where-peb-makes-sense" className="text-3xl font-bold text-primary">
              Where PEB Makes Sense
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              PEB is most common for factories, warehouses, and logistics sheds — buildings that
              need large, column-free clear spans, fast erection, and a straightforward
              rectangular plan. See{" "}
              <Link to="/services/peb/peb-industrial-buildings-and-warehouses" className="text-primary hover:underline">
                PEB industrial buildings &amp; warehouses
              </Link>{" "}
              and the{" "}
              <Link to="/industries/factories-and-manufacturing" className="text-primary hover:underline">
                factories &amp; manufacturing
              </Link>{" "}
              industry page for how this plays out across different facility types.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Beyond the obvious warehouse use case, PEB shows up in cold storage facilities
              (where insulated panel cladding does double duty as thermal envelope), sports
              complexes and indoor stadiums (where long clear spans avoid mid-court columns),
              aircraft hangars (extreme clear spans and tall clear heights), and large-format
              retail or showroom buildings that want an open, column-free floor. The common
              thread across all of these isn't the industry — it's the need for a large,
              obstruction-free span, which is exactly what a tapered steel frame is engineered to
              deliver efficiently.
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/Warehouse.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/Warehouse.jpg 1200w"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Interior of a large warehouse with tall storage racking under steel roof structure"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-costs-india" className="text-3xl font-bold text-primary">
              What PEB Costs in India
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Steel tonnage is the primary cost driver, and tonnage is itself a function of span,
              bay spacing, eave height, and design loads (wind zone, seismic zone, crane-gantry
              loads if any) — not a fixed rate per sq ft. Roofing and cladding specification
              (standard single-skin sheeting vs insulated panels), foundation type based on soil
              conditions, and any mezzanine loading add on top of the base frame cost.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              As with any structural project, comparing fabricators only makes sense against an
              identical load and span specification — a lower quote against a looser spec isn't
              actually a lower price for the same building.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="peb-maintenance" className="text-3xl font-bold text-primary">
              Maintenance &amp; Lifespan of a PEB
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A well-designed and properly coated PEB structure has a long service life, but it's
              not maintenance-free. Steel members are protected against corrosion by galvanising
              or painting at fabrication, and that coating has its own service life — periodic
              inspection and recoating, particularly in coastal or high-humidity environments, is
              what keeps corrosion from becoming a structural issue rather than a cosmetic one.
              Roof sheeting fasteners, gutters, and downspouts need regular checks too, since a
              blocked gutter or a loosened fastener is a much cheaper problem to catch early than
              the water damage or sheet failure it causes if ignored.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              None of this is unique to PEB — any steel structure needs the same category of
              upkeep — but because PEB buildings are so often industrial facilities running
              continuous operations, maintenance windows have to be planned around production
              schedules rather than assumed to be freely available, which is worth factoring into
              the facility's maintenance plan from handover rather than discovering later.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-peb-mistakes" className="text-3xl font-bold text-primary">
              Common PEB Mistakes &amp; Risks
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Finalising foundation design before column reactions from the frame design are confirmed, forcing rework</li>
              <li>Under-specifying wind or seismic load zone to save on steel tonnage</li>
              <li>Not accounting for future mezzanine or crane-gantry loads in the original frame design</li>
              <li>Choosing single-skin sheeting for a use case (cold storage, noise-sensitive operations) that actually needed insulated panels</li>
              <li>Treating PEB as identical to conventional steel procurement, missing the long lead time for fabrication</li>
              <li>Reusing a fabrication drawing from a different site's wind or seismic zone without re-running the load assessment</li>
              <li>Skipping planned crane-gantry, ventilation, or skylight requirements until after the primary frame is fabricated</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-peb-contractor" className="text-3xl font-bold text-primary">
              Choosing a PEB Contractor
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Look for in-house structural design and engineering capability (not just erection),
              a fabrication facility that can hold tolerances at scale, and coordination
              discipline between the PEB frame design and the civil/foundation team — since
              foundation reactions and frame design are interdependent, a contractor who owns
              both scopes closes that loop faster than two separate vendors handing off drawings.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's also worth confirming how a fabricator actually handles load re-verification
              for your site — ask specifically whether the quoted frame design was engineered for
              your project's wind and seismic zone, or adapted from a template design, since
              that distinction determines whether the structure is genuinely safe for its
              location or just generically sized. And because crane gantries, mezzanines, and
              insulated cladding are all common additions, a contractor who can accommodate them
              within the original frame design avoids the far costlier path of reinforcing a
              structure after it's already erected.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              PEB is a genuinely different structural approach from conventional steel or RCC
              construction, not just a faster version of the same thing — the tapered-frame
              engineering and largely off-site fabrication are what make it lighter and quicker to
              erect. Getting the load assessment, foundation coordination, and cladding
              specification right up front is what determines whether that advantage actually
              shows up in your project's timeline and budget.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning an industrial or warehouse building?
              Hagerstone's PEB team handles structural design, fabrication, and installation
              end to end — see our{" "}
              <Link to="/services/peb" className="text-primary hover:underline">
                PEB structures services
              </Link>
              .
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
        </article>

        <RelatedArticles posts={relatedBlogPosts} />
      </main>
    </>
  );
}
