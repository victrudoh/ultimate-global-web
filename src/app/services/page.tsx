import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";

const services = [
  {
    title: "Body Checkup",
    description:
      "Basic wellness and nutrition-oriented body checkups to help clients understand their current health status.",
    variant: "emerald" as const,
  },
  {
    title: "Recommendation",
    description: "Guided recommendations on nutrition, lifestyle, and wellness routines tailored to individual needs.",
    variant: "ocean" as const,
  },
  {
    title: "Presentation",
    description:
      "Educational presentations for groups, organizations, and communities on wellness and healthy living.",
    variant: "sunset" as const,
  },
  {
    title: "Consultation",
    description:
      "One-on-one or group consultations focused on practical action steps and sustainable wellness habits.",
    variant: "forest" as const,
  },
];

const products = ["Nutritional support products", "Daily wellness essentials", "Program-focused health kits"];

export default function ServicesPage() {
  return (
    <div className={`${contentShell} space-y-12 py-12 md:py-16`}>
      <PageIntro
        title="Services & products"
        subtitle="Practical wellness solutions for individuals and organizations through core services and curated nutritional support."
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-xl shadow-emerald-900/5 backdrop-blur-md"
              >
                <ImagePlaceholder
                  label={`${service.title} image`}
                  variant={service.variant}
                  aspectClassName="aspect-[16/10]"
                  className="rounded-b-none rounded-t-3xl ring-0 shadow-none"
                />
                <div className="p-6">
                  <h2 className="text-xl font-black text-slate-900">{service.title}</h2>
                  <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="rounded-3xl border border-white/60 bg-gradient-to-b from-emerald-600 to-teal-700 p-6 text-white shadow-xl shadow-teal-900/25">
          <h2 className="text-lg font-black">Product focus</h2>
          <ul className="mt-4 space-y-3 text-sm font-medium text-emerald-50">
            {products.map((product) => (
              <li key={product} className="flex gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2">
                <span className="text-emerald-200">✓</span>
                {product}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-emerald-100/90">
            Product catalogue and pricing can be shared directly after consultation.
          </p>
        </aside>
      </div>
    </div>
  );
}
