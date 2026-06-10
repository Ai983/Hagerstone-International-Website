# GEO Fix Directives — hagerstone.com
**For: Claude Code | Source: GEO Audit 2026-06-10 (Score: 26/100 — Critical)**
**Stack: React + Vite + Tailwind (client-side rendered SPA)**

> GOAL: Raise GEO score from 26 → 65+ by making all content visible to AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), adding structured data, and creating citable content blocks.

---

## ⚠️ IMPORTANT CONTEXT FOR CLAUDE CODE

The site is a **React/Vite SPA** — NOT Next.js. The audit's "switch to server components" advice does not apply directly. Choose ONE of the rendering fixes in Phase 1 based on what the codebase allows. **Read the repo structure first before deciding.**

---

## PHASE 1 — RENDERING FIX (CRITICAL — everything else depends on this)

### Task 1.1: Audit current setup
- Open `vite.config.js/ts`, `package.json`, `src/main.jsx`, router setup
- Confirm: pure CSR SPA? Any prerender plugin already present?
- List all routes (should match the 32 sitemap URLs)

### Task 1.2: Choose rendering strategy (in order of preference for this codebase)

**Option A — Static Prerendering (RECOMMENDED — least disruption):**
- Use `vite-plugin-prerender` or `vite-react-ssg`, or a postbuild prerender step with Puppeteer (e.g. `react-snap` style crawl) that renders each route to static HTML at build time
- Site content is mostly static (services, projects, blog) — perfect SSG candidate
- Every route in the sitemap must output a real HTML file with full body content
- ⚠️ Verify the chosen plugin is maintained and compatible with the current Vite major version before installing — check npm before committing to one

**Option B — Migrate to a framework with SSG built-in:**
- Astro (can embed existing React components) or Next.js
- Bigger lift; only if Option A fails due to heavy client-side state

**Option C — Vike (vite-plugin-ssr) for true SSR:**
- Only if dynamic per-request rendering is genuinely needed (it likely isn't)

### Task 1.3: Verification gate (MANDATORY before Phase 2)
```bash
curl -s https://hagerstone.com/ | grep -i "173"   # should find client stats
curl -s https://hagerstone.com/about | wc -c       # should be >> 2KB of real HTML
```
Every sitemap URL must return full HTML (headings, paragraphs, stats) **without JavaScript execution**. If curl only returns `<title>`, Phase 1 is NOT done.

⚠️ Scroll-scrub hero note: the homepage cinematic video hero (GSAP/ScrollTrigger/Lenis) must stay client-side. Prerender the static content (headings, stats, services text) into HTML; hydrate animations on the client. Do NOT let the prerenderer wait on video loading — guard scroll-scrub init behind `typeof window !== 'undefined'`.

---

## PHASE 2 — llms.txt (do same day as Phase 1)

Create `public/llms.txt` so it deploys to `https://hagerstone.com/llms.txt`:

```
# Hagerstone International

> Hagerstone International is a turnkey office design and build company headquartered in New Delhi, India. Founded in 2013, the firm has delivered 7.9M+ sqft of office interiors for 173+ enterprise clients including Airtel, Singapore Airlines, Lufthansa, and Panasonic, across Delhi NCR and 25+ Indian cities. Projects are delivered within 60 days.

## Key Pages
- [Homepage](https://hagerstone.com/): Overview of services and capabilities
- [About](https://hagerstone.com/about): Company history, team, and credentials
- [Services](https://hagerstone.com/services): Full service portfolio
- [Office Design & Build](https://hagerstone.com/services/office-design-build): Primary service
- [Interior Fit-Out](https://hagerstone.com/services/interior-fit-out): Turnkey fit-outs
- [MEP Services](https://hagerstone.com/services/mep): Mechanical, Electrical, Plumbing
- [HVAC](https://hagerstone.com/services/hvac): HVAC design and installation
- [Projects](https://hagerstone.com/projects): Portfolio of completed office projects
- [Our Team](https://hagerstone.com/our-team): Leadership and expertise
- [Blog](https://hagerstone.com/blog): Insights on office design and workplace strategy
- [Contact](https://hagerstone.com/contact): Get in touch

## Service Areas
Office design and build services available in: Delhi, Noida, Gurgaon, Faridabad, and 25+ cities across India.

## Key Facts
- Founded: 2013
- Founder: Dhruv Agarwal (TEDx Speaker, Author of "Workplace 2.0")
- Square footage delivered: 7,91,433+ sqft
- Clients served: 173+
- Delivery guarantee: 60 days
```
> ⚠️ Verify these exact URLs against the actual sitemap/routes before deploying — fix any path mismatches.

---

## PHASE 3 — SCHEMA.ORG STRUCTURED DATA (JSON-LD)

Implementation: create a reusable `<SchemaMarkup>` component (or use `react-helmet-async` / native `<script type="application/ld+json">` injected at build time). Schema MUST appear in the prerendered HTML — verify with curl, not just browser DevTools.

### 3.1 Homepage — `Organization` + `LocalBusiness` + `WebSite`
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hagerstone International",
  "alternateName": "Hagerstone International Pvt. Ltd.",
  "url": "https://hagerstone.com",
  "logo": "https://hagerstone.com/logo.png",
  "description": "Office design and build company delivering turnkey interiors in Delhi NCR and 25+ Indian cities in 60 days.",
  "foundingDate": "2013",
  "founder": {
    "@type": "Person",
    "name": "Dhruv Agarwal",
    "jobTitle": "Founder & CEO",
    "sameAs": "https://www.linkedin.com/in/dhruv-agarwal-3aa04235/"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "addressCountry": "IN"
  },
  "areaServed": ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  "sameAs": [
    "https://in.linkedin.com/company/hagerstone",
    "https://www.youtube.com/channel/UCvl0bmeUgX6LvzQYcR-HHIw",
    "https://www.instagram.com/hagerstone_international/",
    "https://www.facebook.com/HagerstoneInternational",
    "https://www.crunchbase.com/organization/hagerstone-international"
  ]
}
```
> ⚠️ Verify logo path, LinkedIn URL, YouTube channel ID, and exact addresses against real assets before shipping. Add `GeoCoordinates` + `OpeningHoursSpecification` to LocalBusiness with the real office address.

### 3.2 Per-page schema map
| Page type | Schema | Priority |
|---|---|---|
| Homepage | Organization, WebSite, LocalBusiness, FAQPage | Critical |
| 6 service pages | Service + FAQPage | Critical |
| 6+ blog posts | Article + Person (author) + BreadcrumbList | High |
| Project pages | CreativeWork + ImageObject | High |
| Our Team | Person per member | High |
| Contact | LocalBusiness + GeoCoordinates | High |
| City pages (Gurgaon/Delhi/etc.) | LocalBusiness + areaServed | Medium |

Validate every page with: https://validator.schema.org/ and Google Rich Results Test.

---

## PHASE 4 — META TAGS (all 32 pages)

Add per-route, present in prerendered HTML:

1. **Meta description** (150–160 chars, unique per page). Homepage:
   > "Hagerstone International transforms offices in Delhi NCR and 25+ Indian cities. Turnkey design & build in 60 days. 173+ enterprise clients, 7.9M sqft delivered."
2. **Open Graph**: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
3. **Twitter Card**: `summary_large_image`
4. **Canonical tag** on every page — decide non-www `https://hagerstone.com/` as canonical, 301-redirect www and trailing-slash variants

