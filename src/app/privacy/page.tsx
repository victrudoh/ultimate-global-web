export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">
        Ultimate Global Nutritional Company Ltd respects your privacy. We only collect information shared during
        consultation or contact requests to provide our services effectively.
      </p>
      <ul className="mt-5 list-inside list-disc space-y-2 text-slate-700">
        <li>Contact details are used for communication and service follow-up.</li>
        <li>Health and wellness information is handled with confidentiality.</li>
        <li>We do not sell personal information to third parties.</li>
        <li>By using our services, you consent to this policy.</li>
      </ul>
    </div>
  );
}
