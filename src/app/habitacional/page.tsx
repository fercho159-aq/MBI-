import { PageHeader } from "@/components/page-header";
import { PropertyCard } from "@/components/property-card";
import { habitacionalProperties } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HabitacionalPage() {
  const terrenos = habitacionalProperties.filter(p => p.type === 'Terreno');
  const departamentos = habitacionalProperties.filter(p => p.type === 'Departamento');

  return (
    <div>
      <PageHeader
        title="Propiedades Habitacionales"
        subtitle="Encuentre el espacio ideal para construir su hogar o la inversión perfecta para su futuro."
      />
      <div className="container py-16 md:py-24">
        <Tabs defaultValue="terrenos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="terrenos">Terrenos para Casa</TabsTrigger>
            <TabsTrigger value="departamentos">Departamentos</TabsTrigger>
          </TabsList>
          <TabsContent value="terrenos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {terrenos.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="departamentos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departamentos.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
             {departamentos.length === 0 && (
                <p className="text-center text-muted-foreground col-span-3">No hay departamentos disponibles en este momento.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
