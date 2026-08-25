import owlAsset from "@/assets/owl.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

export function Teaser({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-arcade-bg-deep px-6 py-20 text-arcade-fg">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--arcade-neon)_1px,transparent_1px),linear-gradient(90deg,var(--arcade-neon)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arcade-neon/20 blur-[130px] animate-glow-pulse" />

      <img
        src={logoAsset.url}
        alt="Bengal E-Summit 2026 logo"
        className="relative w-44 animate-float-soft drop-shadow-[0_10px_40px_oklch(0.72_0.12_80/0.45)] sm:w-56"
      />

      <div className="relative mt-8 text-center animate-rise-in">
        <p className="font-arcade text-4xl font-bold tracking-tight sm:text-6xl">
          HEY YOU. <span className="inline-block animate-wiggle">👀</span>
        </p>
        <p className="mt-5 font-arcade text-lg text-arcade-fg/70 sm:text-xl">
          We have something for you.
        </p>
        <p className="mt-1 font-arcade text-lg text-arcade-fg/70 sm:text-xl">But first…</p>
        <p className="mt-4 font-arcade text-2xl font-semibold text-gold-gradient sm:text-3xl">
          earn your invitation.
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative mt-12 overflow-hidden rounded-full border border-gold/60 bg-arcade-bg px-10 py-4 font-arcade text-sm font-bold uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:scale-[1.04] hover:shadow-[var(--shadow-glow)]"
      >
        <span className="relative z-10">Open the game</span>
        <span className="absolute inset-0 -translate-x-full bg-gold/15 transition-transform duration-500 group-hover:translate-x-0" />
      </button>

      <img
        src={owlAsset.url}
        alt="Summit mascot owl pointing the way"
        className="pointer-events-none relative mt-10 w-64 opacity-90 animate-float-soft sm:w-80"
      />
    </section>
  );
}
