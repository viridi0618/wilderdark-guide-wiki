import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const routes = new Set(["/", "/release-date", "/demo", "/gameplay", "/dinosaurs", "/system-requirements", "/platforms"]);
function files(dir) { return readdirSync(dir).flatMap((name) => { const path = join(dir, name); return statSync(path).isDirectory() ? files(path) : path.endsWith(".tsx") || path.endsWith(".ts") ? [path] : []; }); }
for (const file of files(root)) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:href|url):?\s*=?(?:\{|\()?[`'"](\/[a-z0-9-/]*)/gi)) {
    const href = match[1].replace(/\/$/, "") || "/";
    if (href.includes("${") || href.startsWith("/#") || href.startsWith("/api")) continue;
    if (!routes.has(href) && !["/sitemap.xml"].includes(href)) throw new Error(`Dead internal link ${href} in ${file}`);
  }
}
console.log(`Link check passed: only ${routes.size} approved routes are referenced.`);
