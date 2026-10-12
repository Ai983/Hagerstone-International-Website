// Turn design-deck renders into web images for a /our-designs page.
//
// Two modes:
//
//   --sheet   Build a labelled contact sheet of every candidate image, so a
//             human can look at all of them at once and spot client logos.
//             This is the triage step and the safety gate: no script can see a
//             logo inside a bitmap.
//
//   default   Apply the per-deck redaction plan, resize to 1600 and 800 wide,
//             encode WebP, write into public/our-designs/<slug>/, and print a
//             paste-ready `gallery:` block with real dimensions.
//
// Redaction ops, in the order they are applied per image:
//   crop  { left, top, width, height }                   preferred — reframes the mark out
//   fill  { left, top, width, height, sampleFrom }       patches with clean adjacent pixels
//         add matchTone: true to shift the patch to the surrounding wall's mean colour
//   blur  { left, top, width, height, sigma }            small incidental marks only
//   inpaint { left, top, width, height, select }         a mark distinct in colour (select: "blue" or "light"): masks it and rebuilds the wall per column
//   denoise { size }                                     median filter for render grain, so a grainy render fits the budget
// Coordinates for fill/blur are relative to the image AFTER any crop.
//
// Usage:
//   node scripts/our-designs-images.mjs --sheet --in <dir> --out <file.jpg>
//   node scripts/our-designs-images.mjs --slug <slug> --in <dir> --plan <plan.json>

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 1600;
const SMALL_WIDTH = 800;
const WEBP_QUALITY = 80;

const args = process.argv.slice(2);
const flag = (name, fallback = undefined) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const has = (name) => args.includes(`--${name}`);

/* ------------------------------------------------------------------ sheet -- */

async function buildContactSheet(inDir, outFile, minWidth) {
  const seen = new Map();
  for (const file of fs.readdirSync(inDir).sort()) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    const full = path.join(inDir, file);
    const meta = await sharp(full).metadata();
    if (meta.width < minWidth) continue;
    // Deck exports repeat the same bitmap on every slide's resource list.
    const hash = createHash("md5").update(fs.readFileSync(full)).digest("hex").slice(0, 8);
    if (!seen.has(hash)) seen.set(hash, { file, width: meta.width, height: meta.height });
  }

  const items = [...seen.values()];
  const CELL_W = 460;
  const CELL_H = 290;
  const COLS = 4;
  const rows = Math.ceil(items.length / COLS);

  const tiles = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const img = await sharp(path.join(inDir, item.file))
      .resize({ width: CELL_W - 12, height: CELL_H - 36, fit: "contain", background: "#111111" })
      .toBuffer();
    const label = Buffer.from(
      `<svg width="${CELL_W}" height="30"><rect width="100%" height="100%" fill="#111111"/>` +
        `<text x="8" y="21" font-family="sans-serif" font-size="16" fill="#ffffff">` +
        `${i + 1}. ${item.file} (${item.width}x${item.height})</text></svg>`,
    );
    const cell = await sharp({
      create: { width: CELL_W, height: CELL_H, channels: 3, background: "#111111" },
    })
      .composite([
        { input: img, top: 32, left: 6 },
        { input: label, top: 0, left: 0 },
      ])
      .png()
      .toBuffer();
    tiles.push({ input: cell, top: Math.floor(i / COLS) * CELL_H, left: (i % COLS) * CELL_W });
  }

  await sharp({
    create: { width: COLS * CELL_W, height: rows * CELL_H, channels: 3, background: "#111111" },
  })
    .composite(tiles)
    .jpeg({ quality: 82 })
    .toFile(outFile);

  console.log(`${items.length} unique image(s) -> ${outFile}`);
  items.forEach((item, i) => console.log(`  ${i + 1}. ${item.file} ${item.width}x${item.height}`));
}

/* -------------------------------------------------------------- redaction -- */

