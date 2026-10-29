# Unearth — a Vizune Designs template

An Astro template based on Vizune Reviews, with a homepage and an about page. There is no CMS, comments or analytics: all content is mock data in the project, so it runs straight after install. Pages are built as static HTML, so it can be hosted on Nekoweb or any static host.

## Getting started

```bash
npm install
npm run dev
```

| Script | Does |
|---|---|
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the build locally |
| `npm run check` | Type-check `.astro` and `.ts` files |

## Editing content

| What | Where |
|---|---|
| Site name, tagline, nav, hero, about teaser, specs panel, footer credit, number of "Coming soon" cards | `src/data/site.ts` |
| Review cards on the homepage (newest 3, then a "Coming soon" card) | `src/data/reviews.ts` |
| About page text (Markdown) | `src/content/about.md` |
| Hero background image | `src/assets/geometric-header-1600.png` |
| Colours and fonts | `src/styles/tokens.css`, `src/styles/global.css` |

Images: set `about.image.src` in `site.ts`, or `thumbnailUrl` on a review, to a URL or a file in `public/` (e.g. `/images/cover.jpg`). Empty values show a placeholder from placehold.co.

Review cards link to `#` by default; give an entry an `href` to point it somewhere.

## Structure

- `src/pages/`: `index.astro` (home), `about.astro`, `404.astro`
- `src/components/`: page sections and cards
- `src/lib/placeholder.ts`: placeholder image sizes per slot
- `astro.config.mjs`: also copies `404.html` to `not_found.html` for Nekoweb
