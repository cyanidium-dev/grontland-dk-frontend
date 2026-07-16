/**
 * Project cases — listing + detail pages.
 * `category` is audience (private | b2b) for listing filters.
 * `serviceLabel` is the primary trade chip on cards.
 * `services` are service-type tags shown on cards.
 * Copy aligned with Preview/docs/chat-export-texts.txt.
 */

export type ProjectCategory = "private" | "b2b";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  kind: "process" | "result" | "before" | "after";
};

export type ProjectService = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  objectType: string;
  category: ProjectCategory;
  serviceLabel: string;
  serviceHref: string;
  services: readonly ProjectService[];
  cardDesc: string;
  cardImage: string;
  cardImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  seoDescription: string;
  intro: string;
  task: string;
  work: readonly string[];
  focus: readonly string[];
  result: string;
  facts?: readonly { label: string; value: string }[];
  gallery: readonly ProjectGalleryItem[];
  relatedSlugs: readonly string[];
};

export type ProjectFilterId = "all" | ProjectCategory;

export const PROJECT_CATEGORY_LABEL: Record<ProjectCategory, string> = {
  private: "Privatkunde",
  b2b: "Entreprenør",
};

export const PROJECTS_LIST = {
  h2: "Udvalgte projekter",
  listingH1: "Projekter",
  sub: "Se eksempler på renovering, belægning, facade, havearbejde og andre opgaver udført for private og erhverv.",
  cta: { label: "Se projekter", href: "/projekter" },
  linkLabel: "Se projekt",
  filters: [
    { id: "all" as const, label: "Alle" },
    { id: "private" as const, label: "Privat" },
    { id: "b2b" as const, label: "B2B" },
  ],
  emptyFilter: "Ingen projekter i denne kategori endnu.",
  ctaBand: {
    h2: "Diskuter dit projekt",
    sub: "Fortæl kort om opgaven — så vender vi tilbage med næste skridt, uanset om du er privat kunde eller entreprenør.",
    button: "Få et tilbud",
    image: "/images/cases/quote-cta-band.png",
    imageAlt: "Nybelagte betontrin foran bolig med hvid balustrade",
  },
} as const;

// Project data lives in the CMS (project documents); fetch via
// lib/sanity/queries (getProjects / getProjectBySlug). This file keeps the
// Project type contract and the listing UI enums only.
