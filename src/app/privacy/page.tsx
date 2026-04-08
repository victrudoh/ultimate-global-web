import { PageIntro } from "@/components/PageIntro";
import { contentShell } from "@/lib/layout";

export default function PrivacyPage() {
  return (
    <div className={`${contentShell} py-12 md:py-16`}>
      <PageIntro title="Privacy policy" subtitle="How we handle information you share with us." />
      <div className="mt-8 rounded-3xl border border-white/60 bg-white/85 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md">
        <p className="leading-relaxed text-slate-700">
          Ultimate Global Nutritional Company Ltd respects your privacy. We only collect information shared during
          consultation or contact requests to provide our services effectively.
        </p>
        <ul className="mt-6 list-inside list-disc space-y-3 text-slate-700">
          <li>Contact details are used for communication and service follow-up.</li>
          <li>Health and wellness information is handled with confidentiality.</li>
          <li>We do not sell personal information to third parties.</li>
          <li>By using our services, you consent to this policy.</li>
        </ul>
      </div>
    </div>
  );
}
