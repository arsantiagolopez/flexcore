import React from "react";
import { useLocation } from "react-router";
import { useIsHydrated } from "~/hooks/use-is-hydrated";
import { cn } from "~/lib/utils";

declare global {
  interface Window {
    __initMTIntegrations?: () => void;
    __marianaScriptsLoaded?: boolean;
    __marianaReady?: boolean;
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
  const [isReady, setIsReady] = React.useState(false);

  console.log("🔄 MarianatekIntegration render:", {
    isHydrated,
    isReady,
    pathname: location.pathname,
    hasRef: !!containerRef.current,
  });

  React.useEffect(() => {
    console.log("🏗️ MarianatekIntegration effect running...", {
      isHydrated,
      hasRef: !!containerRef.current,
      marianaReady: !!window.__marianaReady,
      MTIntegrations: !!window.MTIntegrations,
    });

    if (!isHydrated) {
      console.log("⏳ Effect early return - not hydrated");
      return;
    }

    let attempts = 0;
    const maxAttempts = 50; // 5 seconds

    const checkAndInitialize = () => {
      attempts++;
      console.log(
        `🔍 Check attempt ${attempts}: scripts=${!!window.__marianaScriptsLoaded}, ready=${!!window.__marianaReady}, init=${!!window.__initMTIntegrations}, MTIntegrations=${!!window.MTIntegrations}`
      );

      // Check if Mariana is ready - either __marianaReady flag OR both functions are available
      if (
        (window.__marianaReady && window.MTIntegrations) ||
        (window.__initMTIntegrations && window.MTIntegrations)
      ) {
        try {
          console.log("🎯 Mariana is ready! Setting isReady to true");
          setIsReady(true);
        } catch (error) {
          console.error("❌ Error setting ready state:", error);
        }
        return;
      }

      // Keep trying if not ready yet
      if (attempts < maxAttempts) {
        setTimeout(checkAndInitialize, 100);
      } else {
        console.error(
          "❌ Mariana never became ready after",
          maxAttempts,
          "attempts"
        );
      }
    };

    // Start checking immediately and then with a small delay
    checkAndInitialize();
    setTimeout(checkAndInitialize, 500); // Extra check after 500ms

    return () => {
      console.log("🧹 Cleaning up MarianatekIntegration");
      setIsReady(false);
    };
  }, [isHydrated, location.pathname, type]);

  // Separate effect for actual initialization after component is ready
  React.useEffect(() => {
    if (!isReady || !containerRef.current) return;

    console.log("🎯 Initializing Mariana integration for:", type);

    try {
      // Clear other elements
      const existingElements = document.querySelectorAll(
        `[data-mariana-integrations]:not([data-mariana-integrations="${type}"])`
      );
      console.log("🧹 Clearing", existingElements.length, "existing elements");
      existingElements.forEach((el) => {
        el.innerHTML = "";
      });

      // Initialize and render
      window.__initMTIntegrations?.();
      window.MTIntegrations?.render();
      console.log("✅ Mariana integration initialized successfully");
    } catch (error) {
      console.error("❌ Mariana init failed:", error);
    }

    return () => {
      try {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      } catch (e) {
        // Silent cleanup
      }
    };
  }, [isReady, type]);

  console.log("🎨 Rendering state:", { isHydrated, isReady });

  if (!isHydrated || !isReady) {
    console.log("⏳ Showing loading state");
    return (
      <div
        className={cn(
          "min-h-[600px] w-full flex items-center justify-center",
          className
        )}
      >
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  console.log("✅ Rendering Mariana container");
  return (
    <div
      ref={containerRef}
      data-mariana-integrations={type}
      className={cn("min-h-[600px] size-full", className)}
      suppressHydrationWarning={true}
    />
  );
}
