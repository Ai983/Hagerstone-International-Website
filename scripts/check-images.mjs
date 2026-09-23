// Image budget guard. Runs in prebuild, after the content index.
//
// Frontmatter declares each image's path and its intrinsic size. This checks the
// declaration against the file on disk, because the declared width/height is
// what the browser reserves space with — if it is wrong, the page shifts as it
// loads, and layout shift is a ranking factor.
//
// Fails the build on: a missing file, a missing responsive sibling, a non-WebP
// file, an oversized file, or dimensions that disagree with the file.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const CONTENT_DIR = join(ROOT, "src", "content");
const PUBLIC_DIR = join(ROOT, "public");

const MAX_WIDTH = 1600;
const MAX_KB_LARGE = 250;
const MAX_KB_SMALL = 90;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    if (item.name.startsWith(".")) return [];
    const full = join(dir, item.name);
    if (item.isDirectory()) return walk(full);
    return item.name.endsWith(".mdx") ? [full] : [];
  });

const kb = (file) => Math.round(statSync(file).size / 1024);

const errors = [];
const warnings = [];
const referenced = new Set();
let checked = 0;

for (const file of walk(CONTENT_DIR)) {
  const rel = relative(ROOT, file).split(sep).join("/");
  const { data } = matter(readFileSync(file, "utf-8"));
  if (data.status !== "published") continue;

  const images = [
    ...(data.heroImage
      ? [{ src: data.heroImage, alt: data.heroImageAlt, hero: true }]
      : []),
    ...(Array.isArray(data.gallery) ? data.gallery : []),
  ];

  for (const image of images) {
    const localPath = join(PUBLIC_DIR, image.src);
    referenced.add(image.src);

    if (!existsSync(localPath)) {
      errors.push(`${rel}: missing file ${image.src}`);
      continue;
    }
    if (!image.src.endsWith(".webp")) {
      errors.push(`${rel}: ${image.src} must be .webp`);
      continue;
    }

    checked += 1;
    const size = kb(localPath);
    if (size > MAX_KB_LARGE) {
      errors.push(`${rel}: ${image.src} is ${size} KB, over the ${MAX_KB_LARGE} KB budget`);
    }

    // The gallery emits a srcset pointing at the -800 sibling, so it has to exist.
    if (image.src.endsWith("-1600.webp")) {
      const small = image.src.replace(/-1600\.webp$/, "-800.webp");
      const smallPath = join(PUBLIC_DIR, small);
      referenced.add(small);
      if (!existsSync(smallPath)) {
        errors.push(`${rel}: missing responsive variant ${small}`);
      } else if (kb(smallPath) > MAX_KB_SMALL) {
        errors.push(
          `${rel}: ${small} is ${kb(smallPath)} KB, over the ${MAX_KB_SMALL} KB budget`,
        );
      }
    }

    const meta = await sharp(localPath).metadata();
    if (meta.width > MAX_WIDTH) {
      errors.push(`${rel}: ${image.src} is ${meta.width}px wide, over ${MAX_WIDTH}px`);
    }
    // Hero images have no declared dimensions in frontmatter; gallery ones do.
    if (!image.hero && (meta.width !== image.width || meta.height !== image.height)) {
      errors.push(
        `${rel}: ${image.src} is ${meta.width}x${meta.height} but frontmatter says ` +
          `${image.width}x${image.height}`,
      );
    }
  }
}

// Files nobody points at are usually a draft's images, or a leftover from a
// renamed page. Worth saying, not worth failing.
const designDir = join(PUBLIC_DIR, "design-studies");
if (existsSync(designDir)) {
  for (const slugDir of readdirSync(designDir)) {
    const dir = join(designDir, slugDir);
    if (!statSync(dir).isDirectory()) continue;
    for (const name of readdirSync(dir)) {
      const webPath = `/design-studies/${slugDir}/${name}`;
      if (!referenced.has(webPath)) warnings.push(`unreferenced: ${webPath}`);
    }
  }
}

for (const warning of warnings) console.warn(`  ! ${warning}`);

if (errors.length > 0) {
  console.error(`\n✗ image check failed (${errors.length}):\n`);
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}

console.log(
  `✓ images: ${checked} checked${warnings.length ? `, ${warnings.length} unreferenced` : ""}`,
);
