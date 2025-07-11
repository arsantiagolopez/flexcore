// import React from "react";
// import { useLocation } from "react-router";
// import { useIsHydrated } from "~/hooks/use-is-hydrated";
// import { cn } from "~/lib/utils";

import { cn } from "~/lib/utils";

// declare global {
//   interface Window {
//     __initMTIntegrations?: () => void;
//     MTIntegrations?: {
//       render: () => void;
//       destroy?: () => void;
//     };
//   }
// }

// // Error Boundary Component
// class IframeErrorBoundary extends React.Component<
//   { children: React.ReactNode; className?: string },
//   { hasError: boolean }
// > {
//   constructor(props: { children: React.ReactNode; className?: string }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error: Error) {
//     console.error("Iframe error boundary caught:", error);
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     console.error("Iframe error details:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div
//           className={cn(
//             "min-h-[600px] w-full flex items-center justify-center",
//             this.props.className
//           )}
//         >
//           <div className="text-center">
//             <p className="text-gray-600 mb-4">Unable to load content</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Refresh Page
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// function MarianatekIntegrationInner({
//   type,
//   className,
// }: {
//   type: string;
//   className?: string;
// }) {
//   const isHydrated = useIsHydrated();
//   const location = useLocation();
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const cleanupTimeoutRef = React.useRef<NodeJS.Timeout>(null);
//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       typeof navigator !== "undefined" ? navigator.userAgent : ""
//     );

//   // Cleanup function
//   const cleanup = React.useCallback(() => {
//     try {
//       // Clear any pending timeouts
//       if (cleanupTimeoutRef.current) {
//         clearTimeout(cleanupTimeoutRef.current);
//       }

//       // Clean up current container
//       if (containerRef.current) {
//         containerRef.current.innerHTML = "";
//       }

//       // Try to destroy MT integrations if available
//       if (
//         window.MTIntegrations &&
//         typeof window.MTIntegrations.destroy === "function"
//       ) {
//         try {
//           window.MTIntegrations.destroy();
//         } catch (e) {
//           console.warn("Error destroying MT integrations:", e);
//         }
//       }

//       // Remove all other Mariana elements (aggressive cleanup for mobile)
//       if (isMobile) {
//         const allMarianaElements = document.querySelectorAll(
//           "[data-mariana-integrations]"
//         );
//         allMarianaElements.forEach((el) => {
//           if (el !== containerRef.current) {
//             (el as HTMLElement).innerHTML = "";
//           }
//         });
//       }
//     } catch (e) {
//       console.warn("Cleanup error:", e);
//     }
//   }, [isMobile]);

//   React.useEffect(() => {
//     if (!isHydrated || !containerRef.current) return;

//     // Add global error handlers
//     const handleError = (e: ErrorEvent) => {
//       console.error(
//         "Global error in Mariana integration:",
//         e.error,
//         e.filename,
//         e.lineno
//       );
//     };

//     const handleUnhandledRejection = (e: PromiseRejectionEvent) => {
//       console.error(
//         "Unhandled promise rejection in Mariana integration:",
//         e.reason
//       );
//     };

//     window.addEventListener("error", handleError);
//     window.addEventListener("unhandledrejection", handleUnhandledRejection);

//     const initializeIntegrations = () => {
//       try {
//         // Make sure the element exists in the DOM
//         if (!containerRef.current) {
//           console.warn("Container ref not available");
//           return;
//         }

//         // Clear only OTHER integration elements, not the current one
//         const existingElements = document.querySelectorAll(
//           `[data-mariana-integrations]:not([data-mariana-integrations="${type}"])`
//         );
//         existingElements.forEach((el) => {
//           el.innerHTML = "";
//         });

//         // Check if Mariana scripts are available
//         if (!window.__initMTIntegrations) {
//           console.warn("Mariana __initMTIntegrations not available");
//           return;
//         }

//         if (!window.MTIntegrations) {
//           console.warn("Mariana MTIntegrations not available");
//           return;
//         }

//         // Initialize the integrations with error handling
//         try {
//           window.__initMTIntegrations();

//           if (typeof window.MTIntegrations.render === "function") {
//             window.MTIntegrations.render();
//           } else {
//             console.warn("MTIntegrations.render is not a function");
//           }
//         } catch (integrationError) {
//           console.error(
//             "Error during Mariana integration initialization:",
//             integrationError
//           );
//           throw integrationError; // Re-throw to be caught by error boundary
//         }
//       } catch (error) {
//         console.error("Error in initializeIntegrations:", error);
//         // Don't throw here to prevent crashing the page
//       }
//     };

//     // Use longer delay for mobile devices
//     const initDelay = isMobile ? 200 : 50;
//     cleanupTimeoutRef.current = setTimeout(initializeIntegrations, initDelay);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("error", handleError);
//       window.removeEventListener(
//         "unhandledrejection",
//         handleUnhandledRejection
//       );
//       cleanup();
//     };
//   }, [isHydrated, location.pathname, type, cleanup, isMobile]);

//   // Additional cleanup on unmount
//   React.useEffect(() => {
//     return cleanup;
//   }, [cleanup]);

//   if (!isHydrated) {
//     return <div className={cn("min-h-[600px] w-full", className)} />;
//   }

//   return (
//     <div
//       ref={containerRef}
//       data-mariana-integrations={type}
//       className={cn("min-h-[600px] size-full", className)}
//       suppressHydrationWarning={true}
//     />
//   );
// }

// export function MarianatekIntegration({
//   type,
//   className,
// }: {
//   type: string;
//   className?: string;
// }) {
//   return (
//     <IframeErrorBoundary className={className}>
//       <MarianatekIntegrationInner type={type} className={className} />
//     </IframeErrorBoundary>
//   );
// }

export function MarianatekIntegration({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  // Temporarily disable to test
  return (
    <div
      className={cn(
        "min-h-[600px] w-full bg-gray-100 flex items-center justify-center",
        className
      )}
    >
      <p>Mariana integration temporarily disabled</p>
    </div>
  );
}
