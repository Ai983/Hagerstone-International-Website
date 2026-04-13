export interface LocationPageData {
  slug: string;
  city: string;
  region: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  whyChooseCity: string[];
  servicesInCity: Array<{ title: string; description: string; slug: string }>;
  localAreas: string[];
  faqs: Array<{ q: string; a: string }>;
}

const commonServices: LocationPageData["servicesInCity"] = [
  {
    title: "Office Interior Fit-Out",
    description:
      "End-to-end interior fit-out covering civil work, ceilings, partitions, flooring, lighting, and furniture — delivered on tight corporate timelines.",
    slug: "interior-fit-out",
  },
  {
    title: "Office Design & Build",
    description:
      "Turnkey design-build with single-point accountability — from 2D layouts and 3D visuals to site handover.",
    slug: "office-design-build",
  },
  {
    title: "MEP Design & Services",
    description:
      "Mechanical, Electrical, Plumbing and fire-safety design that plugs directly into your office interior plan.",
    slug: "mep",
  },
  {
    title: "HVAC Installation",
    description:
      "Energy-efficient HVAC design and installation for comfort, air quality, and LEED-aligned operations.",
    slug: "hvac",
  },
  {
    title: "EPC & Commercial Construction",
    description:
      "Engineering, procurement, and construction for corporate, warehouse, and commercial facilities.",
    slug: "construction",
  },
  {
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Fast, cost-effective PEB solutions for warehouses, factories, and industrial shells.",
    slug: "peb",
  },
];

