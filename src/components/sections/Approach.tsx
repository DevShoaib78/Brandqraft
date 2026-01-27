"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";

const steps = [
  {
    number: "01",
    title: "Strategize",
    description:
      "Understanding your vision, market position, and goals. We perform deep analysis of your business landscape to design a roadmap for success.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Crafting your brand identity, visual systems, and digital presence with pixel-perfect precision. Every detail is refined to perfection.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Developing your website, marketing infrastructure, and digital ecosystem from the ground up. Robust foundations for lasting impact.",
  },
  {
    number: "04",
    title: "Amplify",
    description:
      "Launching targeted marketing campaigns, refining your reach, and enhancing your digital footprint across all channels.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Tracking performance, analyzing growth metrics, and optimizing for sustainable business scaling. From traction to auto-pilot growth.",
  },
];

const approachDecorations = [
  { icon: "045-origami" as const, size: "md" as const, position: { top: "5%", right: "4%" }, mobilePosition: { top: "3%", right: "2%" }, opacity: 1.0, rotate: 10, colorFilter: "light" as const },
  { icon: "041-origami" as const, size: "xs" as const, position: { bottom: "3%", left: "2%" }, mobilePosition: { bottom: "1%", left: "1%" }, opacity: 1.0, rotate: -12, colorFilter: "light" as const },
];

export function Approach() {
  return (
    <section id="approach" className="relative bg-nile-blue py-16 md:py-20 overflow-hidden">
      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={approachDecorations} />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeInView>
            <span className="inline-block text-sea-green text-sm font-semibold tracking-widest mb-4 uppercase">
              Our approach
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              A process built for
              <br />
              <span className="text-sunset">Business Excellence</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-base md:text-lg">
              Our process is transparent, collaborative, and laser-focused on
              delivering outcomes that exceed expectations — from strategy to scale.
            </p>
          </FadeInView>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-10">
            {steps.map((step, index) => (
              <FadeInView key={step.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Vertical Line for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-9 top-[76px] bottom-0 w-px h-[calc(100%+40px)] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-b from-sunset/40 to-sea-green/40" />
                    </div>
                  )}

                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0 w-[72px] h-[72px] rounded-full bg-nile-blue border-2 border-sunset flex items-center justify-center">
                    <span className="text-sunset text-2xl font-semibold">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 pt-3">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Connecting Line with Animated Shine */}
            <div className="absolute top-[44px] left-[calc(10%+44px)] right-[calc(10%+44px)] h-[3px] overflow-hidden">
              {/* Base line */}
              <div className="absolute inset-0 bg-gradient-to-r from-sunset/60 via-sea-green/60 to-sunset/60" />

              {/* Animated shine effect using Framer Motion */}
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{
                  width: "25%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                }}
                animate={{
                  x: ["-100%", "500%"],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <FadeInView key={step.number} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative text-center"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 mx-auto w-[88px] h-[88px] rounded-full bg-nile-blue border-2 border-sunset flex items-center justify-center mb-8">
                      <span className="text-sunset text-3xl font-semibold">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-1">
                      <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
