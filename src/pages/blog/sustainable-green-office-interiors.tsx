import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { getRecentPosts } from "@/data/blogPosts";
import {
  buildSchemaGraph,
  organizationSchema,
  SITE_URL,
  websiteSchema,
} from "@/lib/seo";

const SLUG = "sustainable-green-office-interiors";
const CANONICAL = `${SITE_URL}/blog/${SLUG}`;
const OG_IMAGE = `${SITE_URL}/blog/sustainable-green-office-interiors/hero-green-office.jpg`;
const TITLE = "Sustainable Green Office Interiors: Designing Workspaces That Heal the Planet and People";
const SEO_TITLE = "Sustainable Green Office Interiors: ESG, Productivity & Energy Efficiency";
const META_DESC = "Sustainable green office interiors cut energy use, boost productivity, and align with ESG goals. Discover how to build smarter—learn more today.";
const AUTHOR = "Hagerstone Editorial";
const DATE = "February 25, 2026";
const READ_TIME = "18 min read";
const CATEGORY = "Sustainability";

const HERO_IMG = "/blog/sustainable-green-office-interiors/hero-green-office.jpg";
const ENERGY_IMG = "/blog/sustainable-green-office-interiors/energy-efficiency-metrics.jpg";
const CERT_IMG = "/blog/sustainable-green-office-interiors/leed-well-certification.jpg";

const relatedPosts = getRecentPosts(4).filter(p => p.slug !== SLUG).slice(0, 3);

const shareUrl = CANONICAL;
const shareText = encodeURIComponent(TITLE);

const handleShare = (platform: string) => {
  const urls: Record<string, string> = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };
  window.open(urls[platform], "_blank", "width=600,height=400");
};

const tocItems = [
  { id: "opening", label: "1. The Office That Breathes" },
  { id: "defining", label: "2. Defining Sustainable Green Office Interiors" },
  { id: "core-principles", label: "3. Core Principles of Green Office Design" },
  { id: "materials", label: "4. Sustainable Materials" },
  { id: "energy", label: "5. Energy Efficiency" },
  { id: "certifications", label: "6. Certifications (LEED & WELL)" },
  { id: "benefits", label: "7. Measurable Benefits" },
  { id: "case-studies", label: "8. Case Studies" },
  { id: "implementation", label: "9. How to Implement" },
  { id: "future", label: "10. The Future of Green Offices" },
  { id: "conclusion", label: "11. Conclusion" },
];

