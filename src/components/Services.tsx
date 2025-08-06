"use client";

// src/components/Services.tsx
// Diseño tipo "texto + bullets" a la izquierda y foto grande a la derecha.

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const bullets = [
  {
    title: "Mantenimiento preventivo",
    desc: "Planificación y seguimiento para maximizar rendimiento.",
  },
  {
    title: "Instalación de paneles solares",
    desc: "Ejecución certificada y puesta a punto con garantías.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* ==== Columna Izquierda: Texto + Bullets ==== */}
          <div className="order-2 flex flex-col justify-between md:order-1 md:h-[520px]">
            {/* Bloque superior: título + párrafo */}
            <Reveal>
              <header className="max-w-prose">
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Impulsamos tu transición energética
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Diseñamos, instalamos y operamos sistemas solares para
                  industria y terciario. Nuestro enfoque es simple:{" "}
                  <strong>medir</strong>, <strong>optimizar</strong> y
                  <strong> mantener</strong> para que la energía limpia sea un
                  activo rentable desde el día uno.
                </p>
              </header>
            </Reveal>

            {/* Bullets con icono + texto */}
            <Reveal>
              <ul className="mt-6 space-y-4">
                {bullets.map((b) => (
                  <motion.li
                    key={b.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      {/* Bullet/ícono en verde */}
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
                        {/* hoja simple en SVG */}
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                          fill="currentColor"
                        >
                          <path
                            d="M12 2c5.523 0 10 4.477 10 10 0 4.418-3.582 8-8 8H8a6 6 0 0 1-6-6V8c0-4.418 3.582-8 8-8h2z"
                            opacity=".08"
                          />
                          <path d="M5 14c5.5-1.5 9-5 11-10 1.5 5.5 0 10-4 12-2 .9-4 .9-7 0z" />
                        </svg>
                      </span>

                      <div>
                        <h3 className="text-base font-semibold">{b.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            {/* Bloque inferior: segundo párrafo + CTA */}
            <Reveal>
              <div className="mt-6 max-w-prose">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  ¿Quieres saber cuánto podrías ahorrar con solar? Te preparamos
                  un
                  <strong> estudio de viabilidad</strong> con simulación de
                  producción, ROI estimado y opciones de financiación.
                </p>

                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    SABER MAS
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ==== Columna Derecha: Imagen ==== */}
          <Reveal>
            {/* Igualamos la altura con la columna izquierda en md+ */}
            <div className="order-1 relative mx-auto w-full max-w-[720px] md:order-2 md:h-[520px]">
              <Image
                src="/images/pexels-cristian-rojas-8853502.jpg"
                alt="Equipo instalando paneles solares"
                fill
                sizes="(min-width: 1024px) 720px, (min-width: 768px) 520px, 100vw"
                className="rounded-xl object-cover"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
