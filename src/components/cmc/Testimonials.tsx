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
    const cardWidth =
      scrollRef.current.querySelector<HTMLDivElement>("div")!.offsetWidth + 24;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonios" className="py-20 sm:py-28 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-green bg-green/10 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.sectionTitle[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        {/* Desktop: Scrollable Cards with arrows */}
        <div className="relative">
          {/* Nav arrows - hidden on mobile, shown on sm+ */}
          <div className="hidden sm:flex justify-end gap-2 mb-6">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                canScrollLeft
                  ? "border-border text-foreground hover:bg-green hover:text-white hover:border-green"
                  : "border-border/50 text-muted-foreground/40 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                canScrollRight
                  ? "border-border text-foreground hover:bg-green hover:text-white hover:border-green"
                  : "border-border/50 text-muted-foreground/40 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] snap-start flex-shrink-0"
              >
                <article className="h-full bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-green/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={testimonialImages[index]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Highlight Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wide text-white bg-green rounded-full shadow-lg shadow-green/30">
                        {item.highlight[lang]}
                      </span>
                    </div>

                    {/* Quote icon */}
                    <div className="absolute bottom-3 left-3">
                      <Quote className="w-7 h-7 text-green/80" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3 justify-center sm:justify-start">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4 flex-1 text-center sm:text-left">
                      &ldquo;{item.text[lang]}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green to-green-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-xs truncate">
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
