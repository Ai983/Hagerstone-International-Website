# /design-studies — how a deck becomes a page

Each design presentation becomes one page under `hagerstone.com/design-studies`. This file
has two parts: what the **design team uploads**, and what the **person building the page**
does with it.

**The rule that governs everything here: the client is never identified.** Not in the
words, not in the file names, not in the images. Decks are client proposals, so a page
also never claims the work was built unless someone at Hagerstone puts their name to it.

---

## Part 1 — For the design team (uploading)

Upload into the shared Drive folder, one folder per deck:

```
Hagerstone Website Uploads/design-studies/
  2026-09-nbfc-nsp/          <-- <year-month>-<sector>-<area>. Never the client's name.
    deck.pdf                 <-- the presentation, as exported
    renders/                 <-- the ORIGINAL 3D exports (PNG or JPG), full size
    layouts/                 <-- layout plans, as PNG or PDF
    notes.txt                <-- the 8 lines below
```

**Please upload the original renders, not only the PDF.** A render pulled back out of a
PDF is smaller, and it can have the slide's title block — with the client's name — baked
into the picture itself.

`notes.txt` — copy this and fill it in. Two minutes, and it saves an hour later:

```
sector:        NBFC / financial services
city:          New Delhi
micro-market:  Netaji Subhash Place
seat counts:   opt1 204 / opt2 190 + 45-seat cafeteria / opt3 204 + 23-seat cafeteria
key rooms:     MD suite, 2 director cabins, shared HR room, 4p + 8p meeting,
               16-seat boardroom, client lounge + dining, pantry, 2 call booths
stage:         concept          <-- concept, or delivered (only if it was actually built)
client marks:  V03 reception wall logo; V07 column signage; V12 logo on monitor
safe to name:  no
```

The **`client marks`** line is the most valuable one. It says which views show the
client's logo — on a wall, a column, signage, a screen, a mug, a lanyard, etched glass.
Without it, someone has to hunt through every image.

---

## Part 2 — For whoever builds the page (about 30 minutes)

### 1. Collect the files (5 min)
Pull the folder from Drive into a scratch directory. If only a PDF arrived, extract the
embedded images at full size:

```bash
python -m pip install pymupdf      # once
# then extract each slide's images, named by slide title
```

### 2. Triage and spot every client mark (6 min)
Pick about 10 views and 3 to 6 plans. Read `notes.txt`, then build the contact sheet:

```bash
node scripts/design-studies-images.mjs --sheet --in <renders-dir> --out sheet.jpg
```

Open `sheet.jpg`. **Look at every image.** Walls, columns, signage strips, monitor
screens, glass manifestation, mugs, lanyards, printed paper on desks.

### 3. Write the redaction plan and process the images (8 min)
Copy an existing plan from `scripts/design-studies/` and edit it. Each image gets a
`source`, a `group`, `alt`, `caption`, and `ops` if it needs redacting:

- **`crop`** — best option. Reframes the mark out entirely, no editing artefact.
- **`fill`** — patches the mark with clean pixels sampled from nearby. **Sample from
  directly above or below the mark, with the full patch width and a short height**: that
  stretch preserves the surface's shading and any vertical detail, which is what makes the
  patch invisible. Check the sample strip itself is clean — a stray plant leaf in the
  sample smears across the patch.
- **`blur`** — small incidental marks only. A large blurred rectangle reads as a redaction
  and looks worse than dropping the image.
- **Drop the image** if the mark is central and integral, for example a logo etched into a
  glass reception wall. There are usually more views than the page needs.

```bash
node scripts/design-studies-images.mjs --slug <slug> --in <renders-dir> \
  --plan scripts/design-studies/<slug>.redactions.json
```

It writes WebP at 1600 and 800 wide into `public/design-studies/<slug>/` and prints a
ready-to-paste `gallery:` block. **Then re-check the redacted images at full size** —
crop into the patched area and confirm the mark is gone and the patch blends.

### 4. Write the page (10 min)
Copy `src/content/design/nbfc-head-office-design-netaji-subhash-place-delhi.mdx` and keep
its shape: the brief → the options table → how the seat count changes the plan → finishes
→ what to settle before drawings → taking it to a built floor. Paste the generated
`gallery:` block, and write the real `alt` and `caption` text.

The page must carry a `definition` — that is the short answer AI engines quote, and it is
the first thing on the page.

### 5. Verify (4 min)
```bash
node scripts/build-content-index.mjs
node scripts/check-images.mjs
node scripts/check-client-safety.mjs
npm run build && npm run build:server && npm run build:prerender
grep -ril "<client name>" dist/          # must print nothing
```

---

## The checklist, per deck

- [ ] Contact sheet opened, and **every** image inspected at full size for client marks
- [ ] Redacted images re-checked after processing — mark gone, patch blends, no smearing
- [ ] No client name, building name or deck code in any file name or folder name
- [ ] No client name in the copy, alt text or captions
- [ ] Every 3D-view caption ends "Indicative viewpoint."
- [ ] `designStage: "concept"` unless it was genuinely built **and** a reviewer is named
- [ ] No rupee figures, no per-sq-ft rates, no statutory claims, no "we delivered"
- [ ] `metaTitle` contains "Hagerstone" and is 65 characters or fewer
- [ ] All three check scripts pass, and the prerender count rises by one
- [ ] The client's name added to the blocklist: `node scripts/blocklist-add.mjs "<Name>"` —
      **but only if the site does not already name them.** Some clients are named on
      project, estate and industry pages from approved data; blocklisting one of those
      fails the build on legitimate content. Anonymise the study, leave the guard alone.

---

## What the build enforces for you

| Guard | Refuses to build when |
| --- | --- |
| `build-content-index.mjs` | Frontmatter is invalid, alt text is missing or too short, a gallery group is empty, or a published design page has no images |
| `check-images.mjs` | An image is missing, is not WebP, is over budget (250 KB / 90 KB), or its real size disagrees with the frontmatter |
| `check-client-safety.mjs` | A blocklisted client name appears, a company suffix (Pvt Ltd, LLP, Inc) appears, or the page carries a rupee figure, a statutory claim or a delivery claim |
| `schema.ts` | `designStage: "delivered"` is published without a named `reviewedBy` |
| `prerender.js` | Any route renders a not-found page, or the sitemap and page count disagree |

**What no guard can do is see a logo inside an image.** That is the contact-sheet step, and
it is the one that actually protects the client.
