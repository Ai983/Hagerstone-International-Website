# Hagerstone SEO & Content Engine — Status and Next Steps

**Last updated:** 18 September 2026
**Purpose:** Complete handover. Read this file first in a new chat — it contains the full
context of the work done 9–16 September 2026, the research behind it, what is still
outstanding, and how to continue.

> **18 Sept summary:** the facade attribution issue is **resolved** (`52d19f3`). The
> estimator lead leak is fixed (`4b20154`). `/materials/` is **complete at 60 pages**. The
> site is at **234 pages**. **New urgent bug:** the 4 blog posts published 15 Sept were
> never added to `ServerApp.tsx`, so Google gets a **404 page** for them — see §2.

**Supersedes:** [CONTENT-ENGINE-PLAN.md](CONTENT-ENGINE-PLAN.md) (the original strategy
document, written 9 Sept). That file is still accurate as *strategy*; this file records
what was actually **built**, what changed, and what is left.

---

## 0. Publishing rule — READ BEFORE WRITING ANY PAGE

**Nobody reviews pages before they go live.** Pages are published in batches of ~50,
and reviewing them is not possible. So the rule is simple:

> **Only publish content that is safe with no human review.
> If a page needs an expert to check it, do not publish it — leave it as `draft` or don't write it.**

### ✅ Safe — publish freely

- Explanations of materials, systems and terms taken from **published standards**
  (IS, NBC, ECBC, EN, ASTM), with the standard named on the page
- How-to, process and comparison content ("Cat A vs Cat B", "stick vs unitized")
- City and estate pages that name **public** authorities (development authority, DISCOM,
  fire NOC issuer, pollution board). Batches are capped at ~25, per §8.
- **Calculators that only compute quantities from the user's own inputs**: area, sheet
  count, seat count, tile or paint quantity, and preliminary AC tonnage. Every one must
  show the formula, let the user edit the assumptions (wastage %, density, loading %),
  cite the standard for any default, and carry the "indicative estimate only, not a
  design or quotation" disclaimer under the result.
- A **user-entered** ₹ rate field on a calculator, where the user types the rate and
  Hagerstone claims none

### ❌ Never publish without a named reviewer

| Don't publish | Why |
|---|---|
| **Hagerstone's own ₹ rates or price bands** | Pricing is Sir's decision (§7). Blocks `/cost/` pages and cost calculators. |
| **Structural or safety numbers**: wind speed or pressure, seismic values, load capacity | A wrong number is an engineering claim (§4.4) |
| **Statutory verdicts**: "you need / don't need a fire NOC", exit width compliance | A wrong answer creates legal exposure. The `/compliance/` collection stays locked. |
| **Project claims**: "we delivered X" | Only projects already in `cities.ts` from CPS data, or approved by Sir. See the facade incident in §2.2. |
| **Client names** not already on the site | Needs permission (§7) |
| **Company stats** (projects, sq ft, people, years) | The numbers conflict between sources (§7). Reuse only what is already on the site. |
| **Guarantees or comparisons with named competitors** | Legal risk |

### How the code enforces it

`REVIEW_REQUIRED` in `src/content/schema.ts` = `["compliance", "cost"]`. The build
**refuses** to publish a page in those collections without `reviewedBy`, so risky
collections cannot go live by accident. `calculators` was removed from that list on
18 Sept, because calculators are now limited by design to the safe list above. For every
other collection, **the rule is enforced by what we choose to write**, so check each
batch against the ❌ table before publishing.

---

## 0b. The /office-design section (added 21 September)

Sir asked for the design team's work on the website — layout options, 3D views and
presentations, with a Drive folder the team uploads to daily. Built as the 17th content
collection, `design`, at `/office-design`.

**Why a separate section, not `/projects`:** decks are **client proposals**, not completed
work. `/projects` is for delivered projects. Every design page defaults to
`designStage: "concept"`, says so in a banner above the hero, and carries
`creativeWorkStatus: "Concept design"` in its schema. Publishing `delivered` requires a
named `reviewedBy`, the same gate as cost and compliance.

**Why it will earn traffic:** `/services/office-design-build` owns the transactional terms
("office design and build company"). This section owns **evidence and comparison** intent —
*office layout for 100 employees*, *office floor plan 200 workstations*, *how many meeting
rooms for a 100-person office*. Nobody in India publishes real layout studies with the
reasoning attached. Disjoint primary keywords keep the two from competing.

**The client is never identified** — not in the copy, alt text, file names, or the images.
Logos are edited out with a recorded, repeatable recipe, and `scripts/check-client-safety.mjs`
fails the build on a blocklisted name (hashed, because the repo is public), a company
suffix, a rupee figure or a delivery claim. **No script can see a logo inside a bitmap** —
that is the contact-sheet review in `docs/OUR-DESIGNS-INTAKE.md`, and it is not optional.

### What shipped

| Piece | Detail |
|---|---|
| Collection | `design` → `/office-design`, listing page + article template, no router edits needed |
| Images in frontmatter | New `gallery` / `galleryGroups` fields, Zod-validated: alt text ≥15 chars, real width/height, captions. **Not** `<img>` in MDX — frontmatter is what the build can check and the sitemap can harvest |
| First page | `/office-design/nbfc-head-office-design-netaji-subhash-place-delhi` — 3 layout options, the annotated interior study, 12 gallery images + hero |
| Image pipeline | `scripts/our-designs-images.mjs`: contact sheet, redaction ops (crop / fill / blur), WebP at 1600 + 800, prints a paste-ready `gallery:` block |
| Guards | `check-images.mjs` (budget 250/90 KB, dimensions must match the file) and `check-client-safety.mjs`, both wired into `prebuild` |
| Image SEO | Per-image `ImageObject` with caption + licence (Licensable badge eligible), `ImageGallery` node, image sitemap now carries content images with titles and captions, absolute `og:image` |
| `llms.txt` | **Now generated** from the content index at build time and written to `dist/`. `public/llms.txt` deleted. It lists 206 pages (was 13) including all 26 locations, and the disputed stats are gone — see §7.4 |
| Docs | `docs/OUR-DESIGNS-INTAKE.md` — the Drive folder spec for the design team and the ~30-minute per-deck workflow |

