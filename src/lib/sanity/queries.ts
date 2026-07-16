/**
 * CMS reads — every query projects documents into the site's existing
 * TypeScript shapes (da locale flattened; images as {src, alt} URLs), so
 * sections/components keep their props and only the data source changes.
 */
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
