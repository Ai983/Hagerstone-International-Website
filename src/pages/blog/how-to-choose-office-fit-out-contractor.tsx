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

const slug = "how-to-choose-office-fit-out-contractor";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const heroImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Fit%20Out%20Contractor/FloorDesign.jpg";
const heroImageAlt =
  "Client and contractor reviewing a construction drawing together on site";

const inlineImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Fit%20Out%20Contractor/SiteSupervision.jpg";
const inlineImageAlt =
  "A site supervisor holding a clipboard, conducting a quality inspection inside a finished commercial interior";

const relatedTopics = [
  "Fit-Out Contractor Selection",
  "Vendor Due Diligence",
  "Turnkey Fit-Out",
  "Quotation Comparison",
  "Fit-Out Red Flags",
];

const faqItems: FaqItem[] = [
  {
    question: "Should I hire a single turnkey contractor or separate designer and contractor?",
    answer:
      "It depends on how much coordination you want to own. A single turnkey contractor carries design and execution under one contract, which means one point of accountability when something goes wrong at the design-to-site handoff — a common failure point. Separate designer and contractor can work well when you want an independent design voice, but it puts the coordination burden on you (or a project manager you hire) to resolve disputes between the two. Neither is universally right; it depends on your internal bandwidth to manage the relationship.",
  },
  {
    question: "How many quotes should I get before choosing a fit-out contractor?",
    answer:
      "Three is a reasonable working number — enough to see a real cost range without turning the process into a part-time job. The harder requirement isn't the count, it's comparability: every contractor needs to quote against the same drawing, the same specification, and the same carpet area definition, or the comparison is meaningless regardless of how many quotes you collect.",
  },
  {
    question: "What's a reasonable payment schedule for a fit-out project?",
    answer:
      "Payment schedules are typically tied to milestones — design sign-off, site mobilisation, structural and MEP rough-in, finishes, and final handover — rather than a flat percentage upfront. A contractor asking for the majority of the contract value before meaningful work has started on site is a legitimate reason to pause and ask why, especially if it's paired with vague milestone definitions elsewhere in the contract.",
  },
  {
    question: "What should a fit-out contract explicitly define?",
    answer:
      "At minimum: the scope of work item by item (not a lump-sum description), the material specification for each finish, the payment schedule tied to defined milestones, the defect liability period after handover, and how variations (client-requested changes mid-project) are priced and approved. Vague scope language is where cost disputes originate — a scope that says \"flooring as per design\" rather than naming the exact material, grade, and area is an invitation to disagreement later.",
  },
  {
    question: "What are the clearest red flags when evaluating a fit-out contractor?",
    answer:
      "A quote significantly below the others without an explanation of what's different in scope or spec; reluctance to provide references from completed projects of similar scale; no in-house design or engineering capability, meaning core decisions are subcontracted without a clear accountable party; vague or missing defect liability terms; and pressure to sign quickly without time to review the scope and specification in detail. Any one of these alone isn't necessarily disqualifying, but more than one together is worth taking seriously.",
  },
  {
    question: "Should I visit a contractor's ongoing or completed sites before signing?",
    answer:
      "Yes, and it's one of the highest-value steps in the whole selection process. A completed project shows you the actual finish quality after time has passed, not just the handover-day condition, and talking to that client directly — away from the contractor — usually surfaces things a proposal document never will, particularly around how issues were handled during execution rather than just the final result.",
  },
  {
    question: "What's the difference between fixed price, cost-plus, and item-rate contracts?",
    answer:
      "A fixed-price contract quotes one number against a defined scope, with the contractor absorbing overrun risk on their own estimate. A cost-plus contract bills actual cost plus an agreed margin, shifting overrun risk to the client but removing the contractor's incentive to pad the estimate. An item-rate contract prices each unit of work against a rate card, with the final bill following measured quantities — common when the design isn't fully finalised before work starts. The right choice depends on how well-defined the scope already is and how much oversight you're able to provide during execution.",
  },
];

