"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      >
        {/* Subtle overlay for improved text readability */}
        <div className="absolute inset-0 bg-nile-blue/[0.18]" />
        <div className="absolute inset-0 bg-gradient-to-b from-kraft/5 via-transparent to-kraft/15" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-nile-blue/70 text-base md:text-lg font-bold tracking-widest uppercase mb-6">
              Branding, Digital Marketing & Business Scaling
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
            <span className="text-sunset">BRANDS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-nile-blue text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
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
            {/* Primary CTA - Pill shaped */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-sunset px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#c85a32]"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>

            {/* Secondary CTA - Pill shaped outline */}
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border-2 border-nile-blue bg-transparent px-8 py-4 text-lg font-semibold text-nile-blue transition-all duration-300 hover:bg-nile-blue/10"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
