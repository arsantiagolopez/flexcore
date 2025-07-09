import React from "react";
import { useIsHydrated } from "~/hooks/use-is-hydrated";
import { NavLink, useLocation } from "react-router";
import { useScrollThreshold } from "~/hooks/use-scroll-threshold";
import { cn } from "~/lib/utils";
import {
  EMAIL_ADDRESS,
  EMAIL_SUBJECT,
  INSTAGRAM_USERNAME,
} from "~/lib/utils/constants";
import { EmailLink, InstagramLink } from "./navigation";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { ChevronDown } from "lucide-react";
import { routes } from "~/lib/utils/nav-links";

const STATIC_ROUTES = [
  "/privacy-policy",
  "/terms-and-conditions",
  "/job-applicant-privacy-notice",
];

export function DesktopNavigation() {
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
    <StickyHeadroom scrollHeight={80} className="hidden md:block">
      <HeaderContent />
    </StickyHeadroom>
  );
}

export function HeaderContent({
  scrollHeightDvh = 85,
}: {
  scrollHeightDvh?: number;
}) {
  const [navigationValue, setNavigationValue] = React.useState<string | null>(
    null
  );

  const hasScrolledPastThreshold = useScrollThreshold(scrollHeightDvh);
  const location = useLocation();

  const handleJoinNowClick = () => {
    // @todo – Add code here to link to JOIN NOW
  };

  // Get the current route configuration
  const getCurrentRouteConfig = () => {
    // First check for exact route matches
    const currentRoute = routes.find((route) => {
      // Exact match first
      if (route.to === location.pathname) return true;

      // For dynamic routes, you might want to use startsWith or regex
      if (
        route.to &&
        route.to !== "/" &&
        location.pathname.startsWith(route.to)
      ) {
        return true;
      }

      return false;
    });

    if (currentRoute) return currentRoute;

    // Check dropdown items for matches
    for (const route of routes) {
      if (route.isDropdown && route.items) {
        const matchingDropdownItem = route.items.find((item) => {
          if (item.to === location.pathname) return true;
          if (
            item.to &&
            item.to !== "/" &&
            location.pathname.startsWith(item.to)
          ) {
            return true;
          }
          return false;
        });

        if (matchingDropdownItem) {
          // Return the dropdown item config, but merge with parent route's enableScrollEffect
          return {
            ...matchingDropdownItem,
            enableScrollEffect: route.enableScrollEffect || false,
          };
        }
      }
    }

    // Fallback to default config if no route matches
    return {
      id: "default",
      to: "/",
      label: "Default",
      defaultColor: "white" as const,
      enableScrollEffect: false,
    };
  };

  // Determine current text color based on route config and scroll state
  const getCurrentTextColor = () => {
    let routeConfig = getCurrentRouteConfig();

    if (STATIC_ROUTES.includes(location.pathname)) {
      routeConfig.defaultColor = "black";
    }

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

  const baseStyles =
    "uppercase text-overlay-foreground text-2xl truncate hover:opacity-70 transition-colors duration-300 ease-in-out";

  return (
    <header className="z-50 hidden md:flex items-center justify-between w-full h-nav-height px-24">
      <NavigationMenu.Root
        value={navigationValue}
        onValueChange={setNavigationValue}
      >
        <NavigationMenu.List className="flex items-center gap-8">
          {routes.map((route) => {
            const { id, label, to, isDropdown, items } = route;

            // Handle dropdown menu item (Contact)
            if (isDropdown && items) {
              return (
                <NavigationMenu.Item key={id} value={id} className="-mr-3">
                  <NavigationMenu.Trigger
                    className={cn(
                      baseStyles,
                      activeTextColorClass,
                      "cursor-pointer flex items-center"
                    )}
                  >
                    {label}
                    <NavigationMenu.Icon className="ml-1 transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                      <ChevronDown />
                    </NavigationMenu.Icon>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="flex flex-col p-1 min-w-(--anchor-width) rounded-md border border-border">
                    {items.map((item) => (
                      <CustomNavLink
                        key={item.id}
                        to={item.to}
                        className="text-lg hover:bg-overlay-foreground/25 rounded-md py-1.5 px-2"
                        onClick={() => setNavigationValue(null)}
                      >
                        {item.label}
                      </CustomNavLink>
                    ))}
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              );
            }

            // Handle Join button
            if (id === "join") {
              return (
                <NavigationMenu.Item key={id}>
                  <button
                    onClick={handleJoinNowClick}
                    className={cn(baseStyles, activeTextColorClass)}
                  >
                    {label}
                  </button>
                </NavigationMenu.Item>
              );
            }

            // Handle regular navigation items
            return (
              <NavigationMenu.Item key={id}>
                <NavLink
                  to={to!}
                  className={({ isActive }) =>
                    cn(baseStyles, activeTextColorClass, isActive && "italic")
                  }
                >
                  {label}
                </NavLink>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>

        {/* Portal is required for dropdown content - all Content components render here */}
        <NavigationMenu.Portal>
          <NavigationMenu.Positioner sideOffset={15}>
            <NavigationMenu.Popup
              className={cn(
                "bg-background shadow-lg rounded-md",
                "transition-all duration-200 ease-out data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95 opacity-100 scale-100 origin-top"
              )}
            >
              <NavigationMenu.Viewport />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>

      <div className="flex items-center gap-8 text-overlay-foreground">
        <EmailLink
          email={EMAIL_ADDRESS}
          subject={EMAIL_SUBJECT}
          className={activeTextColorClass}
        />
        <InstagramLink
          handle={INSTAGRAM_USERNAME}
          className={activeTextColorClass}
        />
      </div>
    </header>
  );
}

function CustomNavLink(
  props: NavigationMenu.Link.Props & { to: string; isActive?: boolean }
) {
  const { to, isActive, className, children, ...rest } = props;
  return (
    <NavigationMenu.Link
      render={<NavLink to={to} />}
      className={className}
      {...rest}
    >
      {children}
    </NavigationMenu.Link>
  );
}
