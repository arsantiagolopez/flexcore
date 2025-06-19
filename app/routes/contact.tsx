import { Instagram, Mail } from "lucide-react";
import { ContactForm } from "~/components/contact-form";
import { Image } from "~/components/image";
import {
  EMAIL_ADDRESS,
  EMAIL_SUBJECT,
  INSTAGRAM_USERNAME,
} from "~/lib/utils/constants";

export default function ContactRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col md:grid md:grid-cols-12 md:h-dvh">
        <div className="md:col-span-7 relative flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/hero.webp"
            alt="Connect with us image"
            className="size-full object-cover h-[92dvh] md:h-fit"
            priority={true}
          />
          <div className="absolute flex flex-col items-center justify-center gap-5 text-center select-none">
            <h2 className="text-4xl text-overlay-foreground italic">
              Connect with us
            </h2>
            <div className="flex items-center gap-6 text-overlay-foreground">
              <EmailLink email={EMAIL_ADDRESS} subject={EMAIL_SUBJECT} />
              <InstagramLink />
            </div>
          </div>
        </div>

        <div className="col-span-5 flex items-center justify-center size-full px-10 py-20 md:p-20 md:pt-28">
          <div className="flex flex-col items-center gap-14 md:gap-8 md:p-10 rounded-4xl md:rounded-[76px] md:border-[6px] border-overlay-foreground">
            <p className="text-center text-lg">
              Contact us today by filling out the form — we’ll respond as soon
              as possible.
            </p>

            <ContactForm />

            <p className="text-2xl font-brittany">The flexcore pilates team</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function EmailLink({
  email = "hello@example.com",
  subject = "Hello!",
  body = "",
}: {
  email?: string;
  subject?: string;
  body?: string;
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
      <Mail strokeWidth={2} className="size-14" />
    </a>
  );
}

export function InstagramLink() {
  return (
    <a
      href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Follow us on Instagram"
    >
      <Instagram strokeWidth={2} className="size-14" />
    </a>
  );
}
