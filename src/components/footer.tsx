const LUMA_URL = "https://lu.ma/935r7zp6";
const CURSOR_COMMUNITY = "https://cursor.com/community";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-8 py-3.5 font-semibold text-black transition-colors hover:bg-amber-400"
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
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <a
            href={CURSOR_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500"
          >
            Cursor Community
          </a>
          <a
            href="mailto:community@cursor.com"
            className="hover:text-amber-500"
          >
            Contacto
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          Cursor Hackathon Ciudad de Guatemala 2026 · 7 de marzo
        </p>
      </div>
    </footer>
  );
}
