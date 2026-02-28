import { CursorLogo } from "./cursor-logo";

const LUMA_URL = "https://lu.ma/935r7zp6";

export function Hero() {
  return (
    <header className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 120'%3E%3Crect x='0' y='60' width='80' height='60' fill='%23fff'/%3E%3Crect x='100' y='40' width='60' height='80' fill='%23fff'/%3E%3Crect x='180' y='20' width='100' height='100' fill='%23fff'/%3E%3Crect x='300' y='50' width='70' height='70' fill='%23fff'/%3E%3Crect x='390' y='30' width='90' height='90' fill='%23fff'/%3E%3Crect x='500' y='45' width='65' height='75' fill='%23fff'/%3E%3Crect x='585' y='15' width='110' height='105' fill='%23fff'/%3E%3Crect x='715' y='55' width='85' height='65' fill='%23fff'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 animate-fade-in-up">
        <div className="flex h-14 w-14 items-center justify-center text-white">
          <CursorLogo className="h-12 w-12" />
        </div>

        <div className="space-y-1">
          <h1
            className="text-5xl tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cursor Hackathon
          </h1>
          <p className="text-xl text-zinc-400 sm:text-2xl">
            Ciudad de Guatemala 2026
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-base text-zinc-300 sm:gap-4 sm:text-lg">
          <span>07/03/2026</span>
          <span className="text-amber-500">·</span>
          <span>10AM–5PM</span>
          <span className="text-amber-500">·</span>
          <span>UVG Z15</span>
        </div>

        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber-500 px-8 py-3.5 font-semibold text-black transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2"
        >
          Registrarse en Luma
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
