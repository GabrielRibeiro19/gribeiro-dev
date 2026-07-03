import "./globals.css";

/**
 * Root 404 boundary for requests that escape the [locale] tree
 * (e.g. dynamic catch-all misses). Provides its own <html> since
 * there is no root layout. Locale-neutral by design.
 */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className="dark">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Página não encontrada · Page not found
        </h1>
        <p className="text-muted-foreground">
          O link que você acessou não existe. · The link you followed doesn&apos;t
          exist.
        </p>
        <a
          href="/"
          className="mt-2 font-medium text-primary underline-offset-4 hover:underline"
        >
          ~/gribeiro.dev
        </a>
      </body>
    </html>
  );
}
