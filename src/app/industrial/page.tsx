import { PageHeader } from "@/components/page-header";
import { PropertyCard } from "@/components/property-card";
import { industrialProperties } from "@/lib/data";

export default function IndustrialPage() {
  return (
    <div>
      <PageHeader
        title="Parques y Naves Industriales"
        subtitle="Soluciones estratégicas para el crecimiento de su empresa en los corredores industriales más importantes."
      />
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrialProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {industrialProperties.length === 0 && (
            <p className="text-center text-muted-foreground">No hay propiedades industriales disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}
