import Image from "next/image";
import Link from "next/link";

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

const testimonials = [
  {
    name: "Community Member",
    feedback: "The consultation was practical and easy to follow. I now understand how to make better daily nutrition choices.",
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

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10">
      <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 px-8 py-10 text-white md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-100">
            Welcome to
          </p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">
            Ultimate Global Nutritional Company Ltd
          </h1>
          <p className="mt-4 max-w-2xl text-emerald-50">
            Our mission is to empower the world physically, financially, mentally, and emotionally through wellness
            support, training, and practical guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-700">
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/80 px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Image src="/logo.jpg" alt="Ultimate Global company logo" width={230} height={230} className="rounded-2xl bg-white p-2" />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Leadership</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              <span className="font-semibold">Founder:</span> Dr. Jerry Brasfield
            </li>
            <li>
              <span className="font-semibold">CEO:</span> Dr. Miss Kendra Brasfield
            </li>
            <li>
              <span className="font-semibold">Partner:</span> Dr. Tijani Afeez Adekunle
            </li>
            <li>
              <span className="font-semibold">Facilitator / Director:</span> Miss Jessica Mwanret Johnson
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Core Values</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Absolute integrity</li>
            <li>People are number 1</li>
            <li>Products that work</li>
            <li>Equal opportunity for all</li>
            <li>Long range vision</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Incoming Directors</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((name) => (
            <div key={name} className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-xl font-bold text-emerald-900">What We Offer</h2>
        <p className="mt-3 max-w-3xl text-emerald-900/90">
          Body checkup, recommendation, presentation, and consultation. We also provide guided nutrition and wellness
          support for individuals, families, and communities.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name + item.feedback} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-slate-700">&ldquo;{item.feedback}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-slate-900">- {item.name}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">Do I need an appointment before visiting?</h3>
            <p className="text-slate-700">Yes, appointments are recommended so we can prepare personalized support.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Do you work with groups and organizations?</h3>
            <p className="text-slate-700">Yes. We offer presentations and consultation programs for groups and teams.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Can I request product guidance?</h3>
            <p className="text-slate-700">Yes, product recommendations are provided during consultation based on your goals.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-bold">Ready to Start Your Wellness Journey?</h2>
        <p className="mt-2 max-w-2xl text-slate-200">
          Book a consultation today and get practical, people-first guidance for better wellness results.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white">
            Book Consultation
          </Link>
          <Link href="/products" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-white">
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}
