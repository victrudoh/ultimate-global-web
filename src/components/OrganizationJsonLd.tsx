import { getSiteUrl, siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url,
    logo: `${url}/logo.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    slogan: siteConfig.tagline,
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Corporate registration (RC)",
      value: siteConfig.registrationNumber,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
