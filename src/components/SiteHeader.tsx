"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contentShell } from "@/lib/layout";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function linkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const linkClass = (href: string, mobile = false) => {
    const active = linkActive(pathname, href);
    const base =
      "rounded-full text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";
    if (mobile) {
      return active
        ? `${base} bg-emerald-600 px-4 py-3 text-white shadow-md shadow-emerald-900/20`
        : `${base} px-4 py-3 text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-900`;
    }
    return active
      ? `${base} bg-emerald-600 px-3.5 py-2 text-white shadow-sm shadow-emerald-900/15`
      : `${base} px-3.5 py-2 text-slate-600 hover:bg-emerald-500/10 hover:text-emerald-800`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl">
      <div className={`${contentShell} flex items-center justify-between gap-4 py-4`}>
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3" onClick={() => setMenuOpen(false)}>
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-md shadow-emerald-900/20 ring-1 ring-white/60 sm:h-11 sm:w-11">
            <span className="flex h-full w-full items-center justify-center rounded-[0.85rem] bg-white">
              <Image
                src="/logo.jpg"
                alt="Ultimate Global Nutritional Company logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              />
            </span>
          </span>
          <span className="min-w-0 flex flex-col leading-tight">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-700 sm:text-[0.65rem] sm:tracking-[0.2em]">
              Nutrition
            </span>
            <span className="truncate text-sm font-black tracking-tight text-slate-900 sm:text-base">ULTIMATE GLOBAL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href, false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm backdrop-blur-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "max-h-[min(70vh,28rem)] border-t border-white/50" : "max-h-0 overflow-hidden border-transparent"} bg-white/90 backdrop-blur-xl transition-[max-height] duration-200 ease-out`}
        aria-hidden={!menuOpen}
      >
        <nav className={`${contentShell} flex flex-col gap-1 py-4`} aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href, true)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
