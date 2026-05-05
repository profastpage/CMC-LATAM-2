"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";
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
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/60 hover:border-green/30 hover:-translate-y-1"
            >
              {/* Image with name overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={projectImages[index]}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Project name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                    {project.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Card body - description + button */}
              <div className="p-5 sm:p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description[lang]}
                </p>
                <button
                  onClick={() => openWhatsApp(project.whatsappKey)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#20bd59] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  {lang === "es" ? "Me interesa" : "I'm interested"}
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
