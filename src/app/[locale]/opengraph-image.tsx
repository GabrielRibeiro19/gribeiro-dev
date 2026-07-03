import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Gabriel Ribeiro — Fullstack Developer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpengraphImage({ params }: Props) {
  const { locale } = await params;
  const role =
    locale === "pt" ? "Desenvolvedor Fullstack" : "Fullstack Developer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d1117",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(57,197,232,0.18), transparent)",
          color: "#f0f4f8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#39c5e8",
            fontFamily: "monospace",
          }}
        >
          ~/gribeiro.dev
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Gabriel Ribeiro
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 44,
            fontWeight: 600,
            color: "#39c5e8",
          }}
        >
          {role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#94a7b8",
            fontFamily: "monospace",
          }}
        >
          React · Next.js · Node.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
