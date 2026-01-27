"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Always show splash on every page load
    setIsReady(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);

    // After splash completes, scroll to hash target if present
    const hash = window.location.hash;
    if (hash) {
      // Wait for the content fade-in animation to finish (0.5s + 0.2s delay)
      // before scrolling, so the layout is stable
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          const rect = target.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({ top: rect.top + scrollTop, behavior: "smooth" });
        }
      }, 800);
    }
  };

  // Prevent flash of content before we determine splash state
  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-nile-blue z-[9999]" />
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <motion.div
        initial={showSplash ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: showSplash ? 0.2 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
