# Hagerstone Content Engine — Competitor Teardown & Growth Plan

## Context

Hagerstone International's site has **41 pages**. The competitor studied, [securedengineers.com](https://www.securedengineers.com/), has **1,044** — and reportedly converts roughly one qualified MEP lead per day from it.

The goal is to reproduce and beat that engine for Hagerstone, with Claude drafting technically-grounded content and a Hagerstone expert reviewing before publish.

**Scope is set by Dhruv Agarwal's direction (WhatsApp, 8:09-8:15 am):**

- **All six service lines** — Interiors · Aluminium Doors & Windows · MEP · Facade · PEB · Civil Construction
- **Every city across North India** — Delhi/NCR, Haryana, Punjab, Rajasthan, Himachal, Jammu & Kashmir, Uttar Pradesh, Gujarat
- **"Technical pages add kartey jao"** — continuous technical page production
- **Ahrefs / SEMrush connectors** to drive ranking decisions

The existing code already anticipates this: [cities.ts](src/data/cities.ts) carries `region: "NCR" | "North India" | ...`, `state` and `stateSlug`; [localServices.ts](src/data/localServices.ts) already defines all six lines behind `published: false`, with a comment saying they are *"ready to flip on once keyword demand is validated (SEMrush/Ahrefs)."* The architecture was built for exactly this instruction.

Three findings reframe the work:

1. **Their 1,044 pages are not 1,044 hand-written articles.** They are ~8 repeatable templates fed by data. The moat is the *template + data* architecture, not writing volume.
2. **Hagerstone is currently losing the traffic it already has.** The contact form is a stub that silently discards every enquiry.
3. **Adding page 42 currently costs 5 manual edits across 5 files.** At that unit cost, 1,000 pages is arithmetically impossible. The architecture must change before any content is written.

---

## Evidence: what the competitor actually built

Verified sitemap breakdown (1,044 URLs):

| Pattern | Pages | Template shape |
|---|---:|---|
| `/insights/` | 414 | Articles + categories + pagination. ~1,800-2,000 words, author byline, FAQ block, 8+ internal links |
| `/glossary/` | 83 | ~500 words: definition → "why it matters" → spec table → common mistakes → related links → FAQ → CTA |
| `/industrial-zones/` | 75 | Hyperlocal, ~1,400 words, 25-35 template variables (estate authority, DISCOM, pollution board, fire NOC authority) |
| `/services/` | 56 | 2,500-3,000 words **with child sub-service pages**, 4-stage scope table, buyer's guide, approved makes, standards |
| Calculators | 37 | Ungated, instant client-side result + ~2,100 words of method/worked-example/limitations |
| `/locations/` | 36 | City pages |
| `/approvals/` | 26 | Statutory guides ("process, documents, timelines, where projects fail") |
| `/architects/` | 23 | Referral hub: spec library, spatial clearance guides, compliance checklists |
| `/projects/` | 21 | Case studies |
| Others | ~270 | Industries, guides, policy, capacity-pricing pages |

**The lead engine is the calculators, not the blog.** Their cost estimator computes instantly with no gate, then converts three ways: "email me my budget", WhatsApp prefilled with the result, and a detailed-BOQ upsell. The ~2,100 words of method, worked example and stated limitations *below* the tool is what makes it rank — the tool alone would be thin.

### Sequencing within the six lines (validated by SERP check)

All six ship, but not simultaneously — order them by how contested the SERP is:

- **Facade / glazing / ACP first — it is wide open.** Searching for Indian technical content returns a Facebook page, a SlideShare deck, manufacturer knowledge-centres (Viva ACP, Alucobond) and syndicated filler. **No Indian facade contractor publishes serious technical content.** Highest ticket, lowest competition. PEB and Aluminium Doors & Windows share this gap and the same engineering data.
- **Interiors is crowded — win on tooling, not another cost blog.** Hub & Oak, Trinabh, ITSS, Orange Offices, Miggla and Interior A-to-Z all rank with cost-guide posts. **None has a real calculator.**
- **MEP is head-to-head with Secured Engineers**, who have a 1,044-page head start. Go last on generic MEP terms; go early on MEP-for-interiors (fit-out coordination), where they are weak and Hagerstone is credible.
- **The architect/PMC hub is the strategic play across all six.** Architects *specify* contractors. No Indian firm serves them technical content, and it compounds with the facade gap.

