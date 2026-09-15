# beauty-spa-landing

Serenity Spa landing page — Next.js (static export) + Tailwind CSS + shadcn/ui + design tokens.

## Stack

- **Next.js** App Router with `output: "export"` (`next build` emits `out/`).
- **Tailwind CSS** wired via PostCSS, consuming design tokens as CSS variables.
- **shadcn/ui** primitives (`Button`) styled with `cva` variants.
- **Design tokens** in `app/globals.css` as three layers: primitive → semantic → component.

## Design system

`design-system/serenity-spa/MASTER.md` holds the design engine output (Soft UI Evolution).
Brand tokens: soft pink `#E8B4B8`, sage `#A8D5BA`, gold `#D4AF37`; Cormorant Garamond
(display) + Montserrat (body).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```
