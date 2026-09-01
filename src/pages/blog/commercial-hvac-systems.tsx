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

const slug = "commercial-hvac-systems";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const ogImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20HVAC%20Systems/konstantin-kitsenuik-4ce3DZPWdic-unsplash.jpg";

export default function CommercialHvacSystemsGuideBlog() {
  const lastUpdatedLabel = "September 1, 2026";
  const lastUpdatedIso = "2026-09-01T00:00:00Z";

  const relatedBlogPosts = getRecentPosts(5)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  const tocItems = [
    { id: "introduction", label: "Introduction: Why HVAC Is the Hardest Decision to Reverse" },
    { id: "what-hvac-covers", label: "What \"HVAC\" Actually Covers in a Commercial Fit-Out" },
    { id: "system-types", label: "Types of Commercial HVAC Systems" },
    { id: "load-calculations", label: "How HVAC Load Calculations Work" },
    { id: "choosing-a-system", label: "Choosing the Right System for Your Building Type" },
    { id: "ducting-airflow", label: "Ducting Design & Airflow Planning" },
    { id: "indoor-air-quality", label: "Indoor Air Quality: Ventilation & Filtration" },
    { id: "bms-integration", label: "Integration with MEP & Building Management Systems" },
    { id: "energy-efficiency", label: "Energy Efficiency & Operating Cost" },
    { id: "common-mistakes", label: "Common HVAC Mistakes in Office Fit-Outs" },
    { id: "commissioning", label: "Testing, Balancing & Commissioning" },
    { id: "conclusion", label: "Conclusion: Plan HVAC Before You Plan the Ceiling" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "HVAC Services", href: "/services/hvac" },
    { title: "MEP Design & Consultancy", href: "/services/mep" },
    { title: "Office Design & Build Services", href: "/services/office-design-build" },
    { title: "Interior Fit-Out Delivery", href: "/services/interior-fit-out" },
  ];

  return (
    <>
      <SEOHead
        title={`Commercial HVAC Systems in India: A Technical Buyer's Guide | ${BRAND_NAME}`}
        description="VRF vs ducted split vs chilled water: a technical guide to choosing, sizing, and commissioning commercial HVAC systems for offices in India."
        canonical={canonicalUrl}
        ogImage={ogImage}
        ogImageAlt="Commercial office ceiling showing HVAC ducting and diffuser installation"
        ogType="article"
        keywords="commercial hvac systems india, office hvac design, VRF vs VRV, hvac load calculation, ducted split system, chilled water system, hvac commissioning, indoor air quality office"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Commercial HVAC Systems in India: A Technical Buyer's Guide",
            description:
              "VRF vs ducted split vs chilled water: a technical guide to choosing, sizing, and commissioning commercial HVAC systems for offices in India.",
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
                name: "Commercial HVAC Systems Guide",
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
                <span className="text-foreground">Commercial HVAC Systems Guide</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Commercial HVAC Systems in India: A Technical Buyer's Guide
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>
                Last updated <time dateTime={lastUpdatedIso}>{lastUpdatedLabel}</time>
              </span>
            </div>
            <img
              src={ogImage}
              alt="Commercial office ceiling showing HVAC ducting and diffuser installation"
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
              Introduction: Why HVAC Is the Hardest Decision to Reverse
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Most fit-out decisions can be revisited later — furniture gets swapped, finishes get
              repainted, partitions get moved. HVAC is different. Once ducting is routed above a
              finished ceiling and equipment is installed, correcting an undersized system or a
              badly zoned layout means opening up completed work. More fit-out budgets get quietly
              blown by HVAC rework than by any other single trade.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide is written for people signing off on HVAC decisions, not designing the
              system themselves — what the major system types actually are, how sizing works, what
              drives the final equipment selection, and where projects typically go wrong.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-hvac-covers" className="text-3xl font-bold text-primary">
              What "HVAC" Actually Covers in a Commercial Fit-Out
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC (Heating, Ventilation, and Air Conditioning) in an Indian commercial context is
              almost entirely about cooling and ventilation. A complete scope typically includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Cooling equipment</strong> — the
                condensing/chiller units that generate cooling capacity.
              </li>
              <li>
                <strong className="text-foreground">Air distribution</strong> — ducting, diffusers,
                and grilles that move conditioned air through the space.
              </li>
              <li>
                <strong className="text-foreground">Fresh air &amp; ventilation</strong> —
                dedicated systems that bring in and treat outdoor air, separate from recirculated
                conditioned air.
              </li>
              <li>
                <strong className="text-foreground">Controls</strong> — thermostats, zoning, and
                integration with a building management system (BMS).
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Each of these is sized and designed together, not independently — which is why HVAC
              needs to be part of the design conversation from the earliest layout stage.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="system-types" className="text-3xl font-bold text-primary">
              Types of Commercial HVAC Systems
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">System</th>
                    <th className="text-left py-3 px-4 font-semibold">Best For</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Trade-Off</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">VRF / VRV</td>
                    <td className="py-3 px-4">Mid-to-large offices needing zone-level control</td>
                    <td className="py-3 px-4">Higher upfront cost, best energy efficiency</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Ducted split</td>
                    <td className="py-3 px-4">Small-to-mid offices, single-floor spaces</td>
                    <td className="py-3 px-4">Lower cost, less zoning flexibility</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Chilled water</td>
                    <td className="py-3 px-4">Large campuses, multi-tenant buildings</td>
                    <td className="py-3 px-4">Efficient at scale, high infrastructure cost</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Package / rooftop units</td>
                    <td className="py-3 px-4">Standalone buildings, retail, warehouses</td>
                    <td className="py-3 px-4">Simple install, limited zoning control</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              VRF (Variable Refrigerant Flow) and VRV (Variable Refrigerant Volume) are largely
              brand-specific names for the same underlying technology — both allow multiple indoor
              units to run off shared outdoor condensing units with independent zone control.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="load-calculations" className="text-3xl font-bold text-primary">
              How HVAC Load Calculations Work
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Sizing a system starts with a heat load calculation — estimating how much heat the
              space gains, so the equipment can remove exactly that much. Key inputs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Occupancy density</strong> — more people per
                square foot means more heat load from body heat alone; open-plan floors with dense
                seating need materially more capacity than cellular layouts.
              </li>
              <li>
                <strong className="text-foreground">Equipment load</strong> — IT rooms, server
                racks, and dense workstation clusters with multiple monitors add significant heat
                that general office load assumptions underestimate.
              </li>
              <li>
                <strong className="text-foreground">Solar heat gain</strong> — glazing area,
                orientation, and shading determine how much heat enters through windows and
                facades, especially on west-facing glass in Indian summers.
              </li>
              <li>
                <strong className="text-foreground">Building envelope</strong> — insulation quality
                and construction type affect how much external heat transfers into conditioned
                space.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              A load calculation done from generic per-square-foot assumptions, without actually
              accounting for your seating density and equipment plan, is the single most common
              cause of an undersized system discovered only after occupancy — when the fix means
              retrofitting, not redesigning.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="choosing-a-system" className="text-3xl font-bold text-primary">
              Choosing the Right System for Your Building Type
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The right system depends less on preference and more on what your building and lease
              actually allow:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Leased floor in a multi-tenant tower</strong> —
                often inherits base-building chilled water or VRF infrastructure; your fit-out
                scope is usually limited to distribution within your floor plate, not the source
                equipment.
              </li>
              <li>
                <strong className="text-foreground">Standalone building or campus</strong> — full
                system choice is open; VRF suits phased occupancy and variable zone needs, chilled
                water suits large, continuously occupied floor plates.
              </li>
              <li>
                <strong className="text-foreground">IT/ITES with high server density</strong> —
                needs dedicated, often redundant, cooling for server rooms independent of the
                general office system, sized to a different load profile entirely.
              </li>
              <li>
                <strong className="text-foreground">Retail or F&amp;B fit-outs</strong> — higher
                occupancy density and equipment loads (kitchen exhaust, refrigeration) require
                package or dedicated systems sized well above standard office assumptions.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="ducting-airflow" className="text-3xl font-bold text-primary">
              Ducting Design &amp; Airflow Planning
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Even correctly sized equipment underperforms if the air doesn't reach the right
              places. Ducting design has to account for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Diffuser placement</strong> matched to seating
                layout, not a generic grid — misplaced diffusers create hot and cold spots even on
                a correctly sized system.
              </li>
              <li>
                <strong className="text-foreground">Duct routing</strong> coordinated with ceiling
                grid, lighting, and fire sprinkler layouts to avoid clashes discovered mid-install.
              </li>
              <li>
                <strong className="text-foreground">Noise (NC ratings)</strong> — oversized
                ductwork run at high velocity to save ceiling void height creates audible airflow
                noise in meeting rooms and quiet zones.
              </li>
              <li>
                <strong className="text-foreground">Insulation</strong> on supply ducting to
                prevent condensation and thermal loss between the unit and the diffuser.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="indoor-air-quality" className="text-3xl font-bold text-primary">
              Indoor Air Quality: Ventilation &amp; Filtration
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Cooling and air quality are related but separate problems. A dedicated fresh-air
              system brings in and filters outdoor air rather than only recirculating conditioned
              air, and this scope is easy to under-budget if it's treated as optional:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Fresh air rates</strong> should be sized to
                occupancy per recognized ventilation standards (such as ASHRAE 62.1), not left to
                whatever the base building happens to provide.
              </li>
              <li>
                <strong className="text-foreground">Filtration grade</strong> (MERV rating)
                determines how effectively the system removes particulates — a meaningful factor
                for teams that spent the last few years prioritizing indoor air quality.
              </li>
              <li>
                <strong className="text-foreground">CO2 monitoring</strong> tied into the BMS gives
                an objective signal for when ventilation isn't keeping pace with occupancy, instead
                of relying on complaints.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="bms-integration" className="text-3xl font-bold text-primary">
              Integration with MEP &amp; Building Management Systems
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC doesn't operate in isolation — it shares ceiling void space with electrical
              containment, fire systems, and lighting, and its controls typically sit on the same
              BMS platform as access control and energy monitoring. Planning HVAC alongside{" "}
              <Link to="/services/mep" className="text-primary hover:underline">
                MEP design &amp; consultancy
              </Link>{" "}
              from the start — rather than sequencing it after ceiling and electrical design are
              locked — is what avoids the clashes that force late-stage rework. A BMS-integrated
              system also enables scheduling (conditioning only occupied zones/hours) and
              occupancy-based control, both of which materially cut operating cost over the
              lease term.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="energy-efficiency" className="text-3xl font-bold text-primary">
              Energy Efficiency &amp; Operating Cost
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC is typically the largest single line item in a commercial building's operating
              energy bill, which makes equipment efficiency ratings worth weighing against upfront
              cost rather than treating price as the only variable:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">ISEER ratings</strong> (India Seasonal Energy
                Efficiency Ratio) and BEE star labels indicate real-world efficiency across a
                cooling season, not just peak performance.
              </li>
              <li>
                <strong className="text-foreground">Variable-speed (inverter) compressors</strong>{" "}
                modulate output to match actual load instead of cycling fully on and off,
                reducing energy use significantly at partial load — which is most of the time.
              </li>
              <li>
                <strong className="text-foreground">Zoning</strong> lets unoccupied areas run at
                reduced or no conditioning instead of cooling the entire floor uniformly.
              </li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              A higher-efficiency system usually costs more upfront but pays that difference back
              through lower running costs over a multi-year lease — worth modeling against your
              expected occupancy term rather than optimizing purely for capex.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-mistakes" className="text-3xl font-bold text-primary">
              Common HVAC Mistakes in Office Fit-Outs
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>
                <strong className="text-foreground">Sizing off generic per-sq-ft rules</strong>{" "}
                instead of an actual load calculation based on your seating and equipment plan.
              </li>
              <li>
                <strong className="text-foreground">Designing HVAC after the ceiling plan is
                locked</strong>, forcing duct routing to compromise around fixed lighting and
                sprinkler layouts.
              </li>
              <li>
                <strong className="text-foreground">Treating server/IT rooms as part of the
                general office load</strong> instead of a dedicated, often 24x7, cooling zone.
              </li>
              <li>
                <strong className="text-foreground">Skipping or under-scoping fresh air
                ventilation</strong> to save cost, then dealing with air quality complaints after
                occupancy.
              </li>
              <li>
                <strong className="text-foreground">No commissioning or balancing after
                install</strong>, leaving a correctly specified system underperforming because
                airflow was never verified against design.
              </li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="commissioning" className="text-3xl font-bold text-primary">
              Testing, Balancing &amp; Commissioning
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              A system that's correctly designed on paper still needs to be verified in the
              field. Testing, Adjusting, and Balancing (TAB) confirms that actual airflow at each
              diffuser matches the design intent, and commissioning validates that controls,
              zoning, and equipment perform as specified before handover — not assumed to, because
              the equipment is the right model and size.
            </p>
            <img
              src="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20HVAC%20Systems/mario-verduzco-BrezDFrGvfU-unsplash.jpg"
              srcSet="https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20HVAC%20Systems/mario-verduzco-BrezDFrGvfU-unsplash.jpg 800w"
              sizes="(max-width: 768px) 100vw, 800px"
              alt="Commercial office interior with ceiling-integrated HVAC diffusers and lighting"
              className="w-full h-[360px] md:h-[420px] object-cover rounded-lg shadow-lg"
              width="800"
              height="533"
              loading="eager"
              decoding="async"
            />
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion: Plan HVAC Before You Plan the Ceiling
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              HVAC is one of the few fit-out decisions that's genuinely expensive to reverse once
              construction starts. Getting the load calculation right, choosing a system that
              matches your building type and occupancy pattern, and coordinating ducting with the
              rest of MEP early are what separate a system that performs quietly for years from one
              that generates complaints and change orders in year one.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning a fit-out and need HVAC sized and designed as part of the same process, not
              an afterthought? Talk to Hagerstone International about HVAC design and delivery for
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
