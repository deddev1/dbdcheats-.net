# Dead by Daylight Cheats — Marketing Site

Static Astro 7 site for [dbdcheat.net](https://dbdcheat.net). Primary SEO focus: **Dead by Daylight Cheats** / **DBD Cheats** (supporting: Dead by Daylight cheats, dbd esp, dbd aimbot).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **dbdcheat**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Custom domain **dbdcheat.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL in `src/data/site.ts` (`siteConfig.checkoutUrl`)
- Canonical site URL: `https://dbdcheat.net`

## License

Private — for dbdcheat.net deployment only.
