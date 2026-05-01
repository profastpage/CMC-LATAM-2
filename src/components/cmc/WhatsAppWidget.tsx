"use client";

import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { MessageCircle, X, ChevronUp, Home, Building2, Palmtree } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "51914462378";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const projectOptions = [
  { key: "playa" as const, icon: Palmtree },
  { key: "lima" as const, icon: Building2 },
  { key: "villa" as const, icon: Home },
  { key: "general" as const, icon: MessageCircle },
];

export default function WhatsAppWidget() {
  const { lang } = useAppStore();
  const t = translations.whatsapp;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close on scroll away
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.scrollY < 200) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const openWhatsApp = (projectKey: string) => {
    const message = encodeURIComponent(t.messages[projectKey as keyof typeof t.messages][lang]);
    window.open(`${WHATSAPP_BASE}${message}`, "_blank", "noopener");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Popup Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#0f1f2e] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden w-[280px] sm:w-[310px]"
              >
                {/* Header */}
                <div className="bg-[#25D366] px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">CMC Arquitectura</p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span className="text-white/80 text-xs">
                            {t.tooltip[lang]}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    {t.tooltipDesc[lang]}
                  </p>
                  <div className="space-y-2">
                    {projectOptions.map((project) => (
                      <button
                        key={project.key}
                        onClick={() => openWhatsApp(project.key)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-200">
                          <project.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                            {t.projectName[lang]}:{" "}
                            {t.projectLabels[project.key][lang]}
                          </p>
                          <p className="text-gray-400 dark:text-gray-500 text-[11px] mt-0.5 line-clamp-1">
                            {t.messages[project.key][lang].substring(0, 60)}...
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300 animate-whatsapp-pulse"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-7 h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="w-7 h-7 text-white" fill="white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Label */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2"
              >
                <span className="px-3 py-1.5 bg-card dark:bg-[#0f1f2e] border border-border rounded-full text-xs font-medium text-foreground shadow-md whitespace-nowrap">
                  {t.tooltip[lang]}
                </span>
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
