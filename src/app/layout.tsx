import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { BgMesh } from "@/components/BgMesh";
import { SiteHeader } from "@/components/SiteHeader";
import { contentShell } from "@/lib/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ultimate Global Nutritional Company",
    template: "%s | Ultimate Global",
  },
  description:
    "Ultimate Global Nutritional Company Ltd - empowering the world physically, financially, mentally, and emotionally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full flex flex-col text-slate-900">
        <BgMesh />
        <SiteHeader />
        <main className="relative z-0 flex-1">{children}</main>
        <footer className="relative z-0 border-t border-white/50 bg-white/70 backdrop-blur-md">
          <div className={`${contentShell} grid gap-4 py-10 text-sm text-slate-600 sm:grid-cols-3`}>
            <div>
              <p className="font-semibold text-slate-900">Ultimate Global Nutritional Company Ltd</p>
              <p className="mt-2 text-slate-600">RC: 9434621</p>
            </div>
            <p className="sm:text-center">
              <span className="block font-medium text-slate-800">09068041633</span>
              <span className="mt-1 block">ultimateglobalnutritionalco@gmail.com</span>
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
