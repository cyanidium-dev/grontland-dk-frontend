import { Container, Button } from "@/components/ui";
import { PROCESS } from "@/constants/home";

/* SHELL — "Sådan foregår arbejdet": 5 numbered steps + closing CTA. */
export function Process() {
  return (
    <section className="bg-pine py-16 text-white xl:py-24">
      <Container>
        <h2 className="mb-10 font-display text-[28px] font-bold uppercase leading-none xl:mb-16 xl:text-[52px]">
          {PROCESS.h2}
        </h2>

        <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {PROCESS.steps.map((step, i) => (
            <li key={step.title} className="rounded-[16px] bg-white/[0.06] p-5">
              <span className="mb-4 block font-display text-[32px] font-bold leading-none text-leaf">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-[15px] font-bold uppercase leading-tight">{step.title}</h3>
              <p className="text-sm font-light leading-relaxed text-white/70">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href={PROCESS.cta.href} variant="leaf" size="lg" withArrow>
            {PROCESS.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
