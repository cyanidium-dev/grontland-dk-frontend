import { getLocale } from "next-intl/server";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { GalleryCarousel, type GalleryItem } from "@/components/gallery";
import { ProjectCard } from "@/components/project";
import { Container, Heading } from "@/components/ui";
import { ui } from "@/lib/i18n/copy";
import type { ServicePageData } from "@/lib/sanity/queries";
import { FaqList, FeatureGrid, NumberedSteps, PageHero, PageHeroSeamDecor } from "@/sections/shared";

/* Section kit for /ydelser/[slug] — thin wrappers over the shared inner-page
   components; section order is fixed by the page route. Data comes from the
   service document (cases + gallery photos embedded by the query). */

export async function ServiceHero({ service }: { service: ServicePageData }) {
  const t = ui(await getLocale());
  return (
    <>
      {/* No eyebrow label — site-wide PageHero pattern (om-os / kontakt). */}
      <PageHero
        title={service.h1}
        sub={service.heroSub}
        ctas={[
          { label: t.getQuote, href: "/kontakt" },
          { label: t.seeProjects, href: "/projekter", variant: "leaf" },
        ]}
        image={service.heroImage}
        decor={<PageHeroSeamDecor />}
      />
      <div className="bg-white pb-10">
        <Container className="flex flex-wrap gap-2">
          {service.trustChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-leaf/12 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.3px] text-moss"
            >
              {chip}
            </span>
          ))}
        </Container>
      </div>
    </>
  );
}

export function ServiceScope({ service }: { service: ServicePageData }) {
  return (
    <FeatureGrid
      h2={service.scope.h2}
      items={service.scope.items}
      background="mist"
      columns={3}
    />
  );
}

export function ServicePrices({ service }: { service: ServicePageData }) {
  if (!service.prices) return null;
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container className="max-w-3xl">
        <Heading as="h2" size="section">
          {service.prices.h2}
        </Heading>
        <dl className="mt-8 divide-y divide-line rounded-2xl border border-line">
          {service.prices.rows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 px-6 py-4"
            >
              <dt className="text-sm font-medium text-pine">{row.label}</dt>
              <dd className="whitespace-nowrap text-sm font-bold text-moss">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm font-light text-pine/60">{service.prices.note}</p>
      </Container>
    </section>
  );
}

export async function ServiceProcess({ service }: { service: ServicePageData }) {
  const t = ui(await getLocale());
  return (
    <NumberedSteps
      h2={service.process.h2}
      steps={service.process.steps}
      cta={{ label: t.startMessage, href: "/kontakt" }}
      background="mist"
      backgroundImage={service.processImage ?? undefined}
    />
  );
}

export async function ServiceCases({ service }: { service: ServicePageData }) {
  if (service.cases.length === 0) return null;
  const t = ui(await getLocale());

  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <Heading as="h2" size="section">
          {t.serviceCasesH2}
        </Heading>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {service.cases.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export async function ServiceGalleryStrip({ service }: { service: ServicePageData }) {
  if (service.galleryPhotos.length === 0) return null;
  const t = ui(await getLocale());

  const items: GalleryItem[] = service.galleryPhotos.map((photo) => ({
    _key: photo.src,
    image: { link: photo.src, alt: photo.alt },
  }));

  return (
    <section className="overflow-hidden bg-mist py-16 xl:py-24">
      <Container className="flex flex-wrap items-baseline justify-between gap-4">
        <Heading as="h2" size="section">
          {t.galleryStripH2}
        </Heading>
        <Link
          href="/galleri"
          className="text-[12px] font-bold uppercase tracking-[0.3px] text-moss underline underline-offset-4 hover:text-leaf"
        >
          {t.openGallery}
        </Link>
      </Container>
      <div className="mx-auto mt-10 max-w-[416px] sm:max-w-[726px] md:max-w-[867px] lg:max-w-[1141px] xl:max-w-[1494px]">
        <GalleryCarousel items={items} />
      </div>
    </section>
  );
}

export function ServiceFaq({ service }: { service: ServicePageData }) {
  return <FaqList h2={service.faq.h2} items={service.faq.items} />;
}

export function ServiceSeoText({ service }: { service: ServicePageData }) {
  const [primary, secondary] = service.seoText.images ?? [];
  return (
    <section className="bg-mist py-16 xl:py-20">
      <Container>
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-16">
          <div className="flex w-full shrink-0 flex-col gap-4 xl:w-[460px]">
            {primary && (
              <div className="relative h-[240px] overflow-hidden rounded-xl xl:h-[280px]">
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  sizes="(min-width: 1280px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            {secondary && (
              <div className="relative hidden h-[160px] overflow-hidden rounded-xl sm:block xl:h-[180px] xl:w-[75%] xl:self-end">
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  fill
                  sizes="(min-width: 1280px) 345px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <Heading as="h2" size="section">
              {service.seoText.h2}
            </Heading>
            <p className="mt-5 font-light leading-relaxed text-pine/80 xl:text-[17px]">
              {service.seoText.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
