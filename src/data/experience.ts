import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "cubos-zig",
    company: "Cubos Tecnologia",
    client: "Zig",
    url: "https://zig.fun",
    role: {
      pt: "Desenvolvedor Fullstack Pleno",
      en: "Mid-level Fullstack Developer",
    },
    summary: {
      pt: "Alocado à Zig, referência em tecnologia para o entretenimento ao vivo: soluções digitais que suportam grandes eventos, arenas e operações de alto volume.",
      en: "Allocated to Zig, a leading live-entertainment technology company: digital solutions supporting large events, arenas and high-volume operations.",
    },
    highlights: {
      pt: [
        "Novas funcionalidades e interfaces com React e TypeScript, seguindo design system e protótipos do Figma",
        "Desenvolvimento de APIs, integrações e serviços com Node.js, consumindo APIs internas e externas",
        "Componentes reutilizáveis e interfaces escaláveis e performáticas",
        "Monitoramento e observabilidade com Datadog e Grafana",
        "Colaboração direta com produto, design e backend — boas práticas, versionamento e qualidade de código",
      ],
      en: [
        "New features and interfaces with React and TypeScript, following the design system and Figma prototypes",
        "APIs, integrations and services with Node.js, consuming internal and external APIs",
        "Reusable components and scalable, performant interfaces",
        "Monitoring and observability with Datadog and Grafana",
        "Direct collaboration with product, design and backend — best practices, versioning and code quality",
      ],
    },
    stack: ["React", "TypeScript", "Node.js", "Datadog", "Grafana", "Figma"],
    start: "2025-05",
    end: null,
  },
  {
    id: "smartbreeder",
    company: "SmartBreeder",
    role: {
      pt: "Desenvolvedor Front End Júnior",
      en: "Junior Front End Developer",
    },
    summary: {
      pt: "Desenvolvimento de novas telas do sistema da empresa com ReactJS, a partir de protótipos do Figma e do design system do software.",
      en: "Built new screens for the company's system with ReactJS, from Figma prototypes and the product's design system.",
    },
    highlights: {
      pt: [
        "Criação de telas seguindo layout prototipado no Figma",
        "Componentes reutilizáveis dentro do design system",
        "Integração e consumo de APIs",
      ],
      en: [
        "Screens built from layouts prototyped in Figma",
        "Reusable components within the design system",
        "API integration and consumption",
      ],
    },
    stack: ["React", "TypeScript", "Figma"],
    start: "2024-09",
    end: "2025-05",
  },
  {
    id: "tbrweb-dev",
    company: "TBrWeb",
    role: {
      pt: "Desenvolvedor Full Stack Júnior",
      en: "Junior Full Stack Developer",
    },
    summary: {
      pt: "Criação de websites modernos e responsivos com layouts exclusivos, de ponta a ponta: do front ao deploy.",
      en: "Built modern, responsive websites with custom layouts, end to end: from frontend to deploy.",
    },
    highlights: {
      pt: [
        "Sites e sistemas com React, Next.js, Node.js e Tailwind, respeitando a identidade visual de cada cliente",
        "Integrações com APIs, desenvolvimento de backend e front-end",
        "Deploy completo: configuração de servidores na AWS e apontamento de domínios/subdomínios",
        "Atendimento a clientes: ajustes em sites/sistemas e configuração de e-mail corporativo",
      ],
      en: [
        "Websites and systems with React, Next.js, Node.js and Tailwind, honoring each client's visual identity",
        "API integrations, backend and frontend development",
        "Full deployment: AWS server setup and domain/subdomain configuration",
        "Client support: site/system adjustments and corporate email setup",
      ],
    },
    stack: ["React", "Next.js", "Node.js", "Tailwind", "AWS"],
    start: "2022-07",
    end: "2024-08",
  },
  {
    id: "tbrweb-helpdesk",
    company: "TBrWeb",
    role: {
      pt: "Suporte Técnico Help Desk",
      en: "Help Desk Technical Support",
    },
    summary: {
      pt: "Porta de entrada na tecnologia: suporte técnico e resolução de problemas — de estagiário a efetivado em 6 meses, e de lá para o time de desenvolvimento.",
      en: "My way into tech: technical support and troubleshooting — from intern to full-time in 6 months, and from there to the development team.",
    },
    highlights: {
      pt: [],
      en: [],
    },
    stack: [],
    start: "2021-06",
    end: "2022-07",
  },
  {
    id: "qsorriso",
    company: "Clínicas QSorriso",
    role: {
      pt: "Telemarketing",
      en: "Telemarketing",
    },
    summary: {
      pt: "Prospecção de clientes e agendamento de consultas. A base de comunicação e experiência do cliente que carrego até hoje no trabalho com times e usuários.",
      en: "Customer prospecting and appointment scheduling. The foundation in communication and customer experience I still carry into my work with teams and users.",
    },
    highlights: {
      pt: [],
      en: [],
    },
    stack: [],
    start: "2020-12",
    end: "2021-05",
  },
];
