import { Container } from "@/components/ui";
import { StarIcon, ChevronIcon } from "@/components/icons";
import { FAQ } from "@/constants/home";

/* Faq — Figma #3023:1098. Full-width leaf pill banner + star cluster, native
   <details> accordion, ring decor #3023:1099 (rotate 117.04°) bottom-right. */
export function Faq() {
  return (
    <section className="relative overflow-x-clip pb-10 pt-16 xl:min-h-[765px] xl:pb-[91px] xl:pt-[68px]">
      {/* Ring decor #3023:1099 — AABB inset from MCP; CSS rotate (not in SVG) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[50.2%_-7.56%_-10.93%_68.91%] z-0 hidden items-center justify-center xl:flex"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/decor-rings-faq.svg"
          alt=""
          className="h-[393px] w-[324px] max-w-none shrink-0 origin-center rotate-[117.04deg] opacity-90"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-full bg-leaf px-6 py-6 xl:px-11 xl:py-10">
            <h2 className="font-display text-[18px] font-bold uppercase leading-[1.2] text-white xl:text-[40px] xl:leading-[48px]">
              {FAQ.h2}
            </h2>
            <StarIcon className="absolute -bottom-3 right-[88px] hidden size-[44px] text-white/40 xl:block xl:-bottom-8 xl:right-[180px] xl:size-[90px]" />
            <StarIcon className="absolute right-[64px] top-0 hidden size-[30px] text-white/40 xl:block xl:right-[130px] xl:size-[60px]" />
            <StarIcon className="absolute -top-2 right-[8px] hidden size-[50px] text-white/40 xl:-top-5 xl:right-[10px] xl:block xl:size-[110px]" />
            <StarIcon className="absolute -right-1 bottom-0 hidden size-[28px] text-white/40 xl:block xl:size-[60px]" />
          </div>

          <div className="flex flex-col gap-3">
            {FAQ.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white px-[25px] py-[5px]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[14px] font-bold uppercase leading-[21px] text-pine">
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
