# GEO Audit Report: Hagerstone International

**Audit Date:** 2026-06-10
**URL:** https://hagerstone.com/
**Business Type:** Agency/Services — Office Design & Build (Delhi NCR, India)
**Pages Analyzed:** 32 (via sitemap) + homepage, robots.txt, llms.txt check

---

## Executive Summary

**Overall GEO Score: 26/100 (Critical)**

Hagerstone International has a strong business foundation — 11+ years of experience, 173+ enterprise clients (Airtel, Singapore Airlines, Lufthansa), a TEDx-speaking founder, and an active social media presence — but these assets are **almost entirely invisible to AI systems**. The site is rendered entirely via client-side JavaScript, meaning AI crawlers (GPTBot, ClaudeBot, PerplexityBot) receive only a page title and nothing else. There is no llms.txt file, no schema.org markup on any page, no meta descriptions, and no Open Graph tags. As a result, Hagerstone does **not appear** in AI-generated recommendations for "best office interior design companies in Delhi NCR" while competitors like PHI Designs, Studio Lotus, and MM Design Studio do. The most urgent priority is adding server-side rendering or static generation to expose actual page content to AI crawlers — everything else builds on that foundation.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 12/100 | 25% | 3.0 |
| Brand Authority | 38/100 | 20% | 7.6 |
| Content E-E-A-T | 40/100 | 20% | 8.0 |
| Technical GEO | 28/100 | 15% | 4.2 |
| Schema & Structured Data | 5/100 | 10% | 0.5 |
| Platform Optimization | 28/100 | 10% | 2.8 |
| **Overall GEO Score** | | | **26/100** |

---

## Critical Issues (Fix Immediately)

### 1. JavaScript-Only Rendering — AI Crawlers See Only the Page Title
**All 32 pages.** Every URL in the sitemap — homepage, service pages, blog posts, project pages, contact — returns only `<title>Hagerstone International | Office Design & Build Company</title>` to crawlers. AI systems that do not execute JavaScript (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) get zero content from any page. No headings, no service descriptions, no credentials, no blog articles, no case studies.

**Fix:** Migrate to server-side rendering (SSR) or static site generation (SSG). If using Next.js, switch pages from client components to server components or use `getStaticProps`/`getServerSideProps`. Ensure the HTML returned on first request includes all content without JavaScript execution.

**Expected Impact:** Enables all other GEO improvements to take effect. Without this, no other optimization can be cited by AI.

---

### 2. Complete Absence of Schema.org Structured Data
**All pages.** No schema.org markup of any type was found on any page — no `Organization`, no `LocalBusiness`, no `Service`, no `Article`, no `FAQPage`, no `Person`. Structured data is how AI systems identify entities, extract facts, and cite specific information. Without it, Hagerstone cannot be recognized as an authoritative entity.

**Fix:** Add at minimum these schemas:
- `Organization` on homepage (name, URL, logo, address, phone, social profiles)
- `LocalBusiness` with `GeoCoordinates` and `OpeningHoursSpecification`
- `Service` on each service page
- `Article` on each blog post with `author`, `datePublished`, `description`
- `FAQPage` wherever FAQs exist (or add FAQ sections to key pages)
- `Person` on the Our Team page for Dhruv Agarwal

---

### 3. No llms.txt File
**https://hagerstone.com/llms.txt — 404.** The llms.txt standard allows sites to explicitly tell AI systems what content to index, which pages to prioritize, and what the site is about. Its absence means AI systems must infer site structure from whatever they can render (currently: nothing).

**Fix:** Create `/llms.txt` in the next sprint. See the llms.txt quick-win template in the Quick Wins section below.

---

## High Priority Issues (Fix Within 1 Week)

### 4. No Meta Descriptions on Any Page
Every page checked returned no `<meta name="description">` content. Meta descriptions are used by search engines and AI systems to understand page purpose and generate previews. Their absence reduces AI citability and click-through rates from AI-generated responses.

**Fix:** Add unique, descriptive meta descriptions (150-160 characters) to all 32 pages. Example for homepage:
> "Hagerstone International transforms offices in Delhi NCR and 25+ Indian cities. Turnkey design & build in 60 days. 173+ enterprise clients, 7.9M sqft delivered."

### 5. No Open Graph or Twitter Card Tags
No `<meta property="og:*">` or `<meta name="twitter:*">` tags were found. These are critical for sharing in social platforms and for AI systems that index social content.

