"use client";

import { useLocale } from "next-intl";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/navigation";

import { cn } from "@/util/cn";
import { OpenQuoteButton } from "@/components/quote";
import { ChevronIcon } from "@/components/icons";
import { homeCopy } from "@/lib/i18n/copy";
import { LanguageSwitcher } from "./LanguageSwitcher";

/* Mobile/tablet nav (below xl). Morphing burger↔X button + drawer under the
   sticky header with a collapsible "Ydelser" accordion. Pure Tailwind
   transitions (no framer-motion); closes on Escape / link tap. The drawer is
   portalled to <body> so the header's backdrop-blur (a containing block)
   doesn't trap the fixed positioning. Background scroll is locked via event
   handlers rather than overflow/position, which would disable the sticky
   header; the drawer's own <nav> scrolls internally. */
export function MobileMenu() {
  const locale = useLocale();
  const c = homeCopy(locale);
  const en = locale === "en";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Hydration-safe "are we on the client?" check so the portal only renders
  // in the browser (createPortal needs document.body).
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;

    // Lock background scroll WITHOUT touching overflow/position on html/body:
    // both disable the header's `position: sticky`, shifting it off-screen and
    // taking the close button with it. Instead we swallow scroll gestures that
    // originate outside the drawer's scroll area.
    const inDrawer = (target: EventTarget | null) => {
      const nav = document.querySelector('[aria-label="Mobilmenu"]');
      return !!(nav && target instanceof Node && nav.contains(target));
    };

    const preventScroll = (e: Event) => {
      if (inDrawer(e.target)) return;
      e.preventDefault();
    };

    const SCROLL_KEYS = new Set([
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
    ]);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (SCROLL_KEYS.has(e.key) && !inDrawer(document.activeElement)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const [homeItem, ...restNav] = c.NAV_MENU;

  const drawer = (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 top-[72px] z-40 bg-white transition-all duration-300 ease-in-out xl:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav
        aria-label="Mobilmenu"
        className="mx-auto flex h-full max-w-7xl flex-col overflow-y-auto overscroll-contain px-6 pb-6 pt-4"
      >
        <ul className="flex flex-col">
          <li>
            <Link
              href={homeItem.href}
              onClick={close}
              className="block border-b border-line py-3 text-[15px] font-bold uppercase leading-tight text-pine transition-colors hover:text-leaf"
            >
              {homeItem.label}
            </Link>
          </li>

          <li className="border-b border-line">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between py-3 text-[15px] font-bold uppercase leading-tight text-pine transition-colors hover:text-leaf"
            >
              {en ? "Services" : "Ydelser"}
              <ChevronIcon
                className={cn(
                  "size-4 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                servicesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <ul className="overflow-hidden">
                {c.SERVICES_MENU.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-3 pl-3 text-[14px] font-medium text-pine/80 transition-colors hover:text-leaf"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {restNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="block border-b border-line py-3 text-[15px] font-bold uppercase leading-tight text-pine transition-colors hover:text-leaf"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <OpenQuoteButton
          variant="black"
          size="sm"
          onOpen={close}
          className="mt-5 w-full font-semibold normal-case"
        >
          {en ? "Get a quote" : "Få et tilbud"}
        </OpenQuoteButton>

        <LanguageSwitcher className="mt-5 justify-center" />
      </nav>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? (en ? "Close menu" : "Luk menu") : (en ? "Open menu" : "Åbn menu")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-60 flex size-11 items-center justify-center outline-none"
      >
        <span className="relative block h-4 w-6">
          <span
            className={cn(
              "absolute left-0 h-[2px] w-full rounded-full bg-pine transition-all duration-300 ease-in-out",
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-pine transition-all duration-300 ease-in-out",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-[2px] w-full rounded-full bg-pine transition-all duration-300 ease-in-out",
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
            )}
          />
        </span>
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
