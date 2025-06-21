import { cn } from "~/lib/utils";
import { Instagram, Mail } from "lucide-react";
import { MobileNavigation } from "./mobile-navigation";
import { DesktopNavigation } from "./desktop-navigation";

export function Navigation() {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
}

export function EmailLink({
  email = "hello@example.com",
  subject = "Hello!",
  body = "",
  className,
}: {
  email?: string;
  subject?: string;
  body?: string;
  className?: string;
}) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

  return (
    <a
      href={mailtoLink}
      className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Send us an email"
    >
      <Mail strokeWidth={2} className={cn("size-9", className)} />
    </a>
  );
}

export function InstagramLink({
  handle,
  className,
}: {
  handle: string;
  className?: string;
}) {
  return (
    <a
      href={`https://instagram.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Follow us on Instagram"
    >
      <Instagram strokeWidth={2} className={cn("size-8", className)} />
    </a>
  );
}