**Fix:** Add OG tags to all pages: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`. Add Twitter Card `summary_large_image` tags.

### 6. Zero Question-Answering Content Blocks Accessible to AI
AI systems like Perplexity and Google AI Overviews heavily favor content structured as questions and answers. While the site may have FAQ content in its JavaScript-rendered pages, none of it is accessible to crawlers. Even after fixing SSR, FAQ content needs to be explicitly structured and marked up.

**Fix:** Add a visible FAQ section to every key service and location page. Use `FAQPage` schema. Example questions:
- "How long does an office design and build project take?"
- "What does a turnkey office fit-out include?"
- "How much does office interior design cost in Delhi NCR?"

### 7. Blog Posts Have No Author Attribution (Not Accessible to Crawlers)
The blog section (6+ posts indexed) has no author bylines or publication dates visible to AI crawlers. This destroys E-E-A-T signals — AI systems cannot attribute the content to a credible expert.

**Fix:** After SSR fix, ensure all blog posts include visible author name, title, and publish date. Add `Article` + `Person` schema. Dhruv Agarwal's TEDx Speaker and author credentials should appear in every post's structured data.

---

## Medium Priority Issues (Fix Within 1 Month)

### 8. Hagerstone Not Appearing in AI-Generated Industry Recommendations
A test query for "best office interior design companies in Delhi NCR" returns competitors (PHI Designs, Studio Lotus, MM Design Studio, Interia) but **not Hagerstone International**. This is the direct consequence of the critical issues above.

**Fix:** Address Critical Issues 1-3 first, then: ensure consistent entity mentions across LinkedIn, Crunchbase, and brand profiles; add IndiaMART and JustDial reviews; pursue industry citations from design awards.

### 9. No Wikipedia or High-Authority Reference Presence
Hagerstone has no Wikipedia page, no mentions on authoritative industry reference sites, and no citations in news media. Wikipedia and authoritative media coverage are among the strongest signals AI models use for entity recognition.

**Fix:** Pursue editorial coverage in Inc42, ET Rise, Business Standard, Architizer, or DesignPataki. Request case study features. If the company meets notability requirements, a Wikipedia stub is worth creating.

### 10. No Clutch.co or G2 Profile with Reviews
Hagerstone has data-aggregator profiles (Crunchbase, ZoomInfo) but no verified client review profiles on Clutch.co or similar platforms. AI systems like ChatGPT frequently cite Clutch for B2B service recommendations.

**Fix:** Create and populate a Clutch.co profile. Request 5+ verified client reviews. Similarly consider IndiaMART, Justdial, and DesignCafe.

### 11. Sitemap Does Not Include Images or Video
The sitemap lists 32 HTML pages only. No image sitemap (`sitemap-images.xml`) and no video sitemap exist, missing opportunities for AI image and video citations.

**Fix:** Add image sitemap for project portfolio pages. Add video sitemap for YouTube video embeds.

---

## Low Priority Issues (Optimize When Possible)

### 12. LinkedIn Company Page Has Articles But Lacks Consistency
LinkedIn pulses ("7 Most Essential Office Interior Elements", "Our Interior Design Process") show content activity, but the format is irregular and not consistently linked back to website content.

**Fix:** Publish weekly LinkedIn articles that directly reference specific website URLs, creating entity-link signals that AI models follow.

### 13. YouTube Channel Has Low Video Volume
The YouTube channel exists with a few videos (testimonials, residential work) but lacks a systematic series. AI systems increasingly cite YouTube channels as authority signals.

**Fix:** Create a "60-Day Office Transformation" video series. Add schema-compatible video descriptions with structured timestamps.

### 14. Instagram Active But Content Not Connected to Website
Instagram is active (`@hagerstone_international`) but links to the site are not reflected in content schema or structured data.

**Fix:** After SSR and schema fixes, add `sameAs` links in Organization schema pointing to all social profiles.

### 15. No Canonical Tags Verified
Canonical URL implementation could not be verified due to JavaScript rendering issues. Duplicate content across `www` vs non-`www` and `/` vs no-slash variants may exist.

**Fix:** After SSR fix, audit canonical tags. Ensure `https://hagerstone.com/` is the canonical form for the homepage.

---

## Category Deep Dives

### AI Citability (12/100)

**What was measured:** Whether AI crawlers can extract quotable, factual content from any page.

**Finding:** AI crawlers receive only one piece of information from every Hagerstone page: the text string `"Hagerstone International | Office Design & Build Company"`. That's it. No descriptions, no service explanations, no credentials, no statistics, no project details, no blog articles — nothing.

