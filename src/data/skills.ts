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
      { name: "NestJS", level: "working" },
      { name: "Prisma", level: "working" },
      { name: "PostgreSQL", level: "working" },
      { name: "REST APIs", level: "core" },
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
    ],
  },
];
