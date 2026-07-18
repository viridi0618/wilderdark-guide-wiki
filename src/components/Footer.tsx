import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><div className="footer-brand">Wilderdark Guide Wiki</div><p>Confirmed facts. Clearly marked unknowns. No invented lore.</p></div>
        <nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
      <p className="disclaimer">Wilderdark Guide Wiki is an independent fan-made guide site and is not affiliated with Team Junkfish or Junkfish Limited. Wilderdark is a trademark of its respective owner.</p>
    </footer>
  );
}
