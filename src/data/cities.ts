// City dataset for programmatic local-SEO pages.
//
// Each city carries genuinely unique local context (business districts, a
// market note, and REAL Hagerstone projects delivered in/near the city, read
// from the CPS system + on-site project pages). This is what keeps service×city
// pages from being thin "doorway" pages — every page states real local proof.
//
// `published` gates phased rollout. Flip to `true` (and publish the relevant
// services in localServices.ts) to take a city live.

export interface CityProject {
  /** Display name of the project / client. */
  name: string;
  /** Short qualifier — sector, locality, or project type. */
  detail?: string;
  /** Slug of an on-site /projects/:slug detail page, if one exists. */
  slug?: string;
}

/**
 * The statutory bodies a commercial project in this city actually deals with.
 *
 * Deliberately administrative rather than engineering. These are public,
 * checkable facts — who issues the fire NOC, who supplies power, which
 * development authority approves the building — and they genuinely differ city
 * to city, which is what stops a location page reading as a template with the
 * name swapped.
 *
 * Code-derived values (IS 875 wind speed, IS 1893 seismic zone) are
 * deliberately NOT here. Published sources disagree on them by enough to change
 * a facade design, and a wrong structural figure on an engineering firm's site
 * is worse than none. Add them only from the codes themselves, signed off
 * internally.
 *
 * Every field is optional — a row renders only when it is filled, so a city
 * with a partially confirmed set is still publishable.
 */
export interface LocalAuthorities {
  /** Development / urban planning authority, e.g. "GMDA & HSVP". */
  development?: string;
  /** Municipal body, e.g. "Municipal Corporation Gurugram (MCG)". */
  municipal?: string;
  /** Industrial estate authority where one governs the industrial belt. */
  industrial?: string;
  /** Fire NOC issuing authority. */
  fireNoc?: string;
  /** Electricity distribution company. */
  discom?: string;
  /** State pollution control board. */
  pollution?: string;
  /** Building bye-laws that apply. */
  byeLaws?: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  region: "NCR" | "North India" | "West India" | "South India";
  tier: 1 | 2 | 3;
  published: boolean;
  /** Statutory bodies for commercial projects here. */
  authorities?: LocalAuthorities;
  /** Named business/industrial hubs used in the local-context section. */
  districts: string[];
  /** Slugs of nearby cities for internal linking. */
  nearbyCitySlugs: string[];
  /** One-paragraph, city-specific market context (unique per city). */
  marketNote: string;
  /** Real Hagerstone projects delivered in or near this city. */
  projects: CityProject[];
}

