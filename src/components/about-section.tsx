import { motion } from 'framer-motion';
import { Users, Code2, Globe2, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const cards = [
  {
    title: "¿Quién puede participar?",
    description: "Equipos de 2-4 personas de cualquier perfil: programadores, diseñadores, marketers, creadores de contenido, emprendedores, curiosos... Si te interesa construir algo, este es tu espacio.",
    icon: Users,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-gray to-black border-white/10",
    iconClassName: "text-brand-orange",
  },
  {
    title: "No necesitas saber programar",
    description: "Las herramientas de IA que usaremos permiten que cualquier persona con una idea pueda materializarla. Lo que buscamos es diversidad de perspectivas y ganas de crear.",
    icon: Code2,
    className: "md:col-span-1 md:row-span-1 bg-brand-gray/50 border-white/5",
    iconClassName: "text-gray-400",
  },
  {
    title: "Builders de toda Centro América",
    description: "Todos son bienvenidos. El único requisito es asistir presencialmente al evento en Guatemala.",
    icon: Globe2,
    className: "md:col-span-1 md:row-span-1 bg-brand-orange/10 border-brand-orange/20",
    iconClassName: "text-brand-orange",
  },
  {
    title: "Tech, Fintech o Web3",
    description: "Conecta con colegas en nuestra comunidad de WhatsApp y forma tu equipo antes del evento.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-1 bg-brand-gray/30 border-white/5",
    iconClassName: "text-gray-300",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Construye con <span className="text-brand-orange">IA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Únete a la primera Hackatón de Cursor en Guatemala. Un espacio diseñado para creadores, innovadores y visionarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative p-8 rounded-3xl border overflow-hidden transition-all duration-500 hover:border-white/20",
                card.className
              )}
            >
              <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto pb-8">
                  <card.icon className={cn("w-8 h-8 mb-6", card.iconClassName)} />
                  <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
