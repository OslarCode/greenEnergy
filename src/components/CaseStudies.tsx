import Image from "next/image";
import Reveal from "@/components/Reveal";
import { cases } from "@/content/home";

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container">
        <Reveal>
          <header className="mb-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Casos de éxito</h2>
            <p className="mt-2 text-muted-foreground">
              Resultados medibles por sector.
            </p>
          </header>
        </Reveal>

        <Reveal>
          {/* auto-rows-fr + h-full para igualar alturas de las cards */}
          <ul className="grid auto-rows-fr gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <li
                key={c.company}
                className="card overflow-hidden h-full flex flex-col"
              >
                {/* Contenedor de imagen con altura fija */}
                <div className="relative h-48 md:h-56">
                  <Image
                    src={c.image}
                    alt={c.company}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Contenido */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold">{c.company}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.sector} · Ahorro {c.saving}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
