# Boughtopia

Brand-awareness site for Boughtopia, a Berlin-based multi-platform commerce studio. Boughtopia
manages seller stores across Amazon, eBay, Etsy, Shopify, and TikTok Shop, and is building a
bookkeeping platform that unifies revenue, fees, and payouts across every marketplace.

This site is currently a single-page marketing site, not the product itself. See
[CLAUDE.md](CLAUDE.md) for project context and [BRAND.md](BRAND.md) for brand guidelines.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

- Page content lives in `src/app/page.tsx`
- Brand colors are defined as Tailwind theme tokens in `src/app/globals.css`
- Logos and marketplace icons are in `public/brand/`
