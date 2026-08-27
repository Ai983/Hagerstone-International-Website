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

const slug = "office-fit-out-cost-guide-india-2026";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const ogImage = "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20cost%20guide/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg";

export default function OfficeFitOutCostGuideBlog() {
  const lastUpdatedLabel = "August 27, 2026";
  const lastUpdatedIso = "2026-08-27T00:00:00Z";

  const relatedBlogPosts = getRecentPosts(5)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const tocItems = [
    { id: "introduction", label: "Introduction: Why Fit-Out Costs Vary So Widely" },
    { id: "what-is-an-office-fit-out", label: "What Is an Office Fit-Out?" },
    { id: "average-cost-per-sq-ft", label: "Average Office Fit-Out Cost in India (Per Sq Ft)" },
    { id: "factors-that-influence-cost", label: "Key Factors That Influence Fit-Out Cost" },
    { id: "cost-breakdown-by-category", label: "Cost Breakdown by Category" },
    { id: "how-to-control-costs", label: "How to Control Fit-Out Costs Without Cutting Corners" },
    { id: "getting-an-accurate-quote", label: "How to Get an Accurate Fit-Out Quote" },
    { id: "conclusion", label: "Conclusion: Budget With Clarity, Not Guesswork" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
    { title: "Office Design & Build Services", href: "/services/office-design-build" },
    { title: "MEP Design & Consultancy", href: "/services/mep" },
    { title: "HVAC Services", href: "/services/hvac" },
  ];

  return (
    <>
      <SEOHead
        title={`Office Fit-Out Cost in India: Per Sq Ft Pricing Guide | ${BRAND_NAME}`}
        description="How much does office fit-out cost in India? See per sq ft price ranges, what drives costs up or down, and how to budget a fit-out without cutting corners."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Modern corporate office interior representing a completed office fit-out project"
        ogType="article"
        keywords="office fit-out cost india, office interior cost per sq ft, commercial fit-out budget, office renovation cost india, turnkey office fit-out pricing"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Office Fit-Out Cost Guide: How Much Does It Cost to Fit Out an Office in India?",
            description:
              "How much does office fit-out cost in India? See per sq ft price ranges, what drives costs up or down, and how to budget a fit-out without cutting corners.",
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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: "Office Fit-Out Cost Guide",
                item: canonicalUrl,
              },
            ],
          },
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
                <span className="text-foreground">Office Fit-Out Cost Guide</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Office Fit-Out Cost Guide: How Much Does It Cost to Fit Out an Office in India?
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>
                Last updated <time dateTime={lastUpdatedIso}>{lastUpdatedLabel}</time>
              </span>
            </div>
            <img
              src={ogImage}
              alt="Modern corporate office interior representing a completed office fit-out project"
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
              Introduction: Why Fit-Out Costs Vary So Widely
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              "How much will it cost to fit out our office?" is usually the first question a
              business asks once it signs a lease — and one of the hardest to answer with a single
              number. Two companies leasing the exact same floor plate in the same building can end
              up with fit-out bills that differ by 2–3x, depending entirely on scope, finish level,
              and how early the design and MEP planning happen.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide breaks down what actually drives office fit-out cost in India, gives you
              realistic per-square-foot ranges to plan against, and shows where budgets typically
              get blown — so you can go into vendor conversations with realistic expectations
              instead of guesswork.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The figures below are indicative planning ranges drawn from typical commercial
              fit-out projects across Indian metros, not a quote. Your actual cost depends on
              location, building condition, and the specification level you choose — the only way
              to get an exact number is a site visit and a detailed scope of work.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-is-an-office-fit-out" className="text-3xl font-bold text-primary">
              What Is an Office Fit-Out?
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              An office fit-out is the process of converting a leased or owned shell space into a
              functional, finished workplace — everything from partitions, flooring, and ceilings to
              electrical, HVAC, furniture, and branding. The starting condition of the space
              changes the scope (and cost) dramatically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Bare shell</strong> — Only the structural slab,
                columns, and external walls exist. No flooring, ceiling, electrical, or HVAC
                distribution. Requires the most extensive fit-out.
              </li>
              <li>
                <strong className="text-foreground">Warm shell</strong> — Core MEP infrastructure
                (main electrical panels, base HVAC, fire systems) is in place, but interiors are
                unfinished.
              </li>
              <li>
                <strong className="text-foreground">Cat A (Category A)</strong> — Landlord has
                installed raised flooring, ceiling grid, basic lighting, and finished common areas;
                tenant adds partitions, furniture, and branding.
              </li>
              <li>
                <strong className="text-foreground">Cat B (Category B)</strong> — The final,
                move-in-ready layer: partitions, workstations, meeting rooms, pantry, branding, and
                AV — built on top of a Cat A base.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Most commercial leases in India hand over space somewhere between bare shell and warm
              shell, which means the tenant's fit-out budget typically has to cover both the Cat A
              and Cat B layers of work.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="average-cost-per-sq-ft" className="text-3xl font-bold text-primary">
              Average Office Fit-Out Cost in India (Per Sq Ft)
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              As a planning benchmark, office fit-out costs in India generally fall into three
              tiers based on finish level and complexity:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Fit-Out Tier</th>
                    <th className="text-left py-3 px-4 font-semibold">Typical Scope</th>
                    <th className="text-left py-3 px-4 font-semibold">Indicative Cost (per sq ft)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Basic / Functional</td>
                    <td className="py-3 px-4">Simple partitions, standard flooring, basic lighting, minimal branding</td>
                    <td className="py-3 px-4">₹1,200 – ₹1,800</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Mid-Range / Corporate</td>
                    <td className="py-3 px-4">Branded interiors, ergonomic furniture, upgraded MEP, meeting room AV</td>
                    <td className="py-3 px-4">₹1,800 – ₹2,800</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Premium / Turnkey</td>
                    <td className="py-3 px-4">Full MEP overhaul, premium finishes, custom joinery, smart systems</td>
                    <td className="py-3 px-4">₹2,800 – ₹4,500+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              Ranges are indicative and vary by city, building grade, and vendor. Delhi NCR,
              Mumbai, and Bengaluru typically sit at the higher end due to labor and material
              costs; Tier-2 cities can run lower.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="factors-that-influence-cost" className="text-3xl font-bold text-primary">
              Key Factors That Influence Fit-Out Cost
            </h2>

            <h3 className="text-2xl font-semibold text-foreground">1. Starting Condition of the Space</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              A bare shell needing full MEP installation costs significantly more than a warm shell
              or Cat A space that already has core infrastructure in place.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">2. MEP Complexity</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC capacity, electrical load upgrades, fire and life safety systems, and plumbing
              changes are among the largest line items in any fit-out — and the most expensive to
              redo if planned late. Early coordination with an{" "}
              <Link to="/services/mep" className="text-primary hover:underline">
                MEP design &amp; consultancy
              </Link>{" "}
              team prevents costly rework once civil work has started.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">3. Finish and Material Specifications</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Flooring, ceiling systems, glass partitions, furniture, and lighting fixtures can vary
              4–5x in price depending on brand and material grade. Specification decisions made
              during design directly set the budget ceiling.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">4. Furniture, Fixtures &amp; Equipment (FF&amp;E)</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Workstations, ergonomic seating, storage, and pantry equipment are often budgeted
              separately from civil and MEP work but can account for 20–30% of the total project
              cost.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">5. Timeline and Location</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Compressed timelines increase labor costs through overtime and parallel-trade
              scheduling. City-specific labor rates and material logistics also shift the final
              number.
            </p>

            <h3 className="text-2xl font-semibold text-foreground">6. Compliance and Approvals</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Fire NOC, structural approvals, and building-management sign-offs add both cost and
              lead time — factor these in early rather than treating them as an afterthought.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="cost-breakdown-by-category" className="text-3xl font-bold text-primary">
              Cost Breakdown by Category
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              On a typical mid-range corporate fit-out, budget is roughly distributed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li><strong className="text-foreground">Civil &amp; interior works</strong> (partitions, flooring, ceiling, paint) — roughly 30–35%</li>
              <li><strong className="text-foreground">MEP</strong> (electrical, HVAC, fire, plumbing) — roughly 25–30%</li>
              <li><strong className="text-foreground">Furniture &amp; fit-out fixtures</strong> — roughly 20–25%</li>
              <li><strong className="text-foreground">Design, branding &amp; signage</strong> — roughly 5–10%</li>
              <li><strong className="text-foreground">Project management &amp; contingency</strong> — roughly 5–10%</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              These proportions shift depending on how much MEP work the base building already
              provides — this is why understanding your shell condition upfront (see the section
              above) matters as much as the finish level you choose.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="how-to-control-costs" className="text-3xl font-bold text-primary">
              How to Control Fit-Out Costs Without Cutting Corners
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Lock the design before construction starts.</strong>{" "}
                Mid-project design changes are the single biggest cause of cost overruns.
              </li>
              <li>
                <strong className="text-foreground">Get MEP and interior teams aligned early.</strong>{" "}
                Coordinating{" "}
                <Link to="/services/interior-fit-out" className="text-primary hover:underline">
                  interior fit-out delivery
                </Link>{" "}
                with MEP planning from day one avoids rework caused by clashing ceiling, ducting,
                and lighting layouts.
              </li>
              <li>
                <strong className="text-foreground">Phase your fit-out if headcount will grow.</strong>{" "}
                Building core infrastructure for future capacity now is cheaper than retrofitting
                later.
              </li>
              <li>
                <strong className="text-foreground">Standardize where it doesn't show.</strong>{" "}
                Spend on visible, high-touch areas (reception, meeting rooms) and standardize
                material choices in back-of-house zones.
              </li>
              <li>
                <strong className="text-foreground">Get a single point of accountability.</strong>{" "}
                Splitting design, MEP, and execution across separate vendors creates coordination
                gaps that show up as change orders. A single design-and-build partner keeps scope,
                cost, and timeline in one place.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="getting-an-accurate-quote" className="text-3xl font-bold text-primary">
              How to Get an Accurate Fit-Out Quote
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A reliable quote needs more than a floor area. Before requesting one, have these
              ready:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Current shell condition (bare shell, warm shell, or Cat A handover)</li>
              <li>Headcount and expected growth over the lease term</li>
              <li>Desired ratio of workstations to meeting rooms and collaborative space</li>
              <li>Any brand guidelines or finish preferences</li>
              <li>Target move-in date</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              With this in hand, a design-and-build partner can walk the site, prepare a concept,
              and return a scoped estimate rather than a rough per-sq-ft guess — the only version of
              "cost" that's actually useful for budgeting.
            </p>
            <img

              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20cost%20guide/jason-w-bYoRZI30nEI-unsplash.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20cost%20guide/jason-w-bYoRZI30nEI-unsplash.jpg 800w"

              sizes="(max-width: 768px) 100vw, 800px"
              alt="Modern office lounge showcasing commercial interior design for collaborative teams"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-lg"
              width="800"
              height="533"
              loading="eager"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion: Budget With Clarity, Not Guesswork
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Office fit-out cost in India isn't a fixed number — it's a function of shell
              condition, MEP scope, finish level, and how early planning happens. Businesses that
              treat design and MEP coordination as a single upfront exercise, rather than sequential
              afterthoughts, consistently land closer to their original budget.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Use the ranges in this guide to set an initial planning budget, then validate it with
              a scoped, site-specific quote before committing to a timeline.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning an office fit-out and want a real number instead of a per-sq-ft guess?
              Talk to Hagerstone International for a scoped, site-specific fit-out estimate.
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
