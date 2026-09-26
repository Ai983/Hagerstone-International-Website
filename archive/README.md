# archive/

Assets for content that has been taken off the website but kept for later.

Nothing in this folder is deployed. Vite only copies `public/` into the build, so files
here are stored in the repo without being served at any URL.

## Contents

| Folder | Belongs to | Taken down | Size |
|---|---|---|---|
| `projects/Bansal-Tower/` | `bansaltower` in `src/data/project.ts` | 26 Sept 2026 | 137 MB |

## Putting a project back on the site

1. **Convert the images first.** The Bansal Tower files are raw Enscape renders — 3840×2160
   PNGs at 8–11 MB each, which made that page 76 MB. Run them through
   `scripts/our-designs-images.mjs` to produce 1600 px and 800 px WebP files, and place
   those under `public/projects/<name>/`. Do not move the PNGs back as they are.
2. Update the image paths in the project's entry in `src/data/project.ts`.
3. Remove `published: false` from that entry.
4. Remove the project's 301 redirect from `vercel.json`.
5. If you want it listed again on content pages, re-add its table row in
   `src/content/industries/corporate-offices.mdx` and
   `src/content/interiors/turnkey-office-fit-out.mdx`.

City pages restore it automatically — `CityHub` shows a city's linked projects only when
the project is published, so the Gurugram entry in `src/data/cities.ts` was left in place.
