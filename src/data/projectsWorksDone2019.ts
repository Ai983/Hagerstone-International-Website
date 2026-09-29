import type { ProjectData, ProjectSection } from "./project";

// Every job on the founder-approved "HSIPL Works Done 1 Jan 2019 – 31 Dec 2021"
// sheet, as ordinary project pages. Where the sheet lists the same client twice
// for one site (PSV Urbana, Synergy Consulting, GLS Infra) the lines share a page.
//
// Deliberately left out: the sheet's project values (contract sums are not
// published anywhere on the site) and the name of the one private homeowner.
// The sheet gives no per-job year, so every page carries the sheet's period.
//
// The rows carry only what the sheet says — client, location, area and scope.
// The photographed jobs also get an overview, features and materials written from
// their photos (see PHOTOS below). Anything beyond that needs someone who worked
// on the job, so leave it to them rather than inventing it here.

type Row = {
  id: string;
  title: string;
  client: string;
  location: string;
  sector: string;
  /** Floor area as on the sheet; omitted where the sheet has "-". */
  area?: string;
  scope: string[];
  /** One plain sentence on what was done, from the sheet. */
  summary: string;
  metaTitle: string;
  /** Only where a source dates the job; otherwise the sheet's period is shown. */
  year?: string;
  /** Only where the client's own letter states it. */
  duration?: string;
  hero?: string;
  heroAlt?: string;
  sections?: ProjectSection[];
};

const PERIOD = "2019–2021";

