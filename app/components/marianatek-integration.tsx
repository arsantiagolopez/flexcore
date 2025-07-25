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
    __mtIntegrationsInitialized?: Set<string>;
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
  const initTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isInitializedRef = React.useRef(false);

  React.useEffect(() => {
    if (!isHydrated || !containerRef.current) return;

    // Initialize tracking set if it doesn't exist
    if (!window.__mtIntegrationsInitialized) {
      window.__mtIntegrationsInitialized = new Set();
    }

    // Check if this specific type has already been initialized
    if (window.__mtIntegrationsInitialized.has(type)) {
      console.log(`Integration ${type} already initialized, skipping`);
      return;
    }

    const initializeIntegrations = () => {
      // Double-check the container still exists
      if (!containerRef.current || isInitializedRef.current) {
        return;
      }

      // Check if an element with this type already exists and has content
      const existingElement = document.querySelector(
        `[data-mariana-integrations="${type}"]`
      );
      if (existingElement && existingElement.innerHTML.trim() !== "") {
        console.log(`Integration ${type} already has content, skipping`);
        window.__mtIntegrationsInitialized?.add(type);
        isInitializedRef.current = true;
        return;
      }

      // Clear OTHER integration elements
      const otherElements = document.querySelectorAll(
        `[data-mariana-integrations]:not([data-mariana-integrations="${type}"])`
      );
      otherElements.forEach((el) => {
        const elType = el.getAttribute("data-mariana-integrations");
        if (elType && window.__mtIntegrationsInitialized) {
          window.__mtIntegrationsInitialized.delete(elType);
        }
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
          // Mark this type as initialized
          window.__mtIntegrationsInitialized?.add(type);
          isInitializedRef.current = true;
        }
      }
    };

    // Clear any existing timeout
    if (initTimeoutRef.current) {
      clearTimeout(initTimeoutRef.current);
    }

    // Use a timeout to ensure DOM is ready
    initTimeoutRef.current = setTimeout(initializeIntegrations, 50);

    // Cleanup function
    return () => {
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }

      // Remove this type from initialized set on unmount
      if (window.__mtIntegrationsInitialized) {
        window.__mtIntegrationsInitialized.delete(type);
      }

      // Reset the ref
      isInitializedRef.current = false;

      // Optional: Call destroy if available
      if (window.MTIntegrations?.destroy) {
        window.MTIntegrations.destroy();
      }
    };
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
