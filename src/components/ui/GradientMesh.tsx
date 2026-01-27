"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient layer with pulse animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(1, 106, 109, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(28, 146, 144, 0.1) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving orb - slow traverse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(225, 106, 61, 0.08) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
        animate={{
          x: ["0%", "120vw"],
          y: ["0%", "30%", "-10%", "20%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary gradient orb - opposite direction */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(28, 146, 144, 0.06) 0%, transparent 70%)",
          bottom: "20%",
          right: "-10%",
        }}
        animate={{
          x: ["0%", "-100vw"],
          y: ["0%", "-20%", "10%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle kraft paper accent */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(183, 158, 123, 0.05) 0%, transparent 70%)",
          top: "60%",
          left: "50%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
