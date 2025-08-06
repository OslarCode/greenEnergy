"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Lightbulb, Users, Globe, Zap, Leaf } from "lucide-react";

const timelineData = [
  {
    year: "2010",
    title: "Fundación",
    subtitle: "Nacimiento de una visión",
    description:
      "Un grupo de ingenieros y ambientalistas funda Green Energy con el objetivo de revolucionar el sector energético.",
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-amber-500",
    contentColor: "bg-white",
  },
  {
    year: "2012",
    title: "Primer proyecto",
    subtitle: "Instalación piloto",
    description:
      "Completamos nuestra primera instalación solar comercial de 100kW, demostrando la viabilidad de nuestro modelo.",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-yellow-500",
    contentColor: "bg-white",
  },
  {
    year: "2015",
    title: "Expansión nacional",
    subtitle: "Cobertura en toda España",
    description:
      "Establecimos oficinas en 5 comunidades autónomas y cuadruplicamos nuestro equipo técnico.",
    icon: <Globe className="h-5 w-5" />,
    color: "bg-blue-500",
    contentColor: "bg-white",
  },
  {
    year: "2018",
    title: "Reconocimiento internacional",
    subtitle: "Premio a la innovación",
    description:
      "Ganamos el Premio Europeo de Energía Sostenible por nuestro sistema de monitorización inteligente.",
    icon: <Leaf className="h-5 w-5" />,
    color: "bg-emerald-500",
    contentColor: "bg-white",
  },
  {
    year: "2021",
    title: "Tecnología propia",
    subtitle: "Desarrollo de I+D",
    description:
      "Lanzamos nuestra propia línea de inversores solares con un 98% de eficiencia energética.",
    icon: <Briefcase className="h-5 w-5" />,
    color: "bg-purple-500",
    contentColor: "bg-white",
  },
  {
    year: "2023",
    title: "Liderazgo del sector",
    subtitle: "Referencia en renovables",
    description:
      "Nos convertimos en la empresa de energía solar con mayor crecimiento en el sur de Europa.",
    icon: <Users className="h-5 w-5" />,
    color: "bg-red-500",
    contentColor: "bg-white",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Título*/}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Nuestra Historia: 13 años impulsando la revolución verde
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            El viaje de Green Energy hacia un futuro sostenible
          </p>
        </motion.h2>

        <div className="relative">
          {/* Línea vertical central - más gruesa y con z-index bajo */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 via-emerald-500/60 to-emerald-500/20 z-0" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-24 w-full ${index % 2 === 0 ? "pr-[50%] pl-12" : "pl-[50%] pr-12"}`}
            >
              {/* Icono POSICIONADO EXACTAMENTE ENCIMA DE LA LÍNEA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: "-50%", // Centrado exacto
                  y: "-50%", // Mitad superior
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`absolute top-0 left-1/2 h-10 w-10 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg z-20`}
                style={{
                  transform: "translate(-50%, -50%)", // Posicionamiento preciso
                  boxShadow: "0 0 0 4px white", // Borde blanco sin usar border
                }}
              >
                {item.icon}
              </motion.div>

              {/* Caja de texto - SEPARADA PERO NO SUPERPUESTA */}
              <motion.div
                style={{
                  y: index % 2 === 0 ? yLeft : yRight,
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`relative ${item.contentColor} rounded-xl p-6 shadow-md border border-gray-100 z-10 ${index % 2 === 0 ? "mr-6" : "ml-6"}`}
              >
                {/* Fecha */}
                <div className="absolute -top-7 left-0 text-sm font-medium text-gray-500">
                  {item.year}
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-emerald-600 mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
