import { Container, Button, Dots, Heading, Marquee } from "@/components/ui";
import { StarIcon } from "@/components/icons";
import { SERVICES, MARQUEE_WORDS } from "@/constants/home";
import { getServiceCards } from "@/lib/sanity/queries";
import { ServicesSlider } from "./ServicesSlider";

/* Services ("Vores ydelser") — 2nd block. Right-aligned heading + subtitle,
   dots (left) + "Se alle ydelser" CTA (right), a 4-card slider, and a leaf
   marquee band. Concentric-ring decor on the left, behind. Figma #1018:524.
   Copy is local; the service cards come from the CMS (same source as
   /ydelser), so new or renamed services appear here automatically. */
export async function Services() {
  const items = await getServiceCards();
  return (
    <section className="relative bg-white pt-16 xl:pt-24">
      {/* Ring decoration (Services-specific asset) — aligned to the content box
          at x≈110, extending down behind the cards. Figma #1018:156. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-services.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-447px)] top-[118px] hidden w-[400px] max-w-none opacity-90 xl:block"
      />

      <Container className="relative z-10">
        {/* Right-aligned heading + subtitle */}
        <div className="flex flex-col xl:items-end">
          <Heading as="h2" size="section" className="xl:text-right">
            {SERVICES.h2}
          </Heading>
          <p className="mt-4 max-w-[511px] font-light leading-[1.5] text-pine/70 xl:text-right xl:text-[18px]">
            {SERVICES.sub}
          </p>
        </div>

        {/* Dots (left) + CTA (right) */}
        <div className="mt-8 flex items-center justify-between xl:mt-10">
          <Dots />
          <Button href={SERVICES.cta.href} variant="pine">
            {SERVICES.cta.label}
          </Button>
        </div>
      </Container>

      {/* Card slider */}
      <div className="relative z-10 mt-10 xl:mt-12">
        <ServicesSlider items={items} />
      </div>

      {/* Leaf marquee band */}
      <div className="mt-14 xl:mt-20">
        <Marquee
          durationSec={40}
          className="bg-leaf py-4"
          separator={<StarIcon className="mx-6 size-3.5 shrink-0 text-white" />}
          // Repeat the words so one copy is wider than the viewport → seamless loop.
          items={Array.from({ length: 5 }).flatMap(() =>
            MARQUEE_WORDS.map((w) => w),
          ).map((w, i) => (
            <span key={i} className="text-[14px] font-bold uppercase tracking-wide text-white">
              {w}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
