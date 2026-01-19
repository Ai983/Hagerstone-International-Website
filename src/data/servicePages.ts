export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  highlights: string[];
  deliverables: string[];
  relatedSlugs: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "office-design-build",
    title: "Office Design & Build",
    h1: "Office Design & Build Services",
    metaTitle: "Office Design & Build – Turnkey Workspace Delivery | Hagerstone",
    metaDescription:
      "End-to-end office design & build services in Delhi NCR, from strategy to fit-out execution for modern corporate workspaces.",
    summary:
      "We deliver turnkey office design & build solutions—strategy, space planning, interiors, and execution—so teams move into fully operational workspaces faster.",
    keywords: ["office design & build", "turnkey office design and build", "office workspace design"],
    highlights: [
      "Strategy-led workplace planning and brand alignment",
      "Integrated interior design, MEP coordination, and fit-out delivery",
      "Single-point accountability for scope, cost, and timelines",
    ],
    deliverables: [
      "Space planning and layout strategy",
      "Interior design concepts and 3D visualization",
      "Execution-ready BOQ and project plan",
    ],
    relatedSlugs: ["interior-fit-out", "mep", "construction"],
  },
  {
    slug: "interior-fit-out",
    title: "Interior Fit-Out",
    h1: "Interior Fit-Out Company",
    metaTitle: "Interior Fit-Out Company – Office Fit-Out Services | Hagerstone",
    metaDescription:
      "Office interior fit-out services for commercial and corporate spaces with coordinated finishes, joinery, and on-site delivery.",
    summary:
      "Our interior fit-out teams deliver high-quality finishes, partitions, joinery, and on-site coordination for commercial workspaces.",
    keywords: ["interior fit out company", "office fit out services", "commercial fit-out"],
    highlights: [
      "Turnkey fit-out execution with quality control checkpoints",
      "Coordination with MEP, lighting, and HVAC vendors",
      "Fast-track delivery for ready-to-move offices",
    ],
    deliverables: [
      "Finishes, partitions, ceilings, and flooring",
      "Joinery, signage, and reception detailing",
      "On-site coordination and handover documentation",
    ],
    relatedSlugs: ["office-design-build", "mep", "hvac"],
  },
  {
    slug: "mep",
    title: "MEP Design",
    h1: "MEP Design & Consultants",
    metaTitle: "MEP Design & Consultants – Commercial MEP Services | Hagerstone",
    metaDescription:
      "MEP design and consultancy for office buildings and commercial facilities, including electrical, plumbing, and fire safety systems.",
    summary:
      "Our MEP consultants plan, model, and coordinate electrical, plumbing, and firefighting systems for efficient commercial operations.",
    keywords: ["mep design", "mep consultants", "mep in construction"],
    highlights: [
      "Efficient load planning and compliance-ready documentation",
      "Integrated MEP coordination with interior design teams",
      "Energy-conscious systems for modern workspaces",
    ],
    deliverables: [
      "MEP layouts and load calculations",
      "Coordination drawings for execution teams",
      "Testing and commissioning support",
    ],
    relatedSlugs: ["hvac", "office-design-build", "interior-fit-out"],
  },
  {
    slug: "hvac",
    title: "HVAC Services",
    h1: "HVAC Services for Workspaces",
    metaTitle: "HVAC Services Near You – Office HVAC Design | Hagerstone",
    metaDescription:
      "HVAC services for offices and commercial interiors, including load calculations, ducting design, and ventilation systems.",
    summary:
      "We design and deliver HVAC systems that improve indoor air quality, comfort, and energy performance for commercial spaces.",
    keywords: ["hvac services", "hvac services near me", "office hvac design"],
    highlights: [
      "Thermal load calculations and airflow planning",
      "Optimized ducting and equipment placement",
      "Integration with MEP and BMS controls",
    ],
    deliverables: [
      "HVAC load reports and design drawings",
      "Equipment sizing and vendor coordination",
      "Testing, balancing, and commissioning support",
    ],
    relatedSlugs: ["mep", "office-design-build", "construction"],
  },
  {
    slug: "construction",
    title: "Commercial Construction",
    h1: "Commercial Construction Services",
    metaTitle: "Commercial Construction Services – EPC Delivery | Hagerstone",
    metaDescription:
      "Commercial construction services with EPC delivery for offices, showrooms, and industrial facilities across India.",
    summary:
      "We manage commercial construction with EPC planning, procurement, and site execution for reliable project delivery.",
    keywords: ["commercial construction", "design build turnkey", "epc construction"],
    highlights: [
      "EPC planning with schedule and cost governance",
      "On-site execution with safety and QA controls",
      "Integrated delivery with interior and MEP teams",
    ],
    deliverables: [
      "Construction planning and supervision",
      "Vendor and procurement coordination",
      "Handover documentation and QA reports",
    ],
    relatedSlugs: ["office-design-build", "mep", "peb"],
  },
  {
    slug: "peb",
    title: "PEB Structures",
    h1: "Pre-Engineered Building (PEB) Solutions",
    metaTitle: "PEB Construction – Pre-Engineered Buildings | Hagerstone",
    metaDescription:
      "PEB construction services for industrial and commercial facilities, from design engineering to on-site assembly.",
    summary:
      "Hagerstone delivers PEB solutions for fast, scalable industrial and commercial facilities with engineered components.",
    keywords: ["peb", "pre-engineered buildings", "peb construction"],
    highlights: [
      "Optimized structural design for faster builds",
      "Coordinated fabrication and installation teams",
      "Durable materials and compliance-ready documentation",
    ],
    deliverables: [
      "Structural design and detailing",
      "Fabrication and installation management",
      "Quality checks and completion certificates",
    ],
    relatedSlugs: ["construction", "office-design-build", "mep"],
  },
];

export const getServicePageBySlug = (slug: string) =>
  servicePages.find((service) => service.slug === slug);
