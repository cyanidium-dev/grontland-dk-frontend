/**
 * CMS reads — every query projects documents into the site's existing
 * TypeScript shapes (da locale flattened; images as {src, alt} URLs), so
 * sections/components keep their props and only the data source changes.
 */
import type { Project } from "@/constants/projects";

import { sanityFetch } from "./fetch";

/* Shared projection snippets */
const IMG = `{"src": asset->url, "alt": alt.da}`;
const CTA = `{"label": label.da, href}`;

// ---------------------------------------------------------------------------
// siteSettings
// ---------------------------------------------------------------------------
export type SiteSettings = {
  phone: string;
  phoneHref: string;
  email: string;
  cvr: string;
  area: string;
  hours: string | null;
  replyPromise: string | null;
  footerBlurb: string | null;
  copyright: string | null;
};

export function getSiteSettings(): Promise<SiteSettings> {
  return sanityFetch<SiteSettings>(
    `*[_id == "siteSettings"][0]{
      phone, phoneHref, email, cvr,
      "area": area.da, "hours": hours.da, "replyPromise": replyPromise.da,
      "footerBlurb": footerBlurb.da, copyright
    }`,
  );
}

// ---------------------------------------------------------------------------
// shared shapes
// ---------------------------------------------------------------------------
export type Img = { src: string; alt: string };
export type Cta = { label: string; href: string };

export type HeroData = {
  label: string | null;
  h1: string;
  sub: string;
  image: Img | null;
  ctas: Cta[] | null;
  trustChips: string[] | null;
};

export type CtaBandData = {
  h2: string;
  text: string;
  primary: Cta;
  crosslinks: Cta[] | null;
  image: Img | null;
};

export type SeoTextData = { h2: string; text: string; images: Img[] | null };

const HERO = `{"label": label.da, "h1": h1.da, "sub": sub.da, "image": image${IMG}, "ctas": ctas[]${CTA}, "trustChips": trustChips[].da}`;
const CTA_BAND = `{"h2": h2.da, "text": text.da, "primary": primary${CTA}, "crosslinks": crosslinks[]${CTA}, "image": image${IMG}}`;
const SEO_TEXT = `{"h2": h2.da, "text": text.da, "images": images[]${IMG}}`;

// ---------------------------------------------------------------------------
// /galleri
// ---------------------------------------------------------------------------
export type GalleriPageData = {
  metaTitle: string;
  metaDescription: string;
  hero: HeroData;
  seoText: SeoTextData;
  cta: CtaBandData;
  sections: {
    id: string;
    title: string;
    description: string | null;
    cta: Cta | null;
    photos: Img[];
  }[];
};

// ---------------------------------------------------------------------------
// projects — projected into the existing `Project` type (constants/projects.ts)
// ---------------------------------------------------------------------------
const PROJECT = `{
  "slug": slug.current,
  "title": title.da,
  location,
  "objectType": objectType.da,
  category,
  "serviceLabel": coalesce(serviceLabel.da, primaryService->nav.da),
  "serviceHref": "/ydelser/" + primaryService->slug.current,
  "services": services[]->{"label": nav.da, "href": "/ydelser/" + slug.current},
  "cardDesc": cardDesc.da,
  "cardImage": cardImage.asset->url,
  "cardImageAlt": cardImage.alt.da,
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt.da,
  "seoDescription": seo.description.da,
  "intro": intro.da,
  "task": task.da,
  "work": work[].da,
  "focus": focus[].da,
  "result": result.da,
  "facts": facts[]{"label": label.da, "value": value.da},
  "gallery": gallery[]{"src": image.asset->url, "alt": image.alt.da, kind},
  "relatedSlugs": related[]->slug.current
}`;

export function getProjects(): Promise<Project[]> {
  return sanityFetch<Project[]>(`*[_type == "project"] | order(_createdAt asc) ${PROJECT}`);
}

export function getProjectBySlug(slug: string): Promise<(Project & { related: Project[] }) | null> {
  return sanityFetch(
    `*[_type == "project" && slug.current == $slug][0]{
      ...${PROJECT},
      "related": related[]->${PROJECT}
    }`,
    { slug },
  );
}

