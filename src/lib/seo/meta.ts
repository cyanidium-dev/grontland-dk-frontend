/* Site-level meta strings, shared by the root layout (defaults) and the home
   page (which must re-state the full Open Graph set because Next's metadata
   merge is shallow — a page-level `openGraph` replaces the layout's). */
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
