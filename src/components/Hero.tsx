// src/components/Hero.tsx
// Hero a 1 columna con imagen de fondo (next/image fill), sin degradado.
// La imagen lleva un leve blur + oscurecido para dar contraste al texto.

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo: imagen a pantalla completa del bloque */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/pexels-pixabay-356036.jpg" // ← usa la tuya si prefieres
          alt="" // decorativa (texto por encima)
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            blur-[1.5px]          /* difuminado sutil */
            brightness-90         /* baja un poco la luz */
            scale-[1.03]          /* micro-zoom para evitar bordes al blur */
          "
        />
        {/* Película/overlay para reforzar contraste del texto */}
        <div aria-hidden className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <div className="container relative mx-auto px-4 py-20 pb-32 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Energía renovable
            </p>

            <h1 className="mt-3 text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Impulsa tu negocio con energía limpia
            </h1>

            <p className="mt-5 max-w-prose text-lg text-white/90">
              Soluciones fotovoltaicas, eólicas y almacenamiento para reducir
              costes y huella de carbono.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded bg-green-600 px-5 py-3 text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Solicitar presupuesto
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded border border-white/30 bg-white/10 px-5 py-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Ver casos de éxito
              </Link>
            </div>

            {/* Badges de confianza */}
            <ul className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/90">
              <li className="rounded bg-white/15 px-3 py-1 backdrop-blur">
                +500 instalaciones
              </li>
              <li className="rounded bg-white/15 px-3 py-1 backdrop-blur">
                ISO 14001
              </li>
              <li className="rounded bg-white/15 px-3 py-1 backdrop-blur">
                Soporte 24/7
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
