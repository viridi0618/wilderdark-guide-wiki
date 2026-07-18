import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/release-date/", "/demo/", "/gameplay/", "/dinosaurs/", "/system-requirements/", "/platforms/"];
  return routes.map((route) => ({ url: absoluteUrl(route), changeFrequency: "weekly", priority: route === "/" ? 1 : 0.8 }));
}
