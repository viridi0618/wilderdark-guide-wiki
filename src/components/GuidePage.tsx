import type { Guide } from "@/data/guides";
import Link from "next/link";
import { absoluteUrl, resolveAssetUrl, SITE_NAME } from "@/lib/site";
import { FAQAccordion } from "./FAQAccordion";
import { QuickFacts } from "./QuickFacts";
import { RelatedGuides } from "./RelatedGuides";
import { SourceList } from "./SourceList";
import { TableOfContents } from "./TableOfContents";

export function GuidePage({ guide }: { guide: Guide }) {
  const canonical = absoluteUrl(`/${guide.slug}`);
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: guide.h1, description: guide.description, image: [resolveAssetUrl(guide.image)], mainEntityOfPage: canonical, author: { "@type": "Organization", name: SITE_NAME }, publisher: { "@type": "Organization", name: SITE_NAME } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Guide", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: guide.h1, item: canonical }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="guide-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,12,11,.97) 8%, rgba(7,12,11,.83) 52%, rgba(7,12,11,.25)), url(${resolveAssetUrl(guide.heroImage || guide.image)})` }}>
        <div className="hero-content"><Link className="back-link" href="/">← Guide index</Link><span className="eyebrow">{guide.eyebrow}</span><h1>{guide.h1}</h1><p>{guide.intro}</p><div className="source-stamp"><span aria-hidden="true">✓</span> Source-led and checked against Steam</div></div>
      </header>
      <div className="guide-layout section-shell"><aside><TableOfContents sections={guide.sections} /></aside><article className="article-body"><QuickFacts facts={guide.facts} />{guide.sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section id="faq"><span className="eyebrow">Clear answers</span><h2>Frequently asked questions</h2><FAQAccordion items={guide.faq} /></section><SourceList sources={guide.sources} /></article></div>
      <RelatedGuides slugs={guide.internalLinks} />
    </main>
  );
}
