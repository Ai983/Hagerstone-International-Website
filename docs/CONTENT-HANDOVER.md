# Content handover — adding technical pages to hagerstone.com

**For:** the intern taking over technical content production, and the Claude session helping her.
**Written:** 25 September 2026. **Site at handover:** 280 pages.

If you are Claude reading this: treat this file as the task brief. Read `CLAUDE.md` in the
repo root first (it is short and it is the build contract), then this file. Do not read
`SEO-PROJECT-STATUS.md` unless you need history — it is 760 lines and mostly background.

---

## 1. The one rule that matters most

**Nobody reviews these pages before they go live.** They are published in batches. So the
only content that may be written is content that is **safe with no human check**.

This is not a style preference. It is the reason the whole system is allowed to exist.

### ✅ Safe to publish

- Explanations of how something works, sourced from **published standards** — IS, NBC,
  ECBC, EN, ASTM, ISO — with the standard **named on the page**
- Comparisons between two systems, materials or methods
- Public authority data (which body approves what, who the DISCOM is)
- Descriptions of where things typically go wrong on site
- "This depends on your building — your engineer must confirm it"

### ❌ Never publish

| Don't write | Why |
|---|---|
| Hagerstone's ₹ rates, price bands, cost per sq ft | Pricing is the founder's decision, unresolved |
| Structural or safety **values** — wind speed, wind pressure, seismic values, load capacity | A wrong number is an engineering claim |
| Statutory verdicts — "you need a fire NOC", "this is compliant", "exit width must be X" | Legal exposure |
| "We delivered X" / project claims | Only projects already approved on the site |
| Client names not already on the site | Needs permission |
| Company stats — projects, sq ft, people, years | The company's own numbers conflict across sources |
| Guarantees, or comparisons naming competitors | Legal risk |

### How to stay safe while still being useful

You can write about fire, wind and compliance — you just describe **the framework, not the
verdict**. The pattern used on every existing page:

> ✅ "Reaction-to-fire classification is expressed to EN 13501-1, and it is a property of the
> specific product, not of the category. What a given building requires is determined under
> NBC 2016 Part 4 by the fire consultant and the authority having jurisdiction."

> ❌ "ACP with an FR-B1 core is compliant for buildings up to 15 m."

Every page ends with a **Standards referenced** section that names the codes and says the
project's engineer must confirm the specifics. Copy that habit exactly.

**Two collections are hard-blocked in code:** `cost` and `compliance`. The build refuses to
publish them without a `reviewedBy` name. Do not try to work around it — see
`src/content/schema.ts`, `REVIEW_REQUIRED`.

---

## 2. Why we are doing this at all — the competitor benchmark

The whole content programme exists because of one piece of research. A competitor,
**securedengineers.com**, has **1,044 pages** indexed, and reportedly converts roughly one
qualified lead a day from them. Hagerstone had 41 pages when this started.

Their verified sitemap breaks down like this:

| Their pattern | Pages | What it is |
|---|---:|---|
| `/insights/` | 414 | Articles, ~1,800–2,000 words, FAQ block, 8+ internal links |
| `/glossary/` | 83 | ~500 words: definition → why it matters → table → mistakes → FAQ |
| `/industrial-zones/` | 75 | Hyperlocal estate pages with real local authority data |
| `/services/` | 56 | Service pages with child sub-service pages beneath them |
| Calculators | 37 | Instant, ungated, with ~2,100 words of method below the tool |
| `/locations/` | 36 | One page per city |
| `/approvals/` | 26 | Statutory process guides |
| `/architects/` | 23 | Referral hub for design teams |
| `/projects/` | 21 | Case studies |
| Others | ~270 | Industries, guides, policy pages |

**The important finding: those 1,044 pages are not 1,044 hand-written articles.** They are
roughly eight repeatable page shapes fed by data. The advantage is the *template plus data*
approach, not writing volume — which is why one intern with Claude can realistically
compete with it.

**The second finding, from checking their actual pages:** they have **zero**
service-in-city pages. No "HVAC contractor in Ludhiana". Their city pages cover all
services on one page and link to national service pages. So do not build a
service × city matrix — it is duplicate-content risk for no proven benefit.

---

## 3. Where the site is right now

**280 pages**, every one prerendered to static HTML and in the sitemap. The whole site,
by section:

| Section | Pages |
|---|---:|
| `/materials/` | 60 |
| `/glossary/` | 45 |
| Top-level pages (home, about, contact, section hubs…) | 41 |
| `/services/` (includes facade, interiors, MEP, PEB, civil) | 40 |
| `/locations/` (cities) | 26 |
| `/compare/` | 20 |
| `/blog/` | 16 |
| `/estates/` | 8 |
| `/industries/` | 8 |
| `/our-designs/` | 8 |
| `/projects/` | 8 |
| **Total** | **280** |

You can regenerate this yourself any time after a build:

```bash
grep -oE "<loc>https://hagerstone.com[^<]*" dist/sitemap.xml | wc -l
```

The build guarantees this number is honest — `prerender.js` fails if the sitemap count and
the prerendered file count disagree. So there are no orphan pages and nothing in the
sitemap that 404s.

**30 of those 280 were added on 24 September** — 20 `/compare/` pages (a brand new section)
and 10 `/glossary/` terms.

---

## 4. The full page plan — every section, and whether it is safe to add

This is the complete target, from `CONTENT-ENGINE-PLAN.md`, updated to today's counts.
**Read the "Safe to add?" column before starting anything.**

| Path | Now | Target | Left | Safe to add unreviewed? |
|---|---:|---:|---:|---|
| `/insights/` | 0 | 300 | 300 | ✅ Yes — but settle the blog overlap first |
| `/glossary/` | 45 | 120 | 75 | ✅ Yes — but stop near 70, see below |
| `/materials/` | 60 | 60 | 0 | ✅ Done |
| `/compare/` | 20 | 30 | 10 | ✅ Yes — but largely complete, see below |
| `/services/` tree | 40 | 61 | 21 | ✅ Yes |
| `/guides/` | 0 | 12 | 12 | ✅ **Yes — start here** |
| `/architects/` | 0 | 25 | 25 | ✅ Yes |
| `/industries/` | 8 | 16 | 8 | ✅ Yes |
| `/locations/` (cities) | 26 | 65 | 39 | ⚠️ Hold — indexation check first |
| `/estates/` | 8 | 110 | 102 | ⚠️ Hold — indexation check first |
| `/states/` hubs | 0 | 8 | 8 | ⚠️ Hold — same reason |
| Service × city | 0 | 40 | 40 | ❌ Don't — competitor has zero of these |
| `/projects/` | 8 | 40 | 32 | ❌ Not content work — needs founder approval |
| `/our-designs/` | 8 | — | — | ❌ Separate workflow, do not touch |
| `/compliance/` | 0 | 45 | 45 | 🔒 **Blocked in code** — needs a reviewer |
| `/cost/` | 0 | 25 | 25 | 🔒 **Blocked in code** — needs rate bands |
| `/calculators/` | 0 | 19 | 19 | ❌ **Declined** — Yash decided not to build these |

**Total genuinely open to you right now: roughly 380 pages** across insights, glossary,
compare, services, guides, architects and industries — without needing a single approval
from anyone.

Two of the biggest blocks (`/compliance/` 45 and `/cost/` 25) are the highest-value pages
on the whole plan and they unlock the moment someone is named as a reviewer. That is worth
raising with the founder — see §12.

### Where the plan's numbers should be trusted less than this file

- **Glossary 120** was set before anyone counted what was already written. Past ~70 the
  remaining terms are obscure. Prefer 70 good pages to 120 padded ones.
- **Compare 30** turned out to be optimistic: eight of the obvious comparison topics
  already exist as glossary pages (anodising vs powder coating, Cat A vs Cat B, laminated
  vs toughened, gypsum vs mineral fibre, Cat6 vs Cat6a, raft vs pile, HT vs LT, carpet vs
  built-up). Writing `/compare/` versions would put two of our own pages against each other
  for the same query. 20 is a sensible stopping point.
- **Insights 300** overlaps the existing 16 blog posts, and the planned
  `/blog/* → /insights/*` redirect was never done. Do not start this until someone decides
  whether blog and insights are one section or two.

---

## 5. What to write next, in priority order

### Priority 1 — `/guides/` (12 pages, none exist)

These are long-form pillar pages, ~2,000+ words, that the glossary and compare pages link
up into. They matter most because they are the pages a **decision-maker** actually reads —
a CEO or CFO evaluating a firm, not an engineer looking up a term.

Suggested titles:

1. Office fit-out in India, end to end — brief to handover
2. Facade engineering for Indian commercial buildings
3. Choosing a fit-out contractor — what to ask and what to check
4. MEP coordination for interiors — where projects lose time
5. Industrial building delivery — shed to production
6. Workplace planning — headcount to floor plate
7. Commercial glazing selection
8. Fit-out programme and phasing — how the sequence really runs
9. Contract structures for interiors projects
10. Handover, snagging and defects liability
11. Retrofitting an occupied office
12. Pre-engineered buildings — a buyer's guide

### Priority 2 — `/glossary/` (target ~70, so ~25 more)

Short pages, ~550 words. Check `src/content/glossary/` first — 45 already exist and
**duplicating one is worse than not writing it**.

Candidate terms not yet written: curtain wall transom · glazing gasket · pressure
equalisation · silicone weatherseal · aluminium anodising thickness · fire damper ·
smoke extract · static regain duct design · chilled beam · condensate drainage ·
busbar trunking · RCCB vs MCB · lux level · daylight factor · reverberation time ·
acoustic flanking · screed types · movement joint · expansion joint facade ·
tolerance and setting out · snagging · defects liability period · practical completion ·
commissioning · as-built drawings

**Do not push glossary to 120.** Past roughly 70 the remaining terms are obscure and add
page count without adding traffic.

### Not now

- `/cost/`, `/compliance/` — blocked
- `/locations/`, `/estates/` — wait for the indexation check
- `/insights/` — 300 pages planned, but it overlaps the existing blog and the
  `/blog/* → /insights/*` redirect was never done. Settle that before starting.

---

## 6. How to add a page

For glossary, compare, guides, materials, facade, interiors, mep, peb, civil, industries,
estates — **one `.mdx` file is the whole job**. No router edits. No code.

```
src/content/<collection>/<slug>.mdx
```

The filename **must equal** the `slug` in the frontmatter, or the build fails.

### Frontmatter — exact rules

The schema is strict: an unknown key fails the build, and lengths are enforced.

```yaml
---
title: "..."                 # 10-90 chars. The H1.
metaTitle: "..."             # 10-65 chars. The <title> tag. See gotcha below.
metaDescription: "..."       # 70-165 chars. Aim for 140-160.
slug: "..."                  # lowercase-kebab-case, must equal the filename
collection: "glossary"       # must match the folder
status: "published"
publishedOn: "2026-09-25"    # YYYY-MM-DD
author: "Dhruv Agarwal"
primaryKeyword: "..."        # the one query this page is for
keywords:                    # 3-6 supporting queries
  - "..."
definition: "..."            # max 400 chars. REQUIRED for glossary.
citations:                   # the standards, shown on the page
  - label: "IS 875 (Part 3)"
    clause: "Wind loads on buildings and structures"
faqs:                        # 5-6. question min 10 chars, answer min 30.
  - question: "..."
    answer: "..."
related:                     # slugs of other pages. Use REAL existing slugs.
  - "..."
---
```

**`metaTitle` gotcha:** `SEOHead` appends `" | Hagerstone International"` — 26 characters —
whenever `metaTitle` does not already contain the word "Hagerstone". Google truncates the
title around 60 characters. So either put "Hagerstone" in the `metaTitle` yourself, or keep
it to **about 34 characters** so the appended version still fits.

**`definition` is the AEO block.** It renders above the fold and it is the text an AI answer
engine will quote. Write it as a complete, standalone answer to the page's main question —
not an introduction to one.

---

## 7. The quality bar

Look at `src/content/compare/acp-vs-hpl-cladding.mdx` and
`src/content/glossary/plenum-depth.mdx` before writing anything. Match them.

Every page has:

1. **A `definition`** that answers the question completely on its own
2. **A short opening section** that says what the decision or the concept actually turns on
   — not a dictionary restatement of the title
3. **A table.** Comparison pages need a side-by-side; glossary pages need a
   what-it-covers / what-it-doesn't or a components table
4. **Two or three explanatory sections** with real substance
5. **A "Common mistakes" section** — this is the most quoted part of these pages, because
   it is the part written from experience rather than from a textbook
6. **5–6 FAQs** that answer what someone would genuinely ask next
7. **A "Standards referenced" closing section** naming the codes and deferring specifics to
   the project engineer
8. **`related`** pointing at real existing slugs

### What makes these pages rank

The best pages **correct a misconception** rather than just define a term. Examples already
live:

- *DG set vs UPS* — people search it as a choice; it isn't one. A UPS covers the first
  seconds, a generator covers the following hours, and most buildings need both.
- *U-value* — routinely quoted for a product when compliance is assessed on the assembly.
- *Air changes per hour* — used to specify offices when the real question is outdoor air
  per person.
- *Cable derating* — fails silently, because the breaker never trips.

When you can find that angle, take it. A page that fixes a wrong assumption has no
competition on the results page.

### Writing for decision-makers

The instruction from the founder is that this content should attract CEOs and senior
buyers, not just engineers. In practice that means:

- Open with **what the decision costs**, not with what the product is
- Frame technical facts as **commercial consequences** — "every enclosed room takes area
  twice, once for the room and once for the circulation to reach it"
- Target evaluation-intent phrasing: *"unitized vs stick-built curtain wall cost"*,
  *"Cat A vs Cat B who pays"*, *"PEB vs RCC which is faster"* — someone comparing options
  is close to buying; someone searching "office interior designer" is still shopping
- Never oversell. These pages earn trust by being useful and honest, including about what
  Hagerstone cannot tell you without seeing your building

---

## 8. Before pushing — run all of this

```bash
node scripts/check-meta-lengths.mjs src/content/<collection>   # fast length check
node scripts/build-content-index.mjs                           # frontmatter validation
node scripts/check-images.mjs                                  # images
node scripts/check-client-safety.mjs                           # names, rates, claims
npx tsc --noEmit -p tsconfig.app.json                          # typecheck
npm run build && npm run build:server && npm run build:prerender
```

The prerender **must** end with:

```
Prerender complete: N succeeded, 0 failed
Sitemap: N URLs (matches prerendered pages)
```

Vercel runs the same three build commands, so a failure here blocks the deploy for
everyone. Never push on a failing build.

Then a manual safety scan of what you wrote:

```bash
grep -loE "₹|Rs ?[0-9]" src/content/<collection>/*.mdx
grep -nohiE "(you must obtain|is compliant|we guarantee|will be approved)" src/content/<collection>/*.mdx
```

Both should return nothing.

**Teammates push to `main` too.** Always `git pull --rebase origin main` before pushing.

---

## 9. Errors you will hit, and what they mean

| Error | Fix |
|---|---|
| `metaDescription: String must contain at most 165 character(s)` | Run `check-meta-lengths.mjs` — it prints the actual length and how much to cut |
| `Unrecognized key(s) in object` | You invented a frontmatter field. Only the keys in §6 exist |
| `glossary entries require a definition` | Add `definition` — it is mandatory for that collection |
| `compliance content requires reviewedBy` | You cannot publish that collection. Pick a different one |
| `filename must equal slug` | Rename the file or the slug so they match |
| `rendered a not-found page` | A route is missing. **Do not work around it** — see `CLAUDE.md` |

---

## 10. Things not to touch

- **`/our-designs/`** — the design studies section. Separate workflow in
  `docs/OUR-DESIGNS-INTAKE.md`, client anonymity rules, needs founder sign-off. Not part of
  this job.
- **`/projects/`** — real delivered work, approved individually. Not content production.
- **`src/data/cities.ts`** — on hold pending the indexation check.
- **`.mdx` files via PowerShell `Get-Content` / `Set-Content`** — it corrupts UTF-8 and turns
  em dashes into `â€"`. Use the editor or Claude's Write/Edit tools only.

---

## 11. A realistic rate

A glossary page is about 550 words; a compare page about 1,100; a guide about 2,000.

Twenty pages in a working session is achievable and was done on 24 September. What takes the
time is not the writing — it is checking that the topic isn't already covered, that the
`related` slugs exist, and that nothing strayed into a rate, a structural value or a
compliance verdict.

**Push in batches of 10–25, not 100.** The site added 30 pages on 24 September and that is
already a large jump for a 250-page site. Publishing 100 at once risks crawl budget being
throttled, which delays indexation of everything, including the good pages.

---

## 12. Open questions for the founder

These block work and only he can answer them:

1. **Fit-out cost bands per grade** — three conflicting numbers are live on the site today.
   Blocks every `/cost/` page and the cost calculator.
2. **Who reviews technical content**, if anyone — this is what unlocks `/compliance/` and
   `/cost/`, the two highest-value blocked sections.
3. **Which client names may be used**, and the correct company statistics.
4. **Search Console indexation check** — needed before any more location or estate pages.