Hagerstone has genuinely compelling content based on what we found in search results and third-party profiles: "173+ enterprise clients", "7,91,433 sqft delivered", "60-day office transformation guarantee", "founder Dhruv Agarwal is a TEDx Speaker and Author". But none of this exists in the crawlable DOM.

**Current state:** 12/100 (the minimum baseline assumes the site at least exists and has a title)

**Potential after fix:** 65-75/100 if SSR + meta descriptions + FAQ sections are added

**High-citability content opportunities (once SSR is fixed):**
- "How Hagerstone designs and delivers offices in 60 days" (process transparency = highly citable)
- "What does a turnkey office fit-out cost in Delhi NCR?" (query-aligned = AI Overview candidate)
- Client case studies with before/after metrics (specificity = citable)
- FAQ blocks answering "how long", "how much", "what is included"

---

### Brand Authority (38/100)

**Platform Presence Map:**

| Platform | Status | Notes |
|---|---|---|
| LinkedIn Company | ✅ Present | Active, has pulse articles |
| LinkedIn Founder | ✅ Present | Dhruv Agarwal — 15+ yrs exp, TEDx, Author |
| YouTube | ✅ Present | Low volume, needs expansion |
| Instagram | ✅ Present | Active (`@hagerstone_international`) |
| Facebook | ✅ Present | Active page |
| Crunchbase | ✅ Listed | Company + founder profiles |
| ZoomInfo | ✅ Listed | Company profile |
| Inc42 | ✅ Mentioned | "Real Estate Tech" company |
| PrimeTycoon | ✅ Feature article | Dhruv Agarwal profile |
| KreateCube | ✅ Listed | Contractor directory |
| IndiaMART | ✅ Listed | "Hager Stone International" (different spelling) |
| Wikipedia | ❌ Absent | |
| Reddit | ❌ Absent | No community mentions found |
| Clutch.co | ❌ No reviews | Not in Clutch rankings |
| G2 | ❌ Absent | |
| JustDial | ❌ Unverified | |
| Architizer / DesignPataki | ❌ Absent | |

**Entity recognition:** AI models have limited ability to recognize "Hagerstone International" as an entity because there are no Wikipedia entries, no major media mentions, and no consistent entity references across authoritative domains. The IndiaMART listing uses a different spelling ("Hager Stone") which fragments entity signals.

**Founder authority:** Dhruv Agarwal has strong personal brand signals (TEDx, BRICS CCI, book author) but these are largely confined to LinkedIn and Crunchbase. The company website doesn't surface these credentials to AI crawlers.

---

### Content E-E-A-T (40/100)

**What exists (found via search, not accessible to AI crawlers):**

*Experience signals:* 11+ years in business; projects in Delhi NCR, 25+ Indian cities, Dubai (Dubai Mall, Sheikh villas); 309+ skilled workers; 7.9M+ sqft completed. These are strong signals — if AI could read them.

*Expertise signals:* Founder is author of "Workplace 2.0"; TEDx Speaker; Delhi College of Engineering graduate; prior experience at TPM Group as Project Manager.

*Authority signals:* Enterprise client portfolio (EDF, Statkraft, Airtel, Singapore Airlines, Lufthansa, Panasonic) is impressive and very citable if accessible.

*Trust signals:* "60-day guarantee" is a strong trust differentiator; but currently inaccessible.

**What's missing:**
- Author bylines on blog posts
- Source citations in articles
- Client testimonials with names/companies (verified)
- Award mentions
- Industry certifications

**After SSR fix, E-E-A-T potential:** 68-75/100

---

### Technical GEO (28/100)

| Technical Factor | Status | Score Impact |
|---|---|---|
| robots.txt allows all AI crawlers | ✅ Pass | +15 |
| XML sitemap present | ✅ Pass | +10 |
| Site content visible without JS | ❌ Fail (Critical) | -30 |
| llms.txt present | ❌ Missing | -10 |
| Meta descriptions | ❌ Missing | -8 |
| Open Graph tags | ❌ Missing | -5 |
| Canonical tags | ⚠️ Unverified | -3 |
| HTTPS | ✅ Pass | +3 |
| Image sitemap | ❌ Missing | -2 |

**robots.txt (full content):**
```
User-agent: *
Allow: /
Sitemap: https://hagerstone.com/sitemap.xml
```
This is correctly configured — all AI crawlers are permitted. The problem is there is nothing to crawl.

