import type { Project } from "./types";

/**
 * Featured projects (with caseStudySlug) appear as case cards;
 * the rest appear in the freelance grid, screenshots first.
 */
export const projects: Project[] = [
  // ── Featured (case studies) ───────────────────────────────────────────
  {
    id: "zig",
    name: "Zig — Eventos ao vivo",
    kind: "professional",
    tagline: {
      pt: "Tecnologia para grandes eventos, arenas e operações de alto volume no Brasil.",
      en: "Technology for large events, arenas and high-volume operations in Brazil.",
    },
    url: "https://zig.fun",
    stack: ["React", "TypeScript", "Node.js", "Datadog", "Grafana"],
    caseStudySlug: "zig-eventos-ao-vivo",
  },
  {
    id: "piraturismo",
    name: "Pira Turismo",
    kind: "saas",
    tagline: {
      pt: "Plataforma SaaS que conecta agências de turismo (B2B) a viajantes (B2C), com reservas online.",
      en: "SaaS platform connecting travel agencies (B2B) to travelers (B2C), with online booking.",
    },
    url: "https://piraturismo.com.br",
    image: "/projects/piraturismo.webp",
    logo: "/projects/logos/piraturismo.webp",
    stack: ["Next.js", "NestJS", "Prisma", "Grafana", "Docker"],
    caseStudySlug: "pira-turismo",
  },
  {
    id: "pirawebsites",
    name: "PiraWebSites",
    kind: "saas",
    tagline: {
      pt: "Minha marca de criação de sites: funil de leads WhatsApp-first e SEO local para 18 cidades.",
      en: "My website-building brand: WhatsApp-first lead funnel and local SEO for 18 cities.",
    },
    url: "https://pirawebsites.com.br",
    image: "/projects/pirawebsites.webp",
    stack: ["Next.js", "Tailwind", "SEO local", "JSON-LD", "GA4"],
    caseStudySlug: "pirawebsites",
  },
  {
    id: "grazy-modas",
    name: "Grazy Modas",
    kind: "freelance",
    tagline: {
      pt: "Loja virtual completa com painel administrativo próprio: catálogo, estoque e pedidos.",
      en: "Full online store with its own admin panel: catalog, inventory and orders.",
    },
    url: "https://grazymodas.com.br",
    image: "/projects/grazymodas.webp",
    stack: ["Next.js 16", "Prisma 7", "Auth.js", "Sentry", "Vitest"],
    caseStudySlug: "grazy-modas",
  },
  {
    id: "construtor-brandao",
    name: "Construtor Brandão",
    kind: "freelance",
    tagline: {
      pt: "Site institucional com CMS embutido para o cliente editar obras, depoimentos e conteúdo.",
      en: "Business website with a built-in CMS so the client can edit projects, testimonials and content.",
    },
    url: "https://construtorbrandao.com.br",
    stack: ["Next.js 16", "Payload CMS", "Tailwind v4", "shadcn/ui", "Neon"],
    caseStudySlug: "construtor-brandao",
  },

  // ── Freelance grid (delivered client sites) ───────────────────────────
  {
    id: "gastodaobra",
    name: "Gasto da Obra",
    kind: "freelance",
    tagline: {
      pt: "Sistema para controle de gastos financeiros de obras e construções.",
      en: "System for tracking construction project expenses.",
    },
    url: "https://www.gastodaobra.com.br/",
    image: "/projects/gastodaobra.webp",
    logo: "/projects/logos/gastodaobra.webp",
    stack: ["Next.js", "Node.js"],
  },
  {
    id: "chacara-recanto",
    name: "Chácara Recanto da Paz",
    kind: "freelance",
    tagline: {
      pt: "Landing page com sistema próprio para controle de reservas do espaço.",
      en: "Landing page with a custom booking management system.",
    },
    url: "https://www.chacararecantodapaz.com.br/",
    image: "/projects/chacara.webp",
    logo: "/projects/logos/chacara.svg",
    stack: ["Next.js", "Node.js"],
  },
  {
    id: "aluguelmesas",
    name: "Aluguel de Mesas Gonçalo",
    kind: "freelance",
    tagline: {
      pt: "Site com sistema de reservas e catálogo de produtos para locação.",
      en: "Website with a booking system and rental product catalog.",
    },
    url: "https://www.aluguelmesasgoncalo.com.br/",
    image: "/projects/aluguelmesas.webp",
    logo: "/projects/logos/aluguelmesas.webp",
    stack: ["Next.js", "Node.js"],
  },
  {
    id: "polizel",
    name: "Polizel Florestal",
    kind: "freelance",
    tagline: {
      pt: "Site institucional para produção florestal de eucalipto, madeira e biomassa.",
      en: "Business website for eucalyptus, timber and biomass forestry production.",
    },
    url: "https://www.polizelflorestal.com/",
    image: "/projects/polizel.webp",
    logo: "/projects/logos/polizel.webp",
    stack: ["Next.js", "Tailwind"],
  },
  {
    id: "drfrancisco",
    name: "Dr. Francisco Menezes",
    kind: "freelance",
    tagline: {
      pt: "Site institucional com blog para autoridade e conteúdo médico.",
      en: "Business website with a blog for authority and medical content.",
    },
    url: "https://www.drfranciscomenezes.com.br/",
    image: "/projects/drfrancisco.webp",
    logo: "/projects/logos/drfrancisco.webp",
    stack: ["Next.js", "Tailwind"],
  },
  {
    id: "jpclog",
    name: "JPC Log Transportes",
    kind: "freelance",
    tagline: {
      pt: "Site institucional com blog para empresa de transportes.",
      en: "Business website with a blog for a logistics company.",
    },
    url: "https://www.jpclogtransportes.com/",
    image: "/projects/jpclog.webp",
    logo: "/projects/logos/jpclog.webp",
    stack: ["Next.js", "Tailwind"],
  },
  {
    id: "rodrigues",
    name: "Rodrigues Marcenaria",
    kind: "freelance",
    tagline: {
      pt: "Site institucional com blog para marcenaria sob medida.",
      en: "Business website with a blog for custom woodworking.",
    },
    url: "https://www.rodriguesmarcenaria.com.br/",
    image: "/projects/rodrigues.webp",
    logo: "/projects/logos/rodrigues.svg",
    stack: ["Next.js", "Tailwind"],
  },
  {
    id: "bestpremium",
    name: "Best Premium",
    kind: "freelance",
    tagline: {
      pt: "Landing page focada em conversão e apresentação da marca.",
      en: "Landing page focused on conversion and brand presentation.",
    },
    url: "https://bestpremium.com.br/",
    image: "/projects/bestpremium.webp",
    logo: "/projects/logos/bestpremium.webp",
    stack: ["Next.js", "Tailwind"],
  },
];
