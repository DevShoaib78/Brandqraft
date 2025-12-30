"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Extracting your thoughts and ideas, based on your current frame of mind and future vision. Your inspiration is our anchor.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Exploring the landscape for successful examples to establish what good looks like. Well informed ideas are critical to your success.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Ideating and shaping your vision to life. Attention to detail down to the pixel, is not just a principle, but our passion.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Presenting the product that radiates perfection in each pixel. An outcome that you can be proud of, and we can wear as a badge.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="bg-nile-blue py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeInView>
            <span className="inline-block text-sea-green text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              A process built for
              <br />
              <span className="text-sunset">Pixel Perfection</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-lg">
              Our process is transparent, collaborative, and laser-focused on
              delivering outcomes that exceed expectations.
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
            <div className="absolute top-[44px] left-[calc(12.5%+44px)] right-[calc(12.5%+44px)] h-[2px] overflow-hidden">
              {/* Base line */}
              <div className="absolute inset-0 bg-gradient-to-r from-sunset/50 via-sea-green/50 to-sunset/50" />

              {/* Animated shine effect */}
              <div className="animate-shine-sweep" />
            </div>

            <div className="grid grid-cols-4 gap-6">
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
                    <div className="px-2">
                      <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm md:text-base">
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
