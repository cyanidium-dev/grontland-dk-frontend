import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

/** Merge Tailwind class strings, resolving conflicts (last wins). */
export function cn(...classes: ClassNameValue[]): string {
  return twMerge(classes);
}