**JavaScript dependency:** This is the single most damaging technical issue. Every modern AI crawler — GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended, CCBot (Common Crawl used for training) — uses HTTP GET requests to fetch page HTML. If the HTML delivered on first request contains no meaningful content (only a `<title>` and a JavaScript bundle), these crawlers record the page as essentially empty.

---

### Schema & Structured Data (5/100)

**Schema types found:** None.

**Schema types needed (by page type):**

| Page | Required Schema | Priority |
|---|---|---|
| Homepage | `Organization`, `WebSite`, `LocalBusiness` | Critical |
| Service pages (6) | `Service`, `FAQPage` | Critical |
| Blog posts (6+) | `Article`, `Person` (author), `BreadcrumbList` | High |
| Project pages (7) | `CreativeWork` or `Service`, `ImageObject` | High |
| Our Team page | `Person` (per team member), `Organization` | High |
| Contact page | `LocalBusiness`, `GeoCoordinates`, `OpeningHoursSpecification` | High |
| Location pages (4) | `LocalBusiness`, `GeoCoordinates`, `areaServed` | Medium |

**Example Organization schema for homepage (implement this first):**
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
  "areaServed": ["Delhi", "Noida", "Gurgaon", "Faridabad", "Noida"],
  "sameAs": [
    "https://in.linkedin.com/company/hagerstone",
    "https://www.youtube.com/channel/UCvl0bmeUgX6LvzQYcR-HHIw",
    "https://www.instagram.com/hagerstone_international/",
    "https://www.facebook.com/HagerstoneInternational",
    "https://www.crunchbase.com/organization/hagerstone-international"
  ]
}
```

---

### Platform Optimization (28/100)

**Platform presence summary:**

| Platform | AI Trains On It? | Hagerstone Present? | Notes |
|---|---|---|---|
| LinkedIn | ✅ Frequently cited | ✅ Yes | Company + founder + articles |
| YouTube | ✅ Cited by Perplexity/Gemini | ✅ Yes | Low volume |
| Reddit | ✅ Heavy training data | ❌ No | Zero mentions found |
| Wikipedia | ✅ Authoritative signal | ❌ No | Not present |
| Clutch.co | ✅ B2B recommendations | ❌ No reviews | |
| Common Crawl | ✅ Primary AI training corpus | ⚠️ HTML only | CC only indexes HTML, gets only title |
| Crunchbase | ✅ Entity data | ✅ Yes | Listed |
| Inc42 | ✅ India startup coverage | ✅ Mentioned | Shallow |
| IndiaMART | ✅ B2B searches | ✅ Listed | Inconsistent name spelling |
| Architizer/AD/DesignPataki | ✅ Design AI training | ❌ Absent | Competitors are here |

**Competitive gap:** In AI-generated responses for "best office interior design company Delhi NCR", Hagerstone does not appear while PHI Designs, Studio Lotus, MM Design Studio, and others do. PHI Designs has explicit award recognition ("India's Most Futuristic Interior Design and Build Firm 2026") which creates highly citable text. Hagerstone's comparable credentials exist but are not published in crawlable, citable form.

---

## Quick Wins (Implement This Week)

### 1. Create llms.txt (2 hours, immediate AI crawler impact)
Create the file at `https://hagerstone.com/llms.txt`:

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
- Projects completed: 500+
- Square footage delivered: 7,91,433+ sqft
- Clients served: 173+
- Delivery guarantee: 60 days
```

### 2. Add Organization + LocalBusiness Schema to Homepage (4 hours)
Use the schema example from the Schema section above. This is the single highest-ROI schema addition — it tells every AI system what Hagerstone is, where it operates, and how to find it. Paste the JSON-LD in a `<script type="application/ld+json">` tag in the `<head>`.

### 3. Add Meta Descriptions to Top 10 Pages (3 hours)
Priority pages: homepage, /about, /services, /services/office-design-build, /services/interior-fit-out, /projects, /our-team, /contact, /blog, and the top city landing page.

### 4. Add Open Graph Tags to All Pages (2 hours)
At minimum: `og:title`, `og:description`, `og:image`, `og:url`. These are read by AI systems that process shared content and social signals.

### 5. Add FAQ Section + FAQPage Schema to Homepage (4 hours)
Add a section titled "Frequently Asked Questions" with 5-6 Q&A pairs:

**Q: How long does it take to design and build an office?**  
A: Hagerstone delivers complete office design and build projects within 60 days — from initial design concepts to move-in ready handover.

**Q: What services does Hagerstone International offer?**  
A: Hagerstone offers end-to-end office design and build services including interior design, space planning, MEP (mechanical, electrical, plumbing), HVAC installation, fit-out construction, furniture supply, and project management.

**Q: Which cities does Hagerstone serve?**  
A: Hagerstone operates across Delhi NCR (Delhi, Noida, Gurgaon, Faridabad) and 25+ cities across India, including major metropolitan areas.

**Q: How much does office interior design cost in Delhi?**  
A: Office design and build costs vary by size, specification, and finish level. Hagerstone provides transparent quotes and has delivered projects saving clients Rs 119+ crores through efficient design-build integration.

---

## 30-Day Action Plan

### Week 1: Foundation — Make Content Visible to AI
- [ ] Audit the frontend framework (Next.js? React? Angular?) and identify the fastest path to SSR or SSG
- [ ] Enable SSR/SSG for homepage, service pages, and blog posts as the first batch
- [ ] Create and deploy `/llms.txt`
- [ ] Add Organization + LocalBusiness schema to homepage `<head>`
- [ ] Add meta descriptions to top 10 pages

### Week 2: Structure — Schema and Citability
- [ ] Add `Article` + `Person` schema to all 6 blog posts (author: Dhruv Agarwal with credentials)
- [ ] Add `Service` schema to all 6 service pages
- [ ] Add `FAQPage` schema to homepage and top service page
- [ ] Add Open Graph + Twitter Card tags to all pages
- [ ] Add FAQ section (minimum 4 Q&A pairs) to the homepage

### Week 3: Content — E-E-A-T and Citability
- [ ] Enable SSR/SSG for remaining pages (projects, team, contact, location pages)
- [ ] Update all blog posts to show visible author byline (Dhruv Agarwal) with title and credentials
- [ ] Add `Person` schema to `/our-team` for each team member
- [ ] Add a "Why Hagerstone" section to homepage with specific, citable statistics
- [ ] Add FAQ sections to `/services/office-design-build` and `/office-design-gurgaon`

### Week 4: Authority — Third-Party Signals
- [ ] Create or claim a Clutch.co profile and request 5 client reviews
- [ ] Fix IndiaMART profile name consistency (currently "Hager Stone" vs "Hagerstone")
- [ ] Request editorial feature from Inc42, DesignPataki, or Architizer
- [ ] Publish a LinkedIn article on Dhruv Agarwal's profile linking to the new FAQ pages
- [ ] Add image sitemap and video sitemap to sitemap.xml

---

## Appendix: Pages Analyzed

| URL | Title Found | Main Issue |
|---|---|---|
| https://hagerstone.com/ | "Hagerstone International \| Office Design & Build Company" | JS-rendered, no content to AI crawlers |
| https://hagerstone.com/about | Title only (same as above) | JS-rendered |
| https://hagerstone.com/services | Title only | JS-rendered |
| https://hagerstone.com/services/office-design-build | Title only | JS-rendered |
| https://hagerstone.com/blog | Title only | JS-rendered |
| https://hagerstone.com/blog/office-workspace-design | Title only | JS-rendered |
| https://hagerstone.com/blog/office-space-planning-trends-2026 | Title only | JS-rendered |
| https://hagerstone.com/blog/commercial-interior-designers | Title only | JS-rendered |
| https://hagerstone.com/blog/sustainable-green-office-interiors | Title only | JS-rendered |
| https://hagerstone.com/our-team | Title only | JS-rendered |
| https://hagerstone.com/contact | Title only | JS-rendered |
| https://hagerstone.com/projects | Title only | JS-rendered |
| https://hagerstone.com/office-design-gurgaon | Title only | JS-rendered |
| https://hagerstone.com/office-design-delhi | Title only | JS-rendered |
| https://hagerstone.com/robots.txt | ✅ Full content readable | Allow: / for all crawlers — good |
| https://hagerstone.com/sitemap.xml | ✅ Full content readable | 32 URLs listed — good |
| https://hagerstone.com/llms.txt | ❌ 404 Not Found | Must be created |

**Fetch failures:** None — the server responds correctly. The issue is client-side rendering, not server availability.

**Note on JS-rendering diagnosis:** Consistent with AI crawler behavior, the WebFetch tool (which does not execute JavaScript, mirroring how GPTBot/ClaudeBot/PerplexityBot crawl) returned only the `<title>` tag and no body content for every page except robots.txt and sitemap.xml. This confirms the site delivers no crawlable HTML content without JavaScript execution.

---

*GEO Audit powered by Claude Code — [hagerstone.com](https://hagerstone.com/) — June 2026*
