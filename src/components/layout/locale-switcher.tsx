"use client";

import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("locale");

  const target = locale === "pt" ? "en" : "pt";

  return (
    <Button
      variant="ghost"
      size="sm"
      className="font-mono"
      aria-label={`${t("label")}: ${t(target)}`}
      render={<Link href={pathname} locale={target} />}
    >
      <GlobeIcon />
      {target.toUpperCase()}
    </Button>
  );
}
