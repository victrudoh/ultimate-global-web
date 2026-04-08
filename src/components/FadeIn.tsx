"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function FadeIn({ children, className, delay = 0, y = 18, once = true }: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-48px", amount: 0.12 }}
      transition={{ duration: 0.52, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
