const services = [
  {
    title: "Body Checkup",
    description: "Basic wellness and nutrition-oriented body checkups to help clients understand their current health status.",
  },
  {
    title: "Recommendation",
    description: "Guided recommendations on nutrition, lifestyle, and wellness routines tailored to individual needs.",
  },
  {
    title: "Presentation",
    description: "Educational presentations for groups, organizations, and communities on wellness and healthy living.",
  },
  {
    title: "Consultation",
    description: "One-on-one or group consultations focused on practical action steps and sustainable wellness habits.",
  },
];

const products = ["Nutritional support products", "Daily wellness essentials", "Program-focused health kits"];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-black text-slate-900">Services & Products</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        We provide practical wellness solutions for individuals and organizations through our core service offerings
        and curated nutritional products.
      </p>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-slate-700">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Product Focus</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
          {products.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Product catalogue and pricing can be shared directly after consultation.
        </p>
      </section>
    </div>
  );
}
