import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Teaser } from "@/components/experience/Teaser";
import { CatchGame } from "@/components/experience/CatchGame";
import { EnvelopeReveal } from "@/components/experience/EnvelopeReveal";

const title = "IEM Bengal E-Summit 2026 — Earn Your Invitation";
const description =
  "Play a tiny game, open the envelope, and claim your animated invitation to the IEM Bengal E-Summit 2026.";

const STORAGE_KEY = "bes-guest-name";

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
  const [name, setName] = useState("");
  const [returning, setReturning] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setName(saved);
      setReturning(true);
      setScreen("envelope");
    }
    setReady(true);
  }, []);

  const go = (next: Screen) => {
    setFading(true);
    window.setTimeout(() => {
      setScreen(next);
      setFading(false);
    }, 650);
  };

  const start = (guest: string) => {
    setName(guest);
    window.localStorage.setItem(STORAGE_KEY, guest);
    go("game");
  };

  if (!ready) return <main className="min-h-screen bg-arcade-bg-deep" />;

  return (
    <main className="relative">
      {screen === "teaser" && <Teaser onStart={start} />}
      {screen === "game" && <CatchGame onComplete={() => go("envelope")} />}
      {screen === "envelope" && <EnvelopeReveal name={name} instant={returning} />}

      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-[oklch(0.05_0.01_60)] transition-opacity duration-700 ${
          fading ? "opacity-100" : "opacity-0"
        }`}
      />
    </main>
  );
}