**Site is at 237 pages.** Next decks follow the intake doc; ask the design team for
original renders alongside the PDF, since a render pulled out of a PDF can carry the slide's
title block — and the client's name — inside the image.

---

## 1. Where the project stands right now

| | |
|---|---|
| **Pages live** | **237** (was 41 on 9 Sept, 169 on 14 Sept, 234 on 16 Sept) |
| **Live site** | https://hagerstone.com — hosted on **Vercel** (confirmed via response headers) |
| **Repo** | https://github.com/Ai983/Hagerstone-International-Website — branch `main` |
| **Working tree** | Clean, 0 unpushed commits as of 18 Sept (only the untracked `SALES_FUNNEL_MASTER.xlsx`) |
| **Content files** | 144 `.mdx` files |
| **Cities live** | 26 |
| **Blog posts** | 11 (legacy `.tsx` posts, not MDX) |
| **Sitemap** | Auto-generated, 234 URLs, drift guard matched |

### Content breakdown

| Collection | Files | URL pattern |
|---|---:|---|
| materials | 60 | `/materials/{slug}` |
| design | 1 | `/office-design/{slug}` |
| glossary | 35 | `/glossary/{slug}` |
| facade sub-services | 9 | `/services/facade-glazing/{slug}` |
| interiors sub-services | 9 | `/services/interior-fit-out/{slug}` |
| industries | 8 | `/industries/{slug}` |
| estates | 8 | `/estates/{slug}` |
| mep sub-services | 7 | `/services/mep/{slug}` |
| peb sub-services | 4 | `/services/peb/{slug}` |
| civil sub-services | 3 | `/services/construction/{slug}` |
| **Total MDX** | **143** | |

Plus 26 city pages (`/locations/{city}`), 26 auto-generated
`/office-interior-designers-in-{city}` pages, 7 project pages, 11 blog posts, and
the core static pages.

### Tech stack

Vite 5 + React 18 + TypeScript + shadcn/Radix + Tailwind + framer-motion.
**Not Next.js.** Custom build-time static generation:

```
npm run build            # client bundle
npm run build:server     # SSR bundle (vite build --ssr src/entry-server.tsx)
npm run build:prerender  # node prerender.js -> writes dist/<route>.html + sitemaps
```

Backend: Supabase (project `cuycosjchirgjmfczcle`, "Hager-Website"), 6 edge functions.

---

## 2. Urgent issues

### 2.1 FIXED — 4 blog posts served a 404 page to Google (found and fixed 18 Sept)

**Status: fixed in `ServerApp.tsx` on 18 Sept.** After a full build, all 4 files in
`dist/blog/` render the real article (~84 KB each, correct `<h1>`, no 404 markup), and
prerender printed `234 succeeded, 0 failed`. **Live only after the fix is pushed and
Vercel deploys.** Then run the `curl` check below against production, and use URL
Inspection → Request indexing in Search Console for the 4 URLs.

Commits `5436d18` and `11822d2` (15 Sept) added four blog posts to `App.tsx` and
`prerender.js` but **not to `src/ServerApp.tsx`**. Prerender renders `ServerApp`, so
these routes fall through to its `path="*"` → `<NotFound />`. Verified live on 18 Sept:
`curl https://hagerstone.com/blog/facade-glazing-guide-india` returns HTML whose `<h1>`
is **"404"**, while an older post (`office-fit-out-cost-guide-india-2026`) returns its
real article. The URLs are in the sitemap and return HTTP 200, so Google sees a
soft-404 on each.

Affected:
- `/blog/hospitality-interior-design-india`
- `/blog/facade-glazing-guide-india`
- `/blog/peb-pre-engineered-buildings-guide-india`
- `/blog/office-interior-fit-out-execution-guide`

**Fix:** add the four eager imports and `<Route>`s to `ServerApp.tsx` (mirroring lines
36–42 / 68–74), rebuild, and grep the prerendered `dist/blog/*.html` for the real title.
This is the same App/ServerApp drift the route registry (§6, Phase 1) was meant to make
impossible. It will recur until that registry is built or the blog is moved to MDX.

### 2.2 RESOLVED — facade project attribution (fixed 16 Sept, `52d19f3`)

**Resolution:** eight projects moved under a "Facade leadership experience" heading
credited to the Director – Facade, Akhilesh Kumar Singh. **M3M (Sector 79) and Max
Hospital (Saket) stay as Hagerstone's delivered work**, because they came from the internal
CPS data in `cities.ts`, not the facade profile. Dee Development (Bhuj) is a different
entity from Dee Foundation (Faridabad) and is one of the eight. The Bhuj city page lost
its project row, since the city template shows only a fixed "Projects Delivered"
heading. Meta descriptions and FAQs that claimed quantities now cite the governing
standard instead. The two estate pages (`cyber-city-gurugram`, `new-gurugram-sectors`)
were reworded the same way and are still published.

The original record follows for reference.

On 11 Sept, Dhruv sir said via WhatsApp about the facade projects on the website:

> "Good. But ye humne nahin kiya hai. Ye Akhilesh ji ne kiya tha kaam."

This means the facade projects taken from the Facade Capability Profile may be
**Akhilesh Kumar Singh's earlier work (before joining Hagerstone), not Hagerstone
projects.** The website currently presents them as *"Delivered work"* by Hagerstone.

### The 10 projects awaiting confirmation, and where each appears

