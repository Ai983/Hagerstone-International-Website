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

const slug = "workplace-wellness-biophilic-design-trends-2026";
const canonicalUrl = `${SITE_URL}/blog/${slug}`;

const heroImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Biophilic%20Workplace%20Wellness/PlantStairBedding.jpg";
const heroImageAlt =
  "Lush tropical planting along a sunlit terrace beside a brick staircase inside a glazed office building";

const inlineImage =
  "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Biophilic%20Workplace%20Wellness/SpiralTreeStairs.jpg";
const inlineImageAlt =
  "Upward view through a circular courtyard opening in a building, with a mature tree canopy growing through the centre";

const relatedTopics = [
  "Biophilic Design",
  "Workplace Wellness",
  "Indoor Air Quality",
  "Employee Wellbeing",
  "Sustainable Offices",
];

const faqItems: FaqItem[] = [
  {
    question: "What is biophilic design, in practical terms?",
    answer:
      "Biophilic design is the deliberate use of natural elements — daylight, plants, natural materials, views of greenery, and even natural patterns and textures — to make an indoor space feel more connected to the outdoors. In an office, it shows up as things like planted atria, living walls, timber and stone finishes instead of purely synthetic ones, and workstations positioned to get daylight and outward views rather than facing a blank interior wall.",
  },
  {
    question: "Does biophilic design actually improve productivity, or is it just aesthetic?",
    answer:
      "It's not purely aesthetic — the effects most consistently observed are on stress reduction, self-reported wellbeing, and reduced absenteeism, which indirectly support productivity, alongside more direct comfort benefits from better daylight and air quality. It's not a substitute for good ergonomics, acoustics, or space planning, and treating it as decoration rather than as one input among several is a common way biophilic budgets get spent without much return.",
  },
  {
    question: "What's the difference between biophilic design and just adding plants?",
    answer:
      "Plants are one element, not the whole strategy. Biophilic design also considers daylight access and glare control, material choice (natural textures and patterns versus purely synthetic finishes), thermal and airflow variability similar to outdoor conditions, and spatial variety — a mix of open and enclosed spaces the way a natural landscape offers. A few planters in a corner without attention to daylight or material palette captures a fraction of the actual benefit.",
  },
  {
    question: "Do live plants need to be maintained by facilities, or can they be low-maintenance?",
    answer:
      "Both approaches are common, and the choice should be made deliberately rather than defaulted into. Live plants need a maintenance contract — watering, pruning, and periodic replacement — and this cost should be budgeted alongside the fit-out, not discovered afterward. Where maintenance capacity is limited, high-quality artificial planting or a smaller number of hardier, low-light-tolerant species is a more realistic choice than an ambitious green wall nobody is resourced to keep alive.",
  },
  {
    question: "How does biophilic design relate to green building certification like LEED or WELL?",
    answer:
      "They overlap but aren't the same thing. LEED focuses primarily on energy, water, and material sustainability, while the WELL Building Standard specifically credits biophilic and health-oriented design elements — air quality, daylight, and access to nature among them. A project can pursue biophilic design without seeking either certification, but if certification is a goal, it's worth aligning the biophilic strategy with WELL's specific criteria early rather than retrofitting the paperwork afterward.",
  },
  {
    question: "What's realistic to expect from workplace wellness design trends in 2026?",
    answer:
      "The clearest shift is away from wellness as a single showpiece feature — one green wall, one meditation room — toward it being distributed across ordinary daily touchpoints: daylight reaching more desks, better acoustic comfort, air quality monitoring, and materials chosen partly for how they feel and smell, not just how they perform. It's a less photogenic trend than a dramatic living wall, but it affects far more of the people using the space, far more of the time.",
  },
  {
    question: "How do you know if a wellness or biophilic investment actually worked?",
    answer:
      "Check with the people using the space, not just the design intent. A short occupant survey a few months after move-in — asking about daylight glare, acoustic comfort, and thermal comfort by zone — surfaces real problems a walkthrough misses. Simple environmental monitoring, such as a CO2 or particulate sensor in a representative zone, turns a vague complaint like 'the air feels stuffy' into a number that can actually be diagnosed and fixed, rather than an impression nobody follows up on.",
  },
];

