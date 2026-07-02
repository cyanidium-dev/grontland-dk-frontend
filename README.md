# grontland-dk-frontend

Frontend for the Grontland project.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · HeroUI v3 · Sanity (via `next-sanity`) · Zod + React Hook Form (`@hookform/resolvers`).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Sanity project id once the CMS exists
npm run dev
```

## Structure

```
public/          static assets by domain: fonts/, svg/, images/
src/
  app/           App Router entries (page.tsx stays thin)
  constants/     constants, separated by domain
  hooks/         React hooks
  layouts/       layout components (keep page.tsx clean)
  lib/           3rd-party integrations (sanity/, i18n if needed, ...)
  sections/      page sections (tsx) and their related components
  server/        controllers/services for API-route business logic
  types/         TypeScript types, separated by domain
  util/          utility functions and helpers
```

## Notes

- HeroUI v3 needs no provider wrapper; its styles are pulled in via `@import "@heroui/react/styles"` in `src/app/globals.css`.
- The Sanity client lives in `src/lib/sanity/` and reads `NEXT_PUBLIC_SANITY_*` env vars — harmless until the CMS project is created.
