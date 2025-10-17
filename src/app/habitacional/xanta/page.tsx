import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Trees,
  FerrisWheel,
  Waves,
  Building,
  DollarSign,
  Gift,
  BadgePercent,
  Calendar,
  CreditCard,
  Crown
} from "lucide-react";

export default function XantaResidencialPage() {
  const mainImage = getPlaceholderImage("xanta-1");
  const galleryImages = [
    getPlaceholderImage("xanta-2"),
    getPlaceholderImage("xanta-3"),
    getPlaceholderImage("xanta-4"),
  ];

  const amenities = [
    { name: "Jardín Lineal", description: "Andadores para caminar y ejercitarse rodeados de naturaleza.", icon: <Trees className="w-8 h-8 text-accent" /> },
    { name: "Juegos Infantiles", description: "Áreas seguras y divertidas para los más pequeños.", icon: <FerrisWheel className="w-8 h-8 text-accent" /> },
    { name: "Lago Artificial", description: "Un espacio de serenidad para relajarse y compartir.", icon: <Waves className="w-8 h-8 text-accent" /> },
    { name: "Palapa para Eventos", description: "Equipada con baños y asador para tus reuniones.", icon: <Building className="w-8 h-8 text-accent" /> },
  ];

  const paymentPlans = [
      {
          title: "Pago de Contado",
          icon: <BadgePercent className="w-6 h-6 text-accent" />,
          benefits: ["Descuentos atractivos", "Mayor plusvalía", "Retorno de inversión acelerado"]
      },
      {
          title: "Crédito Directo",
          icon: <Calendar className="w-6 h-6 text-accent" />,
          benefits: ["Plazos de 6 a 60 meses", "Pagos mensuales cómodos", "Precios ajustados al plazo"]
      }
  ]

  return (
    <div>
      <PageHeader
        title="Xanta Residencial"
        subtitle="Un estilo de vida integral en la zona más exclusiva de Corregidora, Querétaro."
      />
      <div className="container py-16 md:py-24 space-y-24">
        
        {/* Main Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image 
                    src={mainImage.imageUrl}
                    alt={mainImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mainImage.imageHint}
                />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold text-primary">Exclusividad y Plusvalía en Querétaro</h2>
                <p className="text-muted-foreground">
                    Xanta Residencial se ubica en Corregidora, una de las zonas de mayor crecimiento y solicitud en Querétaro. Este desarrollo de 169 lotes exclusivos ofrece alta plusvalía, seguridad y una infraestructura moderna, todo pensado para tu bienestar.
                </p>
                 <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    <span>Corregidora, Querétaro (a 10 min de hospitales, bancos y supermercados)</span>
                 </div>
                  <div className="flex items-center text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 mr-2 text-accent" />
                    <span>Acceso controlado y seguridad</span>
                 </div>
            </div>
        </section>

        {/* Amenities Section */}
        <section>
            <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Amenidades Diseñadas para Ti</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {amenities.map(amenity => (
                    <Card key={amenity.name} className="text-center hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                {amenity.icon}
                            </div>
                            <CardTitle className="font-headline text-xl">{amenity.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{amenity.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        {/* Gallery */}
        <section>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {galleryImages.map(image => (
                    <div key={image.id} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                        <Image 
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
             </div>
        </section>

        {/* Commercial Section */}
        <section>
            <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="text-center">
                    <DollarSign className="mx-auto h-12 w-12 text-accent mb-4" />
                    <CardTitle className="font-headline text-3xl text-primary">Información Comercial Exclusiva</CardTitle>
                    <CardDescription>Asegura tu patrimonio con precios de lanzamiento y planes flexibles.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                        <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-headline font-semibold text-primary">Lotes Residenciales</h3>
                                <p className="text-muted-foreground mt-2 mb-4">Desde</p>
                                <p className="text-4xl font-bold font-headline text-accent mb-6">$597,000 MXN</p>
                            </div>
                            <Button asChild className="w-full mt-4">
                                <Link href="/contacto">Consultar Disponibilidad</Link>
                            </Button>
                        </div>
                        <div className="bg-card p-6 rounded-lg border shadow-sm text-center flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-headline font-semibold text-primary">Paquete Lote + Casa</h3>
                                <p className="text-muted-foreground mt-2 mb-4">Lote desde $726,000 MXN con casa a partir de</p>
                                <p className="text-4xl font-bold font-headline text-accent mb-2">$2.4 Millones MXN</p>
                            </div>
                            <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                                <Link href="/contacto">Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4"/></Link>
                            </Button>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                         {paymentPlans.map(plan => (
                             <div key={plan.title} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 mt-1">{plan.icon}</div>
                                <div>
                                    <h4 className="text-lg font-headline font-semibold">{plan.title}</h4>
                                    <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                                        {plan.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                                    </ul>
                                </div>
                             </div>
                         ))}
                    </div>

                    <div className="text-center space-y-4">
                      <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg max-w-4xl mx-auto">
                        <Crown className="mx-auto h-10 w-10 text-accent mb-3" />
                        <h4 className="text-xl font-headline font-bold text-primary">Beneficio para Fundadores</h4>
                        <p className="text-muted-foreground mt-2">
                            ¡Precios especiales de lanzamiento para los <strong>primeros 25 lotes</strong>!
                        </p>
                      </div>
                      <div className="bg-green-100/50 border border-green-300/50 p-6 rounded-lg max-w-4xl mx-auto">
                        <Gift className="mx-auto h-10 w-10 text-green-600 mb-3" />
                        <h4 className="text-xl font-headline font-bold text-primary">Regalo Especial</h4>
                        <p className="text-muted-foreground mt-2">
                           En la compra de tu lote, recibe de obsequio el <strong>Proyecto Ejecutivo</strong>, ¡valuado en $80,000 MXN!
                        </p>
                      </div>
                    </div>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  );
}
