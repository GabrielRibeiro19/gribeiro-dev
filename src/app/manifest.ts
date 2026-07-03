import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Ribeiro — Desenvolvedor Fullstack",
    short_name: "gribeiro.dev",
    description:
      "Portfólio de Gabriel Ribeiro, desenvolvedor fullstack — React, Next.js, Node.js e TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#0d1117",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
