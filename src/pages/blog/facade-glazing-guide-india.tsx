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

const slug = "facade-glazing-guide-india";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const ogImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&h=1067&q=80";

const relatedTopics = [
  "Facade Engineering",
  "Curtain Wall Systems",
  "ACP Cladding",
  "Structural Glazing",
  "Building Envelope",
];

const faqItems: FaqItem[] = [
  {
    question: "What's the difference between a curtain wall and ACP cladding?",
    answer:
      "A curtain wall is a structural glazing system — mullions and transoms carry glass (or spandrel panels) as the building's primary weatherproof envelope, typically unitised or stick-built. ACP (aluminium composite panel) cladding is a rainscreen finish fixed over a structural wall or backup frame — it's not load-bearing glazing, and it's usually cheaper per sq m. Buildings often use both: curtain wall glazing where vision glass is needed, ACP or metal cladding on spandrel and opaque sections.",
  },
  {
    question: "What is spider glazing and when is it used?",
    answer:
      "Spider glazing is a point-fixed, frameless glazing system — glass panels are held by stainless steel spider fittings bolted through routed holes, tensioned by tie rods or a cable-net structure, with no visible frame. It's used for atria, entrance lobbies, and feature facades where an unbroken glass surface is the design intent, and it costs meaningfully more per sq m than a framed curtain wall because of the engineering and fabrication precision it demands.",
  },
  {
    question: "What is SHGC and why does it matter for facade glass?",
    answer:
      "SHGC (Solar Heat Gain Coefficient) measures how much solar heat a glass unit lets through — a lower SHGC blocks more heat. It directly affects the building's cooling load, so facade glass specification and HVAC sizing aren't independent decisions: a facade spec'd with a high-SHGC glass to save on glass cost can quietly inflate the HVAC tonnage (and running cost) needed to keep the building comfortable.",
  },
  {
    question: "What determines facade and glazing cost in India?",
    answer:
      "System type is the biggest driver — ACP cladding costs less per sq m than a unitised curtain wall, which costs less than spider glazing. Within any system, glass specification (single vs double-glazed, low-E coatings, SHGC/U-value targets), facade height and wind-load engineering, and the amount of custom fabrication (curves, non-standard mullion spacing) all move the number. As with any fit-out cost, itemized quotes against an identical spec are the only reliable way to compare vendors.",
  },
  {
    question: "How long does facade installation take?",
    answer:
      "It depends heavily on system and building size, but the sequence is fairly fixed: design and engineering, a physical mock-up and performance testing (air/water/structural), fabrication, then site installation — glazing is rarely the critical path early on, but a facade that isn't designed and ordered early enough (long lead times on imported glass and hardware) frequently becomes the critical path later.",
  },
  {
    question: "What's the difference between anodising and powder coating for aluminium?",
    answer:
      "Both are protective finishes for aluminium facade sections, but they work differently. Anodising is an electrochemical process that thickens the aluminium's natural oxide layer, generally offering better long-term resistance to UV and salt-air weathering, though with a more limited colour range. Powder coating is a sprayed and baked-on finish that offers far more colour and texture flexibility, but typically doesn't match anodising's weathering performance in harsh coastal or industrial environments.",
  },
  {
    question: "How often does a commercial facade need maintenance?",
    answer:
      "Sealant joints are the main recurring item, with a typical service life of roughly 15-20 years before resealing is needed to maintain weatherproofing, though exposure and sealant quality shift that range. Glass, aluminium sections, and cladding panels generally need far less intervention if specified correctly upfront — which is why access for maintenance (gondola tracks, BMU rails, or rope-access anchor points) is worth planning into the facade design rather than treating as an afterthought.",
  },
];