const rows: Row[] = [
  {
    id: "psv-urbana-gurugram",
    title: "PSV Urbana Turnkey Interiors",
    client: "PSV Urbana",
    location: "Gurugram, Haryana",
    sector: "Turnkey Interiors",
    area: "30,000 sq ft",
    scope: ["Turnkey interiors across 30,000 sq ft", "Furniture supply"],
    summary:
      "Turnkey interiors across 30,000 sq ft for PSV Urbana in Gurugram, followed by a separate furniture supply package for the same client.",
    metaTitle: "PSV Urbana Turnkey Interiors, Gurugram",
  },
  {
    id: "panasonic-life-solutions-sri-city",
    title: "Panasonic Life Solutions Interior Works",
    client: "Panasonic Life Solutions (with Takenaka)",
    location: "Sri City, Andhra Pradesh",
    sector: "Industrial Interiors",
    area: "2,00,000 sq ft",
    scope: ["Interior works across 2,00,000 sq ft", "Delivered with Takenaka as main contractor"],
    summary:
      "Interior works across 2,00,000 sq ft at Panasonic Life Solutions' facility in Sri City, Andhra Pradesh, delivered with Takenaka.",
    metaTitle: "Panasonic Life Solutions Interiors, Sri City",
  },
  {
    id: "yanmar-engine-factory-chennai",
    title: "Yanmar Engine Factory Office Interiors",
    client: "Yanmar (with Takenaka)",
    location: "Ponneri, Tamil Nadu",
    sector: "Industrial Office Interiors",
    area: "50,000 sq ft",
    scope: ["Office interiors across 50,000 sq ft", "Delivered with Takenaka as main contractor"],
    summary:
      "Office interiors across 50,000 sq ft at the Yanmar engine factory in Ponneri, near Chennai, delivered with Takenaka.",
    metaTitle: "Yanmar Engine Factory Office Interiors, Ponneri",
  },
  {
    id: "oceaneering-chandigarh",
    title: "Oceaneering Office Design & Build",
    client: "Oceaneering",
    location: "Chandigarh",
    sector: "Office Design & Build",
    area: "20,000 sq ft",
    scope: ["Design & build across 20,000 sq ft"],
    summary: "Design and build of Oceaneering's 20,000 sq ft office in Chandigarh.",
    metaTitle: "Oceaneering Office Design & Build, Chandigarh",
  },
  {
    id: "el-corte-ingles-gurugram",
    title: "El Corte Inglés Office Design & Build",
    client: "El Corte Inglés",
    location: "Gurugram, Haryana",
    sector: "Office Design & Build",
    area: "20,000 sq ft",
    scope: ["Design & build across 20,000 sq ft"],
    summary: "Design and build of El Corte Inglés' 20,000 sq ft office in Gurugram.",
    metaTitle: "El Corte Inglés Office Design & Build, Gurugram",
  },
  {
    id: "byredo-showroom-mumbai",
    title: "Byredo Showroom Design & Build",
    client: "Beauty Impex (Byredo)",
    location: "Mumbai, Maharashtra",
    sector: "Retail Showroom",
    area: "1,000 sq ft",
    scope: ["Showroom design & build across 1,000 sq ft"],
    summary: "Design and build of a 1,000 sq ft Byredo showroom in Mumbai for Beauty Impex.",
    metaTitle: "Byredo Showroom Design & Build, Mumbai",
  },
  {
    id: "bcg-gurugram-fire-fighting",
    title: "BCG Fire-Fighting Works",
    client: "BCG (Boston Consulting Group)",
    location: "Gurugram, Haryana",
    sector: "Fire-Fighting Systems",
    scope: ["Fire-fighting works"],
    summary: "Fire-fighting works at BCG's office in Gurugram.",
    metaTitle: "BCG Fire-Fighting Works, Gurugram",
  },
  {
    id: "synergy-consulting-jasola",
    title: "Synergy Consulting Office Design & Build",
    client: "Synergy Consulting",
    location: "Jasola, New Delhi",
    sector: "Office Design & Build",
    area: "20,000 sq ft",
    scope: ["Design & build of the 3rd floor, 18,000 sq ft", "Design & build of the 3rd floor extension, 2,000 sq ft"],
    summary:
      "Design and build of Synergy Consulting's 18,000 sq ft third-floor office in Jasola, New Delhi, and a later 2,000 sq ft extension of the same floor.",
    metaTitle: "Synergy Consulting Office Design & Build, Jasola",
  },
  {
    id: "edf-international-saket",
    title: "EDF International Office Design & Build",
    // Address, date and "within timeline" from EDF's appreciation letter of 18 April 2019.
    client: "EDF International Networks",
    location: "DLF South Court, Saket, New Delhi",
    sector: "Office Design & Build",
    area: "2,500 sq ft",
    year: "2019",
    scope: ["Design & build of the India head office, 2,500 sq ft"],
    summary: "Design and build of EDF International Networks' 2,500 sq ft India head office at DLF South Court, Saket, New Delhi.",
    metaTitle: "EDF International Office Design & Build, Saket",
  },
  {
    id: "renesas-electronics-jasola",
    title: "Renesas Electronics Office Design & Build",
    client: "Renesas Electronics",
    location: "Jasola, New Delhi",
    sector: "Office Design & Build",
    area: "3,000 sq ft",
    scope: ["Design & build across 3,000 sq ft"],
    summary: "Design and build of Renesas Electronics' 3,000 sq ft office in Jasola, New Delhi.",
    metaTitle: "Renesas Electronics Office Design & Build, Jasola",
  },
  {
    id: "tidong-power-shimla",
    title: "Tidong Power Office Design & Build",
    client: "Tidong Power",
    location: "Shimla, Himachal Pradesh",
    sector: "Office Design & Build",
    area: "500 sq ft",
    scope: ["Design & build across 500 sq ft"],
    summary: "Design and build of Tidong Power's 500 sq ft hydropower project office in Shimla.",
    metaTitle: "Tidong Power Office Design & Build, Shimla",
  },
  {
    id: "trunkhouse-mumbai",
    title: "Trunkhouse Design & Build",
    client: "Beauty Impex (Trunkhouse)",
    location: "Mumbai, Maharashtra",
    sector: "Retail Showroom",
    area: "1,000 sq ft",
    scope: ["Design & build across 1,000 sq ft"],
    summary: "Design and build of the 1,000 sq ft Trunkhouse space in Mumbai for Beauty Impex.",
    metaTitle: "Trunkhouse Design & Build, Mumbai",
  },
  {
    id: "piya-facility-management-gurugram",
    title: "Piya Facility Management Furniture Supply",
    client: "Piya Facility Management",
    location: "Gurugram, Haryana",
    sector: "Furniture Supply",
    scope: ["Office furniture supply"],
    summary: "Office furniture supply for Piya Facility Management in Gurugram.",
    metaTitle: "Piya Facility Management Furniture Supply, Gurugram",
  },
  {
    id: "lexir-resources-gurugram",
    title: "Lexir Resources Office Design & Build",
    client: "Lexir Resources",
    location: "Gurugram, Haryana",
    sector: "Office Design & Build",
    area: "10,000 sq ft",
    scope: ["Design & build across 10,000 sq ft"],
    summary: "Design and build of Lexir Resources' 10,000 sq ft office in Gurugram.",
    metaTitle: "Lexir Resources Office Design & Build, Gurugram",
  },
  {
    id: "alps-electric-gurugram",
    title: "Alps Electric Office Renovation",
    client: "Alps Electric",
    location: "Gurugram, Haryana",
    sector: "Office Renovation",
    scope: ["Office renovation"],
    summary: "Renovation works at Alps Electric's office in Gurugram.",
    metaTitle: "Alps Electric Office Renovation, Gurugram",
  },
  {
    id: "srp-and-company-pitampura",
    title: "SRP & Company Office Design & Build",
    // Scope, year and the 60-day timeline from the client's letter of 22 Sept 2021.
    client: "SRP & Company, Chartered Accountants",
    location: "Netaji Subhash Place, Pitampura, Delhi",
    sector: "Office Design & Build",
    area: "1,000 sq ft",
    year: "2021",
    duration: "60 days",
    scope: ["Interior design", "Turnkey interior works", "MEP: electrical, HVAC, plumbing and fire-fighting", "Furniture"],
    summary: "Design and build of the 1,000 sq ft office of SRP & Company, Chartered Accountants, at Netaji Subhash Place, Pitampura, completed in 60 days.",
    metaTitle: "SRP & Company Office Design & Build, Pitampura",
  },
  {
    id: "dorient-solutions-pitampura",
    title: "Dorient Solutions Office Design & Build",
    client: "Dorient Solutions",
    location: "Pitampura, Delhi",
    sector: "Office Design & Build",
    area: "2,500 sq ft",
    scope: ["Design & build across 2,500 sq ft"],
    summary: "Design and build of Dorient Solutions' 2,500 sq ft office in Pitampura, Delhi.",
    metaTitle: "Dorient Solutions Office Design & Build, Pitampura",
  },
  {
    id: "mpkupl-jalna",
    title: "MPKUPL Civil & Interior Works",
    client: "MPKUPL",
    location: "Jalna, Maharashtra",
    sector: "Civil & Interiors",
    area: "20,000 sq ft",
    scope: ["Civil works", "Interior works", "20,000 sq ft"],
    summary: "Civil and interior works across 20,000 sq ft for MPKUPL in Jalna, Maharashtra.",
    metaTitle: "MPKUPL Civil & Interior Works, Jalna",
  },
  {
    id: "airtel-raipur",
    title: "Airtel Office Turnkey Interiors",
    client: "Airtel",
    location: "Raipur, Chhattisgarh",
    sector: "Turnkey Interiors",
    area: "5,000 sq ft",
    scope: ["Turnkey interiors across 5,000 sq ft"],
    summary: "Turnkey interiors for Airtel's 5,000 sq ft office in Raipur, Chhattisgarh.",
    metaTitle: "Airtel Office Turnkey Interiors, Raipur",
  },
  {
    id: "hashtag-orange-gurugram",
    title: "Hashtag Orange Office Design & Build",
    // Address, scope, year and the 45-day timeline from the client's letter of 15 July 2019.
    client: "Hashtag Orange",
    location: "Emaar Palm Spring Plaza, Golf Course Road, Gurugram",
    sector: "Office Design & Build",
    area: "1,300 sq ft",
    year: "2019",
    duration: "45 days",
    scope: ["Interior design", "Turnkey interior works", "MEP services", "Furniture"],
    summary: "Design and build of Hashtag Orange's 1,300 sq ft corporate office at Emaar Palm Spring Plaza, Golf Course Road, Gurugram, completed in 45 days.",
    metaTitle: "Hashtag Orange Office Design & Build, Gurugram",
  },
  {
    id: "monin-chhatarpur",
    title: "Monin Turnkey Interiors",
    client: "Monin",
    location: "Chhatarpur, New Delhi",
    sector: "Turnkey Interiors",
    area: "5,000 sq ft",
    scope: ["Turnkey interiors across 5,000 sq ft"],
    summary: "Turnkey interiors across 5,000 sq ft for Monin in Chhatarpur, New Delhi.",
    metaTitle: "Monin Turnkey Interiors, Chhatarpur",
  },
  {
    id: "french-embassy-chanakyapuri",
    title: "French Embassy Turnkey Interiors",
    client: "French Embassy",
    location: "Chanakyapuri, New Delhi",
    sector: "Turnkey Interiors",
    area: "750 sq ft",
    scope: ["Turnkey interiors across 750 sq ft"],
    summary: "Turnkey interiors across 750 sq ft at the French Embassy in Chanakyapuri, New Delhi.",
    metaTitle: "French Embassy Turnkey Interiors, Chanakyapuri",
  },
  {
    id: "aecom-gurugram",
    title: "AECOM Office Renovation",
    client: "AECOM",
    location: "Gurugram, Haryana",
    sector: "Office Renovation",
    scope: ["Office renovation"],
    summary: "Renovation works at AECOM's office in Gurugram.",
    metaTitle: "AECOM Office Renovation, Gurugram",
  },
  {
    id: "darcl-gurugram",
    title: "DARCL Furniture Supply",
    client: "DARCL",
    location: "Gurugram, Haryana",
    sector: "Furniture Supply",
    scope: ["Office furniture supply"],
    summary: "Office furniture supply for DARCL in Gurugram.",
    metaTitle: "DARCL Furniture Supply, Gurugram",
  },
  {
    id: "priya-complex-basant-lok",
    title: "Priya Complex Design & Build",
    client: "Priya Complex",
    location: "Basant Lok, New Delhi",
    sector: "Commercial Design & Build",
    area: "700 sq ft",
    scope: ["Design & build across 700 sq ft"],
    summary: "Design and build of a 700 sq ft space at Priya Complex, Basant Lok, New Delhi.",
    metaTitle: "Priya Complex Design & Build, Basant Lok",
  },
  {
    id: "sp-infocity-gurugram",
    title: "SP Infocity Design & Build",
    client: "SP Infocity",
    location: "Gurugram, Haryana",
    sector: "Office Design & Build",
    area: "10,000 sq ft",
    scope: ["Design & build across 10,000 sq ft"],
    summary: "Design and build across 10,000 sq ft at SP Infocity in Gurugram.",
    metaTitle: "SP Infocity Design & Build, Gurugram",
  },
  {
    id: "bunge-india-janakpuri",
    title: "Bunge India Furniture Supply",
    client: "Bunge India",
    location: "Janakpuri, New Delhi",
    sector: "Furniture Supply",
    scope: ["Office furniture supply"],
    summary: "Office furniture supply for Bunge India in Janakpuri, New Delhi.",
    metaTitle: "Bunge India Furniture Supply, Janakpuri",
  },
  {
    id: "india-accelerator-gurugram",
    title: "India Accelerator Interior Design",
    client: "India Accelerator",
    location: "Gurugram, Haryana",
    sector: "Interior Design",
    scope: ["Interior design (design only)"],
    summary: "Interior design, without execution, for India Accelerator in Gurugram.",
    metaTitle: "India Accelerator Interior Design, Gurugram",
  },
  {
    id: "gih-gurugram",
    title: "Global Infrastructure Hub Lighting Supply",
    client: "Global Infrastructure Hub (GIH)",
    location: "Gurugram, Haryana",
    sector: "Lighting Supply",
    scope: ["Lighting supply"],
    summary: "Lighting supply for the Global Infrastructure Hub (GIH) office in Gurugram.",
    metaTitle: "Global Infrastructure Hub Lighting Supply, Gurugram",
  },
  {
    id: "takenaka-hq-gurugram",
    title: "Takenaka HQ Turnkey Interiors",
    client: "Takenaka",
    location: "Gurugram, Haryana",
    sector: "Turnkey Interiors",
    area: "2,000 sq ft",
    scope: ["Turnkey interiors across 2,000 sq ft"],
    summary: "Turnkey interiors for Takenaka's 2,000 sq ft headquarters office in Gurugram.",
    metaTitle: "Takenaka HQ Turnkey Interiors, Gurugram",
  },
  {
    id: "beebay-kids-gurugram",
    title: "Beebay Kids Lighting Supply",
    client: "Beebay Kids",
    location: "Gurugram, Haryana",
    sector: "Lighting Supply",
    scope: ["Lighting supply"],
    summary: "Lighting supply for Beebay Kids in Gurugram.",
    metaTitle: "Beebay Kids Lighting Supply, Gurugram",
  },
  {
    id: "inshorts-media-noida",
    title: "Inshorts Media Office Renovation",
    client: "Inshorts Media",
    location: "Noida, Uttar Pradesh",
    sector: "Office Renovation",
    scope: ["Office renovation"],
    summary: "Renovation works at Inshorts Media's office in Noida.",
    metaTitle: "Inshorts Media Office Renovation, Noida",
  },
  {
    id: "arcon-peb-noida",
    title: "Arcon PEB Structure",
    client: "Arcon",
    location: "Noida, Uttar Pradesh",
    sector: "Pre-Engineered Building",
    area: "15,000 sq ft",
    scope: ["PEB structure work across 15,000 sq ft"],
    summary: "Pre-engineered building structure work across 15,000 sq ft for Arcon in Noida.",
    metaTitle: "Arcon PEB Structure Work, Noida",
  },
  {
    // Scope, locality and year from Imperial Malts' appreciation letter of 8 Aug 2019.
    id: "imperial-malt-peb-gurugram",
    title: "Imperial Malts PEB Office Building",
    client: "Imperial Malts",
    location: "Sector 49, Gurugram, Haryana",
    sector: "Pre-Engineered Building",
    area: "1,500 sq ft",
    year: "2019",
    duration: "60 days",
    scope: [
      "Pre-engineered building structure, 1,500 sq ft",
      "Turnkey interiors",
      "MEP works",
      "Furniture",
    ],
    summary:
      "A 1,500 sq ft pre-engineered office building for Imperial Malts in Sector 49, Gurugram, delivered end to end in 60 days: the structure, then turnkey interiors including MEP and furniture.",
    metaTitle: "Imperial Malts PEB Office Building, Gurugram",
  },
  {
    id: "seismic-solution-noida",
    title: "Seismic Solution Furniture Supply",
    client: "Seismic Solution",
    location: "Noida, Uttar Pradesh",
    sector: "Furniture Supply",
    scope: ["Office furniture supply"],
    summary: "Office furniture supply for Seismic Solution in Noida.",
    metaTitle: "Seismic Solution Furniture Supply, Noida",
  },
  {
    id: "hermes-exhibition-stand-delhi-airport",
    title: "Hermès Exhibition Stand",
    client: "Hermès",
    location: "Terminal 3, IGI Airport, Delhi",
    sector: "Exhibition Stand",
    scope: ["Exhibition stand"],
    summary: "An exhibition stand for Hermès at Terminal 3 of Delhi's IGI Airport.",
    metaTitle: "Hermès Exhibition Stand, Delhi Airport T3",
  },
  {
    id: "movietime-cinemas-hyderabad",
    title: "MovieTime Cinemas Turnkey Interiors",
    client: "MovieTime Cinemas",
    location: "Hyderabad, Telangana",
    sector: "Cinema Interiors",
    area: "5,000 sq ft",
    scope: ["Turnkey interiors across 5,000 sq ft"],
    summary: "Turnkey interiors across 5,000 sq ft for MovieTime Cinemas in Hyderabad.",
    metaTitle: "MovieTime Cinemas Turnkey Interiors, Hyderabad",
  },
  {
    id: "medtronic-gurugram",
    title: "Medtronic Office Design & Build",
    client: "Medtronic",
    location: "Gurugram, Haryana",
    sector: "Office Design & Build",
    area: "5,000 sq ft",
    scope: ["Design & build across 5,000 sq ft"],
    summary: "Design and build of Medtronic's 5,000 sq ft office in Gurugram.",
    metaTitle: "Medtronic Office Design & Build, Gurugram",
  },
  {
    id: "gls-infra-gurugram",
    title: "GLS Infra Office Design & Build",
    client: "GLS Infra",
    location: "Gurugram, Haryana",
    sector: "Office Design & Build",
    area: "6,000 sq ft",
    scope: ["Design & build, 3,000 sq ft", "Design & build, 2,000 sq ft", "Design & build, 1,000 sq ft"],
    summary: "Three design and build fit-outs for GLS Infra in Gurugram, of 3,000, 2,000 and 1,000 sq ft.",
    metaTitle: "GLS Infra Office Design & Build, Gurugram",
  },
  {
    id: "salcon-saket",
    title: "Salcon Tiling Work",
    client: "Salcon",
    location: "Saket, New Delhi",
    sector: "Tiling Work",
    scope: ["Tiling work"],
    summary: "Tiling work for Salcon in Saket, New Delhi.",
    metaTitle: "Salcon Tiling Work, Saket",
  },
  {
    id: "lufthansa-delhi-airport",
    title: "Lufthansa Renovation, Delhi Airport",
    client: "Lufthansa",
    location: "Terminal 3, IGI Airport, Delhi",
    sector: "Renovation",
    scope: ["Renovation work"],
    summary: "Renovation work for Lufthansa at Terminal 3 of Delhi's IGI Airport.",
    metaTitle: "Lufthansa Renovation, Delhi Airport T3",
  },
  {
    id: "singapore-airlines-delhi-airport",
    title: "Singapore Airlines Renovation, Delhi Airport",
    client: "Singapore Airlines",
    location: "Terminal 3, IGI Airport, Delhi",
    sector: "Renovation",
    scope: ["Renovation work"],
    summary: "Renovation work for Singapore Airlines at Terminal 3 of Delhi's IGI Airport.",
    metaTitle: "Singapore Airlines Renovation, Delhi Airport T3",
  },
  {
    id: "nippon-steel-saket",
    title: "Nippon Steel Maintenance Work",
    client: "Nippon Steel",
    location: "Saket, New Delhi",
    sector: "Maintenance",
    scope: ["Maintenance work"],
    summary: "Maintenance work at Nippon Steel's office in Saket, New Delhi.",
    metaTitle: "Nippon Steel Maintenance Work, Saket",
  },
  {
    id: "smcc-saket",
    title: "SMCC Maintenance Work",
    client: "SMCC Construction India",
    location: "Saket, New Delhi",
    sector: "Maintenance",
    scope: ["Maintenance work"],
    summary: "Maintenance work at SMCC's office in Saket, New Delhi.",
    metaTitle: "SMCC Maintenance Work, Saket",
  },
  {
    id: "aipl-joy-street-gurugram",
    title: "AIPL Joy Street Interior Works",
    client: "AIPL Joy Street",
    location: "Gurugram, Haryana",
    sector: "Commercial Interiors",
    area: "12,000 sq ft",
    scope: ["Interior works across 12,000 sq ft"],
    summary: "Interior works across 12,000 sq ft at AIPL Joy Street in Gurugram.",
    metaTitle: "AIPL Joy Street Interior Works, Gurugram",
  },
  {
    id: "pp-trade-centre-pitampura",
    title: "PP Trade Centre Design & Build",
    client: "PP Trade Centre",
    location: "Pitampura, Delhi",
    sector: "Commercial Design & Build",
    area: "1,000 sq ft",
    scope: ["Design & build across 1,000 sq ft"],
    summary: "Design and build of a 1,000 sq ft space at PP Trade Centre in Pitampura, Delhi.",
    metaTitle: "PP Trade Centre Design & Build, Pitampura",
  },
  {
    id: "hindusthan-connaught-place",
    title: "Hindusthan Turnkey Interiors",
    client: "Hindusthan",
    location: "Connaught Place, New Delhi",
    sector: "Turnkey Interiors",
    area: "5,000 sq ft",
    scope: ["Turnkey interiors across 5,000 sq ft"],
    summary: "Turnkey interiors across 5,000 sq ft for Hindusthan in Connaught Place, New Delhi.",
    metaTitle: "Hindusthan Turnkey Interiors, Connaught Place",
  },
  {
    id: "revolve-noida",
    title: "Revolve Office Design & Build, Noida",
    // Address, scope, year and the 60-day timeline from the client's letter of 22 Sept 2021.
    client: "Revolve Softech",
    location: "Spring Meadows Business Park, Sector 63, Noida",
    sector: "Office Design & Build",
    area: "1,000 sq ft",
    year: "2021",
    duration: "60 days",
    scope: ["Interior design", "Turnkey interior works", "MEP: electrical, HVAC, plumbing and fire-fighting", "Furniture"],
    summary: "Design and build of Revolve Softech's 1,000 sq ft office at Spring Meadows Business Park, Sector 63, Noida, completed in 60 days.",
    metaTitle: "Revolve Office Design & Build, Noida",
  },
  {
    id: "private-residence-gurugram",
    title: "Private Residence, Gurugram",
    client: "Private client",
    location: "Gurugram, Haryana",
    sector: "Residential",
    area: "2,500 sq ft",
    scope: ["Residential work across 2,500 sq ft"],
    summary: "Residential work across a 2,500 sq ft private home in Gurugram.",
    metaTitle: "Private Residence Works, Gurugram",
  },
];

