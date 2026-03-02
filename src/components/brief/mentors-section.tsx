import { PersonCard } from "./person-card";
import type { PersonCardData } from "./person-card";

const mentors: PersonCardData[] = [
  {
    initials: "DH",
    name: "Daniela Huezo",
    photo: "/staff/daniela.jpeg",
    role: "Tech Lead",
    company: "Community Builder",
    blurb: "Embajadora de Cursor y líder en tecnología; community builder estratégica con 5+ años liderando desarrollo de software y equipos de alto impacto.",
    hasCursorBadge: true,
  },
  {
    initials: "DC",
    name: "Diego Andrés Cum",
    photo: "/staff/diego-cum.jpeg",
    role: "Tech Lead",
    company: "DDR Innova",
    blurb: "Tech Lead y cofundador de DDR Innova; creador de AgentsGT/ConvoFlow; especializado en cloud, IA y sistemas escalables.",
    hasCursorBadge: true,
  },
  {
    initials: "DR",
    name: "Diego Rosales",
    photo: "/staff/diego-rosales.jpeg",
    role: "Mentor",
    company: "Energía verde · Alemania",
    blurb: "Desarrollador enfocado en sistemas distribuidos y descentralizados; trabajando en energía verde en Alemania.",
    hasCursorBadge: true,
  },
  {
    initials: "EK",
    name: "Edwin Kestler",
    photo: "/staff/edwin.jpeg",
    role: "CTO",
    company: "Flatbox",
    blurb: "CTO y cofundador de Flatbox; pionero IoT en Guatemala (GSMA/WMC 2017); background en seguridad informática.",
  },
  {
    initials: "EM",
    name: "Eleanor Menchú",
    photo: "/staff/eleanor.jpeg",
    role: "Founder",
    company: "We Solve",
    blurb: "Fundadora de We Solve; trabaja en educación y talento; apoya comunidades y hackathons como Cursor Ambassador en Guatemala.",
    hasCursorBadge: true,
  },
  {
    initials: "FC",
    name: "Frank Calderón",
    photo: "/staff/frank-calderon.jpeg",
    role: "Consultor IA",
    company: "LatAm",
    blurb: "Full‑Stack, consultor en IA y community builder con 15+ años creando soluciones en LatAm.",
  },
  {
    initials: "JA",
    name: "José Luis Antúnez Sales",
    photo: "/staff/jose-luis.jpeg",
    role: "Mentor",
    company: "SIT Guatemala",
    blurb: "Ingeniero en electrónica con 30+ años en telecom; asesor técnico en SIT Guatemala; enfocado en transformación digital, IA y redes comunitarias.",
  },
];

export function MentorsSection() {
  return (
    <section
      id="mentors"
      className="relative py-24 sm:py-32 section-padding bg-bg"
    >
      <div className="h-rule mb-16 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5 reveal">
            <span className="tag mb-4 inline-block">// 06 — mentores</span>
            <h2 className="font-bold uppercase leading-none font-display text-[clamp(1.8rem,4vw,2.8rem)] text-fg tracking-[-0.02em]">
              MENTORES
            </h2>
            <p className="mt-4 font-display text-sm text-fg-3 leading-[1.7]">
              Profesionales con experiencia práctica que acompañan a los equipos durante el hackathon, orientando en producto, tecnología y estrategia de negocio.
            </p>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { area: "Producto & UX", desc: "Diseño de experiencia y validación de ideas" },
                { area: "Ingeniería", desc: "Arquitectura, IA y uso avanzado de Cursor" },
                { area: "Negocio", desc: "Modelo de negocio, mercado y pitching" },
                { area: "Industria", desc: "Expertise sectorial por track" },
              ].map((area) => (
                <div
                  key={area.area}
                  className="flex items-start gap-3 border border-border-faint p-4"
                >
                  <span className="font-mono text-[0.65rem] text-accent mt-0.5 shrink-0">→</span>
                  <div>
                    <div className="font-display text-[0.8rem] font-semibold text-fg-2 mb-0.5">{area.area}</div>
                    <div className="font-display text-[0.75rem] text-fg-4 leading-[1.5]">{area.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {mentors.map((mentor, i) => (
            <PersonCard key={mentor.name} {...mentor} size="sm" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
