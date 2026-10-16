# Ahrefs audit, 16 Oct 2026: findings and fix plan

Source: Ahrefs Webmaster Tools (free plan) Site Audit crawl of `https://hagerstone.com/`
on 16 Oct 2026, plus Site Explorer keywords and the Web Analytics export (last 30 days).
The free plan has no API, so all data came from manual CSV/PDF exports.

Ahrefs traffic, volume and position figures are **Ahrefs estimates**, not measured data.
Check anything important against Google Search Console before acting on it.

---

## 1. Headline numbers

| Metric | Value | Note |
|---|---|---|
| Health Score | **99 / 100** | 8 URLs with errors out of 793 |
| Internal pages crawled | 484 | Matches the size of the site |
| Errors / warnings / notices | 8 / 310 / 603 | Most collapse into a few root causes (below) |
| Domain Rating | 0 | 320 referring domains, but they carry no authority (likely low-quality links; unverified) |
| Organic keywords (Ahrefs) | 14 | 4 at position 1 |
| Visitors, last 30 days (Web Analytics) | ~1.4K | Measured by the analytics script, not an estimate |

**Crawl setup note:** the project was frozen until ownership was verified, and the first
crawl stopped at 2 pages because `Max number of internal pages` was set to `1`. It is now
`5000` with JavaScript execution on. Keep those settings.

---

## 2. Findings by root cause

Each row is one fix, however many pages it touches.

### A. Fix in code: one place fixes many pages

