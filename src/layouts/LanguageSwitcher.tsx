"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";

import { ChevronIcon } from "@/components/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/util/cn";

/* Native <details> dropdown language switch — ported from the code-site
   header switcher, recolored to Grønt Land tokens (pine/leaf/moss/line).
   usePathname is locale-stripped, so linking the same path with a target
   `locale` swaps language on the current page (slugs are shared). Closes on
   route change, outside click and Escape. */

type LocaleDef = { key: "da" | "en"; short: string; full: string };
const LOCALES: readonly LocaleDef[] = [
  { key: "da", short: "DA", full: "Dansk" },
  { key: "en", short: "EN", full: "English" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const active = useLocale();
  const pathname = usePathname();
  const current = LOCALES.find((l) => l.key === active) ?? LOCALES[0];

  // Close on route change (covers the switch we trigger ourselves).
  useEffect(() => {
    ref.current?.removeAttribute("open");
  }, [pathname]);

  // Close on outside pointer + Escape.
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.open) return;
      if (ref.current.contains(e.target as Node)) return;
      ref.current.removeAttribute("open");
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") ref.current?.removeAttribute("open");
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details ref={ref} className={cn("group/locale relative", className)}>
      <summary
        aria-label="Skift sprog"
        className="flex min-h-11 cursor-pointer list-none items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-pine/70 transition-colors hover:text-pine group-open/locale:text-pine [&::-webkit-details-marker]:hidden"
      >
        {current.short}
        <ChevronIcon className="mt-0.5 text-leaf transition-transform duration-200 group-open/locale:rotate-180" />
      </summary>
      <div
        role="menu"
        aria-label="Skift sprog"
        className="absolute right-0 top-[calc(100%+12px)] z-50 flex min-w-[140px] flex-col gap-0.5 rounded-2xl border border-line bg-white p-2 shadow-[0_12px_40px_rgba(31,61,46,0.14)]"
      >
        {LOCALES.map((l) => {
          const isActive = l.key === active;
          return (
            <Link
              key={l.key}
              href={pathname}
              locale={l.key}
              role="menuitemradio"
              aria-checked={isActive}
              onClick={() => ref.current?.removeAttribute("open")}
              className={cn(
                "flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors",
                isActive
                  ? "bg-leaf/12 text-moss"
                  : "text-pine hover:bg-mist hover:text-leaf",
              )}
            >
              <span>{l.full}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-70">
                {l.short}
              </span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
