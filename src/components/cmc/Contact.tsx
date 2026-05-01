"use client";

import { useState, type FormEvent } from "react";
import { useAppStore } from "@/lib/language-store";
import { translations } from "@/lib/i18n";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { lang } = useAppStore();
  const t = translations.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 lg:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-border/60"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.name[lang]}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.namePlaceholder[lang]}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.email[lang]}
                  </label>
                  <input
                    type="email"
                    placeholder={t.form.emailPlaceholder[lang]}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.phone[lang]}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.form.phonePlaceholder[lang]}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.form.message[lang]}
                </label>
                <textarea
                  rows={5}
                  placeholder={t.form.messagePlaceholder[lang]}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm resize-none"
                />
              </div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-green/10 text-green rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    {t.form.success[lang]}
                  </span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-green text-white font-semibold rounded-xl hover:bg-green-light transition-all duration-300 shadow-lg shadow-green/25 hover:shadow-green/40 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.form.sending[lang]}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.form.submit[lang]}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, label: t.info.addressLabel[lang], value: t.info.address[lang] },
                { icon: Phone, label: t.info.phoneLabel[lang], value: t.info.phone },
                { icon: Mail, label: t.info.emailLabel[lang], value: t.info.email },
                { icon: Clock, label: t.info.hoursLabel[lang], value: t.info.hours[lang] },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border/60 hover:border-green/20 transition-colors"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-green/10 rounded-xl flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
