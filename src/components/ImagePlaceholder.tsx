"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springSoft } from "@/lib/motion";

const variants = {
  emerald: "from-emerald-400 via-teal-500 to-cyan-600",
  ocean: "from-sky-400 via-blue-600 to-indigo-700",
  sunset: "from-amber-400 via-orange-500 to-rose-600",
  forest: "from-lime-400 via-emerald-600 to-teal-800",
  royal: "from-violet-500 via-purple-600 to-indigo-800",
} as const;

type Variant = keyof typeof variants;

type ImagePlaceholderProps = {
  label?: string;
  variant?: Variant;
  aspectClassName?: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  variant = "emerald",
  aspectClassName = "aspect-square",
  className = "",
}: ImagePlaceholderProps) {
  const gradient = variants[variant];
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/40 shadow-lg shadow-emerald-900/10 ${aspectClassName} ${className}`}
      whileHover={reduce ? undefined : { scale: 1.02, y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.995 }}
      transition={springSoft}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute -right-1/4 -top-1/3 h-2/3 w-2/3 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute -bottom-1/3 -left-1/4 h-3/4 w-3/4 rounded-full bg-black/10 blur-3xl" />
      <div className="absolute right-4 top-4 h-16 w-16 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6" />
      <div className="absolute bottom-6 left-6 h-10 w-24 rounded-full border border-white/20 bg-white/10" />
      {label ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 pb-3 pt-10">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">{label}</p>
        </div>
      ) : null}
    </motion.div>
  );
}
