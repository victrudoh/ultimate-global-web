type PageIntroProps = {
  title: string;
  subtitle?: string;
};

export function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-8 shadow-xl shadow-emerald-900/5 backdrop-blur-md md:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-32 w-64 rotate-3 rounded-full bg-amber-400/15 blur-2xl" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Ultimate Global</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
