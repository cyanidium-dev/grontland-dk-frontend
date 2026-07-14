import Image from "next/image";

import { Container, Heading, Button, type ButtonVariant } from "@/components/ui";
import { cn } from "@/util/cn";

export type PageHeroCta = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

export type PageHeroImage = {
  src: string;
  alt: string;
  /** "background" = full-bleed photo + dark gradient (OneTeam treatment);
   *  "side" = mist band with a rounded photo on the right. */
  layout?: "background" | "side";
};

/* Inner-page hero band. Default = mist (matches ProjectsListing header). */
export function PageHero({
  label,
  title,
  sub,
  ctas = [],
  image,
}: {
  label?: string;
  title: string;
  sub: string;
  ctas?: readonly PageHeroCta[];
  image?: PageHeroImage;
}) {
  const dark = image?.layout !== "side" && Boolean(image);
  const side = image?.layout === "side" ? image : undefined;

  return (
    <section className={cn("relative overflow-hidden py-16 xl:py-24", dark ? "text-white" : "bg-mist")}>
      {dark && image && (
        <>
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" priority />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(104.68deg,rgba(0,0,0,0.72)_25.04%,rgba(0,0,0,0.25)_108.03%)]"
          />
        </>
      )}
      <Container className="relative z-10">
        <div className={cn(side && "grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,520px)] xl:gap-16")}>
          <div className="max-w-3xl">
            {label && (
              <p className={cn("mb-4 text-[12px] font-bold uppercase tracking-[0.3px]", dark ? "text-leaf" : "text-moss")}>
                {label}
              </p>
            )}
            <Heading as="h1" size="hero" className={cn(dark && "text-white")}>
              {title}
            </Heading>
            <p
              className={cn(
                "mt-5 max-w-2xl font-light leading-normal xl:text-[18px]",
                dark ? "text-white/85" : "text-pine/70",
              )}
            >
              {sub}
            </p>
            {ctas.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {ctas.map((cta, i) => (
                  <Button
                    key={cta.href}
                    href={cta.href}
                    variant={cta.variant ?? (i === 0 ? "leaf" : dark ? "white" : "pine")}
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {side && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl xl:aspect-auto xl:min-h-[360px] xl:self-stretch">
              <Image
                src={side.src}
                alt={side.alt}
                fill
                sizes="(min-width: 1280px) 520px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
