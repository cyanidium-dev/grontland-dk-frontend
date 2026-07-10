"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/util/cn";

export function QuoteModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const frame = requestAnimationFrame(() => {
      const firstField = panelRef.current?.querySelector<HTMLElement>(
        "input:not([type='radio']), select, textarea",
      );
      firstField?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={QUOTE_MODAL_LABEL}
        className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-[687px] overflow-y-auto rounded-[24px] bg-white p-8 text-pine shadow-md"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Luk"
          className="float-right -mt-1 mb-2 flex size-8 cursor-pointer items-center justify-center text-pine transition-opacity hover:opacity-70"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className={cn("clear-both")}>{children}</div>
      </div>
    </div>
  );
}

const QUOTE_MODAL_LABEL = "Få et tilbud på dit projekt";
