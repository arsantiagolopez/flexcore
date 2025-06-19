import React from "react";
import { NavLink, useLocation } from "react-router";
import { useIsHydrated } from "~/hooks/use-is-hydrated";
import { useScrollThreshold } from "~/hooks/use-scroll-threshold";
import { cn } from "~/lib/utils";
import { Image } from "../image";
import { ADDRESS, EMAIL_ADDRESS } from "~/lib/utils/constants";

const routes = [
  {
    id: "home",
    to: "/",
    label: "Home",
    defaultColor: "white" as const,
    enableScrollEffect: true,
  },
  {
    id: "pricing",
    to: "/pricing",
    label: "Pricing",
    defaultColor: "black" as const,
  },
  {
    id: "schedule",
    to: "/schedule",
    label: "Schedule",
    defaultColor: "black" as const,
  },
  {
    id: "classes",
    to: "/classes",
    label: "Classes",
    defaultColor: "black" as const,
  },
  {
    id: "contact",
    to: "/contact",
    label: "Contact",
    defaultColor: "white" as const,
    enableScrollEffect: true,
  },
  { id: "join", to: "#", label: "Join now", defaultColor: "black" as const },
];

export function Navigation() {
  const isHydrated = useIsHydrated();
  const [StickyHeadroom, setStickyHeadroom] = React.useState<
    typeof import("@integreat-app/react-sticky-headroom").default | null
  >(null);

  React.useEffect(() => {
    if (isHydrated) {
      import("@integreat-app/react-sticky-headroom").then((module) => {
        setStickyHeadroom(() => module.default);
      });
    }
  }, [isHydrated]);

  if (!isHydrated || !StickyHeadroom) {
    return <HeaderContent />;
  }

  return (
    <>
      <StickyHeadroom scrollHeight={80} className="hidden md:block">
        <HeaderContent />
      </StickyHeadroom>

      <header className="flex items-center md:hidden">
        <MobileNavigation />
      </header>
    </>
  );
}

