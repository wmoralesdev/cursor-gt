const LUMA_URL = "https://lu.ma/935r7zp6";

const HOSTS = [
  { name: "Oscar Morales", url: "https://lu.ma/user/theoscarvibes" },
  { name: "Walter Morales", url: "https://lu.ma/user/wmoralesdev" },
  { name: "the502project", url: "https://lu.ma/user/the502project" },
  { name: "Vudy App", url: "https://lu.ma/user/vudyme" },
];

const TICKETS = [
  {
    title: "Sin team",
    desc: "Si no tienes un equipo y deseas participar, serás asignado a un equipo equilibrado.",
  },
  {
    title: "Team",
    desc: "Participa con un equipo de 2–4 personas. Los demás integrantes también deberán registrarse.",
  },
];

export function Details() {
  return (
    <section className="relative border-t border-zinc-800 px-6 py-20 md:py-28" id="details">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          Detalles del evento
        </h2>

        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {TICKETS.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="mb-2 font-semibold text-white">{t.title}</h3>
              <p className="text-sm text-zinc-400">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <p className="mb-4 text-sm uppercase tracking-wider text-amber-500">
            Hosts
          </p>
          <ul className="flex flex-wrap gap-4">
            {HOSTS.map((h) => (
              <li key={h.name}>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-amber-500"
                >
                  {h.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-8 text-zinc-400">
          <span className="font-semibold text-white">79+</span> personas ya se
          han registrado
        </p>

        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-amber-500/50 bg-amber-500/10 px-6 py-3 font-medium text-amber-500 transition-colors hover:border-amber-500 hover:bg-amber-500/20"
        >
          Ver en Luma
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
