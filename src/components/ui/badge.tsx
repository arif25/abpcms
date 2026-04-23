export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center border text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}