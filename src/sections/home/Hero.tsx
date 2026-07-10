import Image from "next/image";

import { Container, Button, Heading, Dots, ImageCarousel } from "@/components/ui";
import { OpenQuoteButton } from "@/components/quote";
import { HERO } from "@/constants/home";
import { HeroProjectCards } from "./HeroProjectCards";

/* Hero — left copy column (dots → heading → description → CTAs → auto slider)
   + right full-bleed image with glass project cards. Concentric-ring decor on
   the seam. Structure mirrors Figma "Главная2" #1018:78. */
export function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-white">
      {/* Right image panel + overlay cards (desktop) — floats below the header,
          vertically inset from the section, above the ring decor (z-10). */}
      <div className="absolute right-0 top-0 bottom-8 z-20 hidden w-[43.5%] overflow-hidden rounded-l-[20px] xl:block">
        <Image
          src={HERO.image.src}
          alt={HERO.image.alt}
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        {/* Figma dark gradient — darkens top + bottom for legibility. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.06)_66%,rgba(0,0,0,0.8)_100%)]"
        />
        {/* Overlay cards — scrollable/looped strip (drag + touch), no buttons. */}
        <div className="absolute inset-x-0 bottom-7 z-10">
          <HeroProjectCards cards={HERO.overlayCards} className="px-7" />
        </div>
      </div>

      {/* Concentric-ring decoration on the column seam */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-leaf.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[54%] top-[64%] hidden h-[491px] w-[526px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-90 xl:block"
      />

      <Container className="relative z-10">
        <div className="max-w-[600px] pb-16 pt-28 xl:pb-8 xl:pt-28">
          <Dots className="mb-5" />
          <Heading as="h1" size="hero" className="mb-8 max-w-[580px]">
            {HERO.h1}
          </Heading>
          <p className="mb-9 max-w-[472px] border-l-2 border-pine/50 pl-5 font-light leading-[1.35] text-pine xl:text-[18px]">
            {HERO.sub}
          </p>
          <div className="mb-12 flex flex-col gap-3 sm:flex-row">
            <OpenQuoteButton variant="black" size="md" className="min-w-[220px]">
              {HERO.ctaPrimary.label}
            </OpenQuoteButton>
            <Button href={HERO.ctaSecondary.href} variant="leaf" size="md">
              {HERO.ctaSecondary.label}
            </Button>
          </div>

          {/* Auto image slider — vertical-flip (bottom→top) overlapping photo stack */}
          <div className="max-w-[480px]">
            <ImageCarousel images={[...HERO.slider]} direction="vertical-flip" />
          </div>
        </div>
      </Container>

      {/* Mobile: image with a single project card below the copy */}
      <div className="relative mx-4 mb-4 h-[340px] overflow-hidden rounded-[20px] xl:hidden">
        <Image
          src={HERO.image.src}
          alt={HERO.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.7)_100%)]"
        />
        <div className="absolute inset-x-0 bottom-4">
          <HeroProjectCards cards={HERO.overlayCards} className="px-4" />
        </div>
      </div>
    </section>
  );
}
