/**
 * Canonical site URL for metadata, Open Graph, and Twitter cards.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * On Vercel, VERCEL_URL is used as a fallback when the public URL is not set.
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (custom) return custom;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "https://ultimate-global-web.vercel.app";
}

export const siteConfig = {
  legalName: "Ultimate Global Nutritional Company Ltd",
  shortName: "Ultimate Global",
  tagline: "Our mission is to empower the world",
  description:
    "Ultimate Global Nutritional Company Ltd — wellness, nutrition, and empowerment physically, financially, mentally, and emotionally. Body checkups, consultation, presentations, and trusted product guidance.",
  email: "ultimateglobalnutritionalco@gmail.com",
  phoneDisplay: "09068041633",
  phoneTel: "+2349068041633",
  registrationNumber: "9434621",
  locale: "en_NG",
  language: "en",
  keywords: [
    "Ultimate Global",
    "nutritional company",
    "wellness",
    "nutrition",
    "health consultation",
    "body checkup",
    "Nigeria",
    "wellness training",
    "nutritional products",
  ],
} as const;
