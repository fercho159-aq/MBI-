interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-12 md:py-16 bg-card border-b">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
