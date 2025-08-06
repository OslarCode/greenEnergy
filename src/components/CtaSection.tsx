// src/components/CtaSection.tsx
import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-green-700 py-16"
    >
      {/* Decoración sutil: no requiere JS */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff, transparent 40%)",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2
            id="cta-title"
            className="text-balance text-3xl font-bold md:text-4xl"
          >
            Ahorra energía desde el primer mes
          </h2>
          <p className="mt-3 text-white/90">
            Te acompañamos en todo el ciclo: diseño, instalación, legalización y
            mantenimiento.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded bg-white px-5 py-3 font-medium text-green-800 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Hablemos
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
