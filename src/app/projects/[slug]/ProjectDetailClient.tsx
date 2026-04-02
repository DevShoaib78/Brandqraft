"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import type {
  Project,
  ProjectChapter,
  ChapterLogo,
  BrandColor,
  BrandPillar,
  ChapterHighlight,
  ChapterStat,
} from "@/data/projects";
import { PaperFoldCorner } from "@/components/ui/PaperFoldCorner";
import { Footer } from "@/components/sections/Footer";

interface ProjectDetailClientProps {
  slug: string;
}

// ─── Sub-components for cinematic layout ────────────────────────────────────

function LogoSection({ logo, project }: { logo: ChapterLogo; project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20"
    >
      {/* Logo display — large, immersive */}
      <div className="relative aspect-[16/6] mb-12 overflow-hidden">
        <Image
          src={logo.src}
          alt={`${project.title} Logo`}
          fill
          className="relative z-10 object-contain"
          priority
          sizes="100vw"
        />
      </div>

      {/* Logo narrative */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {logo.narrative.map((para, i) => (
          <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

function BrandColorsSection({ colors }: { colors: BrandColor[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-8">
        Brand Colors
      </p>
      <div className="grid grid-cols-2 gap-6">
        {colors.map((color, i) => (
          <motion.div
            key={color.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <div
              className="w-12 h-12 flex-shrink-0"
              style={{
                backgroundColor: color.hex,
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                boxShadow: `0 4px 20px ${color.hex}40`,
              }}
            />
            <div>
              <p className="text-white text-sm font-medium">{color.name}</p>
              <p className="text-white/35 text-xs font-mono tracking-wider mt-0.5">{color.hex}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function BrandPillarsSection({ pillars, project }: { pillars: BrandPillar[]; project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-8">
        Brand Pillars
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative p-6 bg-white/[0.025] border border-white/[0.07] overflow-visible"
            style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
          >
            <PaperFoldCorner size="xs" variant="light" />
            <div
              className="w-1 h-8 mb-5"
              style={{ backgroundColor: project.accentColor }}
            />
            <h3 className="text-white font-semibold mb-2 text-base">{pillar.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HighlightsSection({ highlights, project }: { highlights: ChapterHighlight[]; project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative p-6 md:p-8 bg-white/[0.025] border border-white/[0.07] overflow-hidden"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
          >
            {/* Big number watermark in bg, right side */}
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[120px] md:text-[140px] font-bold leading-none select-none pointer-events-none text-white opacity-[0.045]"
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <PaperFoldCorner size="sm" variant="light" />
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 leading-snug">{h.title}</h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">{h.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function StatsSection({ stats, project }: { stats: ChapterStat[]; project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 md:p-8 bg-nile-blue"
          >
            <p className="text-base md:text-lg font-semibold mb-3 leading-snug" style={{ color: project.accentColor }}>
              {stat.value}
            </p>
            <p className="text-white/60 text-base leading-relaxed">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ImagesSection({ images, project }: { images: string[]; project: Project }) {
  const isSingle = images.length === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className={`grid gap-6 ${isSingle ? "grid-cols-1" : "md:grid-cols-2"}`}>
        {images.map((src, i) => (
          <div key={i} className="relative overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
            >
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`${project.title} — screenshot ${i + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <PaperFoldCorner size="md" variant="light" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ResultsSection({ results, project }: { results: string[]; project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-visible"
    >
      <div
        className="relative p-8 md:p-12 lg:p-16 overflow-hidden"
        style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 bg-white/[0.025]" />
        <div className="absolute inset-0 border border-white/[0.07]" />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}60, transparent)` }}
        />
        <div className="relative">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-10"
            style={{ color: project.accentColor }}
          >
            What We Achieved
          </p>
          <div className="space-y-6">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-5"
              >
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: project.accentColor }}
                />
                <span className="text-white/80 text-base md:text-lg leading-relaxed">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <PaperFoldCorner size="xl" variant="light" />
    </motion.div>
  );
}

function ChapterSection({
  chapter,
  project,
}: {
  chapter: ProjectChapter;
  project: Project;
  index: number;
}) {
  const isImpactChapter = chapter.number === "04" || !!chapter.isImpact;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-white/[0.05]">
      {/* Ambient glow */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: `${project.accentColor}08` }}
      />

      {/* Large background chapter number */}
      <div className="absolute right-0 top-0 text-[220px] md:text-[300px] font-bold leading-none select-none pointer-events-none opacity-[0.025] text-white tracking-tighter">
        {chapter.number}
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Chapter label row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <span
            className="text-base md:text-lg font-bold tracking-widest tabular-nums"
            style={{ color: project.chapterNumberColor ?? project.accentColor }}
          >
            {chapter.number}
          </span>
          <div className="w-10 h-px bg-white/20" />
          <span className="text-base md:text-lg text-white/80 tracking-widest uppercase font-semibold">{chapter.label}</span>
        </motion.div>

        {/* Chapter title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10 max-w-2xl"
        >
          {chapter.title}
        </motion.h2>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-2xl mb-16"
        >
          {chapter.narrative.map((para, i) => (
            <p key={i} className="text-white/70 text-base md:text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Sub-sections */}
        {chapter.logo && <LogoSection logo={chapter.logo} project={project} />}
        {chapter.brandColors && <BrandColorsSection colors={chapter.brandColors} />}
        {chapter.brandPillars && <BrandPillarsSection pillars={chapter.brandPillars} project={project} />}
        {chapter.images && chapter.images.length > 0 && (
          <ImagesSection images={chapter.images} project={project} />
        )}
        {chapter.highlights && <HighlightsSection highlights={chapter.highlights} project={project} />}
        {chapter.stats && <StatsSection stats={chapter.stats} project={project} />}
        {isImpactChapter && <ResultsSection results={project.results} project={project} />}
      </div>
    </section>
  );
}

function CTASection({ project }: { project: Project }) {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.05] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${project.accentColor}20 0%, transparent 60%)` }}
      />
      <div className="container relative mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Want results like these?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s discuss how brandqraft can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative inline-flex">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-sunset px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#c85a32]"
                style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
              >
                Start Your Project
              </Link>
              <PaperFoldCorner size="sm" variant="brand" />
            </div>
            <Link
              href="/#work"
              className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              View More Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Cinematic layout (projects with story) ──────────────────────────────────

function CinematicProjectPage({ project }: { project: Project }) {
  const { story } = project;
  if (!story) return null;

  return (
    <main className="min-h-screen bg-nile-blue">
      {/* ── HERO / INTRODUCTION ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 65% 40%, ${project.accentColor}22 0%, transparent 65%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container relative mx-auto px-6 lg:px-12">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-white/45 hover:text-white transition-colors duration-300 mb-14"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Projects</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
            {/* Left: Hook text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase block mb-5 text-sunset">
                {project.category}
              </span>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-5">
                {project.title}
              </h1>
              <p className="text-white/60 text-lg md:text-xl mb-12 tracking-wide">
                {story.tagline}
              </p>

              <div className="space-y-5 max-w-2xl">
                {story.hook.text.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-white text-lg md:text-xl leading-relaxed"
                        : "text-white/70 text-base md:text-lg leading-relaxed"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-white/60 border border-white/20 px-4 py-1.5 tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Project details card */}
            {story.hook.details && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative lg:mt-20 overflow-visible"
              >
                <div
                  className="relative p-8 bg-white/[0.025] border border-white/[0.07]"
                  style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{ background: `linear-gradient(90deg, ${project.accentColor}60, transparent)` }}
                  />
                  <div className="space-y-7">
                    {story.hook.details.map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-white/25 text-xs font-semibold tracking-[0.2em] uppercase mb-1.5">
                          {label}
                        </p>
                        <p className="text-white text-base font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <PaperFoldCorner size="md" variant="light" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ────────────────────────────────────────────────────── */}
      {story.chapters.map((chapter, idx) => (
        <ChapterSection key={chapter.number} chapter={chapter} project={project} index={idx} />
      ))}

      {/* ── CONCLUSION ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 relative overflow-hidden border-t border-white/[0.05]">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.accentColor}18 0%, transparent 55%)`,
          }}
        />
        <div className="container relative mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Decorative line */}
            <div
              className="w-12 h-px mx-auto mb-12"
              style={{ backgroundColor: project.accentColor }}
            />
            <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-12 italic">
              &ldquo;{story.conclusion.quote}&rdquo;
            </blockquote>
            <div className="space-y-4 max-w-2xl mx-auto">
              {story.conclusion.narrative.map((para, i) => (
                <p key={i} className="text-white/70 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}

// ─── Generic layout (projects without story) ─────────────────────────────────

function GenericProjectPage({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-nile-blue">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}33 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="container relative mx-auto px-6 lg:px-12">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest mb-4 uppercase"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.tags.map((tag) => (
              <span key={tag} className="text-sm text-white/60 border border-white/20 px-4 py-1.5">
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
                    <div className={`aspect-video ${src} relative`}>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sunset text-sm font-semibold tracking-widest mb-4 uppercase">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-sea-green text-sm font-semibold tracking-widest mb-4 uppercase">
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
            <span className="inline-block text-kraft text-sm font-semibold tracking-widest mb-4 uppercase">
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
          <ResultsSection results={project.results} project={project} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

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

  if (project.story) {
    return <CinematicProjectPage project={project} />;
  }

  return <GenericProjectPage project={project} />;
}
