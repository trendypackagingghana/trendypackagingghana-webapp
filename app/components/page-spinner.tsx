export default function PageSpinner() {
  return (
    <div className="flex items-center justify-center h-full min-h-[60vh] w-full">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
    </div>
  );
}
