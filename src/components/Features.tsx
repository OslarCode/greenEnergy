// src/components/Features.tsx
import MotionCard from "@/components/MotionCard";
import Reveal from "@/components/Reveal";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  info?: string;
};

const features: Feature[] = [
  {
    title: "Monitoreo en tiempo real",
    description: "Supervisa producción y consumo desde un panel unificado.",
    icon: <span className="text-emerald-500">⚡</span>,
    image: "/images/pexels-tomfisk-13989282.jpg",
    info: "Foto de Tom Fisk: https://www.pexels.com/es-es/foto/hierba-cesped-horizonte-vista-superior-13989282/",
  },
  {
    title: "Optimización de costes",
    description: "Diseños a medida para maximizar ROI y amortización.",
    icon: <span className="text-amber-500">📈</span>,
    image: "/images/pexels-hoan-ng-c-510735-6961088.jpg",
    info: "Foto de Hoan Ngọc: https://www.pexels.com/es-es/foto/trabajando-tecnologia-moderno-innovacion-6961088/",
  },
  {
    title: "Instalación certificada",
    description: "Equipos homologados y técnicos acreditados.",
    icon: <span className="text-blue-500">✔️</span>,
    image: "/images/pexels-kindelmedia-7527908.jpg",
    info: "Foto de Kindel Media: https://www.pexels.com/es-es/foto/campo-solar-energia-limpia-paneles-solares-7527908/",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-20">
      {" "}
      <div className="container mx-auto px-4">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center mb-10">
            {" "}
            <h2 className="bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
              Beneficios clave
            </h2>
            <p className="mt-3 text-gray-600">
              Tecnología y experiencia para una transición energética sin
              fricciones.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <MotionCard
                key={f.title}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Imagen superior */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600 mb-4">{f.description}</p>
                  <button
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                    aria-label={`Más información sobre ${f.title}`}
                  >
                    Saber más →
                  </button>
                </div>
              </MotionCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
