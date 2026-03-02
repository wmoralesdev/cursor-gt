const highlights = [
  {
    code: "01",
    title: "Construir en un día",
    body: "7 horas de hackathon intensivo. Los equipos pasan de idea a producto funcional en una sola jornada, usando Cursor como herramienta principal.",
  },
  {
    code: "02",
    title: "Talento regional",
    body: "Participantes de toda Centroamérica — desarrolladores, diseñadores, emprendedores y creativos que representan la próxima generación de builders.",
  },
  {
    code: "03",
    title: "IA como herramienta",
    body: "El evento demuestra cómo la inteligencia artificial amplifica la capacidad de cualquier persona para crear software, sin importar su background técnico.",
  },
  {
    code: "04",
    title: "Demo en vivo",
    body: "Cada equipo presenta su proyecto ante un jurado experto. Tres minutos, producto real, impacto medible.",
  },
];

export function EventOverview() {
  return (
    <section
      id="overview"
      className="relative py-24 sm:py-32 section-padding bg-bg"
    >
      <div className="h-rule mb-16 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 reveal">
            <span className="tag mb-4 inline-block">// 01 — el evento</span>
            <h2 className="font-bold uppercase leading-none font-display text-[clamp(1.8rem,4vw,2.8rem)] text-fg tracking-[-0.02em]">
              QUÉ ESPERAR<br />DEL EVENTO
            </h2>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1 flex items-center">
            <p className="font-display text-[1.05rem] text-fg-2 leading-[1.8]">
              El Cursor Hackathon Guatemala es el primer hackathon de Guatemala enfocado en construcción con IA. Reunimos a los mejores builders de Centroamérica para un día de creación intensiva, mentoría experta y networking de alto nivel — todo en un mismo lugar.
            </p>
          </div>
        </div>

        {/* El Salvador origin block */}
        <div className="reveal mb-16 border border-border bg-surface p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="tag mb-4 inline-block">// origen — el salvador 2026</span>
              <h3 className="font-bold uppercase leading-none font-display text-[clamp(1.4rem,3vw,2rem)] text-fg tracking-[-0.02em]">
                PROBADO EN<br />
                <span className="text-accent">EL SALVADOR</span>
              </h3>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center gap-6">
              <p className="font-display text-[1rem] text-fg-2 leading-[1.8]">
                El Cursor Hackathon Guatemala nace directamente de la edición de El Salvador celebrada en febrero de 2026: <strong className="text-fg font-semibold">136 builders, 45 equipos, 8 horas</strong> de construcción intensiva — con equipos que viajaron desde Guatemala y Nicaragua para participar. El modelo funciona.
              </p>
              <p className="font-display text-[0.92rem] text-fg-3 leading-[1.75]">
                Proyectos como LexHub (generador de documentos legales adaptados a la ley local) y Levelo (tracker de hábitos gamificado) demostraron que la comunidad centroamericana puede crear soluciones de clase mundial en un solo día. Guatemala es el siguiente paso natural de este movimiento regional.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { value: "136", label: "Builders" },
                  { value: "45", label: "Equipos" },
                  { value: "8h", label: "De trabajo" },
                  { value: "3", label: "Países" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-[1.6rem] font-bold text-accent leading-none tracking-[-0.02em]">
                      {s.value}
                    </div>
                    <div className="font-mono text-[0.58rem] tracking-[0.12em] text-fg-5 uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <div
              key={h.code}
              className="reveal border border-border p-8 bg-surface"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="font-mono text-[0.6rem] tracking-[0.15em] text-fg-5 uppercase mb-4">
                {h.code}
              </div>
              <h3 className="font-display text-base font-semibold text-fg uppercase tracking-[0.03em] mb-3">
                {h.title}
              </h3>
              <p className="font-display text-sm text-fg-3 leading-[1.75]">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
