import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms of use for ${siteConfig.legalName} services and website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Terms of use | ${siteConfig.shortName}`,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className={`${contentShell} py-12 md:py-16`}>
      <PageIntro title="Terms of use" subtitle="Guidelines for engaging with our services and this website." />
      <div className="mt-8 rounded-3xl border border-white/60 bg-white/85 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md">
        <p className="leading-relaxed text-slate-700">
          By engaging with Ultimate Global Nutritional Company Ltd services, you agree to these terms.
        </p>
        <ul className="mt-6 list-inside list-disc space-y-3 text-slate-700">
          <li>Consultation recommendations are for wellness guidance purposes.</li>
          <li>Clients are encouraged to seek medical advice for critical health concerns.</li>
          <li>Appointments should be honored or rescheduled in advance.</li>
          <li>Content on this site is company information and may be updated at any time.</li>
        </ul>
      </div>
    </div>
  );
}
