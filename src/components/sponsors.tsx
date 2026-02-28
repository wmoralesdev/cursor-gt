const SPONSORS = [
  { name: "UVG", url: "#" },
  { name: "Vudy", url: "#" },
  { name: "PAQwallet", url: "#" },
];

export function Sponsors() {
  return (
    <section className="relative border-t border-zinc-800 px-6 py-20 md:py-28" id="sponsors">
      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-amber-500">
          Sponsors
        </p>
        <div className="mb-16 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {SPONSORS.map((s) => (
            <div
              key={s.name}
              className="flex h-16 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-8 text-xl font-semibold text-zinc-300 transition-colors hover:border-amber-500/50 hover:text-white"
            >
              {s.name}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-8 text-center">
          <p className="mb-4 text-zinc-400">
            ¿Interesado en patrocinar este evento?
          </p>
          <a
            href="mailto:community@cursor.com?subject=Sponsorship - Cursor Hackathon Guatemala 2026"
            className="inline-flex items-center gap-2 font-medium text-amber-500 hover:text-amber-400"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
