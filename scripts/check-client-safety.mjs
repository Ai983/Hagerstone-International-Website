// Client-safety guard. Runs in prebuild.
//
// Design studies are built from client proposals, so the client's identity must
// not reach the site — not in the copy, not in alt text, not in a file name.
// Pages are published in batches with no human review, so this is a build gate
// rather than a checklist item.
//
// What it CANNOT do: see a logo inside an image. A mark on a reception wall, a
// mug or a monitor is caught only by eyeballing the contact sheet that
// scripts/design-studies-images.mjs writes. Never skip that step.
//
// The blocklist is hashed, not plaintext: this repo is public, and a committed
// list of every client's name would be a worse leak than the thing it prevents.
// Add a name with: node scripts/blocklist-add.mjs "<Name>"

import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const CONTENT_DIR = join(ROOT, "src", "content");
const BLOCKLIST_FILE = join(ROOT, "config", "name-blocklist.json");

const blocklist = existsSync(BLOCKLIST_FILE)
  ? JSON.parse(readFileSync(BLOCKLIST_FILE, "utf-8"))
  : { salt: "", hashes: [] };
const blocked = new Set(blocklist.hashes ?? []);

const hash = (text) =>
  createHash("sha256").update(`${blocklist.salt}:${text}`).digest("hex").slice(0, 32);

/** Company-name shapes that should never appear in a design study. */
const SUFFIX_PATTERN =
  /\b(?:pvt\.?\s*ltd|private\s+limited|\bllp\b|\binc\.|\bgmbh\b|\bs\.?a\.?r\.?l\b)/i;

/**
 * Claims that need a named reviewer, per the publishing rule in
 * SEO-PROJECT-STATUS.md §0. Every one of these maps to a row in its table.
 */
const CLAIM_PATTERNS = [
  [/₹/, "rupee figure — pricing is not approved"],
  [/\bRs\.?\s*\d/i, "rupee figure — pricing is not approved"],
  [/per\s+sq\.?\s*ft/i, "per-sq-ft rate — pricing is not approved"],
  [/\bwe\s+delivered\b/i, "project claim"],
  [/\bcompleted\s+in\s+\d/i, "project claim"],
  [/\bfire\s+noc\b/i, "statutory verdict"],
  [/\bguarantee[ds]?\b/i, "guarantee"],
  [/\bcertified\b/i, "certification claim"],
];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    if (item.name.startsWith(".")) return [];
    const full = join(dir, item.name);
    if (item.isDirectory()) return walk(full);
    return item.name.endsWith(".mdx") ? [full] : [];
  });

/** Lowercase, strip punctuation, collapse whitespace — then 1-, 2- and 3-grams. */
const ngrams = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set();
  for (let i = 0; i < words.length; i++) {
    out.add(words[i]);
    if (i + 1 < words.length) out.add(`${words[i]} ${words[i + 1]}`);
    if (i + 2 < words.length) out.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return out;
};

const errors = [];
let scanned = 0;

for (const file of walk(CONTENT_DIR)) {
  const rel = relative(ROOT, file).split(sep).join("/");
  const raw = readFileSync(file, "utf-8");
  scanned += 1;

  if (blocked.size > 0) {
    for (const gram of ngrams(raw)) {
      if (blocked.has(hash(gram))) {
        errors.push(`${rel}: blocklisted name present`);
        break;
      }
    }
  }

  // The claim and suffix checks apply to design studies, where the source is a
  // client proposal. Other collections are governed by their own rules.
  const isDesign = /^collection:\s*["']?design["']?/m.test(raw);
  if (!isDesign) continue;

  if (SUFFIX_PATTERN.test(raw)) {
    errors.push(`${rel}: looks like a company name (Pvt Ltd / LLP / Inc)`);
  }
  for (const [pattern, why] of CLAIM_PATTERNS) {
    const match = raw.match(pattern);
    if (match) errors.push(`${rel}: ${why} — "${match[0]}"`);
  }
}

// File names ship in the HTML and the sitemap, so they get the same treatment.
const designAssets = join(ROOT, "public", "design-studies");
if (existsSync(designAssets)) {
  for (const slugDir of readdirSync(designAssets)) {
    const dir = join(designAssets, slugDir);
    if (!statSync(dir).isDirectory()) continue;
    for (const name of [slugDir, ...readdirSync(dir)]) {
      if (blocked.size > 0) {
        for (const gram of ngrams(name.replace(/[-_]/g, " "))) {
          if (blocked.has(hash(gram))) {
            errors.push(`public/design-studies/${slugDir}/${name}: blocklisted name in path`);
            break;
          }
        }
      }
      if (/logo|branding/i.test(name)) {
        errors.push(`public/design-studies/${slugDir}/${name}: suspicious file name`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`\n✗ client-safety check failed (${errors.length}):\n`);
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}

console.log(
  `✓ client safety: ${scanned} file(s), ${blocked.size} blocked name(s)` +
    " — images still need the contact-sheet check",
);
