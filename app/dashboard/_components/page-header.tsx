interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 mb-4 sm:mb-6">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
}
