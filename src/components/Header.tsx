"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { PaperFoldCorner } from "./ui/PaperFoldCorner";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      >
        {/* Floating Navbar Container with paper-fold corner */}
        <div
          className={`relative mx-auto mt-4 max-w-6xl ${
            isScrolled
              ? "bg-nile-blue/95 backdrop-blur-xl shadow-2xl shadow-nile-blue/20"
              : "bg-transparent backdrop-blur-none shadow-none"
          }`}
          style={{
            borderRadius: "0px",
            padding: isScrolled ? "0.625rem 1rem" : "0.75rem 1rem",
            clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
            transition: "background-color 0.7s cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.7s cubic-bezier(0.22, 1, 0.36, 1), padding 0.5s ease-out",
          }}
        >
          {/* Enhanced Paper-fold effect for top-right corner */}
          <div
            className={`${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <PaperFoldCorner size="lg" variant="light" />
          </div>

          <nav className="flex items-center justify-between px-2 sm:px-4">
            {/* Logo with smooth transition */}
            <a href="#" className="relative flex items-center">
              <div className="relative h-14 w-44 sm:h-16 sm:w-48">
                {/* Black logo (shown initially) */}
                <Image
                  src="/logo black.png"
                  alt="BrandQraft"
                  fill
                  className={`object-contain object-left transition-opacity duration-500 ${
                    isScrolled ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />
                {/* White logo (shown on scroll) */}
                <Image
                  src="/logo white.png"
                  alt="BrandQraft"
                  fill
                  className={`object-contain object-left transition-opacity duration-500 ${
                    isScrolled ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                    isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-nile-blue/70 hover:text-nile-blue"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Premium CTA Button with paper-fold */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden px-6 py-2.5 text-base font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-sunset text-white hover:bg-[#c85a32]"
                    : "bg-nile-blue text-white hover:bg-nile-blue/90"
                }`}
                style={{
                  clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                }}
              >
                <PaperFoldCorner size="sm" variant="brand" />
                <span className="relative z-10">Craft a Project</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-nile-blue"
              }`}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-nile-blue lg:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex items-center justify-between mb-12">
                <a href="#" className="relative h-12 w-36">
                  <Image
                    src="/logo white.png"
                    alt="BrandQraft"
                    fill
                    className="object-contain object-left"
                  />
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="text-3xl font-semibold text-white hover:text-sunset transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      handleNavClick(e, "#contact");
                      setIsMobileMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative block w-full bg-sunset px-8 py-4 text-center text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#c85a32] overflow-hidden"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    }}
                  >
                    <PaperFoldCorner size="sm" variant="brand" />
                    <span className="relative z-10">Craft a Project</span>
                  </motion.a>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
