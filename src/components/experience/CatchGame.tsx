import { useCallback, useEffect, useState } from "react";
import owlImg from "@/assets/2.png";
import { sfx } from "@/lib/sound";

export function CatchGame({ onComplete }: { onComplete: () => void }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [done, setDone] = useState(false);

  const jump = useCallback(() => {
    setPos({ x: 20 + Math.random() * 60, y: 22 + Math.random() * 56 });
    sfx.hop();
  }, []);

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(jump, 1800);
    return () => window.clearInterval(id);
  }, [jump, done]);

  const handleCatch = () => {
    if (done) return;
    sfx.catch();
    setDone(true);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-arcade-bg-deep px-4 py-10 text-arcade-fg">
      <div className="grain-bg pointer-events-none absolute inset-0" />

      <h1 className="relative text-center font-arcade text-xl font-bold uppercase tracking-[0.16em] text-gold-gradient sm:text-4xl">
        Don&apos;t let the idea escape
      </h1>
      <p className="relative mt-3 text-center font-arcade text-xs text-arcade-fg/60 sm:text-base">
        Because good ideas don&apos;t wait. One tap is all it takes.
      </p>

      <div className="relative mt-6 h-[52vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-arcade-bg shadow-[inset_0_0_80px_oklch(0_0_0/0.6)] sm:h-[58vh]">
        {!done ? (
          <button
            aria-label="Catch the mascot"
            onClick={handleCatch}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            className="absolute flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full transition-all duration-700 ease-out active:scale-95 sm:h-44 sm:w-44"
          >
            <span className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
            <img
              src={owlImg}
              alt="Summit mascot"
              className="relative h-full w-full select-none object-contain drop-shadow-[0_0_25px_oklch(0.82_0.17_85/0.6)]"
              draggable={false}
            />
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center animate-rise-in">
            <p className="font-arcade text-2xl font-bold text-gold-gradient sm:text-5xl">
              MISSION ACCOMPLISHED.
            </p>
            <p className="mt-4 font-arcade text-sm text-arcade-fg/70 sm:text-base">
              Okay… you earned this.
            </p>
            <button
              onClick={onComplete}
              className="mt-9 rounded-full border border-gold/60 px-8 py-4 font-arcade text-[0.65rem] font-bold uppercase tracking-[0.24em] text-gold transition-all duration-300 hover:scale-[1.04] hover:shadow-[var(--shadow-glow)] sm:text-xs"
            >
              Claim my invitation
            </button>
          </div>
        )}
      </div>

      {!done && (
        <p className="relative mt-5 text-center font-arcade text-xs uppercase tracking-[0.25em] text-arcade-neon-2 sm:text-sm">
          Catch it!
        </p>
      )}
    </section>
  );
}