export function HeaderContent({
  scrollHeightDvh = 85,
}: {
  scrollHeightDvh?: number;
}) {
  const hasScrolledPastThreshold = useScrollThreshold(scrollHeightDvh);
  const location = useLocation();

  const handleJoinNowClick = () => {
    // @todo – Add code here to link to JOIN NOW
  };

  // Get the current route configuration
  const getCurrentRouteConfig = () => {
    const currentRoute = routes.find((route) => {
      // Exact match first
      if (route.to === location.pathname) return true;

      // For dynamic routes, you might want to use startsWith or regex
      if (route.to !== "/" && location.pathname.startsWith(route.to)) {
        return true;
      }

      return false;
    });

    // Fallback to default config if no route matches
    return (
      currentRoute || {
        id: "default",
        to: "/",
        label: "Default",
        defaultColor: "white",
        enableScrollEffect: false,
      }
    );
  };

  // Determine current text color based on route config and scroll state
  const getCurrentTextColor = () => {
    const routeConfig = getCurrentRouteConfig();
    const { defaultColor, enableScrollEffect } = routeConfig;

    // If scroll effect is disabled, always use the default color
    if (!enableScrollEffect) {
      return defaultColor === "white"
        ? "text-overlay-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
        : "text-foreground";
    }

    // If scroll effect is enabled, check scroll threshold
    if (hasScrolledPastThreshold) {
      return defaultColor === "white"
        ? "text-foreground"
        : "text-overlay-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]";
    }
    return defaultColor === "white"
      ? "text-overlay-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
      : "text-foreground";
  };

  const activeTextColorClass = getCurrentTextColor();

  return (
    <header className="z-50 hidden md:flex items-center w-full h-nav-height">
      <nav>
        <ul className="flex items-center gap-8 px-40">
          {routes.map(({ id, label, to }) => {
            const baseStyles =
              "uppercase text-overlay-foreground text-3xl truncate hover:opacity-70 transition-colors duration-300 ease-in-out";

            if (id === "join") {
              return (
                <li key={id}>
                  <button
                    onClick={handleJoinNowClick}
                    className={cn(baseStyles, activeTextColorClass)}
                  >
                    {label}
                  </button>
                </li>
              );
            }

            return (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(baseStyles, activeTextColorClass, isActive && "italic")
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image
            alt="Logo"
            src="/assets/images/logo-shadow.webp"
            className="w-14"
          />

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative flex flex-col justify-center items-center z-50 p-8 pt-12 -mt-6 -mr-6"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {/* Top line */}
              <span
                className={`absolute left-0 h-0.5 w-6 bg-overlay-foreground transform transition-all duration-300 ease-in-out drop-shadow-lg ${
                  isMenuOpen ? "top-3 rotate-45" : "top-1"
                }`}
              />
              {/* Middle line */}
              <span
                className={`absolute left-0 top-3 h-0.5 w-6 bg-overlay-foreground transform transition-all duration-300 ease-in-out drop-shadow-lg ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Bottom line */}
              <span
                className={`absolute left-0 h-0.5 w-6 bg-overlay-foreground transform transition-all duration-300 ease-in-out drop-shadow-lg ${
                  isMenuOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/5 backdrop-blur-2xl transition-all duration-700 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-90"
        }`}
      >
        <div className="flex flex-col justify-end gap-20 h-full px-12 py-20">
          {/* Navigation Items */}
          <div className="space-y-4">
            {routes.map((item, index) => {
              const openingDelays = [
                "delay-0",
                "delay-[50ms]",
                "delay-[100ms]",
                "delay-[150ms]",
                "delay-[200ms]",
                "delay-[250ms]",
              ];
              const closingDelays = [
                "delay-[200ms]",
                "delay-[150ms]",
                "delay-[100ms]",
                "delay-[50ms]",
                "delay-0",
                "delay-0",
              ];

              return (
                <a
                  key={item.label}
                  href={item.to}
                  className={cn(
                    "block uppercase text-overlay-foreground drop-shadow-md text-2xl font-light tracking-wide hover:opacity-70 transition-opacity duration-200 transform-gpu",
                    !isMenuOpen && "opacity-0",
                    isMenuOpen
                      ? `animate-in fade-in-0 slide-in-from-top-4 duration-700 ${openingDelays[index]}`
                      : `animate-out fade-out duration-500 ${closingDelays[index]}`
                  )}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Contact Information */}
          <div
            className={cn(
              "space-y-2 text-overlay-foreground drop-shadow-sm text-sm",
              !isMenuOpen && "opacity-0",
              isMenuOpen
                ? "animate-in fade-in-0 slide-in-from-top-4 duration-700 delay-500"
                : "animate-out fade-out duration-500 delay-0"
            )}
          >
            <div className="opacity-80">
              <div className="mb-4">
                <p className="font-medium">Email</p>
                <p>{EMAIL_ADDRESS}</p>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function MobileNavigation() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Get the current route configuration (same logic as desktop)
//   const getCurrentRouteConfig = () => {
//     const currentRoute = routes.find((route) => {
//       // Exact match first
//       if (route.to === location.pathname) return true;

//       // For dynamic routes, you might want to use startsWith or regex
//       if (route.to !== "/" && location.pathname.startsWith(route.to)) {
//         return true;
//       }

//       return false;
//     });

//     // Fallback to default config if no route matches
//     return (
//       currentRoute || {
//         id: "default",
//         to: "/",
//         label: "Default",
//         defaultColor: "white",
//         enableScrollEffect: false,
//       }
//     );
//   };

//   // Get current colors based on route config only (no scroll effects for mobile)
//   const getCurrentColors = () => {
//     const routeConfig = getCurrentRouteConfig();
//     const { defaultColor } = routeConfig;

//     if (defaultColor === "white") {
//       return {
//         textColor:
//           "text-overlay-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
//         burgerColor: "bg-overlay-foreground",
//         logoSrc: "/assets/images/logo.webp",
//         defaultColor,
//       };
//     } else {
//       return {
//         textColor: "text-foreground",
//         burgerColor: "bg-foreground",
//         logoSrc: "/assets/images/logo.webp",
//         defaultColor,
//       };
//     }
//   };

//   const { textColor, burgerColor, logoSrc, defaultColor } = getCurrentColors();

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
//         <div className="flex items-center justify-between">
//           {/* Logo with dynamic src */}
//           <VercelImage
//             alt="Logo"
//             src={logoSrc}
//             className={cn(
//               "w-14 drop-shadow-md",
//               defaultColor === "black" && "invert"
//             )}
//           />

//           {/* Burger Menu Button with dynamic colors */}
//           <button
//             onClick={toggleMenu}
//             className="relative flex flex-col justify-center items-center z-50 p-8 pt-12 -mt-6 -mr-6"
//             aria-label="Toggle menu"
//           >
//             <div className="relative w-6 h-6">
//               {/* Top line */}
//               <span
//                 className={`absolute left-0 h-0.5 w-6 ${burgerColor} transform transition-all duration-300 ease-in-out ${
//                   isMenuOpen ? "top-3 rotate-45" : "top-1"
//                 }`}
//               />
//               {/* Middle line */}
//               <span
//                 className={`absolute left-0 top-3 h-0.5 w-6 ${burgerColor} transform transition-all duration-300 ease-in-out ${
//                   isMenuOpen ? "opacity-0" : "opacity-100"
//                 }`}
//               />
//               {/* Bottom line */}
//               <span
//                 className={`absolute left-0 h-0.5 w-6 ${burgerColor} transform transition-all duration-300 ease-in-out ${
//                   isMenuOpen ? "top-3 -rotate-45" : "top-5"
//                 }`}
//               />
//             </div>
//           </button>
//         </div>
//       </nav>

//       {/* Full Screen Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-40 backdrop-blur-2xl transition-all duration-700 ease-in-out bg-black/10 ${
//           isMenuOpen
//             ? "translate-x-0 opacity-100"
//             : "translate-x-full opacity-90"
//         }`}
//       >
//         <div className="flex flex-col justify-end gap-20 h-full px-12 py-20">
//           {/* Navigation Items */}
//           <div className="space-y-4">
//             {routes.map((item, index) => {
//               const openingDelays = [
//                 "delay-[200ms]",
//                 "delay-[300ms]",
//                 "delay-[380ms]",
//                 "delay-[440ms]",
//                 "delay-[480ms]",
//                 "delay-[500ms]",
//               ];
//               const closingDelays = [
//                 "delay-[480ms]",
//                 "delay-[440ms]",
//                 "delay-[380ms]",
//                 "delay-[300ms]",
//                 "delay-[200ms]",
//                 "delay-0",
//               ];

//               return (
//                 <a
//                   key={item.label}
//                   href={item.to}
//                   className={cn(
//                     "block uppercase drop-shadow-md text-2xl font-light tracking-wide hover:opacity-70 transition-opacity duration-200",
//                     textColor,
//                     !isMenuOpen && "opacity-0",
//                     isMenuOpen
//                       ? `animate-in fade-in-0 slide-in-from-top-4 duration-700 ${openingDelays[index]}`
//                       : `animate-out fade-out duration-500 ${closingDelays[index]}`
//                   )}
//                   onClick={() => {
//                     toggleMenu();
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               );
//             })}
//           </div>

//           {/* Contact Information */}
//           <div
//             className={cn(
//               "space-y-2 drop-shadow-sm text-sm",
//               textColor,
//               !isMenuOpen && "opacity-0",
//               isMenuOpen
//                 ? "animate-in fade-in-0 slide-in-from-top-4 duration-700 delay-500"
//                 : "animate-out fade-out duration-500 delay-0"
//             )}
//           >
//             <div className="opacity-80">
//               <div className="mb-4">
//                 <p className="font-medium">Email</p>
//                 <p>{EMAIL_ADDRESS}</p>
//               </div>
//               <div>
//                 <p className="font-medium">Address</p>
//                 <p>{ADDRESS}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
