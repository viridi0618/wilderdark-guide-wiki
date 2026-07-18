import type { Source } from "@/data/guides";

export function SourceList({ sources }: { sources: Source[] }) {
  return <section className="source-list" aria-labelledby="sources-title"><span className="eyebrow">Source log</span><h2 id="sources-title">Sources checked</h2><p className="source-note">Primary listings take priority when sources conflict. Last reviewed July 18, 2026.</p><ol>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a><span>{source.note}</span></li>)}</ol></section>;
}