export default function HowToChooseOfficeFitOutContractorBlog() {
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
    { id: "introduction", label: "Introduction: The Decision That Determines Everything After It" },
    { id: "turnkey-vs-separate", label: "Turnkey Contractor vs Separate Designer & Contractor" },
    { id: "the-selection-checklist", label: "The Selection Checklist" },
    { id: "comparing-quotes-properly", label: "Comparing Quotes Properly" },
    { id: "pricing-structures", label: "Pricing Structures: Fixed Price, Cost-Plus & Item-Rate" },
    { id: "contract-terms-that-matter", label: "Contract Terms That Actually Matter" },
    { id: "red-flags-to-watch-for", label: "Red Flags to Watch For" },
    { id: "site-visits-and-references", label: "Site Visits & References" },
    { id: "during-the-project", label: "What Good Contractor Behaviour Looks Like Mid-Project" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Office Design & Build", href: "/services/office-design-build" },
    { title: "Interior Fit-Out Services", href: "/services/interior-fit-out" },
  ];

  return (
    <>
      <SEOHead
        title={`How to Choose an Office Fit-Out Contractor | ${SHORT_BRAND_NAME}`}
        description="A practical checklist for choosing an office fit-out contractor in India — turnkey vs separate teams, comparing quotes, contract terms, and the red flags to watch for."
        canonical={canonicalUrl}
        ogImage={heroImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="how to choose a fit-out contractor, office fit-out vendor selection, fit-out contract terms india, turnkey fit-out contractor, fit-out red flags, fixed price vs cost plus contract, fit-out quotation comparison, office interior contractor checklist"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "How to Choose an Office Fit-Out Contractor",
            description:
              "A practical checklist for choosing an office fit-out contractor in India — turnkey vs separate teams, comparing quotes, contract terms, and the red flags to watch for.",
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
            articleSection: "Cost & Planning",
            keywords:
              "how to choose a fit-out contractor, office fit-out vendor selection, fit-out contract terms india, turnkey fit-out contractor, fit-out red flags, fixed price vs cost plus contract, fit-out quotation comparison, office interior contractor checklist",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "How to Choose a Fit-Out Contractor", item: canonicalUrl },
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
                <span className="text-foreground">How to Choose a Fit-Out Contractor</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              How to Choose an Office Fit-Out Contractor
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
              Introduction: The Decision That Determines Everything After It
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Most fit-out problems that surface during construction — scope disputes, quality
              shortfalls, missed deadlines — were actually decided at the contractor selection
              stage, long before the first wall was framed. A well-run selection process doesn't
              guarantee a smooth project, but a rushed one reliably produces avoidable problems.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide is a practical companion to our{" "}
              <Link to="/blog/office-fit-out-cost-guide-india-2026" className="text-primary hover:underline">
                office fit-out cost guide
              </Link>{" "}
              and our{" "}
              <Link to="/blog/office-interior-fit-out-execution-guide" className="text-primary hover:underline">
                fit-out execution guide
              </Link>
              : it focuses specifically on how to choose the contractor who will deliver the
              project — what to check, how to compare quotes fairly, and the specific red flags
              worth taking seriously before signing anything.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's worth being clear about why this matters more than it might seem to at the
              outset. A fit-out is one of the largest discretionary spends most businesses make on
              their physical operations, and unlike a one-off purchase, it's a multi-month
              relationship with a vendor who will be inside your (soon to be) workplace daily,
              making dozens of small judgment calls that never make it into a drawing. Selecting on
              price alone treats the contractor as a commodity; the projects that go well tend to
              treat contractor selection as closer to a hiring decision.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="turnkey-vs-separate" className="text-3xl font-bold text-primary">
              Turnkey Contractor vs Separate Designer &amp; Contractor
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The first decision is structural: one turnkey contractor carrying design and
              execution under a single contract, or a separate designer and execution contractor
              working together. A turnkey model gives you one point of accountability — when
              something goes wrong at the handoff between design intent and site execution, a
              common failure point in fit-outs, there's no ambiguity about who owns the fix.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Separate teams can work well when an independent design voice matters more than
              single-point accountability, but it shifts the coordination burden onto you or a
              project manager you retain — someone has to resolve disagreements between designer
              and contractor when they arise, and they will arise. Neither model is universally
              correct; the right choice depends on how much of that coordination you're equipped
              and willing to own.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="the-selection-checklist" className="text-3xl font-bold text-primary">
              The Selection Checklist
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Before requesting quotes, confirm each contractor under consideration on the
              following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>In-house design and engineering capability, not just execution and subcontracted trades</li>
              <li>A portfolio of completed projects at a similar scale and sector to yours</li>
              <li>Direct references from at least two completed clients, contactable without the contractor present</li>
              <li>Clear internal coordination across{" "}
                <Link to="/blog/mep-design-consultancy-india" className="text-primary hover:underline">MEP</Link>,{" "}
                <Link to="/blog/commercial-hvac-systems" className="text-primary hover:underline">HVAC</Link>, and finishes rather than fully outsourced trades with no single owner
              </li>
              <li>A defined quality control and snagging process, not just a final walkthrough</li>
              <li>Financial stability appropriate to the project size — a contractor over-committed across too many simultaneous projects is a real capacity risk</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Of these, in-house design and engineering capability is worth weighing most heavily.
              A contractor who subcontracts MEP, HVAC, and finishes to separate outside vendors isn't
              automatically a bad choice, but it means every coordination gap between those trades
              becomes your problem to catch, not theirs to have prevented — and coordination gaps
              between separately contracted trades are one of the most common sources of rework on a
              fit-out. Ask directly whether the trades quoted are in-house staff or subcontracted,
              and if subcontracted, who is contractually responsible when two trades' work conflicts
              on site.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="comparing-quotes-properly" className="text-3xl font-bold text-primary">
              Comparing Quotes Properly
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Three quotes is a reasonable working number, but the count matters less than
              comparability. Every contractor needs to quote against the same drawing set, the
              same material specification, and the same{" "}
              <Link to="/glossary/carpet-vs-built-up-area" className="text-primary hover:underline">
                carpet area
              </Link>{" "}
              definition — a lower headline number is meaningless, and often actively misleading,
              if it's quoting a lighter material grade or a smaller area than the others.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Ask each contractor to break the quote down by trade and material line item rather
              than accepting a lump sum. An itemized quote lets you see exactly where the numbers
              diverge between contractors, and it's also the document you'll refer back to when
              evaluating variation requests during construction.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="pricing-structures" className="text-3xl font-bold text-primary">
              Pricing Structures: Fixed Price, Cost-Plus &amp; Item-Rate
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Beyond the headline number, the pricing structure itself changes where the risk sits.
              A <strong>fixed-price (lump sum) contract</strong> quotes one number against a defined
              scope and specification — the contractor absorbs the risk of a cost overrun on their
              own estimating error, which is why fixed-price quotes tend to carry a contingency
              buffer built into the number. It's the most predictable option for the client, provided
              the scope it's fixed against is genuinely complete.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              A <strong>cost-plus contract</strong> bills actual material and labour cost plus an
              agreed margin, which removes the contractor's incentive to pad an estimate but shifts
              the overrun risk onto the client if the project runs long or the scope grows. It can
              be the fairer structure when the scope genuinely can't be finalised upfront — a
              renovation with unknown existing conditions, for instance — but it requires more active
              client oversight of actual spend than a fixed price does.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              An <strong>item-rate (schedule of rates) contract</strong> prices each unit of work —
              per sq ft of flooring, per point of electrical wiring — against a rate card, with the
              final bill following measured quantities. It's common on projects where the design is
              still being finalised as work starts, but it puts the burden on the client (or their
              project manager) to audit measured quantities carefully, since the total isn't fixed
              until the last measurement is taken. Whichever structure a contractor proposes, the
              question to ask is the same: who bears the risk if the real scope turns out to be
              different from the estimated one, and is that risk allocation actually acceptable to
              you.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="contract-terms-that-matter" className="text-3xl font-bold text-primary">
              Contract Terms That Actually Matter
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A fit-out contract should explicitly define scope item by item, not describe it in a
              paragraph — "flooring as per design" invites disagreement later in a way that naming
              the exact material, grade, and area doesn't. Payment schedules should be tied to
              defined milestones (design sign-off, mobilisation, structural and MEP rough-in,
              finishes, handover) rather than a large upfront percentage with vague conditions
              attached to the rest.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Two clauses are worth reading twice: the defect liability period after handover
              (how long the contractor remains responsible for fixing issues that surface post
              occupancy), and how variations — client-requested changes mid-project — are priced
              and approved. Both are where cost and responsibility disputes most often originate,
              precisely because they're easy to leave vague when everyone's optimistic at signing.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="red-flags-to-watch-for" className="text-3xl font-bold text-primary">
              Red Flags to Watch For
            </h2>
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
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>A quote significantly below the others with no explanation of what's different in scope or spec</li>
              <li>Reluctance to provide references from completed, similarly-scaled projects</li>
              <li>No in-house design or engineering capability — core decisions subcontracted with no single accountable party</li>
              <li>Vague or missing defect liability and variation-pricing terms in the draft contract</li>
              <li>Pressure to sign quickly, without time to review scope and specification in detail</li>
              <li>An unwillingness to let you speak with a past client directly, without the contractor present</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Any single item here isn't necessarily disqualifying on its own — but more than one
              appearing together is worth taking seriously before proceeding.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="site-visits-and-references" className="text-3xl font-bold text-primary">
              Site Visits &amp; References
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Visiting a contractor's completed project — ideally one that's been occupied for at
              least six months — shows you finish quality after real use, not just handover-day
              condition. Talking to that client directly, away from the contractor, usually
              surfaces more useful information than any proposal document: how issues were
              communicated during execution, whether the schedule held, and whether the defect
              liability period was honoured without a fight.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="during-the-project" className="text-3xl font-bold text-primary">
              What Good Contractor Behaviour Looks Like Mid-Project
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Selection doesn't end at signing — it's worth knowing what good execution behaviour
              looks like so problems are caught early rather than at handover. Regular, proactive
              progress updates (not just answers when you ask), transparent handling of variations
              with pricing shown before work proceeds, and a structured{" "}
              <Link to="/blog/office-interior-fit-out-execution-guide" className="text-primary hover:underline">
                snagging process
              </Link>{" "}
              before final handover are all signs the contractor selected well is delivering the
              way they represented themselves during the pitch.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              It's also worth setting up a lightweight but regular cadence from the start — a weekly
              site walkthrough or progress call, even a short one, catches drift between plan and
              reality far earlier than a monthly review does. A contractor who resists a regular
              cadence, or treats each request for an update as an inconvenience, is signalling
              something about how the rest of the project is likely to go. Conversely, a contractor
              who proactively flags a problem before you'd have noticed it yourself — a material
              delay, a design clash discovered on site — is demonstrating exactly the behaviour the
              reference checks were meant to predict.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Choosing a fit-out contractor well takes longer than choosing one quickly, but nearly
              every serious problem that surfaces mid-project traces back to a selection shortcut —
              an unchecked reference, a vague scope line, a quote accepted without asking why it was
              lower. The time spent comparing quotes properly and reading the contract closely is
              consistently the highest-leverage hour spent on the entire project.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Evaluating fit-out contractors for a new project? Hagerstone delivers design and
              execution under one turnkey scope, with in-house MEP, HVAC, and finishing teams — see
              our{" "}
              <Link to="/services/office-design-build" className="text-primary hover:underline">
                office design &amp; build services
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