export const cities: City[] = [
  {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    stateSlug: "haryana",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "Gurugram Metropolitan Development Authority (GMDA) & HSVP",
      municipal: "Municipal Corporation Gurugram (MCG)",
      industrial: "HSIIDC — for IMT Manesar and industrial estates",
      fireNoc: "Haryana Fire & Emergency Services",
      discom: "DHBVN — Dakshin Haryana Bijli Vitran Nigam",
      pollution: "Haryana State Pollution Control Board (HSPCB)",
      byeLaws: "Haryana Building Code",
    },
    districts: ["Cyber City", "Udyog Vihar", "Golf Course Road", "Sohna Road", "MG Road", "Sector 79"],
    nearbyCitySlugs: ["delhi", "faridabad", "noida"],
    marketNote:
      "Gurugram is Delhi NCR's densest corporate market — home to Fortune 500 India headquarters across Cyber City, Golf Course Road, and the Udyog Vihar belt. Grade-A office demand here rewards fast, coordinated fit-outs that keep pace with tight commercial handover deadlines.",
    projects: [
      { name: "M3M", detail: "Sector 79 commercial development" },
      { name: "Bansal Tower Co-Working Space", detail: "Co-working fit-out", slug: "bansaltower" },
      { name: "Revolve Technologies Office", detail: "Software company office", slug: "revolve" },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "New Okhla Industrial Development Authority (Noida Authority)",
      fireNoc: "Uttar Pradesh Fire & Emergency Services",
      discom: "PVVNL — Paschimanchal Vidyut Vitran Nigam",
      pollution: "Uttar Pradesh Pollution Control Board (UPPCB)",
      byeLaws: "Noida Building Regulations & Directions",
    },
    districts: ["Sector 62 IT Hub", "Sector 63", "Film City (Sector 16)", "Noida Expressway", "Sector 2"],
    nearbyCitySlugs: ["greater-noida", "delhi", "ghaziabad"],
    marketNote:
      "Noida is Hagerstone's home market — our head office sits in Sector 2. The city's IT and electronics corridor along Sectors 62–63 and the Expressway drives steady demand for corporate interiors, showrooms, and industrial facilities, all within our fastest response radius.",
    projects: [
      { name: "Hagerstone International HQ", detail: "Sector 2 head office" },
      { name: "VinFast", detail: "Sector 63 showroom & office" },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    stateSlug: "delhi",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "Delhi Development Authority (DDA)",
      municipal: "MCD, and NDMC in the New Delhi area",
      fireNoc: "Delhi Fire Service (DFS)",
      discom: "BSES Rajdhani, BSES Yamuna and Tata Power-DDL, by area",
      pollution: "Delhi Pollution Control Committee (DPCC)",
      byeLaws: "Unified Building Bye-Laws for Delhi",
    },
    districts: ["Connaught Place", "Nehru Place", "Saket", "Aerocity", "Okhla", "Rangpuri"],
    nearbyCitySlugs: ["noida", "gurugram", "faridabad"],
    marketNote:
      "Delhi blends legacy commercial districts like Connaught Place and Nehru Place with premium new-economy hubs around Saket and Aerocity. Projects here range from heritage-sensitive refurbishments to high-spec corporate and healthcare interiors on constrained, high-footfall sites.",
    projects: [
      { name: "Max Hospital", detail: "Saket — healthcare interiors" },
      { name: "Sael", detail: "Aerocity / IGI corporate office" },
      { name: "Western Green", detail: "Rangpuri" },
      { name: "MicroSave Consulting (MSC)", detail: "Corporate office", slug: "microsave" },
    ],
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 1,
    published: true,
    authorities: {
      development: "Greater Ludhiana Area Development Authority (GLADA)",
      municipal: "Municipal Corporation Ludhiana",
      industrial: "PSIEC — Punjab Small Industries & Export Corporation, for the Focal Point estates",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["Focal Point", "Industrial Area A/B/C", "Gill Road", "Birmi"],
    nearbyCitySlugs: ["chandigarh", "zirakpur", "jaipur"],
    marketNote:
      "Ludhiana is Punjab's industrial engine — a manufacturing and pharma hub where factory-adjacent admin blocks, canteens, and corporate offices demand robust, compliance-ready builds. Hagerstone has delivered pharma and realty projects across the Focal Point industrial belt.",
    projects: [
      { name: "Consern Pharma Limited", detail: "Focal Point, Tibba" },
      { name: "Hero Homes Realty", detail: "Birmi" },
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    tier: 1,
    published: true,
    authorities: {
      development: "Jaipur Development Authority (JDA)",
      municipal: "Jaipur Municipal Corporation (Greater & Heritage)",
      industrial: "RIICO — for Sitapura and Vishwakarma industrial areas",
      fireNoc: "Rajasthan Fire & Emergency Services",
      discom: "JVVNL — Jaipur Vidyut Vitran Nigam",
      pollution: "Rajasthan State Pollution Control Board (RSPCB)",
      byeLaws: "Rajasthan Building Bye-Laws",
    },
    districts: ["Sitapura Industrial Area", "Malviya Nagar", "C-Scheme", "Mansarovar", "Vishwakarma Industrial Area"],
    nearbyCitySlugs: ["kota", "delhi", "gurugram"],
    marketNote:
      "Jaipur pairs a fast-growing services economy in Malviya Nagar and C-Scheme with the Sitapura and Vishwakarma industrial belts. Retail showrooms, automobile spaces, and corporate offices here need design that reads as premium while surviving Rajasthan's heat and dust loads.",
    projects: [
      { name: "VinFast Jaipur", detail: "EV showroom" },
      { name: "VinFast EV Showroom", detail: "Showroom & parking", slug: "vinfast-showroom" },
    ],
  },

  // ---- Tier-1 proof cities staged for Phase 2 (data ready, not yet published) ----
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    stateSlug: "haryana",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "Faridabad Metropolitan Development Authority (FMDA) & HSVP",
      municipal: "Municipal Corporation Faridabad (MCF)",
      industrial: "HSIIDC",
      fireNoc: "Haryana Fire & Emergency Services",
      discom: "DHBVN — Dakshin Haryana Bijli Vitran Nigam",
      pollution: "Haryana State Pollution Control Board (HSPCB)",
      byeLaws: "Haryana Building Code",
    },
    districts: ["Industrial Area Sectors 24–25", "Ballabgarh", "Neelam Bata Road"],
    nearbyCitySlugs: ["delhi", "gurugram", "noida"],
    marketNote:
      "Faridabad is NCR's manufacturing belt, with a dense mix of industrial units and supporting corporate offices across its numbered industrial sectors.",
    projects: [{ name: "Dee Foundation", detail: "Corporate project" }],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "Greater Noida Industrial Development Authority (GNIDA)",
      fireNoc: "Uttar Pradesh Fire & Emergency Services",
      discom: "NPCL — Noida Power Company Limited",
      pollution: "Uttar Pradesh Pollution Control Board (UPPCB)",
      byeLaws: "Greater Noida Building Regulations",
    },
    districts: ["Knowledge Park", "Surajpur Industrial Area", "Tech Zone", "Pari Chowk"],
    nearbyCitySlugs: ["noida", "ghaziabad", "delhi"],
    marketNote:
      "Greater Noida combines large-format industrial and institutional plots with new residential-led commercial demand around Pari Chowk and the Knowledge Park corridor.",
    projects: [{ name: "Hero Homes MU", detail: "Realty project" }],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "NCR",
    tier: 1,
    published: true,
    authorities: {
      development: "Ghaziabad Development Authority (GDA)",
      municipal: "Municipal Corporation Ghaziabad",
      industrial: "UPSIDA — for the Sahibabad industrial area",
      fireNoc: "Uttar Pradesh Fire & Emergency Services",
      discom: "PVVNL — Paschimanchal Vidyut Vitran Nigam",
      pollution: "Uttar Pradesh Pollution Control Board (UPPCB)",
      byeLaws: "Uttar Pradesh Building Bye-Laws",
    },
    districts: ["Sahibabad Industrial Area", "Indirapuram", "Raj Nagar Extension"],
    nearbyCitySlugs: ["noida", "greater-noida", "delhi"],
    marketNote:
      "Ghaziabad anchors NCR's eastern industrial corridor, with the Sahibabad belt and fast-growing commercial nodes at Indirapuram and Raj Nagar.",
    projects: [{ name: "VinFast Ghaziabad", detail: "Showroom" }],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    region: "North India",
    tier: 1,
    published: true,
    authorities: {
      development: "Chandigarh Administration — Department of Urban Planning",
      municipal: "Municipal Corporation Chandigarh",
      fireNoc: "Chandigarh Fire & Emergency Services",
      discom: "Chandigarh Electricity Department",
      pollution: "Chandigarh Pollution Control Committee (CPCC)",
      byeLaws: "Chandigarh Building Rules",
    },
    districts: ["Sector 17", "IT Park (Rajiv Gandhi Technology Park)", "Industrial Area Phase 1/2"],
    nearbyCitySlugs: ["zirakpur", "ludhiana", "jaipur"],
    marketNote:
      "Chandigarh's planned grid and its IT Park make it North India's most design-conscious commercial market, spanning Sector 17 retail and the Tricity's growing tech offices.",
    projects: [{ name: "Koko Town", detail: "Sector 17" }],
  },
  {
    slug: "kota",
    name: "Kota",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      development: "Kota Development Authority (KDA)",
      municipal: "Kota Municipal Corporation",
      industrial: "RIICO",
      fireNoc: "Rajasthan Fire & Emergency Services",
      pollution: "Rajasthan State Pollution Control Board (RSPCB)",
      byeLaws: "Rajasthan Building Bye-Laws",
    },
    districts: ["Industrial Area", "Gumanpura", "Rangbari Road"],
    nearbyCitySlugs: ["jaipur", "delhi"],
    marketNote:
      "Kota's education-driven economy and industrial base support a steady pipeline of showrooms, institutional offices, and commercial interiors.",
    projects: [{ name: "VinFast Kota", detail: "Showroom" }],
  },
  {
    slug: "nalagarh",
    name: "Nalagarh",
    state: "Himachal Pradesh",
    stateSlug: "himachal-pradesh",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      development: "Baddi-Barotiwala-Nalagarh Development Authority (BBNDA)",
      industrial: "HPSIDC — Himachal Pradesh State Industrial Development Corporation",
      fireNoc: "Himachal Pradesh Fire Services",
      discom: "HPSEBL — Himachal Pradesh State Electricity Board Limited",
      pollution: "Himachal Pradesh State Pollution Control Board (HPSPCB)",
      byeLaws: "Himachal Pradesh Town & Country Planning building rules",
    },
    districts: ["Nalagarh Industrial Area", "Baddi-Barotiwala-Nalagarh (BBN) belt"],
    nearbyCitySlugs: ["chandigarh", "zirakpur"],
    marketNote:
      "Nalagarh sits in Himachal's BBN industrial belt — India's largest pharma manufacturing cluster — where corporate admin blocks and plant offices need clean-room-adjacent, compliance-ready interiors.",
    projects: [{ name: "Theon Pharmaceuticals", detail: "Corporate office", slug: "theon" }],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    region: "South India",
    tier: 1,
    published: true,
    authorities: {
      development: "Bangalore Development Authority (BDA)",
      municipal: "BBMP — Bruhat Bengaluru Mahanagara Palike",
      industrial: "KIADB — Karnataka Industrial Areas Development Board",
      fireNoc: "Karnataka State Fire & Emergency Services",
      discom: "BESCOM — Bangalore Electricity Supply Company",
      pollution: "Karnataka State Pollution Control Board (KSPCB)",
      byeLaws: "BBMP Building Bye-Laws",
    },
    districts: ["Peenya Industrial Area", "Whitefield", "Electronic City", "Outer Ring Road"],
    nearbyCitySlugs: [],
    marketNote:
      "Bengaluru is India's largest technology and industrial employment market. Hagerstone has delivered manufacturing-adjacent projects in the Peenya industrial belt.",
    projects: [
      { name: "Auma India", detail: "Peenya" },
      { name: "MinebeaMitsumi", detail: "Peenya" },
    ],
  },

  // ---- Batch 2: cities listed as served in the capability profiles ----
  // Presence is from the "cities served" list in the Hagerstone profiles.
  // Where a profile names a project in the city it is listed; otherwise
  // `projects` is left empty rather than inventing one.
  {
    slug: "manesar",
    name: "Manesar",
    state: "Haryana",
    stateSlug: "haryana",
    region: "NCR",
    tier: 2,
    published: true,
    authorities: {
      development: "Haryana Shehri Vikas Pradhikaran (HSVP)",
      municipal: "Municipal Corporation Manesar",
      industrial: "HSIIDC — for IMT Manesar",
      fireNoc: "Haryana Fire & Emergency Services",
      discom: "DHBVN — Dakshin Haryana Bijli Vitran Nigam",
      pollution: "Haryana State Pollution Control Board (HSPCB)",
      byeLaws: "Haryana Building Code",
    },
    districts: ["IMT Manesar", "NH-48 corridor", "KMP Expressway", "Sector 8 Manesar"],
    nearbyCitySlugs: ["gurugram", "delhi", "faridabad"],
    marketNote:
      "Manesar is the manufacturing half of Gurugram — IMT Manesar is one of Haryana's largest industrial estates, dominated by automotive and auto-component plants along the NH-48 and KMP Expressway corridors. Projects here are factories, warehouses, admin blocks and plant offices, where PEB, civil, firefighting and MEP matter as much as interiors.",
    projects: [],
  },
  {
    slug: "rajpura",
    name: "Rajpura",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      municipal: "Municipal Council Rajpura",
      industrial: "PSIEC — Punjab Small Industries & Export Corporation",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["Rajpura Industrial Focal Point", "Rajpura Township", "NH-44 corridor"],
    nearbyCitySlugs: ["chandigarh", "zirakpur", "ludhiana"],
    marketNote:
      "Rajpura sits on the NH-44 corridor between Ambala and Ludhiana, where proximity to Chandigarh and the national highway has drawn manufacturing, warehousing and food processing units. Industrial buildings, admin blocks and plant services make up most of the work here.",
    projects: [],
  },
  {
    slug: "dera-bassi",
    name: "Dera Bassi",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      development: "Greater Mohali Area Development Authority (GMADA)",
      municipal: "Municipal Council Dera Bassi",
      industrial: "PSIEC — for the Dera Bassi industrial area",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["Dera Bassi Industrial Area", "Mubarakpur", "Barwala Road", "Chandigarh–Ambala highway"],
    nearbyCitySlugs: ["zirakpur", "chandigarh", "mohali"],
    marketNote:
      "Dera Bassi is the industrial edge of the Chandigarh Tricity — pharma, chemicals and light manufacturing along the Chandigarh–Ambala highway. Factory envelopes, plant MEP and compliance-driven admin blocks are the typical scope.",
    projects: [],
  },
  {
    slug: "ferozepur",
    name: "Ferozepur",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      municipal: "Municipal Council Ferozepur",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["Ferozepur City", "Ferozepur Cantonment", "Moga Road"],
    nearbyCitySlugs: ["ludhiana", "rajpura"],
    marketNote:
      "Ferozepur is a border district centre in south-west Punjab, with an economy anchored in agriculture, agri-processing and institutional buildings. Projects here tend to be industrial and institutional, where a contractor able to mobilise from outside the region matters.",
    projects: [],
  },
  {
    slug: "kotputli",
    name: "Kotputli",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      municipal: "Municipal Council Kotputli",
      industrial: "RIICO",
      fireNoc: "Rajasthan Fire & Emergency Services",
      discom: "JVVNL — Jaipur Vidyut Vitran Nigam",
      pollution: "Rajasthan State Pollution Control Board (RSPCB)",
      byeLaws: "Rajasthan Building Bye-Laws",
    },
    districts: ["Kotputli RIICO Industrial Area", "Delhi–Jaipur NH-48 corridor"],
    nearbyCitySlugs: ["jaipur", "gurugram"],
    marketNote:
      "Kotputli sits midway between Delhi and Jaipur on NH-48, which has made it a location for cement, manufacturing and logistics facilities serving both markets. Large-footprint industrial buildings and their supporting civil and MEP work are the common scope.",
    projects: [],
  },
  {
    slug: "bikaner",
    name: "Bikaner",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      municipal: "Bikaner Municipal Corporation",
      industrial: "RIICO — for Karni Industrial Area",
      fireNoc: "Rajasthan Fire & Emergency Services",
      pollution: "Rajasthan State Pollution Control Board (RSPCB)",
      byeLaws: "Rajasthan Building Bye-Laws",
    },
    districts: ["Bikaner city", "Karni Industrial Area", "Chattargarh", "Jasrasar"],
    nearbyCitySlugs: ["jaipur", "hanumangarh"],
    marketNote:
      "Bikaner district covers a large part of western Rajasthan's desert belt, including Chattargarh and Jasrasar, where Hagerstone has delivered work. Projects here face extreme summer heat, dust and remote logistics — which shape envelope choices, MEP design and how a site is mobilised and supplied.",
    projects: [],
  },
  {
    slug: "hanumangarh",
    name: "Hanumangarh",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      municipal: "Municipal Council Hanumangarh",
      industrial: "RIICO",
      fireNoc: "Rajasthan Fire & Emergency Services",
      discom: "JdVVNL — Jodhpur Vidyut Vitran Nigam",
      pollution: "Rajasthan State Pollution Control Board (RSPCB)",
      byeLaws: "Rajasthan Building Bye-Laws",
    },
    districts: ["Hanumangarh Junction", "Hanumangarh Town", "Bhadra"],
    nearbyCitySlugs: ["bikaner", "ferozepur"],
    marketNote:
      "Hanumangarh district in northern Rajasthan, including Bhadra where Hagerstone has worked, is an agricultural and agri-processing region bordering Punjab and Haryana. Work here is typically industrial and institutional, delivered by teams mobilised into the district.",
    projects: [],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    tier: 1,
    published: true,
    authorities: {
      development: "Lucknow Development Authority (LDA)",
      municipal: "Lucknow Municipal Corporation",
      industrial: "UPSIDA",
      fireNoc: "Uttar Pradesh Fire & Emergency Services",
      discom: "MVVNL — Madhyanchal Vidyut Vitran Nigam",
      pollution: "Uttar Pradesh Pollution Control Board (UPPCB)",
      byeLaws: "Uttar Pradesh Building Bye-Laws",
    },
    districts: ["Gomti Nagar", "Hazratganj", "Sushant Golf City", "Amausi Industrial Area", "Chinhat"],
    nearbyCitySlugs: ["varanasi", "noida", "delhi"],
    marketNote:
      "Lucknow is Uttar Pradesh's capital and its largest commercial market after NCR, with corporate and institutional demand concentrated around Gomti Nagar and Hazratganj and industry at Amausi and Chinhat. Offices, healthcare, education and government-linked buildings drive most commercial work.",
    projects: [],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      development: "Varanasi Development Authority (VDA)",
      municipal: "Varanasi Municipal Corporation",
      fireNoc: "Uttar Pradesh Fire & Emergency Services",
      discom: "PuVVNL — Purvanchal Vidyut Vitran Nigam",
      pollution: "Uttar Pradesh Pollution Control Board (UPPCB)",
      byeLaws: "Uttar Pradesh Building Bye-Laws",
    },
    districts: ["Sigra", "Cantonment", "Lahartara", "Ramnagar Industrial Area"],
    nearbyCitySlugs: ["lucknow"],
    marketNote:
      "Varanasi is eastern Uttar Pradesh's main commercial centre, with growing demand from hospitality, healthcare and institutional projects alongside the Ramnagar industrial area. Dense, heritage-sensitive urban sites make logistics and phasing a large part of delivery here.",
    projects: [],
  },
  {
    slug: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    stateSlug: "himachal-pradesh",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      development: "Himachal Pradesh Town & Country Planning Department",
      municipal: "Municipal Corporation Shimla",
      fireNoc: "Himachal Pradesh Fire Services",
      discom: "HPSEBL — Himachal Pradesh State Electricity Board Limited",
      pollution: "Himachal Pradesh State Pollution Control Board (HPSPCB)",
      byeLaws: "Himachal Pradesh Town & Country Planning building rules",
    },
    districts: ["Mall Road", "Sanjauli", "New Shimla", "Shoghi"],
    nearbyCitySlugs: ["nalagarh", "chandigarh"],
    marketNote:
      "Shimla is Himachal's capital and a hill city with a heavy hospitality and institutional economy. Steep sites, restricted access and a cold climate change how buildings are designed and delivered — material movement, envelope insulation and heating all take priority over what matters in the plains.",
    projects: [],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    stateSlug: "gujarat",
    region: "West India",
    tier: 1,
    published: true,
    authorities: {
      development: "Ahmedabad Urban Development Authority (AUDA)",
      municipal: "Ahmedabad Municipal Corporation (AMC)",
      industrial: "GIDC — for Sanand, Naroda and Vatva estates",
      fireNoc: "Ahmedabad Fire & Emergency Services",
      discom: "Torrent Power (Ahmedabad city)",
      pollution: "Gujarat Pollution Control Board (GPCB)",
      byeLaws: "Comprehensive General Development Control Regulations (CGDCR), Gujarat",
    },
    districts: ["SG Highway", "Prahlad Nagar", "Sanand GIDC", "Naroda GIDC", "Vatva GIDC"],
    nearbyCitySlugs: ["bhuj"],
    marketNote:
      "Ahmedabad combines a large corporate market along SG Highway and Prahlad Nagar with Gujarat's major industrial estates at Sanand, Naroda and Vatva. Corporate offices, manufacturing plants and warehousing all generate steady demand for interiors, PEB, civil and MEP work.",
    projects: [],
  },
  {
    slug: "bhuj",
    name: "Bhuj",
    state: "Gujarat",
    stateSlug: "gujarat",
    region: "West India",
    tier: 3,
    published: true,
    authorities: {
      municipal: "Bhuj Municipality",
      industrial: "GIDC",
      fireNoc: "Gujarat Fire & Emergency Services",
      discom: "PGVCL — Paschim Gujarat Vij Company Limited",
      pollution: "Gujarat Pollution Control Board (GPCB)",
      byeLaws: "Comprehensive General Development Control Regulations (CGDCR), Gujarat",
    },
    districts: ["Bhuj city", "Madhapar", "Mirzapar", "Kutch industrial belt"],
    nearbyCitySlugs: ["ahmedabad"],
    marketNote:
      "Bhuj is the headquarters of Kutch, a district rebuilt after the 2001 earthquake and now home to a growing industrial belt. Structural safety and envelope durability in a hot, dusty, coastal-influenced climate are central to building here. Hagerstone delivered glazing and ACP cladding on an admin block for Dee Development in Bhuj.",
    projects: [{ name: "Dee Development", detail: "Admin block — glazing & ACP cladding, 25,000 sq. ft." }],
  },
  {
    slug: "mohali",
    name: "Mohali",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 2,
    published: true,
    authorities: {
      development: "Greater Mohali Area Development Authority (GMADA)",
      municipal: "Municipal Corporation SAS Nagar (Mohali)",
      industrial: "PSIEC — for Industrial Areas Phase 7 and 8",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["Industrial Area Phase 7 & 8", "IT City", "Aerocity Mohali", "Sector 82"],
    nearbyCitySlugs: ["chandigarh", "zirakpur", "dera-bassi"],
    marketNote:
      "Mohali is the fastest-growing part of the Chandigarh Tricity, with an IT and services cluster around IT City and Aerocity and established industrial areas in Phases 7 and 8. Corporate offices, healthcare and light manufacturing make up most commercial demand.",
    projects: [],
  },
  {
    slug: "zirakpur",
    name: "Zirakpur",
    state: "Punjab",
    stateSlug: "punjab",
    region: "North India",
    tier: 3,
    published: true,
    authorities: {
      development: "Greater Mohali Area Development Authority (GMADA)",
      municipal: "Municipal Council Zirakpur",
      fireNoc: "Punjab Fire & Emergency Services",
      discom: "PSPCL — Punjab State Power Corporation Limited",
      pollution: "Punjab Pollution Control Board (PPCB)",
      byeLaws: "Punjab Municipal Building Bye-Laws",
    },
    districts: ["VIP Road", "Patiala Road", "Chandigarh–Ambala highway", "Dhakoli"],
    nearbyCitySlugs: ["chandigarh", "mohali", "dera-bassi"],
    marketNote:
      "Zirakpur is the Tricity's commercial and residential growth corridor, where retail, showrooms, hospitality and mixed-use buildings line VIP Road and the Chandigarh–Ambala highway. Showroom fit-outs, commercial facades and retail interiors are the typical work.",
    projects: [],
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
