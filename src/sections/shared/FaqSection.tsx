"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { Container } from "@/components/ui";
import { StarIcon, ChevronIcon } from "@/components/icons";
import { cn } from "@/util/cn";

/* Unified FAQ (Figma 3067:72). One block for home, private and service pages:
   leaf pill banner + star cluster, native <details> accordion, ring decor.

   The list is capped and reveals the rest behind a Show more / Show less
   toggle. INITIAL_VISIBLE matches the design's six visible rows; MIN_HIDDEN
   keeps us from ever hiding a single item (confusing) — with the real content
   counts (home 6, services 4–5, private 9) only private crosses the threshold.

   Decor: the rings are pinned to the *folded* list, measured once, so opening
   items never drags them (the old percentage inset did). The second ring is
   only rendered when the list is collapsible, mirroring the private-reviews
   bottom-left placement. */
const INITIAL_VISIBLE = 6;
const MIN_HIDDEN = 2;
const ITEM_H = 65; // one <details> row (px)
const ITEM_GAP = 12; // gap-3 between rows (px)

const LABELS: Record<string, { more: string; less: string }> = {
  da: { more: "Vis flere spørgsmål", less: "Vis færre" },
  en: { more: "Show more questions", less: "Show less" },
};

export function FaqSection({
  h2,
  items,
  locale,
}: {
  h2: string;
  items: readonly { q: string; a: string }[];
  locale: string;
}) {
  const collapsible = items.length - INITIAL_VISIBLE >= MIN_HIDDEN;
  const foldedCount = collapsible ? INITIAL_VISIBLE : items.length;

  const [expanded, setExpanded] = useState(false);
  const visible = expanded || !collapsible ? items : items.slice(0, INITIAL_VISIBLE);

  // Freeze the decor at the folded-list geometry. listRef.top and foldedCount
  // are both independent of `expanded`, so this measures once and stays put.
  const listRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [decorTop, setDecorTop] = useState<{ right: number; left: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const section = sectionRef.current;
      if (!list || !section) return;
      const listTop = list.getBoundingClientRect().top - section.getBoundingClientRect().top;
      const bottom = (count: number) => listTop + count * ITEM_H + (count - 1) * ITEM_GAP;
      // Right ring is pinned to the folded list (never moves on open); the right
      // offset reproduces the home block's bounding-top (rotation expands the box
      // upward, so this is the element top, not the visual top). The left ring is
      // only shown while open, so it anchors to the *expanded* list's bottom-left.
      setDecorTop({ right: bottom(foldedCount) - 257, left: bottom(items.length) - 185 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [foldedCount, items.length]);

  const labels = LABELS[locale] ?? LABELS.da;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip pb-10 pt-16 xl:min-h-[765px] xl:pb-[91px] xl:pt-[68px]"
    >
      {/* Right-hand ring (home #3023:1099) — pinned to the folded list. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/decor-rings-faq.svg"
          alt=""
          className="absolute left-[1095px] h-[393px] w-[324px] max-w-none origin-center rotate-[117.04deg] opacity-90"
          style={{ top: decorTop ? decorTop.right : "50%" }}
        />
        {/* Second ring, bottom-left — only while the list is open, anchored to
            the expanded list's bottom-left corner (mirrors private-reviews). */}
        {expanded && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/svg/decor-rings.svg"
            alt=""
            className="absolute left-[calc(50%-676px)] h-[294px] w-[242px] max-w-none rotate-[51.76deg]"
            style={{ top: decorTop ? decorTop.left : undefined }}
          />
        )}
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-10">
          <div className="relative overflow-hidden rounded-full bg-leaf px-6 py-6 xl:px-11 xl:py-10">
            <h2 className="font-display text-[18px] font-bold uppercase leading-[1.2] text-white xl:text-[40px] xl:leading-[48px]">
              {h2}
            </h2>
            <StarIcon className="absolute -bottom-3 right-[88px] hidden size-[44px] text-white/40 xl:block xl:-bottom-8 xl:right-[180px] xl:size-[90px]" />
            <StarIcon className="absolute right-[64px] top-0 hidden size-[30px] text-white/40 xl:block xl:right-[130px] xl:size-[60px]" />
            <StarIcon className="absolute -top-2 right-[8px] hidden size-[50px] text-white/40 xl:-top-5 xl:right-[10px] xl:block xl:size-[110px]" />
            <StarIcon className="absolute -right-1 bottom-0 hidden size-[28px] text-white/40 xl:block xl:size-[60px]" />
          </div>

          <div ref={listRef} className="flex flex-col gap-3">
            {visible.map((item) => (
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

          {collapsible && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group mx-auto flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.3px] text-moss transition-colors hover:text-leaf"
            >
              {expanded ? labels.less : labels.more}
              <ChevronIcon
                className={cn("transition-transform duration-200", expanded && "rotate-180")}
              />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
