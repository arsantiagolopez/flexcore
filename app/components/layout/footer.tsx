import { MapPin } from "lucide-react";
import { Image } from "../image";
import { Link, NavLink } from "react-router";
import { ADDRESS } from "~/lib/utils/constants";
import { Separator } from "@base-ui-components/react";
import { routes } from "~/lib/utils/nav-links";
import { cn } from "~/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  // @todo – Abstract and link this to other navigation components
  const handleJoinNowClick = () => {
    // @todo – Add code here to link to JOIN NOW
  };

  const baseStyles =
    "uppercase truncate hover:opacity-70 transition-colors duration-300 ease-in-out";

  return (
    <footer className="relative flex flex-col gap-14 md:gap-20 justify-between md:h-80 w-full bg-background text-center">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-between px-10 md:px-20 pt-14 md:pt-20">
        <Image
          src="/assets/images/logo-long-black.webp"
          alt="Logo black"
          className="h-12 w-[240.5px] md:h-20 md:w-fit object-contain"
          priority={true}
        />
        <GoogleMapsLink address={ADDRESS} displayAddress={ADDRESS} />
      </div>

      <Separator className="shrink-0 h-1 w-full bg-overlay-foreground" />

      <div className="flex flex-col items-center justify-center gap-8 md:gap-5 text-sm md:text-base px-10 md:px-20 pb-14 md:pb-20 font-semibold">
        <ul className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1.5 md:gap-6">
          {routes.map(({ id, to, label, items }) => {
            if (id === "join") {
              return (
                <button onClick={handleJoinNowClick} className={cn(baseStyles)}>
                  {label}
                </button>
              );
            }

            if (!to && items) {
              return (
                <>
                  {items.map(({ id, to, label }) => (
                    <li key={id}>
                      <NavLink to={to} className={cn(baseStyles)}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </>
              );
            }

            return (
              <li key={id}>
                <NavLink to={to} className={cn(baseStyles)}>
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <span>© Flexcore Pilates Studio {year}. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <Link
            to="/terms-and-conditions"
            className="underline hover:opacity-70 truncate"
          >
            Terms and Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="underline hover:opacity-70 truncate"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <span className="absolute bottom-full left-0 w-full h-20 bg-gradient-to-t from-stone-600/5 to-transparent pointer-events-none" />
    </footer>
  );
}

function GoogleMapsLink({
  address,
  displayAddress,
}: {
  address: string;
  displayAddress?: string;
}) {
  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  // Split the display address into two lines (break after second comma)
  const addressToDisplay = displayAddress || address;
  const addressParts = addressToDisplay.split(",").map((part) => part.trim());
  const line1 = addressParts.slice(0, 2).join(", ");
  const line2 = addressParts.slice(2).join(", ");

  const handleClick = () => {
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-1 hover:underline hover:italic underline-offset-2 transition-colors -ml-2 md:ml-0"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <MapPin strokeWidth={1} className="w-8 md:w-12 h-full" />
      <div className="flex flex-col text-base md:text-lg leading-5 text-center">
        <span>{line1}</span>
        {line2 && <span>{line2}</span>}
      </div>
    </div>
  );
}
