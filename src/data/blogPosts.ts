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
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "15",
    slug: "office-interiors-delhi",
    title: "Office Interiors Delhi: The Complete 2026 Guide for Corporate & Commercial Spaces",
    metaTitle: "Office Interiors Delhi: Best Office Interior Designers, Cost & Trends 2026 | Hagerstone",
    metaDescription: "Top office interiors in Delhi — luxury, modern & turnkey office interior design by Hagerstone International. Serving Connaught Place, Nehru Place, Okhla, Saket & all of Delhi. Free consultation.",
    excerpt: "The complete 2026 guide to office interiors in Delhi — covering Connaught Place heritage fit-outs, South Delhi luxury offices, Aerocity Grade-A builds, costs per sq. ft., and how to pick the right designer.",
    content: "Full content available at /blog/office-interiors-delhi",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Heritage-style office interior with exposed brick, arched windows, and bespoke joinery in Connaught Place, Delhi by Hagerstone International",
    author: "Hagerstone International",
    date: "April 13, 2026",
    readTime: "12 min read",
    category: "Design Guide",
    tags: [
      "office interiors Delhi",
      "best office interior designers Delhi",
      "office interior design cost Delhi",
      "luxury office interiors Delhi",
      "turnkey office fit out Delhi",
      "Connaught Place office interior",
      "Nehru Place office design",
      "Saket office interior",
      "Aerocity office fit out",
    ],
    featured: true,
  },
  {
    id: "14",
    slug: "office-interiors-noida",
    title: "Office Interiors Noida: The Complete Guide to Designing Your Perfect Workspace in 2026",
    metaTitle: "Office Interiors Noida: Best Office Interior Designers & Design Ideas 2026 | Hagerstone International",
    metaDescription: "Looking for the best office interiors in Noida? Hagerstone International delivers luxury & modern office interior design, turnkey fit-out & commercial interiors across Noida. Free consultation.",
    excerpt: "The complete 2026 guide to office interiors in Noida — design trends, activity-based layouts, biophilic luxury, cost per sq. ft. across Sector 62, 125, 135 and the Expressway, and how to pick the right designer.",
    content: "Full content available at /blog/office-interiors-noida",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&h=630&q=80",
    imageAlt: "Modern luxury office interior in Noida with biophilic design, living wall, and natural wood finishes by Hagerstone International",
    author: "Hagerstone International",
    date: "April 13, 2026",
    readTime: "11 min read",
    category: "Design Guide",
    tags: [
      "office interiors Noida",
      "best office interior designers Noida",
      "office interior design cost Noida",
      "luxury office interiors Noida",
      "turnkey office fit out Noida",
      "commercial interior designers Noida",
      "office interior design Sector 62",
      "office interior design Noida Expressway",
    ],
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
    author: "Hagerstone Editorial",
    authorRole: "Sustainability & Workplace Design",
    date: "February 25, 2026",
    readTime: "18 min read",
    category: "Sustainability",
    tags: ["sustainable office design", "LEED certification", "WELL building standard", "biophilic design", "energy efficiency", "ESG workplace", "green interiors"],
    featured: false,
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
    author: "Hagerstone International",
    date: "January 2026",
    readTime: "9 min read",
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
    author: "Hagerstone International",
    date: "January 21, 2026",
    readTime: "9 min read",
    category: "Design Guide",
    tags: ["commercial interiors", "office design", "space planning", "brand experience", "workplace productivity"],
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
    author: "Hagerstone International",
    date: "January 13, 2026",
    readTime: "12 min read",
    category: "Design Guide",
    tags: ["office workspace design", "space planning", "ergonomic furniture", "office interior design", "collaborative spaces", "productivity", "office layout", "workplace design"],
    featured: true,
  }
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getFeaturedPost = () => blogPosts.find((p) => p.featured);
export const getRecentPosts = (count: number = 5) => blogPosts.slice(0, count);
export const getPostsByCategory = (category: string) => blogPosts.filter((p) => p.category === category);

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
