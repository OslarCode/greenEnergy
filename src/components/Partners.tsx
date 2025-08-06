// src/components/Partners.tsx
import Image from "next/image";
import Reveal from "@/components/Reveal";

export type Partner = {
  name: string;
  logo: string;
  url?: string; // Opcional: enlace al sitio del partner
};

type PartnersProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  partners?: Partner[]; // Permite sobrescribir los partners por defecto
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  imageSize?: {
    width: number;
    height: number;
  };
};

const DEFAULT_PARTNERS: Partner[] = [
  { name: "Iberdrola", logo: "/logos/iberdrola-1.svg" },
  { name: "Maersk", logo: "/logos/maersk-group-logo.svg" },
  { name: "SolarSol", logo: "/logos/solar-solutions.svg" },
  { name: "Tesla", logo: "/logos/tesla-9-logo-svgrepo-com.svg" },
];

const DEFAULT_IMAGE_SIZE = { width: 140, height: 48 };

export default function Partners({
  title = "Partners",
  subtitle = "Colaboramos con líderes del sector para asegurar calidad y disponibilidad.",
  className = "",
  partners = DEFAULT_PARTNERS,
  columns = { base: 2, sm: 3, lg: 4 },
  imageSize = DEFAULT_IMAGE_SIZE,
}: PartnersProps) {
  // Genera las clases de grid responsivo basado en las columnas proporcionadas
  const gridClasses = [
    "grid",
    `grid-cols-${columns.base || 2}`,
    columns.sm && `sm:grid-cols-${columns.sm}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    columns.xl && `xl:grid-cols-${columns.xl}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Reveal>
      <section
        className={`mt-4 ${className}`}
        aria-labelledby="partners-heading"
      >
        <h2
          id="partners-heading"
          className="mb-2 text-center text-3xl font-bold"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mb-6 text-center text-muted-foreground">{subtitle}</p>
        )}

        <ul className={`mx-auto max-w-5xl ${gridClasses} gap-x-8 gap-y-10`}>
          {partners.map((partner) => (
            <li key={partner.name} className="flex items-center justify-center">
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                  aria-label={`Visitar sitio web de ${partner.name}`}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="grayscale opacity-70 transition-all hover:opacity-100 group-hover:opacity-100 group-focus:opacity-100"
                  />
                </a>
              ) : (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={imageSize.width}
                  height={imageSize.height}
                  className="grayscale opacity-70 transition-opacity hover:opacity-100"
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
