import { MapPin } from "lucide-react";
import { VercelImage } from "../vercel-image";
import { Link } from "react-router";
import { ADDRESS } from "~/lib/utils/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col gap-16 justify-between md:h-80 w-full bg-background p-10 text-center">
      <div className="flex flex-col gap-16 md:flex-row items-center justify-between">
        <VercelImage
          src="/assets/images/logo-black.webp"
          alt="Logo black"
          className="h-12 md:h-20 w-fit"
          priority={true}
        />
        <GoogleMapsLink address={ADDRESS} displayAddress={ADDRESS} />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 font-semibold text-sm md:text-base">
        © Flexcore Pilates Studio {year}. All rights reserved.
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
