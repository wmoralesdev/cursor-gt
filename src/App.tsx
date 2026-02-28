const lumaUrl = 'https://luma.com/935r7zp6'
const communityUrl = 'https://cursor.com/community'
const sponsorContactUrl = 'https://luma.com/935r7zp6'

const eventFacts = [
  { label: 'Fecha', value: '7 Marzo 2026' },
  { label: 'Horario', value: '10AM - 5PM' },
  { label: 'Lugar', value: 'Universidad del Valle de Guatemala' },
  { label: 'Formato', value: 'Presencial · Equipos de 2 a 4' },
]

const participantHighlights = [
  'Abierto para builders de software, diseno, marketing, producto y contenido.',
  'No necesitas saber programar para participar: IA + colaboracion = ejecucion.',
  'Networking con comunidad tech, fintech y web3 de Guatemala y Centroamerica.',
]

const sponsorHighlights = [
  'Acceso directo a talento tecnico y creativo con mentalidad builder.',
  'Visibilidad de marca frente a una comunidad activa de IA y producto.',
  'Oportunidad de posicionarte como aliado del ecosistema local.',
]

function App() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="noise-overlay" aria-hidden />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <header className="animate-rise border-grid inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_var(--color-accent)]" />
          Cursor Community Guatemala
        </header>

        <main className="mt-10 flex flex-1 flex-col gap-14">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-7">
              <p className="animate-rise animation-delay-100 text-sm uppercase tracking-[0.34em] text-[var(--color-muted)]">
                Event Brief 2026
              </p>
              <h1 className="animate-rise animation-delay-200 font-display text-4xl leading-[0.92] sm:text-5xl md:text-6xl lg:text-7xl">
                Cursor Hackathon
                <span className="mt-2 block text-[var(--color-accent)]">
                  Ciudad de Guatemala
                </span>
              </h1>
              <p className="animate-rise animation-delay-300 max-w-2xl text-base text-[var(--color-text-soft)] sm:text-lg">
                Una jornada para construir ideas reales en equipo usando IA. Conecta
                con builders de toda la region y crea productos con impacto en solo
                un dia.
              </p>
              <div className="animate-rise animation-delay-400 flex flex-wrap gap-4">
                <a
                  href={lumaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Registrarme en Luma
                </a>
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Explorar comunidad
                </a>
              </div>
            </div>

            <aside className="animate-rise animation-delay-500 glass-panel space-y-6">
              <h2 className="font-display text-2xl leading-tight">At a glance</h2>
              <ul className="space-y-4">
                {eventFacts.map((fact) => (
                  <li
                    key={fact.label}
                    className="flex items-start justify-between gap-6 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {fact.label}
                    </span>
                    <span className="text-right text-sm text-[var(--color-text-soft)]">
                      {fact.value}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {participantHighlights.map((item, index) => (
              <article
                key={item}
                className="hover-lift glass-panel animate-rise"
                style={{ animationDelay: `${(index + 1) * 120}ms` }}
              >
                <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">
                  {item}
                </p>
              </article>
            ))}
          </section>

          <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:grid-cols-[1fr_1.1fr] md:p-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-muted)]">
                Para marcas y aliados
              </p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Convierte patrocinio en comunidad activa
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-[var(--color-text-soft)]">
                Buscamos sponsors que quieran impulsar talento local y tener presencia
                junto a una audiencia altamente motivada por construir productos con IA.
              </p>
              <a
                href={sponsorContactUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-fit"
              >
                Quiero patrocinar
              </a>
            </div>

            <ul className="space-y-4">
              {sponsorHighlights.map((item) => (
                <li key={item} className="hover-lift glass-panel text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <p>Cursor Hackathon Guatemala · 2026</p>
          <a
            href={lumaUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-text)]"
          >
            Ver registro completo
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
