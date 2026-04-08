import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { MotionLink } from "@/components/MotionLink";
import { contentShell } from "@/lib/layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.shortName} | ${siteConfig.legalName}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
  },
};

const directors = [
  "Tartenger Usaamo Ephraim",
  "Blessing Nwankwo",
  "Ives Blinge",
  "Isaac Anthony",
  "Benita Ezebamkwe",
  "Samuel Ubani",
  "Longret Dennis",
  "Gift Kelechi Ezebuiro",
];

const leadership = [
  { role: "Founder", name: "Dr. Jerry Brasfield", variant: "emerald" as const },
  { role: "CEO", name: "Dr. Miss Kendra Brasfield", variant: "ocean" as const },
  { role: "Partner", name: "Dr. Tijani Afeez Adekunle", variant: "sunset" as const },
  { role: "Facilitator / Director", name: "Miss Jessica Mwanret Johnson", variant: "forest" as const },
];

const pillars = [
  { label: "Physical", variant: "emerald" as const },
  { label: "Financial", variant: "sunset" as const },
  { label: "Mental", variant: "ocean" as const },
  { label: "Emotional", variant: "royal" as const },
];

const pillarGradients: Record<(typeof pillars)[number]["variant"], string> = {
  emerald: "from-emerald-500 to-teal-600",
  sunset: "from-amber-500 to-rose-600",
  ocean: "from-sky-500 to-indigo-600",
  royal: "from-violet-500 to-purple-700",
};

const testimonials = [
  {
    name: "Community Member",
    feedback:
      "The consultation was practical and easy to follow. I now understand how to make better daily nutrition choices.",
  },
  {
    name: "Program Attendee",
    feedback: "Their wellness presentation was clear, helpful, and motivating for our team.",
  },
  {
    name: "Client",
    feedback: "The body checkup and recommendations gave me a clear path to improve my routine.",
  },
];

const directorVariants = ["emerald", "ocean", "sunset", "forest", "royal"] as const;

export default function Home() {
  return (
    <div className={`${contentShell} flex flex-col gap-16 py-12 md:gap-20 md:py-16`}>
      <FadeIn>
        <section className="interactive-card relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-2xl shadow-emerald-900/10 backdrop-blur-md md:p-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Our mission</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
            Empower the world physically, financially, mentally, and emotionally.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Ultimate Global Nutritional Company Ltd delivers wellness support, training, and practical guidance rooted in
            integrity and people-first values.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MotionLink
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-[filter] duration-200 hover:brightness-110"
            >
              Explore services
            </MotionLink>
            <MotionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600/30 bg-white/80 px-6 py-3 text-sm font-bold text-emerald-800 backdrop-blur-sm transition-colors duration-200 hover:border-emerald-500/60"
            >
              Get in touch
            </MotionLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {pillars.map((p, i) => (
              <span
                key={p.label}
                className={`animate-pop-in rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm ${pillarGradients[p.variant]}`}
                style={{ animationDelay: `${120 + i * 70}ms` }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rotate-12 rounded-3xl bg-gradient-to-br from-amber-400/40 to-orange-500/20 blur-sm lg:block" />
          <ImagePlaceholder
            label="Hero image"
            variant="emerald"
            aspectClassName="aspect-[4/5] md:aspect-[5/6]"
            className="max-w-md lg:ml-auto"
          />
        </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.06}>
        <section className="grid gap-6 md:grid-cols-2">
        <article className="interactive-card rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md">
          <h2 className="text-2xl font-black text-slate-900">Leadership</h2>
          <p className="mt-2 text-slate-600">Meet the team guiding our mission and programs.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col gap-3">
                <ImagePlaceholder label={`${person.role} photo`} variant={person.variant} className="w-full" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{person.role}</p>
                  <p className="font-semibold text-slate-900">{person.name}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="interactive-card rounded-3xl border border-white/60 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white shadow-xl shadow-teal-900/20">
          <h2 className="text-2xl font-black">Core values</h2>
          <p className="mt-2 text-emerald-50/90">What we stand for every day.</p>
          <ul className="mt-8 space-y-4">
            {[
              "Absolute integrity",
              "People are number 1",
              "Products that work",
              "Equal opportunity for all",
              "Long range vision",
            ].map((value, i) => (
              <li
                key={value}
                className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="font-medium leading-snug">{value}</span>
              </li>
            ))}
          </ul>
        </article>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="interactive-card rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md md:p-10">
        <h2 className="text-2xl font-black text-slate-900">Incoming directors</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Leadership growth across our network.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((name, i) => (
            <div key={name} className="group flex flex-col gap-2">
              <ImagePlaceholder
                label="Photo"
                variant={directorVariants[i % directorVariants.length]}
                className="w-full max-h-40"
                aspectClassName="aspect-[5/4]"
              />
              <p className="text-center text-sm font-semibold text-slate-800">{name}</p>
            </div>
          ))}
        </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="interactive-card relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-8 shadow-lg shadow-emerald-900/5 md:p-10">
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-emerald-400/20" />
        <h2 className="text-2xl font-black text-slate-900">What we offer</h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Body checkup, recommendation, presentation, and consultation — plus guided nutrition and wellness support for
          individuals, families, and communities.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Body checkup", "Recommendation", "Presentation", "Consultation"].map((item, i) => (
            <div
              key={item}
              className="interactive-card rounded-2xl border border-white/80 bg-white/90 p-4 shadow-md shadow-emerald-900/5 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-black text-white">
                {i + 1}
              </div>
              <p className="mt-3 font-bold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.06}>
        <section className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name + item.feedback}
            className="interactive-card relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur-md"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-cyan-500" />
            <p className="pl-3 text-slate-700">&ldquo;{item.feedback}&rdquo;</p>
            <p className="mt-4 pl-3 text-sm font-bold text-slate-900">— {item.name}</p>
          </article>
        ))}
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="interactive-card rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md md:p-10">
        <h2 className="text-2xl font-black text-slate-900">Frequently asked questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="interactive-card rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <h3 className="font-bold text-slate-900">Do I need an appointment?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Yes. Booking ahead helps us prepare personalized support for you.
            </p>
          </div>
          <div className="interactive-card rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <h3 className="font-bold text-slate-900">Do you work with organizations?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Yes — presentations and group consultation programs are available.
            </p>
          </div>
          <div className="interactive-card rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <h3 className="font-bold text-slate-900">Product guidance?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Recommendations are shared during consultation based on your goals.
            </p>
          </div>
        </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.06}>
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-12 text-white shadow-2xl shadow-slate-900/40 transition-shadow duration-300 md:px-12 md:hover:shadow-emerald-900/20">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <h2 className="relative text-3xl font-black tracking-tight">Ready to start your wellness journey?</h2>
        <p className="relative mt-3 max-w-2xl text-lg text-slate-300">
          Book a consultation for practical, people-first guidance and a clearer path forward.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <MotionLink
            href="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-emerald-500/20 transition-[filter] duration-200 hover:brightness-105"
          >
            Book consultation
          </MotionLink>
          <MotionLink
            href="/products"
            className="inline-flex rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
          >
            View products
          </MotionLink>
        </div>
        </section>
      </FadeIn>
    </div>
  );
}
