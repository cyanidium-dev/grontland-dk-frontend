import { Container, Heading } from "@/components/ui";
import { ChevronIcon } from "@/components/icons";

/* Compact FAQ accordion — same native <details> styling as the home Faq,
   without the leaf banner/decor (inner pages). */
export function FaqList({
  h2,
  items,
}: {
  h2: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <section className="bg-white py-16 xl:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading as="h2" size="section">
            {h2}
          </Heading>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white px-[25px] py-[5px]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[14px] font-bold uppercase leading-[21px] text-pine">
                  {item.q}
                  <ChevronIcon className="shrink-0 text-leaf transition-transform duration-200 group-open:rotate-180" />
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