export default function WorkplaceWellnessBiophilicDesignTrends2026Blog() {
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
    { id: "introduction", label: "Introduction: Wellness Stopped Being a Perk" },
    { id: "what-biophilic-design-covers", label: "What Biophilic Design Actually Covers" },
    { id: "daylight-and-views", label: "Daylight, Views & Circadian Considerations" },
    { id: "planting-and-greenery", label: "Planting & Greenery Done Properly" },
    { id: "materials-and-air-quality", label: "Materials, Air Quality & Sensory Comfort" },
    { id: "wellness-beyond-biophilia", label: "Workplace Wellness Beyond Biophilic Design" },
    { id: "measuring-what-you-built", label: "Measuring What You Built" },
    { id: "trends-worth-watching-2026", label: "What's Actually Worth Building in 2026" },
    { id: "common-wellness-mistakes", label: "Common Wellness Design Mistakes" },
    { id: "conclusion", label: "Conclusion" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "call-to-action", label: "Call to Action" },
  ];

  const relatedServices = [
    { title: "Office Design & Build", href: "/services/office-design-build" },
    { title: "Interior Fit-Out Services", href: "/services/interior-fit-out" },
    { title: "HVAC Services", href: "/services/hvac" },
  ];

  return (
    <>
      <SEOHead
        title={`Workplace Wellness & Biophilic Design | ${SHORT_BRAND_NAME}`}
        description="What's genuinely worth building for workplace wellness and biophilic design in 2026 — daylight, planting, materials, air quality, and what's mostly aesthetic."
        canonical={canonicalUrl}
        ogImage={heroImage}
        ogImageAlt={heroImageAlt}
        ogType="article"
        keywords="biophilic office design, workplace wellness trends 2026, office daylight design, indoor air quality office, employee wellbeing design, sustainable office trends, well building standard, green wall office design, ergonomic office furniture"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          {
            "@type": "BlogPosting",
            headline: "Workplace Wellness & Biophilic Design",
            description:
              "What's genuinely worth building for workplace wellness and biophilic design in 2026 — daylight, planting, materials, air quality, and what's mostly aesthetic.",
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
            articleSection: "Trends",
            keywords:
              "biophilic office design, workplace wellness trends 2026, office daylight design, indoor air quality office, employee wellbeing design, sustainable office trends, well building standard, green wall office design, ergonomic office furniture",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: "Workplace Wellness & Biophilic Design", item: canonicalUrl },
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
                <span className="text-foreground">Workplace Wellness &amp; Biophilic Design</span>
              </li>
            </ol>
          </nav>

          <header className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Workplace Wellness &amp; Biophilic Design
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
              Introduction: Wellness Stopped Being a Perk
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              A few years ago, "wellness" in an office fit-out usually meant a meditation room
              nobody used and a standing desk option nobody asked for. That's shifted. As hybrid
              work makes the office a place people choose to come into rather than have to, the
              quality of the physical environment — daylight, air, acoustics, and a genuine
              connection to the outdoors — has become a real factor in whether people show up at
              all.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This guide separates what's genuinely worth building into a 2026 fit-out from what's
              mostly a photogenic feature wall. It follows on from our{" "}
              <Link to="/blog/office-space-planning-trends-2026" className="text-primary hover:underline">
                2026 space planning trends
              </Link>{" "}
              piece and our deeper look at{" "}
              <Link to="/blog/sustainable-green-office-interiors" className="text-primary hover:underline">
                sustainable green office interiors
              </Link>
              , with a specific focus on biophilic design and the wellness elements that actually
              affect how people feel in a space day to day.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="what-biophilic-design-covers" className="text-3xl font-bold text-primary">
              What Biophilic Design Actually Covers
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Biophilic design is the deliberate use of natural elements to make an indoor
              environment feel connected to the outdoors, and it's broader than plants alone. In
              practice it spans:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Daylight access and outward views from as many workpoints as possible</li>
              <li>Live planting — from individual planters to green walls and planted atria</li>
              <li>Natural materials and textures — timber, stone, and natural fibres over purely synthetic finishes</li>
              <li>Spatial variety — a mix of open, enclosed, and semi-enclosed spaces the way a natural landscape offers</li>
              <li>Water features and natural sound, used sparingly and where acoustics allow</li>
            </ul>
            <p className="text-base text-foreground/80 leading-relaxed">
              Treating any one of these as the whole strategy — usually planting, because it's the
              most visible — is the most common way a biophilic budget gets spent without
              delivering the fuller set of benefits research associates with the approach.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="daylight-and-views" className="text-3xl font-bold text-primary">
              Daylight, Views &amp; Circadian Considerations
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Daylight is the highest-impact, lowest-cost biophilic element available in most
              fit-outs, because it's largely a planning decision rather than a purchased feature.
              Positioning workstations and breakout areas to get daylight and outward views —
              rather than placing enclosed cabins along every window wall, a common but costly
              layout habit — does more for a space's felt quality than most standalone wellness
              features added afterward.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Where deep floor plates limit daylight penetration, tunable LED lighting that shifts
              colour temperature across the day is a reasonable substitute for some of daylight's
              circadian benefit, though it's a supplement to good daylight planning, not a
              replacement for it. Glare control — blinds, low-SHGC glazing, or light shelves — has
              to be part of the same conversation, since uncontrolled glare from a well-intentioned
              glass facade quickly becomes a complaint rather than a benefit.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The circadian argument for daylight is straightforward even without getting deep into
              the underlying biology: exposure to bright, blue-shifted light earlier in the day and
              warmer, dimmer light later helps regulate alertness and sleep quality, and an office
              that only ever offers flat, unchanging artificial light removes that cue entirely. This
              is also where{" "}
              <Link to="/blog/commercial-hvac-systems" className="text-primary hover:underline">
                facade glazing specification
              </Link>{" "}
              and daylight design intersect with cooling load — a facade opened up for daylight
              without matching SHGC control simply trades one comfort problem (dim, artificial-lit
              interiors) for another (glare and heat gain), which is why the two decisions need to be
              made together rather than by separate teams working from separate briefs.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="planting-and-greenery" className="text-3xl font-bold text-primary">
              Planting &amp; Greenery Done Properly
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Live planting is the most recognisable biophilic element, and it's also the one most
              often under-planned. A green wall or planted atrium needs the same design attention as
              any other building system — irrigation or a maintenance contract, adequate light for
              the species chosen, and drainage that doesn't become a leak risk over a raised or
              suspended floor. Skipping this planning is how an impressive-looking green wall at
              handover becomes a dying, unmaintained feature within a year.
            </p>
            <img
              src={inlineImage}
              srcSet={`${inlineImage} 1200w`}
              sizes="(max-width: 768px) 100vw, 1200px"
              alt={inlineImageAlt}
              className="w-full h-[320px] md:h-[460px] object-cover rounded-lg shadow-lg"
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
            />
            <p className="text-base text-foreground/80 leading-relaxed">
              Where maintenance capacity is genuinely limited, a smaller number of hardier,
              low-light-tolerant species — or high-quality artificial planting in select spots —
              is a more realistic choice than an ambitious installation nobody is resourced to keep
              alive. It's a decision worth making deliberately at design stage rather than
              discovering the gap after occupancy.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Species selection also has to account for India's climate range the same way facade
              and HVAC specifications do. A species that thrives in the humidity and filtered light
              of a Mumbai or Bengaluru office may struggle in the drier air and harsher direct sun
              common in a Delhi NCR or Rajasthan interior, particularly near glazing with high solar
              gain. Hardy, low-maintenance options — snake plant, ZZ plant, pothos, areca palm — are
              popular defaults for Indian commercial interiors precisely because they tolerate a wide
              range of light and humidity conditions without specialist care, which matters more than
              any single species' aesthetic appeal when the realistic alternative is no maintenance
              plan at all.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="materials-and-air-quality" className="text-3xl font-bold text-primary">
              Materials, Air Quality &amp; Sensory Comfort
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Material choice affects biophilic quality in ways that are easy to underrate — natural
              timber, stone, and textiles carry visual texture and, for some materials, scent that
              purely synthetic finishes don't. Low-VOC paints, adhesives, and furnishings matter for
              a related but distinct reason: indoor air quality, which affects comfort and
              concentration directly and is increasingly specified as part of{" "}
              <Link to="/blog/commercial-hvac-systems" className="text-primary hover:underline">
                HVAC design
              </Link>{" "}
              through outdoor air ratios and filtration grade rather than material choice alone.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Acoustic comfort belongs in this category too, even though it isn't strictly
              biophilic — a visually beautiful space that's acoustically harsh undermines much of
              the wellness benefit the design was meant to deliver, which is why ceiling and
              material acoustic performance deserve to be considered alongside greenery and
              daylight, not as a separate concern.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="wellness-beyond-biophilia" className="text-3xl font-bold text-primary">
              Workplace Wellness Beyond Biophilic Design
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Biophilic elements are one part of a wider wellness picture that also includes
              ergonomic furniture and sit-stand options, quiet rooms and phone booths that give
              people genuine acoustic privacy, and spatial variety that lets people choose a setting
              suited to focused work versus collaboration. None of these are new ideas, but they're
              increasingly specified together, deliberately, rather than added piecemeal after the
              main layout is fixed.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Ergonomic furniture in particular is easy to under-budget because its cost is easy to
              defer — a cheap task chair looks identical to a well-specified one in a rendering, and
              the difference only shows up as complaints and, eventually, absenteeism months into
              occupancy. Sit-stand desks, properly adjustable chairs, and monitor arms are a
              comparatively small line item against a full fit-out budget, and one of the few
              wellness investments with a directly measurable link to musculoskeletal complaints —
              which makes them a reasonable place to hold the line when a budget gets tightened
              elsewhere in the project.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="measuring-what-you-built" className="text-3xl font-bold text-primary">
              Measuring What You Built
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Wellness and biophilic features are unusually easy to install and then never evaluate
              — a planted atrium either looks alive or it doesn't, and there's a temptation to treat
              that visual check as sufficient. A more useful approach borrows from post-occupancy
              evaluation practice: a short occupant survey a few months after move-in, asking
              specifically about daylight glare, acoustic comfort, and thermal comfort by zone,
              surfaces problems that a walkthrough alone misses, because the people actually sitting
              at a desk all day notice things a site visit doesn't.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Simple environmental monitoring — a CO2 and particulate sensor or two in representative
              zones, tied into the building management system where one exists — turns "the air
              feels stuffy" from an anecdote into a number that can actually be acted on, whether
              that means adjusting outdoor air ratios or investigating a specific zone's ventilation.
              None of this needs to be elaborate; the point is closing the loop between what was
              designed and how it actually performs once people are using it daily, rather than
              assuming the design intent survived construction and occupancy unchanged.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="trends-worth-watching-2026" className="text-3xl font-bold text-primary">
              What's Actually Worth Building in 2026
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              The clearest genuine shift is away from wellness as a single showpiece feature and
              toward it being distributed across ordinary daily touchpoints — more desks with real
              daylight access, better baseline acoustic comfort, monitored air quality rather than
              assumed air quality, and material choices made partly for how they feel, not only how
              they perform on a spec sheet. It's a less photogenic trend than a dramatic feature
              wall, but it reaches far more of the people using the space, far more of the time —
              and it tends to be more durable, since it's built into the fit-out rather than
              maintained as an add-on.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="common-wellness-mistakes" className="text-3xl font-bold text-primary">
              Common Wellness Design Mistakes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/80">
              <li>Treating a single feature wall or green wall as the entire wellness strategy</li>
              <li>Placing enclosed cabins along window walls, leaving open-plan desks without daylight</li>
              <li>Specifying live planting without a maintenance plan or adequate light for the species chosen</li>
              <li>Ignoring acoustics while investing heavily in visual and material wellness elements</li>
              <li>Adding wellness features after the space plan is finalised instead of designing them in from the start</li>
              <li>Chasing certification credits without considering whether the specific elements suit how the space is actually used</li>
            </ul>
          </section>

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="conclusion" className="text-3xl font-bold text-primary">
              Conclusion
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Workplace wellness and biophilic design deliver the most when they're planned as part
              of the core layout — daylight, acoustics, material choice, and planting considered
              together — rather than layered on as features after the fact. The offices that feel
              genuinely different to work in are usually the ones where this thinking happened
              early, not the ones with the single most impressive green wall.
            </p>
          </section>

          <FaqSection items={faqItems} />

          <RelatedTopics topics={relatedTopics} />

          <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
            <h2 id="call-to-action" className="text-3xl font-bold text-primary">
              Call to Action
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              Planning a wellness-focused office fit-out? Hagerstone designs daylight, acoustics,
              planting, and material strategy into the layout from day one — see our{" "}
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
