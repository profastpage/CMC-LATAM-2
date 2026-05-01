"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Sun, Waves, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const statsIcons = [Sun, Waves, TrendingUp, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-16 sm:mb-24"
        >
          {t.stats.map((stat, index) => {
            const Icon = statsIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-green/20 transition-all duration-300"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green mx-auto mb-3" />
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-green mb-2">
                  <AnimatedCounter target={stat.value} duration={2200} />
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  {stat.label[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
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
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc[lang]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
