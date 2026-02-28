import { motion } from 'framer-motion';

export function RegistrationEmbed() {
  return (
    <section id="register" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Asegura tu lugar
          </h2>
          <p className="text-xl text-gray-400 font-light">
            El cupo es limitado. Regístrate ahora para participar en la hackatón.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-brand-gray/50 backdrop-blur-sm p-2 md:p-4 shadow-2xl"
        >
          <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />
          
          <div className="relative rounded-2xl overflow-hidden bg-black w-full h-[600px] md:h-[700px]">
            <iframe
              src="https://lu.ma/embed/event/935r7zp6/simple"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 1, borderRadius: '1rem' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