// Photos from the company's project-photo Drive, converted to WebP by size budget
// (max 1600px, under 250 KB) into public/projects/<id>/. The first photo of the
// first group is the hero. Tuple: [file name, width, height, alt text].
//
// The overview, features, materials and group descriptions for these nine are
// written from what the photos show — nothing is claimed that a photo doesn't.
// Someone who worked on a job can replace them with fuller detail.
type Photo = [string, number, number, string];
type PhotoGroup = { name: string; description: string; photos: Photo[] };
type PhotoDetail = {
  overview: string;
  specialFeatures: string[];
  materials: string[];
  groups: PhotoGroup[];
};

const PHOTOS: Record<string, PhotoDetail> = {
  // From the company's online profile PDF.
  "synergy-consulting-jasola": {
    overview:
      "Hagerstone International designed and built Synergy Consulting's 18,000 sq ft third-floor office in Jasola, New Delhi, and later returned to design and build a 2,000 sq ft extension of the same floor — 20,000 sq ft in all between 2019 and 2021. The reception is wrapped floor to ceiling in large-format white marble-look panels under a timber slat ceiling with linear lights, and the open office runs long rows of white workstations beneath large ring pendants, beside glass-fronted cabins carrying the Synergy logo. A repeat commission on the same floor is the clearest sign of a client relationship that works.",
    specialFeatures: [
      "Reception wrapped in large-format marble-look wall and floor panels",
      "Timber slat ceiling with integrated linear lights at reception",
      "Large ring pendants over the open workstations",
      "Glass-fronted cabins with frosted, logo-branded film",
      "Open ceiling with exposed services over the work floor",
    ],
    materials: [
      "Large-format marble-look porcelain panels",
      "Timber slat ceiling",
      "Carpet tiles with a blue accent border",
      "Frameless glass partitions with frosted film",
    ],
    groups: [
      {
        name: "Reception & workspace",
        description:
          "The marble-clad reception with its timber slat ceiling, and the open office of white workstations under ring pendants, lined with glass cabins.",
        photos: [
          ["reception", 1024, 683, "Synergy Consulting reception in Jasola, New Delhi, with marble-look wall panels, a timber slat ceiling and a timber reception desk"],
          ["workstations", 1024, 683, "Synergy Consulting open office with white workstations under large ring pendant lights beside glass cabins"],
        ],
      },
    ],
  },
  "edf-international-saket": {
    overview:
      "EDF International Networks' 2,500 sq ft India head office at DLF South Court, Saket, New Delhi, designed and built by Hagerstone in 2019 as an industrial-style workspace. In its letter of appreciation, EDF confirmed the office was delivered to its requirements and within the agreed timeline. The ceiling is left open with its ducts and services on show, and the space is warmed with pine slat panelling, orange accents and large photographic prints on charcoal walls. Long rows of workstations run between glass-partitioned cabins, a conference room and a pantry with a high bar table.",
    specialFeatures: [
      "Exposed ceiling with spiral ductwork left on show",
      "Y-shaped linear LED pendants over the workstation rows",
      "Black cage pendants with filament bulbs at the entrance and pantry",
      "Black-framed glass cabins with frosted graphic film",
      "Pantry with a high timber bar table and an orange tiled splashback",
    ],
    materials: [
      "Pine slat wall panelling",
      "OSB (oriented strand board) desk panels",
      "Black-framed glass partitions with frosted film",
      "Orange ceramic tiles in the pantry",
      "Black metal shelving and ladder racks",
      "Charcoal painted walls",
    ],
    groups: [
      {
        name: "Workspace",
        description:
          "Two long rows of workstations with orange, grey and white desk screens, under linear pendants and an open ceiling. Cabins sit behind black-framed glass along one side.",
        photos: [
          ["workstations", 1600, 1067, "EDF International office workstations with framed artwork, linear pendant lights and exposed ducting in Saket, New Delhi"],
          ["open-office", 1600, 1067, "EDF International open-plan office with orange-accented workstation screens under an exposed services ceiling"],
          ["work-area", 1600, 1067, "EDF International work area with timber slatted wall panel, printer station and indoor plants"],
          ["cabin", 1600, 1067, "EDF International glass-walled cabin with timber and black-metal shelving and a circular pendant light"],
        ],
      },
      {
        name: "Meeting & pantry",
        description:
          "A conference room with a long timber table and wall screen, and a pantry with a bar-height table, metal stools, black ladder shelving and an orange tiled counter wall.",
        photos: [
          ["conference-room", 1600, 1067, "EDF International conference room with a long timber table, black mesh chairs and a wall-mounted screen"],
          ["pantry", 1600, 1067, "EDF International pantry with a high timber bar table, metal stools and an orange accent wall"],
          ["pantry-shelving", 1066, 1600, "EDF International pantry with black-metal ladder shelving and cage pendant lights"],
          ["pendant-lights", 1600, 1067, "Black cage pendant light with exposed filament bulbs over the EDF International office entrance"],
        ],
      },
    ],
  },
  "hashtag-orange-gurugram": {
    overview:
      "Hashtag Orange's 1,300 sq ft corporate office on the 8th floor of Emaar Palm Spring Plaza, Golf Course Road, Gurugram, designed and built by Hagerstone in 2019: design, interiors, MEP services and furniture, completed within the client's 45-day timeline. It fits a surprising amount into a small floor plate: open workstations running to full-height windows, glass cabins, booth seating, a lounge and a pantry. Red exposed brick, rustic timber cladding and black dome pendants give it a warm, informal character to match the brand's orange.",
    specialFeatures: [
      "Booth seating set against a red exposed-brick wall",
      "Black dome pendants throughout the office",
      "Backlit logo on a rustic timber feature wall at the entrance",
      "Glass cabins with black frames beside the open workstations",
      "Pine-clad pantry with filament bulb lighting",
      "A bean-bag breakout corner on artificial grass by the windows",
    ],
    materials: [
      "Red exposed-brick wall cladding",
      "Rustic timber cladding",
      "Pine plank wall panelling in the pantry",
      "Wood-finish flooring",
      "Black-framed glass partitions",
      "Orange and white workstation screens",
    ],
    groups: [
      {
        name: "Workspace",
        description:
          "Workstations with orange and white screens run toward full-height windows with a view over the city. Black-framed glass cabins and a meeting room sit along the edge of the floor.",
        photos: [
          ["open-office", 1600, 1067, "Hashtag Orange open office in Gurugram with black dome pendant lights, timber flooring and glass-partitioned cabins"],
          ["workstations", 1600, 1067, "Hashtag Orange workstations with orange and white screens under an exposed ceiling"],
          ["workstations-city-view", 1600, 1067, "Hashtag Orange office workstations running to full-height windows with a city view"],
          ["cabins", 1600, 1069, "Hashtag Orange glass and black-framed cabins beside the open workstation area"],
        ],
      },
      {
        name: "Breakout & pantry",
        description:
          "Booth seating against red brick, a small lounge with a TV, a pine-clad pantry and a bean-bag corner by the windows give the team places to step away from their desks.",
        photos: [
          ["booth-seating", 1600, 1067, "Hashtag Orange booth seating against a red exposed-brick wall with timber tables"],
          ["lounge", 1067, 1600, "Hashtag Orange lounge with a grey sofa, orange cushions and a red brick feature wall"],
          ["pantry", 1067, 1600, "Hashtag Orange pantry with pine-clad walls, filament pendant lights and a timber dining table"],
          ["breakout", 1067, 1600, "Hashtag Orange breakout corner with orange bean bags beside floor-to-ceiling windows"],
        ],
      },
    ],
  },
  "imperial-malt-peb-gurugram": {
    overview:
      "A 1,500 sq ft single-storey office building for Imperial Malts in Sector 49, Gurugram, delivered by Hagerstone from structure to finished interior. The building is a pre-engineered steel structure on a raised plinth, with a cantilevered canopy over a railed verandah and access ramp. Inside, a director's cabin with a slatted timber-finish ceiling and full-wall storage, a rest room and an accessible washroom were fitted out along with the building's MEP and furniture.",
    specialFeatures: [
      "Pre-engineered steel structure on a raised plinth",
      "Cantilevered steel canopy over a railed verandah",
      "Access ramp with handrails",
      "Director's cabin with a slatted timber-finish ceiling feature",
      "Full-wall storage unit with open black display niches",
      "Accessible washroom with grab bars",
    ],
    materials: [
      "Pre-engineered steel frame and roof",
      "Flat wall cladding panels",
      "Timber-finish slatted ceiling panels",
      "Wood-finish flooring",
      "Wood-finish laminate storage and doors",
      "Marble-look wall cladding",
    ],
    groups: [
      {
        name: "The building",
        description:
          "The finished building: a single-storey steel structure with a light roof that cantilevers out over the verandah, steel columns and railings, and a ramp to the entrance.",
        photos: [
          ["exterior", 1409, 1600, "Imperial Malts single-storey pre-engineered office building in Sector 49, Gurugram, with a steel canopy and ramp"],
          ["exterior-side", 1600, 1066, "Side view of the Imperial Malts pre-engineered office building with its cantilevered steel roof"],
          ["exterior-night", 1600, 1067, "Imperial Malts pre-engineered office building lit at night under the trees"],
        ],
      },
      {
        name: "Interiors",
        description:
          "The director's cabin, with a slatted timber-finish ceiling, linear lighting and a full wall of storage, alongside a rest room and an accessible washroom.",
        photos: [
          ["director-cabin", 1600, 1067, "Imperial Malts director's cabin with a timber-slatted ceiling, display storage wall and a dark timber desk"],
          ["cabin", 1600, 1067, "Imperial Malts director's cabin seen from the entrance, with the full-wall storage unit and meeting chairs"],
          ["cabin-desk", 1067, 1600, "Imperial Malts director's cabin desk under the slatted timber-finish ceiling feature"],
          ["rest-room", 1600, 1067, "Imperial Malts rest room with a bed, sofa and timber flooring"],
          ["washroom", 1600, 1067, "Imperial Malts washroom with a wall-hung WC, grab bars and a timber vanity"],
        ],
      },
    ],
  },
  "inshorts-media-noida": {
    overview:
      "Renovation of Inshorts Media's office in Noida by Hagerstone. The floor mixes open team tables with a generous amount of social space: lounges, a library-style display wall, a curved glass meeting area, a cafeteria, a recreation room and a games room. An open black ceiling, a terracotta feature wall and warm wood-finish floors tie it together, with full-height glazing along the perimeter.",
    specialFeatures: [
      "Curved glass enclosure for an informal meeting area",
      "Swing chairs and lounge seating along the window line",
      "Freestanding white shelving wall used as a display library",
      "Games room with foosball and bean bags",
      "Recreation room with a TV wall and pouf seating",
      "Timber-panelled reception at the lift lobby",
    ],
    materials: [
      "Open ceiling painted black with exposed ducts",
      "Terracotta painted feature wall",
      "Wood-finish flooring with carpet-tile zones",
      "Frameless curved glass partitions",
      "Timber veneer wall panelling at reception",
    ],
    groups: [
      {
        name: "Lounges & breakout",
        description:
          "Lounges run along the glazed edge of the floor: armchairs in front of a terracotta wall, a white shelving library, swing chairs by the windows, and separate recreation and games rooms.",
        photos: [
          ["lounge", 1600, 1066, "Inshorts Media office lounge in Noida with armchairs, a terracotta feature wall and an exposed black ceiling"],
          ["library-lounge", 1600, 1066, "Inshorts Media lounge with white open shelving, bean bags and a view over the city"],
          ["breakout", 1600, 1066, "Inshorts Media breakout area with swing chairs and lounge seating by full-height glazing"],
          ["recreation", 1600, 1066, "Inshorts Media recreation room with yellow bean chairs, poufs and a TV wall"],
          ["games-room", 1066, 1600, "Inshorts Media games room with a foosball table and bean bags"],
        ],
      },
      {
        name: "Work & dining",
        description:
          "Team tables under linear lights, a curved glass meeting area with timber chairs, a cafeteria beside the windows and a timber-panelled reception at the lifts.",
        photos: [
          ["open-office", 1600, 1066, "Inshorts Media open-plan office with long team desks under linear lights"],
          ["glass-meeting-area", 1600, 1066, "Inshorts Media curved glass meeting area with timber chairs and round tables"],
          ["cafeteria", 1600, 1066, "Inshorts Media cafeteria with long tables and black chairs beside the windows"],
          ["reception", 1600, 1066, "Inshorts Media lift lobby and reception with timber wall panelling"],
        ],
      },
    ],
  },
  "medtronic-gurugram": {
    overview:
      "A 5,000 sq ft space for Medtronic in Gurugram, designed and built by Hagerstone to house training and demonstration rooms for medical equipment. The rooms are kept clean and bright — light floors, a grid ceiling and cove lighting — so the equipment is the focus, with a navy feature wall, a glazed viewing panel and backlit blue display shelving for the brand.",
    specialFeatures: [
      "Navy feature wall with a glazed viewing panel",
      "Backlit blue display shelving",
      "Cove lighting around the ceiling edge",
      "Floor service boxes for equipment power and data",
      "Open floor space sized for mobile equipment",
    ],
    materials: [
      "Grid ceiling tiles with linear AC grilles",
      "Light grey resilient flooring",
      "Navy painted feature wall",
      "Grey roller blinds",
    ],
    groups: [
      {
        name: "Training & demo rooms",
        description:
          "Open rooms with space to arrange equipment, display screens on mobile stands, floor service boxes, and a navy feature wall with a glazed panel into the next room.",
        photos: [
          ["demo-room", 1280, 960, "Medtronic demo room in Gurugram with a navy feature wall, glazed viewing panel and medical equipment"],
          ["equipment-bay", 1280, 1055, "Medtronic equipment bay with medical systems arranged along a grey wall and floor service boxes"],
          ["training-room", 1280, 960, "Medtronic training room with a grid ceiling, display screens and equipment stations"],
          ["training-room-wide", 1280, 960, "Wide view of the Medtronic training room with blue backlit wall panels"],
          ["display-wall", 1280, 960, "Medtronic room with backlit blue display shelving and mobile screens"],
        ],
      },
    ],
  },
  "sp-infocity-gurugram": {
    overview:
      "Design and build across 10,000 sq ft of common areas at SP Infocity, a commercial building in Gurugram. The double-height lobby was given patterned art panels, a vertical garden, a black stone signage wall and lounge seating on a blue carpet inlay. Waiting and meeting areas carry large murals and a glass meeting pod, and the central courtyard was turned into an outdoor café with timber pergolas and patterned paving.",
    specialFeatures: [
      "Double-height lobby with a wall of patterned art panels",
      "Vertical garden alongside the lobby staircase",
      "Hexagonal glass meeting pod with a frosted chevron pattern",
      "Large-format murals in the waiting areas",
      "Courtyard café with timber pergolas and hanging planters",
    ],
    materials: [
      "Terrazzo flooring",
      "Blue carpet-tile inlays",
      "Black stone signage wall",
      "Printed art panels",
      "Frameless glass with frosted graphic film",
      "Timber pergolas and patterned cement-look paving tiles",
    ],
    groups: [
      {
        name: "Lobby",
        description:
          "The double-height entrance lobby: art panels, a green wall by the staircase, sofas on a blue carpet inlay, and waiting areas with skyline murals.",
        photos: [
          ["lobby-lounge", 1600, 1067, "SP Infocity lobby lounge in Gurugram with patterned art panels, leather sofas and a blue carpet"],
          ["lobby", 1600, 1067, "SP Infocity double-height lobby with a green wall, sofas and a feature staircase"],
          ["entrance-steps", 1600, 1067, "SP Infocity entrance steps with the building signage wall and vertical garden"],
          ["waiting-area", 1600, 1067, "SP Infocity waiting area with a city skyline mural and patterned armchairs"],
          ["corridor-lounge", 1600, 1067, "SP Infocity corridor lounge with a bridge mural and upholstered seating"],
        ],
      },
      {
        name: "Meeting areas",
        description:
          "A meeting table against a patterned mural wall, and a hexagonal glass pod screened with a frosted chevron film.",
        photos: [
          ["meeting-area", 1600, 1067, "SP Infocity meeting area with a patterned mural wall and a white table"],
          ["glass-meeting-pod", 1600, 1067, "SP Infocity hexagonal glass meeting pod with a frosted chevron pattern"],
        ],
      },
      {
        name: "Courtyard",
        description:
          "The central courtyard as an outdoor café: timber pergolas with hanging planters, patterned paving, and a mix of wicker and colourful outdoor chairs.",
        photos: [
          ["courtyard-pergola", 1600, 1067, "SP Infocity courtyard with timber pergolas, patterned paving and outdoor seating"],
          ["courtyard-seating", 1600, 1067, "SP Infocity courtyard seating under a timber pergola"],
          ["courtyard-cafe", 1600, 1067, "SP Infocity courtyard café tables beneath a pergola with hanging plants"],
        ],
      },
    ],
  },
  "takenaka-hq-gurugram": {
    overview:
      "Turnkey interiors for Takenaka's 2,000 sq ft head office in Gurugram. The office is bright and practical: workstation clusters divided by low open storage, a conference room and two meeting rooms, finished in light blue and lime green with yellow curtains. Linear pendant lights run over the open office, and the meeting rooms have circular cove ceilings.",
    specialFeatures: [
      "Workstation clusters divided by low open storage units",
      "Circular cove ceilings with round lights in the meeting rooms",
      "Linear suspended lighting over the open office",
      "Lime green accent walls and yellow curtains",
      "Whiteboard walls in the work and meeting areas",
    ],
    materials: [
      "Light wood-finish laminate desks and storage",
      "Grey checkerboard carpet tiles",
      "Painted exposed ceiling services",
      "Grid ceiling in the small meeting room",
    ],
    groups: [
      {
        name: "Office",
        description:
          "Workstation clusters separated by low storage, under linear pendants, with light blue walls, lime green accents and yellow curtains.",
        photos: [
          ["workstations", 1600, 1067, "Takenaka head office in Gurugram with timber workstations, storage units and a green accent wall"],
          ["open-office", 1600, 1067, "Takenaka open office with yellow curtains, whiteboards and linear lighting"],
        ],
      },
      {
        name: "Meeting rooms",
        description:
          "A conference room and a meeting room with circular cove ceilings and green feature walls, and a smaller meeting room with a whiteboard.",
        photos: [
          ["conference-room", 1600, 1067, "Takenaka conference room with a green feature wall and a circular cove ceiling"],
          ["meeting-room", 1600, 1067, "Takenaka meeting room with a long table and a circular ceiling light"],
          ["small-meeting-room", 1600, 1067, "Takenaka small meeting room with a whiteboard and colourful artwork"],
        ],
      },
    ],
  },
  "trunkhouse-mumbai": {
    overview:
      "A 1,000 sq ft Trunkhouse luggage store in Mumbai, designed and built by Hagerstone for Beauty Impex. The store is laid out as a bright, boutique-style space: rose-gold metal display frames and backlit niches line the walls, luggage sits on white plinths down the middle, and a marble-topped cash counter faces the entrance under a chandelier.",
    specialFeatures: [
      "Rose-gold metal display frames on every wall",
      "Backlit display niches and a backlit logo wall",
      "Marble-topped cash counter with a fluted timber base",
      "Diamond-pattern floor inlay",
      "Glazed shopfront with illuminated letter signage",
    ],
    materials: [
      "Rose-gold finish metal shelving frames",
      "Marble-finish counter top",
      "Fluted timber panelling",
      "Patterned marble-look floor",
      "Glass shopfront",
    ],
    groups: [
      {
        name: "Store",
        description:
          "The shopfront and the shop floor: rose-gold display frames, luggage on white plinths, armchairs for customers and a marble-topped cash counter.",
        photos: [
          ["store-interior", 1024, 558, "Trunkhouse luggage store in Mumbai with rose-gold shelving, green armchairs and patterned flooring"],
          ["shopfront-glazing", 1024, 684, "Trunkhouse glazed shopfront with illuminated signage and display shelving inside"],
          ["cash-counter", 1028, 776, "Trunkhouse cash counter with a marble top and backlit logo wall"],
          ["luggage-display", 539, 768, "Trunkhouse luggage display on white plinths beside rose-gold shelving"],
        ],
      },
    ],
  },
  "yanmar-engine-factory-chennai": {
    overview:
      "Office interiors across 50,000 sq ft at the Yanmar engine factory in Ponneri, Tamil Nadu, north of Chennai, delivered by Hagerstone with Takenaka as main contractor. The photos, taken at handover, show large open-plan office floors with workstation clusters, a double-height lobby with a ring pendant and a curved red bench, and a red feature staircase framed by black glazing.",
    specialFeatures: [
      "Double-height lobby with a large ring pendant",
      "Curved red bench wrapped around a black feature wall with a screen",
      "Red feature staircase with steel handrails",
      "Black-framed internal glazing overlooking the lobby",
      "Red carpet runners marking circulation routes",
    ],
    materials: [
      "Grid ceiling with LED panels and cassette AC units",
      "Carpet tiles in the office areas",
      "Wood-finish flooring in the corridors",
      "Dark stone-look floor tiles in the lobby",
      "Black-framed glass partitions",
    ],
    groups: [
      {
        name: "Office floors",
        description:
          "Open office floors with rows of workstation clusters under a grid ceiling, and the double-height lobby with its red bench and ring pendant.",
        photos: [
          ["workstations", 867, 948, "Yanmar engine factory office in Ponneri with rows of workstations under a grid ceiling"],
          ["open-office", 867, 948, "Yanmar factory open office with a red carpet runner and workstation clusters"],
          ["reception", 867, 948, "Yanmar factory double-height lobby with a ring pendant, black feature wall and curved red bench"],
        ],
      },
      {
        name: "Circulation",
        description:
          "The red feature staircase, black-framed glazing looking into the double-height space, and a wide corridor with wood-finish flooring.",
        photos: [
          ["feature-staircase", 867, 948, "Yanmar factory red feature staircase with black-framed glazing"],
          ["double-height-glazing", 867, 948, "Double-height space at the Yanmar factory with a black-framed glazed opening"],
          ["corridor", 867, 948, "Yanmar factory corridor with wood-finish flooring and glazed partitions"],
        ],
      },
    ],
  },
};

