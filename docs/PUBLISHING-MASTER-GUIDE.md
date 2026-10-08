# Publishing master guide: every rule for adding a page to hagerstone.com

**Written:** 8 October 2026. **Site at this date:** 386 pages, all prerendered.
**Use this on any machine.** Clone the repo, run `npm install`, read this file, and you can
add pages without breaking anything. If you are Claude: read `CLAUDE.md`, then this file,
and treat both as the contract.

This file merges four sources into one checklist:

| Source | What it contributed |
|---|---|
| `CLAUDE.md` | The build contract and the "Google sees `ServerApp.tsx`" trap |
| `SEO-PROJECT-STATUS.md` §0 and §9 | The publishing rule and how pages are added |
| `docs/CONTENT-HANDOVER.md` | Page plan, quality bar, frontmatter, rates of work |
| `CONTENT-ENGINE-PLAN.md` | The securedengineers.com research and why the system is shaped as it is |

Where an older document disagrees with this one, **this one wins** (see §13 for the
known conflicts).

---

## 1. The five things that break the site

1. **A route that exists only in `App.tsx`.** The browser uses `src/App.tsx`. Google sees
   HTML rendered from `src/ServerApp.tsx` by `prerender.js`. A route only in `App.tsx`
   works for you and ships a 404 to Google. It happened on 15 Sept (4 blog posts) and 18 Sept
   (Kokko Town). `prerender.js` now fails the build with `rendered a not-found page`. If you
   see it, **add the missing `<Route>`. Never work around it.**
2. **Publishing something that needs an expert to check.** Nobody reviews pages before they
   go live. See §2.
3. **Corrupting `.mdx` files with PowerShell.** `Get-Content` / `Set-Content` turns em dashes
   into `â€"`. Edit `.mdx` only with an editor or Claude's Edit/Write tools. For bulk edits
   use a Node script.
4. **Bumping `updatedOn` without a real change.** Teaches Google to ignore dates site-wide.
   See §9.
5. **Pushing on a failing build.** Vercel runs the same three build commands, so a failure
   blocks the deploy for everyone. See §10.

---

## 2. The publishing rule: only write what is safe unreviewed

> If a page needs an expert to check it, do not publish it. Leave it `draft` or don't write it.

### Safe to publish

- Explanations of how something works, sourced from **published standards** (IS, NBC, ECBC,
  EN, ISO, ASTM, IEC...) with the standard **named on the page**
- Comparisons between two systems, materials or methods
- Public authority data (which body approves what, who the DISCOM is)
- Descriptions of where things typically go wrong on site
- "This depends on your building, your engineer must confirm it"
- Calculators that only compute quantities from the user's own inputs, with the formula
  shown, editable assumptions and an "indicative estimate only" disclaimer (currently
  **declined**, not being built)

### Never publish without a named reviewer

| Don't write | Why |
|---|---|
| Hagerstone's ₹ rates, price bands, cost per sq ft | Pricing is the founder's decision |
| Structural or safety **values**: wind speed or pressure, seismic values, load capacity | A wrong number is an engineering claim |
| Statutory verdicts: "you need a fire NOC", "this is compliant", "exit width must be X" | Legal exposure |
| "We delivered X" and other project claims | Only projects already approved on the site |
| Client names not already on the site | Needs permission |
| Company stats: projects, sq ft, people, years | The company's own numbers conflict across sources; reuse only what the site already shows |
| Guarantees, or comparisons naming competitors | Legal risk |
| Competitor names in copy (including securedengineers.com) | The competitor is research, not content |

Facade projects from before Akhilesh Kumar Singh joined go under **"Facade leadership
experience"**, never "Delivered work".

### Describe the framework, not the verdict

> ✅ "Reaction-to-fire classification is expressed to EN 13501-1, and it is a property of the
> specific product, not of the category. What a given building requires is determined under
> NBC 2016 Part 4 by the fire consultant and the authority having jurisdiction."
>
> ❌ "ACP with an FR-B1 core is compliant for buildings up to 15 m."

Every page ends with a **Standards referenced** section that names the codes and says the
project's engineer must confirm the specifics.

### What the code enforces, and what it cannot

| Enforced by the build | Only enforced by you |
|---|---|
| `compliance` and `cost` collections cannot publish without `reviewedBy` (`REVIEW_REQUIRED` in `src/content/schema.ts`) | Not writing rates, wind or seismic values, verdicts in any other collection |
| `designStage: "delivered"` needs `reviewedBy` | Not naming clients (the blocklist catches known names only) |
| `check-client-safety.mjs` flags ₹, "Rs 12", "per sq ft", "we delivered", "completed in N", "fire NOC", "guarantee", "certified", company suffixes and blocklisted names | A logo visible inside an image (eyeball the contact sheet) |
| Unknown frontmatter keys, bad lengths, filename ≠ slug | Whether a `related` slug is the right page (see §7) |

