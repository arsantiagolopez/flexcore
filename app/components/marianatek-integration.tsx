import React from "react";
import { useLocation } from "react-router";
import { useIsHydrated } from "~/hooks/use-is-hydrated";
import { useMarianaScript } from "~/hooks/use-mariana-script";
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
  const isScriptLoaded = useMarianaScript();
  const location = useLocation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isHydrated || !isScriptLoaded || !containerRef.current) return;

    const initializeIntegrations = () => {
      try {
        if (!containerRef.current) return;

        // Clear other elements
        const existingElements = document.querySelectorAll(
          `[data-mariana-integrations]:not([data-mariana-integrations="${type}"])`
        );
        existingElements.forEach((el) => {
          el.innerHTML = "";
        });

        // Initialize
        if (window.__initMTIntegrations && window.MTIntegrations?.render) {
          window.__initMTIntegrations();
          window.MTIntegrations.render();
        }
      } catch (error) {
        console.error("Mariana init failed:", error);
      }
    };

    const timeoutId = setTimeout(initializeIntegrations, 100);

    return () => {
      clearTimeout(timeoutId);
      try {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      } catch (e) {
        // Silent cleanup
      }
    };
  }, [isHydrated, isScriptLoaded, location.pathname, type]);

  if (!isHydrated || !isScriptLoaded) {
    return (
      <div
        className={cn(
          "min-h-[600px] w-full flex items-center justify-center",
          className
        )}
      >
        <div className="text-foreground/50">Loading...</div>
      </div>
    );
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
