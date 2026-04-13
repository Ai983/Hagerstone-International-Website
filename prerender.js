import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Static top-level routes
const topLevelRoutes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/blog',
  '/contact',
  '/our-team',
  '/ideas',
  '/find-your-style',
  // Location pages (FIX #7)
  '/office-design-gurgaon',
  '/office-design-noida',
  '/office-design-delhi',
  '/office-design-faridabad',
]

// Service sub-pages (matches src/data/servicePages.ts)
const serviceSlugs = [
  'office-design-build',
  'interior-fit-out',
  'mep',
  'hvac',
  'construction',
  'peb',
]

// Blog post routes (matches src/data/blogPosts.ts)
const blogSlugs = [
  'office-workspace-design',
  'commercial-interior-designers',
  'office-space-planning-trends-2026',
  'sustainable-green-office-interiors',
  'office-interiors-noida',
  'office-interiors-delhi',
]

// Project detail routes (matches src/data/project.ts)
const projectSlugs = [
  'theon',
  'bansaltower',
  'revolve',
  'microsave',
  'himalaya',
  'vinfast-showroom',
  'valorium-ventures-office-interior',
]

const routesToPrerender = [
  ...topLevelRoutes,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
  ...projectSlugs.map((s) => `/projects/${s}`),
]

;(async () => {
  for (const route of routesToPrerender) {
    try {
      const { html: appHtml, head } = render(route)

      // If helmet produced a title / description, strip the defaults from the template
      // so the prerendered HTML ends up with exactly one <title> and one meta description.
      let prepared = template
      if (/<title\b/i.test(head || '')) {
        prepared = prepared.replace(
          /<title>[^<]*<\/title>\s*/i,
          ''
        )
      }
      if (/<meta[^>]+name=["']description["']/i.test(head || '')) {
        prepared = prepared.replace(
          /<meta[^>]+name=["']description["'][^>]*>\s*/i,
          ''
        )
      }

      // Inject per-page head tags and app html
      const html = prepared
        .replace('<!--app-head-->', head || '')
        .replace('<!--app-html-->', appHtml)

      // Write to nested directory path/index.html so Netlify serves exact route
      let filePath
      if (route === '/') {
        filePath = 'dist/index.html'
      } else {
        const dir = `dist${route}`
        fs.mkdirSync(toAbsolute(dir), { recursive: true })
        filePath = `${dir}/index.html`
      }
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    } catch (err) {
      console.error(`Failed to prerender ${route}:`, err.message)
    }
  }
})()
