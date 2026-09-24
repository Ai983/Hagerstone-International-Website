export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  // Editorially curated slugs of genuinely related posts, shown first by
  // getRelatedPosts() before it backfills with category/tag/recency matches.
  relatedSlugs?: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "25",
    slug: "commercial-flooring-systems-guide-india",
    title: "Commercial Flooring Systems in India",
    metaTitle: "Commercial Flooring Systems in India | Hagerstone",
    metaDescription: "A technical guide to commercial flooring in India — vitrified tile, epoxy/PU resin, carpet tile, and raised access floors — substrate prep, wear ratings, and real costs.",
    excerpt: "A technical, non-marketing guide to commercial flooring in India — vitrified tile vs epoxy vs carpet tile vs raised access floor, substrate preparation, wear ratings, and real cost ranges.",
    content: "Full content available at /blog/commercial-flooring-systems-guide-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20Flooring%20System/OfficeFlooring.jpg",
    imageAlt: "Modern office lobby with floor-to-ceiling glazing, colourful lounge seating and polished floor tile overlooking a city skyline",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 22, 2026",
    readTime: "10 min read",
    category: "Technical",
    tags: ["commercial flooring india", "vitrified tile vs epoxy flooring", "raised access floor", "carpet tile office", "epoxy pu resin flooring", "flooring contractor india", "spc vinyl flooring commercial", "office flooring cost india", "warehouse industrial flooring"],
    relatedSlugs: ["false-ceiling-acoustic-design-guide-india", "office-interior-fit-out-execution-guide", "office-fit-out-cost-guide-india-2026"],
    featured: false,
  },
  {
    id: "24",
    slug: "false-ceiling-acoustic-design-guide-india",
    title: "False Ceiling & Acoustic Design for Offices",
    metaTitle: "False Ceiling & Acoustic Design for Offices | Hagerstone",
    metaDescription: "A technical guide to false ceiling design for commercial interiors in India — gypsum vs grid, acoustic NRC targets, plenum coordination, and real costs.",
    excerpt: "A technical, non-marketing guide to false ceiling design in India — gypsum vs mineral fibre grid, NRC and acoustic fundamentals, plenum coordination, and real cost ranges.",
    content: "Full content available at /blog/false-ceiling-acoustic-design-guide-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/False%20ceiling%20acoustic/Acoustic.jpg",
    imageAlt: "Upward view of a coffered grid ceiling with recessed skylight openings in a commercial building",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 21, 2026",
    readTime: "9 min read",
    category: "Technical",
    tags: ["false ceiling design india", "gypsum vs grid ceiling", "acoustic ceiling office", "nrc rating acoustics", "office acoustic design", "ceiling plenum coordination", "false ceiling cost india", "false ceiling contractor", "acoustic baffle ceiling"],
    relatedSlugs: ["commercial-flooring-systems-guide-india", "mep-design-consultancy-india", "office-interior-fit-out-execution-guide"],
    featured: false,
  },
  {
    id: "23",
    slug: "workplace-wellness-biophilic-design-trends-2026",
    title: "Workplace Wellness & Biophilic Design",
    metaTitle: "Workplace Wellness & Biophilic Design | Hagerstone",
    metaDescription: "What's genuinely worth building for workplace wellness and biophilic design in 2026 — daylight, planting, materials, air quality, and what's mostly aesthetic.",
    excerpt: "A practical look at workplace wellness and biophilic design in 2026 — what genuinely helps (daylight, planting done properly, air quality) versus what's mostly a photogenic feature.",
    content: "Full content available at /blog/workplace-wellness-biophilic-design-trends-2026",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Biophilic%20Workplace%20Wellness/ExteriorLushGreen.jpg",
    imageAlt: "Lush tropical planting along a sunlit terrace beside a brick staircase inside a glazed office building",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 19, 2026",
    readTime: "8 min read",
    category: "Trends",
    tags: ["biophilic office design", "workplace wellness trends 2026", "office daylight design", "indoor air quality office", "employee wellbeing design", "sustainable office trends", "well building standard", "green wall office design", "ergonomic office furniture"],
    relatedSlugs: ["sustainable-green-office-interiors", "office-space-planning-trends-2026", "commercial-hvac-systems"],
    featured: false,
  },
  {
    id: "22",
    slug: "how-to-choose-office-fit-out-contractor",
    title: "How to Choose an Office Fit-Out Contractor",
    metaTitle: "How to Choose an Office Fit-Out Contractor | Hagerstone",
    metaDescription: "A practical checklist for choosing an office fit-out contractor in India — turnkey vs separate teams, comparing quotes, contract terms, and the red flags to watch for.",
    excerpt: "A practical, non-marketing checklist for choosing an office fit-out contractor in India — turnkey vs separate teams, comparing quotes fairly, contract terms, and real red flags.",
    content: "Full content available at /blog/how-to-choose-office-fit-out-contractor",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Fit%20Out%20Contractor/FloorDesign.jpg",
    imageAlt: "Overhead view of an architectural floor plan drawing surrounded by drafting tools — mechanical pencil, ruler, eraser and pens",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 18, 2026",
    readTime: "9 min read",
    category: "Cost & Planning",
    tags: ["how to choose a fit-out contractor", "office fit-out vendor selection", "fit-out contract terms india", "turnkey fit-out contractor", "fit-out red flags", "fixed price vs cost plus contract", "fit-out quotation comparison", "office interior contractor checklist"],
    relatedSlugs: ["office-fit-out-cost-guide-india-2026", "office-interior-fit-out-execution-guide", "commercial-interior-designers"],
    featured: false,
  },
  {
    id: "21",
    slug: "kokko-town-play-zone-case-study",
    title: "Case Study: Building Kokko Town",
    metaTitle: "Case Study: Kokko Town Indoor Kids' Play Zone | Hagerstone",
    metaDescription: "How Hagerstone delivered Kokko Town, a 6,500 sq ft indoor kids' play zone and family cafe in Chandigarh, end to end — design, civil, MEP, and custom fabrication.",
    excerpt: "How a 6,500 sq ft indoor kids' play zone and family cafe in Chandigarh was built as a two-level pretend-play town — from brief to custom fabrication to handover.",
    content: "Full content available at /blog/kokko-town-play-zone-case-study",
    image: "/projects/kokko-town/reception/reception-desk.jpg",
    imageAlt: "Kokko Town reception desk with a green airplane-window feature wall and backlit signage in Sector 17, Chandigarh",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 16, 2026",
    readTime: "8 min read",
    category: "Case Study",
    tags: ["indoor kids play zone case study", "themed fit-out project", "family entertainment center design", "turnkey fit-out chandigarh", "custom fabrication interiors", "kids play zone construction cost", "play zone design company india"],
    relatedSlugs: ["office-interior-fit-out-execution-guide", "false-ceiling-acoustic-design-guide-india", "how-to-choose-office-fit-out-contractor"],
    featured: false,
  },
  {
    id: "20",
    slug: "facade-glazing-guide-india",
    title: "Curtain Wall, Cladding or Spider Glazing: How to Choose a Commercial Facade System",
    metaTitle: "How to Choose a Commercial Facade System | Hagerstone",
    metaDescription: "A technical guide to facade & glazing for commercial buildings in India — curtain walls, ACP cladding, structural glazing, wind/thermal performance, and costs.",
    excerpt: "A technical, non-marketing guide to commercial facade & glazing in India — curtain wall vs ACP cladding vs spider glazing, performance engineering, and what drives cost.",
    content: "Full content available at /blog/facade-glazing-guide-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Facade%20Glazing/LowAngleBuilding.jpg",
    imageAlt: "Dramatic upward view of glass curtain-wall skyscrapers against the sky",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 15, 2026",
    readTime: "12 min read",
    category: "Technical",
    tags: ["facade glazing india", "curtain wall systems", "acp cladding", "structural glazing", "spider glazing", "facade contractor india", "facade glazing cost india", "aluminium doors and windows", "rainscreen ventilated facade"],
    relatedSlugs: ["peb-pre-engineered-buildings-guide-india", "mep-design-consultancy-india", "commercial-hvac-systems"],
    featured: false,
  },
  {
    id: "17",
    slug: "hospitality-interior-design-india",
    title: "Hospitality Interior Design: An Overview",
    metaTitle: "Hospitality Interior Design: An Overview | Hagerstone",
    metaDescription: "Hospitality interior design and fit-out in India — hotels, restaurants, and banquet spaces — covering MEP, HVAC, licensing, and real cost ranges.",
    excerpt: "A practical guide to hospitality interior design and fit-out in India — hotels, restaurants, QSR, and banquet halls — covering the MEP/HVAC backbone, licensing, and real cost ranges.",
    content: "Full content available at /blog/hospitality-interior-design-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Hospitality%20Interior%20Design/DarkRestraunt.jpg",
    imageAlt: "Dark, atmospheric rooftop restaurant interior with velvet banquette seating, globe pendant lighting, and a city skyline view",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 14, 2026",
    readTime: "10 min read",
    category: "Hospitality",
    tags: ["hospitality interior design india", "hotel interior design", "restaurant interior fit-out", "banquet hall interior design", "hospitality fit-out cost india", "F&B interior design", "QSR interior fit-out"],
    relatedSlugs: ["mep-design-consultancy-india", "commercial-hvac-systems", "office-fit-out-cost-guide-india-2026"],
    featured: false,
  },
  {
    id: "19",
    slug: "peb-pre-engineered-buildings-guide-india",
    title: "Pre-Engineered Buildings: How Tapered Steel Frames Cut Cost and Construction Time",
    metaTitle: "Pre-Engineered Buildings (PEB) Explained | Hagerstone",
    metaDescription: "A technical guide to pre-engineered buildings (PEB) in India — design & engineering, roofing & cladding, mezzanines, warehouses, and real cost drivers.",
    excerpt: "A technical, non-marketing guide to pre-engineered buildings (PEB) in India — what a PEB actually is, how the tapered-frame system works, the design-to-erection process, and what drives cost.",
    content: "Full content available at /blog/peb-pre-engineered-buildings-guide-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Peb%20Pre%20Engineered%20Building/PebStructure.avif",
    imageAlt: "Dramatic dark, angular steel space-frame truss structure",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 12, 2026",
    readTime: "11 min read",
    category: "Technical",
    tags: ["pre-engineered buildings india", "peb construction", "peb design engineering", "industrial steel structures", "peb warehouse construction", "peb cost india", "peb vs rcc construction", "peb erection contractor"],
    relatedSlugs: ["facade-glazing-guide-india", "office-fit-out-cost-guide-india-2026", "mep-design-consultancy-india"],
    featured: false,
  },
  {
    id: "18",
    slug: "office-interior-fit-out-execution-guide",
    title: "From Empty Shell to Move-In Ready: How an Office Fit-Out Actually Gets Built",
    metaTitle: "How an Office Fit-Out Actually Gets Built | Hagerstone",
    metaDescription: "A technical guide to how office interior fit-outs are actually executed in India — Cat A vs Cat B, site sequencing, MEP coordination, QC, and handover.",
    excerpt: "A technical, non-marketing guide to how office interior fit-outs actually get executed — the Cat A to Cat B handover, site sequencing, where fit-out and MEP collide, and snagging & handover.",
    content: "Full content available at /blog/office-interior-fit-out-execution-guide",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20Execution/MeetingRoom.jpg",
    imageAlt: "Sleek modern corporate boardroom with floor-to-ceiling windows and a city view",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 9, 2026",
    readTime: "13 min read",
    category: "Technical",
    tags: ["office fit-out execution", "cat a vs cat b fit-out", "fit-out mep coordination", "site sequencing fit-out", "fit-out snagging handover", "defects liability period fit-out", "fit-out execution partner", "office fit-out timeline"],
    relatedSlugs: ["mep-design-consultancy-india", "commercial-interior-designers", "office-fit-out-cost-guide-india-2026"],
    featured: false,
  },
  {
    id: "16",
    slug: "mep-design-consultancy-india",
    title: "MEP Design & Consultancy for Commercial Fit-Outs: A Technical Guide",
    metaTitle: "MEP Design & Consultancy for Commercial Fit-Outs | Hagerstone",
    metaDescription: "A technical guide to MEP design for commercial buildings in India: electrical, plumbing, fire safety, and where MEP costs actually go.",
    excerpt: "A technical, non-marketing guide to MEP in commercial fit-outs—electrical load planning, plumbing, fire & life safety, coordination, and where MEP budget actually goes.",
    content: "Full content available at /blog/mep-design-consultancy-india",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/MEP%20design%20consultancy/Electricity%20MEP.jpg",
    imageAlt: "Structured network cabling and cable containment in a commercial building's electrical infrastructure",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 3, 2026",
    readTime: "8 min read",
    category: "Technical",
    tags: ["mep design india", "mep consultancy", "electrical design commercial building", "fire fighting systems", "plumbing design commercial office", "mep coordination", "mep clash detection", "mep design consultant"],
    relatedSlugs: ["commercial-hvac-systems", "office-fit-out-cost-guide-india-2026", "commercial-interior-designers"],
    featured: false,
  },
  {
    id: "14",
    slug: "commercial-hvac-systems",
    title: "Commercial HVAC Systems in India: A Technical Buyer's Guide",
    metaTitle: "Commercial HVAC Systems in India: A Technical Buyer's Guide | Hagerstone",
    metaDescription: "VRF vs ducted split vs chilled water: a technical guide to choosing, sizing, and commissioning commercial HVAC systems for offices in India.",
    excerpt: "A technical, non-marketing guide to commercial HVAC in India—system types, load calculations, ducting, indoor air quality, and the mistakes that turn into change orders.",
    content: "Full content available at /blog/commercial-hvac-systems",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20HVAC%20Systems/konstantin-kitsenuik-4ce3DZPWdic-unsplash.jpg",
    imageAlt: "Building facade lined with multiple wall-mounted split AC condenser units for commercial HVAC",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "September 1, 2026",
    readTime: "7 min read",
    category: "Technical",
    tags: ["commercial hvac india", "office hvac design", "VRF vs VRV", "hvac load calculation", "hvac commissioning", "indoor air quality"],
    relatedSlugs: ["mep-design-consultancy-india", "office-fit-out-cost-guide-india-2026", "sustainable-green-office-interiors"],
    featured: false,
  },
  {
    id: "15",
    slug: "office-fit-out-cost-guide-india-2026",
    title: "Office Fit-Out Cost Guide: How Much Does It Cost to Fit Out an Office in India?",
    metaTitle: "Office Fit-Out Cost in India: Per Sq Ft Pricing Guide | Hagerstone",
    metaDescription: "How much does office fit-out cost in India? See per sq ft price ranges, what drives costs up or down, and how to budget a fit-out without cutting corners.",
    excerpt: "Real per-sq-ft price ranges for office fit-outs in India, what drives the cost up or down, and how to budget without cutting corners.",
    content: "Full content available at /blog/office-fit-out-cost-guide-india-2026",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Office%20Fit%20Out%20cost%20guide/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg",
    imageAlt: "Modern corporate office interior representing a completed office fit-out project",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "August 27, 2026",
    readTime: "6 min read",
    category: "Cost & Planning",
    tags: ["office fit-out cost india", "office interior cost per sq ft", "commercial fit-out budget", "office renovation cost india", "turnkey office fit-out pricing"],
    relatedSlugs: ["commercial-hvac-systems", "mep-design-consultancy-india", "commercial-interior-designers"],
    featured: false,
  },
  {
    id: "13",
    slug: "sustainable-green-office-interiors",
    title: "Sustainable Green Office Interiors: Designing Workspaces That Heal the Planet and People",
    metaTitle: "Sustainable Green Office Interiors: ESG, Productivity & Energy Efficiency",
    metaDescription: "Sustainable green office interiors cut energy use, boost productivity, and align with ESG goals. Discover how to build smarter—learn more today.",
    excerpt: "Step into a truly sustainable workspace—where eco-conscious materials, energy-efficient systems, and biophilic design converge to reduce environmental impact while elevating human well-being and productivity.",
    content: "Full content available at /blog/sustainable-green-office-interiors",
    image: "/blog/sustainable-green-office-interiors/hero-green-office.jpg",
    imageAlt: "Sustainable green office interior with biophilic design elements and natural lighting",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "February 25, 2026",
    readTime: "10 min read",
    category: "Sustainability",
    tags: ["sustainable office design", "LEED certification", "WELL building standard", "biophilic design", "energy efficiency", "ESG workplace", "green interiors"],
    relatedSlugs: ["commercial-hvac-systems", "office-space-planning-trends-2026", "office-fit-out-cost-guide-india-2026"],
    featured: true,
  },
  {
    id: "12",
    slug: "office-space-planning-trends-2026",
    title: "Trends in Office Space Planning: What to Expect in 2026 and Beyond",
    metaTitle: "Office Space Planning Trends 2026 | Future-Ready Workspaces",
    metaDescription: "Explore office space planning trends for 2026 and beyond, from flexible layouts and wellbeing-driven design to smart, cost-efficient workplaces.",
    excerpt: "Discover the office space planning trends 2026 shaping flexible, wellbeing-driven, and cost-efficient workplaces built for hybrid teams.",
    content: "Full content available at /blog/office-space-planning-trends-2026",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Trends%20in%20Office%20Space%20Planning/_%20(2).jpeg",
    imageAlt: "Future-ready office space planning overview with flexible work zones and collaborative hubs",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "January 2026",
    readTime: "5 min read",
    category: "Trends",
    tags: [
      "office space planning trends 2026",
      "office space planning in 2026",
      "modern workplace planning",
      "hybrid workplace strategy",
      "office layout planning",
      "office cubicle space planning",
      "workplace design trends 2026",
    ],
    relatedSlugs: ["office-workspace-design", "commercial-interior-designers", "sustainable-green-office-interiors"],
    featured: false,
  },
  {
    id: "11",
    slug: "commercial-interior-designers",
    title: "Commercial Interior Designers: Transforming Business Spaces for Productivity, Brand & Growth",
    metaTitle: "Commercial Interior Designers for Productivity, Brand & Growth | Hagerstone International Pvt. Ltd.",
    metaDescription: "Commercial interior designers create functional, branded, and productive business spaces that enhance employee wellbeing and customer experience.",
    excerpt: "Explore how commercial interior designers improve productivity, branding, space planning, and customer experience across modern business environments.",
    content: "Full content available at /blog/commercial-interior-designers",

    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Commercial%20Interior%20Designers%20/49b0feaa-3912-4eff-9d17-5f14c89c1263-md.jpg",

    imageAlt: "Modern office lounge showcasing commercial interior design for collaborative teams",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "January 21, 2026",
    readTime: "6 min read",
    category: "Design Guide",
    tags: ["commercial interiors", "office design", "space planning", "brand experience", "workplace productivity", "commercial interior design india", "retail interior design", "corporate office interior design"],
    relatedSlugs: ["office-workspace-design", "office-space-planning-trends-2026", "office-fit-out-cost-guide-india-2026"],
    featured: false,
  },
  {
    id: "10",
    slug: "office-workspace-design",
    title: "Office Workspace Design: Essential Elements for Productive Environments",
    metaTitle: "Office Workspace Design: Essential Elements for Productive Environments | Hagerstone",
    metaDescription: "Discover proven office workspace design strategies that boost productivity by 30%. Learn about space planning, ergonomic furniture, color psychology, and collaborative zones from expert interior designers.",
    excerpt: "Transform your workplace with proven design strategies. Expert guide to office space planning, ergonomics, color psychology, and collaborative spaces that actually boost productivity.",
    content: "Full content available at /blog/office-workspace-design",
    image: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Workspace%20Blog/Screenshot%202026-01-13%20at%2017.49.19.png",
    imageAlt: "Modern office workspace design featuring open collaborative areas, ergonomic furniture, and natural lighting by Hagerstone International",
    author: "Dhruv Agarwal",
    authorRole: "Founder & CEO, TEDx Speaker, Author of Workplace 2.0",
    date: "January 13, 2026",
    readTime: "16 min read",
    category: "Design Guide",
    tags: ["office workspace design", "space planning", "ergonomic furniture", "office interior design", "collaborative spaces", "productivity", "office layout", "workplace design"],
    relatedSlugs: ["commercial-interior-designers", "office-space-planning-trends-2026", "sustainable-green-office-interiors"],
    featured: true,
  }
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getFeaturedPost = () => blogPosts.find((p) => p.featured);
export const getRecentPosts = (count: number = 5) => blogPosts.slice(0, count);
export const getPostsByCategory = (category: string) => blogPosts.filter((p) => p.category === category);