async function applyOps(input, ops = []) {
  let image = sharp(input).rotate(); // honour EXIF orientation before it is stripped
  let buffer = await image.toBuffer();

  for (const op of ops) {
    const meta = await sharp(buffer).metadata();

    if (op.type === "crop") {
      buffer = await sharp(buffer)
        .extract({ left: op.left, top: op.top, width: op.width, height: op.height })
        .toBuffer();
      continue;
    }

    if (op.type === "blur") {
      const patch = await sharp(buffer)
        .extract({ left: op.left, top: op.top, width: op.width, height: op.height })
        .blur(op.sigma ?? 18)
        .toBuffer();
      buffer = await sharp(buffer)
        .composite([{ input: patch, left: op.left, top: op.top }])
        .toBuffer();
      continue;
    }

    if (op.type === "fill") {
      // Sample a small block of clean surface and stretch it over the mark, so
      // the result reads as plain wall rather than as an obvious redaction.
      const sample = op.sampleFrom ?? { left: op.left, top: op.top };
      const sw = Math.min(op.sampleWidth ?? 24, meta.width - sample.left);
      const sh = Math.min(op.sampleHeight ?? 24, meta.height - sample.top);
      let patch = await sharp(buffer)
        .extract({ left: sample.left, top: sample.top, width: sw, height: sh })
        .resize({ width: op.width, height: op.height, fit: "fill" })
        .blur(op.sigma ?? 6)
        .toBuffer();
      // `matchTone`: shift the patch's mean colour to that of a thin ring of
      // wall just outside it. A wall under a light gradient is rarely the same
      // brightness a few pixels away, and that step is what makes a patch read
      // as a rectangle.
      if (op.matchTone) {
        // The ring sits `gap` px out so anti-aliased edges of the mark itself
        // do not lighten the target.
        const ring = op.ring ?? 4;
        const gap = op.gap ?? 3;
        const mean = async (img) =>
          (await sharp(img).stats()).channels.slice(0, 3).map((c) => c.mean);
        const boxes = [
          { left: op.left, top: op.top - gap - ring, width: op.width, height: ring },
          { left: op.left, top: op.top + op.height + gap, width: op.width, height: ring },
          { left: op.left - gap - ring, top: op.top, width: ring, height: op.height },
          { left: op.left + op.width + gap, top: op.top, width: ring, height: op.height },
        ].filter(
          (b) => b.left >= 0 && b.top >= 0 && b.top + b.height <= meta.height && b.left + b.width <= meta.width,
        );
        const sides = await Promise.all(
          boxes.map(async (box) => mean(await sharp(buffer).extract(box).toBuffer())),
        );
        const target = [0, 1, 2].map((i) => sides.reduce((sum, m) => sum + m[i], 0) / sides.length);
        const current = await mean(patch);
        patch = await sharp(patch)
          .removeAlpha()
          .linear([1, 1, 1], target.map((t, i) => t - current[i]))
          .toBuffer();
      }
      buffer = await sharp(buffer)
        .composite([{ input: patch, left: op.left, top: op.top }])
        .toBuffer();
      continue;
    }

    if (op.type === "denoise") {
      // Render grain (the speckle a path tracer leaves on flat walls) is noise,
      // not detail, but it is what WebP spends its bytes on. A small median
      // removes it without softening edges, so a grainy render can stay at a
      // normal quality instead of being crushed to fit the budget.
      buffer = await sharp(buffer).median(op.size ?? 3).toBuffer();
      continue;
    }

    if (op.type === "inpaint") {
      // For a mark whose colour stands apart from the wall it sits on (blue
      // lettering on beige paint): mask the mark's own pixels inside the box,
      // grow the mask by `dilate` px to take the anti-aliased edge, then
      // rebuild each masked run column by column, interpolating between the
      // clean wall just above and just below it. That keeps the wall's
      // vertical gradient and any edge the box overlaps, which no rectangle
      // of sampled paint can do.
      const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
      const ch = info.channels;
      const at = (x, y) => (y * info.width + x) * ch;
      const isMark = {
        blue: (i) => data[i + 2] - data[i] > (op.threshold ?? 25),
        light: (i) => data[i] + data[i + 1] + data[i + 2] > (op.threshold ?? 540),
      }[op.select];
      if (!isMark) throw new Error(`inpaint: unknown select "${op.select}"`);

      const { left, top, width, height } = op;
      const dilate = op.dilate ?? 2;
      const mask = new Uint8Array(width * height);
      for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++)
          if (isMark(at(left + x, top + y)))
            for (let dy = -dilate; dy <= dilate; dy++)
              for (let dx = -dilate; dx <= dilate; dx++) {
                const mx = x + dx;
                const my = y + dy;
                if (mx >= 0 && my >= 0 && mx < width && my < height) mask[my * width + mx] = 1;
              }

      for (let x = 0; x < width; x++) {
        let y = 0;
        while (y < height) {
          if (!mask[y * width + x]) { y++; continue; }
          const start = y;
          while (y < height && mask[y * width + x]) y++;
          const above = at(left + x, Math.max(0, top + start - 1));
          const below = at(left + x, Math.min(info.height - 1, top + y));
          const run = y - start + 1;
          for (let k = start; k < y; k++) {
            const t = (k - start + 1) / run;
            const i = at(left + x, top + k);
            for (let c = 0; c < 3; c++) data[i + c] = Math.round(data[above + c] * (1 - t) + data[below + c] * t);
          }
        }
      }
      buffer = await sharp(data, { raw: info }).png().toBuffer();
      continue;
    }

    throw new Error(`unknown redaction op "${op.type}"`);
  }

  return buffer;
}

