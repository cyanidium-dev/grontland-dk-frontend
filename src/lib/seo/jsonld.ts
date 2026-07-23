/**
 * JSON-LD builders. Contact facts come from the CMS siteSettings singleton
 * (single source; see lib/sanity/queries.ts).
 */
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

export const servicePage = (p: { name: string; description: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: p.name,
  description: p.description,
  url: `${BASE}/ydelser/${p.slug}`,
  areaServed: "København og Storkøbenhavn",
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

export const breadcrumbs = (trail: readonly { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${BASE}${t.path}`,
  })),
});
