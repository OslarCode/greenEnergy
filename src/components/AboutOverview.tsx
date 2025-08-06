"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import NextImage from "next/image"; // Cambiado el nombre de importación

const approach = [
  {
    id: "diseno",
    title: "Diseño y viabilidad",
    description:
      "Auditamos consumos, simulamos producción y optimizamos el layout para maximizar el ROI.",
    icon: "📊",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  // ... resto de los items del approach
];

export default function AboutOverview() {
  const [activeTab, setActiveTab] = useState(approach[0].id);

  return (
    <section className="bg-gray-50 px-4 py-12 pb-16 md:py-12">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <Reveal>
          <header className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-black bg-clip-text">
              Sobre Green Energy
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Aceleramos la transición a energía limpia con soluciones de
              autoconsumo y almacenamiento para empresas.
            </p>
          </header>
        </Reveal>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          {/* Nuestra misión */}
          <Reveal>
            <div className="grid gap-12 md:grid-cols-2 mb-20">
              <div>
                <h2 className="mb-6 text-3xl font-semibold">Nuestra misión</h2>
                <p className="mb-4 text-lg text-gray-600">
                  Impulsar proyectos rentables y sostenibles que reduzcan costes
                  y huella de carbono, combinando ingeniería, datos y un
                  servicio integral.
                </p>
                <p className="text-lg text-gray-600">
                  Trabajamos en todo el ciclo: diseño, permisos, instalación y
                  mantenimiento, con un enfoque obsesivo por el rendimiento
                  real.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <NextImage
                  src="/images/pexels-cristian-rojas-8853525.jpg"
                  alt="Foto de Los Muertos Crew: https://www.pexels.com/es-es/foto/trabajando-sitio-obrero-mantenimiento-8853525/"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Resto del componente... */}
        </div>
      </div>
    </section>
  );
}
