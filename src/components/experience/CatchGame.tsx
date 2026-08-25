import { useCallback, useEffect, useRef, useState } from "react";

const TARGET = 3;

export function CatchGame({ onComplete }: { onComplete: () => void }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [catches, setCatches] = useState(0);
  const [done, setDone] = useState(false);
  const [taunt, setTaunt] = useState("CATCH IT!");

  const jump = useCallback(() => {
    setPos({ x: 10 + Math.random() * 80, y: 12 + Math.random() * 72 });
  }, []);

  useEffect(() => {
    if (done) return;
    const speed = Math.max(620, 1100 - catches * 160);
    const id = window.setInterval(jump, speed);
    return () => window.clearInterval(id);
  }, [jump, catches, done]);

  const handleCatch = () => {
    const next = catches + 1;
    setCatches(next);
    if (next >= TARGET) {
      setDone(true);
      return;
    }
    setTaunt(next === 1 ? "AGAIN! IT'S SLIPPERY." : "ONE MORE. DON'T BLINK.");
    jump();
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-arcade-bg-deep px-4 py-12 text-arcade-fg">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--arcade-neon)_1px,transparent_1px),linear-gradient(90deg,var(--arcade-neon)_1px,transparent_1px)] [background-size:48px_48px]" />

      <h1 className="relative text-center font-arcade text-2xl font-bold uppercase tracking-[0.2em] text-gold-gradient sm:text-4xl">
        Don&apos;t let the idea escape
      </h1>
      <p className="relative mt-3 text-center font-arcade text-sm text-arcade-fg/60 sm:text-base">
        Because good ideas don&apos;t wait.
      </p>

      <div
        ref={areaRef}
        className="relative mt-8 h-[58vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-arcade-bg shadow-[inset_0_0_80px_oklch(0_0_0/0.6)]"
      >
        <div className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-arcade-neon/10 to-transparent [animation:scanline_4s_linear_infinite]" />

        {!done ? (
          <button
            aria-label="Catch the idea"
            onClick={handleCatch}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 select-none text-5xl transition-all duration-300 ease-out hover:scale-110 sm:text-6xl"
          >
            <span className="drop-shadow-[0_0_25px_oklch(0.82_0.17_85/0.8)]">🚀</span>
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center animate-rise-in">
            <p className="font-arcade text-3xl font-bold text-gold-gradient sm:text-5xl">
              MISSION ACCOMPLISHED.
            </p>
            <p className="mt-4 font-arcade text-base text-arcade-fg/70">
              Okay… you earned this.
            </p>
            <button
              onClick={onComplete}
              className="mt-10 rounded-full border border-gold/60 px-9 py-4 font-arcade text-xs font-bold uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:scale-[1.04] hover:shadow-[var(--shadow-glow)]"
            >
              Claim my invitation
            </button>
          </div>
        )}
      </div>

      {!done && (
        <div className="relative mt-6 flex items-center gap-6">
          <p className="font-arcade text-sm uppercase tracking-[0.25em] text-arcade-neon-2">
            {taunt}
          </p>
          <div className="flex gap-2">
            {Array.from({ length: TARGET }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i < catches ? "bg-gold" : "bg-arcade-fg/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
