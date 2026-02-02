interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <article className="flex flex-col gap-5 p-8 rounded-xl border border-border bg-card shadow-sm">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
