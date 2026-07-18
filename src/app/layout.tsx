import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DEFAULT_DESCRIPTION, DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Wilderdark Wiki Guide: Release Date, Demo & Dinosaurs", template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE_NAME, title: "Wilderdark Wiki Guide: Release Date, Demo & Dinosaurs", description: DEFAULT_DESCRIPTION, url: "/", images: [{ url: DEFAULT_SOCIAL_IMAGE, width: 460, height: 215, alt: "Wilderdark official store artwork" }] },
  twitter: { card: "summary_large_image", title: "Wilderdark Wiki Guide: Release Date, Demo & Dinosaurs", description: DEFAULT_DESCRIPTION, images: [DEFAULT_SOCIAL_IMAGE] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2ZX8XE3DV"></script><script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Z2ZX8XE3DV');` }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><div id="main-content">{children}</div><Footer /></body></html>;
}
