"use client";

import { useLanguageStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Sun, Waves, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const statsIcons = [Sun, Waves, TrendingUp, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Info() {
  const { lang } = useLanguageStore();
  const t = translations.info;

  return (
    <section id="nosotros" className="py-20 sm:py-28 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24"
        >
          {t.stats.map((stat, index) => {
            const Icon = statsIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-green mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green mb-2">
                  {stat.value}
                </div>
                <p className="text-white/70 text-sm sm:text-base">
                  {stat.label[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-14 text-center">
            {t.advantages.title[lang]}
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.advantages.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green/20 rounded-xl mb-5">
                <span className="text-green font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">
                {item.title[lang]}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc[lang]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
