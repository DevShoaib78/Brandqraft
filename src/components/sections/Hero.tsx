"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";

const heroDecorations = [
  // 5 icons in organic, asymmetric positions
  { icon: "004-hummingbird" as const, size: "sm" as const, position: { top: "14%", left: "3%" }, mobilePosition: { top: "8%", left: "1%" }, opacity: 1.0, rotate: 15, colorFilter: "black" as const },
  { icon: "023-plane" as const, size: "md" as const, position: { top: "42%", left: "1.5%" }, mobilePosition: { top: "30%", left: "1%" }, opacity: 1.0, rotate: -10, colorFilter: "black" as const },
  { icon: "011-origami" as const, size: "xs" as const, position: { top: "7%", right: "5%" }, mobilePosition: { top: "5%", right: "2%" }, opacity: 1.0, rotate: -15, colorFilter: "black" as const },
  { icon: "025-butterfly" as const, size: "sm" as const, position: { top: "55%", right: "2%" }, mobilePosition: { bottom: "8%", right: "1%" }, opacity: 1.0, rotate: 8, colorFilter: "black" as const },
  { icon: "020-pinwheel" as const, size: "xs" as const, position: { bottom: "18%", left: "6%" }, mobilePosition: { bottom: "12%", left: "2%" }, opacity: 1.0, rotate: 20, colorFilter: "black" as const },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/25" />

      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={heroDecorations} />

      {/* Content */}
      <div className="container relative mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-nile-blue/70 text-sm md:text-base font-bold tracking-widest mb-6 uppercase">
              Branding, digital marketing & business scaling
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-nile-blue text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8"
          >
            Transforming ideas
            <br />
            into thriving
            <br />
            <span className="relative inline-block">
              {/* Rough hand-drawn marker highlight effect */}
              <svg
                className="absolute -left-2 -right-2 -top-1 -bottom-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none"
                viewBox="0 0 200 70"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 15 L4 9 Q6 5, 12 7 L50 4 Q80 3, 110 5 L150 3 Q175 4, 190 6 L196 5 Q199 7, 198 14 L199 50 Q198 58, 195 62 L190 66 Q185 68, 178 66 L140 68 Q100 69, 60 67 L20 68 Q10 67, 6 63 L3 58 Q2 50, 3 40 Z"
                  fill="#E16A3D"
                  opacity="0.88"
                />
                <path
                  d="M6 8 Q15 4, 25 6 L35 5 Q50 3, 70 5 L90 4 Q110 3, 130 5 L150 4 Q170 5, 185 7 L194 6"
                  stroke="#E16A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                  fill="none"
                />
                <path
                  d="M8 9 L20 7 Q40 8, 60 6 L85 7 Q115 5, 145 7 L175 6 Q188 7, 195 8"
                  stroke="#E16A3D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                  fill="none"
                />
                <path
                  d="M5 64 L18 66 Q35 68, 55 65 L75 67 Q100 69, 125 66 L155 68 Q175 66, 190 65 L197 66"
                  stroke="#E16A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                  fill="none"
                />
                <path
                  d="M7 65 Q25 67, 45 64 L70 66 Q95 68, 120 65 L160 67 Q180 65, 194 64"
                  stroke="#E16A3D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                  fill="none"
                />
                <path
                  d="M6 12 L5 18 Q4 25, 5 32 L4 42 Q3 52, 5 60"
                  stroke="#E16A3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                  fill="none"
                />
                <path
                  d="M196 10 L197 20 Q198 30, 197 40 L198 50 Q197 58, 195 64"
                  stroke="#E16A3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                  fill="none"
                />
              </svg>
              <span className="relative z-10 text-white px-3 py-1">BRANDS</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-nile-blue text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-semibold"
          >
            End-to-end business lifecycle solutions from ideation to sustainable
            growth. We empower ambitious entrepreneurs to build market-leading
            brands that stand the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA with paper-fold */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-block"
            >
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center bg-sunset px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#c85a32] overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                }}
              >
                <PaperFoldCorner size="sm" variant="brand" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
              </a>
            </motion.div>

            {/* Secondary CTA with paper-fold */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-block"
            >
              <a
                href="#work"
                className="relative inline-flex items-center justify-center border-2 border-nile-blue bg-transparent px-8 py-4 text-lg font-semibold text-nile-blue transition-all duration-300 hover:bg-nile-blue/10 overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                }}
              >
                <PaperFoldCorner size="sm" variant="dark" />
                <span className="relative z-10">View Our Work</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
