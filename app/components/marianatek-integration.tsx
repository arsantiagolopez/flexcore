import React from "react";
import { useLocation } from "react-router";
import { useIsHydrated } from "~/hooks/use-is-hydrated";
import { cn } from "~/lib/utils";

declare global {
  interface Window {
    __initMTIntegrations?: () => void;
    MTIntegrations?: {
      render: () => void;
      destroy?: () => void;
    };
  }
}

export function MarianatekIntegration({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  const isHydrated = useIsHydrated();
  const location = useLocation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isHydrated || !containerRef.current) return;

    const initializeIntegrations = () => {
      // Make sure the element exists in the DOM
      if (!containerRef.current) {
        console.warn("Container ref not available");
        return;
      }

      // Clear only OTHER integration elements, not the current one
      const existingElements = document.querySelectorAll(
        `[data-mariana-integrations]:not([data-mariana-integrations="${type}"])`
      );
      existingElements.forEach((el) => {
        el.innerHTML = "";
      });

      // Initialize the integrations
      if (window.__initMTIntegrations) {
        window.__initMTIntegrations();

        if (
          window.MTIntegrations &&
          typeof window.MTIntegrations.render === "function"
        ) {
          window.MTIntegrations.render();
        }
      }
    };

    // Use a longer delay to ensure DOM is fully ready
    setTimeout(initializeIntegrations, 50);
  }, [isHydrated, location.pathname, type]);

  if (!isHydrated) {
    return <div className={cn("min-h-[600px] w-full", className)} />;
  }

  return (
    <div
      ref={containerRef}
      data-mariana-integrations={type}
      className={cn("min-h-[600px] size-full", className)}
      suppressHydrationWarning={true}
    />
  );
}