// Overviews for the jobs without photos. Each opens with the answer (who, what,
// how big, where, when) so search and answer engines can lift it as a snippet,
// then adds the local context and what the scope of work involves. Facts come
// only from the sheet, the client's public identity and the locality — nothing
// about materials, features or timelines, which only the site team can supply.
const OVERVIEWS: Record<string, string> = {
  "psv-urbana-gurugram":
    "Hagerstone International delivered turnkey interiors across 30,000 sq ft for PSV Urbana in Gurugram between 2019 and 2021, and followed it with a separate office furniture supply package for the same client. A turnkey interior fit-out of this size puts design, civil and interior works, MEP coordination and furnishing under one contractor, so the client deals with a single team from layout to handover. It is one of the largest commercial interior projects on Hagerstone's Gurugram record.",
  "panasonic-life-solutions-sri-city":
    "Hagerstone International carried out interior works across 2,00,000 sq ft for Panasonic Life Solutions in Sri City, Andhra Pradesh, working with Takenaka as main contractor between 2019 and 2021. Sri City is an integrated industrial and business city on the Andhra Pradesh–Tamil Nadu border, home to manufacturing plants of many Japanese and global companies. At two lakh square feet, this is the largest job on Hagerstone's 2019–2021 record, and it shows the team's capacity to deliver industrial interiors at factory scale alongside a Japanese general contractor.",
  "oceaneering-chandigarh":
    "Hagerstone International designed and built a 20,000 sq ft office for Oceaneering in Chandigarh between 2019 and 2021. Oceaneering is a global engineering and technology company serving the offshore energy industry. Under a design and build contract, one team takes the office from space planning and interior design through MEP coordination, procurement and site execution to handover — the model Hagerstone uses for corporate office fit-outs across North India, from Chandigarh and the Tricity to Delhi NCR.",
  "el-corte-ingles-gurugram":
    "Hagerstone International designed and built a 20,000 sq ft office for El Corte Inglés, the Spanish department store group, in Gurugram between 2019 and 2021. Gurugram is Delhi NCR's leading corporate market, where international companies expect a fit-out partner that can handle design, approvals, services and furniture in one contract. As a design and build project, Hagerstone was responsible for the office from concept layout to a ready-to-occupy workspace.",
  "byredo-showroom-mumbai":
    "Hagerstone International designed and built a 1,000 sq ft Byredo showroom in Mumbai for Beauty Impex between 2019 and 2021. Byredo is a Stockholm-based luxury fragrance and lifestyle brand, and a showroom for a brand at this level is judged on detail: display, lighting and finish all carry the brand. It is one of two Mumbai retail projects Hagerstone delivered for Beauty Impex in this period, alongside the Trunkhouse luggage store.",
  "bcg-gurugram-fire-fighting":
    "Hagerstone International carried out fire-fighting works at the Gurugram office of BCG (Boston Consulting Group), the global management consulting firm, between 2019 and 2021. Fire protection in an occupied corporate office has to be installed around live operations and coordinated with the building's existing services. The job sits within Hagerstone's MEP practice, which covers fire-fighting, electrical, HVAC and plumbing systems for commercial interiors across Delhi NCR.",
  "renesas-electronics-jasola":
    "Hagerstone International designed and built a 3,000 sq ft office for Renesas Electronics, the Japanese semiconductor company, in Jasola, New Delhi, between 2019 and 2021. Jasola District Centre in South Delhi is a commercial office hub with good connections to Noida and central Delhi. For an office of this size, design and build gives the client one accountable team for layout, interiors, services and furniture, and a single programme to handover.",
  "tidong-power-shimla":
    "Hagerstone International designed and built a 500 sq ft office for Tidong Power in Shimla, Himachal Pradesh, between 2019 and 2021, serving its hydropower project. Shimla is Himachal's capital, and working in a hill city means planning around steep sites, restricted access and a cold climate. The project shows Hagerstone delivering design and build work well beyond Delhi NCR, into the hill states of North India.",
  "piya-facility-management-gurugram":
    "Hagerstone International supplied office furniture to Piya Facility Management in Gurugram between 2019 and 2021. Commercial furniture supply covers selecting, sourcing and installing workstations, seating and storage to suit a floor plan, and is often bought separately from the interior fit-out. Hagerstone offers furniture both as a standalone package and as part of its turnkey office interiors in Delhi NCR.",
  "lexir-resources-gurugram":
    "Hagerstone International designed and built a 10,000 sq ft office for Lexir Resources in Gurugram between 2019 and 2021. A mid-size corporate office like this is where design and build pays off most: one team plans the layout, designs the interiors, coordinates MEP services and delivers the fit-out, so the client has a single point of responsibility. Gurugram is Hagerstone's busiest market, with more than twenty projects on its 2019–2021 record.",
  "alps-electric-gurugram":
    "Hagerstone International carried out office renovation works for Alps Electric, the Japanese electronic components maker, in Gurugram between 2019 and 2021. Renovating a working office means sequencing the works so the business keeps running around them. Hagerstone's office renovation and refurbishment work in Gurugram ranges from small upgrades like this to full floor refits.",
  "srp-and-company-pitampura":
    "Hagerstone International designed and built the 1,000 sq ft office of SRP & Company, a firm of chartered accountants, at Netaji Subhash Place, Pitampura, Delhi, in 2021. The scope covered interior design and turnkey interior works, including MEP — electrical, HVAC, plumbing and fire-fighting — and furniture. In its letter of appreciation, the firm confirmed the whole project was completed in 60 days. For a small professional office, design and build puts one team in charge of the design and its delivery.",
  "dorient-solutions-pitampura":
    "Hagerstone International designed and built a 2,500 sq ft office for Dorient Solutions in Pitampura, Delhi, between 2019 and 2021. Pitampura in North-West Delhi is an established business district for small and mid-size companies. Under design and build, Hagerstone took the office from space planning and interior design through services and execution to a finished workspace.",
  "mpkupl-jalna":
    "Hagerstone International carried out civil and interior works across 20,000 sq ft for MPKUPL in Jalna, Maharashtra, between 2019 and 2021. Jalna is an industrial centre in the Marathwada region. Combining civil construction and interiors in one contract lets a single team build the shell and finish the inside to one programme — the integrated approach Hagerstone takes on industrial and commercial projects across India.",
  "airtel-raipur":
    "Hagerstone International delivered turnkey interiors for Airtel's 5,000 sq ft office in Raipur, Chhattisgarh, between 2019 and 2021. Airtel is one of India's largest telecom companies, and Raipur is the capital of Chhattisgarh. A turnkey office fit-out hands one contractor the whole job — design, civil and interior works, services and furniture — which suits national companies setting up regional offices away from their head office.",
  "monin-chhatarpur":
    "Hagerstone International delivered turnkey interiors across 5,000 sq ft for Monin in Chhatarpur, New Delhi, between 2019 and 2021. Chhatarpur in South Delhi sits close to the Mehrauli–Gurugram Road corridor. On a turnkey interior project Hagerstone takes single-point responsibility for design, civil and interior works, MEP coordination and furniture, handing the space over ready to use.",
  "french-embassy-chanakyapuri":
    "Hagerstone International delivered turnkey interiors across 750 sq ft at the French Embassy in Chanakyapuri, New Delhi, between 2019 and 2021. Chanakyapuri is New Delhi's diplomatic enclave, and work inside an embassy comes with strict security, access and quality requirements. The project is part of Hagerstone's record of interiors for international organisations in Delhi, alongside airline offices at IGI Airport and multinational corporate offices.",
  "aecom-gurugram":
    "Hagerstone International carried out office renovation works for AECOM, the global infrastructure consulting firm, in Gurugram between 2019 and 2021. Refurbishing an occupied corporate office calls for careful phasing, clean working and clear coordination with facility managers. Hagerstone's renovation work sits alongside its full design and build fit-outs for multinational offices in Gurugram.",
  "darcl-gurugram":
    "Hagerstone International supplied office furniture to DARCL, the logistics company, in Gurugram between 2019 and 2021. Commercial furniture supply covers selecting, sourcing and installing workstations, seating and storage to suit the office layout. Hagerstone offers furniture as a standalone package or as part of a turnkey office interior project across Delhi NCR.",
  "priya-complex-basant-lok":
    "Hagerstone International designed and built a 700 sq ft space at Priya Complex, Basant Lok, New Delhi, between 2019 and 2021. Basant Lok is a commercial market in Vasant Vihar, South Delhi. Compact commercial spaces need careful planning to fit their brief, and design and build gives the owner one team responsible for both the design and the finished space.",
  "bunge-india-janakpuri":
    "Hagerstone International supplied office furniture to Bunge India, part of the global agribusiness and food company, at its Janakpuri office in West Delhi between 2019 and 2021. Commercial furniture supply covers selecting, sourcing and installing workstations, seating and storage to suit the office. Hagerstone supplies furniture on its own or as part of a turnkey office interior project across Delhi NCR.",
  "india-accelerator-gurugram":
    "Hagerstone International provided interior design, without execution, for India Accelerator, the startup accelerator, in Gurugram between 2019 and 2021. A design-only commission delivers the layout and interior design for the client to build with a contractor of their choice. Hagerstone offers interior design on its own as well as through full design and build, for offices, coworking spaces and startup hubs.",
  "gih-gurugram":
    "Hagerstone International supplied lighting to the Global Infrastructure Hub (GIH) in Gurugram between 2019 and 2021. Lighting supply means selecting and sourcing light fittings to suit the space and its design, and is often bought separately from the fit-out. Hagerstone handles lighting as a standalone package or within its electrical and turnkey interior works in Delhi NCR.",
  "beebay-kids-gurugram":
    "Hagerstone International supplied lighting to Beebay Kids in Gurugram between 2019 and 2021. Lighting supply means selecting and sourcing light fittings to suit the space, and is often bought separately from the interior fit-out. Hagerstone provides lighting as a standalone package or as part of its turnkey interiors in Delhi NCR.",
  "arcon-peb-noida":
    "Hagerstone International carried out pre-engineered building (PEB) structure work across 15,000 sq ft for Arcon in Noida between 2019 and 2021. A pre-engineered building uses a steel frame fabricated off site and bolted together on site, which makes it faster to build than conventional construction and well suited to factories, warehouses and industrial sheds. PEB construction is one of Hagerstone's six service lines, alongside interiors, MEP, facades, civil and hospitality.",
  "seismic-solution-noida":
    "Hagerstone International supplied office furniture to Seismic Solution in Noida between 2019 and 2021. Commercial furniture supply covers selecting, sourcing and installing workstations, seating and storage to suit the office layout. Noida is Hagerstone's home market — its head office is in Sector 2 — and furniture is available as a standalone package or within a turnkey fit-out.",
  "hermes-exhibition-stand-delhi-airport":
    "Hagerstone International built an exhibition stand for Hermès, the French luxury house, at Terminal 3 of Delhi's Indira Gandhi International Airport between 2019 and 2021. Work at T3 means security clearance, restricted hours and a finish good enough for one of the world's most exacting luxury brands. The job is part of Hagerstone's airport record, alongside renovation work for Lufthansa and Singapore Airlines at the same terminal.",
  "movietime-cinemas-hyderabad":
    "Hagerstone International delivered turnkey interiors across 5,000 sq ft for MovieTime Cinemas in Hyderabad, Telangana, between 2019 and 2021. Cinema interiors bring their own demands — acoustics, seating, lighting and the movement of crowds — on top of a standard commercial fit-out. As a turnkey project, Hagerstone was responsible for the interiors from design through to handover.",
  "gls-infra-gurugram":
    "Hagerstone International delivered three design and build fit-outs for GLS Infra in Gurugram between 2019 and 2021, of 3,000, 2,000 and 1,000 sq ft — 6,000 sq ft in total. Three separate commissions from one client is the strongest endorsement a fit-out contractor can get. Under design and build, Hagerstone took each space from layout and interior design through services and execution to handover.",
  "salcon-saket":
    "Hagerstone International carried out tiling work for Salcon in Saket, New Delhi, between 2019 and 2021. Saket is one of South Delhi's main commercial and retail districts. Tiling is part of Hagerstone's civil and finishing works, which it takes on as standalone packages as well as within full interior fit-outs.",
  "lufthansa-delhi-airport":
    "Hagerstone International carried out renovation work for Lufthansa, the German airline, at Terminal 3 of Delhi's Indira Gandhi International Airport between 2019 and 2021. Renovating inside a working international terminal means security clearance, limited working hours and no disruption to passengers. Hagerstone completed similar work for Singapore Airlines at the same terminal.",
  "singapore-airlines-delhi-airport":
    "Hagerstone International carried out renovation work for Singapore Airlines at Terminal 3 of Delhi's Indira Gandhi International Airport between 2019 and 2021. Work inside an operating international terminal is done under airport security, in restricted hours and without disturbing passengers. The job is one of three Hagerstone projects at T3 in this period, with Lufthansa and Hermès.",
  "nippon-steel-saket":
    "Hagerstone International carried out maintenance work at Nippon Steel's office in Saket, New Delhi, between 2019 and 2021. Nippon Steel is Japan's largest steelmaker. Office maintenance keeps interiors and services in working order after handover, and is a common way for corporate clients to keep one trusted contractor on call.",
  "smcc-saket":
    "Hagerstone International carried out maintenance work at the Saket, New Delhi office of SMCC Construction India, part of the Japanese Sumitomo Mitsui Construction group, between 2019 and 2021. Saket is one of South Delhi's main commercial districts. Maintenance contracts keep office interiors and services in good order after handover, with one contractor responsible for repairs and upkeep.",
  "aipl-joy-street-gurugram":
    "Hagerstone International carried out interior works across 12,000 sq ft at AIPL Joy Street in Gurugram between 2019 and 2021. AIPL Joy Street is a retail and commercial destination in Gurugram, where interiors have to stand up to heavy footfall and present well to shoppers and tenants. At 12,000 sq ft, it is one of the larger commercial interior projects on Hagerstone's Gurugram record.",
  "pp-trade-centre-pitampura":
    "Hagerstone International designed and built a 1,000 sq ft space at PP Trade Centre in Pitampura, Delhi, between 2019 and 2021. Pitampura's commercial district in North-West Delhi is home to many small businesses in compact commercial units. Design and build gives the owner one team accountable for planning the space, designing the interior and delivering it ready to use.",
  "hindusthan-connaught-place":
    "Hagerstone International delivered turnkey interiors across 5,000 sq ft for Hindusthan in Connaught Place, New Delhi, between 2019 and 2021. Connaught Place is Delhi's historic central business district, where refitting space in older buildings needs care with existing structure and services. On a turnkey project Hagerstone takes single-point responsibility for design, civil and interior works, services and furniture.",
  "revolve-noida":
    "Hagerstone International designed and built Revolve Softech's 1,000 sq ft office at Spring Meadows Business Park, Sector 63, Noida, in 2021. The scope covered interior design and turnkey interior works, including MEP — electrical, HVAC, plumbing and fire-fighting — and furniture, and the client's letter of appreciation confirms the entire job was completed in a 60-day timeline. Sector 63 sits in Noida's IT and electronics corridor, close to Hagerstone's own head office in Sector 2.",
  "private-residence-gurugram":
    "Hagerstone International carried out residential work across a 2,500 sq ft private home in Gurugram between 2019 and 2021. Residential interiors call for the same planning and site discipline as commercial work, with the added care of working in a family's home. Hagerstone takes on selected residential projects in Delhi NCR alongside its commercial and industrial portfolio.",
};

