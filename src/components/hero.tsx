import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation / Logo */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Terminal className="w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-xl tracking-wide">Cursor Hackathon</span>
        </div>
        <a 
          href="#register" 
          className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          Register Now
        </a>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Ciudad de Guatemala 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8"
        >
          BUILD <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
            THE FUTURE
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-lg md:text-2xl font-medium text-brand-orange mb-12"
        >
          <span>07/03/2026</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-orange/50" />
          <span>10AM - 5PM</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-brand-orange/50" />
          <span>UVG Z15</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#register"
            className={cn(
              "group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-black font-semibold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95",
              "border-glow"
            )}
          >
            <span className="relative z-10">Asegura tu lugar</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