Build a single `<SEO>` component that takes `{title, description, ogImage, canonical}` props and is rendered on every route.

---

## PHASE 5 — CITABLE CONTENT BLOCKS

### 5.1 Homepage FAQ section (visible HTML + FAQPage schema)
Minimum 5 Q&As:
- **How long does it take to design and build an office?** → "Hagerstone delivers complete office design and build projects within 60 days — from design concepts to move-in ready handover."
- **What services does Hagerstone International offer?** → end-to-end design & build, space planning, MEP, HVAC, fit-out construction, furniture, project management.
- **Which cities does Hagerstone serve?** → Delhi NCR + 25+ Indian cities.
- **How much does office interior design cost in Delhi NCR?** → varies by size/spec; transparent quotes; design-build integration savings.
- **What does a turnkey office fit-out include?** → write from actual service scope.

> ⚠️ The "Rs 119+ crores saved" figure from the audit — confirm with the business before publishing. Do not ship unverified statistics.

### 5.2 "Why Hagerstone" stats section (homepage, crawlable HTML)
- 11+ years | 173+ enterprise clients | 7,91,433+ sqft delivered | 60-day delivery | 25+ cities | 309+ skilled workers
- Named clients: Airtel, Singapore Airlines, Lufthansa, Panasonic, EDF, Statkraft (confirm permission to name them publicly)

### 5.3 Blog post upgrades
- Visible author byline on every post: "Dhruv Agarwal — Founder & CEO, TEDx Speaker, Author of Workplace 2.0"
- Visible publish date + last-updated date
- Article schema with `author`, `datePublished`, `dateModified`, `description`

### 5.4 FAQ sections on key service + city pages
- `/services/office-design-build` and `/office-design-gurgaon` first, with FAQPage schema, location-specific questions.

---

## PHASE 6 — SITEMAP & TECHNICAL CLEANUP

- Add image sitemap (`sitemap-images.xml`) covering project portfolio images
- Add video sitemap for YouTube embeds (if embedded on site)
- Reference both from `robots.txt` / sitemap index
- Confirm `lastmod` dates in sitemap are real and update on deploy
- Keep `robots.txt` as-is (already allows all AI crawlers) — just add the new sitemap lines

---

## PHASE 7 — OFF-SITE (manual tasks, not code — flag for the team)

These are NOT Claude Code tasks; output them as a TODO checklist file:
- [ ] Clutch.co profile + 5 verified client reviews
- [ ] Fix IndiaMART spelling: "Hager Stone" → "Hagerstone" (entity consistency)
- [ ] Pitch editorial features: Inc42, ET Rise, DesignPataki, Architizer
- [ ] Weekly LinkedIn articles linking to new FAQ pages
- [ ] YouTube "60-Day Office Transformation" series

---

## EXECUTION ORDER & ACCEPTANCE CRITERIA

| # | Task | Done when... |
|---|---|---|
| 1 | Prerender/SSG fix | `curl` of every sitemap URL returns full HTML body |
| 2 | llms.txt | `curl https://hagerstone.com/llms.txt` returns 200 with content |
| 3 | Homepage schema | validator.schema.org passes; visible in curl output |
| 4 | SEO component + meta on all 32 pages | unique description per page in raw HTML |
| 5 | FAQ + stats sections | visible in raw HTML; FAQPage schema validates |
| 6 | Blog bylines + Article schema | all posts show author/date in raw HTML |
| 7 | Canonicals + redirects | www → non-www 301; one canonical per page |
| 8 | Image/video sitemaps | accessible, referenced in robots.txt |

**Regression guard:** after each phase, confirm the scroll-scrub hero, dark/light toggle, and chat bubble still work in the browser. Prerendering must not break client hydration.

**Final verification:** run the same WebFetch-style test the audit used — fetch each page without JS and confirm full content is present.
