"use client";

import { useId, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

import { cn } from "@/util/cn";
import { ChevronIcon } from "@/components/icons";

export type DropdownItem = { label: string; href: string };

/** Hover/click nav dropdown (e.g. "Ydelser ▾"). Closes on blur/leave. */
export function Dropdown({
  label,
  items,
  className = "",
}: {
  label: string;
  items: DropdownItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 text-[14px] font-medium leading-[20px] text-pine transition-colors hover:text-leaf"
      >
        {label}
        <ChevronIcon
          className={cn("mt-0.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          id={menuId}
          className="absolute left-0 top-full z-50 mt-3 min-w-56 rounded-2xl border border-line bg-white p-2 shadow-[0_12px_40px_rgba(31,61,46,0.14)]"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-pine transition-colors hover:bg-mist hover:text-leaf"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