The safety scan is a net, not a review. After writing, run the manual scan in §10 as well.

---

## 3. The competitor research, and the rules it produced

The programme exists because **securedengineers.com** has 1,044 indexed pages and reportedly
converts about one qualified lead a day. Hagerstone started at 41 pages.

**Findings that govern what we build:**

- Their 1,044 pages are about eight repeatable page shapes fed by data, not 1,044 hand-written
  articles. The advantage is template plus data. One `.mdx` per page is our version of it.
- Their mix: 414 articles, 83 glossary, 75 industrial-zone pages, 56 service pages in a tree,
  37 calculators, 36 locations, 26 approvals, 23 architect pages, 21 projects, ~270 others.
- **They have zero service-in-city pages** (checked on their real pages). Their city page
  lists all services and links to national service pages.

**Rules from that research:**

1. **Do not build a service × city matrix** (no "HVAC contractor in Ludhiana"). Duplicate
   content risk, no proven benefit. Coverage of every service is delivered *on* the city page.
2. One page per city, one page per estate. Singular, not multiplied.
3. Sub-services nest under their parent service (the `facade`, `interiors`, `mep`, `peb`,
   `civil` collections).
4. Quality over count. Past roughly 70 glossary terms the remainder are obscure; **prefer 70
   good pages to 120 padded ones**. Compare stops at 20 (eight obvious topics already exist as
   glossary pages; a `/compare/` twin would put two of our own pages against each other).
5. Roll out in waves and watch Search Console. If a wave indexes badly, fix uniqueness before
   the next wave.
6. Prune: an article with 0 impressions after 120 days gets merged or removed.
7. Content is for decision-makers (CEOs, CFOs), not only engineers. See §8.

---

## 4. Which page type to add, and what to do

| Page type | What to do |
|---|---|
| **Blog article** | One file: `src/content/insights/<slug>.mdx`. Appears at `/blog/<slug>`. No router edits |
| **Glossary term** | `src/content/glossary/<slug>.mdx` |
| **Comparison** | `src/content/compare/<slug>.mdx` |
| **Guide (pillar)** | `src/content/guides/<slug>.mdx` |
| **Material** | `src/content/materials/<slug>.mdx` |
| **Service sub-page** | `src/content/{facade,interiors,mep,peb,civil}/<slug>.mdx` |
| **Industry / estate** | `src/content/{industries,estates}/<slug>.mdx` |
| **Design study** (`/our-designs`) | Follow `docs/OUR-DESIGNS-INTAKE.md`. One `.mdx` in `src/content/design/`, images via `scripts/our-designs-images.mjs`. Never name or show the client. `designStage` stays `concept` unless a reviewer is named |
| **Project** | Add an entry to `src/data/project.ts`. Needs founder approval, not routine content work |
| **City** | Add to `src/data/cities.ts` with `published: true`. On hold pending the Search Console indexation check |
| **Fixed page** (new top-level) | Add the route to **both** `App.tsx` and `ServerApp.tsx`, add the path to `routesToPrerender` in `prerender.js`, and add it to `CODE_ROUTED_PATHS` if it was a Supabase route |
| **Legacy `.tsx` blog post** | **Do not.** Old posts keep working; new articles are MDX only |
| **New collection** | Three edits in `schema.ts` (`COLLECTIONS`, `COLLECTION_BASE_PATH`, `COLLECTIONS_WITHOUT_INDEX` if its base path is already a real page), a `COPY` entry in `src/pages/CollectionIndexPage.tsx`, a `COLLECTION_LABEL` in `src/templates/ContentArticle.tsx` |

Not open: `/compliance/`, `/cost/` (blocked in code), `/calculators/` (declined),
service × city pages (never), `/locations/` and `/estates/` growth (on hold).

Any page with a "not found" branch must put `data-not-found` on its root element so the
prerender guard can see it.

---

## 5. The frontmatter contract (exact)

The schema (`src/content/schema.ts`) is **strict**: an unknown key fails the build.
The filename must equal `slug`. The folder must match `collection`.

