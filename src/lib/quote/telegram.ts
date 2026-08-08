import type { QuotePayload } from "./schema";

export class TelegramConfigError extends Error {
  constructor(message = "Telegram credentials are not configured") {
    super(message);
    this.name = "TelegramConfigError";
  }
}

export class TelegramSendError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TelegramSendError";
  }
}

/** True when both server-only Telegram env vars are non-empty after trim. */
export function isTelegramConfigured(): boolean {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  return Boolean(token && chatId);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatQuoteMessage(payload: QuotePayload): string {
  const lines = [
    "<b>Ny forespørgsel</b>",
    "",
    `<b>Navn:</b> ${escapeHtml(payload.name)}`,
    `<b>Telefon:</b> ${escapeHtml(payload.phone)}`,
    `<b>E-mail:</b> ${escapeHtml(payload.email)}`,
    `<b>Jeg er:</b> ${escapeHtml(payload.who)}`,
    `<b>Opgave:</b> ${escapeHtml(payload.task)}`,
  ];
  if (payload.message) {
    lines.push("", `<b>Besked:</b>`, escapeHtml(payload.message));
  }
  return lines.join("\n");
}

export async function sendQuoteToTelegram(payload: QuotePayload): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    throw new TelegramConfigError();
  }

  let res: Response;
  try {
    res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatQuoteMessage(payload),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch {
    throw new TelegramSendError("Telegram network error");
  }

  let data: { ok?: boolean; description?: string } = {};
  try {
    data = (await res.json()) as { ok?: boolean; description?: string };
  } catch {
    if (!res.ok) {
      throw new TelegramSendError(`Telegram HTTP ${res.status}`);
    }
    throw new TelegramSendError("Telegram returned invalid JSON");
  }

  if (!res.ok || !data.ok) {
    throw new TelegramSendError(
      data.description ?? `Telegram HTTP ${res.status}`,
    );
  }
}