export default function FacadeGlazingGuideIndiaBlog() {
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
    { id: "introduction", label: "Introduction: Why Facade Choice Isn't Just Aesthetic" },
    { id: "what-facade-glazing-covers", label: "What Facade & Glazing Covers" },
    { id: "choosing-a-facade-system", label: "Choosing a Facade System" },
    { id: "doors-windows-architectural-elements", label: "Aluminium Doors, Windows & Architectural Elements" },
    { id: "engineering-behind-the-glass", label: "The Engineering Behind the Glass" },
    { id: "facade-delivery-process", label: "The Facade Delivery Process: Survey to Handover" },
    { id: "facade-costs-india", label: "What Facade & Glazing Costs in India" },
    { id: "climate-zones", label: "Facade Design Across India's Climate Zones" },
    { id: "common-facade-mistakes", label: "Common Facade Mistakes & Risks" },
    { id: "facade-maintenance", label: "Facade Maintenance & Long-Term Performance" },
    { id: "choosing-a-facade-contractor", label: "Choosing a Facade Contractor" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Facade & Glazing Contractors", href: "/services/facade-glazing" },
    { title: "Curtain Wall Systems", href: "/services/facade-glazing/curtain-wall-systems" },
    { title: "Cladding — ACP, Metal, Tile & Stone", href: "/services/facade-glazing/cladding-systems" },
    { title: "Spider Glazing Systems", href: "/services/facade-glazing/spider-glazing-systems" },
    { title: "Aluminium Doors & Windows", href: "/services/facade-glazing/aluminium-doors-and-windows" },
  ];

  return (
    <>
      <SEOHead
        title={`How to Choose a Commercial Facade System | ${SHORT_BRAND_NAME}`}
        description="A technical guide to facade & glazing for commercial buildings in India — curtain walls, ACP cladding, structural glazing, wind/thermal performance, and costs."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Dramatic upward view of glass curtain-wall skyscrapers against the sky"
        ogType="article"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Curtain Wall, Cladding or Spider Glazing: How to Choose a Commercial Facade System",
            description:
              "A technical guide to facade & glazing for commercial buildings in India — curtain walls, ACP cladding, structural glazing, wind/thermal performance, and costs.",
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
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "Choosing a Facade System", item: canonicalUrl },
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
                <span className="text-foreground">Choosing a Facade System</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Curtain Wall, Cladding or Spider Glazing: How to Choose a Commercial Facade System
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
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/LowAngleBuilding.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/LowAngleBuilding.jpg 1600w"
              sizes="(max-width: 768px) 100vw, 1600px"
              alt="Dramatic upward view of glass curtain-wall skyscrapers against the sky"
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
              Introduction: Why Facade Choice Isn't Just Aesthetic
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              A building's facade is the single largest system decision that touches structure,
              energy performance, safety, and appearance all at once — and it's usually decided
              earlier in the project than most owners expect. Get it right and the building
              performs quietly for decades. Get it wrong and you're looking at water ingress,
              inflated HVAC bills, or a facade that simply can't be built to the drawings within
              budget.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              "Facade and glazing" isn't one product — it's a family of systems (curtain wall,
              ACP and metal cladding, spider glazing, rainscreen systems) that get selected based
              on building height, budget, climate, and design intent, each with different
              structural, thermal, and fabrication implications. This guide walks through how
              those systems differ, the engineering that sits behind the glass, and what actually
              drives facade cost in India.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It also covers the parts of the scope that rarely make it into a design
              presentation but end up mattering just as much — aluminium doors and windows,
              architectural elements like canopies and railings, how facade specs should actually
              change across India's climate zones, and what ongoing maintenance a finished facade
              needs. None of it is exotic; most of it is simply decided early, rarely explained
              clearly to the owner making the call, and expensive to revisit once construction is
              underway.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-facade-glazing-covers" className="text-3xl font-bold text-primary">
              What Facade &amp; Glazing Covers
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              As a scope of work, facade and glazing typically spans:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>System selection and structural/wind-load engineering</li>
              <li>Glass specification — type, coatings, performance targets</li>
              <li>Shop drawings, fabrication, and material procurement</li>
              <li>Mock-up construction and performance testing (air, water, structural)</li>
              <li>Site installation, sealing, and weatherproofing</li>
              <li>Aluminium doors and windows, and architectural elements (canopies, skylights, railings)</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              It also has to be coordinated tightly with the building's structure and{" "}
              <Link to="/blog/mep-design-consultancy-india" className="text-primary hover:underline">
                MEP design
              </Link>
              , since facade fixings interface with the structural frame and the envelope's
              thermal performance directly affects HVAC load calculations.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-facade-system" className="text-3xl font-bold text-primary">
              Choosing a Facade System
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">Curtain Wall Systems</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Curtain wall is a structural glazing system where mullions and transoms — the
              vertical and horizontal frame members — carry glass or spandrel panels as the
              building's primary envelope, engineered against wind and seismic loads under{" "}
              <a
                href="https://www.bis.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IS 875 and IS 1893
              </a>
              . It comes in three main forms: unitised (factory-built
              panels craned into place, faster on tall buildings), semi-unitised, and
              conventional stick-built (assembled piece by piece on site, more common on
              lower-rise or budget-constrained projects). See{" "}
              <Link to="/services/facade-glazing/curtain-wall-systems" className="text-primary hover:underline">
                curtain wall systems
              </Link>{" "}
              for how system choice and mock-up testing work in practice.
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/ArchitecturalDesign.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/ArchitecturalDesign.jpg 1200w"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Angular building exterior clad in geometric metal panels, showing a modern cladding system"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />

            <h3 className="text-2xl font-semibold text-foreground">ACP &amp; Metal Cladding</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              ACP (aluminium composite panel), metal, tile, and stone cladding are rainscreen
              finishes fixed over a structural backup wall rather than load-bearing glazing —
              usually the lower-cost option for opaque facade sections, spandrel bands, and
              feature elements. Fire performance matters here specifically: ACP core material
              (FR/B1-rated vs standard polyethylene core) is a life-safety specification, not
              just an aesthetic one. See{" "}
              <Link to="/services/facade-glazing/cladding-systems" className="text-primary hover:underline">
                cladding systems
              </Link>{" "}
              and the{" "}
              <Link to="/glossary/acp-fr-b1-core" className="text-primary hover:underline">
                ACP FR/B1 core
              </Link>{" "}
              glossary entry for what that rating actually means.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Spider Glazing &amp; Frameless Systems</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Spider glazing uses point-fixed stainless steel fittings — routels, tie rods, or a
              cable-net structure — to hold glass with no visible frame, typically for atria,
              lobbies, and feature entrances where an unbroken glass surface is the design
              intent. It's engineered per-project rather than off a catalogue system, which is
              reflected in cost. Details are in{" "}
              <Link to="/services/facade-glazing/spider-glazing-systems" className="text-primary hover:underline">
                spider glazing systems
              </Link>
              .
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Rainscreen Ventilated Systems</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              A rainscreen ventilated facade separates the weatherproofing (an outer panel layer)
              from the insulation and structure behind it with a drained, ventilated cavity —
              improving thermal performance and moisture management compared to a
              directly-fixed facade. It's more common on premium commercial and institutional
              projects; see{" "}
              <Link to="/services/facade-glazing/rainscreen-ventilated-systems" className="text-primary hover:underline">
                rainscreen ventilated systems
              </Link>
              .
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/FacadeDesign.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/FacadeDesign.jpg 1200w"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Curved building facade with a wavy perforated metal cladding pattern"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="doors-windows-architectural-elements" className="text-3xl font-bold text-primary">
              Aluminium Doors, Windows &amp; Architectural Elements
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Facade scope rarely stops at the glazed wall itself. Aluminium doors and windows —
              sliding, casement, and openable systems — sit alongside curtain wall and cladding as
              a separate but coordinated scope, usually specified with the same thermal-break and
              acoustic-rated glazing decisions as the main facade so the building envelope
              performs consistently. See{" "}
              <Link to="/services/facade-glazing/aluminium-doors-and-windows" className="text-primary hover:underline">
                aluminium doors &amp; windows
              </Link>{" "}
              for system vs custom-fabricated options.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Frameless &amp; Automatic Entrance Doors</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Building entrances often get a distinct treatment from the rest of the facade —
              patch-fitted frameless glass doors, or automatic sliding entrances, both engineered
              for high-cycle daily use rather than the occasional operation a standard door
              hardware set is rated for. See{" "}
              <Link to="/services/facade-glazing/frameless-doors" className="text-primary hover:underline">
                frameless doors
              </Link>{" "}
              for how these are specified and installed.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Canopies, Skylights &amp; Railings</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Canopies, pergolas, skylights, and balusters are structural elements in their own
              right, not decorative add-ons — a canopy has to be engineered for wind uplift the
              same way the main facade is, and a skylight needs its own drainage and waterproofing
              detailing where it penetrates the roof plane. Railings carry their own
              handrail-load engineering requirement, whether fabricated in aluminium, stainless
              steel, mild steel, or glass. See{" "}
              <Link to="/services/facade-glazing/architectural-elements" className="text-primary hover:underline">
                architectural elements
              </Link>{" "}
              and{" "}
              <Link to="/services/facade-glazing/railings" className="text-primary hover:underline">
                railings
              </Link>{" "}
              for the engineering behind these details.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="engineering-behind-the-glass" className="text-3xl font-bold text-primary">
              The Engineering Behind the Glass
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Facade performance is specified in numbers, not adjectives.{" "}
              <Link to="/glossary/shgc" className="text-primary hover:underline">SHGC</Link>{" "}
              (Solar Heat Gain Coefficient) governs how much solar heat the glass lets through,
              which ties directly into HVAC load — see our{" "}
              <Link to="/blog/commercial-hvac-systems" className="text-primary hover:underline">
                commercial HVAC buyer's guide
              </Link>{" "}
              for how that load gets calculated on the other side of this decision.{" "}
              <Link to="/glossary/low-e-glass" className="text-primary hover:underline">Low-E glass</Link>{" "}
              coatings and{" "}
              <Link to="/glossary/double-glazed-unit-dgu" className="text-primary hover:underline">
                double-glazed units (DGUs)
              </Link>{" "}
              are the usual levers for improving thermal performance without changing the visible
              system.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Safety glazing is a separate, non-negotiable spec:{" "}
              <Link to="/glossary/laminated-vs-toughened-glass" className="text-primary hover:underline">
                laminated vs toughened glass
              </Link>{" "}
              determines how the glass fails (laminated holds together when cracked; toughened
              shatters into small, less dangerous fragments), and{" "}
              <Link to="/glossary/heat-soak-testing" className="text-primary hover:underline">
                heat soak testing
              </Link>{" "}
              screens toughened glass for nickel sulfide inclusions that can cause spontaneous
              breakage months after installation. Structural connections have their own
              specification layer too —{" "}
              <Link to="/glossary/structural-silicone-glazing" className="text-primary hover:underline">
                structural silicone glazing
              </Link>{" "}
              and{" "}
              <Link to="/glossary/thermal-break-aluminium" className="text-primary hover:underline">
                thermal break aluminium
              </Link>{" "}
              sections both affect long-term performance in ways that aren't visible from the
              ground.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Two more details separate a well-engineered facade from an adequate one. The
              opaque bands hiding floor slabs and services between windows are{" "}
              <Link to="/glossary/spandrel-glass" className="text-primary hover:underline">
                spandrel glass
              </Link>
              , typically backed with insulation and finished to match the vision glass so the
              facade reads as continuous from outside — a detail that's easy to get visually
              wrong if it's not planned alongside the structural bay layout. And in a{" "}
              <Link to="/services/facade-glazing/curtain-wall-systems" className="text-primary hover:underline">
                unitised curtain wall
              </Link>{" "}
              system specifically, the{" "}
              <Link to="/glossary/curtain-wall-brackets" className="text-primary hover:underline">
                brackets
              </Link>{" "}
              connecting each panel to the building structure carry tolerances that absorb
              construction variance and building movement — undersized or poorly detailed
              brackets are a common source of water leaks that only show up after a few monsoon
              seasons, not during initial testing.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Aluminium finish is its own specification decision:{" "}
              <Link to="/glossary/anodising-vs-powder-coating" className="text-primary hover:underline">
                anodising vs powder coating
              </Link>{" "}
              trades off cosmetic flexibility (powder coating offers more colour options) against
              long-term weathering performance (anodising typically holds up better against UV
              and salt-air exposure). And the physics behind a{" "}
              <Link to="/glossary/rainscreen-ventilated-facade" className="text-primary hover:underline">
                rainscreen ventilated facade
              </Link>{" "}
              — a drained, pressure-equalised cavity that manages moisture rather than trying to
              seal it out entirely — is worth understanding even for owners who ultimately choose
              a simpler directly-fixed system, since it's the benchmark ventilated systems get
              compared against on long-term weathertightness.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="facade-delivery-process" className="text-3xl font-bold text-primary">
              The Facade Delivery Process: Survey to Handover
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Facade delivery follows a fairly fixed sequence: site survey and structural
              coordination, system design and engineering, a physical{" "}
              <Link to="/glossary/facade-mock-up-testing" className="text-primary hover:underline">
                mock-up built and tested
              </Link>{" "}
              for air, water, and structural performance before full fabrication begins,
              fabrication and material procurement, then site installation and sealing.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The site survey step matters more than it sounds like it should. As-built
              structural dimensions on an actual building routinely differ from the architectural
              drawings by a few millimetres per floor — not enough to matter structurally, but
              enough that a facade fabricated strictly to drawing dimensions without a field
              survey can arrive on site not quite fitting. Unitised systems tolerate this better
              than stick-built ones, since each panel is adjustable within a bracket tolerance,
              but the survey step is what makes that tolerance sufficient rather than a gamble.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Installation itself typically proceeds floor by floor, working with the same crane
              or hoist logistics as the rest of the building's construction — which is why facade
              installation sequencing is usually planned jointly with the main contractor's
              tower crane schedule rather than independently. Working-at-height safety and
              temporary edge protection during installation are standard considerations on any
              facade site, not specific to any one system type.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Two things catch owners off guard here. First, imported glass, hardware, and
              specialised aluminium sections often carry long lead times — facade design and
              ordering has to start early, or it becomes the critical path on an otherwise
              on-schedule project. Second, mock-up testing isn't a formality: air, water, and
              structural performance are typically verified against{" "}
              <a
                href="https://www.astm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ASTM
              </a>{" "}
              test methods (E283 for air infiltration, E331 for water penetration), and it's the
              stage that catches a detailing or sealant problem before it's repeated across an
              entire building's worth of panels.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="facade-costs-india" className="text-3xl font-bold text-primary">
              What Facade &amp; Glazing Costs in India
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              System type is the single biggest cost driver: ACP and metal cladding is generally
              the lowest-cost option per sq m, unitised curtain wall sits above it, and spider
              glazing or custom rainscreen systems sit at the top because of the
              per-project engineering and fabrication precision they require. Within any system,
              glass specification (single vs double-glazed, coatings, performance targets),
              facade height and wind-load engineering, and the amount of non-standard
              fabrication (curves, oversized panels, custom mullion spacing) all move the number
              further.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              As with{" "}
              <Link to="/blog/office-fit-out-cost-guide-india-2026" className="text-primary hover:underline">
                office fit-out costs
              </Link>
              , itemized quotes against an identical system and glass spec are the only reliable
              way to compare facade contractors — a lower headline number often means a lower
              glass or hardware spec, not a more efficient fabrication process.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="climate-zones" className="text-3xl font-bold text-primary">
              Facade Design Across India's Climate Zones
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A facade spec that works in Gurugram doesn't automatically work in Chennai, and
              India's climate range is part of why. In hot, dry regions (much of Rajasthan and
              Gujarat), the priority is minimising solar heat gain — lower SHGC glass, external
              shading, and smaller glazing ratios all help keep cooling load in check. In hot,
              humid coastal cities (Mumbai, Chennai, Kochi), salt-air exposure pushes the finish
              decision toward anodised aluminium and more corrosion-resistant hardware, alongside
              the same low-SHGC glazing priority.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Composite-climate cities like Delhi NCR — hot summers, cold winters — need glazing
              that balances solar control in summer against heat retention in winter, which is
              where low-E coatings earn their keep more than in a purely hot climate. And in the
              limited cold-climate zones (parts of the Himalayan belt), the priority shifts toward
              minimising heat loss rather than heat gain — a genuinely different glazing
              specification, not just a smaller version of the same one. None of this changes
              which facade system to choose, but it changes how that system's glass and finish
              should be specified — which is why a facade designed generically and then "localised"
              late in the process tends to underperform one designed for its actual climate zone
              from the start.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-facade-mistakes" className="text-3xl font-bold text-primary">
              Common Facade Mistakes &amp; Risks
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Specifying glass performance (SHGC/U-value) after the HVAC load calculation is already locked, forcing a mismatch between envelope and cooling capacity</li>
              <li>Ordering long-lead imported materials late, turning the facade into the schedule's critical path</li>
              <li>Skipping or rushing mock-up testing, so a sealant or detailing flaw isn't caught until it's repeated across the whole building</li>
              <li>Treating ACP core fire rating as a cost line to trim rather than a life-safety specification</li>
              <li>Under-engineering wind-load and structural connections on tall or exposed buildings</li>
              <li>Choosing a finish (powder coating vs anodising) on colour alone, without weighing long-term weathering performance</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="facade-maintenance" className="text-3xl font-bold text-primary">
              Facade Maintenance &amp; Long-Term Performance
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A facade doesn't stop needing attention once it's installed and tested. Sealant
              joints have a service life — typically somewhere in the range of 15-20 years
              depending on exposure and sealant quality — after which resealing becomes necessary
              to maintain the weatherproofing the original mock-up testing verified. Planning for
              that maintenance access — gondola tracks, BMU (building maintenance unit) rails, or
              anchor points for rope access — is a design-stage decision, not something that can
              be retrofitted cheaply once the building is occupied and the facade is finished.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Warranty coverage is worth reading closely rather than assuming: structural glazing,
              weatherproofing, and glass unit warranties are often issued separately, by different
              parties (fabricator, glass supplier, sealant manufacturer), with different terms —
              and a facade contractor who owns the full scope end to end is generally easier to
              hold accountable than one coordinating warranty claims across three separate
              vendors after something goes wrong.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-facade-contractor" className="text-3xl font-bold text-primary">
              Choosing a Facade Contractor
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Facade work sits at the intersection of structural engineering, fabrication, and
              site installation, so look for a contractor with in-house design and engineering
              capability (not just installation), a track record of mock-up testing to
              recognised standards, and coordination discipline with the structural and MEP
              teams — facade fixings and building services routinely compete for the same
              structural and ceiling space.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's also worth asking specifically about fabrication capacity and quality control
              on the shop floor — a contractor without their own fabrication facility is
              effectively subcontracting the part of the job where fit, tolerance, and finish
              consistency actually get decided, which makes it harder to hold a single party
              accountable when a panel doesn't fit as drawn. And because facade projects routinely
              overlap with cladding, aluminium fenestration, and architectural elements on the
              same building, a team that can deliver all of it under one scope avoids the
              coordination gaps that show up at the seams between separately contracted systems.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Facade and glazing decisions get made early, are expensive to reverse, and quietly
              determine a building's energy performance for its entire life. Choosing the right
              system family, specifying glass performance deliberately rather than by default,
              and testing before full fabrication are what separate a facade that performs for
              decades from one that starts generating maintenance calls in year two.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning a facade for a new build or renovation?
              Hagerstone's in-house facade team handles design, engineering, fabrication, and
              installation for curtain wall, cladding, and spider glazing systems — see our{" "}
              <Link to="/services/facade-glazing" className="text-primary hover:underline">
                facade &amp; glazing services
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
