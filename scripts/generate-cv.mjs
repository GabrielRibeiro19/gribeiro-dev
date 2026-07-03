import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Renders cv/cv-{pt,en}.html to public/cv/*.pdf using headless Chrome.
 * Usage: npm run cv:build
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

const chrome = CHROME_PATHS.find((candidate) => existsSync(candidate));
if (!chrome) {
  console.error("Chrome/Edge not found. Install one or adjust CHROME_PATHS.");
  process.exit(1);
}

const targets = [
  { html: "cv/cv-pt.html", pdf: "public/cv/gabriel-ribeiro-cv-pt.pdf" },
  { html: "cv/cv-en.html", pdf: "public/cv/gabriel-ribeiro-cv-en.pdf" },
];

for (const { html, pdf } of targets) {
  const htmlPath = path.join(root, html);
  const pdfPath = path.join(root, pdf);
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    htmlPath,
  ]);
  console.log(`✓ ${pdf}`);
}
