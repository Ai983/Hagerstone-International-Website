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

const slug = "office-interior-fit-out-execution-guide";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const ogImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/MeetingRoom.jpg";

const relatedTopics = [
  "Fit-Out Execution",
  "Cat A vs Cat B",
  "MEP Coordination",
  "Site Sequencing",
  "Snagging & Handover",
];

const faqItems: FaqItem[] = [
  {
    question: "What's the difference between Cat A and Cat B fit-out?",
    answer:
      "Cat A (Category A) is the base build a landlord typically delivers — raised access floor, suspended ceiling, basic mechanical/electrical services, and finished common areas, but no partitions, furniture, or branding. Cat B is everything a tenant adds on top — partitions, workstations, meeting rooms, joinery, and finishes specific to how that company actually works. Where that boundary falls (and who's responsible for what) is one of the most common sources of scope disputes on a fit-out project.",
  },
  {
    question: "What order should a fit-out actually happen in?",
    answer:
      "Broadly: demolition/strip-out (if any), first-fix MEP (services routed above ceiling and within walls before they're closed up), ceiling grid and partition framing, second-fix MEP (fittings, switches, diffusers), flooring, then furniture and final finishes. Getting this sequence wrong — closing up a ceiling before MEP first-fix is complete, for example — means opening it back up later, which is slower and more expensive than doing it in order the first time.",
  },
  {
    question: "Where do interior fit-out and MEP most often clash?",
    answer:
      "Ceiling void space is the most common collision point — ductwork, cable trays, sprinkler pipework, and lighting all compete for the same limited height above a suspended ceiling, and a ceiling design finalised without MEP input regularly turns out not to have enough clearance once services are actually routed. Partition layouts finalised before electrical and data points are confirmed is the second most common source of rework.",
  },
  {
    question: "What is snagging and why does it matter?",
    answer:
      "Snagging is the formal inspection process where defects — a misaligned tile, a switch that doesn't work, a scratched finish — are logged against a checklist before handover, then fixed and re-inspected. Skipping a rigorous snagging process doesn't make the defects disappear; it just means they get discovered by the occupant after move-in, when they're harder and more disruptive to fix.",
  },
  {
    question: "How long does a typical office fit-out take?",
    answer:
      "It depends heavily on scope, area, and whether MEP needs to be installed from scratch or only modified, but a turnkey delivery model can compress a straightforward Cat A-to-move-in fit-out into roughly 60 days for a mid-sized office when design is locked early and long-lead items (furniture, specialist finishes) are ordered on time — schedule slippage usually traces back to late decisions, not the construction work itself.",
  },
  {
    question: "What is sanctioned load, and why does it matter for a fit-out?",
    answer:
      "Sanctioned load is the maximum electrical capacity the utility has approved for a tenancy, supplied through either an HT (high tension) or LT (low tension) connection depending on scale. A fit-out design finalised without checking workstation count, IT equipment, and HVAC load against the available sanctioned load can run into a capacity shortfall late in the project — and increasing sanctioned load typically means a fresh application to the utility, not a quick on-site fix.",
  },
  {
    question: "What is a defects liability period, and what does it cover?",
    answer:
      "It's a period — typically several months to a year — after handover during which the contractor remains obligated to fix defects that surface once the space is actually occupied and used, separate from any longer product-specific warranties (furniture, HVAC equipment). It's worth confirming upfront exactly what's covered as a genuine defect versus what counts as ordinary wear and tear or client-caused damage, since that distinction is where most post-handover disputes originate.",
  },
];

