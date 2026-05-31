import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#29572D",
};

export const metadata: Metadata = {
  title: "Automatiza Ya | Automatización IA para empresas logísticas",
  description:
    "Ayudamos a empresas de logística, transporte y operadores logísticos a reducir su carga operativa con soluciones digitales personalizadas con IA. Sin software genérico.",
  keywords: ["automatización logística", "IA logística España", "digitalización operativa", "transporte automatizado", "software logístico personalizado"],
  authors: [{ name: "Automatiza Ya" }],
  creator: "Automatiza Ya",
  metadataBase: new URL("https://automatizaya-ia.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://automatizaya-ia.com",
    title: "Automatiza Ya | Automatización IA para empresas logísticas",
    description: "Ayudamos a empresas de logística, transporte y operadores logísticos a reducir su carga operativa con soluciones digitales personalizadas con IA. Sin software genérico.",
    siteName: "Automatiza Ya",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Automatiza Ya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatiza Ya | Automatización IA para empresas logísticas",
    description: "Ayudamos a empresas de logística, transporte y operadores logísticos a reducir su carga operativa con soluciones digitales personalizadas con IA. Sin software genérico.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/uncut-sans-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
