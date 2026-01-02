"use client";

import { motion } from "framer-motion";
import { Rocket, Eye, Target } from "lucide-react";
import { FadeInView } from "../ui/FadeInView";
import { CounterStat } from "../ui/CounterStat";

const stats = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
  { end: 5, suffix: "+", label: "Years Experience" },
];

const values = [
  "Problem Solving",
  "Artistic Approach",
  "Simplicity",
  "Integrity",
  "Trust",
];

export function About() {
  return (
    <section id="about" className="relative bg-nile-blue py-24 md:py-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sea-green/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sunset/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInView>
            <span className="inline-block text-sea-green text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Transforming ideas into{" "}
              <span className="text-sunset">Thriving Brands</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              We specialize in empowering new firms by providing comprehensive branding,
              digital marketing, and business scaling solutions. We believe in more than
              just launching businesses — we believe in building legacies.
            </p>
          </FadeInView>
        </div>

        {/* Vision & Mission Cards - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Vision Card */}
          <FadeInView direction="up" delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sunset/20 to-sunset/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 lg:p-12 hover:border-sunset/30 transition-colors duration-300 overflow-hidden">
                {/* Large Background Icon */}
                <div className="absolute -right-6 top-4 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500">
                  <Eye className="w-48 h-48 md:w-56 md:h-56 text-sunset" strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-block text-sunset/80 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Our Vision
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold mb-5 leading-tight">
                    Empowering Ambitious{" "}
                    <span className="text-sunset">Entrepreneurs</span>
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    Business success for every ambitious entrepreneur and business with
                    a strategic and simplified way. We envision a world where great ideas
                    flourish into market-leading brands.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeInView>

          {/* Mission Card */}
          <FadeInView direction="up" delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sea-green/20 to-sea-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 lg:p-12 hover:border-sea-green/30 transition-colors duration-300 overflow-hidden">
                {/* Large Background Icon */}
                <div className="absolute -right-4 top-4 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500">
                  <Rocket className="w-48 h-48 md:w-56 md:h-56 text-sea-green" strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-block text-sea-green/80 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Our Mission
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold mb-5 leading-tight">
                    End-to-End{" "}
                    <span className="text-sea-green">Growth Solutions</span>
                  </h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    To empower ambitious entrepreneurs and businesses by providing end-to-end
                    business lifecycle solutions from ideation to sustainable, auto-pilot growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeInView>
        </div>

        {/* Stats Section */}
        <FadeInView delay={0.3}>
          <div className="relative mb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl" />
            <div className="absolute inset-0 border border-white/[0.05] rounded-3xl" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-sunset/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-sea-green/30 rounded-br-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 py-16 md:py-20 px-8 md:px-12">
              {stats.map((stat, i) => (
                <div key={i} className="relative flex flex-col items-center justify-center">
                  {/* Vertical divider for desktop */}
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  )}
                  <CounterStat {...stat} delay={0.2 + i * 0.15} />
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Values Section */}
        <div className="text-center">
          <FadeInView>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-10">
              Our Core Values
            </h3>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
              {values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="inline-flex items-center gap-2.5 px-2 py-2 text-white text-base md:text-lg font-medium transition-all duration-300 cursor-default"
                >
                  <Target className="w-4 h-4 text-sunset" />
                  {value}
                </motion.span>
              ))}
            </div>
          </FadeInView>
        </div>

        {/* Core Belief Quote */}
        <FadeInView delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-white/70 text-xl md:text-2xl lg:text-3xl italic max-w-3xl mx-auto leading-relaxed">
              &ldquo;Our core belief is that{" "}
              <span className="text-sunset font-semibold">business success</span>{" "}
              is a possibility for everyone.&rdquo;
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
