"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  paperCut?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  paperCut = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden";

  const variantStyles = {
    primary:
      "bg-sunset text-white hover:bg-[#c85a32] focus-visible:ring-sunset",
    secondary:
      "bg-sea-green text-white hover:bg-pine focus-visible:ring-sea-green",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
    "outline-dark":
      "bg-transparent border-2 border-nile-blue text-nile-blue hover:bg-nile-blue/10 focus-visible:ring-nile-blue",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const paperCutStyle = paperCut
    ? { clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }
    : { borderRadius: "2px" };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  const PaperFold = () => (
    paperCut ? (
      <div
        className="absolute top-0 right-0 w-4 h-4 pointer-events-none"
        style={{
          background: variant === "outline-dark"
            ? "linear-gradient(135deg, rgba(4,62,82,0.8) 0%, rgba(4,62,82,0.6) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          borderLeft: variant === "outline-dark"
            ? "1.5px solid rgba(4,62,82,0.9)"
            : "1.5px solid rgba(255,255,255,0.2)",
          borderBottom: variant === "outline-dark"
            ? "1.5px solid rgba(4,62,82,0.9)"
            : "1.5px solid rgba(255,255,255,0.2)",
        }}
      />
    ) : null
  );

  if (href) {
    return (
      <motion.a href={href} className={combinedStyles} style={paperCutStyle} {...motionProps}>
        <PaperFold />
        <span className="relative z-10 flex items-center">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      style={paperCutStyle}
      {...motionProps}
    >
      <PaperFold />
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
}
