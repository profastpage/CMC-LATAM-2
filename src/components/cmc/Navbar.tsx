"use client";

import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Menu, Globe, Sun, Moon } from "lucide-react";
import CMCLogo from "./CMCLogo";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { key: "proyectos" as const, href: "#proyectos" },
  { key: "interiores" as const, href: "#interiores" },
  { key: "servicios" as const, href: "#servicios" },
  { key: "nosotros" as const, href: "#nosotros" },
  { key: "faq" as const, href: "#faq" },
  { key: "contacto" as const, href: "#contacto" },
];

export default function Navbar() {
  const { lang, toggleLanguage, theme, toggleTheme } = useAppStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations.nav;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
      {/* STICKY NAVBAR - always fixed at top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-md shadow-navy/5 border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact single-line nav - height 52px mobile, 56px desktop */}
          <div className="flex items-center justify-between h-[52px] sm:h-[56px]">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex-shrink-0"
            >
              <CMCLogo
                variant={isTransparent ? "transparent" : "solid"}
                size="sm"
              />
            </a>

            {/* Desktop Nav Links - compact */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 xl:px-3.5 py-1.5 text-[12px] font-semibold tracking-wider uppercase transition-all duration-200 rounded-lg hover:bg-foreground/5 ${
                    isTransparent
                      ? "text-white/75 hover:text-white hover:bg-white/10"
                      : "text-foreground/60 hover:text-green hover:bg-green/5"
                  }`}
                >
                  {t[link.key][lang]}
                </button>
              ))}

              <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-border/40">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isTransparent
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-foreground/50 hover:text-amber-500 hover:bg-muted"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold tracking-wider rounded-lg border transition-all duration-200 ${
                    isTransparent
                      ? "border-white/20 text-white/85 hover:bg-white hover:text-navy"
                      : "border-foreground/15 text-foreground/70 hover:bg-foreground hover:text-background"
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  {lang === "es" ? "EN" : "ES"}
                </button>
              </div>
            </div>

            {/* Mobile Controls - ultra compact */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-md transition-colors ${
                  isTransparent ? "text-white/70" : "text-foreground/50"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-0.5 px-2 py-1 text-[10px] font-bold rounded-full border transition-all ${
                  isTransparent ? "border-white/20 text-white/85" : "border-border text-foreground/60"
                }`}
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className={`p-1.5 rounded-md transition-colors ml-0.5 ${
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
