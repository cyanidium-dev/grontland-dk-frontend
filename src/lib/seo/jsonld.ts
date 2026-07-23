/**
 * JSON-LD builders. Contact facts come from the CMS siteSettings singleton
 * (single source; see lib/sanity/queries.ts).
 */
import { homeCopy } from "@/lib/i18n/copy";
import type { SiteSettings } from "@/lib/sanity/queries";
import { SITE_URL } from "@/lib/seo/meta";

const BASE = SITE_URL;

export const localBusiness = (s: SiteSettings) => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Grønt Land DK",
  url: BASE,
  telephone: s.phoneHref.replace("tel:", ""),
  email: s.email,
  vatID: `DK${s.cvr}`,
  // Denmark as the country; the served area (Copenhagen / Greater
  // Copenhagen) stays locale-aware via siteSettings (client SEO spec).
  address: { "@type": "PostalAddress", addressLocality: "København", addressCountry: "DK" },
  areaServed: s.area,
  openingHours: "Mo-Fr 08:00-17:00",
});

/* Locale-prefixed absolute URL: da unprefixed, en under /en (client spec —
   the EN service schema must point at the /en URL, not the Danish one). */
const localeUrl = (locale: string, path: string) =>
  `${BASE}${locale === "en" ? "/en" : ""}${path === "/" ? "" : path}` || BASE;

export const servicePage = (p: {
  name: string;
  description: string;
  slug: string;
  locale: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: p.name,
  description: p.description,
  url: localeUrl(p.locale, `/ydelser/${p.slug}`),
  areaServed:
    p.locale === "en" ? "Copenhagen and Greater Copenhagen" : "København og Storkøbenhavn",
  provider: { "@type": "HomeAndConstructionBusiness", name: "Grønt Land DK", url: BASE },
});

export const faqPage = (items: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

/** Breadcrumb schema for a top-level nav section (and optionally a detail
    leaf below it) — names come from the localized NAV_MENU, so every page
    gets a consistent Home → Section (→ Detail) trail with one call. */
export const navBreadcrumbs = (
  locale: string,
  path: string,
  leaf?: { name: string; path: string },
) => {
  const nav = homeCopy(locale).NAV_MENU;
  const trail: { name: string; path: string }[] = [{ name: nav[0].label, path: "/" }];
  const section = nav.find((i) => i.href === path);
  if (section) trail.push({ name: section.label, path });
  if (leaf) trail.push(leaf);
  return breadcrumbs(trail, locale);
};

export const breadcrumbs = (
  trail: readonly { name: string; path: string }[],
  locale: string,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: localeUrl(locale, t.path),
  })),
});
