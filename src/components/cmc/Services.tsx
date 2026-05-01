"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Ruler, HardHat, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ruler: Ruler,
  "hard-hat": HardHat,
  "clipboard-check": ClipboardCheck,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const { lang } = useAppStore();
  const t = translations.services;

  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 lg:py-32 bg-muted/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-green bg-green/10 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.sectionTitle[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Ruler;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/60 hover:border-green/30 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-green/10 rounded-2xl mb-6 group-hover:bg-green group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                  {service.title[lang]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
