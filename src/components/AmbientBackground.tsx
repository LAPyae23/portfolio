export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050507]" />
      <div className="grid-fade absolute inset-0 opacity-70" />
      <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-[140px]" />
      <div className="absolute top-[38%] -left-32 h-[420px] w-[420px] rounded-full bg-fuchsia-700/15 blur-[130px]" />
      <div className="absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-pink-400/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,#050507_78%)]" />
    </div>
  );
}