| # | Issue (Ahrefs count) | Root cause | File | Fix |
|---|---|---|---|---|
| A1 | **Page has links to broken page (6)** + External 4XX (1 of 7) | CEA regulations link returns 404: `https://cea.nic.in/regulations/?lang=en` | `src/data/standards.ts:75` | Replace with the current CEA regulations URL (**needs the new address**). |
| A2 | **Page has links to redirect: 176 pages** | NBC link `https://www.bis.gov.in/standards/national-building-code/` 302-redirects to `…?lang=hi` (Hindi) | `src/data/standards.ts:35` | Link `…/national-building-code/?lang=en` (**confirm in a browser that it serves English with no redirect**). |
| A3 | Page has links to redirect: 7 pages | `https://www.bis.gov.in/` redirects to `?lang=hi` | 7 hard-coded blog pages in `src/pages/blog/` (peb-pre-engineered-buildings-guide-india, commercial-interior-designers, office-interior-fit-out-execution-guide, mep-design-consultancy-india, office-space-planning-trends-2026, office-fit-out-cost-guide-india-2026, facade-glazing-guide-india) | Same `?lang=en` change. |
| A4 | **Meta description too long: 39 city pages** | One template sentence, 170-186 chars | `src/pages/CityHub.tsx:97` | Shorten the template to ≤155 chars. |
| A5 | Meta description too long: 10 project pages | Suffix `Delivered by Hagerstone International between 2019 and 2021.` appended to every 2019-21 summary | `src/data/projectsWorksDone2019.ts:1126` | Drop the suffix, or truncate the combined string to ≤155 chars at a word boundary. |
| A6 | **Structured data schema.org validation error (56, all `/projects/*`)** | Our own JSON-LD validates clean: validator.schema.org shows **CreativeWork 0 errors** on `/projects/theon`. Most likely source: the **SearchAtlas OTTO script** (`index.html:32-33`) injecting markup at runtime, which Ahrefs sees because it executes JavaScript. **Unconfirmed.** | `index.html:32-33` | Confirm by re-crawling with JS off. Then remove the script (already recommended in `docs/SEO-AEO-GEO-PLAN.md`, decision #2 for Yash). |

### B. Fix in code: page by page

| # | Issue (count) | Detail | Fix |
|---|---|---|---|
| B1 | **Image file size too large (76)** | **74 of 76 are loaded from Supabase storage** (`cuycosjchirgjmfczcle.supabase.co/storage/.../Images/...`), raw camera files up to **16.6 MB**. Worst: MicroSave, Himalaya and Revolve project galleries (8-16 MB each), ~25 team photos on `/our-team` (2-5 MB), blog cover images. 2 are local (`/projects/theon/CONFERENCEROOM/2.jpeg`, `7.jpeg`, ~1.3-1.6 MB). 19 source files reference Supabase storage (`src/data/project.ts`, `src/data/teamMembers.ts`, `src/data/blogPosts.ts`, 15 blog pages, `ProjectsListHero.tsx`). | Download, compress to WebP at display size, store in `public/`, update references, declare dimensions; pass `scripts/check-images.mjs`. Overlaps SEO plan steps 1a and 3b. Biggest page-speed win available. |
| B2 | Meta description too long: 26 other pages | glossary, compare, guides, blog, `/industries`, `/estates`, `/services/facade-glazing`; each 161-169 chars (1-14 over) | Trim each in its own frontmatter or page. Low impact (Google truncates the last word or two). |
| B3 | Page has only one dofollow incoming internal link (15) | 8 `/our-designs/*`, 2 `/materials/*`, 2 `/estates/*`, 1 glossary (static-regain-method), 2 services pages | Add each to related-links blocks on relevant hubs and sibling pages. |
| B4 | Page and SERP titles do not match (9) | Google drops the ` \| Hagerstone` suffix (or rewrites the homepage to `Hagerstone International: …`). Mostly harmless. | Optional: review the 9 titles; no action required. |

### C. Outside the code (needs a person)

| # | Finding | Why it matters | Action / owner |
|---|---|---|---|
| C1 | **Live clone at `hagerstone-website.lovable.app`** (13 visitors / 30 days in "Cloned pages") | Duplicate copy of the site that Google can index and treat as competing duplicate content | Unpublish the old Lovable project, or block it from indexing. **Owner: whoever holds the Lovable account.** |
| C2 | **SearchAtlas OTTO script** on every page | Third-party script that rewrites pages at runtime; likely cause of A6; already flagged for removal | **Decision: Yash.** Does anyone use SearchAtlas? If not, remove. |
| C3 | 6 external links return 403 to the crawler: ASHRAE ×2 (`/technical-resources/bookstore/standards-62-1-62-2`, `/technical-resources/standards-and-guidelines`), ASTM ×2 (`/`, `/products-services/standards-and-publications.html`), `usgbc.org/leed`, `aao.org/eye-health/tips-prevention/computer-usage` | 403 usually means the site blocks bots, not that the page is gone | Open each in a browser. Keep those that load; replace any that don't. |
| C4 | Old URLs still ranking: `/blog/office-interiors-noida` (#10, "office interiors in noida"), `/projects/bansaltower` (#6, "bansal tower") | Both already 301-redirect in `vercel.json`; Google has not caught up | None. Monitor; should resolve by itself. |

### D. No action: expected behaviour or false positives

| Issue (count) | Why it is fine |
|---|---|
| Changed pages not submitted to IndexNow (471) | `scripts/indexnow.mjs` already pings IndexNow after every production build. Do **not** generate an IndexNow key in Ahrefs (it would not match the hosted key file). |
| External 3XX redirect: `wa.me/...` (~84) | WhatsApp click-to-chat always 302s to `api.whatsapp.com`. Normal. |
| Page in multiple sitemaps (49) | Pages listed in `sitemap.xml` and in the image/video sitemap. Correct by design. |
| 3XX redirect / HTTP→HTTPS (1) | `http://hagerstone.com/` → `https://` (308). Correct. |
| Noindex page became indexable (1) / Pages added to sitemaps (1) | Homepage was blocked (403) in the 21 Apr crawl and is now correctly indexable. Good news. |
| Blocked by robots.txt (1,075 links) | Our `robots.txt` blocks nothing, so these are other sites' robots rules on outgoing links. Unverified in detail; low priority. |
| Possible 404 (Web Analytics) | Empty: visitors are not hitting broken pages. |

---

## 3. Keyword and traffic picture (context for the growth plan)

**Organic keywords (Ahrefs estimates, 16 Oct):**

| Position | Keyword | Volume/mo | URL |
|---|---|---|---|
| 1 | low e glass | 400 | /glossary/low-e-glass |
| 1 | fit out company | 20 | /services/interior-fit-out |
| 1 | workspace design / work space design | 150 / 30 | /blog/office-workspace-design |
| 1 | hagerstone international pvt ltd | 10 | / |
| 5 | commercial fit out companies | 30 | /services/interior-fit-out |
| 7 | office workspace design | 30 | /blog/office-workspace-design |
| 8 | what is ht and lt in electrical | 150 | /glossary/ht-vs-lt-panel |
| 10 | busbar trunking system | 300 | /glossary/busbar-trunking |
| 10 | office interiors in noida | 200 | /blog/office-interiors-noida (redirects) |
| 11 | office refurbishment companies | 30 | /projects |

**Quick-win candidates:** positions 5-11 with real volume: busbar trunking (300), HT vs LT (150),
office interiors in Noida (200, via `/locations/noida`).

**Web Analytics (last 30 days):**
- Channels: Direct 738 (90% bounce, likely partly bots), Search 566 (Google 509, Bing 52),
  Social 40, **AI search 31 (ChatGPT 28, Perplexity 2)**, Referral 24.
- Countries: India 708, Singapore 277, US 104, China 72. The Singapore and China volume is
  probably mostly bots or data centres (unverified).
- Top entry pages: `/` (583), `/projects/kokko-town` (68), `/projects` (45), `/our-team`,
  `/blog/office-workspace-design`, `/glossary/sanctioned-load` (19 visitors, ~16 min on page).
- Desktop 982, mobile 407.

---

## 4. Fix plan, in order

Each batch is one branch or PR. Run the full "Verify before pushing" list from `CLAUDE.md`
before every push. Do **not** bump `updatedOn` for link, description or image-only changes:
none of them is a substantive content rewrite.

| Batch | Contents | Blocked on | Effort |
|---|---|---|---|
| **1. Links** | A1 (CEA), A2 + A3 (BIS `?lang=en`), C3 replacements if any fail | New CEA URL; browser check of BIS `?lang=en` and the 6 403 links | Small |
| **2. Meta descriptions** | A4 (city template), A5 (project suffix), B2 (26 pages) | Nothing | Small |
| **3. Third-party script** | C2 / A6: remove SearchAtlas OTTO, re-crawl to confirm the 56 schema errors clear | Yash's decision | Small |
| **4. Images** | B1: move 74 Supabase images into `public/` as compressed WebP; fix the 2 local Theon JPEGs | Nothing (needs download access to Supabase storage) | Medium-large |
| **5. Internal links** | B3: link the 15 weakly linked pages from hubs and siblings | Nothing | Small-medium |
| **6. Off-site** | C1: unpublish the Lovable clone | Lovable account owner | Small |
| **7. Re-crawl** | New Ahrefs Site Audit crawl; expect the batch 1-5 issues to drop out | Batches 1-5 deployed | n/a |

## 5. Still needed from the team

1. Current CEA regulations page URL (for A1).
2. Browser check that `https://www.bis.gov.in/standards/national-building-code/?lang=en` serves English.
3. Browser check of the 6 links in C3.
4. Lovable account owner for C1.
5. Yash's decision on SearchAtlas (C2).
6. Optional, for the growth plan: Site Explorer **Referring domains** and **Broken backlinks**
   exports, and GSC Insights once Search Console is connected in Ahrefs.
