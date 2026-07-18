import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Wilderdark Guide Wiki home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span><strong>Wilderdark</strong><small>Guide Wiki</small></span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
