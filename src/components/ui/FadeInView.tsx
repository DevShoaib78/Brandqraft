"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

export function FadeInView({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
  amount = 0.2,
}: FadeInViewProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 30 };
      case "down":
        return { y: -30 };
      case "left":
        return { x: 30 };
      case "right":
        return { x: -30 };
      default:
        return {};
    }
  };

  const variants: Variants = {
    initial: {
      opacity: 0,
      ...getInitialPosition(),
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-50px", amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
