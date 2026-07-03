# gribeiro.dev

Meu portfólio pessoal — [gribeiro.dev](https://gribeiro.dev)

Bilíngue (PT-BR / EN), dark premium com toggle de tema, one-page + páginas de case study, 100% estático.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript** strict
- **Tailwind CSS v4** (tokens CSS-first via `@theme`)
- **shadcn/ui** sobre Base UI
- **next-intl** (PT-BR na raiz, EN em `/en`)
- **next-themes** (dark default + tema claro)
- **motion** (`LazyMotion`, ~16 kB só nas ilhas client)
- **Vercel** + Vercel Analytics

## Arquitetura

- `src/data/*.ts` — todo o conteúdo (projetos, experiência, cases, skills) em arquivos TypeScript tipados, com traduções em campos `Localized`
- `src/repositories/content.ts` — seam server-only que resolve as traduções por locale; páginas nunca tocam `data/` diretamente
- `src/app/[locale]/` — rotas estáticas geradas para ambos os idiomas (`generateStaticParams` + `setRequestLocale`)
- SEO: JSON-LD (`Person`, `WebSite`, `BreadcrumbList`), hreflang, sitemap, OG image dinâmica por locale

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```
