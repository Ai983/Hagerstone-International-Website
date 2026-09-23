# Hagerstone website

Marketing site for Hagerstone International (hagerstone.com). Vite 5 + React 18 +
TypeScript + Tailwind/shadcn. **Not Next.js.** Pages are prerendered to static HTML at
build time so Google and AI crawlers see real content. Hosted on Vercel from `main`.

Full project history, decisions and next steps: **`SEO-PROJECT-STATUS.md`**. Read it before
SEO or content work.

## The one thing that keeps going wrong

The browser uses `src/App.tsx`. **Google sees HTML rendered from `src/ServerApp.tsx`** by
`prerender.js`. A route that exists only in `App.tsx` works perfectly in the browser and
ships as a 404 to Google. This happened on 15 Sept (4 blog posts) and 18 Sept (Kokko Town).

`prerender.js` now fails the build if any sitemap route renders a not-found screen. If you
see `rendered a not-found page`, do not work around it: add the missing `<Route>`.

## Adding pages

| Page type | What to do |
|---|---|
| **Project** | Add an entry to `src/data/project.ts`. That's all: prerender and sitemaps read it. |
| **Blog post** | Add an entry to `src/data/blogPosts.ts`, create `src/pages/blog/<slug>.tsx`, then add a `<Route>` in **both** `App.tsx` (lazy) and `ServerApp.tsx` (eager import). |
| **Content page** (glossary, materials, facade, mep, …) | Create one `src/content/<collection>/<slug>.mdx`. No router edits. Frontmatter rules are in `src/content/schema.ts` (strict: unknown keys fail the build; filename must equal `slug`). |
| **Design study** (`/design-studies`) | Follow `docs/DESIGN-STUDIES-INTAKE.md`. One `.mdx` in `src/content/design/`, images via `scripts/design-studies-images.mjs`. **Never name or show the client**; `designStage` stays `concept` unless a reviewer is named. |
| **City** | Add to `src/data/cities.ts` with `published: true` (see status doc §9). |
| **Fixed page** (new top-level page) | Add the route to both `App.tsx` and `ServerApp.tsx`, and its path to `routesToPrerender` in `prerender.js`. |

Any page with a "not found" branch must put `data-not-found` on its root element so the
prerender guard can see it.

Images on a content page go in frontmatter (`heroImage`, `gallery`), never as `<img>` or
markdown in an `.mdx` body — frontmatter is what the build validates for alt text and
size, and what the image sitemap and `ImageObject` schema are generated from.

## Publishing rule — nobody reviews pages

Pages go live in batches without human review. **Only write content that is safe
unreviewed.** Full list: status doc §0.

- ✅ Explanations sourced from published standards (IS, NBC, ECBC, EN, ASTM, named on
  the page), comparisons, public authority data, quantity-only calculators with the
  formula shown, editable assumptions and a disclaimer
- ❌ Hagerstone ₹ rates, structural or safety values (wind, seismic), statutory verdicts
  (fire NOC etc.), "we delivered X" claims, client names or company stats not already on
  the site
- Facade projects from before Akhilesh Kumar Singh joined go under **"Facade leadership
  experience"**, never "Delivered work"

`cost` and `compliance` collections cannot be published without `reviewedBy`. The build
enforces it.

## Verify before pushing

```
node scripts/build-content-index.mjs      # frontmatter validation
node scripts/check-images.mjs             # image budget + declared dimensions
node scripts/check-client-safety.mjs      # client names, rates, unreviewed claims
npx tsc --noEmit -p tsconfig.app.json     # typecheck
npx eslint <changed files>                # NOT `npm run lint` — pre-existing error in Index.tsx
npm run build && npm run build:server && npm run build:prerender
```

Prerender must end with `Prerender complete: N succeeded, 0 failed` and
`Sitemap: N URLs (matches prerendered pages)`. Vercel runs the same three commands, so a
failure here blocks the deploy.

## Gotchas

- **Never edit `.mdx` files with PowerShell `Get-Content`/`Set-Content`.** It corrupts
  UTF-8 (em dashes become `â€"`). Use the editor or the Edit/Write tools.
- The sales phone number lives only in `src/lib/contact.ts`.
- Every lead form goes through `submitLead()` in `src/lib/leads.ts`. Don't write a form
  that fakes success. That bug existed twice (contact form, estimator).
- Teammates push to `main` too: `git pull --rebase` before pushing.
