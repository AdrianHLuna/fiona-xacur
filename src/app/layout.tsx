import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.drafionaxacur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${doctor.title} ${doctor.name} | ${doctor.specialty} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  keywords: [`Especialista en ${doctor.specialty} en ${doctor.city}`, `Oftalmólogo Mérida`, `Cirugía LASIK Mérida`, `Cirugía de Cataratas Mérida`, `Córnea y Cirugía Refractiva`],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: siteUrl,
    siteName: `${doctor.title} ${doctor.name}`,
    images: [
      {
        url: "/images/logo-horizontal.png",
        width: 1048,
        height: 489,
        alt: `Logo ${doctor.title} ${doctor.name}`,
      },
    ],
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
