"use client";

interface PaperFoldCornerProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "brand";
  className?: string;
}

const sizeMap = {
  sm: { fold: 20, shadow: 22 },
  md: { fold: 32, shadow: 34 },
  lg: { fold: 28, shadow: 30 },
};

export function PaperFoldCorner({
  size = "md",
  variant = "light",
  className = "",
}: PaperFoldCornerProps) {
  const { fold, shadow } = sizeMap[size];

  // Color schemes for different contexts – enhanced for clear fold visibility
  const colors = {
    light: {
      // For dark backgrounds (white fold)
      foldFront: "rgba(255,255,255,0.30)",
      foldBack: "rgba(255,255,255,0.50)",
      shadow: "rgba(0,0,0,0.45)",
      crease: "rgba(255,255,255,0.55)",
      highlight: "rgba(255,255,255,0.22)",
    },
    dark: {
      // For light backgrounds (dark fold)
      foldFront: "rgba(4,62,82,0.30)",
      foldBack: "rgba(4,62,82,0.55)",
      shadow: "rgba(4,62,82,0.50)",
      crease: "rgba(4,62,82,0.70)",
      highlight: "rgba(4,62,82,0.18)",
    },
    brand: {
      // For brand-colored elements (sunset accent)
      foldFront: "rgba(255,255,255,0.25)",
      foldBack: "rgba(255,255,255,0.42)",
      shadow: "rgba(0,0,0,0.38)",
      crease: "rgba(255,255,255,0.48)",
      highlight: "rgba(255,255,255,0.18)",
    },
  };

  const c = colors[variant];

  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none ${className}`}
      style={{ width: fold, height: fold }}
    >
      {/* Shadow underneath the fold */}
      <div
        className="absolute"
        style={{
          width: shadow,
          height: shadow,
          top: 0,
          right: 0,
          background: `linear-gradient(135deg, transparent 48%, ${c.shadow} 52%)`,
          filter: "blur(3px)",
          opacity: 0.8,
        }}
      />

      {/* The folded-back paper triangle (visible backside) */}
      <div
        className="absolute top-0 right-0"
        style={{
          width: fold,
          height: fold,
          background: `linear-gradient(135deg, ${c.foldBack} 0%, ${c.foldFront} 100%)`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
      />

      {/* Crease highlight line along the diagonal */}
      <div
        className="absolute top-0 right-0"
        style={{
          width: fold,
          height: fold,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "141%", // sqrt(2) * 100%
            height: "2px",
            background: `linear-gradient(90deg, transparent 0%, ${c.crease} 30%, ${c.crease} 70%, transparent 100%)`,
            transformOrigin: "top left",
            transform: "rotate(45deg)",
          }}
        />
      </div>

      {/* Subtle highlight on the "underneath" part of the page */}
      <div
        className="absolute"
        style={{
          top: 1,
          right: fold - 2,
          width: 0,
          height: 0,
          borderTop: `${fold - 2}px solid ${c.highlight}`,
          borderRight: `${fold - 2}px solid transparent`,
        }}
      />
    </div>
  );
}
