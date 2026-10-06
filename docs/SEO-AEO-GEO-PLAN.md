# SEO, AEO and GEO plan for hagerstone.com: what's done, what's next

**Updated:** 6 October 2026, at commit `c355060`. Line numbers below are from that commit
and will drift; search for the quoted code if a line has moved.
**Scope:** only work inside this repo. Off-site work (Google Business Profile, Clutch,
IndiaMART, Wikidata) is in `OFFSITE-TODO.md`.
**Rules still apply:** `CLAUDE.md` and §0 of `SEO-PROJECT-STATUS.md`. That means no
Hagerstone ₹ rates, no structural values, no statutory verdicts, no new client names and
no new company figures. Every item below fits inside those rules.

| Term | Goal |
|---|---|
| **SEO** | Rank higher in Google's normal results |
| **AEO** | Be the answer Google quotes in snippets and AI Overviews |
| **GEO** | Be named and cited by ChatGPT, Perplexity, Gemini and similar tools |

Starting point (Search Console, 28 days to 26 Sept): 13,600 impressions, 309 clicks,
average position 19.2. CTR is already good for that position, so the upside is
**position**: trust signals, content crawlers can see, and page weight.

---

## Already done

| Item | What | Commit |
|---|---|---|
| A1 | One `Organization` with a stable `@id` on every page; publishers reference it | `3b0ce51` |
| A2 | One social link set in `src/lib/social.ts` | `3b0ce51` |
| A4 | Real `<h1>` on /about, /services, /contact; content no longer `opacity:0` in static HTML | `3b0ce51` |
| A7 (part) | Sitemap `<lastmod>` from real `updatedOn ?? publishedOn` dates | `55c2116` |
| B1 | Client logo carousel on service and city pages | `18bf36b` |
| B2 (part) | Project spec tables, `ImageGallery` schema, meta titles/descriptions | `18bf36b` |
| B4 | 5 FAQs per service page, shared `Breadcrumbs` with schema | `18bf36b` |
| C3 (part) | Homepage-only hero preload, fonts trimmed | `a062041` |
| D1 (part) | Definitions on industries and estates; required by the build | `a062041` |
| D4 (part) | IndexNow on production builds, Bravebot in robots.txt | `a062041` |
| D5 | Markdown copies of all content pages for AI agents | `a062041` |
| — | Doorway service-in-city pages retired, titles under 60 chars | `26c500e` |
| — | **Projects page fixed:** cards never appeared, 404 flash, 33 MB of thumbnails, CR63 video autoloading | `c355060` |

---

## To do, in order

### Step 1: quick fixes (small, high value, removes risk)

#### 1a. Move the remaining Supabase routes into code (SEO), found 6 Oct
**Problem:** eight pages exist in the browser app only through the Supabase `routes`
table: `/about`, `/our-team`, `/services`, `/ideas`, `/blog`, `/blog/:slug`,
`/find-your-style`, `/contact`. The table arrives after a network round trip. Until then
the path falls through to `path="*"`, so React replaces Google's correct prerendered page
with a **404 for about a second**. If Supabase is slow or down, it stays a 404. This is
exactly what `/projects` did before `c355060`. It is confirmed in code; check it live with
a browser on a slow connection.
**Do:** add each path to `src/App.tsx` the way `/projects` was done (eager import, plain
`<Route>`), and add it to `CODE_ROUTED_PATHS` (`App.tsx:35`) so the table's row is
skipped. All eight already exist in `ServerApp.tsx`. Once no rows are left, delete
`useRoutes()` and `src/lib/routeRegistry.ts`. Dropping the Supabase table itself is a
separate step.
**Check:** open each page with a hard reload; no 404 frame. Prerender still `0 failed`.

#### 1b. Remove "500+ Satisfied Corporate Clients" and centralise company figures (A3, SEO)
**Problem:** `src/pages/Index.tsx:575` says "500+ Satisfied Corporate Clients". That
contradicts "250+ projects" and nothing backs it. Google's rater guidelines treat
conflicting claims as low trust.
**Do:** create `src/data/companyFacts.ts` holding the six homepage figures (11+ years,
7M+ sq ft, 250+ projects, 350+ manpower, 25+ cities, 7+ countries). Import it in
`Index.tsx`, `About.tsx`, `src/lib/seo.ts`, and the two civil MDX files that say
"350+ professionals" (`industrial-and-factory-construction`,
`turnkey-commercial-construction`; edit them with the Edit tool, never PowerShell).
Replace the "500+" line with something the site can back, e.g. "Trusted by Samsung, Air
India, Taj, AECOM and 12 more" from `clientLogos.ts`. In `teamMembers.ts:22` and
`About.tsx`, label Dhruv's "10+ million sq ft" as his **personal career** figure.
**No new numbers.** Use only figures already on the site.

