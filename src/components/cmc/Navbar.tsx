"use client";

import { useState, useEffect } from "react";
import { useLanguageStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { key: "proyectos" as const, href: "#proyectos" },
  { key: "servicios" as const, href: "#servicios" },
  { key: "nosotros" as const, href: "#nosotros" },
  { key: "contacto" as const, href: "#contacto" },
];

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-2xl sm:text-3xl font-bold tracking-wider transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            CMC
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 rounded-lg hover:bg-white/10 ${
                  scrolled
                    ? "text-navy hover:text-green hover:bg-sand"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t[link.key][lang]}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`ml-4 flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 ${
                scrolled
                  ? "border-navy text-navy hover:bg-navy hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-navy"
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border-2 transition-all duration-300 ${
                scrolled
                  ? "border-navy text-navy hover:bg-navy hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-navy"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-navy hover:bg-sand"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-white rounded-2xl shadow-xl mb-4">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-6 py-3 text-navy font-medium tracking-wide uppercase hover:bg-sand hover:text-green transition-colors rounded-xl"
                  >
                    {t[link.key][lang]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
