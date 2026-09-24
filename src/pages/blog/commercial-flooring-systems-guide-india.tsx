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

const slug = "commercial-flooring-systems-guide-india";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const heroImage =
  "https://images.unsplash.com/photo-1676474987690-2fc0582a07ec?auto=format&fit=crop&w=1600&h=1067&q=80";
const heroImageAlt =
  "Close-up of commercial carpet tile flooring beneath meeting-room chairs in an office interior";

const inlineImage =
  "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?auto=format&fit=crop&w=1200&h=800&q=80";
const inlineImageAlt =
  "Workers in safety vests applying a self-levelling epoxy coating across a large warehouse floor";

const relatedTopics = [
  "Commercial Flooring",
  "Vitrified & Granite Tile",
  "Epoxy & PU Flooring",
  "Raised Access Floor",
  "Carpet Tile",
];

const faqItems: FaqItem[] = [
  {
    question: "Vitrified tile, epoxy or carpet tile — which is right for an office?",
    answer:
      "It depends on the zone, not the whole floor. Vitrified or granite tile suits reception, lobbies and pantries where a hard, wipeable, high-shine finish matters. Carpet tile is the default for open-plan and cabin areas because it's quiet underfoot, hides seams, and individual tiles can be replaced without redoing the whole floor. Epoxy and PU resin belong in server rooms, labs, kitchens and back-of-house areas that need a seamless, chemical-resistant surface. Most commercial fit-outs mix two or three systems by zone rather than picking one for the entire floor.",
  },
  {
    question: "What is a raised access floor and does my office need one?",
    answer:
      "A raised access floor is a grid of removable panels on adjustable pedestals sitting above the structural slab, creating a shallow void for power and data cabling that can be reconfigured later by lifting a tile instead of opening a ceiling. It's worth the added cost on floors with high desk density, frequent churn, or trading/server rooms; a smaller, stable-layout office can often get by with floor trunking or a screed with embedded conduit instead.",
  },
  {
    question: "How much does commercial flooring cost per sq ft in India?",
    answer:
      "System type is the biggest driver: vitrified tile is generally the least expensive per sq ft, carpet tile sits above it once underlay and adhesive are included, epoxy/PU resin flooring costs more again because of surface preparation and multi-coat application, and a raised access floor is the most expensive option since it's a structural void system, not just a finish. Within any system, substrate condition, tile/panel grade, and how much cutting and wastage the layout generates all move the number — which is why itemized quotes against an identical spec are the only reliable way to compare vendors.",
  },
  {
    question: "Why does the sub-floor matter more than the finish?",
    answer:
      "Because almost every flooring failure — hollow-sounding tiles, epoxy delamination, a rocking raised floor panel — traces back to the slab underneath, not the finish material itself. Moisture content, flatness, and cleanliness of the substrate have to be verified and corrected before any flooring goes down; skipping that step to save a day on the schedule is the single most common cause of a flooring callback within the first year.",
  },
  {
    question: "What is NBC's fire rating requirement for flooring finishes?",
    answer:
      "Flooring itself isn't typically the primary fire-rated element the way walls, doors, and ceilings are, but flame-spread and smoke-generation characteristics of floor finishes in escape routes and assembly areas are assessed under NBC 2016, Part 4, alongside the building's overall fire and life safety strategy. Carpet and resin flooring specifications for corridors and stairwells should be checked against this rather than chosen on appearance and wear rating alone.",
  },
  {
    question: "How long does commercial flooring take to install?",
    answer:
      "Vitrified and granite tile can move quickly once the substrate is ready — often a few days per floor plate for a mid-size office. Epoxy and PU systems take longer because each coat needs to cure before the next is applied, and that curing time is non-negotiable regardless of schedule pressure. Raised access floors are comparatively fast to lay but need the pedestal grid checked for level before any panel goes down. In every system, substrate preparation — not the finish itself — is usually what determines the real timeline.",
  },
  {
    question: "Does flooring choice affect how much sound transfers between floors?",
    answer:
      "Yes, and it's a separate issue from a room's own acoustics. Impact sound — footsteps, dropped objects, rolling chairs — transmits through the slab to the floor below, which matters most in multi-tenant buildings or where occupied space sits directly underneath. Carpet tile dampens this inherently; a hard finish like tile or resin generally needs an acoustic underlayment specified and tested against a target rating if impact sound transmission needs to be controlled.",
  },
];

