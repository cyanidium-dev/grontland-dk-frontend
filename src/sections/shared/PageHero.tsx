import Image from "next/image";

import { Container, Heading, Button, Dots, type ButtonVariant } from "@/components/ui";
import { cn } from "@/util/cn";

export type PageHeroCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type PageHeroImage = { src: string; alt: string };

/* Inner-page hero — home Hero baseline: white section, copy column left
   (Dots → label → H1 → bordered sub → CTAs), photo as a right-edge-bleeding
   panel with rounded left corner + legibility gradient on xl; photo block
   below the copy on mobile. */
export function PageHero({
  label,
  title,
  sub,
  ctas = [],
  image,
  decor,
}: {
  label?: string;
  title: string;
  sub: string;
  ctas?: readonly PageHeroCta[];
  image?: PageHeroImage;
  /** Absolutely-positioned ornament (e.g. ring SVG) — rendered above the
      white bg, below the copy (z-10) and the photo panel (z-20). */
  decor?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      {decor}
      {/* Right image panel (desktop) — bleeds to the viewport edge; flush with
          the section top and bottom (feedback on /om-os, applied site-wide). */}
      {image && (
        <div className="absolute inset-y-0 right-0 z-20 hidden w-[43.5%] overflow-hidden rounded-l-[20px] xl:block">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.06)_66%,rgba(0,0,0,0.8)_100%)]"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className="max-w-[600px] py-16 xl:py-24">
          <Dots className="mb-5" />
          {label && (
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.3px] text-moss">
              {label}
            </p>
          )}
          {/* hyphens-auto (html lang="da") keeps long Danish compounds from
              overflowing the column or the photo panel on narrow screens. */}
          <Heading as="h1" size="hero" className="mb-8 max-w-[580px] break-words hyphens-auto">
            {title}
          </Heading>
          <p className="mb-9 max-w-[472px] border-l-2 border-pine/50 pl-5 font-light leading-[1.35] text-pine xl:text-[18px]">
            {sub}
          </p>
          {ctas.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {ctas.map((cta, i) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant ?? (i === 0 ? "black" : "leaf")}
                  size="md"
                  className={cn("w-full sm:w-auto", i === 0 && "sm:min-w-[220px]")}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* Mobile: photo below the copy, like home */}
      {image && (
        <div className="relative mx-4 mb-4 h-[340px] overflow-hidden rounded-[20px] xl:hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.7)_100%)]"
          />
        </div>
      )}
    </section>
  );
}
