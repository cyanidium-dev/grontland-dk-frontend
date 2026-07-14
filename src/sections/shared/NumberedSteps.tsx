import { Container, Heading, Button, InfoBox } from "@/components/ui";
import type { InfoBoxVariant } from "@/components/ui";
import { cn } from "@/util/cn";

type StepStyle = { box: InfoBoxVariant; bordered: boolean; num: string; title: string; desc: string };

/* Same alternation as home Process: light/pine alternating, last card leaf. */
function stepStyle(i: number, last: boolean): StepStyle {
  if (last) {
    return { box: "leaf", bordered: false, num: "text-white", title: "text-white", desc: "text-white/80" };
  }
  if (i % 2 === 1) {
    return { box: "pine", bordered: false, num: "text-leaf", title: "text-white", desc: "text-white/65" };
  }
  return { box: "light", bordered: true, num: "text-leaf", title: "text-pine", desc: "text-pine/60" };
}

/* Numbered step cards in the home-Process card style, for shorter step lists
   (contact follow-up, B2B collaboration model). */
export function NumberedSteps({
  h2,
  intro,
  steps,
  cta,
  background = "white",
}: {
  h2: string;
  intro?: string;
  steps: readonly { title: string; desc: string }[];
  cta?: { label: string; href: string };
  background?: "white" | "mist";
}) {
  return (
    <section className={cn("py-16 xl:py-24", background === "mist" ? "bg-mist" : "bg-white")}>
      <Container>
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <Heading as="h2" size="section">
              {h2}
            </Heading>
            {intro && (
              <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">{intro}</p>
            )}
          </div>

          <ol
            className={cn(
              "grid gap-3 sm:grid-cols-2",
              steps.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4",
            )}
          >
            {steps.map((step, i) => {
              const s = stepStyle(i, i === steps.length - 1);
              return (
                <li key={step.title} className="h-full">
                  <InfoBox
                    variant={s.box}
                    className={cn(
                      "flex h-full flex-col rounded-[12px] px-5 py-6",
                      s.bordered && "border border-line",
                    )}
                  >
                    <span className={cn("font-display text-[32px] font-bold leading-none xl:text-[44px]", s.num)}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={cn("mt-4 text-[13px] font-bold uppercase leading-tight", s.title)}>
                      {step.title}
                    </h3>
                    <p className={cn("mt-2 text-sm font-light leading-relaxed", s.desc)}>{step.desc}</p>
                  </InfoBox>
                </li>
              );
            })}
          </ol>

          {cta && (
            <div>
              <Button href={cta.href} variant="leaf" size="md" className="w-full sm:w-auto">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
