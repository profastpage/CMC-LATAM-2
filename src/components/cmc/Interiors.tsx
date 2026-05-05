"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Interiors() {
  const { lang } = useAppStore();
  const t = translations.interiors;

  return (
    <section id="interiores" className="py-20 sm:py-28 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-green bg-green/10 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.sectionTitle[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        {/* Interior cards - clean layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.items.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/60 hover:border-green/30 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-green transition-colors duration-300">
                  {item.title[lang]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
