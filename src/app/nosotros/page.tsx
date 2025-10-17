import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function NosotrosPage() {
  const teamImage = getPlaceholderImage("nosotros-2");
  
  return (
    <div>
      <PageHeader
        title="Sobre MBI Inversiones"
        subtitle="Expertos en ayudarte a comprar o rentar tu inmueble."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Somos expertos en ayudarte</h2>
            <p className="text-muted-foreground mb-4">
              Nuestra trayectoria y las experiencias vividas nos han permitido alcanzar una posición competitiva en el sector, acumulando más éxitos que fracasos. 
            </p>
            <p className="text-muted-foreground">
              Estamos listos para ser parte de tu nuevo comienzo y contribuir a uno de tus logros más significativos.
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
                    Ser la empresa que invite e incentive a nuestros clientes a obtener y emprender con las mejores inversiones. Guiando profesionalmente a nuestros clientes a obtener el mejor beneficio.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Visión</h3>
                <p className="text-muted-foreground">
                    Ser líderes en el mercado de bienes raíces y negocios de inversión afines.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