---

## Phase 0 — Stop the leaks (days 1-5, ships immediately)

No content, no review needed. **This phase alone likely outperforms the next three months of content.**

**P0.1 — The contact form is fake.** [Contact.tsx:119-120](src/pages/Contact.tsx#L119-L120):
```ts
// Simulate form submission API call
await new Promise(resolve => setTimeout(resolve, 1000));
toast({ title: "Enquiry Sent Successfully!", ... });
```
No network call. Every enquiry since launch was discarded behind a success message. Extract a single `src/lib/leads.ts::submitLead()` that every capture point on the site routes through, and surface a real error toast on failure.

**P0.2 — GA4 is split across two properties.** [index.html:7](index.html#L7) loads `G-SMHY0ZN0XR`; [ga.ts:1](src/integrations/ga.ts#L1) sends SPA route-change pageviews to `G-K7C5BQ01CF`. On a prerendered SPA most pageviews are route changes, so most traffic data lands in the wrong property. Keep `G-SMHY0ZN0XR` (the one that has been collecting), move it to `VITE_GA_ID`, add `lead_submit` / `calculator_complete` / `whatsapp_click` events.

**P0.3 — Homepage FAQ has no schema.** [FAQSection.tsx](src/components/FAQSection.tsx) renders 5+ Q&As on `/` but [Index.tsx](src/pages/Index.tsx) never calls `buildFaqSchema()` — which already exists in [seo.ts](src/lib/seo.ts). One line, immediate AI-citability win.

**P0.4 — Missing schema.** `Person` on `/our-team` (data already in [teamMembers.ts](src/data/teamMembers.ts)); `LocalBusiness` on `/contact`. Both helpers exist.

**P0.5 — Cost figures contradict, and the estimator is mispriced.** [config.ts:35](src/components/estimator/config.ts#L35) sets "Basic" at ₹2,500/sqft; [FAQSection.tsx](src/components/FAQSection.tsx) says ₹800-2,500; the fit-out blog post is a third number. NCR competitors cluster at **₹800-1,200 basic / ₹1,200-2,500 mid / ₹2,500-5,000+ premium** — so Hagerstone's *cheapest* tier starts where the market's *premium* tier begins, with no basic or mid option. If mid-market fit-out is wanted at all, the estimator is turning those leads away before a human sees them. Create `src/data/costBenchmarks.ts` as the single source, imported by all three surfaces. **Needs a 30-minute call with the commercial lead — this blocks every cost page in Phase 2.**

**P0.6 — `leads` table is too thin** (`name, email, number, created_at`). Add `source_path`, `source_type`, `calculator_id`, `calculator_inputs`/`calculator_result` (jsonb), UTMs + `gclid` + `referrer`, `city`, `project_type`, `area_sqft`, `message`, `otp_verified`, `status`. Drop `NOT NULL` on `email` (WhatsApp-only leads have none). Capture UTMs once on first landing via `src/lib/attribution.ts`.

**P0.7 — The popup is hostile.** [LeadPopupForm.tsx](src/components/LeadPopupForm.tsx) reopens **every 7 seconds indefinitely** after dismissal. Change to exit-intent (desktop) / 50% scroll (mobile), once per session, suppressed 14 days after dismissal. Replace its inlined Supabase URL/key with the shared client.

**P0.8 — No click-to-WhatsApp anywhere.** Add `src/lib/whatsapp.ts` with `buildWhatsAppUrl({ page, intent, payload })` producing contextual prefilled messages, plus `<StickyMobileCTA>` (Call | WhatsApp | Quote) mounted alongside `LeadPopupForm`.

---

## Tooling — the Ahrefs / SEMrush connector ask (week 1, parallel to Phase 0)

Sir's first instruction was to wire SEO tooling into Claude. **Decision: start with the free stack, add Ahrefs later.**

### The free stack (set up in week 1)

- **Google Search Console** — the ground truth. It reports what Google actually indexed and which queries already bring impressions, which is exactly the stop/go signal for wave rollouts. Non-negotiable, must be connected before any wave ships.
- **Google Keyword Planner** — free with any Google Ads account (no spend required). Gives volume ranges for city and estate head terms. Coarser than Ahrefs but sufficient to separate "real demand" from "zero."
- **Bing Webmaster Tools** — free, and its keyword research is more generous than Google's without a paid tier.
- **Ahrefs Web Analytics** — already installed ([index.html](index.html) loads `analytics.ahrefs.com`). Note this is the free traffic script, **not** the keyword toolset.

This is enough to run the plan. The one thing it costs us is competitor intelligence — we can't pull Secured Engineers' top-performing pages to see which of their 1,044 actually earn traffic, so page selection leans on judgement and SERP inspection instead.

### When budget allows — Ahrefs MCP

Real and available today. Official MCP server, approved connector in Claude's directory:
```
claude mcp add ahrefs https://api.ahrefs.com/mcp/mcp -t http
```
Or connect at `claude.com/connectors/ahrefs`. Exposes Keywords Explorer (volume, difficulty, traffic potential), Site Explorer, Rank Tracker, Site Audit and Content Explorer. Requires a paid plan — Lite (100 rows/request, 100K API units/month) up to Enterprise; API units are included, not bought separately. **Standard is the practical tier** if this gets funded.

**SEMrush — no official MCP server exists.** SEMrush has a REST API, so a custom wrapper is possible, but it duplicates Ahrefs. If one tool gets bought, buy Ahrefs; two overlapping keyword tools is spend without extra decision value.

The natural trigger to fund it: once the first waves are live and GSC shows real impressions, Ahrefs pays for itself by telling us which of the remaining ~800 pages are worth writing.

---

## Phase 1 — Infrastructure (weeks 2-4, no new content)

### The scaling problem, precisely

[App.tsx:66](src/App.tsx#L66) renders **one `<Route>` element per service×city page**. Fine at 10; not at 1,000. The fix is not more Route elements — it's **one route pattern per template**, with concrete paths living only in the prerender/sitemap layer. There are ~15 templates and ~1,000 pages; only the 15 need registration.

### 1a. Content layer — MDX with a generated metadata index

Long-form editorial goes in `src/content/**/*.mdx`; parametric pages (glossary fields, city and estate data) stay as typed TS data extending the existing [cities.ts](src/data/cities.ts) pattern.

Rejected alternatives, with reasons:
- **Structured `content: string` + generic renderer** has already been tried here and produced [BlogPost.tsx](src/pages/BlogPost.tsx) — a regex pseudo-markdown parser that can't do tables, can't embed a calculator, and needs DOMPurify to undo its own `dangerouslySetInnerHTML`. Right for parametric pages, wrong for prose.
- **Supabase-backed content** breaks the deterministic offline build (deploys would fail when Supabase pauses) and kills the review workflow — a git diff on `.mdx` *is* the review tool; a Postgres row is not branchable or revertable.

Frontmatter is **Zod-validated at build time**, so a bad draft fails the build rather than Search Console. The load-bearing field:

```ts
status: z.enum(['draft','review','published'])  // only 'published' reaches route registry, prerender, sitemap
reviewedBy: z.string().optional()
reviewedOn: z.string().optional()
```

This is the human-review gate enforced in code — Claude can commit 40 drafts at once with zero SEO risk.

`scripts/build-content-index.mjs` runs on `prebuild`, globs the MDX, validates frontmatter, and emits `src/content/.generated/index.ts`. **Listing pages, the sitemap and prerender read this cheap index and never touch an MDX module** — only the article template loads a body, for the one route being rendered. Lazy/eager both come from the same file tree:

```ts
const bodies      = import.meta.glob('/src/content/**/*.mdx');                  // App.tsx
const bodiesEager = import.meta.glob('/src/content/**/*.mdx', { eager: true }); // ServerApp.tsx
```

Add: `@mdx-js/rollup`, `remark-gfm`, `remark-frontmatter`, `remark-mdx-frontmatter`, `gray-matter`, `rehype-slug`, `rehype-autolink-headings`. Register `mdx()` **before** `react()`.

Authored MDX components — `<SpecTable>`, `<CodeCitation code="NBC 2016, Part 4, Cl. 4.3">`, `<Callout>`, `<CalculatorEmbed>`, `<CTA variant="whatsapp">`, `<ProjectProof slug="microsave">` — let every article embed real tools and real project proof inline. **This is the anti-thin-content mechanism.**

### 1b. Route registry — one source of truth

`src/routes/registry.ts` composes `RouteDef[]` from the content index, location data, service data and calculator defs. It exports `routePatterns()` (~20 entries, what the routers render) and `getAllPrerenderPaths()` (every concrete URL, what prerender and sitemap consume). `App.tsx` and `ServerApp.tsx` each collapse to ~30 lines over two small template maps (lazy / eager).

A vitest assertion that `clientTemplates`, `serverTemplates` and the `TemplateKey` union have identical keys makes the one remaining manual sync point CI-enforced.

### 1c. Three landmines to defuse in the same phase

- **[vite.config.ts:22-28](vite.config.ts#L22-L28) sets `manualChunks: undefined`.** With 400 lazily-imported MDX modules this risks article bodies landing in the entry chunk. Remove the block; let Rollup code-split.
- **The Supabase `routes` table is actively shipping uncrawlable pages.** [App.tsx:49](src/App.tsx#L49) `useRoutes()` injects routes at runtime that `ServerApp.tsx` and `prerender.js` have never heard of — `/blog/:slug` exists *only* there, so anything served through it returns the empty SPA shell to Googlebot. Delete the table, `useRoutes.ts`, `routeRegistry.ts`; port its rows into static routes. This also removes a Supabase dependency from first paint.
- **`public/sitemap.xml` will silently overwrite the generated one**, because Vite copies `publicDir` last. Add `buildUrlSitemapXml()` to [sitemap.ts](src/lib/sitemap.ts) (which already generates the image/video/index sitemaps precisely so they "never drift") and **delete `public/sitemap.xml` in the same commit**. Assert generated URL count === prerendered file count and fail the build on mismatch. Shard by collection above ~800 URLs.

Also: 301 `/blog/*` → `/insights/*`. Keep the 7 existing `.tsx` posts working untouched as a `legacy` template kind; port them to MDX one a week as filler. Nothing is blocked on that.

*Outcome: still ~41 pages, but page 42 costs one `.mdx` file and zero router edits.*

---

## Phase 2 — Money pages (month 2). **Leads start here.**

6 calculators (fit-out cost, seat capacity, HVAC tonnage, glazing area & cost, carpet vs built-up, ACP cladding cost) · 12 `/cost/` pages · 8 `/compare/` pages · 5 facade sub-service pages · 20 bottom-funnel `/insights/`.

**First local wave:** add the `CityEngineering` block to the 12 existing cities in [cities.ts](src/data/cities.ts), flip the 7 unpublished ones to `published`, and rewrite `CityHub.tsx` to cover all six service lines on one page. That is **12 city pages live immediately** — no new components. Then the first 20 estate pages, led by places Hagerstone has actually delivered in: Udyog Vihar, IMT Manesar, Focal Point Ludhiana, Baddi/Nalagarh (Theon), Sector 63 Noida (VinFast).

Plus ~10 selective service×city pages for the strongest combinations only — facade and interiors in NCR — mirroring Secured's narrow `solar-epc-contractor-{region}` approach rather than a full matrix.

**≈120 pages.** Calculators ship without deep expert review (formulas come from published codes and assumptions are shown); `/cost/` pages are hard-blocked on P0.5.

### Calculator framework

One `CalculatorDef` per file in `src/data/calculators/<slug>.ts` with a **pure, synchronous, client-side** `compute()`, rendered by a generic `CalculatorShell` — **single-screen, not the existing 5-step wizard**; instant results are the competitor's advantage. The `/find-your-style` estimator becomes `defineCalculator('fit-out-cost')`.

Every calculator page carries a mandated ~2,000-word MDX body: what it does → the method with the formula written out → worked example with real Hagerstone numbers → every input explained → regional benchmarks → **limitations: when this estimate will be wrong** → codes referenced → 4-6 FAQs. Schema: `SoftwareApplication` + `FAQPage` + `HowTo`.

**Ungated result, three conversions below it:** "Email me this breakdown" (one field) · "Send to WhatsApp" (deep link prefilled with the computed result) · "Get an engineer to validate this" (the real conversion). Keep the OTP gate only on the AI style quiz, where it protects real generation credits — not as a lead wall. With ~41 pages and few organic sessions today, gating converts a small fraction of a small number; ungated tools earn the links and rankings months 2-6 need.

**18 calculators total.** *Interiors:* fit-out cost/sqft · seat capacity · workstation density · carpet vs built-up vs chargeable · false ceiling quantity · flooring quantity & wastage · glass partition cost · office HVAC tonnage · lux & luminaire count (IS 3646) · acoustics NRC · timeline & phasing · budget split by trade. *Facade & compliance:* glazing take-off & cost · curtain wall wind pressure (IS 875 Pt 3) · ACP area & sheet optimisation · glass U-value/SHGC vs ECBC · NBC occupancy load & exit width · NBC travel distance · IGBC Green Interiors credits.

---

## Phase 3-5 — Scale to ~1,000 (months 3-12)

Phase 3 (months 3-4) expands the city dataset from 12 to ~65 with the engineering block, publishes the 8 state hubs, and runs estate waves 2-4 alongside 90 glossary terms and the sub-service trees. Phase 4 (months 5-8) completes the estate pages, the `/compliance/` per-state approval guides, the `/architects/` hub and the insights engine. Phase 5 (months 9-12) fills gaps and prunes anything with zero impressions after 120 days.

| Path | Count | Example slugs |
|---|---:|---|
| **City pages — one per city, covering all 6 lines** | **65** | `/locations/gurugram/`, `/locations/ludhiana/`, `/locations/jaipur/`, `/locations/shimla/`, `/locations/jammu/`, `/locations/ahmedabad/` |
| **Industrial & commercial estate pages (hyperlocal)** | **110** | `/estates/haryana/imt-manesar/`, `/estates/punjab/focal-point-ludhiana/`, `/estates/himachal/baddi/`, `/estates/rajasthan/bhiwadi-riico/`, `/estates/delhi-ncr/udyog-vihar/`, `/estates/noida/sector-63/` |
| State hubs | 8 | `/states/punjab/`, `/states/rajasthan/`, `/states/himachal-pradesh/` |
| Selective service×city (proven demand only) | 40 | `/facade-contractors-in-gurugram`, `/peb-manufacturers-in-baddi`, `/office-interior-designers-in-noida` |
| `/insights/` + categories | 300 | `/insights/cat-a-vs-cat-b-fit-out-scope-india`, `/insights/structural-glazing-failures-monsoon-ncr`, `/insights/acp-cladding-fire-safety-india-post-grenfell` |
| `/glossary/` | 120 | `/glossary/unitized-curtain-wall`, `/glossary/spandrel-glass`, `/glossary/shgc`, `/glossary/plenum-depth`, `/glossary/fr-b1-core` |
| `/materials/` | 60 | `/materials/acp-vs-solid-aluminium-panel`, `/materials/dgu-vs-single-glazing-india` |
| `/services/` hub + parents + children | 61 | `/services/facade-glazing/unitized-curtain-wall/`, `/services/facade-glazing/spider-glazing/`, `/services/office-design-build/cat-b-fit-out/` |
| `/projects/` | 40 | existing 7 + 33 |
| `/compliance/` (incl. per-state approval guides) | 45 | `/compliance/fire-noc-for-offices-delhi-dfs/`, `/compliance/is-875-part-3-wind-load-facade-design/`, `/compliance/acp-fire-rating-fr-b1-india-rules/`, `/compliance/punjab-fire-noc-commercial-buildings/`, `/compliance/hp-tcp-building-bye-laws-commercial/` |
| `/compare/` | 30 | `/compare/unitized-vs-stick-built-curtain-wall`, `/compare/acp-vs-hpl-cladding` |
| `/cost/` | 25 | `/cost/office-interior-cost-per-sqft-gurugram`, `/cost/curtain-wall-cost-per-sqm-india` |
| `/architects/` hub | 25 | `/architects/specs/glazing-systems/`, `/architects/clearance-guides/office-circulation-widths/` |
| `/calculators/` | 19 | see Phase 2 |
| `/industries/` | 16 | `/industries/gcc-global-capability-centres/`, `/industries/coworking-operators/` |
| `/guides/` pillars | 12 | `/guides/facade-engineering-india/` |
| Core static | 12 | |
| | **≈1,000** | |

### Why one page per city, not a service×city matrix — settled empirically

I initially planned a 520-page matrix (8 services × 65 cities) to satisfy "sab ki sab." **Checking what Secured Engineers actually did overturned that.**

Their [/locations/ludhiana/](https://www.securedengineers.com/locations/ludhiana/) page presents all 12 services as cards linking to *national* service pages — there is no "HVAC contractor in Ludhiana" page. Across 35 city pages they have **zero** service-in-city pages. The only exception is a handful of `solar-epc-contractor-{region}` pages — one line, their highest-value, across ~7 regions.

So the 1,044 came from four other levers:

| Their lever | Count | Hagerstone equivalent |
|---|---:|---|
| Hyperlocal **industrial estate** pages | 75 | IMT Manesar, Focal Point Ludhiana, Baddi, Bhiwadi RIICO, Udyog Vihar |
| Deep **sub-service** trees under each service | 56 | `/services/facade-glazing/unitized-curtain-wall/` etc. |
| **Editorial** volume | 414 | insights |
| **Glossary** | 83 | glossary |

**This is also the more faithful reading of Sir's instruction.** *"Har city ke page hona chahiye website pe"* — every city should have **a page**, singular. One page per city is exactly that, and it is the pattern proven to work in this exact niche.

The matrix is dropped to 40 selective pages (one line × cities with proven demand, mirroring their solar approach). Coverage of all six lines in all cities is delivered *on* each city page, not by multiplying pages. This reaches the same ~1,000 target with far less duplicate-content risk.

### The hyperlocal estate pages are the real local lever

This replaces the matrix as the volume driver, and it is where Hagerstone's engineering data genuinely differentiates. Each estate page covers all six lines for one industrial or commercial estate, with real local specifics.

Extend the `City` interface in [cities.ts](src/data/cities.ts) with a per-location engineering block, all of it public, citable, finite data:

```ts
interface CityEngineering {
  windSpeedMs: number;          // IS 875 Pt 3 basic wind speed — 33-55 m/s across these states
  seismicZone: 'II'|'III'|'IV'|'V';   // IS 1893
  climateZone: 'composite'|'hot-dry'|'cold'|'temperate'|'warm-humid'; // ECBC/NBC
  snowLoadKnM2?: number;        // HP, J&K only — drives PEB roof design
  developmentAuthority: string; // DDA / HSVP / GDA / Noida Authority / PUDA / JDA / AUDA
  fireNocAuthority: string;
  byeLawReference: string;      // state building bye-laws citation
  discom: string;
  approxRateBandInrSqft: [number, number];
}
```

This makes each page technically distinct in a way that matters to the reader: a **Shimla** page covers snow load and cold-climate thermal breaks; **Jaipur** covers 47 m/s wind and hot-dry SHGC; **Jammu** covers Seismic Zone V; **Baddi** covers HP industrial policy and its own fire authority. Same template, genuinely different engineering — which is exactly what "technical pages" means, and it is content only an engineering firm can credibly write.

**Enforced uniqueness floor** (Zod + CI, per page): ≥3 named local business/industrial districts · ≥1 real delivered project or a named nearby one · ≥120-word unique market note · the full engineering block · 3 location-specific FAQs. Plus `scripts/check-content-uniqueness.mjs` failing the build at >70% 5-gram overlap between any two pages.

**Rollout in waves of ~25**, watching Search Console indexation between waves. If a wave indexes poorly, stop and fix uniqueness before the next — do not publish 175 location pages in one deploy.

**Metro micro-markets (Cyber City, Sector 62, BKC) are folded into the estate template** rather than given their own matrix. A commercial district and an industrial estate are the same page shape: one place, all six lines, real local specifics. There is no service×place multiplication anywhere in this plan.

**Sequencing by review burden:** glossary and materials are highest-throughput / lowest-review (a designer clears ~15 glossary terms in an afternoon). Estate pages need sales-team local input, not engineer input. `/compliance/` is the highest-risk-if-wrong content and is hard-blocked on engineer sign-off — enforce `reviewedBy` non-empty for `status: published` in that collection.

**Phase 5 prunes:** any `/insights/` page with 0 impressions after 120 days gets merged or removed.

---

## Off-site (parallel, month 1+)

[OFFSITE-TODO.md](OFFSITE-TODO.md) has **zero items ticked**. The prior audit scored the site **26/100** and found Hagerstone absent from AI answers for "best office interior design companies in Delhi NCR" while PHI Designs, Studio Lotus and Interia appear. On-site content alone won't fix entity authority. Highest ROI: Clutch.co profile + 5 verified reviews, fix the "Hager Stone" spelling on IndiaMART, GBP NAP consistency, Crunchbase.

---

## Risks, ranked

1. **The 175 location + estate pages are the highest-risk block.** Dropping the service×city matrix removed most of this exposure, but 110 estate pages still share one template. Done as templated text with a swapped place name, it is a doorway pattern and Google demotes the whole site, not just those pages. Done with the `CityEngineering` block, real project proof and local specifics, it is legitimate technical content. **The difference is entirely execution discipline** — treat the uniqueness floor and the CI overlap gate as non-negotiable. Publish in waves of ~25 and stop on the first wave that indexes badly. Data collection is the real bottleneck: ~175 rows of wind zone, seismic zone, climate zone, authority names and rate bands is genuine research, not generation. Without a paid keyword tool, prioritise estates by where Hagerstone has actually delivered work, not by guessed search volume.
2. **Prerender at 1,000 routes.** `renderToString` is 15-60ms/page, so ~1,000 routes ≈ 15-60s — *not* the bottleneck. The real problems are `dist/` growing to ~150MB of HTML (slowing deploy upload more than build) and [prerender.js:57](prerender.js#L57) being a serial loop on one core. Fix with a `worker_threads` pool and an incremental manifest that re-renders only changed routes. Measure at ~150 pages and extrapolate.
3. **Build limits.** Netlify's default timeout is 15 min; Vercel 45. Both configs are present and both run the full build — **you are paying twice for every push.** Pick one primary and disable auto-deploy on the other.
4. **Human review capacity is the true ceiling.** ~10 pages/week from month 5 needs roughly 6-8 engineer-hours weekly. If that isn't committable, cut `/insights/` from 300 to 180 and keep compliance + calculators — they carry more commercial weight per page. The failure mode is someone bulk-flipping `status: published` to hit a page count; guard it in CI.
5. **Cost contradiction compounds.** Publishing 12 `/cost/` pages and 6 calculators on an unresolved contradiction turns one embarrassment into eighteen. P0.5 is a hard prerequisite for Phase 2.

---

## Verification

- `npm run build && npm run build:server && npm run build:prerender` exits 0 and emits one `.html` per published route.
- CI asserts generated sitemap URL count === prerendered file count === `routes.filter(r => r.sitemap.include).length`.
- CI asserts client/server template map parity.
- `curl` a prerendered page; confirm body content is in the raw HTML with JS disabled.
- **Submit the contact form and confirm a row lands in Supabase `leads`** — the regression test that matters most.
- Validate JSON-LD via Google Rich Results Test on one page per template type.
- Content uniqueness gate passes across all city and estate pages (no pair above 70% 5-gram overlap).

---

## Needs a decision from Hagerstone

1. **Authoritative fit-out cost bands per grade** (P0.5) — premium-only at ₹2,500+/sqft, or serve mid-market from ~₹1,200? Blocks all cost pages, and the `approxRateBandInrSqft` field on every location page.
2. **The city and estate lists** — I will draft ~65 cities across the 8 states plus ~110 industrial/commercial estates for sign-off. Sales input needed on which estates Hagerstone has real presence or delivered work in; those go first. Gujarat was in Sir's list though not North India — assuming intentional (Ahmedabad/Surat/Vadodara demand) and including it.
3. **Who reviews technical content, and for how many hours per week** — this sets the real page-count ceiling more than anything else here. The per-location engineering block needs someone who can confirm wind and seismic zones; I will research and they spot-check.
4. **Which host serves production** — Netlify or Vercel (both configured, both building on every push).
5. **Ahrefs, later.** Deferred by decision. Revisit once the first waves are live and GSC shows real impressions — at that point it tells us which of the remaining ~800 pages are worth writing, which is when it starts paying for itself.