const photoSections = (id: string): ProjectSection[] =>
  (PHOTOS[id]?.groups ?? []).map((group) => ({
    name: group.name,
    description: group.description,
    images: group.photos.map(([file, width, height, alt]) => ({
      src: `/projects/${id}/${file}.webp`,
      alt,
      width,
      height,
    })),
  }));

// Photographed jobs first, so the listing doesn't open on a run of text-only cards.
const byPhotosFirst = (a: ProjectData, b: ProjectData) => Number(!a.hero) - Number(!b.hero);

export const worksDone2019Projects: ProjectData[] = rows.map((row): ProjectData => {
  const sections = row.sections ?? photoSections(row.id);
  const hero = sections[0]?.images?.[0];
  return {
    id: row.id,
    title: row.title,
    client: row.client,
    year: row.year ?? PERIOD,
    duration: row.duration,
    location: row.location,
    sector: row.sector,
    area: row.area,
    status: "Completed",
    hero: row.hero ?? hero?.src,
    heroAlt: row.heroAlt ?? hero?.alt,
    summary: row.summary,
    excerpt: row.summary,
    overview: PHOTOS[row.id]?.overview ?? OVERVIEWS[row.id],
    scope: row.scope,
    specialFeatures: PHOTOS[row.id]?.specialFeatures,
    materials: PHOTOS[row.id]?.materials,
    metaTitle: row.metaTitle,
    metaDescription: `${row.summary} Delivered by Hagerstone International between 2019 and 2021.`,
    sections,
  };
}).sort(byPhotosFirst);
