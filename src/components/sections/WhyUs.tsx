"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";

const differentiators = [
  {
    number: "01",
    title: "Holistic Integration",
    description:
      "We don't do fragmented services. Branding, marketing, and scaling work as one unified growth engine.",
  },
  {
    number: "02",
    title: "Built to Last",
    description:
      "Quick wins are easy. We build brands and systems designed for sustainable, long-term success.",
  },
  {
    number: "03",
    title: "Data Meets Creativity",
    description:
      "Every decision is backed by insights. Every execution is crafted with intention.",
  },
  {
    number: "04",
    title: "Your Budget, Your Pace",
    description:
      "Tailored solutions that respect where you are today while preparing you for where you're headed.",
  },
];

const principles = ["Reliability", "Efficiency", "Quality", "Delivery"];

const whyUsDecorations = [
  { icon: "014-bird" as const, size: "xs" as const, position: { top: "5%", right: "3%" }, mobilePosition: { top: "2%", right: "1%" }, opacity: 1.0, rotate: -10, colorFilter: "light" as const },
  { icon: "024-boat" as const, size: "sm" as const, position: { bottom: "12%", left: "2%" }, mobilePosition: { bottom: "1%", left: "1%" }, opacity: 1.0, rotate: 8, colorFilter: "light" as const },
  { icon: "042-origami" as const, size: "xs" as const, position: { top: "55%", left: "2%" }, mobilePosition: { bottom: "2%", right: "2%" }, opacity: 1.0, rotate: -15, colorFilter: "light" as const },
];

export function WhyUs() {
  return (
    <section className="relative bg-nile-blue overflow-hidden">
      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={whyUsDecorations} />

      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Top gradient layer */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-sea-green/20 to-transparent" />

        {/* Accent orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sea-green/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-sunset/10 rounded-full blur-[100px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Main Section - Consolidated */}
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
          {/* Top Section */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3">
              {/* Label */}
              <FadeInView>
                <span className="inline-block text-white text-base md:text-lg font-semibold tracking-[0.25em] mb-6">
                  Why BrandQraft?
                </span>
              </FadeInView>

              {/* Main Headline */}
              <FadeInView delay={0.1}>
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-8">
                  Not just another agency.
                  <br />
                  <span className="text-sunset">Your growth architect.</span>
                </h2>
              </FadeInView>

              {/* Consolidated Opening Statement */}
              <FadeInView delay={0.2}>
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                  Most agencies sell services. We build partnerships—invested in your success beyond project delivery.
                  From ground-up ideation to sustainable growth, every solution is tailored to{" "}
                  <span className="text-sea-green font-medium">your needs</span>,{" "}
                  <span className="text-sunset font-medium">your budget</span>, and{" "}
                  <span className="text-kraft font-medium">your vision</span>.
                </p>
              </FadeInView>
            </div>

            {/* Right Content - Principles - 2 columns */}
            <div className="lg:col-span-2 lg:pt-16">
              <FadeInView delay={0.3}>
                <div className="lg:pl-8 lg:border-l border-white/10">
                  <span className="text-white/40 text-sm tracking-widest block mb-6">
                    Our principles
                  </span>
                  <ul className="space-y-4">
                    {principles.map((principle, index) => (
                      <motion.li
                        key={principle}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3 text-white text-lg font-medium"
                      >
                        <span className="w-2 h-2 bg-sunset rounded-full" />
                        {principle}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            </div>
          </div>

          {/* Differentiators Grid - Now integrated into main section */}
          <div className="max-w-6xl mx-auto">
            <FadeInView>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-12 md:mb-16">
                What sets us apart
              </h3>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16">
              {differentiators.map((item, index) => (
                <FadeInView
                  key={item.number}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Background Number - Right Side */}
                    <span className="absolute right-0 top-0 text-[100px] md:text-[120px] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
                      {item.number}
                    </span>

                    {/* Content */}
                    <div className="relative">
                      <h4 className="text-white text-xl md:text-2xl font-semibold mb-3 group-hover:text-sunset transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/60 leading-relaxed pr-16 md:pr-20">
                        {item.description}
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
