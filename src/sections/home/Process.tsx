import { Container, Heading, Button, Dots, InfoBox } from "@/components/ui";
import type { InfoBoxVariant } from "@/components/ui";
import { OpenQuoteButton } from "@/components/quote";
import { cn } from "@/util/cn";
import { getLocale } from "next-intl/server";

import { homeCopy } from "@/lib/i18n/copy";

/* "Sådan foregår arbejdet" — Figma #1019:924 / #1018:583 (file zq0o0GOkllffjjIomgnQ5p).
   White band; Dots + right H2; 5 alternating step cards; left CTA; ring decor. */
type StepStyle = {
  box: InfoBoxVariant;
  bordered: boolean;
  num: string;
  title: string;
  desc: string;
};

function stepStyle(i: number): StepStyle {
  if (i === 4) {
    return {
      box: "leaf",
      bordered: false,
      num: "text-white",
      title: "text-white",
      desc: "text-white/80",
    };
  }
  if (i % 2 === 1) {
    return {
      box: "pine",
      bordered: false,
      num: "text-leaf",
      title: "text-white",
      desc: "text-white/65",
    };
  }
  return {
    box: "light",
    bordered: true,
    num: "text-leaf",
    title: "text-pine",
    desc: "text-pine/60",
  };
}

type ProcessData = {
  h2: string;
  steps: readonly { title: string; desc: string }[];
  cta: { label: string; href: string };
};

/* Shared 5-step process band. Defaults to the home PROCESS copy; pass `data`
   for a page-specific variant (e.g. /private). `ctaModal` makes the CTA open
   the quote modal instead of navigating (requires QuoteModalProvider). */
export async function Process({
  data,
  ctaModal = false,
}: { data?: ProcessData; ctaModal?: boolean } = {}) {
  const PROCESS = data ?? homeCopy(await getLocale()).PROCESS;
  return (
    <section id="proces" className="relative overflow-hidden bg-white py-16 xl:py-24">
      {/* Ring decor #1018:641 — Figma inset + rotate on #1019:924 wrapper (not baked into SVG) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/decor-rings-process.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute z-0 inset-[42.91%_0.93%_-1.31%_70.16%] hidden max-w-none rotate-[-36.67deg] opacity-90 xl:block"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-between gap-8">
            <Dots size="md" className="hidden shrink-0 xl:flex" />
            <Heading as="h2" size="section" className="xl:text-right">
              {PROCESS.h2}
            </Heading>
          </div>

          <ol className="grid gap-3 pt-4 sm:grid-cols-2 xl:grid-cols-5">
            {PROCESS.steps.map((step, i) => {
              const s = stepStyle(i);
              return (
                <li key={step.title} className="h-full">
                  <InfoBox
                    variant={s.box}
                    className={cn(
                      "flex h-full flex-col rounded-[12px] px-5 py-6",
                      s.bordered && "border border-line",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-[32px] font-bold leading-none xl:text-[44px]",
                        s.num,
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={cn("mt-4 text-[13px] font-bold uppercase leading-tight", s.title)}
                    >
                      {step.title}
                    </h3>
                    <p className={cn("mt-2 text-sm font-light leading-relaxed", s.desc)}>
                      {step.desc}
                    </p>
                  </InfoBox>
                </li>
              );
            })}
          </ol>

          <div>
            {ctaModal ? (
              <OpenQuoteButton variant="leaf" size="md" className="w-full sm:w-auto">
                {PROCESS.cta.label}
              </OpenQuoteButton>
            ) : (
              <Button href={PROCESS.cta.href} variant="leaf" size="md" className="w-full sm:w-auto">
                {PROCESS.cta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
