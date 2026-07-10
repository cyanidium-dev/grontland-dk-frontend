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

export const PROJECTS: readonly Project[] = [
  {
    slug: "terrasse-og-haveomraade",
    title: "Træterrasse i Jatoba",
    location: "Gentofte",
    objectType: "Privat bolig",
    category: "private",
    serviceLabel: "Havearbejde / terrasse",
    serviceHref: "/ydelser/havearbejde",
    services: [{ label: "Havearbejde", href: "/ydelser/havearbejde" }],
    cardDesc:
      "Træterrasse i Jatoba ved privat bolig i Gentofte — solid opbygning, præcis montering og et eksklusivt udeareal.",
    cardImage: "/images/cases/terrasse-jatoba.jpg",
    cardImageAlt: "Færdig træterrasse i Jatoba ved hvid villa i Gentofte",
    heroImage: "/images/cases/terrasse-jatoba.jpg",
    heroImageAlt: "Færdig træterrasse i Jatoba ved hvid villa i Gentofte",
    seoDescription:
      "Træterrasse i Jatoba ved privat bolig i Gentofte — opbygning, fundament og montering udført af Grønt Land DK.",
    intro:
      "Vi byggede og monterede en træterrasse i Jatoba ved en privat bolig i Gentofte — et udeareal der matcher huset og holder til daglig brug.",
    task: "Kunden ønskede en solid og holdbar træterrasse i Jatoba, tilpasset huset og omgivelserne. Jatoba er et hårdt og slidstærkt træ, som kræver nøjagtig udførelse og korrekt montering for lang levetid og stabilitet.",
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
      "Resultatet er en solid og holdbar terrasse med et eksklusivt udtryk, tilpasset huset og omgivelserne i Gentofte.",
    facts: [
      { label: "Lokation", value: "Gentofte" },
      { label: "Type", value: "Privat bolig" },
      { label: "Materiale", value: "Jatoba (hårdttræ)" },
      { label: "Fag", value: "Havearbejde / terrasse" },
      { label: "Omfang", value: "Opbygning og montering af træterrasse" },
    ],
    gallery: [
      {
        src: "/images/hero/hero-card-terrasse.png",
        alt: "Bærende konstruktion til træterrasse under opbygning i Gentofte",
        kind: "before",
      },
      {
        src: "/images/cases/terrasse-jatoba.jpg",
        alt: "Færdig træterrasse i Jatoba ved hvid villa i Gentofte",
        kind: "after",
      },
      {
        src: "/images/hero/hero-card-terrasse.png",
        alt: "Træterrasse under opbygning — joists og fundament",
        kind: "process",
      },
      {
        src: "/images/cases/terrasse-jatoba.jpg",
        alt: "Færdig træterrasse i Jatoba ved privat bolig",
        kind: "result",
      },
    ],
    relatedSlugs: [
      "belaegning-ved-bolig",
      "betontrappe-hellerup",
      "facadeopgave",
    ],
  },
  {
    slug: "belaegning-ved-bolig",
    title: "Belægning og terrænarbejde",
    location: "Roskilde",
    objectType: "Privat bolig",
    category: "private",
    serviceLabel: "Belægningsarbejde",
    serviceHref: "/ydelser/belaegningsarbejde",
    services: [{ label: "Belægningsarbejde", href: "/ydelser/belaegningsarbejde" }],
    cardDesc:
      "Sandstensbelægning, afvanding og terrænarbejde ved privat bolig i Roskilde — stabil bund og styret overfladevand.",
    cardImage: "/images/cases/belaegning-kyst.jpg",
    cardImageAlt: "Ny sandstensbelægning og terrænarbejde ved bolig i Roskilde",
    heroImage: "/images/cases/belaegning-kyst.jpg",
    heroImageAlt: "Ny sandstensbelægning og terrænarbejde ved bolig i Roskilde",
    seoDescription:
      "Belægning og terrænarbejde ved privat bolig i Roskilde — sandsten, dræn, græsarmering og støttemure af Grønt Land DK.",
    intro:
      "Vi udførte et komplet udendørs projekt ved en privat bolig i Roskilde med fokus på funktionalitet, afvanding og æstetik.",
    task: "Kunden havde brug for belægning og terrænarbejde i et område med niveauforskelle og direkte nærhed til vand. Opgaven krævede korrekt opbygning, dræning og et sammenhængende visuelt udtryk mellem materialerne.",
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
    facts: [
      { label: "Lokation", value: "Roskilde" },
      { label: "Type", value: "Privat bolig" },
      { label: "Materialer", value: "Sandsten, granit brosten, græsarmering" },
      { label: "Fag", value: "Belægningsarbejde" },
      { label: "Omfang", value: "Belægning, afvanding og terræn nær vand" },
    ],
    gallery: [
      {
        src: "/images/hero/hero-photo-2.png",
        alt: "Belægning og haveanlæg under opbygning ved bolig",
        kind: "before",
      },
      {
        src: "/images/cases/belaegning-kyst.jpg",
        alt: "Færdig sandstensbelægning og terræn ved bolig i Roskilde",
        kind: "after",
      },
      {
        src: "/images/hero/hero-photo-2.png",
        alt: "Belægning og terræn under opbygning",
        kind: "process",
      },
      {
        src: "/images/cases/belaegning-kyst.jpg",
        alt: "Ny belægning og terrænarbejde ved bolig i Roskilde",
        kind: "result",
      },
    ],
    relatedSlugs: [
      "terrasse-og-haveomraade",
      "belaegning-arc-amager",
      "betontrappe-hellerup",
    ],
  },
  {
    slug: "facadeopgave",
    title: "Facaderenovering",
    location: "Nordsjælland",
    objectType: "Privat bolig",
    category: "private",
    serviceLabel: "Facadearbejde",
    serviceHref: "/ydelser/murerarbejde",
    services: [{ label: "Facadearbejde", href: "/ydelser/murerarbejde" }],
    cardDesc:
      "Facaderenovering på privat bolig i Nordsjælland — puds, spartel og maling med fokus på finish og beskyttelse af omgivelserne.",
    cardImage: "/images/hero/hero-card-facade.png",
    cardImageAlt:
      "Facaderenovering på privat bolig i Nordsjælland med afdækket vinduer",
    heroImage: "/images/hero/hero-card-facade.png",
    heroImageAlt:
      "Facaderenovering på privat bolig i Nordsjælland med afdækket vinduer",
    seoDescription:
      "Facaderenovering på privat bolig i Nordsjælland — klargøring, pudsning, maling og beskyttelse udført af Grønt Land DK.",
    intro:
      "Vi udførte facadearbejde på en privat bolig i Nordsjælland med fokus på detaljer, finish og minimal gene under arbejdet.",
    task: "Kunden ønskede facaderenovering, hvor det visuelle resultat er afgørende. Arbejdet omfattede klargøring, puds og maling — med omhyggelig beskyttelse af vinduer, døre og omkringliggende områder.",
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
      "Resultatet er en opdateret facade med et rent og moderne udtryk, tilpasset omgivelserne i Nordsjælland.",
    facts: [
      { label: "Lokation", value: "Nordsjælland" },
      { label: "Type", value: "Privat bolig" },
      { label: "Fag", value: "Facadearbejde" },
      { label: "Omfang", value: "Klargøring, puds, spartel og maling" },
    ],
    gallery: [
      {
        src: "/images/hero/hero-card-facade.png",
        alt: "Facade under renovering — vinduer afdækket, puds og maling i gang",
        kind: "process",
      },
    ],
    relatedSlugs: [
      "betontrappe-hellerup",
      "terrasse-og-haveomraade",
      "belaegning-ved-bolig",
    ],
  },
  {
    slug: "betontrappe-hellerup",
    title: "Renovering af betontrappe",
    location: "Hellerup",
    objectType: "Privat bolig",
    category: "private",
    serviceLabel: "Murerarbejde",
    serviceHref: "/ydelser/murerarbejde",
    services: [
      { label: "Murerarbejde", href: "/ydelser/murerarbejde" },
      { label: "Facadearbejde", href: "/ydelser/murerarbejde" },
    ],
    cardDesc:
      "Komplet renovering af betontrappe ved privat bolig i Hellerup — ny geometri, støbning og et ensartet, holdbart udtryk.",
    cardImage: "/images/cases/facade-trappe.jpg",
    cardImageAlt: "Nyrenoveret udvendig trappe ved bolig i Hellerup",
    heroImage: "/images/cases/facade-trappe.jpg",
    heroImageAlt: "Nyrenoveret udvendig trappe ved bolig i Hellerup",
    seoDescription:
      "Renovering af betontrappe ved privat bolig i Hellerup — forskalling, støbning og efterbehandling af Grønt Land DK.",
    intro:
      "Vi udførte en komplet renovering af en eksisterende betontrappe ved en privat bolig i Hellerup.",
    task: "Den oprindelige konstruktion var slidt og ujævn, hvilket krævede genopbygning af trappens geometri og overflader — med præcise trinmål og et udtryk, der passer til husets stil.",
    work: [
      "Forberedelse og rensning af eksisterende beton",
      "Opbygning af ny forskalling (trin og sider)",
      "Reparation og nivellering af trappens struktur",
      "Støbning og formgivning af nye trin",
      "Efterbehandling for et ensartet og holdbart resultat",
    ],
    focus: [
      "Præcis geometri og ens trinmål",
      "Stærk og stabil konstruktion",
      "Visuel integration med eksisterende arkitektur",
    ],
    result:
      "Resultatet er en solid og æstetisk trappe med et moderne og ensartet udtryk, der passer til husets stil i Hellerup.",
    facts: [
      { label: "Lokation", value: "Hellerup" },
      { label: "Type", value: "Privat bolig" },
      { label: "Fag", value: "Murerarbejde" },
      { label: "Omfang", value: "Renovering af udvendig betontrappe" },
    ],
    gallery: [
      {
        src: "/images/cases/quote-cta-raw1.jpeg",
        alt: "Udvendig trappe under renovering med belægning i forgrunden",
        kind: "before",
      },
      {
        src: "/images/cases/facade-trappe.jpg",
        alt: "Færdig renoveret udvendig trappe ved bolig i Hellerup",
        kind: "after",
      },
      {
        src: "/images/cases/quote-cta-raw1.jpeg",
        alt: "Betontrappe og terræn under opbygning i Hellerup",
        kind: "process",
      },
      {
        src: "/images/cases/facade-trappe.jpg",
        alt: "Nyrenoveret trappe med fliser og hvid finish",
        kind: "result",
      },
      {
        src: "/images/cases/quote-cta-band.png",
        alt: "Nybelagte betontrin med hvid balustrade",
        kind: "result",
      },
    ],
    relatedSlugs: [
      "facadeopgave",
      "belaegning-ved-bolig",
      "terrasse-og-haveomraade",
    ],
  },
  {
    slug: "belaegning-arc-amager",
    title: "Belægning og afvanding — ARC",
    location: "Amager",
    objectType: "Erhvervsbyggeri",
    category: "b2b",
    serviceLabel: "Belægningsarbejde",
    serviceHref: "/ydelser/belaegningsarbejde",
    services: [{ label: "Belægningsarbejde", href: "/ydelser/belaegningsarbejde" }],
    cardDesc:
      "Underentreprise med belægning og afvanding ved ARC Amager Ressourcecenter — i tæt samarbejde med hovedentreprenør.",
    cardImage: "/images/cases/fundament-b2b.png",
    cardImageAlt: "Armeret fundament klargjort til støbning på byggeplads",
    heroImage: "/images/cases/fundament-b2b.png",
    heroImageAlt: "Armeret fundament klargjort til støbning på byggeplads",
    seoDescription:
      "Belægning og afvanding som underentreprenør ved ARC Amager Ressourcecenter — Grønt Land DK for entreprenører.",
    intro:
      "Vi deltog som underentreprenør i et større projekt ved ARC Amager Ressourcecenter med belægning og afvanding.",
    task: "Som underentreprenør leverede vi belægning og afvanding i tæt samarbejde med hovedentreprenøren og øvrige faggrupper på pladsen — med korrekt fald, præcis opmåling og stabil opbygning.",
    work: [
      "Etablering af dræn- og afvandingssystemer",
      "Montering af linjedræn og brønde",
      "Forberedelse af bundopbygning",
      "Udlægning af betonbelægning",
    ],
    focus: [
      "Korrekt fald og afvanding",
      "Præcis opmåling og udførelse",
      "Stabil opbygning og holdbarhed",
    ],
    result:
      "Vi deltog både i udførelsen og den løbende koordinering på pladsen for at sikre, at arbejdet blev udført korrekt og uden forsinkelser.",
    facts: [
      { label: "Lokation", value: "Amager" },
      { label: "Type", value: "Erhvervsbyggeri" },
      { label: "Rolle", value: "Underentreprenør" },
      { label: "Fag", value: "Belægning og afvanding" },
      { label: "Omfang", value: "ARC Amager Ressourcecenter" },
    ],
    gallery: [
      {
        src: "/images/hero/hero-photo-2.png",
        alt: "Belægning og terræn under opbygning på byggeplads",
        kind: "process",
      },
      {
        src: "/images/cases/fundament-b2b.png",
        alt: "Armeret fundament og pladsarbejde ved ARC Amager",
        kind: "result",
      },
    ],
    relatedSlugs: [
      "belaegning-ved-bolig",
      "betontrappe-hellerup",
      "facadeopgave",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project): Project[] {
  return project.relatedSlugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => p !== undefined);
}

export function filterProjects(filter: ProjectFilterId): readonly Project[] {
  if (filter === "all") return PROJECTS;
  return PROJECTS.filter((p) => p.category === filter);
}
