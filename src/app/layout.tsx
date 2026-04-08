import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import Link from "next/link";
import { BgMesh } from "@/components/BgMesh";
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

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

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
        <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-md shadow-emerald-900/20 ring-1 ring-white/60">
                <span className="flex h-full w-full items-center justify-center rounded-[0.85rem] bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="Ultimate Global Nutritional Company logo"
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-emerald-700">Nutrition</span>
                <span className="text-base font-black tracking-tight text-slate-900">ULTIMATE GLOBAL</span>
              </span>
            </Link>
            <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-emerald-500/10 hover:text-emerald-800"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="relative z-0 flex-1">{children}</main>
        <footer className="relative z-0 border-t border-white/50 bg-white/70 backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-10 text-sm text-slate-600 sm:grid-cols-3">
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
