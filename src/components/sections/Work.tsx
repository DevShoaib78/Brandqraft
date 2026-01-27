"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { ArrowUpRight } from "lucide-react";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";
import Link from "next/link";
import { projects } from "@/data/projects";

function AnimatedProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % project.imagePlaceholders.length);
  }, [project.imagePlaceholders.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <FadeInView delay={0}>
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group cursor-pointer h-full"
        >
          <div className="relative h-full flex flex-col">
            {/* Animated Project Image Area with paper-fold */}
            <div
              className="relative aspect-[4/3] mb-5 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              <PaperFoldCorner size="sm" variant="light" className="z-20 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Cycling backgrounds with crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 ${project.imagePlaceholders[currentIndex]}`}
                />
              </AnimatePresence>

              {/* Project title overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-lg font-semibold tracking-wide">
                  {project.title}
                </span>
              </div>

              {/* Hover Overlay with arrow */}
              <div className="absolute inset-0 bg-sunset/0 group-hover:bg-sunset/15 transition-colors duration-300 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-sunset flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Image indicator dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.imagePlaceholders.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-white/80 w-3" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <p className="text-white/50 text-xs mb-2 uppercase tracking-wide">
                {project.category}
              </p>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2 group-hover:text-sunset transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/60 mb-3 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/50 border border-white/20 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </FadeInView>
  );
}

export function Work() {
  return (
    <section id="work" className="relative bg-nile-blue py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <FadeInView>
              <span className="inline-block text-sea-green text-sm font-semibold tracking-widest mb-4 uppercase">
                Selected work
              </span>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Projects that
                <br />
                <span className="text-sunset">speak for themselves</span>
              </h2>
            </FadeInView>
          </div>

          <FadeInView delay={0.2}>
            <p className="text-white/70 text-base md:text-lg max-w-md">
              A curated selection of recent work. Each project represents a
              unique challenge solved with strategy and craft.
            </p>
          </FadeInView>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project) => (
            <AnimatedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
