# Boughtopia brand guidelines

## Name

**Boughtopia** — one word, capital B. In the wordmark, "Bought" is set in navy and "opia" in
emerald (see `public/brand/boughtopia-lockup-bag.svg`).

## Colors

| Token | Hex | Tailwind utility | Use |
|---|---|---|---|
| Navy | `#14243D` | `bg-navy` / `text-navy` | Primary text, dark sections, wordmark |
| Navy light | `#1E3554` | `bg-navy-light` | Hover state for navy elements |
| Emerald | `#10B981` | `bg-emerald` / `text-emerald` | Accent, CTAs, success/positive figures |
| Emerald dark | `#0D9668` | `bg-emerald-dark` | Hover state for emerald elements |

Tokens are defined in `src/app/globals.css` via Tailwind v4's `@theme`. Background is white
or `slate-50`; avoid introducing other primary colors.

## Logo

- `public/brand/boughtopia-lockup-bag.svg` — full lockup (icon + wordmark + tagline), use in
  headers/footers.
- `public/brand/boughtopia-icon-bag.svg` / `boughtopia-icon-bag-mono-light.svg` — icon only,
  for favicons, small spaces, or dark backgrounds.
- `public/brand/boughtopia-icon-coin.svg`, `boughtopia-icon-parcel.svg` — supporting icons for
  financial/shipping concepts.

Don't stretch, recolor outside the palette above, or add drop shadows/effects to the logo.

## Marketplace logos

`public/brand/` also has third-party marketplace logos (`amazon-logo.svg`, `e-bay-logo.svg`,
`etsy.svg`, `shopify-logo2.svg`, `tiktok-tab.svg`) used only to indicate platform support in a
neutral trust strip — not to imply partnership or endorsement.

## Voice

Confident, consultative, B2B — talking to sellers/brand owners deciding who manages their
marketplace presence, not consumers. Lead with concrete capability ("manages stores across
five marketplaces"), not hype. Be explicit when talking about the bookkeeping product that it
is upcoming/in development, never implying it's already live.

## Product mockup

`public/brand/Boughtopia-dashboard.png` is a placeholder/mockup of the planned bookkeeping
dashboard (sample data, dated Aug 2026). Use it only under a "coming soon" framing.
