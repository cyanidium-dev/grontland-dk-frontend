import { z } from "zod";

import { QUOTE_FORM } from "@/constants/home";

const whoOptions = QUOTE_FORM.whoOptions;
const taskOptions = QUOTE_FORM.taskOptions;

export const quoteFormSchema = z.object({
  name: z.string().trim().min(1, "Angiv dit navn"),
  phone: z.string().trim().min(1, "Angiv dit telefonnummer"),
  email: z.email("Angiv en gyldig e-mail"),
  who: z.enum(whoOptions, { error: "Vælg hvem du er" }),
  task: z.enum(taskOptions, { error: "Vælg opgavetype" }),
  message: z.string().trim().max(2000, "Beskeden er for lang"),
  /** Honeypot — bots fill this; route returns 200 without sending. */
  website: z.string(),
});

export type QuoteFormInput = z.infer<typeof quoteFormSchema>;

/** Payload after honeypot strip — what Telegram receives. */
export type QuotePayload = Omit<QuoteFormInput, "website">;
