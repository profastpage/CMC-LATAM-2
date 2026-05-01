"use client";

import { useState, type FormEvent } from "react";
import { useLanguageStore } from "@/lib/language-store";
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
  const { lang } = useLanguageStore();
  const t = translations.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 lg:py-32 bg-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-green bg-green/10 rounded-full">
            {t.sectionTag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            {t.sectionTitle[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {t.sectionDesc[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-border/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    {t.form.name[lang]}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.namePlaceholder[lang]}
                    required
                    className="w-full px-4 py-3 bg-sand-light border border-border rounded-xl text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    {t.form.email[lang]}
                  </label>
                  <input
                    type="email"
                    placeholder={t.form.emailPlaceholder[lang]}
                    required
                    className="w-full px-4 py-3 bg-sand-light border border-border rounded-xl text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    {t.form.phone[lang]}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.form.phonePlaceholder[lang]}
                    className="w-full px-4 py-3 bg-sand-light border border-border rounded-xl text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm"
                  />
                </div>

                {/* Subject placeholder - empty for layout balance */}
                <div />
              </div>

              {/* Message */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-navy mb-2">
                  {t.form.message[lang]}
                </label>
                <textarea
                  rows={5}
                  placeholder={t.form.messagePlaceholder[lang]}
                  required
                  className="w-full px-4 py-3 bg-sand-light border border-border rounded-xl text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all duration-300 text-sm resize-none"
                />
              </div>

              {/* Success Message */}
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

              {/* Submit Button */}
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-green/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    {t.info.addressLabel[lang]}
                  </p>
                  <p className="text-navy font-medium text-sm leading-relaxed">
                    {t.info.address[lang]}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-green/10 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    {t.info.phoneLabel[lang]}
                  </p>
                  <p className="text-navy font-medium text-sm">
                    {t.info.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-green/10 rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    {t.info.emailLabel[lang]}
                  </p>
                  <p className="text-navy font-medium text-sm">
                    {t.info.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-green/10 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                    {t.info.hoursLabel[lang]}
                  </p>
                  <p className="text-navy font-medium text-sm">
                    {t.info.hours[lang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
