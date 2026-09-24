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

const slug = "kokko-town-play-zone-case-study";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const heroImage = "/projects/kokko-town/reception/reception-desk.jpg";
const heroImageAlt =
  "Kokko Town reception desk with a green airplane-window feature wall and backlit signage in Sector 17, Chandigarh";

const streetImage = "/projects/kokko-town/pretend-play-street/street-render.jpg";
const streetImageAlt =
  "Kokko Town pretend-play street with Kokko Cafe, Garage, Supermart and Gas Station facades";

const constructionZoneImage = "/projects/kokko-town/rc-construction-zone/off-road-aerial-1.jpg";
const constructionZoneImageAlt =
  "Aerial view of the Kokko Town RC vehicle off-road obstacle course with rope bridge and log obstacles";

const farmMezzanineImage = "/projects/kokko-town/farm-mezzanine/farm-balcony-train.jpg";
const farmMezzanineImageAlt =
  "Farm-themed mezzanine train-carriage viewing balcony overlooking the Kokko Town ground floor";

const toddlerZoneImage = "/projects/kokko-town/toddler-area/airplane-slide.jpg";
const toddlerZoneImageAlt =
  "Airplane-themed toddler soft play structure with spiral slide at Kokko Town";

const sensoryWallImage = "/projects/kokko-town/magic-wall/sensory-wall-render.jpg";
const sensoryWallImageAlt =
  "Interactive sensory play wall with spinning elements and textured panels at Kokko Town";

const cafeImage = "/projects/kokko-town/cafe/cafe-terrace-render.jpg";
const cafeImageAlt =
  "Kokko Town café terrace with arched colonnade, terrazzo flooring and pendant lighting";

const ogImage = `${SITE_URL}${heroImage}`;

const relatedTopics = [
  "Case Study",
  "Themed Fit-Out",
  "Family Entertainment Centre Design",
  "Turnkey Execution",
  "Custom Fabrication",
];

const faqItems: FaqItem[] = [
  {
    question: "What is Kokko Town and where is it located?",
    answer:
      "Kokko Town is a 6,500 sq. ft. indoor kids' play zone and family café in Sector 17, Chandigarh, built as a two-level miniature town where children role-play across themed zones — a pretend-play street of shopfronts, a farm-themed mezzanine, and a large-scale RC vehicle and construction adventure zone.",
  },
  {
    question: "What did Hagerstone's scope include on this project?",
    answer:
      "Hagerstone delivered Kokko Town end to end: civil works and site modifications across the base and mezzanine levels, complete interior design and theming, MEP execution (electrical, plumbing, and ventilation), custom furniture design and fabrication, and the fabrication of every themed structure and facade on site — a fully turnkey scope from design through handover.",
  },
  {
    question: "What made this project different from a typical commercial fit-out?",
    answer:
      "Almost none of the interior is off-the-shelf. Every shopfront facade — Bank, Hospital, Supermarket, Gas Station, and Garage — is a custom-fabricated structure built to scale for children, not adults, which changes proportions, sightlines, and safety detailing throughout. The design also had to work across two structurally distinct levels — a ground-floor town square and a farm-themed mezzanine — while keeping sightlines open enough for supervising parents to see the whole space from the café.",
  },
  {
    question: "How long did the Kokko Town project take?",
    answer:
      "The project was delivered in roughly 2-3 months from site mobilisation to handover, covering civil works, MEP execution, and the custom fabrication of every themed zone — a fast timeline given the volume of bespoke build work, achieved by running fabrication and site works in parallel rather than sequentially wherever the trades allowed it.",
  },
  {
    question: "What materials were used for the themed structures?",
    answer:
      "The themed facades and play structures are built on a commercial-grade plywood substructure with MDF profiles for detailing, finished to survive continuous contact from young children. Gypsum board false ceilings and partitions, modular electrical distribution, and standard sanitary and plumbing fixtures support the base-building side of the fit-out beneath the themed finishes.",
  },
  {
    question: "How does the design keep children supervised across a two-level space?",
    answer:
      "Primarily through sightlines rather than signage. The café and reception are positioned so a seated parent can see most of the ground floor and a meaningful part of the mezzanine, facade heights on the pretend-play street are kept low enough not to block views across the town square, and higher-intensity zones like the RC vehicle and construction area are physically separated from the toddler soft-play zone so age groups with very different needs aren't sharing the same supervised space.",
  },
];

