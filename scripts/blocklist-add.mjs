// Add a client name to the hashed blocklist used by check-client-safety.mjs.
//
// ONLY add a client whose name must never appear on the site. Do NOT add a
// client the site already names with approval — Theon Pharmaceuticals, for one,
// has a project page and is named on three content pages, so blocklisting it
// failed the build on legitimate, previously approved content. A design study
// can still anonymise a client the site names elsewhere; that is an editorial
// choice, and it does not belong in the guard.
//
// Names are stored as salted hashes, never plaintext, because this repo is
// public. Run this locally and commit the updated config file; the name itself
// never appears anywhere in the repo or its history.
//
//   node scripts/blocklist-add.mjs "Acme Capital"

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const FILE = join(process.cwd(), "config", "name-blocklist.json");

const name = process.argv.slice(2).join(" ").trim();
if (!name) {
  console.error('usage: node scripts/blocklist-add.mjs "<client name>"');
  process.exit(1);
}

const config = existsSync(FILE)
  ? JSON.parse(readFileSync(FILE, "utf-8"))
  : { algo: "sha256", salt: "hagerstone-blocklist-v1", hashes: [] };

const normalise = (text) =>
  text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).join(" ");

const hash = (text) =>
  createHash("sha256").update(`${config.salt}:${text}`).digest("hex").slice(0, 32);

/**
 * Words that are part of company names but also ordinary technical prose.
 * Hashing "capital" on its own flagged five existing pages that talk about
 * capital cost, so a generic word is only ever blocked as part of a full name.
 */
const GENERIC = new Set([
  "capital", "group", "india", "indian", "limited", "private", "company", "corp",
  "corporation", "holdings", "ventures", "partners", "associates", "consulting",
  "consultants", "industries", "industrial", "solutions", "systems", "technologies",
  "technology", "services", "enterprises", "international", "global", "finance",
  "financial", "bank", "banking", "insurance", "developers", "builders", "properties",
  "property", "realty", "estates", "estate", "infra", "infrastructure", "projects",
  "works", "power", "energy", "motors", "foods", "pharma", "pharmaceuticals", "labs",
  "laboratories", "healthcare", "hospital", "hospitals", "hotels", "resorts", "retail",
  "trading", "exports", "imports", "steel", "cement", "glass", "metals", "chemicals",
  "textiles", "logistics", "media", "digital", "software", "consultancy", "engineers",
  "engineering", "construction", "interiors", "design", "designs", "studio", "first",
  "prime", "star", "city", "north", "south", "east", "west", "delhi", "noida",
  "gurugram", "gurgaon", "mumbai", "bengaluru", "chennai", "pune", "jaipur", "ncr",
  // Words that recur in Indian project and developer names but are also ordinary
  // English. "homes" alone flagged a sentence about selling homes; "hero" would
  // flag heroImage. A generic word is only ever blocked as part of a full name.
  "homes", "home", "hero", "tower", "towers", "heights", "residency", "residences",
  "greens", "green", "villa", "villas", "park", "plaza", "square", "court", "enclave",
  "vihar", "nagar", "puram", "colony", "sector", "phase", "block", "unity", "trust",
  "life", "lifesciences", "sciences", "canteen", "piping", "capital",
]);

// Hash the full name, plus any distinctive word in it, so "Acme Capital" and a
// bare "Acme" are both caught while "capital" alone is not.
const normalised = normalise(name);
const candidates = new Set([normalised]);
for (const word of normalised.split(" ")) {
  if (word.length >= 4 && !GENERIC.has(word)) candidates.add(word);
}

let added = 0;
for (const candidate of candidates) {
  const digest = hash(candidate);
  if (!config.hashes.includes(digest)) {
    config.hashes.push(digest);
    added += 1;
  }
}

config.hashes.sort();
mkdirSync(dirname(FILE), { recursive: true });
writeFileSync(FILE, `${JSON.stringify(config, null, 2)}\n`);

console.log(
  `✓ ${added} hash(es) added from ${candidates.size} form(s); ${config.hashes.length} total`,
);
console.log("  The name itself is not stored. Commit config/name-blocklist.json.");
