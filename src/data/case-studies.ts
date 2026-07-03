import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "zig-eventos-ao-vivo",
    projectId: "zig",
    title: {
      pt: "Tecnologia para eventos ao vivo em alta escala",
      en: "Technology for large-scale live events",
    },
    subtitle: {
      pt: "Zig · via Cubos Tecnologia",
      en: "Zig · via Cubos Tecnologia",
    },
    role: {
      pt: "Desenvolvedor Fullstack Pleno",
      en: "Mid-level Fullstack Developer",
    },
    period: {
      pt: "mai 2025 — atual",
      en: "May 2025 — present",
    },
    problem: {
      pt: [
        "A Zig é referência em tecnologia para o mercado de entretenimento ao vivo no Brasil: suas soluções suportam grandes eventos, arenas e operações com milhares de pessoas simultâneas. Nesse contexto, cada funcionalidade precisa nascer pronta para alto volume, picos de tráfego e operação em tempo real — não há janela para errar durante um show.",
        "Alocado pela Cubos Tecnologia, participo da criação e evolução das soluções digitais que sustentam essas operações no dia a dia.",
      ],
      en: [
        "Zig is a leading technology company for the live entertainment market in Brazil: its solutions support large events, arenas and operations with thousands of simultaneous users. In this context, every feature must be born ready for high volume, traffic spikes and real-time operation — there is no room for failure during a show.",
        "Allocated through Cubos Tecnologia, I take part in creating and evolving the digital solutions that sustain these operations every day.",
      ],
    },
    solution: {
      pt: [
        "Passei pela tribo de Payments — o coração dos pagamentos e do cashless da operação — e hoje atuo na tribo de Produtos Internos, que constrói as ferramentas usadas pelos times da empresa no dia a dia.",
        "Entre as entregas de maior impacto está a migração de todo o backend do produto para aceitação do novo CNPJ alfanumérico da Receita Federal: uma mudança transversal, que exigiu mapear e atualizar validações, modelos de dados e integrações em praticamente todos os serviços da plataforma — sem interromper operações ao vivo.",
        "No frontend, desenvolvo novas funcionalidades e interfaces com React e TypeScript, seguindo padrões de design system e protótipos do Figma; no backend, APIs, integrações e serviços com Node.js.",
        "O trabalho acontece em colaboração direta com os times de produto, design e backend, com boas práticas de versionamento, code review e qualidade de código — e monitoramento contínuo com Datadog e Grafana para garantir a saúde da plataforma em produção.",
      ],
      en: [
        "I started in the Payments tribe — the heart of the operation's payments and cashless systems — and today I work in the Internal Products tribe, which builds the tools the company's teams use every day.",
        "Among the highest-impact deliveries is the migration of the product's entire backend to accept Brazil's new alphanumeric CNPJ (company tax ID): a cross-cutting change that required mapping and updating validations, data models and integrations across virtually every service of the platform — without interrupting live operations.",
        "On the frontend, I build new features and interfaces with React and TypeScript, following design system standards and Figma prototypes; on the backend, APIs, integrations and services with Node.js.",
        "The work happens in direct collaboration with product, design and backend teams, with solid versioning, code review and code quality practices — plus continuous monitoring with Datadog and Grafana to keep the platform healthy in production.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["React", "TypeScript", "Design System", "Figma"],
      },
      {
        label: { pt: "Backend", en: "Backend" },
        items: ["Node.js", "REST APIs", "Integrações"],
      },
      {
        label: { pt: "Observabilidade", en: "Observability" },
        items: ["Datadog", "Grafana"],
      },
      {
        label: { pt: "Práticas", en: "Practices" },
        items: ["Code review", "CI/CD", "Git"],
      },
    ],
    results: [
      {
        value: { pt: "CNPJ alfanumérico", en: "Alphanumeric CNPJ" },
        label: {
          pt: "migração de todo o backend do produto",
          en: "migration of the product's entire backend",
        },
      },
      {
        value: { pt: "Alto volume", en: "High volume" },
        label: {
          pt: "grandes eventos e arenas por todo o Brasil",
          en: "large events and arenas across Brazil",
        },
      },
      {
        value: { pt: "2 tribos", en: "2 tribes" },
        label: {
          pt: "Payments e Produtos Internos",
          en: "Payments and Internal Products",
        },
      },
    ],
    images: [],
    links: { live: "https://zig.fun" },
    confidential: true,
  },
  {
    slug: "pira-turismo",
    projectId: "piraturismo",
    title: {
      pt: "Do site de agência a uma plataforma SaaS de turismo",
      en: "From an agency website to a SaaS tourism platform",
    },
    subtitle: {
      pt: "Pira Turismo · projeto próprio",
      en: "Pira Turismo · own product",
    },
    role: {
      pt: "Idealizador e desenvolvedor fullstack",
      en: "Creator and fullstack developer",
    },
    period: {
      pt: "2023 — atual",
      en: "2023 — present",
    },
    problem: {
      pt: [
        "Agências de turismo regionais ainda vendem pacotes por WhatsApp e planilhas: sem catálogo online, sem gestão de reservas e sem presença digital profissional. Para o viajante, comparar roteiros e reservar com segurança é difícil; para a agência, cada venda é um processo manual.",
        "O que começou como um site para uma agência de Piracicaba evoluiu para uma plataforma de marketplace que conecta agências de turismo (B2B) a clientes finais (B2C).",
      ],
      en: [
        "Regional travel agencies still sell packages through WhatsApp and spreadsheets: no online catalog, no booking management, no professional digital presence. For travelers, comparing itineraries and booking safely is hard; for agencies, every sale is a manual process.",
        "What started as a website for an agency in Piracicaba evolved into a marketplace platform connecting travel agencies (B2B) to end customers (B2C).",
      ],
    },
    solution: {
      pt: [
        "A plataforma é um monorepo com NestJS no backend (cerca de 40 módulos: reservas, assinaturas, campanhas, blog, push, auditoria) e dois frontends Next.js 15 — o site B2C e o painel admin B2B — com Prisma sobre PostgreSQL, React Query e componentes compartilhados. Turborepo, lint, type-check e hooks de pre-commit/pre-push mantêm o fluxo disciplinado.",
        "Autenticação JWT com refresh tokens e uma cadeia de guards cobre papéis, multi-tenancy por agência e liberação de recursos por plano de assinatura. Dez rotinas agendadas (lembretes, campanhas, cobrança) rodam com trilha de auditoria própria.",
        "Observabilidade de produção completa e self-hosted: logs estruturados com Pino — com redação automática de segredos e correlação por request-id — fluem via Promtail para o Loki e alimentam dashboards do Grafana provisionados como código: logs por nível, erros recentes, respostas 4xx/5xx e volume por serviço, com retenção de 30 dias.",
        "A infra roda em VPS com Docker Compose e proxy Caddy (HTTPS automático, security headers, bloqueio de scanners). O deploy via GitHub Actions só conclui depois que o health-check da API responde — e healthchecks em todos os serviços detectam e reiniciam qualquer coisa que cair.",
      ],
      en: [
        "The platform is a monorepo with NestJS on the backend (around 40 modules: bookings, subscriptions, campaigns, blog, push, audit) and two Next.js 15 frontends — the B2C site and the B2B admin panel — with Prisma over PostgreSQL, React Query and shared components. Turborepo, lint, type-check and pre-commit/pre-push hooks keep the workflow disciplined.",
        "JWT authentication with refresh tokens and a guard chain covers roles, per-agency multi-tenancy and feature gating by subscription plan. Ten scheduled jobs (reminders, campaigns, billing) run with their own audit trail.",
        "Full self-hosted production observability: structured Pino logs — with automatic secret redaction and request-id correlation — flow through Promtail into Loki and feed Grafana dashboards provisioned as code: logs by level, recent errors, 4xx/5xx responses and volume per service, with 30-day retention.",
        "The infrastructure runs on a VPS with Docker Compose and a Caddy proxy (automatic HTTPS, security headers, scanner blocking). The GitHub Actions deploy only completes after the API health check responds — and healthchecks on every service detect and restart anything that goes down.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["Next.js 15 (web + admin)", "React Query", "Zustand", "Zod"],
      },
      {
        label: { pt: "Backend", en: "Backend" },
        items: ["NestJS 11", "Prisma", "PostgreSQL", "JWT + guards", "Cron jobs"],
      },
      {
        label: { pt: "Observabilidade", en: "Observability" },
        items: ["Grafana", "Loki", "Promtail", "Pino", "Healthchecks"],
      },
      {
        label: { pt: "Infra & CI/CD", en: "Infra & CI/CD" },
        items: ["Docker Compose", "Caddy", "GitHub Actions", "VPS", "Turborepo"],
      },
    ],
    results: [
      {
        value: { pt: "No ar", en: "Live" },
        label: {
          pt: "em produção em piraturismo.com.br",
          en: "in production at piraturismo.com.br",
        },
      },
      {
        value: { pt: "B2B + B2C", en: "B2B + B2C" },
        label: {
          pt: "agências e viajantes na mesma plataforma",
          en: "agencies and travelers on the same platform",
        },
      },
      {
        value: { pt: "100% observável", en: "100% observable" },
        label: {
          pt: "Grafana, Loki e healthchecks em produção",
          en: "Grafana, Loki and healthchecks in production",
        },
      },
    ],
    images: [
      {
        src: "/projects/piraturismo.webp",
        alt: {
          pt: "Página inicial da plataforma Pira Turismo",
          en: "Pira Turismo platform home page",
        },
      },
    ],
    links: { live: "https://piraturismo.com.br" },
  },
  {
    slug: "grazy-modas",
    projectId: "grazy-modas",
    title: {
      pt: "E-commerce completo com painel administrativo próprio",
      en: "Full e-commerce with its own admin panel",
    },
    subtitle: {
      pt: "Grazy Modas · freelance",
      en: "Grazy Modas · freelance",
    },
    role: {
      pt: "Desenvolvedor fullstack (freelance)",
      en: "Fullstack developer (freelance)",
    },
    period: {
      pt: "2026 — atual",
      en: "2026 — present",
    },
    problem: {
      pt: [
        "Uma loja de moda precisava vender online sem depender apenas de redes sociais: catálogo próprio, controle de estoque e gestão de pedidos em um lugar só — sem pagar mensalidade de plataformas prontas que não se adaptam ao negócio.",
      ],
      en: [
        "A fashion store needed to sell online without depending only on social media: its own catalog, inventory control and order management in one place — without paying monthly fees for off-the-shelf platforms that don't fit the business.",
      ],
    },
    solution: {
      pt: [
        "Loja virtual construída em Next.js 16 com App Router e Tailwind v4, focada em performance, SEO e uma experiência de compra fluida no celular — onde está a maioria das clientes. Checkout fecha direto no WhatsApp, com carrinho persistido no servidor.",
        "Painel administrativo sob medida com Auth.js v5 (login Google + credenciais, com revalidação da sessão contra o banco a cada request) e PostgreSQL no Neon via Prisma 7: produtos, estoque por tamanho, pedidos, cupons, banners e blog gerenciados pela própria lojista. Frete e rastreio integrados à API dos Correios, uploads server-only no Firebase Storage e rate limiting com Upstash Redis.",
        "Monitoramento e qualidade de gente grande: Sentry nos três runtimes do Next (client, server e edge) com scrubbing de PII para LGPD, GA4 com Consent Mode v2 e Meta Pixel controlado pelo painel — tudo condicionado ao aceite de cookies. Mais de 30 arquivos de testes com Vitest e hooks de pre-commit/pre-push protegem cada entrega.",
      ],
      en: [
        "Online store built with Next.js 16 App Router and Tailwind v4, focused on performance, SEO and a smooth mobile shopping experience — where most customers are. Checkout closes directly on WhatsApp, with a server-persisted cart.",
        "Tailor-made admin panel with Auth.js v5 (Google + credentials login, session revalidated against the database on every request) and PostgreSQL on Neon via Prisma 7: products, per-size inventory, orders, coupons, banners and blog managed by the store owner herself. Shipping quotes and tracking integrated with the Correios API, server-only uploads to Firebase Storage and rate limiting with Upstash Redis.",
        "Serious monitoring and quality: Sentry across all three Next runtimes (client, server and edge) with PII scrubbing for LGPD compliance, GA4 with Consent Mode v2 and an admin-controlled Meta Pixel — all gated behind cookie consent. 30+ Vitest test files and pre-commit/pre-push hooks protect every delivery.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["Next.js 16", "React 19", "Tailwind v4", "shadcn/Base UI"],
      },
      {
        label: { pt: "Backend & Dados", en: "Backend & Data" },
        items: ["Prisma 7", "PostgreSQL (Neon)", "Auth.js v5", "Upstash Redis", "Firebase Storage"],
      },
      {
        label: { pt: "Observabilidade & Qualidade", en: "Observability & Quality" },
        items: ["Sentry (client/server/edge)", "GA4 Consent Mode v2", "Vitest (30+)", "Husky"],
      },
    ],
    results: [
      {
        value: { pt: "Independência", en: "Independence" },
        label: {
          pt: "a lojista gerencia tudo sem dev",
          en: "the owner manages everything without a dev",
        },
      },
      {
        value: { pt: "Sentry", en: "Sentry" },
        label: {
          pt: "erros rastreados em client, server e edge",
          en: "errors tracked across client, server and edge",
        },
      },
      {
        value: { pt: "30+ testes", en: "30+ tests" },
        label: {
          pt: "Vitest cobrindo a lógica de negócio",
          en: "Vitest covering the business logic",
        },
      },
    ],
    images: [],
    links: { live: "https://grazy-modas.vercel.app" },
  },
  {
    slug: "construtor-brandao",
    projectId: "construtor-brandao",
    title: {
      pt: "Site institucional com CMS embutido no próprio app",
      en: "Business website with a CMS built into the app",
    },
    subtitle: {
      pt: "Construtor Brandão · freelance",
      en: "Construtor Brandão · freelance",
    },
    role: {
      pt: "Desenvolvedor fullstack (freelance)",
      en: "Fullstack developer (freelance)",
    },
    period: {
      pt: "2026 — atual",
      en: "2026 — present",
    },
    problem: {
      pt: [
        "Um construtor precisava de um site profissional que a própria equipe pudesse atualizar: novas obras no portfólio, depoimentos de clientes e conteúdo institucional — sem chamar um desenvolvedor a cada mudança.",
      ],
      en: [
        "A construction contractor needed a professional website his own team could update: new portfolio projects, client testimonials and business content — without calling a developer for every change.",
      ],
    },
    solution: {
      pt: [
        "Site em Next.js 16 com Payload CMS 3 rodando dentro do próprio app: um único deploy entrega o site público e o painel de edição, sem serviços separados.",
        "Conteúdo em PostgreSQL (Neon) e imagens no Firebase Storage; interface com Tailwind v4 e shadcn/ui sobre Base UI. O cliente edita obras, depoimentos e textos em um admin com controle de acesso.",
      ],
      en: [
        "Website in Next.js 16 with Payload CMS 3 running inside the app itself: a single deploy ships both the public site and the editing panel, with no separate services.",
        "Content in PostgreSQL (Neon) and images in Firebase Storage; interface with Tailwind v4 and shadcn/ui on Base UI. The client edits projects, testimonials and copy in an access-controlled admin.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["Next.js 16", "Tailwind v4", "shadcn/ui"],
      },
      {
        label: { pt: "CMS & Dados", en: "CMS & Data" },
        items: ["Payload CMS 3", "PostgreSQL (Neon)", "Firebase Storage"],
      },
    ],
    results: [
      {
        value: { pt: "1 deploy", en: "1 deploy" },
        label: {
          pt: "site + CMS no mesmo app Next.js",
          en: "site + CMS in the same Next.js app",
        },
      },
      {
        value: { pt: "Autonomia", en: "Autonomy" },
        label: {
          pt: "equipe atualiza o site sem dev",
          en: "the team updates the site without a dev",
        },
      },
    ],
    images: [],
    links: { live: "https://construtor-brandao.vercel.app" },
  },
];
