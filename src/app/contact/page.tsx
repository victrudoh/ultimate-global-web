import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.legalName}: phone ${siteConfig.phoneDisplay}, email, consultation booking, and partnership inquiries.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.shortName}`,
    description: `Reach ${siteConfig.legalName} for wellness consultation, presentations, and programs.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className={`${contentShell} space-y-10 py-12 md:py-16`}>
      <PageIntro
        title="Contact us"
        subtitle="Reach out for consultation, partnership, and program inquiries. We respond as quickly as possible."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        <div className="space-y-6">
          <article className="rounded-3xl border border-white/60 bg-white/85 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md">
            <h2 className="text-xl font-black text-slate-900">Direct contact</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Phone</span>
                <br />
                <a href="tel:+2349068041633" className="text-lg font-semibold text-slate-900 hover:text-emerald-800">
                  09068041633
                </a>
              </li>
              <li>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Email</span>
                <br />
                <a
                  href="mailto:ultimateglobalnutritionalco@gmail.com"
                  className="break-all font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  ultimateglobalnutritionalco@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">Company</span>
                <p className="mt-1 font-semibold text-slate-900">Ultimate Global Nutritional Company Ltd</p>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 shadow-lg shadow-emerald-900/5">
            <h2 className="text-xl font-black text-emerald-950">Available for</h2>
            <ul className="mt-4 grid gap-2 text-emerald-900/90 sm:grid-cols-2">
              {[
                "Body checkup scheduling",
                "Wellness recommendations",
                "Health and nutrition presentations",
                "Personal and group consultations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-2xl border border-emerald-200/50 bg-white/70 px-3 py-2 text-sm font-medium">
                  <span className="text-emerald-600">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <ImagePlaceholder
          label="Office / location image"
          variant="forest"
          aspectClassName="aspect-[4/5] lg:aspect-auto lg:min-h-[28rem]"
          className="w-full lg:h-full"
        />
      </div>
    </div>
  );
}
