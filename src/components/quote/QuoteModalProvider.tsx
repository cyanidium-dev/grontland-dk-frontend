"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { Backdrop } from "@/components/gallery/Backdrop";

import { QuoteModal } from "./QuoteModal";
import { QuoteModalForm } from "./QuoteModalForm";

type QuoteModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    html.classList.add("no-doc-scroll");
    document.body.classList.add("no-doc-scroll");

    // Swallow scroll gestures outside the dialog (overflow:hidden alone can
    // fail when html also has overflow-x: clip).
    const inDialog = (target: EventTarget | null) => {
      const dialog = document.querySelector('[role="dialog"][aria-modal="true"]');
      return !!(dialog && target instanceof Node && dialog.contains(target));
    };

    const preventScroll = (e: Event) => {
      if (inDialog(e.target)) return;
      e.preventDefault();
    };

    const onKey = (e: KeyboardEvent) => {
      if (!SCROLL_KEYS.has(e.key)) return;
      if (inDialog(document.activeElement)) return;
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      html.classList.remove("no-doc-scroll");
      document.body.classList.remove("no-doc-scroll");
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <Backdrop isOpen={isOpen} onClose={close} />
      <QuoteModal isOpen={isOpen} onClose={close}>
        <QuoteModalForm />
      </QuoteModal>
    </QuoteModalContext.Provider>
  );
}
