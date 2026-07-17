"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/util/cn";

export type HeroProjectCard = {
  label: string;
  image: { src: string; alt: string };
  caption: string;
  href: string;
};

/* Glass "PROJEKT" link card overlaid on the hero (thumbnail + label + caption).
   Navigation is suppressed after a drag (see onClickCapture in the strip). */
function ProjectCard({ card }: { card: HeroProjectCard }) {
  return (
    <Link
      href={card.href}
      draggable={false}
      className="glass flex w-[310px] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-[18px] bg-white/17 p-2.5 transition-colors hover:bg-white/25"
    >
      <div className="relative h-[107px] w-[98px] shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          className="pointer-events-none object-cover"
          sizes="98px"
          draggable={false}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[12px] font-bold uppercase leading-none text-white">{card.label}</p>
        <p className="mt-1.5 text-[11px] font-light leading-snug text-white/85">{card.caption}</p>
      </div>
    </Link>
  );
}

/**
 * Horizontally scrollable, infinitely looped strip of hero project cards.
 * Touch/trackpad use native overflow scroll; mouse gets click-drag. No buttons.
 * The list is tripled and the scroll position wraps within the middle copy so
 * the loop is seamless in both directions. Zero dependencies.
 */
export function HeroProjectCards({
  cards,
  className = "",
}: {
  cards: readonly HeroProjectCard[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const moved = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const loop = [...cards, ...cards, ...cards];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start in the middle copy so there's room to scroll either way.
    const center = () => {
      el.scrollLeft = el.scrollWidth / 3;
    };
    center();

    // Keep the scroll position inside the middle copy for a seamless loop.
    const onScroll = () => {
      const setW = el.scrollWidth / 3;
      if (setW <= 0) return;
      if (el.scrollLeft < setW) {
        el.scrollLeft += setW;
        startScroll.current += setW;
      } else if (el.scrollLeft >= setW * 2) {
        el.scrollLeft -= setW;
        startScroll.current -= setW;
      }
    };

    const onResize = () => center();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [cards.length]);

  // Mouse click-drag (touch/trackpad already scroll natively).
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      /* no active pointer (e.g. synthetic events) — safe to ignore */
    }
    e.preventDefault();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const el = ref.current;
    if (!el) return;
    if (Math.abs(e.clientX - startX.current) > 6) moved.current = true;
    el.scrollLeft = startScroll.current - (e.clientX - startX.current);
  };

  // Cards are links: swallow the click that ends a drag so navigation only
  // happens on a genuine (non-drag) click.
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    try {
      ref.current?.releasePointerCapture?.(e.pointerId);
    } catch {
      /* pointer may not be captured — safe to ignore */
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
      className={cn(
        "no-scrollbar flex gap-4 overflow-x-auto [touch-action:pan-x] select-none cursor-grab active:cursor-grabbing",
        className,
      )}
      aria-label="Udvalgte projekter"
    >
      {loop.map((card, i) => (
        <div key={i} className="shrink-0" aria-hidden={i >= cards.length}>
          <ProjectCard card={card} />
        </div>
      ))}
    </div>
  );
}
