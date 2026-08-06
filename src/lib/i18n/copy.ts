/**
 * DA-only copy resolvers for the "local" pages (home, om-os, kontakt, private,
 * entreprenorer) whose copy stays in constants. `locale` stays on the signature
 * so call sites need no churn after the EN strip (voided intentionally).
 * CMS-driven pages localize in GROQ (lib/sanity/queries.ts).
 */
import * as home from "@/constants/home";
import * as om from "@/constants/om";
import * as kontakt from "@/constants/kontakt";
import * as privateC from "@/constants/privatePage";
import * as b2b from "@/constants/b2b";
import { PROJECTS_LIST, PROJECT_CATEGORY_LABEL } from "@/constants/projects";

type Locale = string;

export function homeCopy(locale: Locale) {
  void locale;
  return {
    NAV_MENU: home.NAV_MENU,
    SERVICES_MENU: home.SERVICES_MENU,
    FOOTER: home.FOOTER,
    HERO: home.HERO,
    AUDIENCES: home.AUDIENCES,
    ONETEAM: home.ONETEAM,
    SERVICES: home.SERVICES,
    PROCESS: home.PROCESS,
    MARQUEE_WORDS: home.MARQUEE_WORDS,
    GALLERY: home.GALLERY,
    ABOUT: home.ABOUT,
    SEOTEXT: home.SEOTEXT,
    FAQ: home.FAQ,
    QUOTE_FORM: home.QUOTE_FORM,
  };
}

export function omCopy(locale: Locale) {
  void locale;
  return {
    OM_META: om.OM_META,
    OM_HERO: om.OM_HERO,
    OM_INTRO: om.OM_INTRO,
    OM_VALUES: om.OM_VALUES,
    OM_TEAM: om.OM_TEAM,
    OM_ONEPLAN: om.OM_ONEPLAN,
    OM_GALLERY: om.OM_GALLERY,
    OM_CTA: om.OM_CTA,
  };
}

export function kontaktCopy(locale: Locale) {
  void locale;
  return {
    KONTAKT_META: kontakt.KONTAKT_META,
    KONTAKT_HERO: kontakt.KONTAKT_HERO,
    KONTAKT_FORM: kontakt.KONTAKT_FORM,
    KONTAKT_INFO: kontakt.KONTAKT_INFO,
    KONTAKT_STEPS: kontakt.KONTAKT_STEPS,
    KONTAKT_AUDIENCES: kontakt.KONTAKT_AUDIENCES,
  };
}

export function privateCopy(locale: Locale) {
  void locale;
  return {
    PRIVATE_META: privateC.PRIVATE_META,
    PRIVATE_HERO: privateC.PRIVATE_HERO,
    PRIVATE_SERVICES: privateC.PRIVATE_SERVICES,
    PRIVATE_PROJECTS: privateC.PRIVATE_PROJECTS,
    PRIVATE_ONE_TEAM: privateC.PRIVATE_ONE_TEAM,
    PRIVATE_PROCESS: privateC.PRIVATE_PROCESS,
    PRIVATE_REVIEWS: privateC.PRIVATE_REVIEWS,
    PRIVATE_FAQ: privateC.PRIVATE_FAQ,
    PRIVATE_CTA: privateC.PRIVATE_CTA,
  };
}

export function b2bCopy(locale: Locale) {
  void locale;
  return {
    B2B_META: b2b.B2B_META,
    B2B_HERO: b2b.B2B_HERO,
    B2B_SCENARIOS: b2b.B2B_SCENARIOS,
    B2B_SERVICES: b2b.B2B_SERVICES,
    B2B_WHY: b2b.B2B_WHY,
    B2B_PROJECTS: b2b.B2B_PROJECTS,
    B2B_MODEL: b2b.B2B_MODEL,
    B2B_CTA: b2b.B2B_CTA,
  };
}

export function projectsCopy(locale: Locale) {
  void locale;
  return {
    PROJECTS_LIST,
    PROJECT_CATEGORY_LABEL,
  };
}

/* Fixed UI labels for the CMS-driven pages (service + project detail) and the
   shared CtaBand phone button — strings that live in code, not the CMS. */
const UI = {
  callPrefix: "Ring",
  servicesLabel: "Ydelser",
  getQuote: "Få et tilbud",
  seeProjects: "Se projekter",
  startMessage: "Start med en kort besked",
  serviceCasesH2: "Det har vi lavet",
  galleryStripH2: "Billeder fra opgaverne",
  openGallery: "Åbn hele galleriet",
  allServices: "Alle ydelser",
  serviceCtaH2: "Skal vi give et tilbud på din opgave?",
  serviceCtaText:
    "Send en kort beskrivelse og gerne et par billeder. Vi vurderer opgaven og vender tilbage inden 24 timer.",
  projectAboutH2: "Om projektet",
  projectWorkH3: "Opgaven omfattede",
  projectResultH2: "Resultat",
  projectFocusH3: "Fokus i udførelsen",
  projectGalleryH2: "Galleri",
  projectReviewsH2: "Kundens ord",
  projectReviewQuote:
    "Grønt Land DK leverede et gennemført stykke arbejde — tydelig kommunikation, aftalte tidsplaner blev holdt, og resultatet står skarpt. Vi anbefaler dem gerne.",
  projectReviewName: "Kunde (placeholder)",
  projectReviewMeta: "Privatkunde · Storkøbenhavn",
  projectRelatedH2: "Andre projekter",
} as const;

export function ui(locale: Locale) {
  void locale;
  return UI;
}
