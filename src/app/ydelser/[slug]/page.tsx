import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuoteModalProvider } from "@/components/quote";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { breadcrumbs, faqPage, servicePage } from "@/lib/seo/jsonld";
import {
  ServiceCases,
  ServiceFaq,
  ServiceGalleryStrip,
  ServiceHero,
  ServicePrices,
  ServiceProcess,
  ServiceScope,
  ServiceSeoText,
} from "@/sections/services";
import { CtaBand } from "@/sections/shared";
import { getService, SERVICES_PAGES } from "@/constants/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Ydelser | Grønt Land DK" };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.heroImage.src, alt: s.heroImage.alt }],
    },
  };
}

export default async function ServicePageRoute({ params }: PageProps) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <QuoteModalProvider>
      <JsonLd
        data={[
          servicePage({ name: s.nav, description: s.metaDescription, slug: s.slug }),
          faqPage(s.faq.items),
          breadcrumbs([
            { name: "Forside", path: "/" },
            { name: "Ydelser", path: "/ydelser" },
            { name: s.nav, path: `/ydelser/${s.slug}` },
          ]),
        ]}
      />
      <Header />
      <main className="flex-1">
        <ServiceHero service={s} />
        <ServiceScope service={s} />
        <ServicePrices service={s} />
        <ServiceProcess service={s} />
        <ServiceCases service={s} />
        <ServiceGalleryStrip service={s} />
        <ServiceFaq service={s} />
        <ServiceSeoText service={s} />
        <CtaBand
          h2="Skal vi give et tilbud på din opgave?"
          text="Send en kort beskrivelse og gerne et par billeder. Vi vurderer opgaven og vender tilbage inden 24 timer."
          primary={{ label: "Få et tilbud", href: "/kontakt" }}
          crosslinks={[
            { label: "Alle ydelser", href: "/ydelser" },
            { label: "Se projekter", href: "/projekter" },
          ]}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
