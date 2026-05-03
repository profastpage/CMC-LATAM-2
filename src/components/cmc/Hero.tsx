"use client";

import { useState, useEffect, useCallback } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
];

export default function Hero() {
  const { lang, theme } = useAppStore();
  const t = translations.hero;
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToProjects = () => {
    const el = document.querySelector("#proyectos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-slider every 4 seconds
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt={`Coastal architecture ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        {theme === "dark" ? (
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark/90" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/50 to-navy-dark/80" />
        )}
      </div>

      {/* Slider progress indicators */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-10 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Progress bar animation */}
            {index === currentIndex && (
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-green rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                style={{ width: "24px" }}
              />
            )}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-green scale-125 shadow-lg shadow-green/50"
                  : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-green border border-green/30 rounded-full bg-green/10 backdrop-blur-sm">
              {t.badge[lang]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8"
          >
            {t.title[lang]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-12 max-w-2xl"
          >
            {t.subtitle[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green text-white font-semibold text-base sm:text-lg rounded-xl hover:bg-green-light transition-all duration-300 shadow-lg shadow-green/25 hover:shadow-green/40 hover:-translate-y-0.5"
            >
              {t.cta[lang]}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          {t.scrollHint[lang]}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
