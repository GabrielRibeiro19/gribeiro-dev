import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground">{t("text")}</p>
      <Button render={<Link href="/" />}>{t("back")}</Button>
    </section>
  );
}
