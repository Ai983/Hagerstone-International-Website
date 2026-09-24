// Quick authoring aid: report frontmatter fields that are outside the schema's
// length limits, for every .mdx file, in one pass. build-content-index.mjs is
// the real gate — this just shows the actual lengths so a fix is one edit
// rather than one build cycle per file.
//
//   node scripts/check-meta-lengths.mjs [<dir-or-file> ...]

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();

/** field -> [min, max] as declared in src/content/schema.ts */
const LIMITS = {
  title: [10, 90],
  metaTitle: [10, 65],
  metaDescription: [70, 165],
  definition: [0, 400],
};

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    if (item.name.startsWith(".")) return [];
    const full = join(dir, item.name);
    if (item.isDirectory()) return walk(full);
    return item.name.endsWith(".mdx") ? [full] : [];
  });

const targets = process.argv.slice(2);
const files = (targets.length > 0 ? targets : [join("src", "content")]).flatMap(
  (target) => (statSync(target).isDirectory() ? walk(target) : [target]),
);

let bad = 0;

for (const file of files) {
  const { data } = matter(readFileSync(file, "utf-8"));
  const problems = [];

  for (const [field, [min, max]] of Object.entries(LIMITS)) {
    const value = data[field];
    if (typeof value !== "string") continue;
    const n = value.length;
    if (n < min) problems.push(`${field} ${n} (min ${min}, need +${min - n})`);
    if (n > max) problems.push(`${field} ${n} (max ${max}, cut ${n - max})`);
  }

  if (problems.length > 0) {
    bad += 1;
    console.log(`${relative(ROOT, file).split(sep).join("/")}`);
    for (const problem of problems) console.log(`    ${problem}`);
  }
}

console.log(
  bad === 0
    ? `✓ meta lengths: ${files.length} file(s) within limits`
    : `\n✗ ${bad} of ${files.length} file(s) outside limits`,
);
process.exit(bad === 0 ? 0 : 1);
