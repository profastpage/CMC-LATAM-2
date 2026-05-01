"use client";

import Navbar from "@/components/cmc/Navbar";
import Hero from "@/components/cmc/Hero";
import Projects from "@/components/cmc/Projects";
import Services from "@/components/cmc/Services";
import Info from "@/components/cmc/Info";
import Contact from "@/components/cmc/Contact";
import Footer from "@/components/cmc/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Services />
        <Info />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