async function run(slug, inDir, planFile) {
  const plan = JSON.parse(fs.readFileSync(planFile, "utf-8"));
  const outDir = path.join("public", "our-designs", slug);
  fs.mkdirSync(outDir, { recursive: true });

  const rows = [];
  for (const [key, spec] of Object.entries(plan)) {
    if (key.startsWith("_")) continue; // notes, not an image
    if (spec.skip) {
      console.log(`- ${key}: skipped (${spec.note ?? "no reason given"})`);
      continue;
    }
    const source = path.join(inDir, spec.source);
    if (!fs.existsSync(source)) throw new Error(`missing source: ${source}`);

    const redacted = await applyOps(source, spec.ops);

    // No .withMetadata(): sharp strips EXIF/XMP by default, which is what we
    // want — those fields can carry author and company names.
    // A busy render (lots of fine detail, no flat areas) can exceed the size
    // budget at the default quality. `quality` in the plan lowers it for that
    // one image rather than softening every image to suit the worst case.
    const quality = spec.quality ?? WEBP_QUALITY;

    const big = sharp(redacted).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    const bigFile = path.join(outDir, `${key}-1600.webp`);
    await big.clone().webp({ quality, effort: 6 }).toFile(bigFile);

    const smallFile = path.join(outDir, `${key}-800.webp`);
    await sharp(redacted)
      .resize({ width: SMALL_WIDTH, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(smallFile);

    const meta = await sharp(bigFile).metadata();
    const kb = (f) => Math.round(fs.statSync(f).size / 1024);
    console.log(
      `✓ ${key}  ${meta.width}x${meta.height}  ${kb(bigFile)} KB / ${kb(smallFile)} KB`,
    );

    rows.push(
      [
        `  - src: "/our-designs/${slug}/${key}-1600.webp"`,
        `    alt: "${spec.alt ?? "TODO — describe what is visible, 15+ characters"}"`,
        `    caption: "${spec.caption ?? "TODO — design intent. Renders end: Indicative viewpoint."}"`,
        `    width: ${meta.width}`,
        `    height: ${meta.height}`,
        spec.group ? `    group: "${spec.group}"` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }

  console.log("\n# paste into frontmatter\ngallery:\n" + rows.join("\n"));
}

/* ------------------------------------------------------------------- main -- */

if (has("sheet")) {
  await buildContactSheet(
    flag("in"),
    flag("out", "contact-sheet.jpg"),
    Number(flag("min-width", "900")),
  );
} else {
  const slug = flag("slug");
  if (!slug) throw new Error("--slug is required");
  await run(slug, flag("in"), flag("plan"));
}
