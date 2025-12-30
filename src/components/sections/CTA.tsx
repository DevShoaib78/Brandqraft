"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative bg-kraft py-24 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-sunset/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-nile-blue/15 rounded-full blur-[120px]"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sea-green/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle texture overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="ctaNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ctaNoise)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <span className="inline-block text-nile-blue text-lg md:text-xl font-bold tracking-wide mb-4">
              Ready to Start?
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-nile-blue text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
              Let&apos;s Build Your <span className="text-sunset">Legacy</span>,
              <br />
              Together
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-nile-blue/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re launching a new venture or scaling an existing
              business, we&apos;re here to transform your innovative ideas into
              thriving brands.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="primary" size="lg" href="mailto:info@brandqraft.co">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="tel:+919536084444"
                className="border-nile-blue text-nile-blue hover:bg-nile-blue/10"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <motion.a
              href="mailto:info@brandqraft.co"
              className="inline-flex items-center gap-2 text-nile-blue/70 hover:text-nile-blue transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-base">info@brandqraft.co</span>
            </motion.a>
          </FadeInView>

          {/* Core belief */}
          <FadeInView delay={0.5}>
            <div className="mt-16 pt-10 border-t border-nile-blue/10">
              <p className="text-nile-blue/80 text-xl md:text-2xl italic leading-relaxed">
                &ldquo;Business success is a possibility for everyone.&rdquo;
              </p>
              <p className="text-nile-blue/60 text-sm mt-3">
                <span className="font-bold">Our core belief at BrandQraft</span>
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
