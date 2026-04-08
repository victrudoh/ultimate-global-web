const products = [
  {
    name: "Daily Wellness Pack",
    use: "General daily nutritional support for active lifestyles.",
  },
  {
    name: "Body Balance Support",
    use: "Supports healthy body systems as part of a consistent wellness routine.",
  },
  {
    name: "Vitality Nutrition Kit",
    use: "Designed to support energy, focus, and overall wellbeing.",
  },
  {
    name: "Consultation-Based Product Plan",
    use: "Personalized product guidance based on your checkup and health goals.",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-black text-slate-900">Products</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Our products are selected to complement healthy habits and wellness goals. Final recommendations are made after
        a consultation to ensure suitability.
      </p>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
            <p className="mt-2 text-slate-700">{product.use}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-xl font-bold text-emerald-900">Need help choosing?</h2>
        <p className="mt-2 text-emerald-900/90">
          Contact us for a product guidance session based on your wellness goals and current routine.
        </p>
      </section>
    </div>
  );
}
