# Next Portfolio

Personal portfolio built with Next.js, React, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This project is configured for static export.

### For GitHub Pages URL

```bash
set GITHUB_PAGES=true
npm run deploy
```

### For Custom Domain (raihanratul.com.bd)

```bash
set GITHUB_PAGES=false
npm run deploy
```

Then configure GitHub:
- Repo Settings → Pages → Source: Deploy from branch
- Branch: gh-pages / root
- Custom domain: raihanratul.com.bd (if using the domain)

## Notes

- Header and footer logos follow the selected theme. Favicons include theme-specific SVG, PNG, ICO, and Apple touch versions.
- After editing the two source SVGs in `public/logos/`, run `npm run generate:brand` to rebuild compact logo marks and favicons.
- Pages: `/`, `/about`, `/clients`, `/projects`, `/previous-works`, `/experience`, and `/contact`.
- Home previews projects, previous work, and experience. The company list appears only on `/clients`.
- Add client companies and their support details to `clients` in `app/constants/data.ts`. Use `projectIds` to link a company to an existing project, or an empty array for support-only work.
- Project data lives in app/constants/data.ts
- SEO and metadata live in app/layout.tsx
