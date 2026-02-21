"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Detect if this is a full page load/reload vs. client-side navigation
    const navEntry = performance.getEntriesByType?.(
      "navigation"
    )?.[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === "reload";

    // Show splash on: first visit (no sessionStorage flag) OR hard page reload
    const splashShown = sessionStorage.getItem("splashShown");
    const shouldShow = isReload || !splashShown;

    if (shouldShow) {
      sessionStorage.setItem("splashShown", "true");
    }

    setShowSplash(shouldShow);
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
