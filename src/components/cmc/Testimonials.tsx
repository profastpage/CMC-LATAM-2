"use client";

import { useRef, useState, useEffect } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth + 16;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonios" className="py-16 sm:py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
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

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Arrows - desktop only */}
          <div className="hidden sm:flex justify-end gap-2 mb-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                canScrollLeft
                  ? "border-border text-foreground hover:bg-green hover:text-white hover:border-green"
                  : "border-border/50 text-muted-foreground/30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                canScrollRight
                  ? "border-border text-foreground hover:bg-green hover:text-white hover:border-green"
                  : "border-border/50 text-muted-foreground/30 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                data-card
                className="w-[85vw] sm:w-[320px] lg:w-[380px] snap-start flex-shrink-0"
              >
                <article className="bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-green/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Image - Square on mobile, 16:10 on desktop */}
                  <div className="relative aspect-square sm:aspect-[16/10] overflow-hidden">
                    <img
                      src={testimonialImages[index]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="inline-block px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wide text-white bg-green rounded-full shadow-lg">
                        {item.highlight[lang]}
                      </span>
                    </div>

                    {/* Quote icon */}
                    <div className="absolute bottom-2.5 left-2.5">
                      <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-green/80" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>

                    {/* Text - clamped to 3 lines on mobile */}
                    <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none">
                      &ldquo;{item.text[lang]}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-border/60">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-green to-green-dark flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-xs sm:text-sm truncate">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-[10px] sm:text-xs truncate">
                          {item.role[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