// Returns up to `count` posts genuinely related to `slug`: the post's curated
// relatedSlugs first, then a same-category/shared-tag match, then recency —
// so the "Related Articles" lineup differs per post instead of every post
// showing the same top-N recent posts.
export const getRelatedPosts = (slug: string, count: number = 3): BlogPost[] => {
  const current = getBlogPostBySlug(slug);
  const others = blogPosts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);

  const result: BlogPost[] = [];
  const seen = new Set<string>();

  const add = (post: BlogPost | undefined) => {
    if (post && post.slug !== slug && !seen.has(post.slug) && result.length < count) {
      result.push(post);
      seen.add(post.slug);
    }
  };

  (current.relatedSlugs ?? []).forEach((relatedSlug) => add(getBlogPostBySlug(relatedSlug)));

  if (result.length < count) {
    others
      .filter((post) => !seen.has(post.slug))
      .map((post, index) => ({
        post,
        index,
        score:
          (post.category === current.category ? 2 : 0) +
          post.tags.filter((tag) => current.tags.includes(tag)).length,
      }))
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .forEach(({ post }) => add(post));
  }

  return result;
};

export const blogCategories = [
  "All",
  "Cost & Planning",
  "Design Guide", 
  "Case Study",
  "Trends",
  "Technical",
  "Sustainability",
  "Hospitality",
];