export default function CommercialFlooringSystemsGuideIndiaBlog() {
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
    { id: "introduction", label: "Introduction: The Floor Nobody Notices Until It Fails" },
    { id: "what-flooring-covers", label: "What Commercial Flooring Covers" },
    { id: "choosing-a-flooring-system", label: "Choosing a Flooring System" },
    { id: "substrate-preparation", label: "Substrate Preparation: Where Flooring Actually Fails" },
    { id: "wear-ratings-maintenance", label: "Wear Ratings, Loads & Maintenance" },
    { id: "flooring-by-use-case", label: "Flooring by Use-Case" },
    { id: "acoustics-and-underlayment", label: "Underlayment, Impact Sound & Acoustics" },
    { id: "flooring-costs-india", label: "What Commercial Flooring Costs in India" },
    { id: "common-flooring-mistakes", label: "Common Flooring Mistakes & Risks" },
    { id: "choosing-a-flooring-contractor", label: "Choosing a Flooring Contractor" },
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
        title={`Commercial Flooring Systems in India | ${SHORT_BRAND_NAME}`}
        description="A technical guide to commercial flooring in India — vitrified tile, epoxy/PU resin, carpet tile, and raised access floors — substrate prep, wear ratings, and real costs."
        canonical={canonicalUrl}
        ogImage={heroImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="commercial flooring india, vitrified tile vs epoxy flooring, raised access floor, carpet tile office, epoxy pu resin flooring, flooring contractor india, spc vinyl flooring commercial, office flooring cost india, warehouse industrial flooring"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Commercial Flooring Systems",
            description:
              "A technical guide to commercial flooring in India — vitrified tile, epoxy/PU resin, carpet tile, and raised access floors — substrate prep, wear ratings, and real costs.",
            image: [heroImage],
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
              "commercial flooring india, vitrified tile vs epoxy flooring, raised access floor, carpet tile office, epoxy pu resin flooring, flooring contractor india, spc vinyl flooring commercial, office flooring cost india, warehouse industrial flooring",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "Commercial Flooring Systems in India", item: canonicalUrl },
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
                <span className="text-foreground">Commercial Flooring Systems in India</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Commercial Flooring Systems in India
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
              srcSet={`${heroImage} 1600w`}
              sizes="(max-width: 768px) 100vw, 1600px"
              alt={heroImageAlt}
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
              Introduction: The Floor Nobody Notices Until It Fails
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Flooring is the surface every visitor, employee and delivery cart touches, yet it's
              usually the line item that gets the least design conversation and the most schedule
              pressure. That's backwards — flooring failures are visible immediately, expensive to
              fix once furniture is in place, and almost always trace back to a decision made
              before the finish was ever chosen.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              "Commercial flooring" isn't one material — it's a family of systems (vitrified and
              granite tile, epoxy and PU resin, carpet tile, raised access floors, SPC and vinyl)
              each suited to a different zone, load, and maintenance regime. This guide walks
              through how those systems differ, why the substrate underneath matters more than the
              finish on top, and what actually drives flooring cost in India.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's written for the same reason our{" "}
              <Link to="/blog/office-fit-out-cost-guide-india-2026" className="text-primary hover:underline">
                office fit-out cost guide
              </Link>{" "}
              was: flooring decisions get locked in early, are expensive to reverse once tiled or
              screeded, and are one of the easiest line items to under-spec without realising it
              until the floor is a year old.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-flooring-covers" className="text-3xl font-bold text-primary">
              What Commercial Flooring Covers
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              As a scope of work, commercial flooring typically spans:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Substrate assessment — moisture testing, flatness survey, crack repair</li>
              <li>Screeding and levelling compound where the slab isn't flat enough for the finish</li>
              <li>Material selection by zone — tile, resin, carpet, raised floor, or vinyl</li>
              <li>Skirting, transition strips, and expansion joint detailing</li>
              <li>Application or installation, including cure time for resin systems</li>
              <li>Sealing, polishing, or protective coating as a final step</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Flooring also has to be sequenced carefully against{" "}
              <Link to="/blog/mep-design-consultancy-india" className="text-primary hover:underline">
                MEP
              </Link>{" "}
              works below the slab or within a raised floor void, and against the{" "}
              <Link to="/blog/office-interior-fit-out-execution-guide" className="text-primary hover:underline">
                site sequencing
              </Link>{" "}
              of everything else in the fit-out — flooring is typically one of the last trades in,
              which means every trade before it is a chance to damage a finished floor if
              protection isn't planned for.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-flooring-system" className="text-3xl font-bold text-primary">
              Choosing a Flooring System
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">Vitrified &amp; Granite Tile</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Vitrified tile is the default hard-finish flooring for Indian commercial interiors —
              a dense, low-porosity ceramic tile available in polished, matte, and textured
              finishes, generally the least expensive per sq ft of the main flooring systems.
              Granite and natural stone step up in cost and are usually reserved for reception
              lobbies and feature areas where the veining and shine read as premium. Both need a
              genuinely flat substrate; the tile itself won't hide an uneven slab, it will simply
              show every dip as a lippage or hollow-sounding edge.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Epoxy &amp; PU Resin Flooring</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Epoxy and polyurethane (PU) resin systems are seamless, chemical- and
              abrasion-resistant coatings applied in multiple layers directly over a prepared
              concrete substrate — standard for server rooms, labs, commercial kitchens,
              warehouses, and any floor that needs to be cleaned frequently without grout lines
              trapping dirt or moisture. PU generally handles thermal shock and heavier foot/wheel
              traffic better than standard epoxy, which is why it's more common in industrial and
              food-service settings, while epoxy remains the more economical choice for lighter-duty
              back-of-house areas.
            </p>
            <img
              src={inlineImage}
              srcSet={`${inlineImage} 1200w`}
              sizes="(max-width: 768px) 100vw, 1200px"
              alt={inlineImageAlt}
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />

            <h3 className="text-2xl font-semibold text-foreground">Carpet Tile</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Carpet tile is the standard for open-plan office and cabin areas — quieter underfoot
              than a hard finish, better for acoustics in a large floor plate, and modular enough
              that a stained or worn tile can be swapped without disturbing the rest of the floor.
              Backing type and pile density both affect durability under rolling chair traffic, and
              a cheap backing is usually the first thing to fail, well before the visible pile wears
              out.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Raised Access Floor</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              A{" "}
              <Link to="/glossary/raised-access-floor" className="text-primary hover:underline">
                raised access floor
              </Link>{" "}
              is a grid of removable panels on adjustable pedestals sitting above the structural
              slab, creating a service void for power and data that can be reconfigured later by
              lifting a tile instead of opening a ceiling. It costs meaningfully more than a direct
              finish because it's a structural system in its own right, not just a surface — but on
              a floor with high desk density, trading rooms, or server infrastructure, the ability
              to reroute cabling without disruptive rework generally pays for itself over the
              lease term.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">SPC &amp; Vinyl Flooring</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Stone plastic composite (SPC) and luxury vinyl tile sit between carpet and hard tile
              on cost and feel — waterproof, dimensionally stable, and increasingly used in
              hospitality and retail fit-outs where a wood-look finish is wanted without solid
              timber's moisture sensitivity or a hard tile's acoustic hardness.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="substrate-preparation" className="text-3xl font-bold text-primary">
              Substrate Preparation: Where Flooring Actually Fails
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Almost every flooring problem that shows up months after handover — hollow-sounding
              tiles, epoxy that delaminates in patches, a carpet tile grid that doesn't sit flat —
              traces back to the substrate, not the finish material. Concrete slabs need to be
              tested for moisture content before any resin or adhesive-set finish goes down; excess
              moisture vapour transmitting up through the slab is one of the most common causes of
              epoxy bond failure and carpet adhesive breakdown, and it isn't visible until the
              floor is already down.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Flatness is the second non-negotiable. A slab within a fit-out's structural tolerance
              can still be too uneven for a polished tile or a raised-floor pedestal grid, which is
              why a self-levelling screed is frequently needed as a distinct line item before the
              finish is scheduled — not an optional upgrade, but a correction the finish depends on.
              Skipping the survey step to save a day on the programme is the single most common
              reason a flooring contractor ends up doing avoidable rework at their own cost, or
              worse, leaving the client with a floor that looks fine at handover and fails within
              a year.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="wear-ratings-maintenance" className="text-3xl font-bold text-primary">
              Wear Ratings, Loads &amp; Maintenance
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Flooring specification isn't just about appearance — it's rated for the traffic and
              loads it will actually see. Tile is graded by abrasion resistance (PEI rating) and
              slip resistance, both of which matter more in high-footfall lobbies and wet areas
              than in a quiet cabin. Carpet tile is rated by traffic class, and specifying a
              light-duty grade for a high-footfall corridor is a common way budgets quietly
              overrun on early replacement.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A{" "}
              <Link to="/glossary/raised-access-floor" className="text-primary hover:underline">
                raised access floor
              </Link>{" "}
              needs its panel loading grade specified per zone, not uniformly — general office
              areas can run a medium grade, but server rooms, filing areas, and any route used by a
              pallet truck during fit-out need a heavy grade identified on a drawing before
              ordering, not discovered when a panel cracks. Maintenance regimes differ just as
              much: resin floors need the right cleaning chemicals to avoid degrading the coating,
              while carpet tile needs regular vacuuming and periodic deep cleaning to protect
              against premature wear.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="flooring-by-use-case" className="text-3xl font-bold text-primary">
              Flooring by Use-Case
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A corporate office typically runs carpet tile through open-plan and cabin areas,
              vitrified or granite tile in reception and pantries, and epoxy or vinyl in server
              rooms and back-of-house zones — matching the guidance in our{" "}
              <Link to="/blog/office-interior-fit-out-execution-guide" className="text-primary hover:underline">
                fit-out execution guide
              </Link>
              . Retail and{" "}
              <Link to="/blog/hospitality-interior-design-india" className="text-primary hover:underline">
                hospitality
              </Link>{" "}
              projects lean more on stone, SPC, and vinyl for their visual warmth and durability
              under continuous public footfall, while warehouses and industrial floors are almost
              always polished concrete, epoxy, or PU resin because of the point loads from racking
              and material-handling equipment. Choosing a system without matching it to the actual
              traffic and load pattern of the space is one of the more common — and expensive —
              specification mistakes.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="acoustics-and-underlayment" className="text-3xl font-bold text-primary">
              Underlayment, Impact Sound &amp; Acoustics
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Flooring choice affects a building's acoustics in two distinct ways that are easy to
              conflate. Airborne sound — voices, music — is mostly a ceiling and partition problem,
              covered in our{" "}
              <Link to="/blog/false-ceiling-acoustic-design-guide-india" className="text-primary hover:underline">
                false ceiling and acoustic design guide
              </Link>
              . Impact sound — footsteps, dropped objects, rolling chairs — is a flooring problem,
              and it's transmitted through the slab to the floor below, which matters far more in a
              multi-tenant building or a floor with occupied space directly underneath than it does
              on a ground-floor retail unit.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Carpet tile inherently dampens impact sound better than any hard finish, which is one
              reason it remains the default in open-plan offices above occupied space. Where a hard
              finish is required for other reasons — durability, hygiene, aesthetics — an acoustic
              underlayment beneath the tile or resin can meaningfully cut impact sound transmission,
              though it needs to be specified and tested against a target rating (commonly expressed
              as a normalised impact sound level) rather than assumed to work generically. This is a
              genuinely easy detail to skip during value engineering, and one of the more expensive
              ones to retrofit once a floor above a tenant is already complaining.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="flooring-costs-india" className="text-3xl font-bold text-primary">
              What Commercial Flooring Costs in India
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              System type is the biggest cost driver: vitrified tile is generally the least
              expensive per sq ft among the main finish options, carpet tile sits above it once
              underlay and adhesive are factored in, and epoxy or PU resin flooring costs more
              again because of the surface preparation and multi-coat application it requires. A
              raised access floor sits at the top of the range since it's a structural void system
              rather than a surface finish. Within any system, substrate condition (how much
              screeding is needed), material grade, and layout-driven wastage all move the number
              further.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              As with{" "}
              <Link to="/blog/office-fit-out-cost-guide-india-2026" className="text-primary hover:underline">
                office fit-out costs
              </Link>{" "}
              generally, itemized quotes against an identical material grade and substrate scope
              are the only reliable way to compare flooring contractors — a lower headline rate
              often means a lighter tile grade, a thinner resin build-up, or no allowance for
              substrate correction, not a more efficient installation.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-flooring-mistakes" className="text-3xl font-bold text-primary">
              Common Flooring Mistakes &amp; Risks
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Skipping moisture testing before installing resin or adhesive-set finishes</li>
              <li>Assuming the slab is flat enough without a proper survey, then discovering lippage after tiling</li>
              <li>Choosing one flooring system for the whole floor instead of matching material to zone and traffic</li>
              <li>Under-specifying carpet traffic class or raised-floor panel loading for the actual use</li>
              <li>Scheduling flooring before dust-generating trades are finished, leaving contamination in the finish</li>
              <li>Not protecting a finished floor from the trades and furniture move-in that follow it</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-flooring-contractor" className="text-3xl font-bold text-primary">
              Choosing a Flooring Contractor
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Look for a contractor who tests and reports on the substrate before quoting a finish,
              not one who quotes off a floor plan alone. Ask specifically how moisture testing and
              flatness surveys are handled, what happens if the slab needs more screeding than
              budgeted, and how the flooring schedule is sequenced against other trades — since a
              flooring contractor who owns that coordination is far easier to hold accountable than
              one who simply shows up on an assigned date and installs to what they find.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's also worth asking for photographic or documented evidence of substrate testing on
              past projects — a contractor who can show you a moisture-test report as a matter of
              routine practice is a different proposition from one who says the tests are done but
              can't produce records. On resin and carpet systems especially, that documentation is
              also what you'd want in hand if a warranty claim ever needs to be made.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Commercial flooring rewards decisions made early and quietly punishes the ones made
              late. Matching the system to the zone, testing and correcting the substrate before
              the finish goes down, and specifying wear ratings against real traffic rather than a
              catalogue default are what separate a floor that looks the same in year five from one
              that's already showing its age.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning flooring for a new fit-out or renovation? Hagerstone's in-house team handles
              substrate assessment, material selection, and installation across tile, resin,
              carpet, and raised access floor systems — see our{" "}
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
