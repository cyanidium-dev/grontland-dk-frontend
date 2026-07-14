/**
 * JSON-LD builders. Facts (CVR, phone, mail, hours) verified against the
 * kontakt page constants and the client's material — do not edit without a
 * confirmed source.
 */

const BASE = "https://grontland.dk";

export const localBusiness = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Grønt Land DK",
  url: BASE,
  telephone: "+4591700103",
  email: "grontlanddk@gmail.com",
  vatID: "DK45514374",
  areaServed: "København og Storkøbenhavn",
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