export function getProjectSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(`*[_type == "project"].slug.current`);
}

export type ProjekterPageData = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sub: string | null;
  emptyFilter: string | null;
  cta: CtaBandData | null;
};

export function getProjekterPage(): Promise<ProjekterPageData> {
  return sanityFetch<ProjekterPageData>(
    `*[_id == "projekterPage"][0]{
      "metaTitle": seo.title.da,
      "metaDescription": seo.description.da,
      "h1": h1.da,
      "sub": sub.da,
      "emptyFilter": emptyFilter.da,
      "cta": cta${CTA_BAND}
    }`,
  );
}

// ---------------------------------------------------------------------------
// services — ServiceContent shape with cases/photos embedded
// ---------------------------------------------------------------------------
export type ServicePageData = {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  heroImage: Img;
  trustChips: string[];
  scope: { h2: string; items: { title: string; desc: string }[] };
  prices: { h2: string; note: string; rows: { label: string; value: string }[] } | null;
  process: { h2: string; steps: { title: string; desc: string }[] };
  processImage: Img | null;
  ctaImage: Img | null;
  cases: Project[];
  galleryPhotos: Img[];
  faq: { h2: string; items: { q: string; a: string }[] };
  seoText: SeoTextData;
};

const SERVICE_PAGE = `{
  "slug": slug.current,
  "nav": nav.da,
  "metaTitle": seo.title.da,
  "metaDescription": seo.description.da,
  "h1": hero.h1.da,
  "heroSub": hero.sub.da,
  "heroImage": hero.image${IMG},
  "trustChips": hero.trustChips[].da,
  "scope": scope{"h2": h2.da, "items": items[]{"title": title.da, "desc": desc.da}},
  "prices": prices{"h2": h2.da, "note": note.da, "rows": rows[]{"label": label.da, "value": value.da}},
  "process": process{"h2": h2.da, "steps": steps[]{"title": title.da, "desc": desc.da}},
  "processImage": process.backgroundImage${IMG},
  "ctaImage": ctaImage${IMG},
  "cases": cases[]->${PROJECT},
  "galleryPhotos": galleryCategory->photos[]${IMG},
  "faq": faq{"h2": h2.da, "items": items[]{"q": q.da, "a": a.da}},
  "seoText": seoText${SEO_TEXT}
}`;

export function getServiceBySlug(slug: string): Promise<ServicePageData | null> {
  return sanityFetch(`*[_type == "service" && slug.current == $slug][0]${SERVICE_PAGE}`, { slug });
}

export function getServiceSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(`*[_type == "service"] | order(order asc).slug.current`);
}

export type YdelserIndexData = {
  metaTitle: string;
  metaDescription: string;
  hero: HeroData;
  cta: CtaBandData | null;
  cards: { slug: string; title: string; desc: string; image: Img }[];
};

export function getYdelserIndex(): Promise<YdelserIndexData> {
  return sanityFetch<YdelserIndexData>(
    `*[_id == "ydelserIndexPage"][0]{
      "metaTitle": seo.title.da,
      "metaDescription": seo.description.da,
      "hero": hero${HERO},
      "cta": cta${CTA_BAND},
      "cards": *[_type == "service"] | order(order asc) {
        "slug": slug.current,
        "title": nav.da,
        "desc": coalesce(cardDesc.da, hero.sub.da),
        "image": hero.image${IMG}
      }
    }`,
  );
}

export function getGalleriPage(): Promise<GalleriPageData> {
  return sanityFetch<GalleriPageData>(
    `*[_id == "galleriPage"][0]{
      "metaTitle": seo.title.da,
      "metaDescription": seo.description.da,
      "hero": hero${HERO},
      "seoText": seoText${SEO_TEXT},
      "cta": cta${CTA_BAND},
      "sections": *[_type == "galleryCategory"] | order(order asc) {
        "id": key,
        "title": title.da,
        "description": description.da,
        "cta": cta${CTA},
        "photos": photos[]${IMG}
      }
    }`,
  );
}
