export const translations = {
  "nav.about": { en: "About", es: "Acerca" },
  "nav.details": { en: "Details", es: "Detalles" },
  "nav.sponsors": { en: "Sponsors", es: "Patrocinadores" },
  "nav.register": { en: "Register", es: "Regístrate" },

  "hero.subtitle": { en: "Ciudad de Guatemala 2026", es: "Ciudad de Guatemala 2026" },
  "hero.date": { en: "March 7, 2026", es: "7 de marzo, 2026" },
  "hero.time": { en: "10:00 AM — 5:00 PM", es: "10:00 AM — 5:00 PM" },
  "hero.venue": { en: "UVG Z15 · Universidad del Valle de Guatemala", es: "UVG Z15 · Universidad del Valle de Guatemala" },
  "hero.cta": { en: "Register Now", es: "Regístrate Ahora" },
  "hero.spots": { en: "Limited spots available", es: "Cupos limitados" },

  "about.label": { en: "// About the event", es: "// Sobre el evento" },
  "about.title": { en: "Build anything\nwith AI.", es: "Construye lo que sea\ncon IA." },
  "about.description": {
    en: "The first Cursor Hackathon in Central America. A one-day sprint where anyone — developers, designers, entrepreneurs, and curious minds — comes together to build real products using AI-powered tools.",
    es: "El primer Cursor Hackathon en Centroamérica. Un sprint de un día donde cualquier persona — desarrolladores, diseñadores, emprendedores y mentes curiosas — se reúne para construir productos reales usando herramientas potenciadas por IA.",
  },
  "about.stat.duration": { en: "7 Hours", es: "7 Horas" },
  "about.stat.duration.label": { en: "of building", es: "construyendo" },
  "about.stat.teams": { en: "2–4", es: "2–4" },
  "about.stat.teams.label": { en: "per team", es: "por equipo" },
  "about.stat.experience": { en: "0", es: "0" },
  "about.stat.experience.label": { en: "coding experience required", es: "experiencia en código requerida" },

  "who.label": { en: "// Who can join", es: "// Quién puede participar" },
  "who.title": { en: "Open to everyone.", es: "Abierto para todos." },
  "who.developers.title": { en: "Developers", es: "Desarrolladores" },
  "who.developers.desc": {
    en: "Push the boundaries of what's possible with AI-assisted coding in Cursor.",
    es: "Lleva al límite lo posible con programación asistida por IA en Cursor.",
  },
  "who.designers.title": { en: "Designers", es: "Diseñadores" },
  "who.designers.desc": {
    en: "Shape experiences and interfaces that make AI-built products shine.",
    es: "Da forma a experiencias e interfaces que hagan brillar los productos creados con IA.",
  },
  "who.entrepreneurs.title": { en: "Entrepreneurs", es: "Emprendedores" },
  "who.entrepreneurs.desc": {
    en: "Validate ideas rapidly. Build an MVP in hours, not months.",
    es: "Valida ideas rápidamente. Construye un MVP en horas, no meses.",
  },
  "who.curious.title": { en: "Curious Minds", es: "Mentes Curiosas" },
  "who.curious.desc": {
    en: "No coding experience needed. If you have an idea, AI tools can help you build it.",
    es: "No necesitas experiencia en programación. Si tienes una idea, las herramientas de IA te ayudan a construirla.",
  },

  "details.label": { en: "// Event details", es: "// Detalles del evento" },
  "details.title": { en: "When & Where", es: "Cuándo y Dónde" },
  "details.date.label": { en: "Date", es: "Fecha" },
  "details.date.value": { en: "March 7, 2026", es: "7 de marzo, 2026" },
  "details.time.label": { en: "Time", es: "Hora" },
  "details.time.value": { en: "10:00 AM — 5:00 PM", es: "10:00 AM — 5:00 PM" },
  "details.venue.label": { en: "Venue", es: "Lugar" },
  "details.venue.value": { en: "UVG Campus, Zone 15\nGuatemala City", es: "Campus UVG, Zona 15\nCiudad de Guatemala" },
  "details.format.label": { en: "Format", es: "Formato" },
  "details.format.value": { en: "Teams of 2–4\nAll backgrounds welcome", es: "Equipos de 2–4\nTodos los perfiles bienvenidos" },
  "details.note": {
    en: "Builders from all of Central America are welcome. The only requirement is attending in person in Guatemala City.",
    es: "Constructores de toda Centroamérica son bienvenidos. El único requisito es asistir presencialmente en Ciudad de Guatemala.",
  },

  "sponsors.label": { en: "// Backed by", es: "// Respaldado por" },
  "sponsors.title": { en: "Sponsors & Partners", es: "Patrocinadores y Aliados" },
  "sponsors.sponsors": { en: "Sponsors", es: "Patrocinadores" },
  "sponsors.partners": { en: "Partners", es: "Aliados" },

  "cta.title": { en: "Ready to\nbuild?", es: "¿Listo para\nconstruir?" },
  "cta.subtitle": {
    en: "March 7, 2026 · Guatemala City · UVG Z15",
    es: "7 de marzo, 2026 · Ciudad de Guatemala · UVG Z15",
  },
  "cta.button": { en: "Secure Your Spot", es: "Reserva Tu Lugar" },
  "cta.note": { en: "Registration requires approval. Teams and solo participants welcome.", es: "El registro requiere aprobación. Equipos y participantes individuales bienvenidos." },

  "footer.hosted": { en: "Hosted by", es: "Organizado por" },
  "footer.powered": { en: "Powered by", es: "Potenciado por" },
} as const;

export type TranslationKey = keyof typeof translations;
export type Language = "en" | "es";
