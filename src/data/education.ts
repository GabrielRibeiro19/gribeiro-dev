import type { EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    id: "univesp-eng",
    institution: "Univesp",
    degree: {
      pt: "Engenharia da Computação",
      en: "Computer Engineering",
    },
    start: "2022",
    end: "2027",
    status: "in-progress",
  },
  {
    id: "univesp-bti",
    institution: "Univesp",
    degree: {
      pt: "Bacharelado em Tecnologia da Informação",
      en: "Bachelor's in Information Technology",
    },
    start: "2022",
    end: "2025",
    status: "done",
  },
  {
    id: "ifsp",
    institution: "IFSP",
    degree: {
      pt: "Técnico em Informática",
      en: "Technical Degree in Informatics",
    },
    start: "2018",
    end: "2021",
    status: "done",
  },
];