| # | Project | Scope claimed | Pages affected |
|---|---|---|---|
| 1 | DLF Building 8, Cyber City | Stick curtain wall, 14,175 sq m | 4 — curtain-wall-systems, cladding-systems, corporate-offices, cyber-city-gurugram |
| 2 | DLF WeWork, Cyber City | Kingspan ventilated cladding, 3,325 sq m | 3 — rainscreen-ventilated-systems, rainscreen glossary, cyber-city-gurugram |
| 3 | Rajiv Gandhi Intl Airport, Hyderabad | ACP + SS cladding, 17,000 sq m | 1 — cladding-systems |
| 4 | Krisumi Waterfall Residences, Sec 36A | Alu D&W + SS railing, 13,871 sq m | 4 — aluminium-doors-and-windows, railings, residential-developments, new-gurugram-sectors |
| 5 | Adani Samsara Vilasa, Sec 60 | Alu D&W, 6,398 sq m | 3 — aluminium-doors-and-windows, residential-developments, new-gurugram-sectors |
| 6 | Broadway Service Apartment, Sec 83 | Curtain wall + D&W, 10,550 sq m | 4 — curtain-wall-systems, aluminium-doors-and-windows, hotels-and-hospitality, new-gurugram-sectors |
| 7 | M3M, Sector 79 | Alu & glass D&W, 28,000 sq ft | 3 + Gurugram city page |
| 8 | Anygraphics Factory, Noida | PIR/rock wool + glazing, 6,500 sq m | 5 — curtain-wall-systems, wall-and-roof-insulation, peb-roofing-and-wall-cladding, factories-and-manufacturing, industrial-and-factory-construction |
| 9 | Max Hospital, Saket | Pre-coated sheet & glass, 20,000 sq ft | 4 + Delhi city page |
| 10 | Dee Development, Bhuj | Glazing & ACP, 25,000 sq ft | 3 + Bhuj city page |

**Clue that may help:** M3M, Max Hospital and Dee Foundation (Faridabad) were already in
`src/data/cities.ts` **before this work started**, sourced from Hagerstone's internal CPS
system per the file's own comment. Those three are therefore **likely genuine Hagerstone
projects**. The rest came only from the facade profile PDF.

### Fix plan once Sir confirms

- **Hagerstone's own projects** → leave as "Delivered work", no change.
- **Akhilesh ji's earlier projects** → reword to
  *"Projects led by our Director – Facade, Akhilesh Kumar Singh (25+ years in facade
  engineering)"* — honest, still valuable, standard industry practice. Or remove.
- **Two estate pages depend entirely on these projects** and should be unpublished or
  rewritten if the projects are not Hagerstone's:
  - `/estates/cyber-city-gurugram` (built on DLF Building 8 + DLF WeWork)
  - `/estates/new-gurugram-sectors` (built on Krisumi, Adani, M3M, Broadway)

---

## 3. Sir's original instructions (WhatsApp, 9 Sept) and status

| Instruction | Status |
|---|---|
| "Technical pages add kartey jao" | ✅ In progress — 143 technical pages built |
| All 6 lines: Interiors, Aluminium D&W, MEP, Facade, PEB, Civil | ✅ **Complete** — all six have sub-service pages |
| "Har city ke page hona chahiye" | 🟡 26 of ~65 target North India cities |
| "North India ki all cities — Delhi/NCR, Punjab, Rajasthan, Himachal, J&K, Gujarat, UP, Haryana" | 🟡 J&K not started; others partially |
| Ahrefs / SEMrush connectors | ⏸ Deferred — no budget approved |

### Sir's follow-up (11 Sept)

> "Let's be specific. Secured engineers kis tareeke se kar raha hai check karo. Vo apne
> projects ke alava SEO based info de raha hai. Jisko uska search main top pe naam aa raha
> hai city wise. He is on top as MEP contractor when u search on all AI, ChatGPT."

**Interpretation:** Sir wants (a) information-based SEO content not dependent on own
projects — which is exactly the glossary/city/technical page approach already running,
and (b) **visibility inside AI answers (ChatGPT etc.)**, which is a distinct workstream
called GEO. See §8.

---

## 4. Complete research findings

### 4.1 Competitor teardown — securedengineers.com

Verified their sitemap: **1,044 URLs**. Breakdown:

| Pattern | Pages | Template shape |
|---|---:|---|
| `/insights/` | 414 | Articles + categories + pagination, ~1,800–2,000 words, author byline, FAQ block, 8+ internal links |
| `/glossary/` | 83 | ~500 words: definition → why it matters → spec table → common mistakes → related → FAQ → CTA |
| `/industrial-zones/` | 75 | Hyperlocal, ~1,400 words, 25–35 template variables (estate authority, DISCOM, pollution board, fire NOC authority) |
| `/services/` | 56 | 2,500–3,000 words **with child sub-service pages**, 4-stage scope table, buyer's guide, approved makes, standards |
| Calculators | 37 | Ungated, instant client-side result + ~2,100 words of method/worked example/limitations |
| `/locations/` | 36 | City pages |
| `/approvals/` | 26 | Statutory guides |
| `/architects/` | 23 | Referral hub: spec library, clearance guides, checklists |
| `/projects/` | 21 | Case studies |
| Others | ~270 | Industries, guides, policy, pricing pages |

**Their tech stack: Astro** (confirmed by HTML signature), served by nginx. Astro's
Content Collections use MDX + Zod schemas — essentially the same architecture built here.

**Critical finding — they do NOT use a service×city matrix.** Their
`/locations/ludhiana/` page presents all 12 services as cards linking to *national*
service pages. Across 35 city pages there are **zero** service-in-city pages. Their local
scale comes from **75 hyperlocal industrial-estate pages**, not multiplication. The only
exception is ~7 `solar-epc-contractor-{region}` pages — one service line only.

**They have zero wind speeds or seismic zones anywhere in 1,044 pages.** Their local
differentiation is purely *administrative* — HSIIDC, DHBVN, HSPCB, Haryana Fire.

**Their lead engine is the calculators, not the blog.** The MEPF cost estimator computes
instantly with no gate, then converts three ways: "email me my budget", WhatsApp prefilled
with the result, and a detailed-BOQ upsell.

