"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { Palette, Globe, TrendingUp, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "We craft complete brand identities that resonate with your audience. From naming to visual systems, we build brands that feel authentic and command attention.",
    accentColor: "sunset",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, beautiful, conversion-focused websites built with modern technology. From domain setup to SEO optimization, we handle everything.",
    accentColor: "sea-green",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns that put your brand in front of the right people. We create, manage, and optimize for measurable results.",
    accentColor: "kraft",
  },
  {
    icon: Layers,
    title: "Business Scaling",
    description:
      "Ready to grow? We build systems and strategies that scale with you. From CRM setup to process optimization, we set you up for sustainable success.",
    accentColor: "sunset",
  },
];

const accentStyles = {
  sunset: {
    label: "text-sunset/80",
    border: "hover:border-sunset/30",
    iconBg: "opacity-[0.12] group-hover:opacity-[0.18] text-sunset",
  },
  "sea-green": {
    label: "text-sea-green/80",
    border: "hover:border-sea-green/30",
    iconBg: "opacity-[0.12] group-hover:opacity-[0.18] text-sea-green",
  },
  kraft: {
    label: "text-kraft/80",
    border: "hover:border-kraft/30",
    iconBg: "opacity-[0.12] group-hover:opacity-[0.18] text-kraft",
  },
};

export function Services() {
  return (
    <section id="services" className="bg-pine py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <FadeInView>
            <span className="inline-block text-nile-blue text-sm font-semibold tracking-widest uppercase mb-4">
              Our Services
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              End-to-End Business
              <br />
              <span className="text-kraft">Lifecycle Solutions</span>
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-lg">
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
                  className={`group relative bg-nile-blue/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 lg:p-12 h-full border border-white/5 ${styles.border} transition-all duration-300 overflow-hidden`}
                >
                  {/* Large Background Icon */}
                  <div className={`absolute -right-8 -bottom-8 transition-opacity duration-500 ${styles.iconBg}`}>
                    <service.icon className="w-56 h-56 md:w-64 md:h-64" strokeWidth={0.8} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Label */}
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${styles.label}`}>
                      {service.title}
                    </span>

                    {/* Title */}
                    <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                      {service.title === "Branding" && "Craft Your Identity"}
                      {service.title === "Website Development" && "Build Your Presence"}
                      {service.title === "Digital Marketing" && "Amplify Your Reach"}
                      {service.title === "Business Scaling" && "Accelerate Your Growth"}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      {service.description}
                    </p>
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
