import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";

export default function AboutPage() {
  return (
    <div className={`${contentShell} space-y-10 py-12 md:py-16`}>
      <PageIntro
        title="About us"
        subtitle="Ultimate Global Nutritional Company Ltd is a wellness-focused company committed to empowering people physically, financially, mentally, and emotionally."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4 text-lg leading-relaxed text-slate-600">
          <p>
            Our leadership team and growing network of directors provide structured support through training,
            consultation, recommendations, and community-centered health awareness programs.
          </p>
          <p>
            We combine practical guidance with people-first values so clients can build sustainable habits and stronger
            outcomes over time.
          </p>
        </div>
        <ImagePlaceholder label="About / team image" variant="ocean" aspectClassName="aspect-[4/3]" className="w-full" />
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md">
          <h2 className="text-xl font-black text-slate-900">Our mission</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            To empower the world physically, financially, mentally, and emotionally with practical guidance, useful
            products, and people-first support.
          </p>
        </article>
        <article className="rounded-3xl border border-white/60 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 p-8 text-white shadow-xl shadow-emerald-900/20">
          <h2 className="text-xl font-black">Our vision</h2>
          <p className="mt-4 leading-relaxed text-emerald-50/90">
            To build a healthier, stronger, and better-informed global community where every person has access to reliable
            nutrition and wellness support.
          </p>
        </article>
      </section>
    </div>
  );
}
