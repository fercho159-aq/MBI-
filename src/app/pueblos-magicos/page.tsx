import { PageHeader } from "@/components/page-header";
import { PropertyCard } from "@/components/property-card";
import { pueblosMagicosProperties } from "@/lib/data";

export default function PueblosMagicosPage() {
  return (
    <div>
      <PageHeader
        title="Pueblos Mágicos y Turismo"
        subtitle="Invierta o viva en los destinos más encantadores de México. Propiedades con un potencial turístico único."
      />
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pueblosMagicosProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
         {pueblosMagicosProperties.length === 0 && (
            <p className="text-center text-muted-foreground">No hay propiedades disponibles en Pueblos Mágicos en este momento.</p>
        )}
      </div>
    </div>
  );
}