### 4.2 SERP research (validated by search)

- **Facade / glazing / ACP technical content in India is essentially unwritten.** Results
  are a Facebook page, a SlideShare deck, manufacturer knowledge-centres (Viva ACP,
  Alucobond) and syndicated filler. **No Indian facade contractor publishes serious
  technical content.** Highest ticket, lowest competition → attacked first.
- **Interiors cost keywords are crowded** — Hub & Oak, Trinabh, ITSS, Orange Offices,
  Miggla, Interior A-to-Z all rank with cost-guide posts. **None has a calculator.**
- **Market fit-out rates** cluster at ₹800–1,200 basic / ₹1,200–2,500 mid / ₹2,500–5,000+
  premium. Hagerstone's estimator starts its *cheapest* tier at ₹2,500.

### 4.3 Google Search Console baseline (pulled 9 Sept)

- **695 clicks over 3 months** (~7–8/day) on 41 pages
- **32 indexed / 58 not indexed**
- The 58 breaks down as: 25 correctly-canonicalised duplicates + 15 working redirects
  (both healthy), 3 spam URLs, 5 dead legacy URLs, 2 non-page files
- **None of the 10 "crawled, not indexed" URLs was a current page** — the location and
  template pages index fine
- 3 casino spam URLs (`/?Poker/...`) return 200 with correct canonical → Google declines
  them, harmless but wastes crawl budget
- `track.hagerstone.com` returns HTTP 400 — unidentified subdomain

### 4.4 Wind speed / seismic data — deliberately excluded

Two published sources gave **contradictory** IS 875 Part 3 values (Delhi 44 vs 47 m/s;
Chandigarh 39 vs 50; Jaipur 39 vs 47). Neither is the code itself. **Decision: do not
publish structural values that cannot be verified.** A wrong wind speed on an engineering
firm's site is worse than none.

`src/data/cities.ts` carries an **optional** `CityEngineering` interface (windSpeedMs,
seismicZone, climateZone, snowLoadKnM2) so values can be added later from the actual
codes, signed off internally. Fields render only when filled.

### 4.5 Ahrefs / SEMrush

- **Ahrefs has an official MCP server**, an approved Claude connector:
  `claude mcp add ahrefs https://api.ahrefs.com/mcp/mcp -t http` — requires a paid plan
  (Lite → Enterprise). Standard tier is the practical floor.
- **SEMrush has no official MCP server.** Recommendation: if one tool is bought, buy Ahrefs.
- The site already loads **Ahrefs Web Analytics** (free traffic script, not the keyword tool).
- **Current stack is free:** Google Search Console (connected), Google Keyword Planner,
  Bing Webmaster Tools.

### 4.6 Company profiles read from Google Drive

Folder `13B-1Or2dQPtqpRBjDPSykl16HyfGSzzT` (15 PDFs). Read in full:
Facade, MEP, Office Interior Fit-outs, Hospital Interior & MEP, Interior/PEB/Civil/MEP,
Architecture/Construction/Interiors/MEP.

**Key verified facts used across the content:**
- 11+ years, 7M+ sq ft, 250+ projects, 350+ professionals, 25+ cities, 7+ countries
- 60-day delivery model, 5-year warranty, 79+ quality checkpoints
- ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
- Facade: ~9,000 sq ft fabrication facility, 10,000+ sqm/month, ±0.1mm double-head cutting,
  copy router, corner crimping, end milling (Allumatik machines); 20-member facade team;
  100% in-house execution; Director – Facade Akhilesh Kumar Singh, 25+ years
- Trades: 35 firefighting, 15 each of plumbers/welders/carpenters/electricians/fitters/
  HVAC/technicians, 53-member site team
- **Partners:** Winda Window Systems (aluminium & uPVC, Ludhiana, 6063 T6 alloy, EPDM
  gaskets, EN-certified hardware) · Viva Composite Panel (ACP, solid aluminium, honeycomb,
  louvres, rainscreen, 500+ shades, FR grades, PVDF)
- Leadership: Dhruv Agarwal (Founder, TEDx speaker, author of first book on Workplace
  Strategies), Bhaskar Tyagi (Director Operations, 16+ years hospitality interiors)

---

## 5. Everything completed, in order

### Phase 0 — Stop the leaks (9 Sept)

| Commit | Work |
|---|---|
| `9f4126a` | **Contact form was completely broken.** `Contact.tsx` awaited a 1s `setTimeout` then showed "Enquiry Sent Successfully!" with **no network call**. Every enquiry since launch was silently discarded. Fixed via new shared `src/lib/leads.ts::submitLead()`. Extended the `leads` table with 12 columns (company, project_type, city, subject, message, source_type, source_path, referrer, UTMs, status) and made `email` nullable. Migration applied to production Supabase. Types regenerated. Verified with an anon-key insert of all 8 fields, then deleted the test row. |
| `cd385c8` | **WhatsApp CTAs** — the site had zero click-to-WhatsApp links. Added `src/lib/contact.ts` (single number constant, replacing the number hardcoded in 8 files), `src/lib/whatsapp.ts` (context-aware prefilled messages), `StickyMobileCTA` (Call/WhatsApp/Quote bar) and `WhatsAppBubble`. Raised the AIAssistant launcher on mobile so it clears the bar. |
| `d1f1753` | **Popup** reopened every 7 seconds indefinitely — changed to once per session, exit-intent on desktop / 50% scroll on mobile, 20s fallback, dismissal respected 14 days, submission 30 days. **GA4** — `index.html` used `G-SMHY0ZN0XR` while `ga.ts` sent route-change pageviews to `G-K7C5BQ01CF`; consolidated on the collecting property, added `lead_submit`, `whatsapp_click` events. **Schema** — added FAQPage to the homepage (visible FAQ had no markup), Person + ItemList for 30 team members on `/our-team`, LocalBusiness on `/contact`. |
| `8889e95` | **Legacy URL redirects** — 5 dead URLs from the previous website, all 404ing, 301'd to closest live pages in both `vercel.json` and `netlify.toml`. |

