# Boughtopia

Brand-awareness marketing site for **Boughtopia** (formerly KaufNest), a Berlin-based
multi-platform commerce studio. Boughtopia is two things at once:

1. A hands-on marketplace management service (Amazon, eBay, Etsy, Shopify, TikTok Shop) —
   the existing, real business.
2. A bookkeeping/financial dashboard platform for multi-platform sellers — **in development,
   not yet live**. `public/brand/Boughtopia-dashboard.png` is a mockup, not a real screenshot.
   Do not present it or its numbers as a shipped product or real metrics.

This repo is currently **just the marketing site**, not the product. Don't add e-commerce,
auth, checkout, or dashboard functionality unless explicitly asked — right now the goal is
brand awareness and lead capture (email/phone), not a working platform.

See [BRAND.md](BRAND.md) for colors, logos, and voice. See [AGENTS.md](AGENTS.md) for the
same guidance in tool-agnostic form.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- Single page: `src/app/page.tsx`, layout/metadata in `src/app/layout.tsx`
- Tailwind theme tokens (brand colors) defined via `@theme` in `src/app/globals.css`
- Deployed to Netlify (`netlify.toml`, `.github/workflows/deploy.yml`)

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # eslint
```

## Conventions

- Keep real business claims (service track record) separate from product-in-development
  claims — never invent metrics, testimonials, or reviews for the bookkeeping product since
  it doesn't exist yet.
- Contact info (email/phone/address) in the footer is the real point of contact — don't
  change it without being asked.
- Marketplace logos in `public/brand/` (Amazon, eBay, Etsy, Shopify, TikTok) are third-party
  trademarks used to indicate platform support — keep them as simple logo marks, not
  implying endorsement or partnership.
