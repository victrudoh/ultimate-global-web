export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-black text-slate-900">Contact Us</h1>
      <p className="mt-3 text-slate-700">
        Reach out to Ultimate Global Nutritional Company Ltd for consultation, partnership, and program inquiries.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Direct Contact</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+2349068041633" className="text-emerald-700 underline-offset-2 hover:underline">
                09068041633
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:ultimateglobalnutritionalco@gmail.com"
                className="text-emerald-700 underline-offset-2 hover:underline"
              >
                ultimateglobalnutritionalco@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Company:</span> Ultimate Global Nutritional Company Ltd
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">Available For</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-emerald-900/90">
            <li>Body checkup scheduling</li>
            <li>Wellness recommendations</li>
            <li>Health and nutrition presentations</li>
            <li>Personal and group consultations</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
