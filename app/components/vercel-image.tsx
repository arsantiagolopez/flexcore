import { cn } from "~/lib/utils";

export function VercelImage({
  src,
  alt,
  className = "",
  priority = false,
  quality = 100,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}) {
  // Check if we're in production (Vercel) or development (localhost)
  const isProduction = process.env.NODE_ENV === "production";

  // Use Vercel optimization in production, original image in development
  // Note: For Vercel optimization without explicit width, we'll use a large default
  const optimizedSrc = isProduction
    ? `/_vercel/image?url=${encodeURIComponent(src)}&w=1920&q=${quality}`
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("size-full object-cover pointer-events-none", className)}
      onError={() => console.error("Image failed to load:", src)}
      {...(priority && { fetchPriority: "high" as const })}
    />
  );
}
