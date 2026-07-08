import { Container } from "@/components/ui";
import { StarIcon, ChevronIcon } from "@/components/icons";
import { FAQ } from "@/constants/home";

/* "Ofte stillede spørgsmål" — leaf banner with a star cluster, then a native
   <details> accordion (no client JS; chevron rotates via group-open). */
export function Faq() {
  return (
    <section className="pb-10 pt-16 xl:pt-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-8 overflow-hidden rounded-[28px] bg-leaf px-6 py-6 xl:mb-10 xl:px-11 xl:py-10">
            <h2 className="font-display text-[18px] font-bold uppercase leading-[1.2] text-white xl:text-[40px]">
              {FAQ.h2}
            </h2>
            <StarIcon className="absolute -bottom-3 right-[88px] size-[44px] text-white/40 xl:-bottom-8 xl:right-[180px] xl:size-[90px]" />
            <StarIcon className="absolute right-[64px] top-0 size-[30px] text-white/40 xl:right-[130px] xl:size-[60px]" />
            <StarIcon className="absolute -top-2 right-[8px] size-[50px] text-white/40 xl:-top-5 xl:right-[10px] xl:size-[110px]" />
            <StarIcon className="absolute -right-1 bottom-0 size-[28px] text-white/40 xl:size-[60px]" />
          </div>

          <div className="space-y-3">
            {FAQ.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white px-6 py-1"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[14px] font-bold uppercase text-pine">
                  {item.q}
                  <ChevronIcon className="text-leaf transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-sm font-light leading-relaxed text-pine/60">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
