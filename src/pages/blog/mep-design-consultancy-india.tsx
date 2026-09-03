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

const slug = "mep-design-consultancy-india";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

// TODO: replace with a real MEP-specific image (electrical panel, cable
// containment, or fire-fighting riser) uploaded under a descriptive filename,
// e.g. mep-design-electrical-panel-cable-tray.jpg — placeholder for now.
const ogImage = "https://hagerstone.com/hero-images/officeinterior.webp";

const relatedTopics = [
  "MEP Design India",
  "MEP Consultancy",
  "Electrical Design Commercial Building",
  "Fire Fighting Systems",
  "Plumbing Design Commercial Office",
  "MEP Coordination",
];

const faqItems: FaqItem[] = [
  {
    question: "What does MEP stand for and what does it cover?",
    answer:
      "MEP stands for Mechanical, Electrical, and Plumbing — the three engineered systems (plus fire & life safety, usually grouped in with it) that make a shell space livable and code-compliant. In a commercial fit-out this means electrical distribution and lighting, plumbing and drainage, fire detection and suppression, and HVAC — which is technically the 'mechanical' part of MEP, sized and coordinated alongside the rest.",
  },
  {
    question: "How much of a fit-out budget does MEP typically take up?",
    answer:
      "MEP (electrical, HVAC, fire, and plumbing combined) typically accounts for roughly 25–30% of a mid-range corporate fit-out budget — usually the second-largest line item after civil and interior works. See our office fit-out cost guide for the full cost breakdown by category.",
  },
  {
    question: "Do I need a separate MEP consultant, or does my interior designer handle this?",
    answer:
      "Interior designers plan space and finishes; MEP consultants engineer the electrical load, plumbing, fire safety, and HVAC systems that make the space functional and code-compliant. Most competent commercial fit-outs need both, working from the same design timeline — bringing MEP in after the interior layout is locked is the single most common cause of late-stage rework.",
  },
  {
    question: "What's the difference between MEP design and MEP coordination?",
    answer:
      "MEP design is producing the electrical, plumbing, fire, and HVAC drawings and specifications for each system individually. MEP coordination is overlaying all of those drawings — plus the ceiling grid, structure, and interior layout — to catch clashes (a duct routed through a structural beam, a sprinkler head behind a light fixture) before installation starts, when a clash is a drawing revision instead of a site rework.",
  },
];

