const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted/60 ${className}`}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
