import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NosotrosPage() {
  const stats = [
    { value: "123", label: "Casas vendidas" },
    { value: "150+", label: "Terrenos en venta" },
    { value: "100%", label: "Efectividad" },
    { value: "+75", label: "Casas en venta" },
  ];

  return (
    <div>
      <PageHeader
        title="Sobre MBI Inversiones"
        subtitle="Expertos en ayudarte a comprar o rentar tu inmueble."
      />
      <div className="container py-16 md:py-24">
        {/* New Stats Section */}
        <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">
                Somos expertos en ayudarte a comprar o rentar tu inmueble
              </h2>
              <p className="text-muted-foreground mb-6">
                Nuestra trayectoria y las experiencias vividas nos han permitido alcanzar una posición competitiva en el sector, acumulando más éxitos que fracasos. Estamos listos para ser parte de tu nuevo comienzo y contribuir a uno de tus logros más significativos.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contacto">Contacta a un asesor inmobiliario</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background/50 p-6 rounded-lg"
                >
                  <p className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="py-16 md:py-24 grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Misión</h3>
                <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
                    Ser la empresa que invite e incentive a nuestros clientes a obtener y emprender con las mejores inversiones. Guiando profesionalmente a nuestros clientes a obtener el mejor beneficio.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-headline font-bold mb-4 text-primary">Visión</h3>
                <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
                    Ser líderes en el mercado de bienes raíces y negocios de inversión afines.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