export const locationPages: Record<string, LocationPageData> = {
  gurgaon: {
    slug: "office-design-gurgaon",
    city: "Gurgaon",
    region: "Haryana",
    title: "Office Design & Fit-Out in Gurgaon | Hagerstone International",
    h1: "Office Design & Fit-Out Services in Gurgaon",
    metaDescription:
      "Office design & fit-out company in Gurgaon delivering modern interiors, MEP, HVAC, and turnkey workspaces for Cyber City, Udyog Vihar, Golf Course Road and Sohna Road corporates.",
    keywords:
      "office design gurgaon, interior fit out gurgaon, office interior design gurugram, mep consultants gurgaon, turnkey office fit out cyber city, commercial interior design gurgaon",
    intro:
      "Gurgaon is the corporate heartbeat of the NCR — home to Fortune 500 HQs, fast-growing startups, and some of India's most ambitious workspaces. Hagerstone International delivers office design and build, interior fit-out, MEP, and HVAC services across Gurgaon's key business corridors: Cyber City, Golf Course Road, Golf Course Extension, Udyog Vihar, MG Road, and Sohna Road.",
    whyChooseCity: [
      "Local project teams familiar with Gurgaon commercial building norms (DLF, Emaar, M3M, Bharti, Unitech, Vatika).",
      "Proven track record in Grade-A office towers across Cyber City and Golf Course Road.",
      "24x7 site supervision to meet aggressive Gurgaon corporate timelines.",
      "End-to-end delivery: design, MEP, HVAC, civil, finishing, furniture, and handover under one SLA.",
      "MEP-compliant designs meeting NBC, NBCC, and local fire norms enforced in Haryana.",
    ],
    servicesInCity: commonServices,
    localAreas: [
      "Cyber City",
      "Golf Course Road",
      "Golf Course Extension",
      "Udyog Vihar",
      "MG Road",
      "Sohna Road",
      "Sector 44",
      "Sector 32",
      "Manesar",
      "DLF Phase 1-5",
    ],
    faqs: [
      {
        q: "How long does an office fit-out in Gurgaon take?",
        a: "A typical 10,000–15,000 sq. ft. Gurgaon office fit-out runs 8–12 weeks including design, procurement, MEP, civil, and handover. Larger 30,000+ sq. ft. projects on Golf Course Road or Cyber City usually take 16–20 weeks.",
      },
      {
        q: "Do you work with the DLF / M3M / Emaar building management teams?",
        a: "Yes. We routinely coordinate with Grade-A Gurgaon landlord managers to secure fit-out approvals, material movement windows, fire NOCs, and HVAC tie-ins.",
      },
      {
        q: "What does office interior design in Gurgaon cost per sq. ft.?",
        a: "Budget builds start around ₹1,000/sq. ft., mid-range modern offices run ₹1,400–1,900/sq. ft., and premium Grade-A HQ-grade builds are ₹2,000–2,800/sq. ft. including MEP and furniture.",
      },
    ],
  },
  noida: {
    slug: "office-design-noida",
    city: "Noida",
    region: "Uttar Pradesh",
    title: "Office Design & Fit-Out in Noida | Hagerstone International",
    h1: "Office Design & Fit-Out Services in Noida",
    metaDescription:
      "Office design & fit-out company in Noida — modern interiors, MEP, HVAC, and turnkey workspaces across Sector 62, 63, 16, 125, 135 and Noida Expressway.",
    keywords:
      "office design noida, interior fit out noida, office interior design noida, mep consultants noida, turnkey office fit out sector 62, commercial interior design noida expressway",
    intro:
      "Noida has become one of India's fastest-growing IT/ITeS and corporate hubs. From the tech corridor on Noida Expressway to the established business belts in Sector 62, 63, 16, 125, and 135, Hagerstone delivers modern office interiors, MEP, HVAC, and turnkey fit-outs for corporates setting up in Noida and Greater Noida.",
    whyChooseCity: [
      "Head office in Sector 2, Noida — fastest response times for Noida and Greater Noida projects.",
      "Strong relationships with Noida developers (Logix, Assotech, Wave, ATS, Bhutani, 91Springboard).",
      "Experienced with Noida Authority and GNIDA fit-out approvals and NOC processes.",
      "Complete in-house MEP and HVAC teams for single-vendor accountability.",
      "Proven delivery across IT parks, coworking, BFSI, and shared workspace clients in Noida.",
    ],
    servicesInCity: commonServices,
    localAreas: [
      "Sector 62",
      "Sector 63",
      "Sector 16",
      "Sector 18",
      "Sector 125",
      "Sector 135",
      "Sector 142",
      "Noida Expressway",
      "Greater Noida",
      "Noida Sector 2",
    ],
    faqs: [
      {
        q: "Where is your Noida office?",
        a: "Hagerstone's HQ is at 91Springboard, D-107, D Block, Sector 2, Noida. We service all of Noida, Greater Noida, and Greater Noida West from this base.",
      },
      {
        q: "Do you handle Noida Authority fit-out approvals?",
        a: "Yes. Our in-house liaison team manages Noida Authority, GNIDA, and fire department submissions, drawings, and NOCs required before and after fit-out.",
      },
      {
        q: "What is the typical cost of an office fit-out in Noida?",
        a: "Basic Noida office fit-outs start near ₹900/sq. ft. Mid-range modern office interior design runs ₹1,300–1,800/sq. ft. Premium builds reach ₹2,000–2,500/sq. ft. including MEP, HVAC, and furniture.",
      },
    ],
  },
  delhi: {
    slug: "office-design-delhi",
    city: "Delhi",
    region: "Delhi NCT",
    title: "Office Design & Fit-Out in Delhi | Hagerstone International",
    h1: "Office Design & Fit-Out Services in Delhi",
    metaDescription:
      "Office interior design and fit-out company in Delhi — modern workspaces, MEP, HVAC, and turnkey builds for Connaught Place, Nehru Place, Saket, Jasola, and Okhla corporates.",
    keywords:
      "office design delhi, interior fit out delhi, office interior design delhi, mep consultants delhi, turnkey office fit out connaught place, commercial interior design south delhi",
    intro:
      "Delhi combines heritage commercial districts with modern corporate parks. Whether you're fitting out a headquarters in Connaught Place, a flagship office in Nehru Place, or a Grade-A space in Saket, Jasola, or Okhla, Hagerstone handles design, MEP, HVAC, civil work, and furniture under a single turnkey contract.",
    whyChooseCity: [
      "Deep experience working within Delhi's MCD / NDMC / DDA building fit-out guidelines.",
      "Heritage-zone experienced teams for CP-grade refurbishment, listed buildings, and leased floors.",
      "End-to-end turnkey delivery with single-point accountability.",
      "In-house MEP, HVAC, fire-safety, and data-cabling teams.",
      "On-time delivery track record across BFSI, legal, consulting, and consumer brands in Delhi.",
    ],
    servicesInCity: commonServices,
    localAreas: [
      "Connaught Place",
      "Nehru Place",
      "Saket",
      "Jasola",
      "Okhla",
      "Bhikaji Cama Place",
      "Rajendra Place",
      "Aerocity",
      "Dwarka",
      "Mathura Road",
    ],
    faqs: [
      {
        q: "Do you handle leased-floor fit-outs in Connaught Place or Nehru Place?",
        a: "Yes. We coordinate with landlord managers, MCD/NDMC, and fire officers to deliver interior fit-outs in leased commercial floors across CP, Nehru Place, and Bhikaji Cama Place.",
      },
      {
        q: "Can you meet MCD / NDMC fire and building approvals?",
        a: "Our in-house liaison team manages MCD/NDMC building approvals, fire clearances, and post-completion compliance required for Delhi commercial fit-outs.",
      },
      {
        q: "What is the cost range for office interior design in Delhi?",
        a: "Standard office fit-outs in Delhi range ₹1,000–2,500/sq. ft. depending on finishes, MEP complexity, and furniture choices.",
      },
    ],
  },
  faridabad: {
    slug: "office-design-faridabad",
    city: "Faridabad",
    region: "Haryana",
    title: "Office Design & Fit-Out in Faridabad | Hagerstone International",
    h1: "Office Design & Fit-Out Services in Faridabad",
    metaDescription:
      "Office design, interior fit-out, MEP, and PEB services in Faridabad for corporate offices, industrial facilities, and commercial buildings across NH1 and Mathura Road.",
    keywords:
      "office design faridabad, interior fit out faridabad, peb construction faridabad, industrial interior design faridabad, mep consultants faridabad, warehouse fit out nh1",
    intro:
      "Faridabad is one of NCR's most important industrial and commercial zones, with a growing office and mixed-use footprint along NH1, Mathura Road, and the Faridabad-Greater Faridabad corridor. Hagerstone delivers office design & build, interior fit-outs, MEP, HVAC, and PEB construction for corporates, manufacturers, and warehouse operators in Faridabad.",
    whyChooseCity: [
      "Strong PEB and industrial construction experience tailored for Faridabad's manufacturing base.",
      "In-house engineering teams for warehouse, factory, and mixed-use commercial builds.",
      "Single-point accountability across design, MEP, and civil delivery.",
      "Familiar with HUDA, MCF, and Haryana fire norms for commercial/industrial approvals.",
      "Local site supervision with NCR-wide material sourcing.",
    ],
    servicesInCity: commonServices,
    localAreas: [
      "NH1 / NH44",
      "Mathura Road",
      "Sector 15",
      "Sector 16",
      "Sector 37",
      "Neharpar",
      "Greater Faridabad",
      "Ballabgarh",
      "Industrial Model Township",
      "Faridabad-Badarpur Border",
    ],
    faqs: [
      {
        q: "Do you build PEB warehouses in Faridabad?",
        a: "Yes. We design and construct pre-engineered warehouses and factory sheds across Faridabad industrial areas including Ballabgarh, IMT, and the NH1 belt.",
      },
      {
        q: "Can you handle a combined office + factory fit-out?",
        a: "Yes — we routinely deliver combined corporate office, production, and warehouse builds under a single turnkey contract in Faridabad.",
      },
      {
        q: "What is the typical PEB cost in Faridabad?",
        a: "PEB structures in Faridabad typically range ₹350–600/sq. ft. depending on span, height, insulation, and MEP inclusions.",
      },
    ],
  },
};
