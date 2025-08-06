// src/compponents/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear(); // Esto se evalúa en servidor.

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Green Energy</h2>
          <p className="mt-3 text-sm text-gray-400">
            Soluciones de energía renovable para un futuro más limpio.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium text-white">Empresa</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white">Recursos</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/sustainability" className="hover:underline">
                  Sostenibilidad
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h3 className="font-medium text-white">Boletín</h3>
          <p className="mt-3 text-sm text-gray-400">
            Noticias y casos de éxito (sin spam).
          </p>
          {/* Formulario estático: sin JS en cliente.
              Si más adelante necesitas validación interactiva, muévelo a un Client subcomponent. */}
          <form action="/api/newsletter" method="post" className="mt-4 flex">
            <input
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-l border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            />
            <button
              type="submit"
              className="rounded-r bg-green-600 px-4 text-sm font-medium text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {year} Green Energy. Todos los derechos reservados.
      </div>
    </footer>
  );
}
