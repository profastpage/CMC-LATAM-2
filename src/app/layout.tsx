import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMC | Arquitectura y Construcción Costera en Perú",
  description:
    "Diseño arquitectónico y construcción de casas exclusivas en entornos costeros de Lima y todo el Perú. Construimos tu refugio cerca del mar.",
  keywords: [
    "CMC",
    "arquitectura Perú",
    "construcción casas playa",
    "casas Lima",
    "villas modernas",
    "arquitecto Perú",
    "diseño costero",
  ],
  authors: [{ name: "CMC Arquitectura" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "CMC | Arquitectura y Construcción Costera",
    description:
      "Construimos tu refugio cerca del mar. Diseño y construcción de casas exclusivas en entornos costeros del Perú.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
