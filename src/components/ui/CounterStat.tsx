"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface CounterStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

function SpinningDigit({ digit, delay }: { digit: string; delay: number }) {
  const [currentDigit, setCurrentDigit] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // Spin through numbers before landing on final digit
      const spinDuration = 800;
      const intervalTime = 50;
      const iterations = spinDuration / intervalTime;
      let count = 0;

      const spinInterval = setInterval(() => {
        count++;
        if (count < iterations) {
          setCurrentDigit(String(Math.floor(Math.random() * 10)));
        } else {
          setCurrentDigit(digit);
          setIsAnimating(false);
          clearInterval(spinInterval);
        }
      }, intervalTime);

      return () => clearInterval(spinInterval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [digit, delay]);

  return (
    <span className="inline-block relative overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentDigit + (isAnimating ? Math.random() : "final")}
          initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="inline-block"
        >
          {currentDigit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function CounterStat({
  end,
  suffix = "",
  prefix = "",
  label,
  delay = 0,
}: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  const digits = String(end).split("");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative text-center"
    >
      <div className="inline-flex items-baseline text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tabular-nums">
        {prefix && <span className="text-sunset" style={{ fontSize: "inherit", lineHeight: "inherit" }}>{prefix}</span>}
        {hasStarted ? (
          digits.map((digit, index) => (
            <SpinningDigit
              key={index}
              digit={digit}
              delay={delay + index * 0.1}
            />
          ))
        ) : (
          <span className="opacity-0">{end}</span>
        )}
        {suffix && <span className="text-sunset" style={{ fontSize: "inherit", lineHeight: "inherit" }}>{suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-white/50 font-medium uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}
