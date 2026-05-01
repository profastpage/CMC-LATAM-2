"use client";

import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { key: "proyectos" as const, href: "#proyectos" },
  { key: "servicios" as const, href: "#servicios" },
  { key: "nosotros" as const, href: "#nosotros" },
  { key: "testimonios" as const, href: "#testimonios" },
  { key: "faq" as const, href: "#faq" },
  { key: "contacto" as const, href: "#contacto" },
];

export default function Navbar() {
  const { lang, toggleLanguage, theme, toggleTheme } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations.nav;

  // Apply dark class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isTransparent = !scrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50"
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
            className="flex items-center gap-2.5"
          >
            {/* Logo Icon */}
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isTransparent
                  ? "bg-white/15 backdrop-blur-sm border border-white/20"
                  : "bg-green shadow-md shadow-green/20"
              }`}
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  d="M16 3L3 14h4v13h6v-8h6v8h6V14h4L16 3z"
                  fill="white"
                  className="group-hover:fill-green transition-colors"
                />
                <path
                  d="M16 3L3 14h4v13h6v-8h6v8h6V14h4L16 3z"
                  stroke={isTransparent ? "white" : "#4ca64c"}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="opacity-40"
                />
              </svg>
            </div>
            {/* Logo Text */}
            <span
              className={`text-2xl sm:text-[1.7rem] font-extrabold tracking-[0.15em] transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-foreground"
              }`}
            >
              CMC
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 rounded-lg ${
                  isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-green hover:bg-muted"
                }`}
              >
                {t[link.key][lang]}
              </button>
            ))}

            {/* Controls */}
            <div className="flex items-center gap-2 ml-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10 border border-white/15"
                    : "text-foreground/70 hover:text-amber-500 hover:bg-muted border border-border"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-bold tracking-wider rounded-xl border-2 transition-all duration-200 ${
                  isTransparent
                    ? "border-white/25 text-white/90 hover:bg-white hover:text-navy"
                    : "border-foreground/20 text-foreground/80 hover:bg-foreground hover:text-background"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white/80 hover:bg-white/10"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5" />
              ) : (
                <Moon className="w-4.5 h-4.5" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold rounded-full border transition-all duration-200 ${
                isTransparent
                  ? "border-white/25 text-white/90"
                  : "border-border text-foreground/80"
              }`}
            >
              <Globe className="w-3 h-3" />
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1 bg-card rounded-2xl shadow-xl border border-border mb-4">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-6 py-3 text-foreground font-medium text-sm tracking-wider uppercase hover:bg-muted hover:text-green transition-colors rounded-xl"
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