export default function MepDesignConsultancyIndiaBlog() {
  const lastUpdatedLabel = "September 3, 2026";
  const lastUpdatedIso = "2026-09-03T00:00:00Z";

  const relatedBlogPosts = getRelatedPosts(slug, 3);

  const tocItems = [
    { id: "introduction", label: "Introduction: Why MEP Is the Backbone of Every Fit-Out" },
    { id: "what-mep-covers", label: "What \"MEP\" Actually Covers" },
    { id: "electrical-systems", label: "Electrical Systems: Load Planning & Distribution" },
    { id: "plumbing-systems", label: "Plumbing & Water Supply Systems" },
    { id: "fire-life-safety", label: "Fire & Life Safety Systems" },
    { id: "hvac-within-mep", label: "Where HVAC Fits Within MEP" },
    { id: "mep-coordination", label: "MEP Coordination & Clash Detection" },
    { id: "mep-cost", label: "MEP Cost as a Share of Fit-Out Budget" },
    { id: "common-mistakes", label: "Common MEP Mistakes in Commercial Fit-Outs" },
    { id: "choosing-consultant", label: "Choosing an MEP Design Consultant" },
    { id: "conclusion", label: "Conclusion: Plan MEP Before You Plan Anything Else" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "MEP Design & Consultancy", href: "/services/mep" },
    { title: "HVAC Services", href: "/services/hvac" },
    { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
    { title: "Office Design & Build Services", href: "/services/office-design-build" },
  ];

  return (
    <>
      <SEOHead
        title={`MEP Design & Consultancy for Commercial Fit-Outs | ${SHORT_BRAND_NAME}`}
        description="A technical guide to MEP design for commercial buildings in India: electrical, plumbing, fire safety, and where MEP costs actually go."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Commercial building electrical panel and cable containment as part of MEP design"
        ogType="article"
        keywords="mep design india, mep consultancy, electrical design commercial building, fire fighting systems, plumbing design commercial office, mep coordination, mep cost india"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "MEP Design & Consultancy for Commercial Fit-Outs: A Technical Guide",
            description:
              "A technical guide to MEP design for commercial buildings in India: electrical, plumbing, fire safety, and where MEP costs actually go.",
            image: [ogImage],
            author: authorSchema,
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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: "MEP Design & Consultancy Guide",
                item: canonicalUrl,
              },
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
                <span className="text-foreground">MEP Design & Consultancy Guide</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              MEP Design & Consultancy for Commercial Fit-Outs: A Technical Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>
                  By{" "}
                  <Link
                    to={AUTHOR_PROFILE_PATH}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
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
              src={ogImage}
              alt="Commercial building electrical panel and cable containment as part of MEP design"
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
              Introduction: Why MEP Is the Backbone of Every Fit-Out
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Every commercial fit-out has a visible layer — partitions, flooring, furniture,
              branding — and an invisible one running above the ceiling and inside the walls.
              That invisible layer is MEP: Mechanical, Electrical, and Plumbing. It's the least
              photographed part of any project and the one that determines whether the finished
              space actually works — whether the lights stay on under full load, whether water
              pressure holds on the top floor, and whether the fire system passes inspection
              before you're allowed to occupy the building at all.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide is written for the person signing off on MEP decisions, not designing
              the systems themselves — what MEP actually covers, how each system is planned, what
              coordination between systems actually means in practice, and where projects
              typically go wrong when MEP is treated as a subcontractor line item instead of a
              design discipline in its own right.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-mep-covers" className="text-3xl font-bold text-primary">
              What "MEP" Actually Covers
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              MEP is usually discussed as three disciplines, but a commercial building's
              engineered systems really break into four functional groups:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">System</th>
                    <th className="text-left py-3 px-4 font-semibold">Covers</th>
                    <th className="text-left py-3 px-4 font-semibold">Fails Silently If Wrong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Electrical</td>
                    <td className="py-3 px-4">Power distribution, lighting, DBs, earthing, backup power</td>
                    <td className="py-3 px-4">Overloaded circuits, nuisance tripping</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Plumbing</td>
                    <td className="py-3 px-4">Water supply, drainage, sanitary fixtures, pumping</td>
                    <td className="py-3 px-4">Low pressure on upper floors, drainage backflow</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Fire &amp; Life Safety</td>
                    <td className="py-3 px-4">Detection, sprinklers, wet risers, evacuation systems</td>
                    <td className="py-3 px-4">Occupancy certificate refused, insurance voided</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Mechanical (HVAC)</td>
                    <td className="py-3 px-4">Cooling, ventilation, air distribution</td>
                    <td className="py-3 px-4">Undersized capacity, poor air quality</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              These four systems share ceiling void space, wall cavities, and shaft risers, and
              their design decisions constantly interact — which is why MEP is coordinated as one
              discipline rather than four independent trades bidding separately.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="electrical-systems" className="text-3xl font-bold text-primary">
              Electrical Systems: Load Planning &amp; Distribution
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Electrical design starts with a load calculation — adding up every draw in the
              space (lighting, workstations, IT racks, HVAC equipment, kitchen/pantry load) and
              sizing the incoming supply, transformers, and distribution boards (DBs) with margin
              for future growth, not just day-one occupancy.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Distribution boards &amp; circuit design</strong>{" "}
                — power is split into circuits by zone and load type, so a single fault trips one
                circuit, not the floor.
              </li>
              <li>
                <strong className="text-foreground">Lighting design</strong> — layout, lux levels,
                and control zoning (occupancy sensors, daylight harvesting) planned against the
                actual furniture layout, not a generic grid.
              </li>
              <li>
                <strong className="text-foreground">Backup power</strong> — DG (diesel generator)
                or UPS sizing for what genuinely needs to stay live during an outage (server
                rooms, life-safety systems, select lighting) versus what can go dark.
              </li>
              <li>
                <strong className="text-foreground">Earthing &amp; lightning protection</strong> —
                often skipped in early planning conversations, expensive and disruptive to retrofit
                once finishes are in.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              IT/server rooms deserve a separate note here: dense equipment racks draw far more
              power per square foot than general office space, and need dedicated circuits sized
              to that load — not folded into the general floor calculation.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="plumbing-systems" className="text-3xl font-bold text-primary">
              Plumbing &amp; Water Supply Systems
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Plumbing scope in a commercial fit-out covers domestic water supply, drainage, and
              (where relevant) pantry and washroom fixture layouts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Water supply &amp; pumping</strong> — pressure
                at upper floors depends on pump sizing and the building's existing riser capacity;
                a floor added to a building without revisiting pump sizing is a common source of
                "low water pressure" complaints.
              </li>
              <li>
                <strong className="text-foreground">Drainage &amp; venting</strong> — poorly vented
                drainage causes slow drains and odor issues that are difficult to fully fix after
                the ceiling is closed.
              </li>
              <li>
                <strong className="text-foreground">Fixture layout</strong> — washroom and pantry
                fixture counts are typically set by occupancy-based code requirements, not
                aesthetic preference alone.
              </li>
              <li>
                <strong className="text-foreground">Hot water</strong> — pantry and washroom hot
                water (electric geysers vs. centralized) affects both electrical load and ceiling
                void routing, so it's planned alongside electrical, not after.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="fire-life-safety" className="text-3xl font-bold text-primary">
              Fire &amp; Life Safety Systems
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Fire and life safety is the one MEP system with a hard external gate: without a
              Fire NOC (No Objection Certificate) signed off against these systems, a commercial
              space cannot legally be occupied. The core scope, largely governed by requirements
              in the{" "}
              <a
                href="https://www.bis.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                National Building Code of India
              </a>
              , includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Detection &amp; alarm</strong> — smoke/heat
                detectors and manual call points, zoned so a fault or alarm can be located quickly.
              </li>
              <li>
                <strong className="text-foreground">Suppression</strong> — sprinkler systems,
                fire extinguishers, and (for larger or high-risk spaces) gas-based suppression for
                server rooms where water damage is a separate risk.
              </li>
              <li>
                <strong className="text-foreground">Wet risers &amp; hydrants</strong> — dedicated
                fire water storage and pumping, independent of domestic water supply.
              </li>
              <li>
                <strong className="text-foreground">Evacuation &amp; signage</strong> — emergency
                lighting, exit signage, and refuge area planning tied to the actual occupancy
                count and floor layout, not a generic template.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Because fire systems are inspected and certified independently, retrofitting them
              after ceiling and partition work is complete is one of the most expensive and
              schedule-damaging corrections in a fit-out — this is a design-first, not
              install-later, system.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="hvac-within-mep" className="text-3xl font-bold text-primary">
              Where HVAC Fits Within MEP
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC is technically the "M" in MEP, but it's substantial enough — and interacts with
              enough other systems (ceiling void space, electrical load, controls) — that it's
              usually planned as its own workstream within the broader MEP design. Sizing,
              system-type selection (VRF vs. ducted split vs. chilled water), ducting coordination,
              and commissioning all sit inside HVAC specifically. If you're evaluating HVAC
              options for a space, our{" "}
              <Link to="/blog/commercial-hvac-systems" className="text-primary hover:underline">
                commercial HVAC systems guide
              </Link>{" "}
              covers that in full — this article focuses on the electrical, plumbing, and fire
              systems that HVAC has to coordinate around.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="mep-coordination" className="text-3xl font-bold text-primary">
              MEP Coordination &amp; Clash Detection
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Every MEP system competes for the same physical space above a finished ceiling:
              ducting, cable trays, sprinkler piping, and light fixtures all need to occupy the
              same shallow void without colliding. Coordination is the process of overlaying every
              system's drawings — increasingly via BIM (Building Information Modeling) on larger
              projects, or layered 2D drawings on smaller ones — to resolve clashes before
              installation starts.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Ceiling void congestion</strong> — the most
                common clash point; a duct, a cable tray, and a sprinkler line all wanting the
                same 200mm of vertical space.
              </li>
              <li>
                <strong className="text-foreground">Shaft &amp; riser conflicts</strong> — vertical
                risers for plumbing, electrical, and fire systems need dedicated, non-overlapping
                shaft space planned from the structural design stage.
              </li>
              <li>
                <strong className="text-foreground">Sequencing</strong> — some trades physically
                have to install before others (structural sleeves before ducting, first-fix
                electrical before ceiling closure); a coordination drawing sets that sequence
                explicitly instead of leaving it to site improvisation.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              A clash caught in coordination is a five-minute drawing edit. The same clash caught
              on-site, after ducting and cable trays are already installed, is a demolition and
              rework order — this is the single biggest reason MEP coordination is worth paying
              for as a distinct deliverable, not assumed as something the trades will "sort out."
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="mep-cost" className="text-3xl font-bold text-primary">
              MEP Cost as a Share of Fit-Out Budget
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              On a typical mid-range corporate fit-out, MEP (electrical, HVAC, fire, and plumbing
              combined) runs roughly 25–30% of the total project cost — usually the second-largest
              category after civil and interior works. That share shifts significantly depending
              on how much MEP infrastructure the base building already provides: a warm-shell
              space with existing electrical panels and base HVAC needs far less MEP spend than a
              bare shell requiring everything from scratch. For the full cost breakdown by
              category, see our{" "}
              <Link
                to="/blog/office-fit-out-cost-guide-india-2026"
                className="text-primary hover:underline"
              >
                office fit-out cost guide for India
              </Link>
              .
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-mistakes" className="text-3xl font-bold text-primary">
              Common MEP Mistakes in Commercial Fit-Outs
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Bringing MEP in after the interior layout is
                locked</strong>, forcing electrical and ducting routes to compromise around fixed
                partitions and ceiling design instead of being planned together.
              </li>
              <li>
                <strong className="text-foreground">Sizing electrical load off floor area alone</strong>,
                instead of actual equipment density — server rooms and dense workstation clusters
                need dedicated load calculations, not a per-square-foot average.
              </li>
              <li>
                <strong className="text-foreground">Treating fire safety as a final-inspection
                item</strong> rather than a design input from day one, risking a refused occupancy
                certificate after finishes are already complete.
              </li>
              <li>
                <strong className="text-foreground">Skipping formal coordination drawings</strong>{" "}
                and relying on site-level trade coordination, which is where most ceiling-void
                clashes get discovered — expensively — during installation.
              </li>
              <li>
                <strong className="text-foreground">No as-built documentation handover</strong>,
                leaving future maintenance, renovations, or tenant changes without an accurate
                record of what's actually behind the walls and ceiling.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-consultant" className="text-3xl font-bold text-primary">
              Choosing an MEP Design Consultant
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              MEP consultants range from independent specialists to a discipline embedded within a
              design-and-build firm. What to weigh:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Track record on comparable projects</strong> —
                office MEP and, say, retail or F&amp;B MEP have materially different load and
                fire-safety profiles; ask for examples matching your building type.
              </li>
              <li>
                <strong className="text-foreground">Coordination capability</strong>, not just
                design — ask specifically how they run clash detection and with which other
                trades.
              </li>
              <li>
                <strong className="text-foreground">Single point of accountability</strong> — an
                MEP consultant working inside the same design-and-build timeline as your interior
                and civil teams avoids the handoff gaps that show up as change orders later.
              </li>
              <li>
                <strong className="text-foreground">Post-installation commissioning</strong> —
                confirm testing and commissioning of electrical, fire, and plumbing systems is
                scoped in, not assumed to happen automatically at handover.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion: Plan MEP Before You Plan Anything Else
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              MEP is the one part of a fit-out that's genuinely difficult and expensive to fix
              after the fact — once ceilings are closed and finishes are in, correcting an
              undersized electrical panel or a missed fire-safety requirement means opening up
              completed work. Getting load calculations right, treating fire safety as a design
              input rather than a final checkbox, and coordinating every system before
              installation starts are what separate a fit-out that passes inspection and performs
              quietly for years from one that generates change orders and delayed occupancy.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning a fit-out and need MEP designed and coordinated as one discipline, not four
              separate trades? Talk to Hagerstone International about MEP design and delivery for
              your space.
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
