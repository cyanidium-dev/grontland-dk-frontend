"use client";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui";
import { homeCopy } from "@/lib/i18n/copy";
import { cn } from "@/util/cn";

export const quoteInputClass =
  "h-11 w-full rounded-xl border border-line bg-white px-4 text-sm text-pine outline-none transition-colors placeholder:text-pine/40 focus:border-leaf";

const labelClass = "mb-1 block text-sm font-semibold";

/* Quote modal fields — Figma #3023:1206, compacted to fit typical viewports. */
export function QuoteModalForm() {
  const QUOTE_FORM = homeCopy(useLocale()).QUOTE_FORM;
  return (
    <form className="text-pine" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{QUOTE_FORM.fields.name}</span>
          <input type="text" className={quoteInputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>{QUOTE_FORM.fields.phone}</span>
          <input type="tel" className={quoteInputClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.fields.email}</span>
          <input type="email" className={quoteInputClass} />
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>{QUOTE_FORM.whoLabel}</legend>
          <div className="flex flex-wrap gap-3">
            {QUOTE_FORM.whoOptions.map((option, index) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2.5 rounded-full border border-line px-5 py-2 text-sm font-medium text-pine/70 transition-colors has-checked:border-leaf has-checked:bg-leaf/10 has-checked:text-pine"
              >
                <input
                  type="radio"
                  name="who"
                  value={option}
                  defaultChecked={index === 0}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className="size-[14px] shrink-0 rounded-full border-2 border-line bg-white peer-checked:border-leaf peer-checked:bg-leaf"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.taskLabel}</span>
          <div className="relative">
            <select
              required
              defaultValue=""
              className={cn(
                quoteInputClass,
                "appearance-none px-[17px] pr-10 text-[#a1a1a1] valid:text-pine",
              )}
            >
              <option value="" disabled>
                {QUOTE_FORM.taskPlaceholder}
              </option>
              {QUOTE_FORM.taskOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-moss"
            >
              ▾
            </span>
          </div>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.message}</span>
          <textarea className={cn(quoteInputClass, "h-20 resize-none py-2.5")} />
        </label>

        <div className="sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.upload}</span>
          <div className="flex h-14 items-center justify-center rounded-xl border border-dashed border-moss/40 bg-mist px-4 text-center text-sm text-pine/50">
            {QUOTE_FORM.uploadHint}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Button type="submit" variant="leaf" className="w-full">
          {QUOTE_FORM.button}
        </Button>
      </div>
      <p className="mt-2 text-center text-xs text-pine/50">{QUOTE_FORM.micro}</p>
    </form>
  );
}
