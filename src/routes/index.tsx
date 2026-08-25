import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Teaser } from "@/components/experience/Teaser";
import { CatchGame } from "@/components/experience/CatchGame";
import { EnvelopeReveal } from "@/components/experience/EnvelopeReveal";

const title = "IEM Bengal E-Summit 2026 — Earn Your Invitation";
const description =
  "Play a tiny game, open the envelope, and claim your animated invitation to the IEM Bengal E-Summit 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Screen = "teaser" | "game" | "envelope";

function Index() {
  const [screen, setScreen] = useState<Screen>("teaser");
  const [fading, setFading] = useState(false);

  const go = (next: Screen) => {
    setFading(true);
    window.setTimeout(() => {
      setScreen(next);
      setFading(false);
    }, 650);
  };

  return (
    <main className="relative">
      {screen === "teaser" && <Teaser onStart={() => go("game")} />}
      {screen === "game" && <CatchGame onComplete={() => go("envelope")} />}
      {screen === "envelope" && <EnvelopeReveal />}

      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-[oklch(0.05_0.01_60)] transition-opacity duration-700 ${
          fading ? "opacity-100" : "opacity-0"
        }`}
      />
    </main>
  );
}
