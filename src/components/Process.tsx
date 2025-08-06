// src/components/Process.tsx
type Step = { year: string; title: string; desc: string };

const steps: Step[] = [
  { year: "1", title: "Auditoría", desc: "Datos de consumo y simulación." },
  { year: "2", title: "Diseño", desc: "Layout óptimo y cálculo de ROI." },
  { year: "3", title: "Permisos", desc: "Licencias y gestión de ayudas." },
  {
    year: "4",
    title: "Instalación",
    desc: "Ejecución certificada y puesta a punto.",
  },
  { year: "5", title: "O&M", desc: "Monitorización 24/7 y SLA." },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Proceso</h2>
          <p className="mt-3 text-muted-foreground">
            Así abordamos cada proyecto, paso a paso.
          </p>
        </header>

        {/* ===== Desktop / Tablet ===== */}
        <div className="relative hidden md:block">
          {/* Barra de progreso */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2.5 rounded-full bg-gradient-to-r from-yellow-300 via-emerald-500 to-emerald-700 z-0"
          />

          <div className="relative z-10 grid grid-cols-5 gap-4">
            {steps.map((s, i) => {
              const isEven = i % 2 === 1; // Determina si es par (2º y 4º)

              return (
                <div
                  key={s.year}
                  className="relative flex flex-col items-center"
                >
                  {/* Contenido del paso (arriba o abajo) */}
                  <div
                    className={`${
                      isEven ? "order-1 mb-16" : "order-4 mt-16"
                    } text-center max-w-[14rem] px-2`}
                  >
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-snug">
                      {s.desc}
                    </p>
                  </div>

                  {/* Elementos de conexión */}
                  <div
                    className={`flex flex-col items-center ${
                      isEven ? "order-4" : "order-1"
                    }`}
                  >
                    {isEven ? (
                      // Elementos para pasos pares (abajo)
                      <>
                        <span className="h-0 w-0 border-x-[10px] border-x-transparent border-t-[12px] border-t-emerald-500 mb-2" />
                        <span className="h-10 w-0.5 bg-emerald-300" />
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700 font-semibold shadow-md mt-2">
                          {s.year}
                        </span>
                      </>
                    ) : (
                      // Elementos para pasos impares (arriba)
                      <>
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700 font-semibold shadow-md mb-2">
                          {s.year}
                        </span>
                        <span className="h-10 w-0.5 bg-emerald-300" />
                        <span className="h-0 w-0 border-x-[10px] border-x-transparent border-b-[12px] border-b-emerald-500 mt-2" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Mobile: vertical simple ===== */}
        <div className="md:hidden">
          <ul className="space-y-8">
            {steps.map((s) => (
              <li key={s.year} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-700 font-semibold shadow-sm">
                  {s.year}
                </span>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-snug">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
