// Server Component: define el contenido y usa el Accordion (client).
import { Accordion } from "@/components/Accordion";
import Reveal from "@/components/Reveal";

const items = [
  {
    id: "instalacion",
    question: "¿Cuánto tarda la instalación?",
    answer:
      "Para pymes típicas, entre 2 y 6 semanas desde la firma: diseño, permisos y montaje en sitio.",
  },
  {
    id: "retorno",
    question: "¿Cuál es el retorno de inversión (ROI)?",
    answer:
      "Depende del perfil de consumo y tarifas, pero suele oscilar entre 3 y 6 años con autoconsumo.",
  },
  {
    id: "mantenimiento",
    question: "¿Necesita mantenimiento?",
    answer:
      "Mínimo. Limpiezas periódicas y revisión anual. Ofrecemos planes de monitoreo 24/7.",
  },
  {
    id: "subvenciones",
    question: "¿Tramitáis subvenciones y ayudas?",
    answer:
      "Sí. Te asesoramos y gestionamos convocatorias locales, autonómicas y estatales aplicables.",
  },
];

export default function FAQ() {
  return (
    <section className="px-4 py-12 pb-16 md:py-12 bg-white">
      <div className="container">
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Resolvemos las dudas más comunes sobre instalación, ROI y soporte.
            </p>
          </header>
        </Reveal>

        <div className="mt-10">
          <Accordion items={items} mode="single" />
        </div>
      </div>
    </section>
  );
}
