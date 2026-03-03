import type { ReactNode } from "react";

interface AnchorHeadingProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function AnchorHeading({ id, children, className = "" }: AnchorHeadingProps) {
  return (
    <a
      href={`#${id}`}
      className={`group/anchor relative block no-underline ${className}`}
    >
      <span className="absolute right-full top-1/2 -translate-y-1/2 pr-2 text-accent opacity-0 group-hover/anchor:opacity-100 transition-opacity duration-200 font-display font-bold text-[1em] uppercase leading-none">
        #
      </span>
      {children}
    </a>
  );
}
