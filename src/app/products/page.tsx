import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";

const products = [
  {
    name: "Daily Wellness Pack",
    use: "General daily nutritional support for active lifestyles.",
    variant: "emerald" as const,
  },
  {
    name: "Body Balance Support",
    use: "Supports healthy body systems as part of a consistent wellness routine.",
    variant: "ocean" as const,
  },
  {
    name: "Vitality Nutrition Kit",
    use: "Designed to support energy, focus, and overall wellbeing.",
    variant: "sunset" as const,
  },
  {
    name: "Consultation-Based Product Plan",
    use: "Personalized product guidance based on your checkup and health goals.",
    variant: "royal" as const,
  },
];

export default function ProductsPage() {
  return (
    <div className={`${contentShell} space-y-12 py-12 md:py-16`}>
      <PageIntro
        title="Products"
        subtitle="Products are selected to complement healthy habits and wellness goals. Final recommendations are made after a consultation to ensure suitability."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.name}
            className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-xl shadow-emerald-900/5 backdrop-blur-md"
          >
            <ImagePlaceholder
              label="Product image"
              variant={product.variant}
              aspectClassName="aspect-[16/9]"
              className="rounded-b-none rounded-t-3xl ring-0 shadow-none"
            />
            <div className="p-6">
              <h2 className="text-xl font-black text-slate-900">{product.name}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{product.use}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-xl shadow-teal-900/20 md:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        <h2 className="relative text-2xl font-black">Need help choosing?</h2>
        <p className="relative mt-2 max-w-2xl text-emerald-50/95">
          Contact us for a product guidance session based on your wellness goals and current routine.
        </p>
      </section>
    </div>
  );
}
