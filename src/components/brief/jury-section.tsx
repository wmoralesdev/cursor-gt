import { PersonCard } from "./person-card";
import type { PersonCardData } from "./person-card";

const jury: PersonCardData[] = [
  { initials: "??", name: "Por confirmar", role: "—", company: "—", placeholder: true },
  { initials: "??", name: "Por confirmar", role: "—", company: "—", placeholder: true },
  { initials: "??", name: "Por confirmar", role: "—", company: "—", placeholder: true },
  { initials: "??", name: "Por confirmar", role: "—", company: "—", placeholder: true },
];

export function JurySection() {
  return (
    <section
      id="jury"
      className="relative py-24 sm:py-32 section-padding bg-bg-alt"
    >
      <div className="h-rule mb-16 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5 reveal">
            <span className="tag mb-4 inline-block">// 05 — jurado</span>
            <h2 className="font-bold uppercase leading-none font-display text-[clamp(1.8rem,4vw,2.8rem)] text-fg tracking-[-0.02em]">
              JURADO
            </h2>
            <p className="mt-4 font-display text-sm text-fg-3 leading-[1.7]">
              Líderes de industria, inversores y expertos en tecnología que evaluarán los proyectos al final del hackathon. Próximamente anunciamos el panel completo.
            </p>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1 flex items-center">
            <div className="border-b border-b-border-faint border-l-2 border-l-accent/30 px-6 py-5 bg-accent/[0.02]">
              <p className="font-mono text-[0.65rem] tracking-[0.12em] text-fg-3 uppercase leading-[1.8]">
                // el jurado evalúa: impacto · originalidad · ejecución técnica · presentación
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {jury.map((person, i) => (
            <PersonCard key={i} {...person} size="sm" index={i} />
          ))}
        </div>

        <div className="reveal mt-4 flex items-center justify-center py-6 border border-dashed border-border">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-fg-6 uppercase">
            // más jueces por confirmar
          </span>
        </div>
      </div>
    </section>
  );
}
