// Tells IndexNow engines (Bing, Yandex, Seznam, Naver; Bing shares with
// others) which URLs changed in this deploy, so they recrawl in hours rather
// than whenever they next read the sitemap. Google does not use IndexNow.
//
// Runs as the last step of the Vercel build (see vercel.json buildCommand),
// on production builds only. It submits only what changed: the new
// dist/sitemap.xml is compared with the sitemap currently live, and a URL is
// sent if it is new, if its <lastmod> moved, or if it has been removed (so
// engines see the 404 or redirect). Resubmitting all 300+ unchanged URLs on
// every deploy is what IndexNow asks sites not to do.
//
// This can never fail the build. Any problem is logged and the script exits 0:
// a missed ping costs a slower recrawl, a failed deploy costs the site.
//
// The key file lives at public/<KEY>.txt and must contain exactly the key.

import fs from "node:fs";

const KEY = "5e8e69aeb33ef99d134f1696591f3998";
const HOST = "hagerstone.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const log = (msg) => console.log(`[indexnow] ${msg}`);

// url -> lastmod ("" where the sitemap carries none)
const parseSitemap = (xml) =>
  new Map(
    [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => [
      m[1].match(/<loc>(.*?)<\/loc>/)?.[1] ?? "",
      m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? "",
    ]),
  );

// `node scripts/indexnow.mjs --dry-run` shows what would be sent, from any machine.
const DRY_RUN = process.argv.includes("--dry-run");

async function main() {
  if (!DRY_RUN && process.env.VERCEL_ENV !== "production") {
    log(`skipped: not a production build (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"})`);
    return;
  }

  const next = parseSitemap(fs.readFileSync("dist/sitemap.xml", "utf8"));

  let live;
  try {
    const res = await fetch(`https://${HOST}/sitemap.xml`, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    live = parseSitemap(await res.text());
  } catch (err) {
    // Without the live sitemap there is no way to tell what changed, and
    // submitting everything is worse than submitting nothing.
    log(`skipped: could not read the live sitemap (${err.message})`);
    return;
  }
  if (live.size === 0) {
    log("skipped: live sitemap had no URLs");
    return;
  }

  const changed = [...next].filter(([url, lastmod]) => !live.has(url) || live.get(url) !== lastmod);
  const removed = [...live.keys()].filter((url) => !next.has(url));
  const urlList = [...changed.map(([url]) => url), ...removed];

  if (urlList.length === 0) {
    log("nothing changed since the live sitemap");
    return;
  }

  if (DRY_RUN) {
    log(`dry run: would submit ${changed.length} new/changed and ${removed.length} removed URL(s)`);
    urlList.slice(0, 25).forEach((url) => log(`  ${url}`));
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urlList.slice(0, 10_000),
    }),
    signal: AbortSignal.timeout(15_000),
  });
  // 200 and 202 both mean accepted; 202 is normal while the key is verified.
  log(
    `submitted ${urlList.length} URL(s) (${changed.length} new/changed, ${removed.length} removed): HTTP ${res.status}`,
  );
}

main().catch((err) => log(`failed, build continues: ${err.message}`));
