export const siteConfig = {
  name: "Gabriel Ribeiro",
  shortName: "gribeiro.dev",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gribeiro.dev",
  email: "gabriel.hsribeiro19@gmail.com",
  whatsappDigits: "5519998499296",
  location: "Piracicaba, São Paulo, Brasil",
  github: "https://github.com/GabrielRibeiro19",
  githubUser: "GabrielRibeiro19",
  linkedin: "https://www.linkedin.com/in/gabriel-ribeiro-378028161/",
  avatar: "/avatar.webp",
  cv: {
    pt: "/cv/gabriel-ribeiro-cv-pt.pdf",
    en: "/cv/gabriel-ribeiro-cv-en.pdf",
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
