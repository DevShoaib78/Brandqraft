"use client";

import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";

const ctaDecorations = [
  // Organic asymmetric positions - 4 icons
  { icon: "046-origami" as const, size: "sm" as const, position: { top: "6%", left: "3%" }, mobilePosition: { top: "2%", left: "1%" }, opacity: 1.0, rotate: -12, colorFilter: "black" as const },
  { icon: "047-origami" as const, size: "xs" as const, position: { bottom: "22%", left: "2%" }, mobilePosition: { bottom: "15%", left: "1%" }, opacity: 1.0, rotate: 15, colorFilter: "black" as const },
  { icon: "036-swan" as const, size: "xs" as const, position: { top: "18%", right: "3%" }, mobilePosition: { top: "8%", right: "2%" }, opacity: 1.0, rotate: 10, colorFilter: "black" as const },
  { icon: "033-origami" as const, size: "sm" as const, position: { bottom: "14%", right: "5%" }, mobilePosition: { bottom: "8%", right: "1%" }, opacity: 1.0, rotate: -8, colorFilter: "black" as const },
];

export function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/endbg.png')" }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-white/25" />

      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={ctaDecorations} />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <span className="inline-block text-nile-blue text-sm md:text-base font-bold tracking-widest mb-4 uppercase">
              Ready to Start?
            </span>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="text-nile-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Let&apos;s Build Your <span style={{ color: '#C85A32' }}>Legacy</span>,
              <br />
              Together
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-nile-blue/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
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
              <span className="text-base md:text-lg font-bold">info@brandqraft.co</span>
            </motion.a>
          </FadeInView>

          {/* Core belief */}
          <FadeInView delay={0.5}>
            <div className="mt-16 pt-10 border-t border-nile-blue/10">
              <p className="text-nile-blue/80 text-lg md:text-xl italic leading-relaxed">
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
