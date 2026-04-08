import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Ultimate Global Nutritional Company",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-extrabold tracking-tight text-emerald-700">
              ULTIMATE GLOBAL
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-8 text-sm text-slate-600 sm:grid-cols-3">
            <p>Ultimate Global Nutritional Company Ltd</p>
            <p className="sm:text-center">Phone: 09068041633 | Email: ultimateglobalnutritionalco@gmail.com</p>
            <p className="sm:text-right">
              <Link href="/privacy" className="hover:text-emerald-700">
                Privacy
              </Link>{" "}
              |{" "}
              <Link href="/terms" className="hover:text-emerald-700">
                Terms
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
