# Joel Perez — Developer Portfolio

Personal portfolio site built with **Astro 5 + Tailwind CSS 4**, bilingual (English / Spanish) via Astro's native i18n routing. Fully static, deployed on Vercel.

- English: `/` (default)
- Spanish: `/es/`
- Language switcher in the header; each language is a real static route with `hreflang` tags for SEO.

## Local setup (Windows)

```bash
npm install
npm run dev      # http://localhost:4321  (Spanish at /es/)
npm run build    # static output in dist/
npm run preview  # preview the production build
```

Requires Node.js 18.17+ (20+ recommended).

## Adding a new project

Projects live as Markdown files in `src/content/projects/` — one file per project, **both languages together**. Create a new `.md`, no component changes needed:

```md
---
title: "DeskHub"
status: "in-development"        # "shipped" | "in-development"
featured: false                  # true = large spec-sheet card, false = compact grid card
order: 3                         # lower number = shown first
stack: [".NET 8", "PostgreSQL"]
github: "https://github.com/JoelJPerez/deskhub"
demo: "https://..."              # optional
en:
  tagline: "Multi-tenant helpdesk SaaS."
  challenge: "..."
  solution: "..."
  highlights:
    - "..."
es:
  tagline: "SaaS de mesa de ayuda multi-tenant."
  challenge: "..."
  solution: "..."
  highlights:
    - "..."
---
```

The schema is validated at build time (`src/content.config.ts`) — a missing translation or a typo in `status` fails the build instead of silently rendering wrong.

## Translating UI text

All interface strings (nav, section titles, buttons, labels) live in one dictionary: `src/i18n/ui.ts`. Edit or add keys there for both languages.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In [vercel.com](https://vercel.com), **Add New → Project → Import** the repo.
3. Vercel auto-detects Astro. Accept defaults and deploy.
4. Every push to `main` redeploys automatically.

Then update `site` in `astro.config.mjs` with the final URL (used for canonical/OG/hreflang tags).

## Project screenshots

Each project card shows an image from `public/projects/<slug>.png`. The current images are **branded placeholders**. To replace one with a real screenshot:

1. Capture the app at roughly **1200×750** (16:10) — a full-window capture works fine.
2. Save it as `public/projects/orderflow.png` (same filename, overwrite).
3. Done — no code changes needed.

Placeholders were generated with `scripts/generate-images.mjs` (also produced `public/og-image.png`). To regenerate: `npm i sharp --no-save && node scripts/generate-images.mjs`.

## TODO before sharing the link

- [x] Replace the placeholder GitHub links in `src/content/projects/*.md` with the real repo URLs.
- [ ] Replace placeholder images in `public/projects/` with real screenshots (see above).
- [ ] Add an English version of the CV at `public/cv/Joel_Perez_CV.pdf` (currently the Spanish ATS version serves both languages).
- [ ] Optional: replace the generated `public/og-image.png` with a custom one (keep 1200×630).
- [ ] Optional: buy a custom domain and connect it in Vercel.

## Structure

```
src/
├── content/projects/         ← one .md per project, en + es content together
├── content.config.ts         ← typed bilingual schema
├── i18n/ui.ts                ← UI string dictionary (en/es) + helpers
├── layouts/BaseLayout.astro  ← lang attr, canonical, hreflang, OG tags
├── components/
│   ├── PortfolioPage.astro   ← full page assembly, receives lang
│   └── Header, Hero, FeaturedProject, ProjectCard, Skills, About, Contact
├── pages/
│   ├── index.astro           ← English route (/)
│   ├── es/index.astro        ← Spanish route (/es/)
│   └── 404.astro             ← not-found page
├── styles/global.css         ← design tokens (Tailwind v4 @theme)
scripts/generate-images.mjs   ← regenerates placeholder + OG images
public/
├── projects/                 ← project screenshots (replace placeholders here)
├── og-image.png              ← link preview image (LinkedIn/social)
├── cv/Joel_Perez_CV.pdf
└── robots.txt                ← points crawlers to the sitemap
```

## SEO included

- Sitemap generated at build time (`@astrojs/sitemap`) + `robots.txt`
- `hreflang` alternates and canonical URLs per language
- Open Graph + Twitter card tags with generated OG image
- JSON-LD structured data (Person schema)
