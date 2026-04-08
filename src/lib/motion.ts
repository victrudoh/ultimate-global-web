/** Shared easing for Framer Motion (smooth deceleration). */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy = { type: "spring" as const, stiffness: 420, damping: 28 };

export const springSoft = { type: "spring" as const, stiffness: 260, damping: 22 };
