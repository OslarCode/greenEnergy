"use client";

// Testimonials.tsx — limpio, sin MotionCard, con framer-motion bien usado.
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Reducimos un 38% el coste eléctrico en 12 meses. La monitorización es clave para ajustar consumos.",
    author: "Laura M.",
    role: "COO, InduTextil",
    avatar: "/images/avatars/Multiavatar-Orbital.png",
  },
  {
    quote:
      "Instalación impecable y soporte rápido. La amortización va según lo previsto.",
    author: "Carlos R.",
    role: "Director General, AgroSur",
    avatar: "/images/avatars/Multiavatar-Psycat.png",
  },
  {
    quote:
      "El equipo técnico nos ayudó con subvenciones y permisos, acelerando todo el proceso.",
    author: "Marta M.",
    role: "Facility Manager, LogiCenter",
    avatar: "/images/avatars/Multiavatar-Snooze 11.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container">
        <Reveal>
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl text-black font-bold text-transparent md:text-4xl lg:text-[2.5rem]">
              Clientes que confían en nosotros
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Historias reales de empresas que ya están generando su propia
              energía.
            </p>
          </header>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.author}
              className="card h-full p-6" // usa tu utilidad `card` si la tienes
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                delay: i * 0.06,
              }}
              whileHover={{ y: -4 }}
            >
              {/* Comillas decorativas */}
              <div className="mb-3 text-4xl text-emerald-500/20">"</div>

              {/* Texto del testimonio */}
              <blockquote className="flex-1 text-gray-700">
                <p className="text-base leading-relaxed">{t.quote}</p>
              </blockquote>

              {/* Autor */}
              <footer className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-emerald-100">
                    <Image
                      src={t.avatar}
                      alt={`Foto de ${t.author}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="h-12 w-12 rounded-full bg-emerald-100" />
                )}
                <div>
                  <span className="block font-medium text-gray-900">
                    {t.author}
                  </span>
                  {t.role && (
                    <span className="block text-sm text-emerald-600">
                      {t.role}
                    </span>
                  )}
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
