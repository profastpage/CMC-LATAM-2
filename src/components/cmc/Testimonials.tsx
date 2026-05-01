"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialImages = [
  "/images/testimonials/testimonial-1.jpg",
  "/images/testimonials/testimonial-2.jpg",
  "/images/testimonials/testimonial-3.jpg",
  "/images/testimonials/testimonial-4.jpg",
  "/images/testimonials/testimonial-5.jpg",
];

export default function Testimonials() {
  const { lang } = useAppStore();
  const t = translations.testimonials;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const totalCards = t.items.length;

  // Scroll to a specific card index
  const scrollToCard = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("[data-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  }, []);

  // Update active index based on scroll position
  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("[data-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, totalCards - 1)));
  }, [totalCards]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  // Touch / drag handlers for smooth swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeftRef.current = scrollRef.current!.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Snap to nearest card after drag
      const container = scrollRef.current;
      if (!container) return;
      const card = container.querySelector("[data-card]");
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 16;
      const nearestIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      scrollToCard(Math.max(0, Math.min(nearestIndex, totalCards - 1)));
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  return (
    <section id="testimonios" className="py-16 sm:py-24 lg:py-28 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 mb-3 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-green bg-green/10 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t.sectionTitle[lang]}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center px-2">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        {/* Instagram-style carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Desktop arrows */}
          <div className="hidden md:flex justify-end gap-2 mb-4">
            <button
              onClick={() => scrollToCard(activeIndex - 1)}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                activeIndex > 0
                  ? "border-foreground/20 text-foreground hover:bg-green hover:border-green hover:text-white"
                  : "border-border/30 text-muted-foreground/20 cursor-not-allowed"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => scrollToCard(activeIndex + 1)}
              disabled={activeIndex === totalCards - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                activeIndex < totalCards - 1
                  ? "border-foreground/20 text-foreground hover:bg-green hover:border-green hover:text-white"
                  : "border-border/30 text-muted-foreground/20 cursor-not-allowed"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Scrollable cards container */}
          <div
            ref={scrollRef}
            className="testimonial-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {t.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                data-card
                className="w-[88vw] sm:w-[70vw] md:w-[45vw] lg:w-[340px] xl:w-[380px] snap-center flex-shrink-0"
              >
                <article className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-green/30 shadow-sm hover:shadow-xl transition-all duration-400 h-full flex flex-col">
                  {/* Image - Square 1:1 */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={testimonialImages[index]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Highlight badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wide text-white bg-green/90 backdrop-blur-sm rounded-full shadow-lg">
                        {item.highlight[lang]}
                      </span>
                    </div>

                    {/* Quote icon */}
                    <div className="absolute bottom-3 left-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" />
                      </div>
                    </div>

                    {/* Author info overlay at bottom of image */}
                    <div className="absolute bottom-3 right-3">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full pl-1 pr-3 py-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green to-green-dark flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">
                          {item.name.charAt(0)}
                        </div>
                        <div className="hidden sm:block">
                          <p className="text-white font-semibold text-[11px] leading-tight">{item.name}</p>
                          <p className="text-white/60 text-[9px] leading-tight">{item.role[lang]}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-2.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground/75 text-[13px] sm:text-sm leading-relaxed mb-4 flex-1">
                      &ldquo;{item.text[lang]}&rdquo;
                    </p>

                    {/* Author - mobile version (visible on mobile) */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-border/50 sm:hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green to-green-dark flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-xs truncate">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-[10px] truncate">
                          {item.role[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Progress dots - Instagram style */}
          <div className="flex items-center justify-center gap-1.5 mt-6 sm:mt-8">
            {t.items.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className="transition-all duration-300 rounded-full"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    index === activeIndex
                      ? "bg-green w-8 sm:w-10"
                      : "bg-foreground/15 hover:bg-foreground/30 w-1.5"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
