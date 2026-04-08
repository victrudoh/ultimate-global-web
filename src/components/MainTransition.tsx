"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

export function MainTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <main className="relative z-0 flex-1">{children}</main>;
  }

  return (
    <motion.main
      className="relative z-0 flex-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: easeOut }}
    >
      {children}
    </motion.main>
  );
}
