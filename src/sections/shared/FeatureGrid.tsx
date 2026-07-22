import type { CSSProperties, ReactNode } from "react";

import { Container, Heading, InfoBox } from "@/components/ui";
import { cn } from "@/util/cn";

/* Accent palette — Figma 3067:181 (leaf) / :197 (black) / :213 (mist), cycled
   by card index. The fade ellipse is painted in the card's own colour on top of
   the stars, which is what softens the cluster out toward the middle. */
const ACCENT_VARIANTS = [
  { surface: "bg-leaf text-white", star: "text-[#99ca6d]", fade: "bg-leaf" },
  { surface: "bg-black text-white", star: "text-[#3c3a43]", fade: "bg-black" },
  { surface: "bg-mist text-pine", star: "text-[#dcecdc]", fade: "bg-mist" },
] as const;

/* 3x3 lattice bleeding off the top-right corner (40px column pitch, each row
   stepped 21px left / 28px down) plus one stray star. Offsets are measured from
   the card's right edge so they survive a change in card width; the ones that
   land past the edge are clipped. Figma 3067:182-191. */
const STARS: readonly { right: number; top: number }[] = [
  { right: 66, top: 0 },
  { right: 26, top: 0 },
  { right: -14, top: 0 },
  { right: 45, top: 28 },
  { right: 5, top: 28 },
  { right: -35, top: 28 },
  { right: 24, top: 60 },
  { right: -16, top: 60 },
  { right: -56, top: 60 },
  { right: -44, top: 33 },
];

const STAR_PATH =
  "M14 0C14.7 7.46667 20.5333 13.3 28 14C20.5333 14.7 14.7 20.5333 14 28C13.3 20.5333 7.46667 14.7 0 14C7.46667 13.3 13.3 7.46667 14 0Z";

function StarCluster({ variant }: { variant: (typeof ACCENT_VARIANTS)[number] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {STARS.map((star, i) => (
        <svg
          key={i}
          viewBox="0 0 28 28"
          className={cn("absolute size-7", variant.star)}
          style={{ right: star.right, top: star.top } as CSSProperties}
        >
          <path fill="currentColor" d={STAR_PATH} />
        </svg>
      ))}
      <div
        className={cn(
          "absolute right-6 top-[9px] h-[163px] w-[188px] rounded-full blur-[26px]",
          variant.fade,
        )}
      />
    </div>
  );
}

function AccentCard({ item, index }: { item: { title: string; desc: string }; index: number }) {
  const variant = ACCENT_VARIANTS[index % ACCENT_VARIANTS.length];
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[14px] py-6 pl-6 pr-[34px]",
        variant.surface,
      )}
    >
      <StarCluster variant={variant} />
      <div className="relative">
        <h3 className="text-[24px] font-bold uppercase leading-8">{item.title}</h3>
        <p className="mt-6 text-sm font-light leading-[22.75px]">{item.desc}</p>
      </div>
    </div>
  );
}

/* Titled card grid for benefit/value/scenario lists. Boxes invert against the
   band background: mist boxes on white, bordered white boxes on mist.
   `cardStyle="accent"` swaps in the coloured Figma cards; `decor` renders behind
   the content, `headerAside` sits opposite the heading. */
export function FeatureGrid({
  h2,
  intro,
  items,
  background = "white",
  columns = 3,
  cardStyle = "plain",
  decor,
  headerAside,
}: {
  h2: string;
  intro?: string;
  items: readonly { title: string; desc: string }[];
  background?: "white" | "mist";
  columns?: 2 | 3 | 4;
  cardStyle?: "plain" | "accent";
  decor?: ReactNode;
  headerAside?: ReactNode;
}) {
  const onMist = background === "mist";
  const accent = cardStyle === "accent";

  const header = (
    <div className="max-w-2xl">
      <Heading as="h2" size="section">
        {h2}
      </Heading>
      {intro && (
        <p className="mt-4 font-light leading-normal text-pine/70 xl:text-[17px]">{intro}</p>
      )}
    </div>
  );

  return (
    <section
      className={cn(
        "py-16 xl:py-24",
        onMist ? "bg-mist" : "bg-white",
        // x-clip (not hidden): sideways decor bleed must not scroll, but
        // vertical bleed is part of the design and must never be cut.
        decor && "relative overflow-x-clip",
      )}
    >
      {decor}
      <Container className={cn(decor && "relative z-10")}>
        <div className="flex flex-col gap-10">
          {headerAside ? (
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between xl:gap-10">
              {header}
              {headerAside}
            </div>
          ) : (
            header
          )}

          <ul
            className={cn(
              "grid gap-3 sm:grid-cols-2",
              columns === 2 && "xl:grid-cols-2",
              columns === 3 && "xl:grid-cols-3",
              columns === 4 && "xl:grid-cols-4",
            )}
          >
            {items.map((item, i) => (
              <li key={item.title} className="h-full">
                {accent ? (
                  <AccentCard item={item} index={i} />
                ) : (
                  <InfoBox
                    variant={onMist ? "light" : "mist"}
                    className={cn(
                      "flex h-full flex-col rounded-[12px] px-5 py-6",
                      onMist && "border border-line",
                    )}
                  >
                    <h3 className="text-[13px] font-bold uppercase leading-tight text-pine">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-pine/60">
                      {item.desc}
                    </p>
                  </InfoBox>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