```yaml
---
title: "..."                 # 10-90 chars. The H1.
metaTitle: "..."             # 10-65 chars. The <title> tag. See §5.1
metaDescription: "..."       # 70-165 chars, aim 140-160
slug: "my-page"              # lowercase-kebab-case, equals the filename
collection: "glossary"       # equals the folder name
status: "published"          # draft | review | published (default draft)
publishedOn: "2026-10-08"    # YYYY-MM-DD
author: "Dhruv Agarwal"      # a string today (default Dhruv Agarwal)
heroImage: "/blog/insights/<slug>.webp"   # optional
heroImageAlt: "..."          # min 10 chars. REQUIRED whenever heroImage is set
primaryKeyword: "..."        # the one query this page is for (min 3 chars)
keywords: ["...", "..."]     # 3-6 supporting queries
definition: "..."            # max 400 chars. REQUIRED, see §5.2
citations:
  - label: "IS 875 (Part 3)"
    clause: "Wind loads on buildings and structures"
    url: "https://..."       # optional, overrides the publisher map in §6
faqs:                        # 5-6. question min 10 chars, answer min 30
  - question: "..."
    answer: "..."
related: ["real-slug"]       # slugs that exist. See §7
---
```

Optional and special keys: `updatedOn` (§9), `reviewedBy` / `reviewedOn` (needed for
`compliance`, `cost`, and `designStage: "delivered"`), `gallery` / `galleryGroups` (§11),
`designStage` (`concept` default, design pages only).

### 5.1 `metaTitle` and the " | Hagerstone International" suffix

`SEOHead` appends `" | Hagerstone International"` (26 characters) whenever `metaTitle` does
not already contain the word "Hagerstone". Google truncates near 60 characters. Either put
"Hagerstone" in the `metaTitle` yourself, or keep it to about **34 characters**.

### 5.2 `definition`: the answer block

Required by the build for: glossary, compare, guides, insights, industries, estates,
materials, facade, interiors, mep, peb, civil. It renders above the fold and is the text
answer engines quote. Write a complete standalone answer to the page's main question, not an
introduction to one. Max 400 characters. Use only facts already in the page.

### 5.3 Author

`author` is a plain string today. Planned: an enum of author slugs with per-author profiles
(see `docs/SEO-AEO-GEO-PLAN.md`, step 2b). Until that ships keep the default. Do not invent
attributions for MEP, PEB or civil pages.

---

## 6. Citations: every standard must be a link (fix made 8 Oct 2026)

Each `citations[].label` is turned into a link to the publisher by rules in
`src/data/standards.ts` (first match wins; a frontmatter `url` always wins). The build warns
when a label has no link.

**Prefixes that link automatically:** NBC, IS, ECBC, EN, EN ISO, ISO, ISO/IEC, ASTM,
ASHRAE 62.1, ASHRAE, IEC, AAMA, CEA, CPCB, UL, ACI, IEEE, BS, SMACNA, TIA.

**Still unlinked (3 warnings, known and accepted):** Unified Building Bye-Laws for Delhi,
RERA 2016, Indian Contract Act 1872. India Code was mid-migration when checked. Either leave
the warning or give that citation a `url` in frontmatter.

**Rules:**
- Write labels so the prefix matches: `IS 875 (Part 3)`, `EN 13501-1`, `ASTM E84`, not
  "Indian Standard 875".
- Link to the publishing body, never a mirror or a PDF host.
- New body? Add a rule in `standards.ts`, **place a specific prefix before a broader one**,
  and check the URL returns HTTP 200 first.
- Only cite a standard you can name correctly. A made-up clause number is a fabricated claim.

---

## 7. `related` slugs must exist (fix made 8 Oct 2026)

`related` takes the **slug** of another page. The build does **not** check that it exists, so
a typo or a planned-but-unwritten page ships as a dead link. `materials/pvb-interlayer.mdx`
pointed at `ionoplast-interlayer`, which does not exist; the line has been removed.

Before pushing, run the check in §10 ("related slugs"). To link to a page you are about to
write, write that page first.

Check the topic is not already covered before you start: search `src/content/` for the
primary keyword. **Duplicating an existing page is worse than not writing one.**

---

## 8. The quality bar

Open `src/content/compare/acp-vs-hpl-cladding.mdx` and
`src/content/glossary/plenum-depth.mdx` before writing and match them. Every page has:

