import { motion } from 'framer-motion';

const sponsors = [
  { name: 'UVG', type: 'sponsor' },
  { name: 'Vudy', type: 'sponsor' },
  { name: 'PAQwallet', type: 'sponsor' },
  { name: 'VZ', type: 'sponsor' },
];

const partners = [
  { name: 'CCOTI', type: 'partner' },
  { name: 'the502project', type: 'partner' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export function SponsorsGrid() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-brand-gray/20">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Sponsors */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-orange font-medium tracking-widest text-sm uppercase mb-12"
          >
            Sponsors
          </motion.h3>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
          >
            {sponsors.map((sponsor) => (
              <motion.div 
                key={sponsor.name} 
                variants={item}
                className="group relative"
              >
                <span className="text-3xl md:text-5xl font-display font-bold text-gray-500 transition-colors duration-500 group-hover:text-white">
                  {sponsor.name}
                </span>
                <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partners */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-orange font-medium tracking-widest text-sm uppercase mb-12"
          >
            Partners
          </motion.h3>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
          >
            {partners.map((partner) => (
              <motion.div 
                key={partner.name} 
                variants={item}
                className="group relative"
              >
                <span className="text-2xl md:text-4xl font-display font-semibold text-gray-600 transition-colors duration-500 group-hover:text-gray-300">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
