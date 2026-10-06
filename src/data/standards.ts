// Where each cited standard is published, so a citation label like "IS 875
// (Part 3)" can link to its source. Used by ContentArticle (visible link and
// Article.citation in JSON-LD), prerender.js (the markdown copies for AI
// agents) and build-content-index.mjs (warns on citations left unlinked).
//
// Links go to the publishing body's own page, never a mirror or a PDF host.
// Per-standard deep links were tried and rejected (checked 6 Oct 2026): BIS
// detail pages are keyed by internal IDs and time out, BIS e-Sale search
// errors without an ID, and BEE redirects every deep link to its homepage.
// So most rules point at the publisher's catalogue or search page, where the
// label on our page is what the reader searches for.
//
// Rules are checked in order and the first match wins, so a more specific
// prefix (EN ISO) must come before a broader one (EN). A label that matches
// nothing stays plain text. To link one citation precisely, give it a `url`
// in frontmatter: that always wins over these rules.

export interface StandardsPublisher {
  /** Publishing body, emitted as the citation's publisher in JSON-LD. */
  publisher: string;
  url: string;
}

interface StandardsRule extends StandardsPublisher {
  pattern: RegExp;
}

const BIS_PUBLISHED_STANDARDS = "https://standards.bis.gov.in/website/published-standards/department-wise";
const ISO_STANDARDS = "https://www.iso.org/standards.html";

const RULES: StandardsRule[] = [
  {
    pattern: /^NBC\b/,
    publisher: "Bureau of Indian Standards",
    url: "https://www.bis.gov.in/standards/national-building-code/",
  },
  {
    // "IS 875 (Part 3)", "IS 456:2000", "IS 15622 / DIN 51130".
    pattern: /^IS\s*\d/,
    publisher: "Bureau of Indian Standards",
    url: BIS_PUBLISHED_STANDARDS,
  },
  {
    pattern: /^ECBC\b/,
    publisher: "Bureau of Energy Efficiency",
    url: "https://beeindia.gov.in/",
  },
  // EN ISO and ISO/IEC are ISO publications; plain EN is CEN's.
  { pattern: /^(EN ISO|ISO\/IEC|ISO)\b/, publisher: "ISO", url: ISO_STANDARDS },
  {
    pattern: /^EN\b/,
    publisher: "CEN-CENELEC",
    url: "https://standards.cencenelec.eu/ords/f?p=CEN:105",
  },
  {
    pattern: /^ASTM\b/,
    publisher: "ASTM International",
    url: "https://www.astm.org/products-services/standards-and-publications.html",
  },
  {
    pattern: /^ASHRAE 62\.1\b/,
    publisher: "ASHRAE",
    url: "https://www.ashrae.org/technical-resources/bookstore/standards-62-1-62-2",
  },
  { pattern: /^IEC\b/, publisher: "IEC", url: "https://webstore.iec.ch/en/" },
  {
    // AAMA standards are now published by FGIA.
    pattern: /^AAMA\b/,
    publisher: "Fenestration and Glazing Industry Alliance",
    url: "https://fgiaonline.org/",
  },
  {
    pattern: /^CEA\b/,
    publisher: "Central Electricity Authority",
    url: "https://cea.nic.in/regulations/?lang=en",
  },
  { pattern: /^CPCB\b/, publisher: "Central Pollution Control Board", url: "https://cpcb.nic.in/" },
  { pattern: /^UL\s*\d/, publisher: "UL Standards & Engagement", url: "https://www.shopulstandards.com/" },
  { pattern: /^ACI\b/, publisher: "American Concrete Institute", url: "https://www.concrete.org/store.aspx" },
  // Left unlinked for now (warned at build): TIA (site not responding),
  // SMACNA (standards page 404), and the Acts and bye-laws, whose official
  // home India Code was mid-migration on 6 Oct 2026.
];

/** The publisher page for a citation label, or undefined if none is known. */
export const findStandardsPublisher = (label: string): StandardsPublisher | undefined => {
  const rule = RULES.find(({ pattern }) => pattern.test(label.trim()));
  return rule ? { publisher: rule.publisher, url: rule.url } : undefined;
};

/** Frontmatter `url` first, then the publisher rules above. */
export const resolveCitationUrl = (citation: { label: string; url?: string }): string | undefined =>
  citation.url ?? findStandardsPublisher(citation.label)?.url;
