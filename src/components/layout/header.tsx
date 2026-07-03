"use client";

import { DownloadIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";

const NAV_KEYS = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

function CvDropdown({ label }: { label: string }) {
  const t = useTranslations("nav");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm">
            <DownloadIcon />
            {label}
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem
          render={<a href={siteConfig.cv.pt} download />}
        >
          {t("cvPt")}
        </DropdownMenuItem>
        <DropdownMenuItem
          render={<a href={siteConfig.cv.en} download />}
        >
          {t("cvEn")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-primary">~/</span>
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={`/#${key}`}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <CvDropdown label={t("downloadCv")} />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label={t("menu")}>
                  <MenuIcon />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-mono text-sm">
                  <span className="text-primary">~/</span>
                  {siteConfig.shortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {NAV_KEYS.map((key) => (
                  <Link
                    key={key}
                    href={`/#${key}`}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 flex flex-col gap-2 border-t border-border/60 px-7 pt-4 pb-6">
                <p className="text-xs text-muted-foreground">
                  {t("downloadCv")}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    render={<a href={siteConfig.cv.pt} download />}
                  >
                    <DownloadIcon /> PT
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    render={<a href={siteConfig.cv.en} download />}
                  >
                    <DownloadIcon /> EN
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
