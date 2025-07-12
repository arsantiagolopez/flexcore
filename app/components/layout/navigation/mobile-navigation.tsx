import React from "react";
import { Image } from "~/components/image";
import { cn } from "~/lib/utils";
import { ADDRESS, EMAIL_ADDRESS } from "~/lib/utils/constants";
import { routes } from "~/lib/utils/nav-links";
import { Accordion } from "@base-ui-components/react/accordion";
import { ChevronDown } from "lucide-react";

const mobileRoutesWithAccount = [
  ...routes,
  {
    id: "account",
    to: "/account",
    label: "Account",
    defaultColor: "black" as const,
  },
];

export function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center md:hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              alt="Logo"
              src="/assets/images/logo-white.webp"
              className="w-14"
            />
          </a>

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
            {mobileRoutesWithAccount.map((item, index) => {
              const openingDelays = [
                "delay-0",
                "delay-[50ms]",
                "delay-[100ms]",
                "delay-[150ms]",
                "delay-[200ms]",
                "delay-[250ms]",
                "delay-[300ms]",
              ];
              const closingDelays = [
                "delay-[250ms]",
                "delay-[200ms]",
                "delay-[150ms]",
                "delay-[100ms]",
                "delay-[50ms]",
                "delay-0",
                "delay-0",
              ];

              // Handle Contact dropdown
              if (item.isDropdown && item.items) {
                return (
                  <Accordion.Root key={item.label} openMultiple={false}>
                    <Accordion.Item value="contact">
                      <Accordion.Header
                        className={cn(
                          !isMenuOpen && "opacity-0",
                          isMenuOpen
                            ? `animate-in fade-in-0 slide-in-from-top-4 duration-700 ${openingDelays[index]}`
                            : `animate-out fade-out duration-500 ${closingDelays[index]}`
                        )}
                      >
                        <Accordion.Trigger className="flex items-center justify-between w-full uppercase text-overlay-foreground drop-shadow-md text-2xl font-light tracking-wide hover:opacity-70 transition-all duration-200 transform-gpu">
                          {item.label}
                          <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200 data-[panel-open]:rotate-180" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Panel className="overflow-hidden transition-all duration-300 ease-in-out data-[starting-style]:opacity-0 data-[starting-style]:max-h-0 data-[ending-style]:opacity-0 data-[ending-style]:max-h-0 data-[open]:opacity-100 data-[open]:max-h-96">
                        <div className="pt-4 pl-4">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.to}
                              className="block py-1.5 text-overlay-foreground drop-shadow-md text-lg font-light tracking-wide hover:opacity-70 transition-opacity duration-200"
                              onClick={toggleMenu}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion.Root>
                );
              }

              // Handle regular navigation items
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
                  onClick={toggleMenu}
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
    </header>
  );
}
