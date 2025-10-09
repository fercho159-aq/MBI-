import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Home as HomeIcon, Rss, Shovel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { featuredProperties, services } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function HomePage() {
  const heroImage = getPlaceholderImage("hero-1");

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
              Estructura Web: Su Socio en Bienes Raíces y Construcción
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Descubra oportunidades únicas en el sector habitacional, industrial y comercial. Construimos sus sueños.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/habitacional">
                Ver Propiedades <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="featured-properties" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              Propiedades Destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
           <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                Sobre Nosotros
              </h2>
              <p className="text-muted-foreground mb-6">
                Con años de experiencia en el mercado inmobiliario de Querétaro y más allá, Estructura Web se ha consolidado como un referente de confianza, innovación y excelencia. Nuestro equipo de profesionales está comprometido con encontrar la solución perfecta para cada cliente, ya sea un hogar para su familia, un espacio para su negocio o un proyecto de construcción desde cero.
              </p>
              <Button asChild variant="link" className="text-accent p-0 h-auto">
                <Link href="/nosotros">
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <Image 
                src={getPlaceholderImage('nosotros-1').imageUrl}
                alt={getPlaceholderImage('nosotros-1').description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint={getPlaceholderImage('nosotros-1').imageHint}
              />
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">¿Listo para encontrar su próximo espacio?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contáctenos hoy mismo para una asesoría personalizada. Nuestro equipo está listo para ayudarle.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contacto">
                Contáctenos
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
