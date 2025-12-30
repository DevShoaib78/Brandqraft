"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-sunset text-white hover:bg-[#c85a32] focus-visible:ring-sunset",
    secondary:
      "bg-sea-green text-white hover:bg-pine focus-visible:ring-sea-green",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedStyles} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
