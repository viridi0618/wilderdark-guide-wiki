export const SITE_NAME = "Wilderdark Guide Wiki";
export const DEFAULT_DESCRIPTION =
  "An independent source-led Wilderdark wiki guide covering the release date, demo, gameplay, dinosaurs, survival systems, platforms, and PC system requirements.";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://wilderdark.wiki").replace(/\/$/, "");
export const DEFAULT_SOCIAL_IMAGE =
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2735850/header.jpg";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function resolveAssetUrl(path?: string) {
  if (!path) return DEFAULT_SOCIAL_IMAGE;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return absoluteUrl(path.startsWith("/") ? path : `/${path}`);
}