const SustainableGreenOfficeBlog = () => {
  const blogPostingSchema = {
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
    headline: TITLE,
    description: META_DESC,
    image: OG_IMAGE,
    author: { "@type": "Organization", name: AUTHOR },
    publisher: {
      "@type": "Organization",
      name: "Hagerstone International",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    datePublished: "2026-02-25",
    dateModified: "2026-02-25",
    articleSection: CATEGORY,
    keywords: "sustainable green office interiors, green office design, LEED, WELL, biophilic design, energy efficient office, ESG workplace",
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: TITLE, item: CANONICAL },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title={SEO_TITLE}
        description={META_DESC}
        canonical={CANONICAL}
        ogImage={OG_IMAGE}
        ogType="article"
        keywords="sustainable green office interiors, green office design, LEED certification, WELL building standard, biophilic office design, energy efficient workplace, ESG office, eco-friendly office interior"
        structuredData={buildSchemaGraph([
          organizationSchema,
          websiteSchema,
          blogPostingSchema,
          breadcrumbSchema,
        ])}
      />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={HERO_IMG} alt="Sustainable green office interior with biophilic design elements and natural lighting" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-accent text-accent-foreground mb-4">{CATEGORY}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{TITLE}</h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{AUTHOR}</span></div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{DATE}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{READ_TIME}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-muted/30 py-4 border-b border-border/50" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">Sustainable Green Office Interiors</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Desktop share */}
          <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
            {["twitter", "linkedin", "facebook"].map(p => (
              <button key={p} onClick={() => handleShare(p)} className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-md" aria-label={`Share on ${p}`}>
                {p === "twitter" ? <Twitter className="h-5 w-5" /> : p === "linkedin" ? <Linkedin className="h-5 w-5" /> : <Facebook className="h-5 w-5" />}
              </button>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 font-light">
            Step into a truly sustainable workspace—where eco-conscious materials, energy-efficient systems, and biophilic design converge to reduce environmental impact while elevating human well-being and productivity.
          </p>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-muted/30 rounded-xl border border-border" aria-label="Table of contents">
            <h2 className="text-lg font-bold text-foreground mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              {tocItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* --- Content Sections --- */}

          <section id="opening" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">1. The Office That Breathes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Step into most modern offices and you'll see glass walls, minimalist desks, a statement light fixture dangling like art. Beautiful? Often. Responsible? Not always.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For decades, the workplace has been designed to impress clients and signal status. Now, it faces a sharper question: <strong className="text-foreground">What does a truly sustainable green office interior look like — and why does it matter right now?</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The shift is subtle but seismic. We are moving from the aesthetic office to the ethical office. From spaces designed to be seen, to spaces designed to behave — responsibly, intelligently, sustainably.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Climate change is not a headline; it's a boardroom discussion. Corporate responsibility is no longer a CSR slide; it's embedded in ESG targets and investor scrutiny. Buildings account for a significant share of global carbon emissions, and offices — with their lighting, HVAC systems, and material-heavy interiors — play a decisive role.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But here's where the narrative deepens: <em>sustainable offices are not only about the planet. They are about people.</em>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Natural light improves circadian rhythms. Cleaner air reduces fatigue. Biophilic elements lower stress and sharpen focus. Employees working in healthier environments consistently report higher satisfaction and productivity. In other words, sustainability is not sacrifice — it's performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A truly sustainable green office interior integrates eco-conscious materials, energy-efficient systems, biophilic design, and measurable performance standards. It reduces environmental impact while actively elevating human well-being. The office, when designed correctly, doesn't merely function. <strong className="text-foreground">It breathes.</strong>
            </p>
          </section>

          <section id="defining" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">2. Defining Sustainable Green Office Interiors</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before we romanticize the idea, we need clarity. In interior design, "sustainable" does not mean placing a few plants in the corner or choosing a recycled desk and calling it a day. <strong className="text-foreground">Sustainability is not décor — it is strategy.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">At its core, sustainable green office design operates on a dual focus:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong className="text-foreground">Environmental responsibility</strong> — reducing resource consumption, carbon emissions, and material waste.</li>
              <li><strong className="text-foreground">Human-centered design</strong> — improving air quality, comfort, mental wellness, and productivity.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">This is achieved through three pillars:</p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li><strong className="text-foreground">Eco-Friendly Materials</strong> — Renewable, recycled, responsibly sourced materials that minimize deforestation, landfill waste, and harmful emissions.</li>
              <li><strong className="text-foreground">Energy-Efficient Systems</strong> — LED lighting, smart sensors, efficient HVAC systems, insulation upgrades, and renewable integrations.</li>
              <li><strong className="text-foreground">Biophilic Design</strong> — Natural light, indoor greenery, organic textures, and visual connections to nature that support well-being.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Greenwashing has made sustainability look easy. But real sustainable interiors are measurable. They reduce energy by tangible percentages. They cut waste significantly. <strong className="text-foreground">Sustainability isn't a style. It's a systems mindset.</strong>
            </p>
          </section>

          <section id="core-principles" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">3. Core Principles of Green Office Design</h2>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">3.1 Resource Conservation Through Smart Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most sustainable energy is the energy you never use. Maximizing natural light is where it begins — large windows, glass partitions, skylights as strategic tools. When daylight floods a workspace, artificial lighting retreats. Electricity consumption drops. Circadian rhythms stabilize.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Instead of blanket illumination, lighting becomes targeted, responsive, sensor-driven. Spatial planning allows daylight to penetrate deeper and natural airflow to circulate freely. <strong className="text-foreground">Smart design is less about adding more, and more about wasting less.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">3.2 Biophilic Integration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Humans are not built for sealed boxes of concrete and glass. Indoor plants and living walls are environmental tools — they absorb CO₂, improve air quality, and soften sterile edges. Views of nature reconnect employees to something beyond screens and deadlines.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Studies consistently show that biophilic environments reduce anxiety, sharpen concentration, and enhance overall well-being. <strong className="text-foreground">When nature is invited inside, performance follows.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">3.3 Adaptive & Human-Centered Layouts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A sustainable office acknowledges that people work differently. Open layouts with flexibility encourage collaboration. Organic patterns and textures introduce warmth. Thermal comfort with localized control ensures employees aren't trapped in a one-temperature-fits-all system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sustainable offices balance collaboration zones with quiet zones. <strong className="text-foreground">Responsive design aligns the built environment with human behavior.</strong>
            </p>
          </section>

          <section id="materials" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">4. Sustainable Materials: Building With Intention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Materials are the silent storytellers of any interior. They reveal where resources were extracted, how much energy was consumed, and what impact was left behind. <strong className="text-foreground">Every surface carries consequence.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">4.1 Renewable & Responsible Materials</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong className="text-foreground">Bamboo</strong> — grows rapidly, regenerates without replanting, durability comparable to hardwood.</li>
              <li><strong className="text-foreground">Cork</strong> — harvested without damaging the tree, one of the most renewable flooring options.</li>
              <li><strong className="text-foreground">Reclaimed wood</strong> — gives existing materials a second life.</li>
              <li><strong className="text-foreground">FSC-certified timber</strong> — ensures responsible forest management and traceable sourcing.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">4.2 Circular & Recycled Solutions</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Recycled upholstery fabrics transform post-consumer waste into functional surfaces. Second-hand or refurbished furniture extends product lifecycles. Every reused desk diverts material from landfills. <strong className="text-foreground">Circular thinking reframes design from linear consumption to continuous use.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">4.3 Low-Emission & Health-Focused Materials</h3>
            <p className="text-muted-foreground leading-relaxed">
              VOC-free finishes and low-emission adhesives prevent harmful off-gassing — a major contributor to poor indoor air quality. Cleaner materials mean fewer headaches, fewer respiratory issues, and fewer long-term health risks. A conventional office may look impressive on day one. <strong className="text-foreground">A sustainable office performs — year after year.</strong>
            </p>
          </section>

          <section id="energy" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">5. Energy Efficiency: The Engine Behind Sustainability</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If materials are the bones of a green office, energy systems are its pulse. Energy efficiency is where sustainability moves from intention to measurable impact. And here's the truth: energy efficiency is not just about reducing carbon — <strong className="text-foreground">it's about reducing cost.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">5.1 Lighting Innovation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              LED systems dramatically outperform traditional lighting. Occupancy sensors ensure lights operate only when spaces are in use. Daylight harvesting systems adjust artificial lighting based on natural light availability. Combined, these systems can <strong className="text-foreground">reduce lighting energy consumption by up to 70%</strong>.
            </p>

            <figure className="my-8">
              <img src={ENERGY_IMG} alt="Energy efficiency metrics for sustainable green office interiors showing savings data" className="w-full rounded-lg" loading="lazy" />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">Measurable energy savings through smart office design systems</figcaption>
            </figure>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">5.2 Climate & Appliance Efficiency</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              High-performance HVAC systems maintain comfort while consuming significantly less energy. Smart thermal zoning divides spaces into zones based on usage and occupancy — a crowded conference room doesn't share the same climate load as a storage area. <strong className="text-foreground">Efficiency is not about compromise. It is about precision.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">5.3 Renewable Integration & Automation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Solar panels offset electricity demand. Enhanced insulation improves thermal retention. Smart automation systems monitor lighting, HVAC, and occupancy in real time, adjusting settings automatically. <strong className="text-foreground">Sustainability is not an expense line — it is an efficiency strategy.</strong>
            </p>
          </section>

          <section id="certifications" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">6. Certifications That Validate Green Performance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Design intentions are powerful. But without verification, they remain claims. <strong className="text-foreground">Standards turn intention into accountability.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">6.1 LEED (Leadership in Energy and Environmental Design)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LEED evaluates sustainability across energy performance, water efficiency, materials selection, and indoor environmental quality. Certification tiers: Certified, Silver, Gold, Platinum. Beyond environmental impact, LEED enhances property value, strengthens investor confidence, and improves marketability.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">6.2 WELL Building Standard</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              WELL evaluates air quality, lighting conditions, thermal comfort, acoustic performance, nourishment, and mental well-being. Many organizations pursue both LEED and WELL certification — combining environmental sustainability with human-centered wellness.
            </p>

            <figure className="my-8">
              <img src={CERT_IMG} alt="LEED and WELL certification badges for green office buildings" className="w-full rounded-lg" loading="lazy" />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">LEED Gold and WELL Platinum — the gold standard in green building certification</figcaption>
            </figure>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">6.3 Why Certification Matters</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Verified credibility</strong> — sustainability claims backed by independent evaluation.</li>
              <li><strong className="text-foreground">Competitive differentiation</strong> — a clear edge in attracting talent and clients.</li>
              <li><strong className="text-foreground">Corporate ESG alignment</strong> — measurable contributions to sustainability goals.</li>
            </ul>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">7. Measurable Benefits: Beyond Aesthetics</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Green offices are not about mood boards and moral statements. They are about metrics. <strong className="text-foreground">Sustainability is no longer a cost. It's leverage.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">7.1 Environmental Impact</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Reduced energy consumption, lower carbon emissions, minimized material waste, and improved water efficiency — all measurable outcomes of well-executed sustainable design.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">7.2 Human Performance Gains</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cleaner indoor environments lead to better air quality, fewer sick days, reduced stress, and enhanced cognitive clarity. Teams collaborate more effectively. Concentration improves. The office becomes not just a place to work, but <strong className="text-foreground">a place that works for its people.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">7.3 The Business Case</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Operational savings from reduced energy and maintenance costs.</li>
              <li>Talent attraction as employees prioritize purpose-driven, healthy workplaces.</li>
              <li>Brand reputation strengthens where sustainability influences client and investor decisions.</li>
              <li>Long-term ROI: lower energy bills, lower absenteeism, higher retention, stronger ESG positioning.</li>
            </ul>
          </section>

          <section id="case-studies" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">8. Case Studies: Sustainability in Action</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Theory is persuasive. <strong className="text-foreground">Reality is definitive.</strong></p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">8.1 The Edge, Amsterdam</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Built around advanced smart building technology, The Edge uses real-time data to optimize lighting, temperature, and energy consumption. Employees interact with the building through apps that personalize workspace settings. It does not simply claim sustainability — <strong className="text-foreground">it measures it continuously.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">8.2 Pixel Building, Melbourne</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pixel Building demonstrates carbon neutrality in practice — integrating solar and wind energy systems while harvesting rainwater to minimize water waste and reinforce resource independence.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">8.3 Amazon's 2.1M sq ft Sustainable Office</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Low-carbon concrete reduced embodied emissions. Green roofs enhance insulation, manage stormwater, and improve biodiversity. <strong className="text-foreground">Environmental commitment executed at corporate scale.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">8.4 ASID Headquarters (Dual LEED + WELL Platinum)</h3>
            <p className="text-muted-foreground leading-relaxed">
              The ASID headquarters achieved dual LEED and WELL Platinum certification — prioritizing verified air quality, material transparency, and human-centered performance standards. <strong className="text-foreground">Proof that healthier interiors produce measurable performance gains.</strong>
            </p>
          </section>

          <section id="implementation" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">9. How to Implement Sustainable Green Office Interiors</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grand visions are inspiring. Execution is transformative. <strong className="text-foreground">Start small. Scale intelligently.</strong>
            </p>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Audit Current Energy and Material Usage</strong>
                <p className="mt-2">Conduct a thorough audit of energy consumption, lighting systems, HVAC performance, and material sourcing. You cannot improve what you do not measure.</p>
              </li>
              <li>
                <strong className="text-foreground">Integrate Biophilic Elements Early</strong>
                <p className="mt-2">Plan for maximized daylight access, indoor greenery, visual connectivity to nature, and airflow improvements. Nature should be structural, not symbolic.</p>
              </li>
              <li>
                <strong className="text-foreground">Choose Certified Sustainable Materials</strong>
                <p className="mt-2">Opt for FSC-certified timber, bamboo, cork, recycled furnishings, and low-emission finishes. Materials are investments — choose them as such.</p>
              </li>
              <li>
                <strong className="text-foreground">Invest in Smart Energy Systems</strong>
                <p className="mt-2">Upgrade to LED lighting with occupancy sensors, smart thermal zoning, high-performance HVAC, and renewable integrations like solar.</p>
              </li>
              <li>
                <strong className="text-foreground">Aim for Certification</strong>
                <p className="mt-2">Pursuing LEED or WELL introduces accountability and transforms internal ambition into externally verified achievement.</p>
              </li>
              <li>
                <strong className="text-foreground">Track and Report Performance Metrics</strong>
                <p className="mt-2">Monitor energy savings, waste reduction, indoor air quality, and employee satisfaction. Progress should be measurable, not anecdotal.</p>
              </li>
            </ol>
          </section>

          <section id="future" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">10. The Future of Green Office Interiors</h2>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Integration with ESG Mandates</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ESG mandates are reshaping corporate decision-making. Green interiors will increasingly be evaluated not just for aesthetics, but for compliance, performance, and transparency.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Tech-Driven Performance Tracking</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sensors, AI-driven building management systems, and real-time analytics will continuously optimize lighting, climate, and energy flow. Sustainability will become dynamic — measured daily, not annually.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">The Rise of Regenerative Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The next frontier moves beyond "doing less harm." Regenerative design aims to create offices that actively restore ecosystems — generating renewable energy, harvesting water, and improving biodiversity.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Offices as Wellness Ecosystems</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Spaces that regulate light for circadian alignment.</li>
              <li>Materials that enhance air purity.</li>
              <li>Layouts that balance collaboration with mental restoration.</li>
            </ul>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">11. Conclusion: Designing Workspaces That Give Back</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A sustainable green office interior is not simply about reducing damage. <strong className="text-foreground">It is about redefining responsibility.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">It is about creating environments that:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Consume less energy and resources</li>
              <li>Emit less carbon into the atmosphere</li>
              <li>Waste less material across their lifecycle</li>
              <li>And elevate more — more well-being, more productivity, more long-term value</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Sustainability, at its highest level, is strategic leadership.</strong> It signals foresight, accountability, and respect — for employees, for communities, for the planet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The offices we design today will shape the habits, performance, and environmental footprint of tomorrow. The question is no longer whether we can afford to build sustainably. <strong className="text-foreground">The question is whether we can afford not to.</strong>
            </p>
          </section>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {["Sustainable Office Design", "LEED Certification", "WELL Building Standard", "Biophilic Design", "Energy Efficiency", "ESG Workplace", "Green Interiors", "Workplace Wellness"].map(tag => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Mobile share */}
          <div className="lg:hidden mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Share this article</h3>
            <div className="flex gap-3">
              {["twitter", "linkedin", "facebook"].map(p => (
                <button key={p} onClick={() => handleShare(p)} className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors" aria-label={`Share on ${p}`}>
                  {p === "twitter" ? <Twitter className="h-5 w-5" /> : p === "linkedin" ? <Linkedin className="h-5 w-5" /> : <Facebook className="h-5 w-5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Author box */}
          <div className="mt-12 p-6 md:p-8 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{AUTHOR}</h3>
                <p className="text-muted-foreground text-sm mb-2">Sustainability & Workplace Design</p>
                <p className="text-muted-foreground text-sm">
                  Expert editorial team at Hagerstone International covering sustainable office design, corporate interiors, ESG workplace strategy, and green building certifications across India.
                </p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`}>
                  <Card className="group bg-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img src={rp.image} alt={rp.imageAlt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">{rp.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-3">{rp.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{rp.date}</span>
                        <span>{rp.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">
            Ready to Design a Sustainable Workspace?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build an office that performs for your people and the planet. Contact Hagerstone today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SustainableGreenOfficeBlog;
