
import Link from "next/link";
import { ArrowRight, Building, Rss, Shovel } from "lucide-react";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { featuredProperties, services } from "@/lib/data";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  const heroImage = getPlaceholderImage("hero-1");
  const promoImages = [
    getPlaceholderImage("promo-1"),
    getPlaceholderImage("promo-2"),
    getPlaceholderImage("promo-3"),
    getPlaceholderImage("promo-4"),
    getPlaceholderImage("promo-5"),
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/WZvpNotBNv8?autoplay=1&loop=1&mute=1&controls=0&playlist=WZvpNotBNv8&start=30"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              style={{
                width: '100vw',
                height: '100vh',
                transform: 'scale(1.5)',
              }}
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
           <img src="https://mbi-inversiones.com/wp-content/uploads/2025/09/c6e6a07d-efed-4c3f-8023-2a2cac5168e9_thumbnail.webp" alt="MBI Inversiones Logo" className="mx-auto" />
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Descubra oportunidades únicas en el sector habitacional, industrial y comercial. Construimos sus sueños.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              <Link href="/habitacional">
                Ver Propiedades <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="promotions" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
              Promociones
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {promoImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={1200}
                          height={675}
                          className="object-contain w-full h-auto"
                           data-ai-hint={image.imageHint}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        <section id="featured-properties" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">
              Propiedades Destacadas
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredProperties.map((property) => (
                  <CarouselItem key={property.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <PropertyCard property={property} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
           <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">
                Sobre Nosotros
              </h2>
              <p className="text-muted-foreground mb-6">
                Con años de experiencia en el mercado inmobiliario de Querétaro y más allá, MBI Inversiones se ha consolidado como un referente de confianza, innovación y excelencia. Nuestro equipo de profesionales está comprometido con encontrar la solución perfecta para cada cliente, ya sea un hogar para su familia, un espacio para su negocio o un proyecto de construcción desde cero.
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
                className="rounded-lg shadow-xl"
                data-ai-hint={getPlaceholderImage('nosotros-1').imageHint}
              />
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-primary">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
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
