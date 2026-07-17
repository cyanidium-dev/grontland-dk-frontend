"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/util/cn";

/* DA / EN toggle. usePathname is locale-stripped, so linking the same path
   with a target `locale` swaps language on the current page (slugs are shared
   across locales). */
export function LanguageSwitcher({ className }: { className?: string }) {
  const active = useLocale();
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1 text-[13px] font-semibold", className)}>
      {(["da", "en"] as const).map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-pine/30">/</span>}
          <Link
            href={pathname}
            locale={locale}
            aria-current={active === locale ? "true" : undefined}
            className={cn(
              "uppercase transition-colors",
              active === locale ? "text-leaf" : "text-pine/50 hover:text-pine",
            )}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
