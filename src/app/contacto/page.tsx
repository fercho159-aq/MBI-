import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function ContactoPage() {
    const contactImage = getPlaceholderImage('contacto-1');
  return (
    <div>
      <PageHeader
        title="Contáctenos"
        subtitle="Estamos aquí para ayudarle. Envíenos un mensaje y nos pondremos en contacto a la brevedad."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-headline font-bold mb-6 text-primary">
              Envíenos un Mensaje
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6 text-primary">
                Información de Contacto
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Oficina Central</h3>
                    <p>Av. Principal 123, Piso 5</p>
                    <p>Querétaro, Qro., 76000, México</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p>+52 442 267 4158</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                    <p>contacto@mbi-inversiones.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-headline font-bold mb-4 text-primary">Horario de Atención</h3>
              <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Sábado: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
