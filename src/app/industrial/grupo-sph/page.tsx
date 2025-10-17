import { PageHeader } from "@/components/page-header";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Building,
  Calendar,
  Zap,
  HardHat,
  Scissors,
  CheckCircle,
  BarChart,
  DollarSign,
  Users,
  Utensils,
  Coffee,
  Store,
  Dumbbell,
  Landmark,
  Layers,
  Container,
  Ruler,
  FileText,
  Warehouse,
  Construction,
  DoorOpen,
  Power,
  Droplet,
  Globe,
  Sun,
  Football,
  Briefcase
} from "lucide-react";

export default function GrupoSPHPage() {
  const sphImage = getPlaceholderImage("sph-main");
  const norponienteImage = getPlaceholderImage("sph-norponiente");
  const acuparkImage = getPlaceholderImage("sph-acupark");
  const spartekImage = getPlaceholderImage("sph-spartek");

  const norponienteFeatures = [
      { label: "Techo", value: "Lámina KR18 y traslúcido", icon: <Warehouse className="w-5 h-5" /> },
      { label: "Pisos", value: "Concreto MR35 (~280 kg/cm²)", icon: <Layers className="w-5 h-5" /> },
      { label: "Altura Libre", value: "7m", icon: <Ruler className="w-5 h-5" /> },
      { label: "Acceso", value: "Cortina 4-4.5m, rampa, dock", icon: <DoorOpen className="w-5 h-5" /> },
      { label: "Energía", value: "Desde 5 KVA", icon: <Power className="w-5 h-5" /> },
      { label: "Muros Divisorios", value: "Removibles para expansión", icon: <Scissors className="w-5 h-5" /> },
      { label: "Extra", value: "Opción a panel solar", icon: <Sun className="w-5 h-5" /> },
  ];

  const norponienteAmenities = [
      { name: "Áreas verdes", icon: <Globe className="w-6 h-6" /> },
      { name: "Comedor", icon: <Utensils className="w-6 h-6" /> },
      { name: "Cafetería", icon: <Coffee className="w-6 h-6" /> },
      { name: "Tienda de conveniencia", icon: <Store className="w-6 h-6" /> },
      { name: "Gimnasio", icon: <Dumbbell className="w-6 h-6" /> },
      { name: "Cancha de fútbol", icon: <Football className="w-6 h-6" /> },
      { name: "Coworking", icon: <Briefcase className="w-6 h-6" /> },
  ];

  return (
    <div>
      <PageHeader
        title="Proyectos Industriales de Grupo SPH"
        subtitle="Bodegas industriales para venta o renta en puntos estratégicos de Querétaro."
      />
      <div className="container py-16 md:py-24 space-y-24">
        {/* SPH Norponiente */}
        <section id="norponiente" className="scroll-mt-20">
             <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[300px] md:min-h-0">
                         <Image
                            src={norponienteImage.imageUrl}
                            alt={norponienteImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={norponienteImage.imageHint}
                        />
                    </div>
                    <div className="p-8">
                        <Badge variant="secondary" className="mb-2">Proyecto Principal</Badge>
                        <h2 className="text-3xl font-headline font-bold text-primary mb-2">SPH Norponiente</h2>
                        <p className="text-muted-foreground mb-6">85 naves desde 250 m² y 28 lotes para industria ligera.</p>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Ubicación Estratégica</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <p>Querétaro: 20 min</p>
                                <p>Celaya: 40 min</p>
                                <p>Aeropuerto: 40 min</p>
                                <p>San Luis Potosí: 120 min</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Información Comercial</h4>
                            <p className="text-sm text-muted-foreground"><Calendar className="inline-block w-4 h-4 mr-2"/>Entrega a partir de Diciembre 2025.</p>
                            <p className="text-sm text-muted-foreground"><DollarSign className="inline-block w-4 h-4 mr-2"/>Financiamiento a 12 o 24 meses.</p>
                        </div>
                         <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contacto">Más Información <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
             </Card>
             <div className="mt-12">
                 <h3 className="text-2xl font-headline font-bold text-primary mb-6">Características y Amenidades de Norponiente</h3>
                 <div className="grid md:grid-cols-2 gap-12">
                     <div>
                         <h4 className="font-semibold mb-4">Especificaciones de Naves</h4>
                         <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            {norponienteFeatures.map(spec => (
                                <div key={spec.label} className="flex items-center gap-3 bg-card p-3 rounded-lg border">
                                    <div className="text-accent">{spec.icon}</div>
                                    <div>
                                        <p className="font-semibold">{spec.label}</p>
                                        <p className="text-muted-foreground">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                      <div>
                         <h4 className="font-semibold mb-4">Amenidades del Parque</h4>
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                            {norponienteAmenities.map(amenity => (
                                <div key={amenity.name} className="flex flex-col items-center p-3 bg-card rounded-lg border">
                                    <div className="text-accent">{amenity.icon}</div>
                                    <p className="text-xs mt-2 text-muted-foreground">{amenity.name}</p>
                                </div>
                            ))}
                        </div>
                     </div>
                 </div>
             </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Acupark */}
            <section id="acupark" className="scroll-mt-20">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <div className="relative aspect-[2/1] mb-4 rounded-lg overflow-hidden">
                            <Image src={acuparkImage.imageUrl} alt={acuparkImage.description} fill className="object-cover" data-ai-hint={acuparkImage.imageHint} />
                        </div>
                        <CardTitle className="font-headline text-2xl text-primary">Acupark (II y III)</CardTitle>
                        <CardDescription>Ubicado en el Parque Industrial Querétaro (PIQ).</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div className="bg-background p-4 rounded-lg border">
                            <h4 className="font-semibold text-accent mb-2">Nuevo: Pool de Inversión (Acupark III)</h4>
                            <p className="text-sm text-muted-foreground mb-2">Conviértete en socio de 54 naves industriales con una inversión desde <strong>$3 millones de pesos</strong>.</p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                                <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0"/>Proyecto bajo fideicomiso para certeza jurídica.</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 mt-0.5 text-green-500 flex-shrink-0"/>Rendimientos garantizados y pull de rentas permanentes.</li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardContent>
                         <Button asChild variant="outline" className="w-full">
                            <Link href="/contacto">Conocer Pool de Inversión</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Spartek */}
            <section id="spartek" className="scroll-mt-20">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                         <div className="relative aspect-[2/1] mb-4 rounded-lg overflow-hidden">
                            <Image src={spartekImage.imageUrl} alt={spartekImage.description} fill className="object-cover" data-ai-hint={spartekImage.imageHint} />
                        </div>
                        <CardTitle className="font-headline text-2xl text-primary">Spartek (I, II y III)</CardTitle>
                        <CardDescription>Naves industriales de alta demanda.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div>
                             <h4 className="font-semibold mb-3">Disponibilidad</h4>
                             <div className="space-y-3">
                                <div className="text-sm">
                                    <p className="font-medium">Spartek I y II</p>
                                    <p className="text-muted-foreground">95% vendido. <span className="font-semibold text-accent">¡Solo 6 naves disponibles!</span></p>
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium">Spartek III</p>
                                    <p className="text-muted-foreground">36.6% vendido. 19 naves disponibles.</p>
                                </div>
                                 <div className="text-sm">
                                    <p className="font-medium">Spartek I (Preventa)</p>
                                    <p className="text-muted-foreground">30 naves desde 450 m².</p>
                                </div>
                             </div>
                        </div>
                    </CardContent>
                     <CardContent>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contacto">Consultar Disponibilidad</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
        </div>

        {/* BTS */}
        <section id="bts" className="text-center bg-card p-8 rounded-lg border shadow-sm">
            <HardHat className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="text-2xl font-headline font-bold text-primary mb-2">Proyectos a la Medida (BTS - Build to Suit)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">Grupo SPH desarrolla proyectos a la medida de acuerdo con las especificaciones de la industria ligera. Creamos el espacio exacto que su operación necesita.</p>
            <Button asChild>
                <Link href="/contacto">Cotizar un Proyecto BTS</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