**Also fixed in Search Console:** the submitted sitemap was `sitemap_index.xml`
(underscore) which 404s; the real file is `sitemap-index.xml` (hyphen). It had been
failing silently since Feb 2025. Removed and submitted all four correct sitemaps.

### Phase 1 — The content engine (9 Sept)

`b28468c` — **the single most important change.** Before this, adding a page required
**5 manual edits across 5 files** (600-line .tsx, `App.tsx`, `ServerApp.tsx`,
`prerender.js`, hand-edited `sitemap.xml`). This was proven dangerous during the WhatsApp
CTA work: the components were registered in `App.tsx` only and were **completely absent
from the prerendered HTML Google sees**, because `prerender.js` renders `ServerApp.tsx`.

Built:
- **MDX content layer** — `src/content/**/*.mdx`, one file per page
- **Zod frontmatter validation** (`src/content/schema.ts`) — invalid drafts fail the build
- **`status: draft | review | published`** — only `published` reaches the router,
  prerender and sitemap. Compliance/cost/calculator collections additionally require a
  named `reviewedBy`. **Verified by deliberately trying to publish an unreviewed
  compliance page — the build refused with exit code 1.**
- **`scripts/build-content-index.mjs`** — runs on `prebuild`, validates and emits a cheap
  metadata index so listing pages and the sitemap never load MDX bodies
- **Lazy glob for client, eager glob for SSR** in separate modules
  (`contentModules.ts` / `contentModules.server.ts`) — renderToString cannot await a
  dynamic import, so a Suspense boundary would prerender an empty shell
- **`src/lib/contentRoutes.ts`** — one route pattern per collection, not per article
- **Generated `sitemap.xml`** via `buildUrlSitemapXml()`, plus a **drift guard** that
  fails the build if sitemap URL count ≠ prerendered page count
- **Deleted `public/sitemap.xml`** — Vite copies `publicDir` last, so it would have
  silently overwritten the generated file
- **Removed `manualChunks: undefined`** from `vite.config.ts` — would have pulled every
  MDX body into the entry chunk

### Phases 2–5 — Content (9–11 Sept)

| Commit | Work | Pages |
|---|---|---|
| `b7e29c0` | Glossary listing page + first 6 terms | 41 → 48 |
| `072bdc9` | 8 more glossary terms | 48 → 56 |
| `aeeb098` | 9 facade sub-service pages | 56 → 65 |
| `dbc9e25` | 12 city pages, all six service lines, approvals tables | 65 → 79 |
| `53a5199` | 9 interiors sub-service pages | 79 → 88 |
| `c23b46d` | 7 MEP sub-service pages | 88 → 95 |
| `746a0b6` | 4 PEB + 3 civil sub-service pages | 95 → 102 |
| `5e2d12e` | 14 cities, 8 estates, 8 industries, 21 glossary | 102 → **169** |

### Phase 6 — Blog, attribution fix, lead fix, materials (15–16 Sept)

| Commit | Work | Pages |
|---|---|---|
| `179db68` | This status document (14 Sept) | — |
| `5436d18` | Blog: hospitality interior design | +1 ⚠ see §2.1 |
| `11822d2` | Blog: facade & glazing guide, PEB guide, fit-out execution guide; readTime corrected on all posts | +3 ⚠ see §2.1 |
| `ca177f1` | `Blog.tsx` hardcoded `getRecentPosts(9)` and dropped 2 of the 11 posts from the listing; it now shows all of them | — |
| `52d19f3` | **Facade attribution fixed** across 15 files (see §2.2) | — |
| `4b20154` | **Estimator lead leak fixed.** The fit-out estimator collected name, email, phone and company behind an OTP step that sent no OTP and accepted any 6 digits. **It never saved the lead**, so every estimator enquiry since launch was lost. It now goes through `submitLead()`. `verify-otp` also records the lead's source surface, so style-quiz and estimator leads can be told apart. **The OTP itself is still fake.** Making it real is a separate decision. | — |
| `ee2642c` | 12 materials pages, starting with the facade envelope | 173 → 186 |
| `dca9059` | 18 materials: glass, roofing, MEP | 186 → 204 |
| `c41477d` | 30 materials, which completes the collection at 60 | 204 → **234** |

**Materials design rules** (keep them for future pages):
- Everything is sourced from published standards (IS, EN, ASTM, ECBC, NBC), never from
  project claims. None of it depends on who built what.
- Materials pages deliberately **don't repeat the subjects already covered in the
  glossary** (DGU, low-E, laminated vs toughened, ACP FR core, and so on). The two
  collections cross-link instead, so they don't compete for the same searches.
- Several pages correct costly misconceptions: FRLS cable is not fire-survival cable,
  a fire-rated board does not make a fire-rated partition, a nitrogen purge is required
  when brazing refrigerant pipe, and a ventilated facade needs cavity barriers.

### Key content decisions made (and why)

1. **City pages cover all six service lines on one page** — no service×city matrix. This
   follows what Secured Engineers actually do and avoids the doorway-page pattern.
2. **Approvals & authorities table per city** — development authority, municipal body,
   industrial estate authority, fire NOC issuer, DISCOM, pollution board, bye-laws. This
   is what makes Ludhiana (GLADA/PSPCL/PPCB) genuinely different from Noida (Noida
   Authority/PVVNL/UPPCB). The FAQ block also names them, so FAQPage schema differs per city.
3. **Chattargarh, Jasrasar, Bhadra folded into district pages** (Bikaner, Hanumangarh)
   rather than three thin standalone pages. Freed slots used for Mohali and Zirakpur,
   which also fixed a dangling link to a non-existent Zirakpur page.
