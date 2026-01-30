"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInView } from "../ui/FadeInView";
import { OrigamiDecorationGroup } from "../ui/OrigamiDecoration";
import { PaperFoldCorner } from "../ui/PaperFoldCorner";
import {
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerDecorations = [
  { icon: "042-origami" as const, size: "xs" as const, position: { top: "5%", right: "3%" }, mobilePosition: { top: "3%", right: "1%" }, opacity: 0.6, rotate: -15, colorFilter: "light" as const },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `*Name:* ${formData.name}
*Email:* ${formData.email}
*Company:* ${formData.company}
*Message:* ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (remove + and spaces)
    const phoneNumber = "919536084444";

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-nile-blue via-nile-blue to-[#021f29] overflow-hidden">
      {/* Origami Decorations */}
      <OrigamiDecorationGroup decorations={footerDecorations} />

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
          {/* Top Section - Logo & Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Left: Logo & Description */}
            <FadeInView direction="up">
              <div className="max-w-md">
                <Image
                  src="/logo white.png"
                  alt="BrandQraft"
                  width={180}
                  height={50}
                  className="h-10 w-auto mb-6"
                />
                <p className="text-white/60 leading-relaxed text-base mb-8">
                  Transforming innovative ideas into thriving brands. Your
                  strategic growth partner from ideation to sustainable success.
                </p>

                {/* Quick Links - Horizontal */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/50 hover:text-sunset text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 border border-white/10 hover:border-sunset/30 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Right: Contact Form */}
            <FadeInView direction="up" delay={0.1}>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">
                  Get in <span className="text-sunset">Touch</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-sunset/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-sunset/50 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-sunset/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-sunset/50 transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-sunset hover:bg-sunset/90 text-white font-semibold transition-all duration-300 overflow-hidden"
                    style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
                  >
                    <PaperFoldCorner size="sm" variant="brand" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </FadeInView>
          </div>

          {/* Modern Contact & Location Section */}
          <div className="border-t border-white/10 pt-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-12 md:px-8 lg:px-12">
                {/* Contact Details */}
                <FadeInView direction="up">
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6 font-semibold">
                      Connect With Us
                    </h4>
                  <div className="space-y-4">
                    <a
                      href="tel:+919536084444"
                      className="flex items-start gap-4 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="w-10 h-10 bg-white/5 group-hover:bg-sunset/10 border border-white/10 group-hover:border-sunset/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                        <Phone className="w-4 h-4 text-sunset" />
                      </span>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Call Us</p>
                        <p className="text-white">+91 95360 84444</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@brandqraft.co"
                      className="flex items-start gap-4 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="w-10 h-10 bg-white/5 group-hover:bg-sunset/10 border border-white/10 group-hover:border-sunset/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                        <Mail className="w-4 h-4 text-sunset" />
                      </span>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Email Us</p>
                        <p className="text-white">info@brandqraft.co</p>
                      </div>
                    </a>
                    </div>
                  </div>
                </FadeInView>

                {/* Location */}
                <FadeInView direction="up" delay={0.1}>
                  <div className="md:ml-auto md:pl-12 lg:pl-20 md:max-w-md">
                    <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6 font-semibold">
                      Visit Our Studio
                    </h4>
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-sunset" />
                      </span>
                      <div>
                        <p className="text-white/70 leading-relaxed">
                          Office No:228, 6-3-252/2,<br />
                          Opp Taj Deccan Workafella,<br />
                          Banjara Hills, Hyderabad,<br />
                          India - 500082
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <FadeInView>
              <p className="text-white/40 text-sm text-center md:text-left">
                &copy; {currentYear} brandqraft. Crafting brands that matter.
              </p>
            </FadeInView>

            {/* Back to top */}
            <FadeInView delay={0.1}>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 text-sm text-white/50 hover:text-sunset transition-colors duration-300"
              >
                <span>Back to top</span>
                <span className="w-8 h-8 bg-white/5 group-hover:bg-sunset/10 border border-white/10 group-hover:border-sunset/30 flex items-center justify-center transition-all duration-300">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </motion.button>
            </FadeInView>
          </div>
        </div>
      </div>
    </footer>
  );
}
