# Serenity Spa — landing page

Static marketing landing page for Serenity Spa, built with Next.js (App Router,
`output: 'export'`), TypeScript, Tailwind CSS v4 and semantic design tokens.
Deploy target: Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / verify

```bash
npm run typecheck
npm run lint
npm run build    # static output in ./out
```

## Structure

- `app/layout.tsx` — metadata, fonts (Lora + Raleway), skip link.
- `app/page.tsx` — Hero + CTA, Services, Why us, Booking/contact sections.
- `components/` — header, footer, button, signature botanical SVG.
- `app/globals.css` — semantic tokens + motion (reduced-motion aware).
- `design-system/serenity-spa/MASTER.md` — persisted design system.
