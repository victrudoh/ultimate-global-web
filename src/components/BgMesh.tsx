export function BgMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f0fdf9]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(16,185,129,0.22),transparent)]" />
      <div className="absolute -left-24 top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="absolute -right-16 top-1/3 h-[22rem] w-[22rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-amber-400/15 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-64 w-64 rotate-12 rounded-[2rem] border border-emerald-200/40 bg-gradient-to-br from-emerald-500/10 to-transparent" />
      <div className="absolute left-[12%] top-[45%] h-40 w-40 -rotate-6 rounded-full border border-teal-300/30 bg-gradient-to-tr from-teal-400/15 to-transparent" />
    </div>
  );
}
