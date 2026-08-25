let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, dur: number, gain = 0.12, type: OscillatorType = "sine") {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + start);
  g.gain.setValueAtTime(0.0001, ac.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, ac.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + dur + 0.05);
}

export const sfx = {
  unlock: () => tone(520, 0, 0.18, 0.1, "triangle"),
  hop: () => tone(320, 0, 0.08, 0.05, "square"),
  catch: () => {
    tone(660, 0, 0.12, 0.14, "triangle");
    tone(880, 0.1, 0.14, 0.14, "triangle");
    tone(1320, 0.22, 0.3, 0.12, "triangle");
  },
  open: () => {
    tone(392, 0, 0.3, 0.09, "sine");
    tone(523, 0.18, 0.3, 0.09, "sine");
    tone(659, 0.36, 0.5, 0.1, "sine");
    tone(784, 0.6, 0.8, 0.1, "sine");
  },
};
