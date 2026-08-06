import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getServiceBySlug, getServiceSlugs } from "@/lib/sanity/queries";
import { homeCopy, ui } from "@/lib/i18n/copy";
import { breadcrumbs, faqPage, servicePage } from "@/lib/seo/jsonld";
import { pageMetadata } from "@/lib/seo/meta";
import {
  ServiceCases,
  ServiceFaq,
  ServiceGalleryStrip,
  ServiceHero,
  ServiceProcess,
  ServiceScope,
  ServiceSeoText,
} from "@/sections/services";
import { CtaBand } from "@/sections/shared";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = await getServiceBySlug(slug);
  if (!s) return { title: "Ydelser | Grønt Land DK" };
  return pageMetadata({ locale: "da",
    path: `/ydelser/${slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
    image: { url: s.heroImage.src, alt: s.heroImage.alt },
  });
}

export default async function ServicePageRoute({ params }: PageProps) {
  const { slug } = await params;
  const s = await getServiceBySlug(slug);
  if (!s) notFound();
  const t = ui();
  const homeLabel = homeCopy().NAV_MENU[0].label;

  return (
    <QuoteModalProvider>
      <JsonLd
        data={[
          servicePage({ name: s.nav, description: s.metaDescription, slug: s.slug, locale: "da" }),
          faqPage(s.faq.items),
          breadcrumbs(
            [
              { name: homeLabel, path: "/" },
              { name: t.servicesLabel, path: "/ydelser" },
              { name: s.nav, path: `/ydelser/${s.slug}` },
            ],
            "da",
          ),
        ]}
      />
      <Header />
      <main className="flex-1">
        <ServiceHero service={s} />
        <ServiceScope service={s} />
        <ServiceProcess service={s} />
        <ServiceCases service={s} />
        <ServiceGalleryStrip service={s} />
        <ServiceFaq service={s} />
        <ServiceSeoText service={s} />
        <CtaBand
          h2={t.serviceCtaH2}
          text={t.serviceCtaText}
          primary={{ label: t.getQuote }}
          primaryModal
          crosslinks={[
            { label: t.allServices, href: "/ydelser" },
            { label: t.seeProjects, href: "/projekter" },
          ]}
          image={s.ctaImage ?? undefined}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
