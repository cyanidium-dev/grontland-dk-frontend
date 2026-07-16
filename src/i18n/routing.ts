import { defineRouting } from "next-intl/routing";

/* da/en per docs/i18n-options.md (Option A): "as-needed" keeps every Danish
   URL exactly as before (no prefix, no redirects); English lives at /en/…
   Danish slugs are shared by both locales. /en static generation is GATED
   in app/[locale]/layout.tsx until the English content is complete. */
export const routing = defineRouting({
  locales: ["da", "en"],
  defaultLocale: "da",
  localePrefix: "as-needed",
  localeDetection: false,
});
