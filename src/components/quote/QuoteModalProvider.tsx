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

    document.body.classList.add("no-doc-scroll");
    return () => document.body.classList.remove("no-doc-scroll");
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