4. **HVAC not duplicated under MEP** — `/services/hvac` already exists; MEP pages link to it.
5. **PEB and civil got 7 pages, not 18** — the source profiles support only that much
   honest content.
6. **Testimonial client names NOT used** — Statkraft, Taj Hotels, EDF France, Inshorts,
   Imperial Malts, Hashtag Orange, Medtronic appear in the profiles but are not on the
   website, pending permission.

---

## 6. What was in CONTENT-ENGINE-PLAN.md — done vs left

| Plan item | Status |
|---|---|
| P0.1 Fix fake contact form | ✅ Done |
| P0.2 GA4 property mismatch | ✅ Done |
| P0.3 Homepage FAQ schema | ✅ Done |
| P0.4 Person + LocalBusiness schema | ✅ Done |
| **P0.5 Cost bands single source** | ❌ **Blocked on Sir** |
| P0.6 Extend `leads` table | ✅ Done |
| P0.7 Fix popup | ✅ Done |
| P0.8 WhatsApp CTAs | ✅ Done |
| P0.9 Internal lead alerts | ⏸ Deliberately deferred; hook left in `submitLead()` |
| P0.10 Legacy URL redirects | ✅ Done |
| Tooling — Search Console | ✅ Connected, 4 sitemaps submitted |
| Tooling — Ahrefs | ⏸ Deferred, no budget |
| Phase 1 — MDX content layer | ✅ Done |
| Phase 1 — Route registry | 🟡 Partial — collection-level patterns done; the full
  `src/routes/registry.ts` with client/server template-map parity test was **not** built.
  `App.tsx` and `ServerApp.tsx` still need manual mirroring for new collections. |
| Phase 1 — Generated sitemap + drift guard | ✅ Done |
| Phase 1 — Delete Supabase `routes` table | ❌ **Not done.** Still ships uncrawlable
  routes via `useRoutes()` in `App.tsx`. |
| Phase 1 — 301 `/blog/*` → `/insights/*` | ❌ Not done (no `/insights` content yet) |
| Phase 1 — Prerender worker pool | ❌ Not needed yet (234 routes prerender fine) |
| Phase 2 — Calculators (18 planned) | ❌ **Zero built.** Biggest remaining gap. |
| Phase 2 — `/cost/` pages | ❌ Blocked on P0.5 |
| Phase 2 — `/compare/` pages | ❌ Not started |
| Phase 3 — Glossary 120 target | 🟡 35 of 120 |
| Phase 3 — Materials 60 | ✅ **Done** — 60 of 60 (16 Sept) |
| Phase 3 — Estates 110 | 🟡 8 of 110 |
| Phase 3 — Cities 65 | 🟡 26 of 65 |
| Phase 4 — `/compliance/` 45 | ❌ Not started |
| Phase 4 — `/architects/` hub 25 | ❌ Not started |
| Phase 4 — `/insights/` 300 | ❌ Not started |
| Phase 4 — Industries 16 | 🟡 8 of 16 |
| Off-site (OFFSITE-TODO.md) | ❌ Still zero items ticked |

---

## 7. Open decisions — blocking work

### For Sir

1. ~~**Facade project attribution**~~ — ✅ resolved 16 Sept (§2.2).
2. **Fit-out cost per sq ft.** Three conflicting numbers are live:
   estimator says Basic ₹2,500 / Mid ₹3,000–3,500 / Luxury ₹4,500;
   homepage FAQ says ₹800–2,500; market says Basic ₹800–1,200.
   Blocks all `/cost/` pages and the cost calculator.
3. **Official phone number and email.** Website: `+91 88829 79328`, ea@hagerstone.com.
   Profiles variously: `93105 65770`, `99108 20078`, `79857 13171`, `99117 51746`,
   world@ / Delhi@hagerstone.com. Inconsistent NAP also weakens local SEO. The WhatsApp
   button currently points at 88829 79328 via `src/lib/contact.ts` (one-line change).
4. **Company numbers.** Profiles: 250+ projects, 350+ people, 11+ years.
   `public/llms.txt`: 500+ projects, 309+ people, founded 2013. Both are read by Google
   and AI engines.
5. **Client names** — may Statkraft, Taj Hotels, EDF France, Inshorts, Imperial Malts,
   Hashtag Orange, Medtronic be named on the website?
6. **MEP / PEB / Civil project names** — those pages have no project proof at all.
7. ~~**Who reviews technical content**~~ — decided 18 Sept: **no one.** Pages are
   published unreviewed in batches, so only content on the §0 safe list is published.
   Cost and compliance pages stay locked until someone is named.
8. **Estimator OTP** — make it a real OTP, or remove the step? Right now it accepts any
   six digits, so it adds friction and protects nothing.

### For Yash / the team

- **Test the live contact form once** and confirm a row lands in Supabase `leads`. Still
  unverified end-to-end through the browser (the DB path itself is proven).
- **What is `track.hagerstone.com`?** Returns HTTP 400, appears in Search Console.
- **Small-town auto pages** — keep or switch off the automatic
  `/office-interior-designers-in-{city}` pages for small towns (Hanumangarh, Ferozepur,
  Kotputli, Bikaner, Rajpura, Dera Bassi, Zirakpur). **Recommendation: switch off**, keep
  only for major markets. These are the most template-like pages on the site.
- **Verify wind/seismic data** if Akhilesh sir ever has 15 minutes (12–26 rows).

---

## 8. Next steps, in priority order

### Step 1 — ✅ Fixed the 4 blog posts that served a 404 page (§2.1). Push, then request indexing.
~~Fix facade attribution~~ — done 16 Sept.

### Step 2 — Wait for indexation before more location pages
67 pages went live on 11 Sept and 60 materials pages on 16 Sept. Check the Search
Console **Pages** report around 25 Sept:
- How many of the 26 city pages are indexed?
- Are the estate pages indexed?
- Any rise in "crawled — currently not indexed"?

**Do not publish another large batch of location pages until this is known.** Location
pages share a template and are the doorway-page risk; the plan's limit is ~25 per wave,
and the 11 Sept batch already added 28.

