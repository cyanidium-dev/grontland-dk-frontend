/**
 * Project cases — listing + detail pages.
 * `category` is audience (private | b2b) for future filters.
 * `serviceLabel` is the trade chip shown on cards (formerly home `category`).
 */

export type ProjectCategory = "private" | "b2b";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  kind: "process" | "result" | "before" | "after";
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  serviceLabel: string;
  serviceHref: string;
  cardDesc: string;
  cardImage: string;
  cardImageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  task: string;
  work: readonly string[];
  focus: readonly string[];
  result: string;
  facts?: readonly { label: string; value: string }[];
  gallery: readonly ProjectGalleryItem[];
  relatedSlugs: readonly string[];
};

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
} as const;

export const PROJECTS: readonly Project[] = [
  {
    slug: "terrasse-og-haveomraade",
    title: "Terrasse og haveområde",
    location: "Gentofte",
    category: "private",
    serviceLabel: "Havearbejde / terrasse",
    serviceHref: "/ydelser/havearbejde",
    cardDesc:
      "Et nyt udeareal skabt med fokus på funktion, brug og et færdigt visuelt udtryk.",
    cardImage: "/images/cases/terrasse-jatoba.jpg",
    cardImageAlt: "Færdig træterrasse i hårdttræ ved hvid villa",
    heroImage: "/images/cases/terrasse-jatoba.jpg",
    heroImageAlt: "Færdig træterrasse i hårdttræ ved hvid villa",
    intro:
      "Vi udførte opbygning og montering af en træterrasse i Jatoba ved en privat bolig i Gentofte.",
    task: "Kunden ønskede en solid og holdbar træterrasse i Jatoba, tilpasset huset og omgivelserne, med præcis opbygning og et eksklusivt udtryk.",
    work: [
      "Opbygning af bærende konstruktion",
      "Nivellering og korrekt fundament",
      "Montering af terrassebrædder i Jatoba",
      "Præcis tilpasning og afslutning",
    ],
    focus: [
      "Præcis opbygning og korrekt afstand",
      "Stabil konstruktion",
      "Ensartet og visuelt rent resultat",
    ],
    result:
      "Resultatet er en solid og holdbar terrasse med et eksklusivt udtryk, tilpasset huset og omgivelserne.",
    gallery: [
      {
        src: "/images/hero/hero-card-terrasse.png",
        alt: "Træterrasse i Jatoba under opbygning",
        kind: "process",
      },
      {
        src: "/images/cases/projekt-terrasse.png",
        alt: "Bærende konstruktion til træterrasse under opbygning",
        kind: "process",
      },
      {
        src: "/images/cases/terrasse-jatoba.jpg",
        alt: "Færdig træterrasse i hårdttræ ved hvid villa",
        kind: "result",
      },
    ],
    relatedSlugs: ["belaegning-ved-bolig", "facadeopgave"],
  },
  {
    slug: "belaegning-ved-bolig",
    title: "Belægning ved bolig",
    location: "Roskilde",
    category: "private",
    serviceLabel: "Belægningsarbejde",
    serviceHref: "/ydelser/belaegningsarbejde",
    cardDesc:
      "Adgangsareal og belægning udført med fokus på stabilitet og en pæn afslutning.",
    cardImage: "/images/cases/belaegning-kyst.jpg",
    cardImageAlt: "Ny belægning og terrænarbejde ved bolig",
    heroImage: "/images/cases/belaegning-kyst.jpg",
    heroImageAlt: "Ny belægning og terrænarbejde ved bolig",
    intro:
      "Vi udførte et komplet udendørs projekt ved en privat bolig i Roskilde med fokus på funktionalitet, afvanding og æstetik.",
    task: "Kunden havde brug for belægning og terrænarbejde i et område med niveauforskelle og nærhed til vand — med korrekt opbygning, dræning og et sammenhængende visuelt udtryk.",
    work: [
      "Belægning i sandsten (sandsten fliser)",
      "Klinker i samme materiale for ensartet udtryk",
      "Etablering af drænrender og afvanding",
      "Anlæg af gangarealer i græsarmering",
      "Opbygning af støttemure i granit brosten",
    ],
    focus: [
      "Stabil bundopbygning og korrekt fald",
      "Effektiv håndtering af overfladevand",
      "Præcis tilpasning af materialer",
      "Sammenhæng mellem funktion og design",
    ],
    result:
      "Resultatet er et holdbart og velafbalanceret udeområde, hvor materialer og konstruktion arbejder sammen både teknisk og visuelt.",
    gallery: [
      {
        src: "/images/cases/projekt-belaegning.png",
        alt: "Belægning under opbygning ved bolig",
        kind: "process",
      },
      {
        src: "/images/cases/belaegning-kyst.jpg",
        alt: "Ny belægning og terrænarbejde ved bolig",
        kind: "result",
      },
    ],
    relatedSlugs: ["terrasse-og-haveomraade", "facadeopgave"],
  },
  {
    slug: "facadeopgave",
    title: "Facadeopgave",
    location: "Nordsjælland",
    category: "private",
    serviceLabel: "Facadearbejde",
    serviceHref: "/ydelser/murerarbejde",
    cardDesc:
      "Vedligeholdelse og forbedring af facade med fokus på bygningens udtryk og holdbarhed.",
    cardImage: "/images/cases/facade-trappe.jpg",
    cardImageAlt: "Nyrenoveret trappe og pudset facade ved etageejendom",
    heroImage: "/images/cases/facade-trappe.jpg",
    heroImageAlt: "Nyrenoveret trappe og pudset facade ved etageejendom",
    intro: "Vi udførte facadearbejde på en privat bolig i Nordsjælland.",
    task: "Kunden ønskede facaderenovering med fokus på detaljer og finish — et rent og moderne udtryk med minimal gene under arbejdet.",
    work: [
      "Klargøring af facade",
      "Pudsning og spartling",
      "Maling af facade",
      "Beskyttelse af vinduer, døre og omkringliggende områder",
    ],
    focus: [
      "Rene linjer og ensartet overflade",
      "Korrekt forarbejde for lang holdbarhed",
      "Minimal gene for kunden under arbejdet",
    ],
    result:
      "Resultatet er en opdateret facade med et rent og moderne udtryk, tilpasset omgivelserne.",
    gallery: [
      {
        src: "/images/hero/hero-card-facade.png",
        alt: "Facadearbejde på privat bolig i Nordsjælland",
        kind: "process",
      },
      {
        src: "/images/cases/projekt-facade.png",
        alt: "Facade under renovering",
        kind: "process",
      },
      {
        src: "/images/cases/facade-trappe.jpg",
        alt: "Nyrenoveret trappe og pudset facade ved etageejendom",
        kind: "result",
      },
    ],
    relatedSlugs: ["terrasse-og-haveomraade", "belaegning-ved-bolig"],
  },
] as const;

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project): Project[] {
  return project.relatedSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => p !== undefined);
}
