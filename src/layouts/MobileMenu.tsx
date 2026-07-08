"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import { cn } from "@/util/cn";
import { Button } from "@/components/ui";
import { ChevronIcon } from "@/components/icons";
import { NAV_MENU, SERVICES_MENU } from "@/constants/home";

/* Mobile/tablet nav (below xl). Morphing burger↔X button + full-screen drawer
   with a collapsible "Ydelser" accordion. Pure Tailwind transitions (no
   framer-motion); body scroll locked and closes on Escape / link tap. The
   drawer is portalled to <body> so the header's backdrop-blur (a containing
   block) doesn't trap the fixed positioning. */
export function MobileMenu() {
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
    const html = document.documentElement;
    const scrollY = window.scrollY;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    // iOS Safari ignores overflow:hidden alone — pin body at current scroll.
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const preventTouch = (e: TouchEvent) => {
      const nav = document.querySelector('[aria-label="Mobilmenu"]');
      if (nav?.contains(e.target as Node)) return;
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventTouch, { passive: false });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
      document.removeEventListener("touchmove", preventTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const restNav = NAV_MENU.filter((i) => i.href !== "/");

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
              href="/"
              onClick={close}
              className="block border-b border-line py-3 text-[15px] font-bold uppercase leading-tight text-pine transition-colors hover:text-leaf"
            >
              Forside
            </Link>
          </li>

          <li className="border-b border-line">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between py-3 text-[15px] font-bold uppercase leading-tight text-pine transition-colors hover:text-leaf"
            >
              Ydelser
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
                {SERVICES_MENU.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-1.5 pl-3 text-[14px] font-medium text-pine/80 transition-colors hover:text-leaf"
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

        <Button
          href="/kontakt"
          variant="black"
          size="sm"
          className="mt-5 w-full font-semibold normal-case"
        >
          Få et tilbud
        </Button>
      </nav>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Luk menu" : "Åbn menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-60 flex size-10 items-center justify-center outline-none"
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
