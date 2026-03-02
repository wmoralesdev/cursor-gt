import { useTheme } from "next-themes";

export function CursorBadge() {
  const { resolvedTheme } = useTheme();
  const lockupSrc =
    resolvedTheme === "light" ? "/lockup-light.png" : "/lockup-dark.png";

  return (
    <img
      src={lockupSrc}
      alt="Cursor Ambassador"
      className="h-4 w-auto object-contain"
    />
  );
}
