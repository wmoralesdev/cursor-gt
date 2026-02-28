export function About() {
  return (
    <section className="relative px-6 py-20 md:py-28" id="about">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-3xl tracking-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
          ¿Quién puede participar?
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            Esta hackatón es para todos. Equipos de 2–4 personas de cualquier
            perfil: programadores, diseñadores, marketers, creadores de
            contenido, emprendedores, curiosos… Si te interesa construir algo,
            este es tu espacio.
          </p>
          <p>
            No necesitas saber programar. Las herramientas de IA que usaremos
            permiten que cualquier persona con una idea pueda materializarla.
            Lo que buscamos es diversidad de perspectivas y ganas de crear.
          </p>
          <p>
            Builders de toda Centro América son bienvenidos. El único requisito
            es asistir presencialmente al evento en Guatemala.
          </p>
          <p>
            ¿Te interesa el mundo tech, fintech o web3?{" "}
            <a
              href="#"
              className="font-medium text-amber-500 underline decoration-amber-500/50 underline-offset-2 hover:text-amber-400 hover:decoration-amber-400"
            >
              Conecta con colegas en nuestra comunidad de WhatsApp
            </a>{" "}
            y forma tu equipo antes del evento.
          </p>
        </div>
      </div>
    </section>
  );
}
