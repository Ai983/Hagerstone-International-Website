import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// All crawlable routes — must match sitemap.xml exactly.
// Excludes: city landing pages and office-interiors-noida/delhi (no components).
const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/services/office-design-build',
  '/services/interior-fit-out',
  '/services/mep',
  '/services/hvac',
  '/services/construction',
  '/services/peb',
  '/projects',
  '/projects/theon',
  '/projects/bansaltower',
  '/projects/revolve',
  '/projects/microsave',
  '/projects/himalaya',
  '/projects/vinfast-showroom',
  '/projects/valorium-ventures-office-interior',
  '/our-team',
  '/contact',
  '/blog',
  '/blog/office-workspace-design',
  '/blog/commercial-interior-designers',
  '/blog/office-space-planning-trends-2026',
  '/blog/sustainable-green-office-interiors',
  '/blog/office-fit-out-cost-guide-india-2026',
  '/ideas',
  '/find-your-style',
]

let ok = 0
let failed = 0

;(async () => {
  for (const route of routesToPrerender) {
    try {
      const { html: appHtml, headTags } = render(route)

      // Inject per-page <head> tags (title, meta, canonical) from react-helmet-async
      let html = template
      if (headTags) {
        html = html.replace('<!--app-head-->', headTags)
      } else {
        html = html.replace('<!--app-head-->', '')
      }

      // Inject rendered body
      html = html.replace('<!--app-html-->', appHtml)

      const filePath = `dist${route === '/' ? '/index' : route}.html`
      const dir = path.dirname(toAbsolute(filePath))
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('✓ pre-rendered:', filePath)
      ok++
    } catch (err) {
      console.error('✗ failed:', route, err.message)
      failed++
    }
  }

  console.log(`\nPrerender complete: ${ok} succeeded, ${failed} failed`)
  if (failed > 0) process.exit(1)
})()
