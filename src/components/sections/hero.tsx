import { MailIcon } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/config/site";

export async function Hero() {
  const t = await getTranslations("hero");
  const tContact = await getTranslations("contact");

  const socials = [
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: <GitHubIcon className="size-5" />,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: <LinkedInIcon className="size-5" />,
    },
    {
      label: tContact("whatsapp"),
      href: whatsappUrl(tContact("whatsappMessage")),
      icon: <WhatsAppIcon className="size-5" />,
    },
    {
      label: tContact("email"),
      href: `mailto:${siteConfig.email}`,
      icon: <MailIcon className="size-5" />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 h-[32rem] w-[85vw] max-w-3xl -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:gap-16 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 font-mono text-sm text-primary">
            {t("greeting")}
          </p>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Gabriel Ribeiro
          </h1>
          <p className="mt-4 font-heading text-2xl font-semibold text-primary sm:text-3xl">
            {t("role")}
            <span aria-hidden className="animate-blink">
              _
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg lg:mx-0">
            {t("pitch")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" render={<a href="#projects" />}>
              {t("ctaProjects")}
            </Button>
            <Button size="lg" variant="outline" render={<a href="#contact" />}>
              {t("ctaContact")}
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-10 font-mono text-xs text-muted-foreground">
            <span className="text-primary">const</span> stack = [
            {"React, Next.js, Node.js, TypeScript"}]
          </p>
        </div>

        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl"
          />
          <Image
            src={siteConfig.avatar}
            alt={t("avatarAlt")}
            width={288}
            height={288}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 13rem"
            className="relative size-52 rounded-full object-cover ring-2 ring-primary/40 ring-offset-4 ring-offset-background sm:size-64 lg:size-72"
          />
        </div>
      </div>
    </section>
  );
}
