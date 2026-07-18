import type { Section } from "@/data/guides";

export function TableOfContents({ sections }: { sections: Section[] }) {
  return <nav className="toc" aria-label="On this page"><strong>On this page</strong><ol>{sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>;
}
