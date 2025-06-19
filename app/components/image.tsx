import { cn } from "~/lib/utils";

export function Image({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("size-full object-cover pointer-events-none", className)}
      {...(priority && { fetchPriority: "high" as const })}
    />
  );
}