#### 1c. Remove the ₹ rate band from the homepage FAQ (B5, SEO)
**Problem:** `src/data/homepageFaqs.ts:22` quotes ₹800–2,500/sq ft. That breaks the
no-rates rule and contradicts the estimator's ₹2,500 floor.
**Do:** rewrite the answer as what drives cost (scope, Cat A vs Cat B, enclosed rooms,
finish grade, MEP), with **no figure**, linking
`/compare/turnkey-vs-item-rate-fit-out-contract`. Remove the warning comment at line 10.

#### 1d. Article dates and locale in social tags (rest of A7, AEO)
**Do:** in `src/components/SEOHead.tsx` (next to `og:type`, line 48) add
`article:published_time`, `article:modified_time` (from `updatedOn ?? publishedOn`) on
content and blog pages, and `og:locale` = `en_IN` on all pages.
**Never set `updatedOn` without a real rewrite.** See `CLAUDE.md`.

### Step 2: "Batch 2", the GEO batch that never shipped

#### 2a. Citations become real links (A6, GEO, highest GEO value)
**Problem:** 656 citation labels (IS, NBC, ECBC, EN, ASTM), **0 with a URL**.
`ContentArticle.tsx:208–215` renders them as plain text, and none appear in JSON-LD.
Citing linked sources was the best-performing treatment in the GEO research this plan
follows.
**Do:**
- `src/data/standards.ts`: a map from label prefix to public URL, about 25 entries.
  NBC 2016 → BIS NBC page. IS codes → `standards.bis.gov.in` detail page where one
  resolves, otherwise BIS portal search for that code. ECBC → BEE's ECBC page.
  ASTM/EN/ISO → the publisher's catalogue page. Prefer the standards body over mirrors.
- `ContentArticle.tsx`: render each citation as `<a href target="_blank" rel="noopener">`
  when a URL resolves (frontmatter `url` first, `schema.ts:147` already allows it, then
  the map). Emit `citation: [{ "@type": "CreativeWork", name, url }]` on the Article node.
- `scripts/check-client-safety.mjs`: **warn** (not fail) on citations with no URL.
**Check:** a guide page shows linked citations; its JSON-LD has `citation[]`.

#### 2b. Correct authors (A5, GEO)
**Problem:** `ContentArticle.tsx:84` hard-codes `author: authorSchema` (Dhruv) on every
content page, whatever the frontmatter says. Akhilesh Kumar Singh (Director – Facade) is
named on 14 content files but isn't in `teamMembers.ts` and has no profile.
**Do:**
- `src/data/authors.ts`: typed map keyed by slug (`dhruv-agarwal`, `akhilesh-kumar-singh`,
  `bhaskar-tyagi`) → `{ name, jobTitle, bio, profilePath }`. Use only credentials already
  on the site.
- `schema.ts:170`: `author` becomes an enum of those slugs, default `dhruv-agarwal`.
  Migrate the 246 files with a **node** script (UTF-8 safe), never PowerShell.
- `ContentArticle.tsx`: build the `Person` node from the map; visible byline links to the
  profile.
- Set `author: akhilesh-kumar-singh` on the `facade/` pages and facade-related
  glossary/compare pages. **Don't invent** attributions for MEP/PEB/civil.
- `About.tsx` "Our Leaders": add an Akhilesh block with an `id` anchor so `Person.url`
  resolves.

### Step 3: speed

#### 3a. Smaller JavaScript entry file (C1, SEO)
**Problem:** `dist/assets/index-*.js` is about 1.77 MB. `src/content/.generated/index.ts`
(about 197 KB on disk, but every field of every page) is imported eagerly. `faqs` alone
was 413 KB of it in the September measurement.
**Do:**
- `scripts/build-content-index.mjs`: write a **light** `index.ts` (only the fields read
  outside `ContentArticle`: path, slug, collection, title, metaTitle, metaDescription,
  definition, publishedOn, updatedOn, author, heroImage, heroImageAlt, readingMinutes,
  designStage, file, related, keywords, primaryKeyword) **plus** one
  `entries/<collection>--<slug>.json` per page with the full record.
- `contentModules.ts`: lazy `import.meta.glob` of the entries, loaded alongside the MDX
  body in `ContentPage`. `contentModules.server.ts` keeps the full eager index for prerender.
