"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PaperFoldCorner } from "@/components/ui/PaperFoldCorner";

interface ProjectDetailClientProps {
  slug: string;
}

export function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-nile-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-semibold mb-4">Project Not Found</h1>
          <Link href="/#work" className="text-sunset hover:text-sunset/80 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-nile-blue">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}33 0%, transparent 60%)`,
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="container relative mx-auto px-6 lg:px-12">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest mb-4 uppercase"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-white/60 border border-white/20 px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Visuals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {(project.projectImages ?? project.imagePlaceholders).map((src, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  {project.projectImages ? (
                    <div className="relative aspect-video">
                      <Image
                        src={src}
                        alt={`${project.title} — screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className={`aspect-video ${src}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/15 text-sm font-medium">
                          Screenshot {index + 1}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
                <PaperFoldCorner size="md" variant="light" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sunset text-xs font-semibold tracking-[0.2em] mb-4 uppercase">
                The Challenge
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-tight">
                What they needed
              </h2>
              <div className="space-y-4">
                {project.challenge.split("\n\n").map((para, i) => (
                  <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-sea-green text-xs font-semibold tracking-[0.2em] mb-4 uppercase">
                Our Solution
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-tight">
                What we delivered
              </h2>
              <div className="space-y-4">
                {project.solution.split("\n\n").map((para, i) => (
                  <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-kraft text-xs font-semibold tracking-[0.2em] mb-4 uppercase">
              Services Provided
            </span>
            <div className="flex flex-wrap gap-4 mt-4">
              {project.servicesProvided.map((service) => (
                <span
                  key={service}
                  className="px-5 py-2.5 bg-white/[0.04] border border-white/10 text-white/80 text-sm font-medium"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 lg:p-16 overflow-hidden"
            style={{
              clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
            }}
          >
            <div className="absolute inset-0 bg-white/[0.03]" />
            <div className="absolute inset-0 border-2 border-white/[0.1]" />

            <div className="relative">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] mb-6 uppercase"
                style={{ color: project.accentColor }}
              >
                Key Results
              </span>
              <div className="space-y-5">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: project.accentColor }}
                    />
                    <span className="text-white/80 text-base md:text-lg leading-relaxed">
                      {result}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <PaperFoldCorner size="xl" variant="light" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              Want results like these?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8">
              Let&apos;s discuss how BrandQraft can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative inline-flex">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-sunset px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#c85a32] overflow-hidden"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                >
                  <span className="relative z-10">Start Your Project</span>
                </Link>
                <PaperFoldCorner size="sm" variant="brand" />
              </div>

              <Link
                href="/#work"
                className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
