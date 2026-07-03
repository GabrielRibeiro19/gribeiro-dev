import { MailIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute bottom-[-40%] left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            <span aria-hidden>{"// "}</span>
            {t("eyebrow")}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {t("lead")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              render={
                <a
                  href={whatsappUrl(t("whatsappMessage"))}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <WhatsAppIcon className="size-4" />
              {t("whatsapp")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href={`mailto:${siteConfig.email}`} />}
            >
              <MailIcon className="size-4" />
              {t("email")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" />
              }
            >
              <LinkedInIcon className="size-4" />
              {t("linkedin")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a href={siteConfig.github} target="_blank" rel="noreferrer" />
              }
            >
              <GitHubIcon className="size-4" />
              {t("github")}
            </Button>
          </div>
          <p className="mt-8 font-mono text-sm text-muted-foreground">
            {siteConfig.email}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
