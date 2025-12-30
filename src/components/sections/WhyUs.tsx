"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";

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

export function WhyUs() {
  return (
    <section className="relative bg-nile-blue overflow-hidden">
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
        {/* Hero Section */}
        <div className="container mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3">
              {/* Label */}
              <FadeInView>
                <span className="inline-block text-sea-green text-sm font-semibold tracking-[0.25em] uppercase mb-6">
                  Why BrandQraft?
                </span>
              </FadeInView>

              {/* Main Headline */}
              <FadeInView delay={0.1}>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-8">
                  Not just another agency.
                  <br />
                  <span className="text-sunset">Your growth architect.</span>
                </h2>
              </FadeInView>

              {/* Opening Statement */}
              <FadeInView delay={0.2}>
                <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl">
                  Most agencies sell services. We build partnerships. The difference?
                  We're invested in your success long after the project ends.
                </p>
              </FadeInView>
            </div>

            {/* Right Content - Principles - 2 columns */}
            <div className="lg:col-span-2 lg:pt-16">
              <FadeInView delay={0.3}>
                <div className="lg:pl-8 lg:border-l border-white/10">
                  <span className="text-white/40 text-sm uppercase tracking-widest block mb-6">
                    Our Principles
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
        </div>

        {/* Differentiators Section */}
        <div className="relative">
          {/* Transition gradient */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-pine/30 pointer-events-none" />

          <div className="bg-pine/30 backdrop-blur-sm border-t border-b border-white/5">
            <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
              {/* Section Heading - Centered */}
              <FadeInView>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 -mt-8">
                  What Sets Us Apart
                </h3>
              </FadeInView>

              {/* Differentiators Grid */}
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

        {/* Closing Statement */}
        <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              {/* Quote Mark */}
              <div className="text-sunset/20 text-[120px] md:text-[160px] font-serif leading-none mb-[-60px] md:mb-[-80px]">
                &ldquo;
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <p className="text-white text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed mb-8">
                We understand the unique challenges of building something from the ground up.
                That's why we tailor every solution to{" "}
                <span className="text-sea-green font-medium">your specific needs</span>,{" "}
                <span className="text-sunset font-medium">your budget</span>, and{" "}
                <span className="text-kraft font-medium">your vision</span>.
              </p>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-white/50 text-lg">
                Your success is our badge of honor
              </p>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