export default function OfficeInteriorFitOutExecutionGuideBlog() {
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
    { id: "introduction", label: "Introduction: Design Is the Easy Part" },
    { id: "cat-a-vs-cat-b", label: "Cat A vs Cat B: Where the Handover Boundary Falls" },
    { id: "site-sequencing", label: "Site Sequencing: The Order of Operations" },
    { id: "reading-the-fit-out-program", label: "Reading the Fit-Out Program: Long-Lead Items & the Critical Path" },
    { id: "where-fit-out-and-mep-collide", label: "Where Fit-Out and MEP Collide" },
    { id: "technical-choices-site-teams-make", label: "Technical Choices Site Teams Actually Make" },
    { id: "furniture-joinery-glass-partitions", label: "Furniture, Joinery & Glass Partitions" },
    { id: "qc-snagging-handover", label: "Quality Control, Snagging & Handover" },
    { id: "defects-liability-period", label: "Post-Handover: The Defects Liability Period" },
    { id: "common-execution-mistakes", label: "Common Execution Mistakes" },
    { id: "choosing-an-execution-partner", label: "Choosing a Fit-Out Execution Partner" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Interior Fit-Out Company", href: "/services/interior-fit-out" },
    { title: "Turnkey Office Fit-Out (Cat A & Cat B)", href: "/services/interior-fit-out/turnkey-office-fit-out" },
    { title: "Fit-Out MEP Coordination", href: "/services/interior-fit-out/fit-out-mep-coordination" },
    { title: "False Ceilings & Partitions", href: "/services/interior-fit-out/false-ceilings-and-partitions" },
    { title: "Office Flooring Systems", href: "/services/interior-fit-out/flooring-systems" },
  ];

  return (
    <>
      <SEOHead
        title={`How an Office Fit-Out Actually Gets Built | ${SHORT_BRAND_NAME}`}
        description="A technical guide to how office interior fit-outs are actually executed in India — Cat A vs Cat B, site sequencing, MEP coordination, QC, and handover."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Sleek modern corporate boardroom with floor-to-ceiling windows and a city view"
        ogType="article"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "From Empty Shell to Move-In Ready: How an Office Fit-Out Actually Gets Built",
            description:
              "A technical guide to how office interior fit-outs are actually executed in India — Cat A vs Cat B, site sequencing, MEP coordination, QC, and handover.",
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
              { "@type": "ListItem", position: 3, name: "How an Office Fit-Out Gets Built", item: canonicalUrl },
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
                <span className="text-foreground">How an Office Fit-Out Gets Built</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              From Empty Shell to Move-In Ready: How an Office Fit-Out Actually Gets Built
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
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/MeetingRoom.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/MeetingRoom.jpg 1600w"
              sizes="(max-width: 768px) 100vw, 1600px"
              alt="Sleek modern corporate boardroom with floor-to-ceiling windows and a city view"
              className="w-full h-[360px] md:h-[460px] object-cover rounded-lg shadow-lg"
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
              Introduction: Design Is the Easy Part
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              A beautiful fit-out concept is only as good as the sequence it gets built in. Most
              of what determines whether a project lands on time and on budget isn't the design
              itself — it's the handover boundary, the order operations happen in, and how
              cleanly interiors and building services are coordinated on site. This guide is
              about that mechanical, non-design side of a fit-out: what actually happens between
              a signed design and a finished, occupied office.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It deliberately skips branding, aesthetics, and space-planning strategy — those are
              covered in our{" "}
              <Link to="/blog/commercial-interior-designers" className="text-primary hover:underline">
                commercial interior design
              </Link>{" "}
              and{" "}
              <Link to="/blog/office-space-planning-trends-2026" className="text-primary hover:underline">
                space planning
              </Link>{" "}
              guides — and focuses purely on execution mechanics.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Most of what follows will look invisible in the finished office. Nobody touring a
              completed workspace notices that the electrical panel was sized correctly, that the
              ceiling void had room for both the duct and the sprinkler pipe, or that the
              structured cabling was tested before the ceiling closed over it. They notice when
              those things weren't done properly — the meeting room that's always too warm, the
              network port that never worked, the ceiling tile that was cut to fit around a duct
              nobody planned for. Execution is the part of a fit-out that's judged by its
              absence of problems, not its presence of features.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="cat-a-vs-cat-b" className="text-3xl font-bold text-primary">
              Cat A vs Cat B: Where the Handover Boundary Falls
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              <Link to="/glossary/cat-a-vs-cat-b-fit-out" className="text-primary hover:underline">
                Cat A vs Cat B
              </Link>{" "}
              is the first thing to get precise about on any fit-out, because it defines who's
              responsible for what and where the base build ends. Cat A is typically the
              landlord's delivery — raised floor, ceiling grid, basic MEP services, finished
              common areas — handed over as a usable but unbranded shell. Cat B is the tenant fit-out
              layered on top: partitions, workstations, meeting rooms, joinery, and finishes
              specific to how that organisation works. A fit-out program that doesn't nail this
              boundary down early tends to surface scope disputes mid-project, not before it.
              See{" "}
              <Link to="/services/interior-fit-out/turnkey-office-fit-out" className="text-primary hover:underline">
                turnkey office fit-out
              </Link>{" "}
              for how a single-vendor delivery model handles this handover.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A "Cat A+" or "Cat A shell and core plus" specification has become common in the
              Indian market too — a landlord delivery that includes a bit more than a bare Cat A
              (perhaps a finished ceiling grid and basic lighting already installed), narrowing
              the gap a tenant's fit-out has to cover. Whatever the exact spec is called, the
              only thing that actually matters is having it documented precisely enough that both
              sides agree, in writing, on exactly where the landlord's scope stops and the
              tenant's begins.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The practical friction usually shows up around items that sit on the boundary —
              raised access flooring, ceiling grid modifications, or additional HVAC zoning that
              a tenant needs but a standard Cat A spec doesn't include. Whoever pays for that gap
              depends entirely on what the lease and the original Cat A specification actually
              say, which is why it's worth confirming in writing before design starts, not after
              a change order lands on the table.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="site-sequencing" className="text-3xl font-bold text-primary">
              Site Sequencing: The Order of Operations
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Fit-out execution follows a fairly fixed order for a reason: strip-out/demolition,
              first-fix MEP (services routed through walls and above the ceiling before anything
              is closed up), ceiling grid and partition framing, second-fix MEP (fittings,
              switches, diffusers, sprinkler heads), flooring, then furniture and final finishes.
              Skipping ahead — closing a ceiling before first-fix MEP is actually complete, for
              instance — doesn't save time; it just moves the rework to a more expensive, more
              disruptive point later in the program.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Getting this sequence right is largely a scheduling discipline problem, not a
              design one — see{" "}
              <Link to="/services/interior-fit-out/workplace-strategy-and-space-planning" className="text-primary hover:underline">
                workplace strategy &amp; space planning
              </Link>{" "}
              for how seat counts and layout decisions feed into this sequencing before
              construction even starts.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Trade coordination is what actually keeps this sequence from breaking down in
              practice. Electricians, HVAC technicians, ceiling installers, and flooring crews are
              frequently on site in the same week, working in adjacent or overlapping areas, and
              a site without a clear daily coordination process — who's working where, in what
              order, with what dependencies — loses time to crews waiting on each other or
              redoing work that another trade's activity disturbed. This is usually managed
              through a short daily or weekly site coordination meeting rather than left to the
              printed program alone, since the program shows the plan but not the day-to-day
              reality of which trade is actually ready to start.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="reading-the-fit-out-program" className="text-3xl font-bold text-primary">
              Reading the Fit-Out Program: Long-Lead Items &amp; the Critical Path
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A fit-out program (the construction schedule) and the BOQ (bill of quantities) are
              the two documents that actually govern how a project runs day to day — more than
              the design deck does once construction starts. Reading a program properly means
              spotting which tasks are on the critical path (the sequence of dependent tasks
              that, if any one slips, pushes the whole handover date) versus which have float
              (room to slip a few days without affecting the end date).
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Long-lead items are where most avoidable delays originate: imported furniture,
              specialist joinery, custom glass partitions, and certain electrical switchgear can
              carry lead times of several weeks to a few months. If those aren't ordered against
              the program's actual need-by date — not the date they're "remembered" — they
              quietly become the critical path themselves, regardless of how efficiently the
              construction work itself is running. A program reviewed only for construction
              milestones, without cross-checking procurement lead times against it, is missing
              the half of the schedule most likely to actually slip.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="where-fit-out-and-mep-collide" className="text-3xl font-bold text-primary">
              Where Fit-Out and MEP Collide
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Ceiling void space is where fit-out and MEP fight for the same limited real
              estate — ductwork, cable trays, sprinkler pipework, and light fittings all need to
              coexist above a suspended ceiling, and a ceiling design finalised without MEP input
              regularly turns out not to have enough clearance once services are actually routed.
              This exact interface is the subject of{" "}
              <Link to="/services/interior-fit-out/fit-out-mep-coordination" className="text-primary hover:underline">
                fit-out MEP coordination
              </Link>
              , and it's worth reading alongside our{" "}
              <Link to="/blog/mep-design-consultancy-india" className="text-primary hover:underline">
                MEP design &amp; consultancy guide
              </Link>{" "}
              for the building-systems side of the same problem.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The practical fix is a coordinated ceiling drawing — sometimes called a reflected
              ceiling plan overlaid with MEP services — reviewed by the design, MEP, and fit-out
              teams together before ceiling framing starts, rather than each trade working from
              its own drawing and discovering the clash on site. Catching a clearance conflict on
              a drawing costs an hour of someone's time; catching the same conflict after the
              ceiling grid is installed costs a rework crew and a schedule delay.
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/Execution.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/Execution.jpg 1200w"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Electrician in a hard hat installing a junction box and wiring during a fit-out"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="technical-choices-site-teams-make" className="text-3xl font-bold text-primary">
              Technical Choices Site Teams Actually Make
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Behind every finished ceiling, floor, and partition are technical decisions that
              rarely make it into a mood board. Ceiling type — grid/gypsum vs{" "}
              <Link to="/glossary/gypsum-vs-mineral-fibre-ceiling" className="text-primary hover:underline">
                gypsum vs mineral fibre
              </Link>{" "}
              — affects acoustics and cost as much as appearance; partitions range from fixed
              drywall to{" "}
              <Link to="/glossary/demountable-partitions" className="text-primary hover:underline">
                demountable systems
              </Link>{" "}
              that can be reconfigured later without full rebuild. Flooring choice interacts with
              cabling strategy — a{" "}
              <Link to="/glossary/raised-access-floor" className="text-primary hover:underline">
                raised access floor
              </Link>{" "}
              simplifies future data/power changes at a cost premium over direct-fix flooring.
              See{" "}
              <Link to="/services/interior-fit-out/false-ceilings-and-partitions" className="text-primary hover:underline">
                false ceilings &amp; partitions
              </Link>{" "}
              and{" "}
              <Link to="/services/interior-fit-out/flooring-systems" className="text-primary hover:underline">
                flooring systems
              </Link>{" "}
              for the full range of options.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Lighting design is measured, not eyeballed — lux levels are set against{" "}
              <a
                href="https://www.bis.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                IS 3646
              </a>
              , and{" "}
              <Link to="/glossary/lighting-power-density" className="text-primary hover:underline">
                lighting power density
              </Link>{" "}
              targets are set against{" "}
              <a
                href="https://beeindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ECBC
              </a>{" "}
              compliance, covered in{" "}
              <Link to="/services/interior-fit-out/office-lighting-design" className="text-primary hover:underline">
                office lighting design
              </Link>
              . And workstation layout ties directly to{" "}
              <Link to="/glossary/workstation-density" className="text-primary hover:underline">
                workstation density
              </Link>{" "}
              and the{" "}
              <Link to="/glossary/carpet-vs-built-up-area" className="text-primary hover:underline">
                carpet vs built-up area
              </Link>{" "}
              distinction that ultimately decides how many desks actually fit.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Electrical Capacity: A Question Design Alone Can't Answer</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              A floor plan doesn't tell you whether the building can actually power it. That
              comes down to the{" "}
              <Link to="/glossary/sanctioned-load" className="text-primary hover:underline">
                sanctioned load
              </Link>{" "}
              available to the tenancy, and whether it's supplied through an{" "}
              <Link to="/glossary/ht-vs-lt-panel" className="text-primary hover:underline">
                HT or LT panel
              </Link>
              . A fit-out design finalised without checking available sanctioned load against the
              workstation count, IT load, and HVAC equipment being added is one of the more
              expensive mistakes to discover late — because increasing sanctioned load after the
              fact usually means a separate application to the utility, not just an electrician's
              visit.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">Acoustics &amp; Structured Cabling</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Acoustic performance is specified, not assumed — ceiling and partition materials
              carry an{" "}
              <Link to="/glossary/nrc-rating" className="text-primary hover:underline">
                NRC rating
              </Link>{" "}
              (Noise Reduction Coefficient) that determines how much sound they absorb versus
              reflect, which is why an open office finished entirely in hard, reflective
              materials often turns out louder than the design renders suggested. On the data
              side, the choice between{" "}
              <Link to="/glossary/cat6-vs-cat6a" className="text-primary hover:underline">
                Cat6 and Cat6a
              </Link>{" "}
              structured cabling affects both network speed headroom and cable bulk in an
              already-crowded ceiling void — a detail usually decided by the IT team, but one
              that has to reach the fit-out team before cable trays are sized.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="furniture-joinery-glass-partitions" className="text-3xl font-bold text-primary">
              Furniture, Joinery &amp; Glass Partitions
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Workstations and furniture are usually the most visible line item in a fit-out
              budget, and the custom-vs-off-the-shelf decision affects both cost and lead time
              in opposite directions — catalogue systems are faster to procure and cheaper per
              unit, while custom joinery (reception desks, executive cabins, branded elements)
              takes longer to fabricate but delivers a fit that off-the-shelf furniture usually
              can't. See{" "}
              <Link to="/services/interior-fit-out/workstations-and-office-furniture" className="text-primary hover:underline">
                workstations &amp; office furniture
              </Link>{" "}
              for how these get specified and coordinated with the small-power (electrical) points
              each desk needs.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Glass partitions deserve their own mention because they sit at the intersection of
              several disciplines at once — acoustic performance (single vs double-glazed
              affects sound transfer between rooms), fire rating where required, and structural
              fixing detail, all in a material that shows every installation flaw far more
              visibly than a painted drywall partition would. See{" "}
              <Link to="/services/interior-fit-out/glass-partitions-and-doors" className="text-primary hover:underline">
                glass partitions &amp; doors
              </Link>{" "}
              for how acoustic rooms and meeting spaces typically get specified.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="qc-snagging-handover" className="text-3xl font-bold text-primary">
              Quality Control, Snagging &amp; Handover
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Snagging is the formal inspection stage where defects — misaligned tiles,
              non-functioning switches, scratched finishes — are logged against a checklist,
              fixed, and re-inspected before handover. Skipping or rushing this step doesn't make
              the defects disappear; it just means the occupant discovers them after move-in,
              when a fix is more disruptive to daily operations and harder to schedule around a
              working office.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Life-safety systems get commissioned, not just visually checked off. Sprinkler
              coverage is verified against the space's{" "}
              <Link to="/glossary/sprinkler-hazard-classification" className="text-primary hover:underline">
                hazard classification
              </Link>
              , fire alarm and detection circuits are tested end to end, and — where the building
              relies on one —{" "}
              <Link to="/glossary/wet-riser" className="text-primary hover:underline">
                wet riser
              </Link>{" "}
              systems are pressure-tested. These records typically feed into the building's{" "}
              <Link to="/glossary/fire-noc" className="text-primary hover:underline">
                fire NOC
              </Link>{" "}
              documentation, which is one more reason commissioning isn't a step to compress when
              a handover date is tight.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Handover documentation — as-built drawings, warranty terms, MEP testing and
              commissioning records — matters just as much as the physical inspection, since it's
              what the facilities team relies on for maintenance long after the project team has
              moved on.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="defects-liability-period" className="text-3xl font-bold text-primary">
              Post-Handover: The Defects Liability Period
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Handover isn't the end of the contractor's responsibility — most fit-out contracts
              include a defects liability period, typically several months to a year, during
              which the contractor is obligated to fix defects that surface after occupants move
              in and start actually using the space. Some issues genuinely only show up under
              real occupancy: a door that starts sticking once humidity shifts with the seasons,
              an HVAC zone that's fine on a mild day but struggles at full occupancy on a hot one,
              or a partition that develops a hairline crack as the building settles.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              What matters practically is having a clear process for logging and escalating these
              issues during that period, and confirming upfront which items are actually covered
              versus which count as separate wear-and-tear or client-caused damage — a
              conversation worth having before the defects liability period starts, not once a
              dispute over a specific repair is already underway.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-execution-mistakes" className="text-3xl font-bold text-primary">
              Common Execution Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Finalising ceiling design before MEP routing is confirmed, then discovering a clearance clash</li>
              <li>Locking partition layouts before electrical and data point positions are agreed</li>
              <li>Ordering long-lead furniture or specialist finishes late, so they become the schedule's critical path</li>
              <li>Treating Cat A/Cat B scope boundaries loosely, leading to disputes over who delivers what</li>
              <li>Finalising a workstation count and equipment load without checking it against available sanctioned load</li>
              <li>Rushing snagging or life-safety commissioning to hit a handover date, pushing defect discovery onto the occupant</li>
              <li>Not confirming what the defects liability period actually covers before it starts, leading to disputes over routine wear vs genuine defects</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-an-execution-partner" className="text-3xl font-bold text-primary">
              Choosing a Fit-Out Execution Partner
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Design talent and execution discipline are different skills, and the gap between
              them is where most fit-out schedules slip. Look for a partner with quality-control
              checkpoints built into the process rather than a single inspection at the end,
              in-house or tightly coordinated MEP capability rather than a design team that hands
              off to a separate MEP vendor with no shared accountability, and a track record of
              hitting handover dates on comparable projects — not just a strong portfolio of
              finished spaces.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's also worth asking how a prospective partner handles the two moments where
              things actually go wrong: how they respond when a clearance clash or capacity issue
              surfaces mid-construction, and how responsive they are during the defects liability
              period after handover. A portfolio shows what a team can design; references from
              past clients about how issues got resolved show what a team can actually deliver
              under pressure — and that's the half of the job this guide has been about.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A fit-out's design gets the attention, but its execution — sequencing, the fit-out/MEP
              interface, and disciplined QC through to handover — is what actually determines
              whether the project lands on schedule and holds up once people move in. Getting the
              Cat A/Cat B boundary and the build sequence right from day one prevents most of the
              rework that turns a straightforward fit-out into a stressful one.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning an office fit-out and want execution that actually holds to schedule?
              Hagerstone delivers turnkey fit-outs with in-house MEP coordination and built-in QC
              checkpoints — see our{" "}
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
