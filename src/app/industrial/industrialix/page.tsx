import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, HardHat, CheckCircle, Shovel, Rows, ZapIcon } from "lucide-react";

export default function IndustrialixPage() {
  const videoPlaceholder = "/images/HIGH LIGTHS HOT/VIDEO SERENA  SAN MIGUEL DE ALLENDE DESARROLLO.mp4";
  const image1 = getPlaceholderImage("industrialix-1");
  const image2 = getPlaceholderImage("industrialix-2");
  const image3 = getPlaceholderImage("industrialix-3");

  const obraFeatures = [
    { text: "Caseta de acceso principal construida y en funcionamiento.", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Vialidades pavimentadas, señalizadas y con alumbrado público.", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Maquinaria activa en nivelación y creación de calles internas.", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Naves industriales en diversas fases de construcción.", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
  ];

  const forSale = [
      { name: "Terrenos (Land)", description: "Espacios listos para desarrollar proyectos a la medida.", icon: <Shovel className="w-8 h-8 text-accent" /> },
      { name: "Energía (Energy)", description: "Acceso a infraestructura energética de nueva generación.", icon: <ZapIcon className="w-8 h-8 text-accent" /> },
  ]

  return (
    <div>
      <PageHeader
        title="Industrialix"
        subtitle="The New Energy Cluster in Mexico"
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold text-primary">Un Nuevo Clúster Energético en México</h2>
                <p className="text-muted-foreground">
                    Industrialix se posiciona como un epicentro de innovación y desarrollo industrial en Querétaro. Este proyecto único no solo ofrece terrenos industriales de primer nivel, sino que integra una oferta de energía de vanguardia, creando un ecosistema autosuficiente y altamente competitivo para las empresas del futuro.
                </p>
                 <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    <span>Querétaro, México</span>
                 </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image 
                    src={image1.imageUrl}
                    alt={image1.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image1.imageHint}
                />
            </div>
        </div>

        <div className="py-24">
            <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Oportunidades de Inversión</h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {forSale.map(item => (
                    <Card key={item.name} className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                {item.icon}
                            </div>
                            <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>


        <div id="progress" className="py-12">
          <h2 className="text-3xl font-headline font-bold text-primary text-center mb-12">Avance de Obra (Junio 2025)</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
                 <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
                    <video
                        src={videoPlaceholder}
                        controls
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                     <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                        <Image src={image2.imageUrl} alt={image2.description} fill className="object-cover" data-ai-hint={image2.imageHint} />
                     </div>
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                        <Image src={image3.imageUrl} alt={image3.description} fill className="object-cover" data-ai-hint={image3.imageHint} />
                     </div>
                 </div>
            </div>
            <div className="md:col-span-2 bg-card p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-headline font-bold text-primary mb-6">Infraestructura en Desarrollo</h3>
                <ul className="space-y-4">
                    {obraFeatures.map(feature => (
                        <li key={feature.text} className="flex items-start gap-3">
                           <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                           <span className="text-muted-foreground">{feature.text}</span>
                        </li>
                    ))}
                </ul>
                <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contacto">
                        Solicitar más información <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}