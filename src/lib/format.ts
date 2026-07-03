import type { Locale } from "@/i18n/routing";

/** Formats an ISO month ("2025-05") as "mai 2025" / "May 2025". */
export function formatMonth(isoMonth: string, locale: Locale) {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));
}
