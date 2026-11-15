import { cp, readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(React.createElement(App));
  const html = await readFile("dist/index.html", "utf8");
  if (!html.includes("<!--app-html-->")) throw new Error("Missing prerender marker");
  await writeFile("dist/index.html", html.replace("<!--app-html-->", markup));
  await cp("assets", "dist/assets", { recursive: true });
  await Promise.all(["404.html", "favicon.svg", ".nojekyll"].map((file) => cp(file, `dist/${file}`)));
} finally {
  await server.close();
}
