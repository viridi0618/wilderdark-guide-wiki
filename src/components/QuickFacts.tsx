import type { Fact } from "@/data/guides";
import { StatusPill } from "./StatusPill";

export function QuickFacts({ facts }: { facts: Fact[] }) {
  return (
    <aside className="quick-facts" aria-labelledby="quick-facts-title">
      <div className="panel-heading"><span>Field notes</span><h2 id="quick-facts-title">Quick facts</h2></div>
      <dl>{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd><StatusPill status={fact.status}>{fact.status === "unknown" ? "Not confirmed" : "Confirmed"}</StatusPill></div>)}</dl>
    </aside>
  );
}
