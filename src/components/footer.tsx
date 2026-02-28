export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-semibold text-lg tracking-wide">
            Cursor Hackathon GT
          </span>
          <span className="text-sm text-gray-500">
            © 2026. All rights reserved.
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <span className="text-gray-600">Hosted by:</span>
          <a href="https://luma.com/user/theoscarvibes" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
            Oscar Morales
          </a>
          <a href="https://luma.com/user/wmoralesdev" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
            Walter Morales
          </a>
          <a href="https://luma.com/user/the502project" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
            the502project
          </a>
          <a href="https://luma.com/user/vudyme" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
            Vudy App
          </a>
        </div>

        <div>
          <a 
            href="https://cursor.com/community" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-medium text-brand-orange hover:text-white transition-colors"
          >
            Cursor Community ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
