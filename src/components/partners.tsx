const PARTNERS = [
  { name: "CCOTI", url: "#" },
  { name: "the502 project", url: "#" },
];

export function Partners() {
  return (
    <section className="relative border-t border-zinc-800 px-6 py-20 md:py-28" id="partners">
      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-amber-500">
          Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex h-16 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-8 text-lg font-semibold text-zinc-300 transition-colors hover:border-amber-500/50 hover:text-white"
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
