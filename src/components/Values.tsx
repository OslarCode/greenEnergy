"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const values = [
  {
    t: "Transparencia",
    d: "Proyecciones realistas, datos auditables",
    icon: "🔍",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    t: "Seguridad",
    d: "Instalación y normativas al día",
    icon: "🛡️",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    t: "Sostenibilidad",
    d: "Impacto medible en CO₂",
    icon: "🌱",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    t: "Soporte",
    d: "SLA y panel 24/7",
    icon: "📞",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

const ValueCard = ({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    whileHover={{
      y: -8,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 },
    }}
    className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
  >
    <div className="p-6 text-center">
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${value.bgColor} ${value.color} text-3xl mb-4`}
      >
        {value.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{value.t}</h3>
      <p className="mt-2 text-gray-600">{value.d}</p>
    </div>
  </motion.li>
);

export default function Values() {
  return (
    <section className="px-4 py-12 md:py-20 bg-gray-50">
      <div className="container px-4">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl text-black">
              Nuestros valores
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Principios que guían cada uno de nuestros proyectos
            </p>
          </header>
        </Reveal>

        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard key={value.t} value={value} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
