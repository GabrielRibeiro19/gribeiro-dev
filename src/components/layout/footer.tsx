import { getTranslations } from "next-intl/server";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <p>
            {t("builtWith")}{" "}
            <a
              href={`${siteConfig.github}/gribeiro-dev`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              GitHub
            </a>
          </p>
          <span aria-hidden className="text-border">
            |
          </span>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
