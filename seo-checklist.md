# SEO Checklist — gribeiro.dev

## Feito automaticamente (no código)

- [x] `lang` correto por locale (`pt-BR` na raiz, `en` em `/en`)
- [x] `title.template` no layout + title/description localizados
- [x] Canonical + hreflang (`pt-BR`, `en`, `x-default`) na home e nos cases
- [x] Open Graph (title, description, url, siteName, locale, type) + Twitter Card
- [x] OG image gerada dinamicamente por locale (`opengraph-image.tsx`)
- [x] JSON-LD: `Person` + `WebSite` na home, `BreadcrumbList` nos cases
- [x] `sitemap.xml` com todas as rotas públicas e alternates de idioma
- [x] `robots.txt` apontando para o sitemap
- [x] `manifest.webmanifest` + `icon.svg`
- [x] Vercel Analytics (sem cookies → sem banner LGPD necessário)
- [x] Imagens via `next/image` (WebP, `sizes`, `priority` só no avatar do hero)
- [x] Fontes via `next/font` com `display: swap`

## Tarefas manuais (Gabriel)

- [ ] **Google Search Console**: adicionar propriedade tipo "Domínio" para `gribeiro.dev`, verificar via DNS TXT, e submeter `https://gribeiro.dev/sitemap.xml`
- [ ] **LinkedIn Post Inspector** (https://www.linkedin.com/post-inspector/): validar o preview do OG — é o que recrutadores vão ver ao compartilhar
- [ ] **Rich Results Test** (https://search.google.com/test/rich-results): validar o JSON-LD `Person` após o deploy
- [ ] **Atualizar o LinkedIn**: adicionar `https://gribeiro.dev` como site no perfil
- [ ] **CVs reais**: substituir os placeholders em `public/cv/` pelos PDFs finais (PT e EN)
- [ ] Conferir Indexação → Páginas no Search Console após ~48h do deploy

## Revalidação periódica

- Lighthouse (mobile) mensal em `/`, `/en` e um case — meta ≥95
- Search Console mensal: impressões, cliques e cobertura
