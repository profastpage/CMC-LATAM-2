"use client";

import Navbar from "@/components/cmc/Navbar";
import Hero from "@/components/cmc/Hero";
import Projects from "@/components/cmc/Projects";
import Services from "@/components/cmc/Services";
import Info from "@/components/cmc/Info";
import Testimonials from "@/components/cmc/Testimonials";
import FAQ from "@/components/cmc/FAQ";
import Contact from "@/components/cmc/Contact";
import Footer from "@/components/cmc/Footer";
import WhatsAppWidget from "@/components/cmc/WhatsAppWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Services />
        <Info />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
