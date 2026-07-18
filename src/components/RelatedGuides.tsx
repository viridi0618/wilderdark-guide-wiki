import { guideBySlug } from "@/data/guides";
import { GuideCard } from "./GuideCard";

export function RelatedGuides({ slugs }: { slugs: string[] }) {
  return <section className="related section-shell"><div className="section-heading"><span className="eyebrow">Continue exploring</span><h2>Related guides</h2></div><div className="card-grid">{slugs.map((slug) => <GuideCard key={slug} guide={guideBySlug[slug]} />)}</div></section>;
}
