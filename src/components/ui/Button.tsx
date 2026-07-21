import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

import { cn } from "@/util/cn";
import { ArrowIcon } from "@/components/icons";

export type ButtonVariant = "leaf" | "pine" | "black" | "white" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  leaf: "bg-leaf text-white",
  pine: "bg-pine text-white",
  black: "bg-black text-white", // #201F23 — primary CTA in the design
  white: "bg-white text-pine",
  // Opaque on purpose: both usages sit over the ring decor, and a transparent
  // fill let it show through. White reads correctly on the white and mist
  // bands alike (same convention as InfoBox's bordered white boxes on mist).
  outline: "border border-pine/25 bg-white text-pine hover:border-pine",
};

// md = the Figma hero button (50px, 12px upper). sm = header CTA (42px, 14px).
const SIZES: Record<ButtonSize, string> = {
  sm: "h-[42px] px-5 text-[14px]",
  md: "h-[50px] px-8 text-[12px]",
  lg: "h-[56px] px-10 text-[13px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

type AsLink = CommonProps & {
  href: string;
};

export type ButtonProps = AsButton | AsLink;

function useClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
  return cn(
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-bold uppercase leading-[20px] transition duration-300 ease-in-out will-change-transform active:scale-[0.98] focus-visible:brightness-110 xl:hover:brightness-110",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

function Arrow() {
  return (
    <ArrowIcon className="h-[13px] w-[15px] transition-transform duration-300 ease-in-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "leaf",
    size = "md",
    withArrow = false,
    className = "",
    children,
  } = props;
  const classes = useClasses(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        {withArrow && <Arrow />}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cn("cursor-pointer", classes)}
    >
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
