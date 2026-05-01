"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { X, Globe, Sun, Moon, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CMCLogo from "./CMCLogo";
import { useEffect } from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { lang, toggleLanguage, theme, toggleTheme } = useAppStore();
  const t = translations.nav;

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLinks = [
    { key: "proyectos" as const, href: "#proyectos" },
    { key: "servicios" as const, href: "#servicios" },
    { key: "nosotros" as const, href: "#nosotros" },
    { key: "testimonios" as const, href: "#testimonios" },
    { key: "faq" as const, href: "#faq" },
    { key: "contacto" as const, href: "#contacto" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={onClose}
          />

          {/* Drawer - slides from right to left */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] z-[70] lg:hidden"
          >
            <div className="h-full bg-navy-dark flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <CMCLogo variant="dark" size="md" />
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 py-6 px-4">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.key}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.06, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-5 py-4 text-white/80 hover:text-white font-semibold text-[15px] tracking-wider uppercase rounded-xl hover:bg-white/8 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>{t[link.key][lang]}</span>
                        <span className="text-green/60 group-hover:text-green transition-colors">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Controls */}
              <div className="p-5 border-t border-white/10 space-y-4">
                {/* Controls row */}
                <div className="flex items-center gap-3">
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/70 hover:text-amber-400 hover:border-white/20 transition-all text-sm font-medium"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                    {theme === "dark"
                      ? (lang === "es" ? "Modo Claro" : "Light Mode")
                      : (lang === "es" ? "Modo Oscuro" : "Dark Mode")}
                  </button>

                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-white/70 hover:text-green hover:border-green/40 transition-all text-sm font-bold"
                  >
                    <Globe className="w-4 h-4" />
                    {lang === "es" ? "EN" : "ES"}
                  </button>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleNavClick("#contacto")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-green text-white font-bold text-sm rounded-xl hover:bg-green-light transition-all shadow-lg shadow-green/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  {lang === "es" ? "Agendar Consulta" : "Schedule Consultation"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