- `App.tsx:15–28`: `lazy()` for `ServiceDetail`, `CityHub`, `ServiceCity`, `ContentPage`,
  `CollectionIndexPage`. Keep `Index` eager.
**Check:** record the real before/after size. Expect about 0.9–1.0 MB; don't promise 500 KB.

#### 3b. Remaining project photos (rest of C2, SEO)
**Problem:** galleries for Revolve, MicroSave, Himalaya, VinFast and Valorium are 55
full-size camera files on Supabase storage, several MB each. `public/projects/theon` is
18 MB.
**Do:** same as `c355060`: download, convert with `sharp` to WebP ≤250 KB at 1920 px max,
store in `public/projects/<id>/`, update `src/data/project.ts`. Add `srcSet` with an
800 px copy in `ImageCarousel.tsx`. Extend `check-images.mjs` to walk `project.ts` local
paths so this can't regress.

#### 3c. Second homepage video
`/testimonials/VSTUnitedGroupVideo.webm` (8 MB) still downloads at homepage load. Same
fix as CR63 in `AchievementSection.tsx`: play only when scrolled into view.

#### 3d. Template leftovers (rest of C3)
- **SearchAtlas script** (`index.html:32`): synchronous third-party script that rewrites
  content client-side on every page. **Decision needed** (see below); default = remove.
- `prerender.js`: inject `<link rel="modulepreload">` for the entry chunk's imports from
  `dist/.vite/manifest.json` (enable `build.manifest: true`).

### Step 4: answer-first content (AEO)

#### 4a. Definitions on the remaining pages (rest of D1)
A one- or two-sentence answer as the first thing after the H1 is what snippets and AI
Overviews lift. Missing on materials **0/60**, facade 3/12, interiors 6/15, mep 5/12,
civil 4/7, peb 3/7. Write them from each page's own text (no new facts), then add those
collections to `DEFINITION_REQUIRED` (`schema.ts:93`). Not a rewrite, so **don't set
`updatedOn`**.

#### 4b. Tables where prose does a table's job (D2)
Script a list of content pages with no table and three or more "X vs Y" sentences;
convert about 20, services tree first.

#### 4c. Verbatim quotes from standards (D3, also GEO)
Add `quote?: string` (≤300 chars, verbatim clause text) to `citationSchema`
(`schema.ts:142`). Render it as `<blockquote cite={url}>` and emit it as `citation.text`.
Start with the 20 highest-impression pages from Search Console. Only use text from the
published standard.

### Step 5: commercial pages

#### 5a. City page template (B3, SEO)
32 cities are now published (the plan's "cut to 12" was overtaken by the 29 Sept city
additions). Whatever the count:
- `CityHub.tsx`: render "Nearby" links from `nearbyCitySlugs`. The data exists but only
  `ServiceCity.tsx` reads it.
- Create a `/locations` index page; point the breadcrumb at it (line 97 is plain text).
  Add it to both routers and `routesToPrerender`.
- City name first in the title: `Office Fit-Out in Gurugram | Hagerstone`. A published
  SearchPilot test of this pattern showed +8.5%.
- A Google Maps **link** (not an iframe) per city, from `districts[0]`.
- `geo` + `sameAs` on the city LocalBusiness node.

#### 5b. Project FAQs (rest of B2)
Add `faqs?: FaqItem[]` to `ProjectData`, render with the shared accordion and
`buildFaqSchema`. Use rule-safe questions only (scope, sector, process); no rates or
durations.

---

## Decisions for Yash

| # | Decision | Default if no answer |
|---|---|---|
| 1 | **3.3 s logo loader** (`DynamicLoader`) covers every page on first visit and every route change. It makes the site feel slow and likely delays Google's LCP measurement. Remove, cut to ~0.8 s, or keep? | Keep |
| 2 | **SearchAtlas script:** remove, or keep and load deferred? | Remove |
| 3 | **Bing Webmaster verification code** (Bing feeds ChatGPT search) | Skip until provided |
| 4 | **Founding year:** 2013 or 2014? Stays out of schema until settled. | Omit |

---

## Before every push

```
git pull --rebase
node scripts/build-content-index.mjs
node scripts/check-images.mjs
node scripts/check-client-safety.mjs
npx tsc --noEmit -p tsconfig.app.json
npx eslint <changed files>            # not `npm run lint`: pre-existing error in Index.tsx
npm run build && npm run build:server && npm run build:prerender
```

Prerender must end with `Prerender complete: N succeeded, 0 failed` and
`Sitemap: N URLs (matches prerendered pages)`. At `c355060`, N = 376.

After Step 1, check Search Console against the 19.2 average position baseline.
