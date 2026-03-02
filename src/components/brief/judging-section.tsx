const criteria = [
  {
    code: "01",
    name: "Problema e impacto",
    weight: "25%",
    description: "¿Hay un problema real? ¿La solución genera impacto significativo?",
  },
  {
    code: "02",
    name: "Originalidad",
    weight: "20%",
    description: "¿El enfoque es creativo y diferenciado? ¿Propone algo nuevo o una perspectiva inesperada?",
  },
  {
    code: "03",
    name: "Criterio del track",
    weight: "25%",
    description:
      "AI Consumer: ¿La IA aporta valor real? ¿Está listo como producto? — Fintech & Web3: ¿Es confiable y correcto? ¿Maneja casos límite?",
  },
  {
    code: "04",
    name: "Ejecución y demo",
    weight: "20%",
    description: "¿Funciona en la demo? ¿Qué tan completo y robusto es el producto construido durante el hackathon?",
  },
  {
    code: "05",
    name: "Pitch y claridad",
    weight: "10%",
    description: "Claridad del pitch, calidad de la demo en vivo y efectividad en la comunicación.",
  },
];

export function JudgingSection() {
  return (
    <section
      id="judging"
      className="relative py-24 sm:py-32 section-padding bg-bg-alt"
    >
      <div className="h-rule mb-16 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <span className="tag mb-4 inline-block">// 02 — evaluación</span>
          <h2 className="font-bold uppercase leading-none font-display text-[clamp(1.8rem,4vw,2.8rem)] text-fg tracking-[-0.02em]">
            CRITERIOS DE EVALUACIÓN
          </h2>
          <p className="mt-4 font-display text-[0.875rem] text-fg-3 leading-[1.7] max-w-[520px]">
            Cada criterio se puntúa de 1 a 5. Los pesos varían según la importancia del criterio. El jurado evaluará todos los proyectos al final del hackathon durante las presentaciones en vivo (3 min por equipo).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {criteria.map((c, i) => (
            <div
              key={c.code}
              className="reveal relative overflow-hidden border border-border p-7 bg-surface"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              {/* Background weight number */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 font-display text-[5rem] font-bold leading-none select-none pointer-events-none text-[rgba(255,75,0,0.04)]"
              >
                {c.weight}
              </div>

              <div className="font-mono text-[0.6rem] tracking-[0.15em] text-fg-5 uppercase mb-3">
                {c.code}
              </div>

              <div className="font-display text-[2.5rem] font-bold text-accent leading-none mb-3">
                {c.weight}
              </div>

              <h3 className="font-display text-base font-semibold text-fg uppercase tracking-[0.03em] mb-3">
                {c.name}
              </h3>

              <p className="font-display text-[0.8rem] text-fg-3 leading-[1.7]">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div className="reveal mt-4 flex items-center justify-between gap-4 flex-wrap border border-border py-5 px-7">
          <span className="font-mono text-[0.65rem] tracking-[0.15em] text-fg-5 uppercase">
            // puntaje total
          </span>
          <span className="font-display text-[1.2rem] font-bold text-fg">
            100%
          </span>
        </div>
      </div>
    </section>
  );
}
