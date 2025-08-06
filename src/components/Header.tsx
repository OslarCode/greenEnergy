// src/components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Logo } from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al navegar
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Efecto de scroll para header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm",
        "supports-[backdrop-filter]:bg-white/70"
      )}
    >
      {/* Skip link para accesibilidad */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:rounded focus:z-50 focus:ring-2 focus:ring-green-600"
      >
        Saltar al contenido
      </a>

      <div className="container mx-auto px-4 sm:px-6">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Navegación principal"
        >
          {/* Logotipo / marca */}
          <Logo />

          {/* Menú desktop */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "hover:text-green-700 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:rounded",
                    "px-2 py-1",
                    pathname === link.href
                      ? "text-green-700 font-medium"
                      : "text-gray-800"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón móvil */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Menú móvil */}
      <div
        className={clsx(
          "md:hidden bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-64 py-4 shadow-lg" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block py-2 px-3 rounded hover:bg-green-50 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-green-600",
                    pathname === link.href
                      ? "text-green-700 font-medium"
                      : "text-gray-800"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
