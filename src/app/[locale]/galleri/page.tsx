import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { QuoteModalProvider } from "@/components/quote";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { getGalleriPage } from "@/lib/sanity/queries";
import { GalleriSections, GalleriSeoText } from "@/sections/galleri";
import { CtaBand, PageHero } from "@/sections/shared";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getGalleriPage();
  return { title: page.metaTitle, description: page.metaDescription };
}

/* /galleri — hero (pills + Figma decor/photo) → per-service sections → SEO
   band with left-bleed photo → final CTA. */
export default async function GalleriPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getGalleriPage();

  return (
    <QuoteModalProvider>
      <Header />
      <main className="flex-1">
        {/* No eyebrow label (site-wide PageHero pattern). Ring decor #3053:84
            centered on the copy/photo seam (shared decor-leaf motif), behind
            the photo panel (z-20); hero photo overridden from Figma #3053:82. */}
        <PageHero
          title={page.hero.h1}
          sub={page.hero.sub}
          image={{
            src: "/images/galleri/galleri-hero.jpg",
            alt: page.hero.image?.alt ?? "Belægning i sildebensmønster fra en rigtig opgave",
          }}
          decor={
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/svg/decor-leaf.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-[56.5%] top-[22px] z-0 hidden h-[302px] w-[341px] max-w-none -translate-x-1/2 opacity-90 xl:block"
            />
          }
        >
          <nav aria-label="Gå til kategori" className="flex flex-wrap gap-2">
            {page.sections.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full bg-leaf/12 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.3px] text-moss transition-colors hover:bg-leaf/25"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </PageHero>
        <GalleriSections sections={page.sections} />
        <GalleriSeoText
          h2={page.seoText.h2}
          text={page.seoText.text}
          image={page.seoText.images?.[0] ?? null}
        />
        <CtaBand
          h2={page.cta.h2}
          text={page.cta.text}
          primary={page.cta.primary}
          crosslinks={page.cta.crosslinks ?? []}
          image={page.cta.image ?? undefined}
        />
      </main>
      <Footer />
    </QuoteModalProvider>
  );
}
