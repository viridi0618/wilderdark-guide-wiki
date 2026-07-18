import Link from "next/link";
import type { Guide } from "@/data/guides";
import { resolveAssetUrl } from "@/lib/site";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="guide-card">
      <Link href={`/${guide.slug}`} aria-label={`Read ${guide.h1}`}>
        {/* Plain img is intentional: the MVP uses remote official Steam artwork with the requested loading attributes. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveAssetUrl(guide.image)} alt={guide.imageAlt || ""} width="460" height="200" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
      </Link>
      <div className="guide-card-body"><span className="eyebrow">{guide.eyebrow}</span><h3><Link href={`/${guide.slug}`}>{guide.h1}</Link></h3><p>{guide.description}</p><Link className="text-link" href={`/${guide.slug}`}>Open guide <span aria-hidden="true">→</span></Link></div>
    </article>
  );
}
