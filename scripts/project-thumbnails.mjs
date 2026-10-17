// Write an 800 px wide WebP copy next to every project gallery image.
//
// Gallery cards (ImageCarousel) are 288 px wide, but the full-size files are kept
// at up to 2560 px so nothing is lost for Google Images or future layouts. The
// carousel's srcSet points browsers at the `-800w.webp` sibling, so a card no
// longer downloads a 1-2 MB photo. check-images.mjs fails the build if a gallery
// image has no sibling, so run this after adding photos to public/projects/.
//
// Usage: node scripts/project-thumbnails.mjs     (skips thumbnails that are current)

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const THUMB_WIDTH = 800;
export const THUMB_SUFFIX = `-${THUMB_WIDTH}w.webp`;
const ROOT = path.join(process.cwd(), "public", "projects");
const RASTER = /\.(jpe?g|png|webp)$/i;

export const thumbPathFor = (file) => file.replace(RASTER, THUMB_SUFFIX);
export const isThumb = (file) => file.endsWith(THUMB_SUFFIX);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) return walk(full);
    return RASTER.test(item.name) && !isThumb(item.name) ? [full] : [];
  });

if (import.meta.url === `file://${process.argv[1]}`) {
  let written = 0;
  for (const file of walk(ROOT)) {
    const thumb = thumbPathFor(file);
    if (fs.existsSync(thumb) && fs.statSync(thumb).mtimeMs >= fs.statSync(file).mtimeMs) continue;
    await sharp(file)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: 90, effort: 6, smartSubsample: true })
      .toFile(thumb);
    written++;
  }
  console.log(`✓ project thumbnails: ${written} written`);
}
