"use client";

import { Button, type ButtonProps } from "@/components/ui";

import { useQuoteModal } from "./QuoteModalProvider";

type OpenQuoteButtonProps = Omit<Extract<ButtonProps, { href?: undefined }>, "onClick" | "type"> & {
  onOpen?: () => void;
};

/** Client CTA that opens the quote modal instead of navigating away. */
export function OpenQuoteButton({ onOpen, ...props }: OpenQuoteButtonProps) {
  const { open } = useQuoteModal();

  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        onOpen?.();
        open();
      }}
    />
  );
}
