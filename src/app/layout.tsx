import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialty} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  keywords: [`Especialista en ${doctor.specialty} en ${doctor.city}`, `Oftalmólogo Mérida`, `Cirugía LASIK Mérida`, `Cirugía de Cataratas Mérida`, `Córnea y Cirugía Refractiva`],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: "http://localhost:3000",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
