// Localizable services for programmatic service×city pages.
//
// Pure data: all city-specific templating (H1, meta, intro) is composed in the
// ServiceCity template from these fields + the City record. `published` gates
// phased rollout — only Office Interiors is live in Phase 1; the rest are wired
// and ready to flip on once keyword demand is validated (SEMrush/Ahrefs).

export interface LocalService {
  key: string;
  /** URL is `/{urlPrefix}-{citySlug}`, e.g. office-interior-designers-in-gurugram. */
  urlPrefix: string;
  /** Human label for the service line. */
  label: string;
  /** Slug of the national /services/:slug authority page this links up to. */
  parentServiceSlug: string;
  published: boolean;
  /** Head keyword used in H1/title, e.g. "Office Interior Designers". */
  headTerm: string;
  /** City-agnostic value proposition. */
  summary: string;
  /** What the engagement delivers. */
  deliverables: string[];
  /** Keyword seeds; the city name is appended in the template. */
  keywordSeeds: string[];
  /** Localized angle sentence woven into the city intro. */
  angle: string;
}

export const localServices: LocalService[] = [
  {
    key: "office-interiors",
    urlPrefix: "office-interior-designers-in",
    label: "Office Interior Design & Build",
    parentServiceSlug: "office-design-build",
    published: true,
    headTerm: "Office Interior Designers",
    summary:
      "Turnkey office interior design and build — space planning, 3D design, and full fit-out execution delivered as a single accountable package.",
    deliverables: [
      "Space planning and 3D design concepts",
      "Material, furniture, and lighting selection",
      "End-to-end fit-out execution and handover",
    ],
    keywordSeeds: ["office interior designers", "office interior design", "corporate interior design"],
    angle:
      "corporate offices, co-working floors, and showrooms that need a workspace delivered ready-to-occupy",
  },
  {
    key: "interior-fit-out",
    urlPrefix: "office-fit-out-in",
    label: "Interior Fit-Out",
    parentServiceSlug: "interior-fit-out",
    published: false,
    headTerm: "Office Fit-Out Contractors",
    summary:
      "Commercial interior fit-out — partitions, ceilings, flooring, joinery, and finishes coordinated with MEP and civil teams to a fixed handover date.",
    deliverables: [
      "False ceilings, partitions, and glazing",
      "Flooring, wall finishes, and joinery",
      "MEP-coordinated turnkey delivery",
    ],
    keywordSeeds: ["office fit out", "interior fit out company", "commercial fit out"],
    angle: "shell-and-core floors that need to become fully operational offices",
  },
  {
    key: "mep",
    urlPrefix: "mep-consultants-in",
    label: "MEP Design & Consultancy",
    parentServiceSlug: "mep",
    published: false,
    headTerm: "MEP Consultants",
    summary:
      "MEP design and consultancy — electrical, plumbing, fire, and HVAC systems engineered and coordinated for code-compliant commercial operation.",
    deliverables: [
      "MEP layouts and load calculations",
      "Coordination drawings and clash detection",
      "Testing and commissioning support",
    ],
    keywordSeeds: ["mep consultants", "mep design", "mep contractors"],
    angle: "office buildings and industrial facilities that need engineered building services",
  },
  {
    key: "hvac",
    urlPrefix: "hvac-contractors-in",
    label: "HVAC",
    parentServiceSlug: "hvac",
    published: false,
    headTerm: "HVAC Contractors",
    summary:
      "HVAC design and installation — thermal load calculation, ducting design, and equipment selection for comfort and energy performance.",
    deliverables: [
      "Thermal load reports and airflow design",
      "Ducting layout and equipment sizing",
      "Testing, balancing, and commissioning",
    ],
    keywordSeeds: ["hvac contractors", "hvac services", "office hvac design"],
    angle: "offices and commercial interiors that need reliable air quality and climate control",
  },
  {
    key: "construction",
    urlPrefix: "commercial-construction-in",
    label: "Civil & Commercial Construction",
    parentServiceSlug: "construction",
    published: false,
    headTerm: "Commercial Construction Companies",
    summary:
      "Commercial construction with EPC delivery — planning, procurement, and site execution under strict schedule, cost, and quality control.",
    deliverables: [
      "Construction planning and supervision",
      "Procurement and vendor coordination",
      "QA, safety, and handover documentation",
    ],
    keywordSeeds: ["commercial construction", "construction companies", "epc contractors"],
    angle: "offices, showrooms, and industrial facilities that need ground-up or structural works",
  },
  {
    key: "peb",
    urlPrefix: "peb-manufacturers-in",
    label: "PEB Structures",
    parentServiceSlug: "peb",
    published: false,
    headTerm: "PEB Manufacturers",
    summary:
      "Pre-engineered building solutions — structural design, fabrication, and on-site assembly for fast, scalable industrial and commercial facilities.",
    deliverables: [
      "Structural design and detailing",
      "Fabrication and installation management",
      "Quality checks and completion certificates",
    ],
    keywordSeeds: ["peb manufacturers", "pre engineered buildings", "peb construction"],
    angle: "warehouses, plants, and industrial sheds that need rapid engineered structures",
  },
  {
    key: "facade",
    urlPrefix: "facade-contractors-in",
    label: "Facade & Glazing",
    parentServiceSlug: "facade-glazing",
    published: false,
    headTerm: "Facade & Glazing Contractors",
    summary:
      "Facade and glazing — structural glazing, curtain walls, ACP cladding, and unitized systems engineered for weather performance and safety.",
    deliverables: [
      "Facade design, engineering, and shop drawings",
      "Material specification and fabrication",
      "Installation, testing, and handover",
    ],
    keywordSeeds: ["facade contractors", "structural glazing", "curtain wall"],
    angle: "commercial buildings that need a high-performance building envelope",
  },
  {
    key: "aluminium",
    urlPrefix: "aluminium-doors-and-windows-in",
    label: "Aluminium Doors & Windows",
    parentServiceSlug: "aluminium-doors-windows",
    published: false,
    headTerm: "Aluminium Doors & Windows",
    summary:
      "Commercial-grade aluminium doors and windows — sliding, casement, and openable systems with quality hardware, glazing, and precise installation.",
    deliverables: [
      "Fenestration design and system selection",
      "Fabrication, glazing, and hardware supply",
      "Installation, sealing, and quality checks",
    ],
    keywordSeeds: ["aluminium doors and windows", "aluminium windows", "aluminium fabrication"],
    angle: "offices and commercial spaces that need durable aluminium fenestration",
  },
];

export const getLocalServiceByKey = (key: string) => localServices.find((s) => s.key === key);
