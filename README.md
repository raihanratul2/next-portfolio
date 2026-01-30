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

- Project data lives in app/constants/data.ts
- SEO and metadata live in app/layout.tsx
