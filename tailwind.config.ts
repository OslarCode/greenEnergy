// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // Dark mode por clase → controlas el modo añadiendo `class="dark"` en <html>
  darkMode: ["class"],

  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],

  theme: {
    // Usaremos tokens en CSS variables y los mapeamos aquí
    extend: {
      // Colores semánticos: no pienses en “verde 500”, piensa en “brand”, “bg”, etc.
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
      },

      // Espaciados coherentes (opcional, Tailwind ya trae scale; aquí añadimos alias)
      spacing: {
        // alias legibles para secciones
        section: "5rem", // ~80px
        "section-sm": "3rem",
        "section-lg": "7rem",
      },

      // Tipografía: tamaños que usaremos mucho
      fontSize: {
        // nombres útiles para headings
        "display-1": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-2": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "title-1": ["2rem", { lineHeight: "1.2" }],
        "title-2": ["1.5rem", { lineHeight: "1.3" }],
      },

      // Radios y sombras suaves por defecto
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 6px 24px -6px rgba(0,0,0,0.12)",
      },

      // Contenedor centralizado cómodo
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },

  plugins: [
    // Tipografía opcional de Tailwind (mejora estilos de contenido largo)
    require("@tailwindcss/typography"),
    // Formularios (resetea estilos de inputs para consistencia)
    require("@tailwindcss/forms"),
  ],
};

export default config;
