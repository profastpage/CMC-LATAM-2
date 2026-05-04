"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "51914462378";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const projectImages = [
  "/images/project-balcones.jpg",
  "/images/project-waltako.jpg",
  "/images/project-terraza.jpg",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const { lang } = useAppStore();
  const t = translations.projects;

  const openWhatsApp = (projectKey: string) => {
    const msg = translations.whatsapp.messages[projectKey as keyof typeof translations.whatsapp.messages][lang];
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="proyectos" className="py-20 sm:py-28 lg:py-32 bg-background">
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

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openWhatsApp(project.whatsappKey)}
            >
              {/* Image - Full bleed */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={projectImages[index]}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text overlay - positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg mb-2">
                  {project.title[lang]}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {project.description[lang]}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#25D366] bg-[#25D366]/90 backdrop-blur-sm rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    {lang === "es" ? "Me interesa" : "I'm interested"}
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
