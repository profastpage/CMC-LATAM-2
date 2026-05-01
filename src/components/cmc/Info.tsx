"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Sun, Waves, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const statsIcons = [Sun, Waves, TrendingUp, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const revealVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Info() {
  const { lang } = useAppStore();
  const t = translations.info;

  return (
    <section id="nosotros" className="py-20 sm:py-28 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-green border border-green/30 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.sectionTitle[lang]}
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-14 sm:mb-20"
        >
          {t.stats.map((stat, index) => {
            const Icon = statsIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-5 sm:p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green/20 transition-all duration-300"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-green mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green mb-1 sm:mb-2">
                  <AnimatedCounter target={stat.value} duration={2000} />
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  {stat.label[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Advantages Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {t.advantages.title[lang]}
          </h3>
        </motion.div>

        {/* Advantages - Mobile First Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {t.advantages.items.map((item, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5"
            >
              {/* Number */}
              <div className="w-12 h-12 flex items-center justify-center bg-green/20 rounded-xl flex-shrink-0">
                <span className="text-green font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold mb-2">
                  {item.title[lang]}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
