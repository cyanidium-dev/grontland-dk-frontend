import { Container, Heading, InfoBox } from "@/components/ui";
import { cn } from "@/util/cn";

/* Titled card grid for benefit/value/scenario lists. Boxes invert against the
   band background: mist boxes on white, bordered white boxes on mist. */
export function FeatureGrid({
  h2,
  intro,
  items,
  background = "white",
  columns = 3,
}: {
  h2: string;
  intro?: string;
  items: readonly { title: string; desc: string }[];
  background?: "white" | "mist";
  columns?: 2 | 3 | 4;
}) {
  const onMist = background === "mist";

  return (
    <section className={cn("py-16 xl:py-24", onMist ? "bg-mist" : "bg-white")}>
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

          <ul
            className={cn(
              "grid gap-3 sm:grid-cols-2",
              columns === 2 && "xl:grid-cols-2",
              columns === 3 && "xl:grid-cols-3",
              columns === 4 && "xl:grid-cols-4",
            )}
          >
            {items.map((item) => (
              <li key={item.title} className="h-full">
                <InfoBox
                  variant={onMist ? "light" : "mist"}
                  className={cn("flex h-full flex-col rounded-[12px] px-5 py-6", onMist && "border border-line")}
                >
                  <h3 className="text-[13px] font-bold uppercase leading-tight text-pine">{item.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-pine/60">{item.desc}</p>
                </InfoBox>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
