import type { Route } from "./+types/contact";
import { data } from "react-router";
import { ContactForm, ContactFormSchema } from "~/components/forms";
import { Image } from "~/components/image";
import { EmailLink, InstagramLink } from "~/components/layout/navigation";
import {
  EMAIL_ADDRESS,
  EMAIL_SUBJECT,
  INSTAGRAM_USERNAME,
} from "~/lib/utils/constants";
import { checkHoneypot } from "~/lib/utils/honeypot.server";
import { parseWithZod } from "@conform-to/zod";
import { sendEmail } from "~/lib/utils/email.server";
import { ContactConfirmation, ContactNotification } from "emails";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  // Check honeypot for spam protection
  await checkHoneypot(formData);

  const submission = parseWithZod(formData, {
    schema: ContactFormSchema,
  });

  if (submission.status !== "success") {
    return data(
      { result: submission.reply() },
      { status: submission.status === "error" ? 400 : 200 }
    );
  }

  const { firstName, lastName, emailAddress, phoneNumber, message } =
    submission.value;

  // Custom format: "Monday, January 7, 2025 at 2:30 PM"
  const formattedSubmissionDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Send notification email to admin
  const adminEmailResponse = await sendEmail({
    to: process.env.ADMIN_EMAIL_ADDRESS!,
    subject: `Internal – New Client Contact Form Submission - ${firstName} ${lastName}`,
    react: (
      <ContactNotification
        firstName={firstName}
        lastName={lastName}
        emailAddress={emailAddress}
        phoneNumber={phoneNumber}
        message={message}
        submissionDate={formattedSubmissionDate}
      />
    ),
  });

  // Send confirmation email to user
  const userEmailResponse = await sendEmail({
    to: emailAddress,
    subject: "We've Received Your Message!",
    react: <ContactConfirmation responseTimeHours={48} />,
  });

  if (
    adminEmailResponse.status === "success" &&
    userEmailResponse.status === "success"
  ) {
    return data({ success: true });
  } else {
    // Check specifically for invalid email errors
    if (
      userEmailResponse.status !== "success" &&
      userEmailResponse.error?.message?.includes("Invalid `to` field")
    ) {
      return data(
        {
          result: submission.reply({
            fieldErrors: {
              emailAddress: ["Please enter a valid email address"],
            },
          }),
        },
        { status: 400 }
      );
    }

    console.error("Failed to send emails:", {
      adminEmailResponse,
      userEmailResponse,
    });

    return data(
      {
        result: submission.reply({
          formErrors: [
            `Something happened on our end. Please email us directly at ${EMAIL_ADDRESS}.`,
          ],
        }),
      },
      { status: 500 }
    );
  }
}

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
          <div className="absolute top-[13%] md:top-[11%] md:right-[27%] flex flex-col items-center justify-center gap-2 text-center select-none">
            <h2 className="text-3xl md:text-4xl text-overlay-foreground tracking-tight italic">
              Connect with us
            </h2>
            <div className="flex items-center gap-4 text-overlay-foreground">
              <EmailLink
                email={EMAIL_ADDRESS}
                subject={EMAIL_SUBJECT}
                className="size-12 md:size-14"
              />
              <InstagramLink
                handle={INSTAGRAM_USERNAME}
                className="size-12 md:size-14"
              />
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
