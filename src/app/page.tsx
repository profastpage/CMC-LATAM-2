"use client";

import Navbar from "@/components/cmc/Navbar";
import Hero from "@/components/cmc/Hero";
import Projects from "@/components/cmc/Projects";
import Interiors from "@/components/cmc/Interiors";
import Services from "@/components/cmc/Services";
import Info from "@/components/cmc/Info";
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
        <Interiors />
        <Services />
        <Info />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
