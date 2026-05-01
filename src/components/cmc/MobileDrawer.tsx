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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={onClose}
          />

          {/* Drawer - slides from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-[70] lg:hidden"
          >
            <div className="h-full bg-navy-dark flex flex-col">
              {/* Header - compact */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <CMCLogo variant="dark" size="sm" />
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links - compact single line */}
              <nav className="flex-1 py-4 px-3">
                <ul className="space-y-0.5">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04, duration: 0.25 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-3 py-2.5 text-white/70 hover:text-white font-medium text-[13px] tracking-wide uppercase rounded-lg hover:bg-white/8 transition-all duration-150 flex items-center justify-between"
                      >
                        <span>{t[link.key][lang]}</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-white/20">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom - compact */}
              <div className="px-4 pb-5 pt-3 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-white/60 hover:text-amber-400 text-xs font-medium transition-all"
                  >
                    {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    {theme === "dark"
                      ? (lang === "es" ? "Claro" : "Light")
                      : (lang === "es" ? "Oscuro" : "Dark")}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-white/60 hover:text-green text-xs font-bold transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {lang === "es" ? "EN" : "ES"}
                  </button>
                </div>
                <button
                  onClick={() => handleNavClick("#contacto")}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-green text-white font-bold text-xs rounded-lg hover:bg-green-light transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
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
