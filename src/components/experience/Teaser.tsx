import { useState } from "react";
import owlAsset from "@/assets/owl.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import { sfx } from "@/lib/sound";

export function Teaser({ onStart }: { onStart: (name: string) => void }) {
  const [name, setName] = useState("");
  const trimmed = name.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    sfx.unlock();
    onStart(trimmed);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-arcade-bg-deep px-5 py-16 text-arcade-fg">
      <div className="grain-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-arcade-neon/20 blur-[130px] animate-glow-pulse" />

      <img
        src={logoAsset.url}
        alt="Bengal E-Summit 2026 logo"
        className="relative w-32 animate-float-soft drop-shadow-[0_10px_40px_oklch(0.72_0.12_80/0.45)] sm:w-52"
      />

      <div className="relative mt-6 text-center animate-rise-in">
        <p className="font-arcade text-3xl font-bold tracking-tight sm:text-6xl">
          HEY YOU. <span className="inline-block animate-wiggle">👀</span>
        </p>
        <p className="mt-4 font-arcade text-base text-arcade-fg/70 sm:text-xl">
          We have something for you.
        </p>
        <p className="mt-1 font-arcade text-base text-arcade-fg/70 sm:text-xl">But first…</p>
        <p className="mt-3 font-arcade text-xl font-semibold text-gold-gradient sm:text-3xl">
          earn your invitation.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="relative mt-8 flex w-full max-w-sm flex-col items-stretch gap-4"
      >
        <label
          htmlFor="guest-name"
          className="text-center font-arcade text-[0.65rem] uppercase tracking-[0.35em] text-arcade-fg/50"
        >
          What should we call you?
        </label>
        <input
          id="guest-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          maxLength={40}
          className="w-full rounded-full border border-gold/40 bg-arcade-bg px-6 py-4 text-center font-arcade text-base text-arcade-fg outline-none transition-all placeholder:text-arcade-fg/30 focus:border-gold focus:shadow-[var(--shadow-glow)]"
        />
        <button
          type="submit"
          disabled={!trimmed}
          className="group relative overflow-hidden rounded-full border border-gold/60 bg-arcade-bg px-8 py-4 font-arcade text-xs font-bold uppercase tracking-[0.28em] text-gold transition-all duration-300 enabled:hover:scale-[1.04] enabled:hover:shadow-[var(--shadow-glow)] disabled:opacity-40 sm:text-sm"
        >
          <span className="relative z-10">Open the game</span>
        </button>
      </form>

      <img
        src={owlAsset.url}
        alt="Summit mascot owl pointing the way"
        className="pointer-events-none relative mt-8 w-44 opacity-90 animate-float-soft sm:w-72"
      />
    </section>
  );
}
