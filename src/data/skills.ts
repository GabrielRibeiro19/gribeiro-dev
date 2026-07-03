import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: { pt: "Frontend", en: "Frontend" },
    skills: [
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "TailwindCSS", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "React Query", level: "working" },
      { name: "Styled Components", level: "working" },
      { name: "HTML5 / CSS3", level: "working" },
    ],
  },
  {
    id: "backend",
    label: { pt: "Backend", en: "Backend" },
    skills: [
      { name: "Node.js", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "NestJS", level: "working" },
      { name: "Prisma", level: "core" },
      { name: "TypeORM", level: "working" },
      { name: "SQL", level: "core" },
      { name: "PostgreSQL", level: "core" },
      { name: "MySQL", level: "working" },
      { name: "MariaDB", level: "working" },
    ],
  },
  {
    id: "devops",
    label: { pt: "DevOps & Cloud", en: "DevOps & Cloud" },
    skills: [
      { name: "Docker", level: "working" },
      { name: "AWS", level: "working" },
      { name: "CI/CD", level: "working" },
      { name: "Vercel", level: "core" },
    ],
  },
  {
    id: "observability",
    label: { pt: "Observabilidade", en: "Observability" },
    skills: [
      { name: "Datadog", level: "core" },
      { name: "Grafana", level: "core" },
      { name: "Loki", level: "working" },
      { name: "Sentry", level: "working" },
      { name: "Pino", level: "working" },
    ],
  },
  {
    id: "quality-tools",
    label: { pt: "Qualidade & Ferramentas", en: "Quality & Tools" },
    skills: [
      { name: "Testes automatizados", level: "working" },
      { name: "Git / GitHub", level: "core" },
      { name: "Figma", level: "working" },
      { name: "Insomnia / Postman", level: "working" },
      { name: "WordPress", level: "working" },
    ],
  },
];
