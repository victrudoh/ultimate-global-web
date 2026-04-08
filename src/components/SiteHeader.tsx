"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contentShell } from "@/lib/layout";
import { easeOut, springSnappy } from "@/lib/motion";
import { MotionLink } from "@/components/MotionLink";

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

function scrollWindowTop(behavior: ScrollBehavior = "instant") {
  window.scrollTo({ top: 0, left: 0, behavior });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const mobileNavScrollPending = useRef(false);

  useEffect(() => {
    if (!mobileNavScrollPending.current) return;
    mobileNavScrollPending.current = false;
    scrollWindowTop("instant");
  }, [pathname]);

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
      "rounded-full text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";
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
    <motion.header
      className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl"
      initial={reduce ? false : { y: -12, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <div className={`${contentShell} flex items-center justify-between gap-4 py-4`}>
        <MotionLink
          href="/"
          className="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <motion.span
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-md shadow-emerald-900/20 ring-1 ring-white/60 sm:h-11 sm:w-11"
            whileHover={reduce ? undefined : { scale: 1.06, rotate: -2 }}
            transition={springSnappy}
          >
            <span className="flex h-full w-full items-center justify-center rounded-[0.85rem] bg-white">
              <Image
                src="/logo.jpg"
                alt="Ultimate Global Nutritional Company logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              />
            </span>
          </motion.span>
          <span className="min-w-0 flex flex-col leading-tight">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-700 sm:text-[0.65rem] sm:tracking-[0.2em]">
              Nutrition
            </span>
            <span className="truncate text-sm font-black tracking-tight text-slate-900 sm:text-base">ULTIMATE GLOBAL</span>
          </span>
        </MotionLink>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main">
          {nav.map((item) => (
            <MotionLink key={item.href} href={item.href} className={linkClass(item.href, false)}>
              {item.label}
            </MotionLink>
          ))}
        </nav>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm backdrop-blur-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          whileHover={reduce ? undefined : { backgroundColor: "rgba(255,255,255,0.95)" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.svg
                key="close"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "max-h-[min(70vh,28rem)] border-t border-white/50" : "max-h-0 overflow-hidden border-transparent"} bg-white/90 backdrop-blur-xl transition-[max-height] duration-300 ease-out`}
        aria-hidden={!menuOpen}
      >
        <nav className={`${contentShell} flex flex-col gap-1 py-4`} aria-label="Mobile">
          {menuOpen
            ? nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.28, ease: easeOut }}
                >
                  <Link
                    href={item.href}
                    className={linkClass(item.href, true)}
                    onClick={() => {
                      setMenuOpen(false);
                      mobileNavScrollPending.current = true;
                      scrollWindowTop("instant");
                      requestAnimationFrame(() => scrollWindowTop("instant"));
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))
            : null}
        </nav>
      </div>
    </motion.header>
  );
}
