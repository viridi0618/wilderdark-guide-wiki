import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { guideBySlug, guides } from "@/data/guides";
import { DEFAULT_SOCIAL_IMAGE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) return {};
  const path = `/${guide.slug}`;
  return { title: { absolute: guide.title }, description: guide.description, alternates: { canonical: path }, openGraph: { type: "article", title: guide.title, description: guide.description, url: path, images: [{ url: DEFAULT_SOCIAL_IMAGE, width: 460, height: 215, alt: "Wilderdark official store artwork" }] }, twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [DEFAULT_SOCIAL_IMAGE] } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
