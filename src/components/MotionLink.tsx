"use client";

import Link, { type LinkProps } from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion";

type MotionLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
};

const MLink = motion.create(Link);

export function MotionLink({ className, children, ...props }: MotionLinkProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <MLink
      className={className}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springSnappy}
      {...props}
    >
      {children}
    </MLink>
  );
}
