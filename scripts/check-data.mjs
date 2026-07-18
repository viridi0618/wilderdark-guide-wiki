import { readFileSync } from "node:fs";
const source = readFileSync(new URL("../src/data/guides.ts", import.meta.url), "utf8");
const guidePage = readFileSync(new URL("../src/components/GuidePage.tsx", import.meta.url), "utf8");
const expectedGuideSlugs = ["release-date", "demo", "gameplay", "dinosaurs", "system-requirements", "platforms"];
const slugs = [...source.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((match) => match[1]);
const titles = [...source.matchAll(/^\s{4}title: "([^"]+)"/gm)].map((match) => match[1]);
const descriptions = [...source.matchAll(/^\s{4}description: "([^"]+)"/gm)].map((match) => match[1]);
if (slugs.length !== expectedGuideSlugs.length || titles.length !== expectedGuideSlugs.length || descriptions.length !== expectedGuideSlugs.length) throw new Error("Every expected guide must have a slug, title, and description.");
if (new Set(slugs).size !== slugs.length) throw new Error("Duplicate guide slug found.");
const missingSlugs = expectedGuideSlugs.filter((slug) => !slugs.includes(slug));
const unexpectedSlugs = slugs.filter((slug) => !expectedGuideSlugs.includes(slug));
if (missingSlugs.length || unexpectedSlugs.length) throw new Error(`Guide slug mismatch. Missing: ${missingSlugs.join(", ") || "none"}; unexpected: ${unexpectedSlugs.join(", ") || "none"}. Update expectedGuideSlugs when intentionally changing the guide set.`);
const linkGroups = [...source.matchAll(/internalLinks: \[([^\]]+)\]/g)].flatMap((match) => [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]));
for (const link of linkGroups) if (!slugs.includes(link)) throw new Error(`Unknown internal guide link: ${link}`);
for (const phrase of ["Official Wilderdark Wiki", "The official wiki", "Official guide"]) {
  if (source.toLowerCase().includes(phrase.toLowerCase())) throw new Error(`Prohibited affiliation wording found: ${phrase}`);
}
for (const claim of [/Steam Deck is verified/i, /confirmed for (PS5|Xbox|Nintendo Switch)/i, /demo progress (will|does) carry over/i]) {
  if (claim.test(source)) throw new Error(`Unsupported claim found: ${claim}`);
}
if ((guidePage.match(/"@type": "FAQPage"/g) || []).length !== 1) throw new Error("GuidePage must emit FAQ schema exactly once.");
console.log(`Data check passed: ${slugs.length} unique guides and ${linkGroups.length} valid related links.`);
