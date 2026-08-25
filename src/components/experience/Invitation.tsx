import logoAsset from "@/assets/logo.png.asset.json";


export function Invitation() {
  return (
    <article className="paper-surface relative z-10 w-full max-w-2xl rounded-sm border border-gold/40 px-7 py-14 text-center shadow-[var(--shadow-envelope)] animate-rise-in sm:px-16 sm:py-20">
      <div className="pointer-events-none absolute inset-3 border border-gold/30" />

      <img
        src={logoAsset.url}
        alt="Bengal E-Summit 2026 logo"
        className="relative mx-auto w-32 animate-rise-in sm:w-40"
        style={{ animationDelay: "0.1s" }}
      />

      <h1
        className="relative mt-6 font-display text-3xl font-bold uppercase tracking-[0.28em] text-ink animate-rise-in sm:text-4xl"
        style={{ animationDelay: "0.25s" }}
      >
        You are invited
      </h1>

      <div
        className="relative mx-auto mt-6 h-px w-24 bg-[var(--gradient-gold)] animate-rise-in"
        style={{ animationDelay: "0.35s" }}
      />

      <p
        className="relative mt-8 font-serif text-xl italic leading-relaxed text-ink/85 animate-rise-in sm:text-2xl"
        style={{ animationDelay: "0.45s" }}
      >
        Your presence is not just requested,
        <br />
        it is awaited.
      </p>

      <p
        className="relative mt-6 font-serif text-lg leading-relaxed text-ink/70 animate-rise-in sm:text-xl"
        style={{ animationDelay: "0.6s" }}
      >
        Join us as we bring together ideas, innovation, ambition &amp; the people crazy
        enough to build the future.
      </p>

      <h2
        className="relative mt-10 font-display text-2xl font-bold uppercase tracking-[0.2em] text-crimson animate-rise-in sm:text-3xl"
        style={{ animationDelay: "0.75s" }}
      >
        IEM Bengal E-Summit
      </h2>

      <dl
        className="relative mt-8 grid gap-4 font-display text-xs uppercase tracking-[0.3em] text-ink/75 animate-rise-in sm:grid-cols-2 sm:text-sm"
        style={{ animationDelay: "0.85s" }}
      >
        <div className="border border-gold/40 px-4 py-5">
          <dt className="text-[0.6rem] tracking-[0.35em] text-ink/50">Date</dt>
          <dd className="mt-2">To be announced</dd>
        </div>
        <div className="border border-gold/40 px-4 py-5">
          <dt className="text-[0.6rem] tracking-[0.35em] text-ink/50">Venue</dt>
          <dd className="mt-2">IEM Campus, Kolkata</dd>
        </div>
      </dl>

      <p
        className="relative mt-9 font-serif text-lg text-ink/75 animate-rise-in"
        style={{ animationDelay: "0.95s" }}
      >
        We&apos;d love to have you there.
        <br />
        Your presence will make this experience even more special.
      </p>

      <a
        href="#rsvp"
        className="relative mt-10 inline-flex items-center gap-3 rounded-none border border-ink/70 bg-ink px-10 py-4 font-display text-xs uppercase tracking-[0.35em] text-paper transition-all duration-300 hover:scale-[1.03] hover:bg-crimson animate-rise-in"
        style={{ animationDelay: "1.05s" }}
      >
        RSVP <span aria-hidden>→</span>
      </a>

      <p
        className="relative mt-10 font-serif text-base italic text-ink/55 animate-rise-in"
        style={{ animationDelay: "1.15s" }}
      >
        P.S. You already completed the game. So technically, you can&apos;t say no now. 😌
      </p>
    </article>
  );
}
