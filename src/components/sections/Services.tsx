"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { Palette, Globe, TrendingUp, Layers } from "lucide-react";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";

const services = [
  {
    icon: Palette,
    title: "Branding",
    subtitle: "Craft Your Identity",
    description:
      "We craft complete brand identities that resonate with your audience. From naming to visual systems, we build brands that feel authentic and command attention.",
    accentColor: "sunset",
  },
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "Build Your Presence",
    description:
      "Fast, beautiful, conversion-focused websites built with modern technology. From domain setup to SEO optimization, we handle everything.",
    accentColor: "sea-green",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Amplify Your Reach",
    description:
      "Strategic marketing campaigns that put your brand in front of the right people. We create, manage, and optimize for measurable results.",
    accentColor: "kraft",
  },
  {
    icon: Layers,
    title: "Business Scaling",
    subtitle: "Accelerate Your Growth",
    description:
      "Ready to grow? We build systems and strategies that scale with you. From CRM setup to process optimization, we set you up for sustainable success.",
    accentColor: "sunset",
  },
];

const accentStyles = {
  sunset: {
    heading: "text-sunset",
    border: "hover:border-sunset/50",
    iconBg: "opacity-[0.25] group-hover:opacity-[0.35] text-sunset",
    cardBg: "bg-nile-blue/90",
  },
  "sea-green": {
    heading: "text-sea-green",
    border: "hover:border-sea-green/50",
    iconBg: "opacity-[0.25] group-hover:opacity-[0.35] text-sea-green",
    cardBg: "bg-nile-blue/88",
  },
  kraft: {
    heading: "text-kraft",
    border: "hover:border-kraft/50",
    iconBg: "opacity-[0.25] group-hover:opacity-[0.35] text-kraft",
    cardBg: "bg-nile-blue/92",
  },
};

const servicesDecorations = [
  // Organic asymmetric positions - 3 icons
  { icon: "043-origami" as const, size: "sm" as const, position: { top: "6%", left: "3%" }, mobilePosition: { top: "3%", left: "1%" }, opacity: 1.0, rotate: -12, colorFilter: "black" as const },
  { icon: "044-origami" as const, size: "xs" as const, position: { top: "4%", right: "7%" }, mobilePosition: { top: "2%", right: "2%" }, opacity: 1.0, rotate: 15, colorFilter: "black" as const },
  { icon: "029-trophy" as const, size: "xs" as const, position: { bottom: "3%", left: "2%" }, mobilePosition: { bottom: "1%", left: "1%" }, opacity: 1.0, rotate: -5, colorFilter: "black" as const },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/middlebg.png')",
        }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={servicesDecorations} />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <FadeInView>
            <span className="inline-block text-nile-blue text-sm font-semibold tracking-widest mb-4 uppercase">
              Our services
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-nile-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              End-to-End Business
              <br />
              <span className="text-sunset">Lifecycle Solutions</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-nile-blue/80 text-base md:text-lg font-semibold">
              From ideation to sustainable growth, we provide comprehensive
              solutions that empower your business at every stage.
            </p>
          </FadeInView>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const styles = accentStyles[service.accentColor as keyof typeof accentStyles];

            return (
              <FadeInView key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div
                    className={`relative ${styles.cardBg} backdrop-blur-md p-8 md:p-10 lg:p-12 h-full border-2 border-white/10 ${styles.border} transition-all duration-300 overflow-visible`}
                    style={{
                      borderRadius: "0px",
                      clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <PaperFoldCorner size="md" variant="light" className="opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

                    {/* Large Background Icon */}
                    <div className={`absolute -right-8 -bottom-8 transition-opacity duration-500 ${styles.iconBg}`}>
                      <service.icon className="w-56 h-56 md:w-64 md:h-64" strokeWidth={0.8} />
                    </div>

                    {/* Content - SWAPPED: title is now heading, subtitle is now subheading */}
                    <div className="relative z-10">
                      {/* Main Title (was subheading, now heading with accent color) */}
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-3 leading-tight ${styles.heading}`}>
                        {service.title}
                      </h3>

                      {/* Subtitle (was heading, now smaller white text) */}
                      <span className="inline-block text-white/80 text-sm font-semibold tracking-wide mb-4">
                        {service.subtitle}
                      </span>

                      {/* Description */}
                      <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
