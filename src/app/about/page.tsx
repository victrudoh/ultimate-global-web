export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-black text-slate-900">About Us</h1>
        <p className="mt-4 text-slate-700">
          Ultimate Global Nutritional Company Ltd is a wellness-focused company committed to empowering people in all
          areas of life: physically, financially, mentally, and emotionally.
        </p>
        <p className="mt-3 text-slate-700">
          Our leadership team and growing network of directors provide structured support through training,
          consultation, recommendations, and community-centered health awareness programs.
        </p>
      </div>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-slate-700">
            To empower the world physically, financially, mentally, and emotionally with practical guidance, useful
            products, and people-first support.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-slate-700">
            To build a healthier, stronger, and better-informed global community where every person has access to
            reliable nutrition and wellness support.
          </p>
        </article>
      </section>
    </div>
  );
}
