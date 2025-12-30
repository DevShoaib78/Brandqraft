"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Elevate Fitness",
    category: "Branding & Web Development",
    description: "Complete brand overhaul and e-commerce platform for a premium fitness studio chain.",
    tags: ["Branding", "E-commerce", "UX Design"],
    color: "bg-sunset/20",
  },
  {
    title: "Northwind Capital",
    category: "Website & Digital Strategy",
    description: "Sophisticated web presence for a boutique investment firm targeting high-net-worth clients.",
    tags: ["Web Design", "SEO", "Content Strategy"],
    color: "bg-sea-green/30",
  },
  {
    title: "Terra Botanics",
    category: "Brand Identity & Marketing",
    description: "Organic skincare brand from concept to market, including packaging and digital campaigns.",
    tags: ["Brand Identity", "Packaging", "Digital Marketing"],
    color: "bg-kraft/30",
  },
  {
    title: "CloudScale Solutions",
    category: "Web App & Growth",
    description: "B2B SaaS platform redesign that increased conversions by 140% in the first quarter.",
    tags: ["Product Design", "Development", "Growth"],
    color: "bg-pine/40",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-nile-blue py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <FadeInView>
              <span className="inline-block text-sea-green text-sm font-medium tracking-widest uppercase mb-4">
                Selected Work
              </span>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Projects that
                <br />
                <span className="text-sunset">speak for themselves</span>
              </h2>
            </FadeInView>
          </div>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-lg max-w-md">
              A curated selection of recent work. Each project represents a unique challenge solved with strategy and craft.
            </p>
          </FadeInView>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeInView key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`${project.color} aspect-[4/3] rounded-sm mb-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-lg font-medium">
                      Project Image
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-sunset/0 group-hover:bg-sunset/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-16 h-16 bg-sunset rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <p className="text-white/50 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 group-hover:text-sunset transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/50 border border-white/20 px-3 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
