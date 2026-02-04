export default function PageSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
