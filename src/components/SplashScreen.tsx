"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    // Enter phase complete after logo animation
    const enterTimer = setTimeout(() => setPhase("hold"), 800);

    // Begin exit after 4 seconds total (reduced by 1 second)
    const exitTimer = setTimeout(() => setPhase("exit"), 3400);

    // Complete and unmount after exit animation
    const completeTimer = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-nile-blue"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.02 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nile-blue via-nile-blue to-[#032836] opacity-100" />

        {/* Ambient glow behind logo */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,106,61,0.08) 0%, transparent 70%)",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Logo container */}
        <div className="relative flex flex-col items-center">
          {/* Logo with refined entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <Image
              src="/logo white.png"
              alt="BrandQraft"
              width={220}
              height={60}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            className="mt-6 text-white/40 text-sm tracking-[0.2em] uppercase font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
          >
            Crafting Brands
          </motion.p>

          {/* Elegant loading indicator */}
          <motion.div
            className="mt-10 flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-sunset/60"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Corner accents */}
        <motion.div
          className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
