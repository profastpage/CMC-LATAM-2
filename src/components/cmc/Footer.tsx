"use client";

import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const { lang } = useAppStore();
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-10 sm:mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-green/20">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M16 3L3 14h4v13h6v-8h6v8h6V14h4L16 3z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-[0.15em]">
                CMC
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              {t.tagline[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
              {t.navigation[lang]}
            </h4>
            <ul className="space-y-3">
              {[
                { label: translations.nav.proyectos[lang], href: "#proyectos" },
                { label: translations.nav.servicios[lang], href: "#servicios" },
                { label: translations.nav.testimonios[lang], href: "#testimonios" },
                { label: translations.nav.faq[lang], href: "#faq" },
                { label: translations.nav.contacto[lang], href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-green text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
              {t.followUs[lang]}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/40 hover:bg-green hover:border-green hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/30 text-sm">
            &copy; {currentYear} CMC Arquitectura. {t.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
}
