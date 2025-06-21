import { ContactForm } from "~/components/contact-form";
import { Image } from "~/components/image";
import { EmailLink, InstagramLink } from "~/components/layout/navigation";
import {
  EMAIL_ADDRESS,
  EMAIL_SUBJECT,
  INSTAGRAM_USERNAME,
} from "~/lib/utils/constants";
import type { Route } from "./+types/contact";

export default function ContactRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col md:grid md:grid-cols-12 md:h-dvh">
        <div className="md:col-span-6 relative flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/4.webp"
            alt="Connect with us image"
            className="size-full object-cover min-h-[92dvh]"
            priority={true}
          />
          <div className="absolute flex flex-col items-center justify-center gap-5 text-center select-none">
            <h2 className="text-4xl text-overlay-foreground italic">
              Connect with us
            </h2>
            <div className="flex items-center gap-6 text-overlay-foreground">
              <EmailLink
                email={EMAIL_ADDRESS}
                subject={EMAIL_SUBJECT}
                className="size-14"
              />
              <InstagramLink handle={INSTAGRAM_USERNAME} className="size-14" />
            </div>
          </div>
        </div>

        <div className="col-span-6 flex items-center justify-center size-full px-10 py-20 md:p-20 md:pt-28">
          <div className="flex flex-col items-center gap-14 md:gap-8 md:p-10 rounded-4xl md:rounded-[76px] md:border-[6px] border-overlay-foreground max-w-[475px]">
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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Flexcore Pilates Studio" },
    { name: "Contact", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
