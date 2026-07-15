import { Container, Heading, Button } from "@/components/ui";
import { GalleryCarousel, type GalleryItem } from "@/components/gallery";
import { cn } from "@/util/cn";

/* Reusable gallery section — heading (+ optional sub and CTA button right) over
   the Nbyg-derived coverflow GalleryCarousel, same width ladder as the home
   Gallery / project galleries. Use this for any new gallery-like section
   instead of ad-hoc photo grids. Optional ring decor behind the heading's
   right side (Figma feedback image 14: bbox ≈ left 55.5% / top 70px / 256px). */
export function GalleryStrip({
  h2,
  sub,
  cta,
  items,
  background = "mist",
  decor = false,
}: {
  h2: string;
  sub?: string;
  cta?: { label: string; href: string };
  items: readonly GalleryItem[];
  background?: "white" | "mist";
  decor?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 xl:py-24",
        background === "mist" ? "bg-mist" : "bg-white",
      )}
    >
      {decor && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/svg/decor-rings-faq.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[55%] top-[70px] z-0 hidden w-[256px] max-w-none rotate-[117.04deg] opacity-90 xl:block"
        />
      )}

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-2xl">
            <Heading as="h2" size="section">
              {h2}
            </Heading>
            {sub && (
              <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">{sub}</p>
            )}
          </div>
          {cta && (
            <Button href={cta.href} variant="pine" size="md" className="w-full shrink-0 sm:w-auto">
              {cta.label}
            </Button>
          )}
        </div>
      </Container>

      <div className="relative z-10 mx-auto mt-10 max-w-[416px] sm:max-w-[726px] md:max-w-[867px] lg:max-w-[1141px] xl:mt-12 xl:max-w-[1494px]">
        <GalleryCarousel items={[...items]} />
      </div>
    </section>
  );
}