### Step 3 — Safe content that does NOT need to wait
These carry no duplication risk and can be added continuously:
- **`/insights/` articles** — the biggest gap vs the competitor (they have 414, we have 0).
  Start with bottom-funnel commercial intent:
  *"Office fit-out cost per sq ft in Gurugram"*, *"ACP cladding fire safety after
  Grenfell"*, *"Cat A vs Cat B fit-out scope"*, *"Structural glazing failures in monsoon"*
- **`/compare/` pages** — unitized vs stick, ACP vs HPL, PEB vs RCC, Cat A vs Cat B
- **`/compliance/` pages** — fire NOC per state, ECBC checklist, IS 875 wind load,
  ACP fire rating rules, IGBC/LEED for interiors
- **More glossary** — 35 of a 120 target
- ~~`/materials/` pages~~ — ✅ 60 of 60 done

### Step 4 — Calculators (the actual lead engine)
Zero built. Secured Engineers get their leads from **37 calculators**, not their blog.

**Correction (18 Sept):** the earlier claim that four calculators "need no pending decision"
was too optimistic. The code, the SEO position and the business decisions each need
checking separately:

| Question | Answer |
|---|---|
| **SEO risk?** | **Low.** A working tool plus ~2,000 words of method is the opposite of thin content, and there is no doorway-page risk. It is safer than more location pages. |
| **Can it be built without approval?** | **Yes, as drafts.** The framework, UI and draft pages can be built and committed now. |
| **Can it go live without approval?** | **Yes, if it is on the safe list in §0.** Updated 18 Sept: `calculators` was removed from `REVIEW_REQUIRED`, because nothing is reviewed before publishing and calculators are limited by design to quantity-only maths. |
| **Rupee outputs?** | **No Hagerstone rates.** Output quantities (area, sheet count, wastage), plus an optional **user-entered** ₹ rate field and a "Get Hagerstone's actual rate →" CTA. |
| **Wind pressure (IS 875 Pt 3)** | **Do not build.** It's a structural claim, and the city wind speeds are unverified (§4.4). |
| **HVAC tonnage** | OK as a *preliminary estimate* with the formula shown and editable assumptions, like Secured Engineers' version. |
| **Competitor pattern** (checked 18 Sept) | ~43 calculators on a `/tools/` hub aimed at architects. The result appears instantly with no form. Under it: a disclaimer, then "Get an engineer review of my estimate →" (the result is attached to the lead), a prefilled WhatsApp message and a BOQ review offer. Below that, ~1,100–2,200 words under fixed headings: What it calculates → Inputs → Method (formula) → Assumptions → Limitations → Worked example → How engineers use it → When a professional design must replace it. No reviewer byline on any of them. |
| **Code work needed** | No calculator framework exists yet (`CalculatorDef`, `CalculatorShell`, routes). New routes must be added to **both** `App.tsx` and `ServerApp.tsx`. §2.1 shows what happens otherwise. The `leads` table has no `calculator_id` / `calculator_inputs` / `calculator_result` columns yet, so that needs a small migration. |

**No decision from Sir is needed** for quantity-only calculators.

**Recommended first batch:** the calculator framework + `/calculators` hub, then glazing area
take-off → ACP sheet count & wastage → office seat capacity → carpet vs built-up area.
These are all facade and interiors, where no Indian competitor has tools. Next: false
ceiling, flooring/tile, paint and partition quantities, AC tonnage, and lux. The fit-out
cost calculator stays blocked on cost bands. Wind pressure is not built.

