"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if this is a page refresh or first visit in this session
    const hasVisited = sessionStorage.getItem("brandqraft-visited");

    if (hasVisited) {
      // Skip splash on subsequent navigations within session
      setShowSplash(false);
      setIsReady(true);
    } else {
      // Show splash on first visit
      setIsReady(true);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("brandqraft-visited", "true");
    setShowSplash(false);
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
