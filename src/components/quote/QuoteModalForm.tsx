"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui";
import { homeCopy } from "@/lib/i18n/copy";
import { quoteFormSchema, type QuoteFormInput } from "@/lib/quote/schema";
import { cn } from "@/util/cn";

export const quoteInputClass =
  "h-11 w-full rounded-xl border border-line bg-white px-4 text-sm text-pine outline-none transition-colors placeholder:text-pine/40 focus:border-leaf";

const labelClass = "mb-1 block text-sm font-semibold";
const errorClass = "mt-1 text-xs text-red-700";

/* Quote modal fields — Figma #3023:1206, compacted to fit typical viewports. */
export function QuoteModalForm() {
  const QUOTE_FORM = homeCopy().QUOTE_FORM;
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormInput>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      who: QUOTE_FORM.whoOptions[0],
      task: "" as QuoteFormInput["task"],
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = (await res.json()) as { ok?: boolean; error?: string };
      } catch {
        /* non-JSON body — fall through on status */
      }

      if (res.ok && payload.ok !== false) {
        setSucceeded(true);
        return;
      }

      // Missing Telegram env (or other temporary unavailability)
      if (res.status === 503 || payload.error === "unavailable") {
        setSubmitError(QUOTE_FORM.errorUnavailable);
        return;
      }

      setSubmitError(QUOTE_FORM.errorGeneric);
    } catch {
      setSubmitError(QUOTE_FORM.errorGeneric);
    }
  });

  if (succeeded) {
    return (
      <div className="py-6 text-center text-pine">
        <p className="text-lg font-semibold">{QUOTE_FORM.successTitle}</p>
        <p className="mt-2 text-sm text-pine/70">{QUOTE_FORM.successBody}</p>
      </div>
    );
  }

  return (
    <form className="relative text-pine" onSubmit={onSubmit} noValidate>
      {/* Honeypot — hidden from users, filled by some bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        {...register("website")}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{QUOTE_FORM.fields.name}</span>
          <input
            type="text"
            autoComplete="name"
            className={quoteInputClass}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </label>
        <label className="block">
          <span className={labelClass}>{QUOTE_FORM.fields.phone}</span>
          <input
            type="tel"
            autoComplete="tel"
            className={quoteInputClass}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.fields.email}</span>
          <input
            type="email"
            autoComplete="email"
            className={quoteInputClass}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </label>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>{QUOTE_FORM.whoLabel}</legend>
          <div className="flex flex-wrap gap-3">
            {QUOTE_FORM.whoOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2.5 rounded-full border border-line px-5 py-2 text-sm font-medium text-pine/70 transition-colors has-checked:border-leaf has-checked:bg-leaf/10 has-checked:text-pine"
              >
                <input
                  type="radio"
                  value={option}
                  className="peer sr-only"
                  {...register("who")}
                />
                <span
                  aria-hidden
                  className="size-[14px] shrink-0 rounded-full border-2 border-line bg-white peer-checked:border-leaf peer-checked:bg-leaf"
                />
                {option}
              </label>
            ))}
          </div>
          {errors.who && <p className={errorClass}>{errors.who.message}</p>}
        </fieldset>

        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.taskLabel}</span>
          <div className="relative">
            <select
              className={cn(
                quoteInputClass,
                "appearance-none px-[17px] pr-10 text-[#a1a1a1] valid:text-pine",
              )}
              {...register("task")}
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
          {errors.task && <p className={errorClass}>{errors.task.message}</p>}
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.message}</span>
          <textarea
            className={cn(quoteInputClass, "h-20 resize-none py-2.5")}
            {...register("message")}
          />
          {errors.message && (
            <p className={errorClass}>{errors.message.message}</p>
          )}
        </label>

        <div className="sm:col-span-2">
          <span className={labelClass}>{QUOTE_FORM.upload}</span>
          <div className="flex h-14 items-center justify-center rounded-xl border border-dashed border-moss/40 bg-mist px-4 text-center text-sm text-pine/50">
            {QUOTE_FORM.uploadHint}
          </div>
        </div>
      </div>

      {submitError && (
        <p className="mt-3 text-center text-sm text-red-700" role="alert">
          {submitError}
        </p>
      )}

      <div className="mt-3">
        <Button
          type="submit"
          variant="leaf"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? QUOTE_FORM.sending : QUOTE_FORM.button}
        </Button>
      </div>
      <p className="mt-2 text-center text-xs text-pine/50">{QUOTE_FORM.micro}</p>
    </form>
  );
}
