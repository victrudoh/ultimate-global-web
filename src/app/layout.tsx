import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { BgMesh } from "@/components/BgMesh";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { contentShell } from "@/lib/layout";
import { getSiteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecfdf5" },
    { media: "(prefers-color-scheme: dark)", color: "#064e3b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.legalName}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.legalName, url: siteUrl }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "health",
  keywords: [...siteConfig.keywords],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: `${siteConfig.legalName} logo`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col text-slate-900">
        <OrganizationJsonLd />
        <BgMesh />
        <SiteHeader />
        <main className="relative z-0 flex-1">{children}</main>
        <footer className="relative z-0 border-t border-white/50 bg-white/70 backdrop-blur-md">
          <div className={`${contentShell} grid gap-4 py-10 text-sm text-slate-600 sm:grid-cols-3`}>
            <div>
              <p className="font-semibold text-slate-900">{siteConfig.legalName}</p>
              <p className="mt-2 text-slate-600">RC: {siteConfig.registrationNumber}</p>
            </div>
            <p className="sm:text-center">
              <span className="block font-medium text-slate-800">{siteConfig.phoneDisplay}</span>
              <span className="mt-1 block">{siteConfig.email}</span>
            </p>
            <p className="sm:text-right">
              <Link href="/privacy" className="font-medium text-emerald-800 hover:underline">
                Privacy
              </Link>
              <span className="mx-2 text-slate-300">|</span>
              <Link href="/terms" className="font-medium text-emerald-800 hover:underline">
                Terms
              </Link>
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
