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

export interface City {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  region: "NCR" | "North India" | "West India" | "South India";
  tier: 1 | 2 | 3;
  published: boolean;
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
    districts: ["Peenya Industrial Area", "Whitefield", "Electronic City", "Outer Ring Road"],
    nearbyCitySlugs: [],
    marketNote:
      "Bengaluru is India's largest technology and industrial employment market. Hagerstone has delivered manufacturing-adjacent projects in the Peenya industrial belt.",
    projects: [
      { name: "Auma India", detail: "Peenya" },
      { name: "MinebeaMitsumi", detail: "Peenya" },
    ],
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
