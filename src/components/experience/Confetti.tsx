const COLORS = ["var(--gold)", "var(--gold-bright)", "var(--crimson)", "var(--paper)"];

export function Confetti({ count = 60 }: { count?: number }) {
  const pieces = Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    return {
      left: `${(r * 100).toFixed(2)}%`,
      delay: `${(r * 2.4).toFixed(2)}s`,
      duration: `${(3.2 + r * 2.6).toFixed(2)}s`,
      drift: `${Math.round((r - 0.5) * 220)}px`,
      color: COLORS[i % COLORS.length],
      size: 5 + Math.round(r * 7),
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.8,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--drift" as string]: p.drift,
          }}
          className="absolute top-0 rounded-[1px] opacity-0 [animation-name:confetti-fall] [animation-timing-function:linear] [animation-iteration-count:infinite]"
        />
      ))}
    </div>
  );
}
