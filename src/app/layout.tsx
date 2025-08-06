// src/app/layout.tsx
// - Server Component por defecto.
// - Integra tipografía con next/font.
// - GA con next/script y variable de entorno (solo si existe).
// - Listo para dark mode por clase (ver tailwind.config.ts -> darkMode: "class").
// - Incluye "skip link" (en Header) que apunta a <main id="main"> para accesibilidad.

import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css"; // cambiamos desde ./styles/globals.css a ./globals.css

// Cargamos la fuente (simple). Guardamos la clase en `inter.className`.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Energy — Energía renovable",
  description:
    "Soluciones fotovoltaicas, eólicas y de almacenamiento para empresas.",
  // Nota: puedes ampliar con openGraph/twitter más adelante.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // GA: lee el ID desde .env (NEXT_PUBLIC_GA_ID). Si no existe, no inyectamos scripts.
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    // Sugerencia: añade `suppressHydrationWarning` si más adelante gestionas la clase "dark" desde el cliente.
    <html lang="es" className={inter.className}>
      <head>
        {/* Google Analytics con next/script. Solo en producción si hay ID. */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className="bg-bg text-fg antialiased">
        {/* Header es Server Component; contiene el "skip link" que apunta a #main */}
        <Header />

        {/* id="main": destino del "skip link" para saltar navegación con teclado */}
        <main id="main" className="min-h-dvh">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
