export function BriefHeader() {
  return (
    <section
      className="relative section-padding bg-bg pt-20 pb-20 min-h-[400px] flex items-center"
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none bg-grid mask-radial-left" />

      {/* Subtle glow */}
      <div className="absolute pointer-events-none glow-left" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <span className="tag mb-6 inline-block">// sponsor brief</span>

          <h1 className="font-bold uppercase leading-[0.9] mb-6 font-display text-[clamp(2.5rem,8vw,6rem)] text-fg tracking-[-0.02em]">
            EVENT<br />
            <span className="text-accent">BRIEF</span>
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 font-mono text-[0.65rem] tracking-[0.15em] text-fg-5 uppercase">
            <span>DOC-002</span>
            <span className="text-border">·</span>
            <span>v1.0</span>
            <span className="text-border">·</span>
            <span>07.03.2026</span>
            <span className="text-border">·</span>
            <span>UVG Z15</span>
          </div>

          <div className="h-rule mb-6 max-w-[400px]" />

          <p className="font-display text-[0.95rem] text-fg-3 leading-[1.7] max-w-[520px] mb-8">
            Visión general del evento para patrocinadores y aliados estratégicos. Qué esperar, quiénes participan, los tracks del hackathon y el equipo de jueces y mentores.
          </p>

          <a
            href="mailto:hello@wmorales.dev"
            className="btn-phosphor px-7 py-3 inline-block"
          >
            Conviértete en patrocinador →
          </a>
        </div>
      </div>
    </section>
  );
}
