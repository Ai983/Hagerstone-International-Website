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
  getProjectPrerenderPaths,
  getBlogPrerenderPaths,
  buildUrlSitemapXml,
  buildImageSitemapXml,
  buildVideoSitemapXml,
  buildSitemapIndexXml,
  buildLlmsTxt,
} = await import('./dist/server/entry-server.js')

// Fixed pages only. Projects, blog posts, locations and MDX content are
// appended from their data files below, so a new one needs no entry here.
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
  '/our-team',
  '/contact',
  '/blog',
  '/ideas',
  '/find-your-style',
]

let ok = 0
let failed = 0

;(async () => {
  // Static routes, plus every programmatic path, each derived from its data.
  const allRoutes = [
    ...routesToPrerender,
    ...getProjectPrerenderPaths(),
    ...getBlogPrerenderPaths(),
    ...getLocationPrerenderPaths(),
    ...getContentPrerenderPaths(),
  ]

  const duplicates = allRoutes.filter((r, i) => allRoutes.indexOf(r) !== i)
  if (duplicates.length > 0) {
    console.error('✗ duplicate routes:', [...new Set(duplicates)].join(', '))
    process.exit(1)
  }

  for (const route of allRoutes) {
    try {
      const { html: appHtml, headTags } = render(route)

      // A route that renders a not-found screen would ship to Google as a
      // soft 404 while looking fine in the browser, because App.tsx knows the
      // route and ServerApp.tsx does not. Refuse to write it.
      if (appHtml.includes('data-not-found')) {
        throw new Error(
          'rendered a not-found page — add its <Route> to src/ServerApp.tsx ' +
            '(and App.tsx), or remove it from its data file',
        )
      }

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

  if (failed > 0) {
    console.error(`\n✗ Prerender failed: ${failed} route(s) above did not render`)
    process.exit(1)
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

  // llms.txt, from the same route list. It replaces a hand-maintained file that
  // listed 13 of 235 pages; public/llms.txt is deleted so publicDir cannot
  // shadow this one, exactly as with the old public/sitemap.xml.
  fs.writeFileSync(toAbsolute('dist/llms.txt'), buildLlmsTxt(allRoutes))
  console.log('✓ generated: llms.txt')

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
})()
