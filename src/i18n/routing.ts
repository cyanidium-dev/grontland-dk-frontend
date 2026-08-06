import { defineRouting } from "next-intl/routing";

/* DA-only (client 2026-08-05). Keep [locale] + "as-needed" so Danish URLs stay
   unprefixed; /en is 301'd in next.config. Revert this commit to restore EN. */
export const routing = defineRouting({
  locales: ["da"],
  defaultLocale: "da",
  localePrefix: "as-needed",
  localeDetection: false,
});
