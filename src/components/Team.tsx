"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Laura Méndez",
    role: "COO",
    photo: "/images/team/pexels-kampus-7893731.jpg",
    info: "Foto de Kampus Production: https://www.pexels.com/es-es/foto/retrato-sonriente-sonriendo-chaleco-7893731/",
    linkedin: "#",
    expertise: "Operaciones y Estrategia",
  },
  {
    name: "Carlos Ruiz",
    role: "CTO",
    photo: "/images/team/pexels-fauxels-3184611.jpg",
    info: "Foto de fauxels: https://www.pexels.com/es-es/foto/foto-de-hombre-con-anteojos-3184611/",
    linkedin: "#",
    expertise: "Tecnología e Innovación",
  },
  {
    name: "Ana Pérez",
    role: "Head of Projects",
    photo: "/images/team/pexels-divinetechygirl-1181424.jpg",
    info: "Foto de Christina Morillo: https://www.pexels.com/es-es/foto/mujer-sonriendo-y-sosteniendo-libro-verde-azulado-1181424/",
    linkedin: "#",
    expertise: "Gestión de Proyectos",
  },
];

export default function Team() {
  return (
    <section className="bg-white px-4 py-12 md:py-16 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl">
        <Reveal>
          <header className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-black">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Profesionales apasionados por la energía sostenible
            </p>
          </header>
        </Reveal>

        <div className="relative">
          {/* Efecto de fondo decorativo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-emerald-50 to-transparent rounded-full opacity-50" />
          </div>

          <ul className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.li
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl">
                  {/* Imagen con efecto hover */}
                  <div className="overflow-hidden h-80 relative">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Overlay de LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-emerald-600 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{member.expertise}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Sección adicional para destacar */}
        <Reveal>
          <div className="mt-20 text-center">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded shadow-lg hover:shadow-xl transition-all"
            >
              Conoce más sobre nosotros
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