1. A `definition` that answers the question on its own
2. A short opening section saying what the decision or concept actually turns on
3. **A table** (side-by-side for comparisons; what-it-covers / what-it-doesn't for glossary)
4. Two or three explanatory sections with real substance
5. A **"Common mistakes"** section, written from site experience
6. **5-6 FAQs** answering what someone genuinely asks next
7. A **"Standards referenced"** closing section, deferring specifics to the project engineer
8. `related` pointing at real slugs

**Target length:** glossary ~550 words, compare ~1,100, blog article 1,200-1,800, guide ~2,000+.

**What makes pages rank:** correct a misconception rather than restate a definition (DG vs
UPS is not a choice; U-value is assessed on the assembly; ACH is the wrong way to specify an
office; cable derating fails silently). Frame technical facts as commercial consequences.
Open with what the decision costs, target evaluation phrasing ("unitized vs stick-built",
"Cat A vs Cat B who pays"), and never oversell, including about what Hagerstone cannot tell
you without seeing the building.

**Pace:** 15-25 pages in a working session. Push in batches of **10-25, never 100**, or crawl
budget is throttled. Do not rush 30-40 a day: they come out thin and near-duplicate, the
doorway pattern Google demotes sitewide.

---

## 9. `updatedOn`: when to set it, and when never

Set `updatedOn: "YYYY-MM-DD"` (that day's date) **only when you genuinely rewrite a page**:
a new section, corrected facts, substantially revised text. It feeds the sitemap `<lastmod>`,
Article `dateModified`, and `scripts/indexnow.mjs`, which tells Bing which URLs changed.

**Never** set it for a typo, a link fix, a reformat, a `related` fix, adding definitions or
citations, or to make a page look fresh. Leave `publishedOn` alone. Pages outside the MDX
engine (home, about, projects, cities) deliberately carry no sitemap date.

(The 8 Oct fixes in this guide touch `pvb-interlayer.mdx` only to remove a dead link, so no
`updatedOn`.)

---

## 10. Before every push

Run from the repo root.

```bash
git pull --rebase                                  # teammates push to main too
node scripts/check-meta-lengths.mjs src/content/<collection>   # fast length check
node scripts/build-content-index.mjs               # frontmatter + citation warnings
node scripts/check-images.mjs                      # image budget + declared dimensions
node scripts/check-client-safety.mjs               # client names, rates, unreviewed claims
npx tsc --noEmit -p tsconfig.app.json              # typecheck
npx eslint <changed files>                         # NOT `npm run lint`: pre-existing error in Index.tsx
npm run build && npm run build:server && npm run build:prerender
```

`npm run build` also runs the content index, image and client-safety checks as `prebuild`.

**Prerender must end with:**

```
Prerender complete: N succeeded, 0 failed
Sitemap: N URLs (matches prerendered pages)
```

At 8 Oct 2026, N = 386. Never push on any failure.

### Manual safety scan (must return nothing)

```bash
grep -loE "₹|Rs ?[0-9]" src/content/<collection>/*.mdx
grep -nohiE "(you must obtain|is compliant|we guarantee|will be approved|we delivered)" src/content/<collection>/*.mdx
```

### Related-slug check (must print `broken related: 0`)

Save as a scratch file outside the repo, or paste into `node -e`:

```js
const fs = require("fs"), p = require("path");
const slugs = new Set(), pages = [];
for (const c of fs.readdirSync("src/content")) {
  const d = "src/content/" + c;
  if (!fs.statSync(d).isDirectory() || c.startsWith(".")) continue;
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith(".mdx")) continue;
    const fm = fs.readFileSync(p.join(d, f), "utf8").split("---")[1] || "";
    slugs.add((fm.match(/^slug:\s*"?([^"\n\r]+)/m) || [])[1]);
    pages.push([c + "/" + f, fm]);
  }
}
let bad = 0;
for (const [name, fm] of pages) {
  const m = fm.match(/related:\s*\r?\n((?:\s+-\s*.*\r?\n?)+)/);
  if (!m) continue;
  for (const l of m[1].split(/\r?\n/)) {
    const s = l.replace(/^\s*-\s*/, "").replace(/["']/g, "").trim();
    if (s && !slugs.has(s)) { console.log("BROKEN related", name, "->", s); bad++; }
  }
}
console.log("broken related:", bad);
```

(Inline `related: ["a", "b"]` lists are not covered by this snippet; keep `related` as a
dash list in new pages, or check by eye.)

### Errors and what they mean

| Error | Fix |
|---|---|
| `metaDescription: String must contain at most 165 character(s)` | Run `check-meta-lengths.mjs`; it prints the length and how much to cut |
| `Unrecognized key(s) in object` | You invented a frontmatter field. Only the keys in §5 exist |
| `<collection> entries require a definition` | Add `definition` |
| `content requires reviewedBy` | You cannot publish that collection. Pick another |
| `filename must equal slug` | Rename the file or the slug |
| `heroImageAlt is required whenever heroImage is set` | Add `heroImageAlt` |
| `rendered a not-found page` | A route is missing. **Do not work around it.** Add it to both routers |
| `Sitemap ... drift` | Sitemap and prerendered pages disagree; find the page in one but not the other |
| `N citation(s) have no link` | Warning only. Fix per §6 |

---

## 11. Images

- **Blog hero:** exactly **1600 × 900** WebP, under 250 KB, at
  `public/blog/insights/<slug>.webp`. `ContentArticle.tsx` hard-codes `width={1600}
  height={900}`; any other shape renders distorted and causes layout shift. The build checks
  size but cannot know the intended aspect ratio. An article with **no** hero is fine (text-only
  card); a wrongly shaped one is not.
- **Images on a content page go in frontmatter** (`heroImage`, `gallery`), **never** as
  `<img>` or markdown in the `.mdx` body. Frontmatter is what the build validates for alt
  text and size, and what the image sitemap and `ImageObject` schema are generated from.
- **Gallery images:** `src` must match `/<section>/<slug>/<name>-1600.webp` (lowercase
  kebab-case); an `-800.webp` sibling must exist; `alt` 15-160 chars; `caption` 10-200 chars;
  real `width` and `height` (max 1600) that match the file; every `group` must be declared
  in `galleryGroups`, and every group must have at least one image. Max 12 images.
- **Format and budget:** WebP only, large ≤250 KB, small ≤90 KB, 1600 px max width.
- Design pages: at least one gallery image to publish; no client logos in any image.

---

## 12. Things not to touch

- `/our-designs/`: separate workflow in `docs/OUR-DESIGNS-INTAKE.md`
- `/projects/`: real delivered work, approved individually
- `src/data/cities.ts`: on hold pending the indexation check
- `src/content/.generated/` and the `<path>.md` copies from `prerender.js`: generated
- The sales phone number lives only in `src/lib/contact.ts`
- **Every lead form goes through `submitLead()` in `src/lib/leads.ts`.** Never write a form
  that fakes success; that bug existed twice
- `config/name-blocklist.json`: add a client name with `node scripts/blocklist-add.mjs "<Name>"`
  (names are stored hashed because the repo is public)

---

## 13. Known conflicts between older documents

| Older text | What is true now |
|---|---|
| `CONTENT-ENGINE-PLAN.md` proposes `windSpeedMs`, `seismicZone`, `snowLoadKnM2` and `approxRateBandInrSqft` on city/estate pages | **Forbidden** by §2: structural values and Hagerstone rates. Do not add them |
| `CONTENT-ENGINE-PLAN.md`: `/insights/` as a separate section, 300 pages | One article section, `/blog/`. The `insights` folder serves under it |
| `CONTENT-ENGINE-PLAN.md`: 19 calculators, 520-page service × city matrix, 65 cities | Calculators declined; matrix never; cities and estates on hold |
| `CONTENT-HANDOVER.md` counts (298 pages, glossary 45) | Out of date. Site is 386 pages, glossary 70, services tree 61, guides 12 |
| `SEO-PROJECT-STATUS.md` "batches of ~50" | Use 10-25 per push (§8) |
| `CLAUDE.md` / SEO plan: no `updatedOn` on definitions work | Still true: adding definitions or citations is not a rewrite |

---

## 14. Quick checklist (print this)

- [ ] Topic not already on the site (searched `src/content/`)
- [ ] Nothing from the "never publish" table (§2): no ₹, wind/seismic/load values, verdicts,
      "we delivered", client names, company stats, guarantees, competitors
- [ ] File in the right folder; **filename = `slug`**; `collection` = folder
- [ ] Frontmatter only uses keys from §5; lengths in range; `definition` present
- [ ] `metaTitle` has "Hagerstone" or is about 34 chars
- [ ] Citations named with a linkable prefix; "Standards referenced" section present
- [ ] Table, "Common mistakes", 5-6 FAQs
- [ ] Every `related` slug exists (§10 check prints 0 broken)
- [ ] Hero 1600×900 WebP ≤250 KB with `heroImageAlt`; no `<img>` in the body
- [ ] `updatedOn` set only for a genuine rewrite of an existing page
- [ ] `.mdx` edited with the editor or Edit/Write, never PowerShell
- [ ] Manual safety scan returns nothing
- [ ] Full build + prerender: `0 failed`, sitemap matches
- [ ] `git pull --rebase`, then push in a batch of 10-25
