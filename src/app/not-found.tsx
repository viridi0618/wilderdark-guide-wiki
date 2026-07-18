import Link from "next/link";
export default function NotFound() { return <main className="not-found"><span className="eyebrow">Signal lost</span><h1>Guide not found</h1><p>This page is not part of the current pre-launch field guide.</p><Link className="button primary" href="/">Return to the guide</Link></main>; }
