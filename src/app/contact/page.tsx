// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold md:text-4xl">Contacto</h1>
          <p className="mt-2 text-muted-foreground">
            Estamos aquí para ayudarte. Escríbenos o visítanos.
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Columna izquierda: Formulario */}
          <div className="lg:order-1">
            <h2 className="mb-6 text-2xl font-semibold">Escríbenos</h2>
            <ContactForm />
          </div>

          {/* Columna derecha: Información y Mapa */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Información</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. de la Energía Solar, 42
                      <br />
                      28015 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      info@greenenergy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+34 910 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-medium">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa interactivo */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Ubicación</h2>
              <div className="aspect-video overflow-hidden rounded-lg border bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.430493595913!2d-3.703790424019787!3d40.4199969558289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e9a269e37%3A0x5a5aac4b2d1f3b0a!2sAv.%20de%20la%20Energ%C3%ADa%20Solar%2C%2042%2C%2028015%20Madrid!5e0!3m2!1ses!2ses!4v1712345678901!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[300px]"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://maps.google.com?q=Av.+de+la+Energía+Solar,+42,+28015+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-600"
                >
                  Ver en Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
