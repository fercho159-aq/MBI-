import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function NosotrosPage() {
  const teamImage = getPlaceholderImage("nosotros-2");
  const values = [
    { name: "Confianza", description: "Construimos relaciones sólidas basadas en la transparencia y la honestidad." },
    { name: "Calidad", description: "Nos esforzamos por la excelencia en cada proyecto y propiedad que ofrecemos." },
    { name: "Innovación", description: "Adoptamos nuevas tecnologías y enfoques para superar las expectativas." },
    { name: "Compromiso", description: "Estamos dedicados a cumplir los objetivos de nuestros clientes como si fueran los nuestros." },
  ];

  return (
    <div>
      <PageHeader
        title="Sobre Estructura Web"
        subtitle="Conectando personas y oportunidades a través de soluciones inmobiliarias innovadoras y de confianza."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-4">
              Fundada en Querétaro, Estructura Web nació de la visión de un grupo de expertos apasionados por el sector inmobiliario y la construcción. Con más de una década de experiencia combinada, hemos participado en el desarrollo y comercialización de algunos de los proyectos más emblemáticos de la región.
            </p>
            <p className="text-muted-foreground">
              Nuestro crecimiento se basa en una comprensión profunda del mercado, una red de contactos sólida y, lo más importante, la satisfacción de nuestros clientes. Creemos que cada transacción es más que un negocio; es el comienzo de un nuevo capítulo en la vida de una persona o el siguiente paso en el crecimiento de una empresa.
            </p>
          </div>
          <div className="relative aspect-video">
             <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-cover"
                data-ai-hint={teamImage.imageHint}
              />
          </div>
        </div>

        <div className="py-16 md:py-24 grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Misión</h3>
                <p className="text-muted-foreground">
                    Ofrecer soluciones inmobiliarias integrales que generen valor y bienestar para nuestros clientes, inversionistas y la comunidad, a través de un servicio profesional, ético y personalizado.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Visión</h3>
                <p className="text-muted-foreground">
                    Ser la empresa líder y de mayor confianza en el sector inmobiliario y de construcción en la región del Bajío, reconocida por nuestra innovación, calidad y contribución al desarrollo sostenible.
                </p>
            </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-headline font-bold text-center mb-12 text-primary">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <h4 className="text-xl font-headline font-semibold mb-2">{value.name}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
