"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";
import {
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Branding", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Business Scaling", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-nile-blue via-nile-blue to-[#021f29] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sunset/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sea-green/10 rounded-full blur-[100px]" />
      </div>

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="py-16 lg:py-20">
          {/* Top Section - Logo & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 pb-16 border-b border-white/10">
            <FadeInView direction="up">
              <div className="max-w-md">
                <Image
                  src="/logo white.png"
                  alt="BrandQraft"
                  width={180}
                  height={50}
                  className="h-10 w-auto mb-6"
                />
                <p className="text-white/60 leading-relaxed">
                  Transforming innovative ideas into thriving brands. Your
                  strategic growth partner from ideation to sustainable success.
                </p>
              </div>
            </FadeInView>

            <FadeInView direction="up" delay={0.1}>
              <a
                href="mailto:info@brandqraft.co"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-sunset hover:bg-sunset/90 text-white font-medium transition-all duration-300 overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                }}
              >
                <PaperFoldCorner size="sm" variant="brand" />
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Get in Touch</span>
              </a>
            </FadeInView>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
            {/* Services */}
            <div>
              <FadeInView>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                  Services
                </h4>
              </FadeInView>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <FadeInView key={link.label} delay={index * 0.05}>
                    <li>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-sunset transition-all duration-300 mr-0 group-hover:mr-2" />
                        {link.label}
                      </a>
                    </li>
                  </FadeInView>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <FadeInView>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                  Company
                </h4>
              </FadeInView>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <FadeInView key={link.label} delay={index * 0.05}>
                    <li>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-sunset transition-all duration-300 mr-0 group-hover:mr-2" />
                        {link.label}
                      </a>
                    </li>
                  </FadeInView>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <FadeInView>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                  Contact
                </h4>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="space-y-4">
                  <a
                    href="tel:+919536084444"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 bg-white/5 group-hover:bg-sunset/20 rounded-sm flex items-center justify-center transition-colors duration-300">
                      <Phone className="w-4 h-4 text-sunset" />
                    </span>
                    +91 95360 84444
                  </a>

                  <a
                    href="mailto:info@brandqraft.co"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 bg-white/5 group-hover:bg-sunset/20 rounded-sm flex items-center justify-center transition-colors duration-300">
                      <Mail className="w-4 h-4 text-sunset" />
                    </span>
                    info@brandqraft.co
                  </a>
                </div>
              </FadeInView>
            </div>

            {/* Location */}
            <div className="col-span-2 md:col-span-1">
              <FadeInView>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                  Location
                </h4>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-sunset" />
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Office No:228, 6-3-252/2,
                    <br />
                    Opp Taj Deccan Workafella,
                    <br />
                    Banjara Hills, Hyderabad,
                    <br />
                    India - 500082
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <FadeInView>
              <p className="text-white/40 text-sm">
                &copy; {currentYear} BrandQraft. Crafting brands that matter.
              </p>
            </FadeInView>

            {/* Social + Back to top */}
            <FadeInView delay={0.1}>
              <div className="flex items-center gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 rounded-sm transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-px h-5 bg-white/10" />

                {/* Back to top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-sunset transition-colors duration-300"
                >
                  <span>Back to top</span>
                  <span className="w-7 h-7 bg-white/5 group-hover:bg-sunset/20 rounded-sm flex items-center justify-center transition-colors duration-300">
                    <ArrowUp className="w-3.5 h-3.5" />
                  </span>
                </motion.button>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </footer>
  );
}
