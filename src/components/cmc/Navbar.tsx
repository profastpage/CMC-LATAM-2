"use client";

import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Menu, Globe, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import CMCLogo from "./CMCLogo";
import MobileDrawer from "./MobileDrawer";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isTransparent = !scrolled;

  return (
    <>
      {/* ALWAYS FIXED AT TOP */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <CMCLogo
                variant={isTransparent ? "transparent" : "solid"}
                size="sm"
              />
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

              <div className="flex items-center gap-2 ml-3">
                <button
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    isTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10 border border-white/15"
                      : "text-foreground/70 hover:text-amber-500 hover:bg-muted border border-border"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
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

            {/* Mobile Controls - compact */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-lg transition-colors ${
                  isTransparent ? "text-white/80" : "text-foreground/70"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 px-2 py-1 text-[10px] font-bold rounded-full border transition-all ${
                  isTransparent ? "border-white/25 text-white/90" : "border-border text-foreground/80"
                }`}
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className={`p-1.5 rounded-lg transition-colors ${
                  isTransparent ? "text-white" : "text-foreground"
                }`}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
