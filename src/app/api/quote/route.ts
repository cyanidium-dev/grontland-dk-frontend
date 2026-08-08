import { NextResponse } from "next/server";

import { quoteFormSchema } from "@/lib/quote/schema";
import {
  isTelegramConfigured,
  sendQuoteToTelegram,
  TelegramConfigError,
  TelegramSendError,
} from "@/lib/quote/telegram";

function isConfigError(err: unknown): boolean {
  return (
    err instanceof TelegramConfigError ||
    (err instanceof Error && err.name === "TelegramConfigError")
  );
}

function isSendError(err: unknown): boolean {
  return (
    err instanceof TelegramSendError ||
    (err instanceof Error && err.name === "TelegramSendError")
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = quoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const { website, ...payload } = parsed.data;

  // Honeypot: pretend success so bots do not retry.
  if (website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Missing / blank TELEGRAM_* — pages still render; submit gets a clear 503.
  if (!isTelegramConfigured()) {
    console.warn("[api/quote] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  try {
    await sendQuoteToTelegram(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (isConfigError(err)) {
      console.warn("[api/quote] Telegram credentials missing at send time");
      return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
    }
    if (isSendError(err)) {
      console.error("[api/quote] Telegram delivery failed");
      return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
    }
    console.error("[api/quote] Unexpected error");
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }
}
