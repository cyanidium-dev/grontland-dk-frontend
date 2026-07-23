/* Site-level meta strings, shared by the root layout (defaults) and the home
   page (which must re-state the full Open Graph set because Next's metadata
   merge is shallow — a page-level `openGraph` replaces the layout's). */

/** Public origin used for canonical, hreflang, OG, sitemap and JSON-LD URLs.
    Override via NEXT_PUBLIC_SITE_URL (no trailing slash) when the domain
    changes — it's inlined at build time, so a redeploy applies it; no code
    edits needed. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://grontland.dk").replace(
  /\/$/,
  "",
);
export const SITE_META = {
  da: {
    title: "Grønt Land DK — Renovering og byggearbejde i København",
    description:
      "Grønt Land DK hjælper private boligejere og entreprenører med renovering, facadearbejde, belægning, tømrerarbejde, murerarbejde, malerarbejde og havearbejde i København og Storkøbenhavn.",
  },
  en: {
    title: "Grønt Land DK — Renovation and construction in Copenhagen",
    description:
      "Renovation and construction in Copenhagen for homeowners and contractors. Paving, masonry, carpentry, painting, façades and garden work.",
  },
} as const;

export const OG_IMAGE = { url: "/og-home.jpg", width: 1200, height: 630 } as const;

/** Self-canonical + region-qualified hreflang pair for a route (client SEO
    spec): da is unprefixed and doubles as x-default, en lives under /en.
    `path` is the locale-less route path ("" for home, "/ydelser/x", …).
    Matches the sitemap's alternates exactly — mixed codes (da vs da-DK)
    count as conflicting hreflang signals and get dropped. */
export const localeAlternates = (locale: string, path: string) => {
  const da = path || "/";
  const en = `/en${path}`;
  return {
    canonical: locale === "en" ? en : da,
    languages: { "da-DK": da, "en-DK": en, "x-default": da },
  };
};
