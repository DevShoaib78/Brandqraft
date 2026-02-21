"use client";

interface PaperFoldCornerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "brand";
  className?: string;
}

const sizeMap = {
  xs: 18,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

export function PaperFoldCorner({
  size = "md",
  variant = "light",
  className = "",
}: PaperFoldCornerProps) {
  const N = sizeMap[size];

  const foldColors = {
    light: {
      base: "rgba(8, 75, 100, 0.3)",
      crease: "rgba(0, 0, 0, 0.15)",
    },
    dark: {
      base: "rgba(4, 50, 70, 0.3)",
      crease: "rgba(0, 0, 0, 0.12)",
    },
    brand: {
      base: "rgba(160, 70, 35, 0.3)",
      crease: "rgba(0, 0, 0, 0.15)",
    },
  };

  const c = foldColors[variant];

  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none ${className}`}
      style={{ width: N, height: N, zIndex: 30 }}
    >
      {/* Fold-back triangle — the paper face folding onto itself.
          Right angle at bottom-left, hypotenuse = crease diagonal. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: N,
          height: N,
          clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          background: `linear-gradient(135deg, ${c.crease} 0%, ${c.base} 60%, transparent 100%)`,
        }}
      />

      {/* Crease shadow along the fold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: N,
          height: N,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -1,
            left: -1,
            width: Math.ceil(N * 1.414) + 2,
            height: 2,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            transformOrigin: "top left",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    </div>
  );
}
