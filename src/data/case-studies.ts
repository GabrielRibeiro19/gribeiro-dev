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
        "A plataforma é um monorepo com NestJS no backend e Next.js 15 no frontend, com Prisma sobre PostgreSQL e TailwindCSS na interface — organizado com Turborepo, lint e type-check integrados ao fluxo de commits.",
        "As agências gerenciam pacotes, saídas e reservas em um painel próprio; os viajantes navegam pelo catálogo e reservam online. Migrations versionadas e seeds automatizados mantêm os ambientes reproduzíveis.",
        "O projeto também é meu laboratório de arquitetura: decisões de modelagem, autenticação, cache e CI/CD passam primeiro por aqui antes de virarem prática nos meus outros trabalhos.",
      ],
      en: [
        "The platform is a monorepo with NestJS on the backend and Next.js 15 on the frontend, with Prisma over PostgreSQL and TailwindCSS on the interface — organized with Turborepo, with lint and type-check wired into the commit flow.",
        "Agencies manage packages, departures and bookings in their own panel; travelers browse the catalog and book online. Versioned migrations and automated seeds keep environments reproducible.",
        "The project is also my architecture lab: modeling, authentication, caching and CI/CD decisions are tried here first before becoming practice in my other work.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["Next.js 15", "React", "TailwindCSS"],
      },
      {
        label: { pt: "Backend", en: "Backend" },
        items: ["NestJS", "Prisma", "PostgreSQL"],
      },
      {
        label: { pt: "Infra & DX", en: "Infra & DX" },
        items: ["Turborepo", "CI/CD", "Husky", "Migrations"],
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
        value: { pt: "Fullstack", en: "Fullstack" },
        label: {
          pt: "do banco de dados ao pixel, projeto solo",
          en: "from database to pixel, solo project",
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
        "Loja virtual construída em Next.js 16 com App Router e Tailwind v4, focada em performance, SEO e uma experiência de compra fluida no celular — onde está a maioria das clientes.",
        "Painel administrativo sob medida com autenticação via Auth.js e banco PostgreSQL com Prisma: produtos, categorias, variações, estoque e pedidos gerenciados pela própria lojista, sem depender de desenvolvedor para o dia a dia.",
      ],
      en: [
        "Online store built with Next.js 16 App Router and Tailwind v4, focused on performance, SEO and a smooth mobile shopping experience — where most customers are.",
        "Tailor-made admin panel with Auth.js authentication and PostgreSQL with Prisma: products, categories, variants, inventory and orders managed by the store owner herself, with no developer needed for daily operations.",
      ],
    },
    stack: [
      {
        label: { pt: "Frontend", en: "Frontend" },
        items: ["Next.js 16", "React 19", "Tailwind v4"],
      },
      {
        label: { pt: "Backend & Dados", en: "Backend & Data" },
        items: ["Prisma", "PostgreSQL", "Auth.js"],
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
        value: { pt: "Sob medida", en: "Tailor-made" },
        label: {
          pt: "zero mensalidade de plataforma pronta",
          en: "zero monthly platform fees",
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
