import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Building, DraftingCompass, HardHat, ShieldCheck } from "lucide-react";

export default function ConstruccionPage() {
  const constructionImage = getPlaceholderImage('construccion-2');
  const constructionServices = [
    {
      title: "Diseño y Planificación",
      description: "Colaboramos con arquitectos e ingenieros para crear proyectos funcionales y estéticos que cumplen con todas las normativas.",
      icon: DraftingCompass,
    },
    {
      title: "Construcción Residencial",
      description: "Construimos casas y desarrollos habitacionales con los más altos estándares de calidad y atención al detalle.",
      icon: HardHat,
    },
    {
      title: "Construcción Industrial y Comercial",
      description: "Desarrollamos naves industriales, locales comerciales y edificios corporativos adaptados a las necesidades de su negocio.",
      icon: Building,
    },
    {
      title: "Gestión de Proyectos",
      description: "Administramos su proyecto de construcción de principio a fin, garantizando tiempo, costo y calidad.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Servicios de Construcción"
        subtitle="Construimos más que edificios; construimos confianza, calidad y futuro. Proyectos llave en mano con garantía de satisfacción."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <div className="relative aspect-video">
             <Image
                src={constructionImage.imageUrl}
                alt={constructionImage.description}
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={constructionImage.imageHint}
              />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Calidad que se ve y se siente</h2>
            <p className="text-muted-foreground mb-4">
              En Estructura Web, nuestro departamento de construcción se enorgullece de su compromiso con la excelencia. Utilizamos materiales de primera, tecnología de vanguardia y mano de obra calificada para asegurar que cada proyecto no solo cumpla, sino que supere las expectativas de nuestros clientes.
            </p>
            <p className="text-muted-foreground">
              Desde la conceptualización hasta la entrega final, nuestro enfoque es riguroso y transparente. Creemos en la comunicación constante y en la adaptación a las necesidades del cliente para garantizar que el resultado final sea un reflejo fiel de su visión.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-headline font-bold text-center mb-12 text-primary">Nuestras Capacidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {constructionServices.map((service) => (
              <div key={service.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
