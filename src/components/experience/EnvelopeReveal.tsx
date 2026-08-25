import { useEffect, useState } from "react";
import { Confetti } from "./Confetti";
import { Invitation } from "./Invitation";

type Stage = "sealed" | "opening" | "revealed";

export function EnvelopeReveal() {
  const [stage, setStage] = useState<Stage>("sealed");

  useEffect(() => {
    if (stage !== "opening") return;
    const id = window.setTimeout(() => setStage("revealed"), 2100);
    return () => window.clearTimeout(id);
  }, [stage]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[oklch(0.08_0.01_60)] px-4 py-16">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/45 blur-[130px] animate-glow-pulse" />
      {stage !== "sealed" && <Confetti />}

      {stage === "revealed" ? (
        <Invitation />
      ) : (
        <div className="relative z-10 flex flex-col items-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-gold-gradient sm:text-sm">
            A special delivery for you
          </p>

          <div className="perspective-scene mt-14">
            <button
              onClick={() => stage === "sealed" && setStage("opening")}
              aria-label="Open the envelope"
              className={`relative block h-56 w-[22rem] cursor-pointer sm:h-64 sm:w-[26rem] ${
                stage === "sealed" ? "animate-wiggle" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* letter */}
              <div
                className="paper-surface absolute inset-x-6 bottom-4 top-6 rounded-sm shadow-[0_10px_40px_oklch(0_0_0/0.6)]"
                style={{
                  animation:
                    stage === "opening"
                      ? "letter-rise 1.4s cubic-bezier(0.2,0.8,0.2,1) 0.55s both"
                      : undefined,
                  opacity: stage === "opening" ? undefined : 0,
                }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2">
                  <span className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-ink/60">
                    Bengal E-Summit
                  </span>
                  <span className="font-display text-lg text-ink">You are invited</span>
                </div>
              </div>

              {/* envelope body */}
              <div className="absolute inset-0 rounded-md bg-[linear-gradient(160deg,oklch(0.28_0.03_60),oklch(0.18_0.02_60))] shadow-[var(--shadow-envelope)]" />
              {/* front pocket */}
              <div
                className="absolute inset-0 rounded-md border border-gold/30 bg-[linear-gradient(180deg,oklch(0.24_0.03_60),oklch(0.15_0.02_60))]"
                style={{
                  clipPath: "polygon(0 32%, 50% 68%, 100% 32%, 100% 100%, 0 100%)",
                }}
              />
              {/* flap */}
              <div
                className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-md bg-[linear-gradient(180deg,oklch(0.32_0.04_65),oklch(0.2_0.03_60))] transition-transform duration-[900ms] ease-[cubic-bezier(0.6,0,0.2,1)]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform:
                    stage === "opening"
                      ? "rotateX(-172deg) translateZ(1px)"
                      : "rotateX(0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
              {/* wax seal */}
              <div
                className={`absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,oklch(0.55_0.18_25),oklch(0.34_0.14_25))] shadow-[0_6px_18px_oklch(0_0_0/0.6)] transition-all duration-500 ${
                  stage === "opening" ? "scale-0 opacity-0" : ""
                }`}
              >
                <span className="flex h-full w-full items-center justify-center font-display text-sm font-bold text-paper/90">
                  BES
                </span>
              </div>
            </button>
          </div>

          <p
            className={`mt-16 font-arcade text-[0.7rem] uppercase tracking-[0.45em] text-paper/60 transition-opacity duration-500 ${
              stage === "sealed" ? "animate-pulse opacity-100" : "opacity-0"
            }`}
          >
            Click to open
          </p>
        </div>
      )}
    </section>
  );
}