export default function KokkoTownPlayZoneCaseStudyBlog() {
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
    { id: "introduction", label: "Introduction: Building a Town, Not a Playroom" },
    { id: "the-brief", label: "The Brief" },
    { id: "design-concept", label: "Design Concept: A Two-Level Pretend-Play Town" },
    { id: "the-cafe-and-arrival", label: "The Café & Arrival Experience" },
    { id: "execution-scope", label: "Execution Scope: Civil to Custom Fabrication" },
    { id: "sensory-and-toddler-zones", label: "The Sensory Wall & Toddler Zone" },
    { id: "challenges-solutions", label: "Challenges & How They Were Solved" },
    { id: "materials-and-finishes", label: "Materials & Finishes" },
    { id: "the-result", label: "The Result, By the Numbers" },
    { id: "lessons-for-similar-projects", label: "Lessons for Similar Projects" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Interior Fit-Out Services", href: "/services/interior-fit-out" },
    { title: "MEP Design & Consultancy", href: "/services/mep" },
    { title: "Office Design & Build", href: "/services/office-design-build" },
  ];

  return (
    <>
      <SEOHead
        title={`Case Study: Building Kokko Town | ${SHORT_BRAND_NAME}`}
        description="How Hagerstone delivered Kokko Town, a 6,500 sq ft indoor kids' play zone and family cafe in Chandigarh, end to end — design, civil, MEP, and custom fabrication."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="indoor kids play zone case study, themed fit-out project, family entertainment center design, turnkey fit-out chandigarh, custom fabrication interiors, kids play zone construction cost, play zone design company india"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Case Study: Building Kokko Town",
            description:
              "How Hagerstone delivered Kokko Town, a 6,500 sq ft indoor kids' play zone and family cafe in Chandigarh, end to end — design, civil, MEP, and custom fabrication.",
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
            articleSection: "Case Study",
            keywords:
              "indoor kids play zone case study, themed fit-out project, family entertainment center design, turnkey fit-out chandigarh, custom fabrication interiors, kids play zone construction cost, play zone design company india",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "Kokko Town Case Study", item: canonicalUrl },
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
                <span className="text-foreground">Kokko Town Case Study</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Case Study: Building Kokko Town
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
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-lg"
              style={{ objectPosition: "center 60%" }}
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
              Introduction: Building a Town, Not a Playroom
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Most indoor play zones are a hall filled with equipment. Kokko Town, a 6,500 sq. ft.
              family entertainment centre in Sector 17, Chandigarh, was conceived as something
              different — a miniature two-level town where every corner is a role-play destination,
              not just an activity station. Hagerstone delivered the project end to end: civil
              works, interior design and theming, MEP execution, and the custom fabrication of every
              themed structure on site.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This case study walks through the brief, the design concept, and the execution
              decisions that took Kokko Town from an empty commercial shell to a themed environment
              built specifically for children — the kind of project that doesn't fit neatly into a
              standard office fit-out playbook, and required a different approach at almost every
              stage. See the full project gallery at{" "}
              <Link to="/projects/kokko-town" className="text-primary hover:underline">
                Kokko Town
              </Link>
              .
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="the-brief" className="text-3xl font-bold text-primary">
              The Brief
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Kokko Town's brief was to deliver a family entertainment centre that gave children a
              genuine pretend-play experience — not just slides and ball pits, but a believable
              miniature civic environment where kids could role-play as customers, workers, and
              explorers across a Bank, Hospital, Supermarket, Gas Station, and Garage. The brief also
              called for a family café that let parents relax within full view of the play areas,
              and a farm-themed mezzanine and a large-scale RC vehicle and construction adventure
              zone to give the space variety across age groups and energy levels.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A second, less visible requirement ran underneath all of this: the space had to work
              as a functioning commercial venue from day one, not just as a themed set. That meant
              the civil and MEP backbone — ventilation sized for a continuously occupied indoor play
              space, plumbing for the café and washrooms, and electrical distribution feeding
              lighting, sound, and powered play features across two levels — had to be planned
              alongside the theming rather than retrofitted underneath it once the facades were
              built. On a project this custom, the brief was really two briefs running in parallel:
              an experience brief for the family, and a building-services brief for the operator.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="design-concept" className="text-3xl font-bold text-primary">
              Design Concept: A Two-Level Pretend-Play Town
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The design organises the 6,500 sq. ft. footprint as a walkable town square across two
              levels rather than a single open hall. On the ground floor, a pretend-play street puts
              two-storey Supermarket, Gas Station, and Garage facades — complete with fuel pumps, a
              street lamp, road markings, and a stocked grocery interior — alongside a Bank, Hospital,
              and Café, giving children a full civic role-play circuit rather than one theme repeated
              across the floor.
            </p>
            <img
              src={streetImage}
              alt={streetImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <p className="text-base text-foreground/80 leading-relaxed">
              A farm-themed mezzanine sits above the ground floor, anchored by a train-carriage
              viewing balcony over the backlit Kokko Town marquee sign and a colourful checkered
              floor. The mezzanine gives the space a second, calmer register — a change of pace and
              theme from the busier ground-floor town square — while still keeping sightlines open
              enough that a parent in the café can see most of both levels at once.
            </p>
            <img
              src={farmMezzanineImage}
              alt={farmMezzanineImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="the-cafe-and-arrival" className="text-3xl font-bold text-primary">
              The Café &amp; Arrival Experience
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              First impressions in a family entertainment centre are set at the reception desk, not
              at the first play zone a child reaches. At Kokko Town, a sculptural green feature wall
              with an airplane-window cutout sits behind the reception counter, beneath the backlit
              Kokko Town signage — a deliberate choice to give parents a calm, legible arrival point
              before the visual density of the play zones begins.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The family café carries that same intent through into the space parents actually spend
              most of their time in. It's built as a rooftop-style terrace, with an arched colonnade,
              terrazzo flooring, and pendant lighting that reads closer to a café than an amusement
              venue — a spiral staircase leads up to a games lounge overlooking the arcade below. The
              café's position and sightlines were planned specifically so a seated parent can see
              most of the ground floor and a meaningful slice of the mezzanine without needing to
              stand or move, which shaped where the café was placed in the plan long before its
              interior finishes were decided.
            </p>
            <img
              src={cafeImage}
              alt={cafeImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="execution-scope" className="text-3xl font-bold text-primary">
              Execution Scope: Civil to Custom Fabrication
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Hagerstone's scope covered the full delivery chain: civil works and site modifications
              across the base and mezzanine levels, complete interior design, theming and space
              planning,{" "}
              <Link to="/blog/mep-design-consultancy-india" className="text-primary hover:underline">
                MEP execution
              </Link>{" "}
              (electrical, plumbing, and ventilation), custom furniture design and fabrication, and
              the themed-zone fabrication itself — every pretend-play facade, the arcade structures,
              and the play equipment were built specifically for this space rather than sourced as
              standard catalogue units.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The large-scale RC vehicle and construction adventure zone required its own
              engineering pass — a rope bridge, wooden ramps, log obstacles, an RC vehicle track, and
              a full excavation pit with scaled construction machinery, all needing the same
              structural and safety scrutiny as any commercial play equipment, just built to a
              custom design rather than installed from a supplier's standard range.
            </p>
            <img
              src={constructionZoneImage}
              alt={constructionZoneImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="sensory-and-toddler-zones" className="text-3xl font-bold text-primary">
              The Sensory Wall &amp; Toddler Zone
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Not every zone in a 6,500 sq. ft. play centre can be built around big, physical
              movement — a family entertainment centre spanning toddlers through pre-teens needs
              quieter, lower-intensity zones as well. Near the Hospital pretend-play area, a tactile
              interactive sensory wall gives younger children a different kind of engagement:
              spinning and rotating elements, textured panels, and a digital timer built into the
              wall as a standalone activity feature, rather than a corridor filler between bigger
              attractions.
            </p>
            <img
              src={sensoryWallImage}
              alt={sensoryWallImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <p className="text-base text-foreground/80 leading-relaxed">
              A dedicated toddler soft-play zone, separate from the main pretend-play circuit, is
              built around an airplane-themed structure with a spiral slide and padded enclosures.
              Keeping it physically separate from the RC vehicle and construction zone was a
              deliberate safety and supervision decision — toddlers and the larger off-road obstacle
              course don't share well, and separating the age groups by zone rather than by rule
              removes a supervision burden that would otherwise fall on parents and staff throughout
              the day.
            </p>
            <img
              src={toddlerZoneImage}
              alt={toddlerZoneImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="challenges-solutions" className="text-3xl font-bold text-primary">
              Challenges &amp; How They Were Solved
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Designing at a child's scale rather than an adult's changes proportions, sightlines,
              and detailing throughout — door heights, counter heights, and even how far a facade
              needs to recede before it reads as "background" rather than "interactive" all had to
              be worked out through the themed design rather than assumed from standard commercial
              fit-out dimensions. Every themed structure needed rounded edges, robust fixing back to
              the base building, and finishes able to withstand continuous contact from young
              children — a durability requirement closer to a playground than a typical interior
              fit-out.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Running civil works, MEP, and custom fabrication in parallel across two levels — rather
              than the more linear sequencing typical of an office fit-out — was necessary to hit the
              2-3 month delivery window, and required tighter day-to-day site coordination between
              the fabrication team building the themed facades and the MEP crews routing services
              behind and above them.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A third challenge was less about construction than about liability: an indoor play
              centre carries a duty of care an office fit-out simply doesn't. Every themed structure
              and play feature needed sightline and supervision planning built into the layout
              itself — not signage asking parents to "supervise at all times," but a floor plan where
              a parent standing in one zone can actually see into the adjacent ones. That constraint
              shaped decisions as basic as facade height on the pretend-play street (tall enough to
              read as a building, short enough not to block a sightline across the town square) in
              ways that don't show up in a typical fit-out brief.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="materials-and-finishes" className="text-3xl font-bold text-primary">
              Materials &amp; Finishes
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The themed facades and play structures sit on a commercial-grade plywood
              substructure with MDF profiles for detailing — chosen for a balance of fabrication
              flexibility and durability under continuous child traffic. Gypsum board false
              ceilings and partitions, modular electrical panels and distribution, and standard
              sanitary and plumbing fixtures make up the base-building layer beneath the themed
              finishes, following the same coordination discipline described in our{" "}
              <Link to="/blog/false-ceiling-acoustic-design-guide-india" className="text-primary hover:underline">
                false ceiling design guide
              </Link>
              .
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="the-result" className="text-3xl font-bold text-primary">
              The Result, By the Numbers
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Kokko Town opened as a complete, two-level themed environment — a pretend-play town
              square, a farm-themed mezzanine, a toddler soft-play zone built around an
              airplane-themed structure, an interactive sensory play wall, and a light-up dance
              floor beneath the entrance signage, alongside the RC vehicle and construction
              adventure zone. The café terrace, with its arched colonnade and spiral staircase up to
              a games lounge, gives parents a dedicated space that still keeps them visually
              connected to the play areas below.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li><strong>6,500 sq. ft.</strong> across two levels — ground floor town square plus farm-themed mezzanine</li>
              <li><strong>5 pretend-play facades</strong> on the ground floor alone — Bank, Hospital, Supermarket, Gas Station, and Garage</li>
              <li><strong>2-3 months</strong> from site mobilisation to handover, covering civil, MEP, and full custom fabrication</li>
              <li><strong>One turnkey contractor</strong> for design, civil, MEP, fabrication, and installation — no separately contracted theming vendor</li>
              <li><strong>Distinct zones for every age group</strong> — toddler soft play, sensory wall, pretend-play town, and a large-format RC/construction adventure area</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              What those numbers don't capture is the coordination behind them: a project this
              themed generates far more custom drawings and fabrication decisions per square foot
              than a standard commercial interior, simply because almost nothing in it is a
              catalogue item. Delivering it inside a normal fit-out timeline, rather than the longer
              schedule a themed attraction of this scale might typically need, was a function of
              running design, civil, and fabrication together rather than as sequential handoffs.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="lessons-for-similar-projects" className="text-3xl font-bold text-primary">
              Lessons for Similar Projects
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Design at the user's actual scale — proportions that work for adults rarely translate directly to a space built for children</li>
              <li>Treat themed structures as fabrication projects with their own engineering requirements, not as finishes applied over a standard fit-out</li>
              <li>Plan sightlines deliberately so supervising parents can see across levels and zones, not just within one room</li>
              <li>Sequence civil, MEP, and fabrication in parallel where the trades allow it — a linear office fit-out schedule doesn't fit a build this custom</li>
              <li>Specify durability against continuous child contact explicitly, rather than assuming standard commercial-grade materials are sufficient</li>
              <li>Design distinct zones by age group rather than relying on supervision alone to manage the mismatch between toddlers and larger, faster play equipment</li>
              <li>Plan arrival and rest areas — reception, café — with the same design intent as the play zones themselves, since they're where a meaningful share of adult visitors spend their time</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Kokko Town is a reminder that a themed, experience-led fit-out isn't a scaled-up
              version of an office project — it demands its own design language, its own fabrication
              standards, and a delivery sequence built around parallel trades rather than a linear
              handoff. Delivering the full scope in-house, from civil works to the last themed
              facade, is what made a 2-3 month turnaround possible on a project this custom.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning a themed retail, hospitality, or entertainment fit-out? Hagerstone delivers
              design, civil works, MEP, and custom fabrication under one turnkey scope — see the
              full{" "}
              <Link to="/projects/kokko-town" className="text-primary hover:underline">
                Kokko Town project gallery
              </Link>{" "}
              or our{" "}
              <Link to="/services/interior-fit-out" className="text-primary hover:underline">
                interior fit-out services
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
