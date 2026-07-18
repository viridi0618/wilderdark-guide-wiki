import { FAQAccordion } from "@/components/FAQAccordion";
import { GuideCard } from "@/components/GuideCard";
import { QuickFacts } from "@/components/QuickFacts";
import { SourceList } from "@/components/SourceList";
import { guides } from "@/data/guides";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const homeFaq = [
  { question: "When is Wilderdark coming out?", answer: "Steam currently lists Wilderdark for November 3, 2026 on PC." },
  { question: "Is there a Wilderdark demo?", answer: "Yes. A free PC demo is available on Steam and was released on May 7, 2026." },
  { question: "Is Wilderdark on PS5 or Xbox?", answer: "PS5 and Xbox Series X|S versions have not been announced. PC via Steam is the only confirmed platform." },
  { question: "Is Wilderdark multiplayer?", answer: "The current Steam listing labels Wilderdark as single-player. No multiplayer mode is announced in the current source set." }
];

const homeFacts = [
  { label: "Game", value: "Wilderdark", status: "confirmed" as const },
  { label: "Genre", value: "First-person survival horror", status: "confirmed" as const },
  { label: "Developer", value: "Team Junkfish", status: "confirmed" as const },
  { label: "Publisher", value: "Junkfish Limited", status: "confirmed" as const },
  { label: "Release date", value: "November 3, 2026", status: "confirmed" as const },
  { label: "Platform confirmed", value: "PC via Steam", status: "confirmed" as const },
  { label: "Demo", value: "Free Steam demo available", status: "confirmed" as const },
  { label: "Console platforms", value: "Not announced", status: "unknown" as const },
  { label: "Steam Deck", value: "Not confirmed", status: "unknown" as const }
];

export default function Home() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/"), description: "An independent source-led Wilderdark wiki guide." };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <section className="home-hero">
        <div className="home-hero-inner"><div className="hero-copy"><span className="eyebrow">Independent pre-launch field guide</span><h1>Wilderdark <em>Wiki Guide</em></h1><p>Track what is confirmed, what is still unknown, and where to start with Wilderdark before launch.</p><div className="hero-actions"><a className="button primary" href="#guides">Explore guides</a><a className="button secondary" href="https://store.steampowered.com/app/2735900/Wilderdark_Demo/" target="_blank" rel="noreferrer">Play the Steam demo ↗</a></div><div className="trust-row"><span><b>✓</b> Sources checked</span><span><b>◷</b> Updated Jul 18, 2026</span><span><b>◇</b> Independent guide</span></div></div><div className="hero-specimen" aria-label="Key release information"><span className="specimen-label">Case file WD-2026</span><strong>03 · NOV · 2026</strong><p>Current Steam-listed launch date</p><div><span>PC</span><span>DEMO LIVE</span></div></div></div>
      </section>
      <section className="signal-bar"><div><span>CONFIRMED</span><strong>PC via Steam</strong></div><div><span>AVAILABLE</span><strong>Free demo</strong></div><div><span>UNCONFIRMED</span><strong>Console editions</strong></div><div><span>UNCONFIRMED</span><strong>Steam Deck status</strong></div></section>
      <section className="section-shell intro-grid"><div><span className="eyebrow">Start with the evidence</span><h2>What is Wilderdark?</h2><p>Wilderdark is a first-person survival horror exploration game from Team Junkfish, set on an unnatural island infected by a mysterious ectoparasitic organism. Steam describes corrupted dinosaurs and plant life, stealth, environmental investigation, photography, sample collection, and crafted tools.</p><p>Because the game has not launched, this guide treats every unannounced detail as unknown. It is a source-led starting point, not a complete database.</p></div><QuickFacts facts={homeFacts} /></section>
      <section id="guides" className="section-shell guides-section"><div className="section-heading"><div><span className="eyebrow">Quick navigation</span><h2>Enter the field guide</h2></div><p>Six focused guides, each grounded in the current source set.</p></div><div className="card-grid">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div></section>
      <section className="section-shell known-grid"><div className="known-panel confirmed-panel"><span className="eyebrow">Confirmed</span><h2>What we know so far</h2><ul><li>A Steam store page exists for the full game.</li><li>PC via Steam is confirmed.</li><li>A free Steam demo is available.</li><li>Steam lists November 3, 2026.</li><li>Team Junkfish develops; Junkfish Limited publishes.</li><li>It is framed as first-person survival horror.</li><li>Dinosaurs and ectoparasitic infection are central concepts.</li></ul></div><div className="known-panel unknown-panel"><span className="eyebrow">Not announced</span><h2>What remains unknown</h2><ul><li>PS5, Xbox, and Nintendo Switch versions</li><li>Steam Deck verification</li><li>A full dinosaur or creature list</li><li>A full tool and crafting list</li><li>Progress carry-over from the demo</li><li>Pre-order details</li></ul></div></section>
      <section className="section-shell faq-section"><div className="section-heading"><div><span className="eyebrow">Quick answers</span><h2>Wilderdark FAQ</h2></div><p>Short answers based on what is currently listed.</p></div><FAQAccordion items={homeFaq} /></section>
      <section className="section-shell"><SourceList sources={[{ name: "Steam — Wilderdark", url: "https://store.steampowered.com/app/2735850/Wilderdark/", note: "Primary game, launch, gameplay, creature, and PC specification source." }, { name: "Steam — Wilderdark Demo", url: "https://store.steampowered.com/app/2735900/Wilderdark_Demo/", note: "Primary demo availability and release date source." }, { name: "Team Junkfish — Wilderdark", url: "https://www.teamjunkfish.com/games/wilderdark", note: "Developer overview, features, key facts, and official gallery." }, { name: "Gematsu launch report", url: "https://www.gematsu.com/2026/07/wilderdark-launches-november-3", note: "Secondary launch-date report." }]} /></section>
    </main>
  );
}
