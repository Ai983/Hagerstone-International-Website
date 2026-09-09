import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const {
  render,
  getLocationPrerenderPaths,
  getContentPrerenderPaths,
  buildUrlSitemapXml,
  buildImageSitemapXml,
  buildVideoSitemapXml,
  buildSitemapIndexXml,
} = await import('./dist/server/entry-server.js')

// Static crawlable routes. Programmatic location pages are appended from the
// location matrix (getLocationPrerenderPaths) so this stays a single source.
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
  '/services/facade-glazing',
  '/services/aluminium-doors-windows',
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
  '/blog/commercial-hvac-systems',
  '/blog/office-fit-out-cost-guide-india-2026',
  '/blog/mep-design-consultancy-india',
  '/ideas',
  '/find-your-style',
]

let ok = 0
let failed = 0

;(async () => {
  // Static routes, plus every programmatic path. Location and content pages
  // self-register from their data, so neither needs an entry in the array above.
  const allRoutes = [
    ...routesToPrerender,
    ...getLocationPrerenderPaths(),
    ...getContentPrerenderPaths(),
  ]

  for (const route of allRoutes) {
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

  // Generated sitemaps (image + video portfolio) and the sitemap index. These
  // derive from the same data the app renders, so they never drift.
  const today = new Date().toISOString().slice(0, 10)
  const sitemaps = {
    // Built from the same route list rendered above, so the sitemap cannot list
    // a page that was never generated, or omit one that was.
    'sitemap.xml': buildUrlSitemapXml(allRoutes, today),
    'sitemap-images.xml': buildImageSitemapXml(),
    'sitemap-videos.xml': buildVideoSitemapXml(),
    'sitemap-index.xml': buildSitemapIndexXml(today),
  }
  for (const [file, xml] of Object.entries(sitemaps)) {
    fs.writeFileSync(toAbsolute(`dist/${file}`), xml)
    console.log('✓ generated:', file)
  }

  // Drift guard: every prerendered route must appear in the sitemap and vice
  // versa. Cheap to check, and it catches the class of bug where a page ships
  // but is never submitted to Google.
  const sitemapUrlCount = (sitemaps['sitemap.xml'].match(/<loc>/g) || []).length
  if (sitemapUrlCount !== ok) {
    console.error(
      `\n✗ Sitemap drift: ${sitemapUrlCount} sitemap URLs vs ${ok} prerendered pages`,
    )
    process.exit(1)
  }

  console.log(`\nPrerender complete: ${ok} succeeded, ${failed} failed`)
  console.log(`Sitemap: ${sitemapUrlCount} URLs (matches prerendered pages)`)
  if (failed > 0) process.exit(1)
})()
