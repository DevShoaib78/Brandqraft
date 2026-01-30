"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Solutions",
    content: "Working with brandqraft transformed our entire brand identity. They didn't just deliver a logo—they gave us a complete visual language that resonates with our audience. Our customer engagement increased by 150% within three months.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Founder, EcoGreen Innovations",
    content: "The team at brandqraft understood our vision from day one. Their strategic approach to digital marketing helped us scale from a local startup to a national brand. The ROI has been exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Director, FinanceFlow",
    content: "Exceptional attention to detail and creative excellence. Our new website not only looks stunning but converts at twice the rate of our old one. brandqraft truly delivers on their promises.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Owner, Artisan Coffee Co.",
    content: "From branding to marketing execution, brandqraft has been an invaluable partner in our growth journey. They take the time to understand your business and craft solutions that actually work.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Founder, Wellness Hub",
    content: "The professionalism and creativity of the brandqraft team is unmatched. They helped us position our brand in a crowded market and stand out with authentic, compelling messaging.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Kumar",
    role: "CEO, NextGen Learning",
    content: "brandqraft doesn't just execute—they think strategically. Their holistic approach to our business scaling needs helped us achieve growth targets we thought would take years. Highly recommended.",
    rating: 5,
  },
];

const testimonialsDecorations = [
  { icon: "014-bird" as const, size: "xs" as const, position: { top: "8%", left: "3%" }, mobilePosition: { top: "3%", left: "1%" }, opacity: 1.0, rotate: -8, colorFilter: "light" as const },
  { icon: "036-swan" as const, size: "sm" as const, position: { bottom: "10%", right: "5%" }, mobilePosition: { bottom: "5%", right: "2%" }, opacity: 1.0, rotate: 12, colorFilter: "light" as const },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="relative bg-nile-blue py-16 md:py-20 overflow-hidden">
      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={testimonialsDecorations} />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sea-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-sunset/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <FadeInView>
            <span className="inline-block text-sea-green text-sm font-semibold tracking-widest mb-4 uppercase">
              Client Stories
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Trusted by brands
              <br />
              <span className="text-sunset">across industries</span>
            </h2>
          </FadeInView>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="flex items-center gap-3 md:gap-8 lg:gap-12">
            {/* Left Arrow */}
            <button
              onClick={() => paginate(-1)}
              className="group flex-shrink-0 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-white/40 group-hover:text-sunset transition-colors duration-300" />
            </button>

            {/* Testimonial Card Container */}
            <div className="relative flex-1 min-h-[400px] md:min-h-[280px] flex items-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <div
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 overflow-visible"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <PaperFoldCorner size="md" variant="light" className="opacity-50" />

                    {/* Quote Icon */}
                    <Quote className="w-7 h-7 md:w-10 md:h-10 text-sunset/30 mb-2 md:mb-3" />

                    {/* Testimonial Content */}
                    <blockquote className="mb-3 md:mb-4">
                      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-white/10 pt-2.5 md:pt-3">
                      <p className="text-white text-sm md:text-base font-semibold mb-0.5">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-white/60 text-xs md:text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => paginate(1)}
              className="group flex-shrink-0 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-white/40 group-hover:text-sunset transition-colors duration-300" />
            </button>
          </div>

          {/* Dots Indicator - Now outside the carousel container */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-sunset w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
