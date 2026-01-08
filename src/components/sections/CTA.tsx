"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";

const ctaDecorations = [
  // Left side - 2 icons (mobile-first positioning)
  { icon: "046-origami" as const, size: "sm" as const, position: { top: "15%", left: "2%" }, opacity: 1.0, rotate: -12, colorFilter: "black" as const },
  { icon: "047-origami" as const, size: "xs" as const, position: { bottom: "20%", left: "3%" }, opacity: 1.0, rotate: 15, colorFilter: "black" as const },

  // Right side - 2 icons (mobile-first positioning)
  { icon: "022-origami" as const, size: "xs" as const, position: { top: "12%", right: "2%" }, opacity: 1.0, rotate: 10, colorFilter: "black" as const },
  { icon: "033-origami" as const, size: "sm" as const, position: { bottom: "18%", right: "2%" }, opacity: 1.0, rotate: -8, colorFilter: "black" as const },
];

export function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image - Pure, no overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/endbg.png')" }}
      />

      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={ctaDecorations} />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <span className="inline-block text-nile-blue text-lg md:text-xl font-bold tracking-wide mb-4">
              Ready to Start?
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-nile-blue text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
              Let&apos;s Build Your <span style={{ color: '#C85A32' }}>Legacy</span>,
              <br />
              Together
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-nile-blue/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
              Whether you&apos;re launching a new venture or scaling an existing
              business, we&apos;re here to transform your innovative ideas into
              thriving brands.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="primary" size="lg" href="mailto:info@brandqraft.co" paperCut>
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline-dark"
                size="lg"
                href="tel:+919536084444"
                paperCut
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <motion.a
              href="mailto:info@brandqraft.co"
              className="inline-flex items-center gap-2 text-nile-blue hover:text-sunset transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg md:text-xl font-bold">info@brandqraft.co</span>
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