Pattern: **ungated instant result** → three CTAs ("email me this breakdown", "send to
WhatsApp" prefilled with the result, "get an engineer to validate this") → ~2,000 words of
method, worked example, benchmarks and limitations so the page ranks on its own.

### Step 5 — AI / GEO visibility (Sir asked for this specifically)
The prior audit scored the site **26/100** on AI citability. Done so far: prerendering,
schema, llms.txt exists. Still outstanding:
- Update `public/llms.txt` — it omits all location pages and has the disputed stats
- Q&A-shaped content (AI engines quote direct answers)
- Off-site entity signals — Clutch profile + reviews, fix "Hager Stone" spelling on
  IndiaMART, Google Business Profile NAP consistency, Crunchbase
- Everything in `OFFSITE-TODO.md`, which still has **zero items ticked**

### Step 6 — Technical debt worth clearing
- ~~**App/ServerApp route drift**~~ — guarded 18 Sept. Project and blog URLs now come
  from `project.ts` / `blogPosts.ts` via `src/lib/dataRoutes.ts`, and `prerender.js`
  **fails the build** if any route renders a `data-not-found` screen (tested by removing
  a blog route: the build failed and named it). Blog posts still need a `<Route>` in
  both routers; moving them to MDX would remove that last manual step.
  `CLAUDE.md` now documents all of this for every teammate's Claude session.
- **Delete the Supabase `routes` table** and `useRoutes()` — it injects runtime routes
  that `ServerApp.tsx`/`prerender.js` have never heard of, so anything served through it
  returns an empty SPA shell to Googlebot
- **Pre-existing lint error** — `src/pages/Index.tsx:342` calls `useInView()` inside a
  `.map()` callback, breaking the rules of hooks. `npm run lint` fails because of it, so
  CI lint cannot be trusted as a gate until fixed. **Not caused by this work.**
- **Two `<h1>` tags** on service pages — the navbar emits a second one
- **Both Netlify and Vercel** build on every push; production is Vercel. Disable
  auto-deploy on Netlify to stop paying twice.
- Image sitemap only covers the 7 project pages — blog, Ideas and city imagery excluded

---

## 9. How to add a page (for the next chat)

### A content page — one file, no router edits

Create `src/content/<collection>/<slug>.mdx`. **Filename must match the `slug`
frontmatter** or the build fails.

```yaml
---
title: "..."              # 10–90 chars
metaTitle: "..."          # 10–65 chars
metaDescription: "..."    # 70–165 chars — build FAILS outside this range
slug: "my-page"           # lowercase-kebab, must equal filename
collection: "glossary"    # see COLLECTIONS in src/content/schema.ts
status: "published"       # draft | review | published
publishedOn: "2026-09-14" # ISO date
author: "Dhruv Agarwal"
primaryKeyword: "..."
keywords: ["...", "..."]
definition: "..."         # REQUIRED for glossary, max 400 chars
citations:
  - label: "IS 875 (Part 3)"
    clause: "Wind loads on buildings"
faqs:
  - question: "..."       # min 10 chars
    answer: "..."         # min 30 chars
related: ["other-slug"]   # slugs of other content
---
```

Frontmatter is `.strict()` — **any unknown key fails the build.**

Then:
```
node scripts/build-content-index.mjs
npm run build && npm run build:server && npm run build:prerender
```

### A new collection — 3 edits then files

1. `src/content/schema.ts` → add to `COLLECTIONS`, `COLLECTION_BASE_PATH`, and
   `COLLECTIONS_WITHOUT_INDEX` if its base path is already a real page
2. `src/pages/CollectionIndexPage.tsx` → add a `COPY` entry, or the listing 404s
3. `src/templates/ContentArticle.tsx` → add a `COLLECTION_LABEL` for breadcrumbs

### A new city

Add an entry to `src/data/cities.ts` with `published: true`, `authorities` (development,
municipal, industrial, fireNoc, discom, pollution, byeLaws), `districts`,
`nearbyCitySlugs`, a **unique** `marketNote` (≥120 words of genuinely local context), and
`projects` (leave `[]` rather than inventing one).

### Verification checklist before pushing

```
node scripts/build-content-index.mjs      # frontmatter validation
npx tsc --noEmit -p tsconfig.app.json     # typecheck
npx eslint <changed files>                # NOT npm run lint — pre-existing error
npm run build && npm run build:server && npm run build:prerender
```
Prerender prints `Sitemap: N URLs (matches prerendered pages)` — if it errors on drift,
the sitemap and pages disagree.

**Never bulk-edit .mdx files with PowerShell `Get-Content`/`Set-Content`** — it corrupts
UTF-8 (em dashes → `â€"`, `²` → `Â²`). This happened once and had to be reversed. Use the
Write/Edit tools.

---

## 10. Key file map

| File | Purpose |
|---|---|
| `src/content/schema.ts` | Collections, base paths, Zod frontmatter contract, review gate |
| `src/content/types.ts` | `ContentEntry` interface |
| `scripts/build-content-index.mjs` | Validates frontmatter, emits generated index |
| `src/lib/contentModules.ts` | Lazy MDX glob (client) + lookup helpers |
| `src/lib/contentModules.server.ts` | Eager MDX glob (SSR only) |
| `src/lib/contentRoutes.ts` | Route patterns + prerender paths |
| `src/templates/ContentArticle.tsx` | Shared article layout, SEO, schema, FAQ |
| `src/templates/ContentIndex.tsx` | Shared collection listing layout |
| `src/pages/ContentPage.tsx` / `.server.tsx` | Client / SSR article routes |
| `src/pages/CollectionIndexPage.tsx` | Listing routes + per-collection copy |
| `src/data/cities.ts` | 26 cities: authorities, districts, market notes, projects |
| `src/data/localServices.ts` | 8 service lines; only `office-interiors` published |
| `src/lib/locationPages.ts` | City × service matrix generator |
| `src/lib/sitemap.ts` | All four sitemap generators |
| `prerender.js` | Renders every route to static HTML, writes sitemaps, drift guard |
| `src/lib/leads.ts` | Single `submitLead()` for every capture surface |
| `src/lib/contact.ts` | **The one place the sales number lives** |
| `src/lib/whatsapp.ts` | Context-aware WhatsApp deep links |
| `src/App.tsx` / `src/ServerApp.tsx` | **Must be kept in sync** — prerender uses ServerApp |

---

## 11. Reference documents in this repo

| File | What it is |
|---|---|
| `SEO-PROJECT-STATUS.md` | **This file** — current status and next steps |
| `CONTENT-ENGINE-PLAN.md` | Original strategy, competitor teardown, phased plan |
| `GEO-AUDIT-REPORT.md` | Pre-existing AI/GEO audit, scored 26/100 |
| `GEO-FIX-DIRECTIVES.md` | Pre-existing implementation brief for that audit |
| `OFFSITE-TODO.md` | Off-site tasks — **zero ticked**, Clutch/reviews/press |

**Google Drive:** company profiles at folder `13B-1Or2dQPtqpRBjDPSykl16HyfGSzzT`
(15 PDFs) — readable directly via the Google Drive connector, no upload needed.

---

## 12. Honest assessment

**What has genuinely improved:** the contact form now works (it was discarding every
enquiry), the site has WhatsApp contact, the analytics are trustworthy, and adding a page
costs one file instead of five. Page count went 41 → 169 with all six service lines
covered and 26 cities live.

**Update 18 Sept:** the facade claims are corrected, a second lead leak (the estimator)
is closed, and the site is at 234 pages. A new App/ServerApp drift bug hid 4 blog
posts from Google (§2.1).

**What has not been proven yet:** none of this has produced a measurable lead or ranking
improvement, because it is days old. The 695-clicks-per-quarter baseline is the number to
beat. Search Console around 25 September is the first real evidence.

**The biggest risks:**
1. ~~The facade attribution issue~~ — resolved 16 Sept.
2. 234 pages published in a week with **no human expert review of any of it**. The
   content is drawn from published codes and the company's own profiles, but nobody at
   Hagerstone has read it.
3. Location pages are the doorway-page risk. 28 went live in one batch, above the ~25
   safe-wave limit.
4. Zero calculators — the competitor's actual lead engine remains unbuilt.
