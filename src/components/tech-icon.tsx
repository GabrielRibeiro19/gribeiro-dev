import type { IconType } from "react-icons";
import { FaAws, FaSlack } from "react-icons/fa";
import {
  SiClaude,
  SiClickup,
  SiCursor,
  SiDatadog,
  SiDocker,
  SiFigma,
  SiGit,
  SiGooglegemini,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPino,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiSentry,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiWordpress,
} from "react-icons/si";
import { DatabaseIcon, WebhookIcon, WorkflowIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Brand icon per skill name; lucide fallbacks for non-brand concepts. */
const TECH_ICONS: Record<string, IconType | typeof DatabaseIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  TailwindCSS: SiTailwindcss,
  "React Query": SiReactquery,
  "Styled Components": SiStyledcomponents,
  "HTML5 / CSS3": SiHtml5,
  "Node.js": SiNodedotjs,
  "REST APIs": WebhookIcon,
  NestJS: SiNestjs,
  Prisma: SiPrisma,
  TypeORM: SiTypeorm,
  SQL: DatabaseIcon,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MariaDB: SiMariadb,
  Docker: SiDocker,
  AWS: FaAws,
  "CI/CD": WorkflowIcon,
  Vercel: SiVercel,
  Datadog: SiDatadog,
  Grafana: SiGrafana,
  Loki: SiGrafana,
  Sentry: SiSentry,
  Pino: SiPino,
  "Testes automatizados": SiVitest,
  "Automated testing": SiVitest,
  "Git / GitHub": SiGit,
  Figma: SiFigma,
  "Insomnia / Postman": SiPostman,
  WordPress: SiWordpress,
  "Claude Code": SiClaude,
  Cursor: SiCursor,
  "Gemini API": SiGooglegemini,
  ClickUp: SiClickup,
  Slack: FaSlack,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = TECH_ICONS[name];
  if (!Icon) {
    return null;
  }
  return <Icon aria-hidden className={cn("size-3.5 shrink-0", className)} />;
}
