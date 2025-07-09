import type { Route } from "./+types/careers";
import { ApplyForm, ApplyFormSchema } from "~/components/forms";
import { Image } from "~/components/image";
import { data, Link } from "react-router";
import { checkHoneypot } from "~/lib/utils/honeypot.server";
import { sendEmail } from "~/lib/utils/email.server";
import { CareersApplyConfirmation, CareersApplyNotification } from "emails";
import { EMAIL_ADDRESS } from "~/lib/utils/constants";
import { Separator } from "@base-ui-components/react";
import { parseWithZod } from "@conform-to/zod";
import { parseFormData } from "@mjackson/form-data-parser";

const MAX_SIZE = 1024 * 1024 * 10; // 10MB

// Helper function to get file extension
function getFileExtension(filename: string): string {
  return filename.split(".").pop() || "";
}

// Helper function to get MIME type from file extension
function getMimeType(extension: string): string {
  const mimeTypes: Record<string, string> = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };
  return mimeTypes[extension.toLowerCase()] || "application/octet-stream";
}

export async function action({ request }: Route.ActionArgs) {
  try {
    const formData = await parseFormData(request, {
      maxFileSize: MAX_SIZE,
    });

    await checkHoneypot(formData);

    const submission = parseWithZod(formData, {
      schema: ApplyFormSchema,
    });

    if (submission.status !== "success") {
      console.log("❌ Form validation failed");
      console.log("🔍 Submission error:", submission.error);

      return data(
        { result: submission.reply() },
        { status: submission.status === "error" ? 400 : 200 }
      );
    }

    const { fullName, emailAddress, phoneNumber, message, resume } =
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

    // Prepare resume attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const fileExtension = getFileExtension(resume.name);
    const attachmentFilename = `${fullName.replace(
      /\s+/g,
      "_"
    )}_Resume.${fileExtension}`;

    // Send notification email to admin (with resume attachment)
    const adminEmailResponse = await sendEmail({
      to: process.env.ADMIN_EMAIL_ADDRESS!,
      subject: `New Job Application - ${fullName}`,
      react: (
        <CareersApplyNotification
          fullName={fullName}
          emailAddress={emailAddress}
          phoneNumber={phoneNumber}
          message={message}
          submissionDate={formattedSubmissionDate}
        />
      ),
      attachments: [
        {
          filename: attachmentFilename,
          content: resumeBuffer,
          contentType: getMimeType(fileExtension),
        },
      ],
    });

    // Send confirmation email to applicant
    const userEmailResponse = await sendEmail({
      to: emailAddress,
      subject: "Thank For Applying to Flexcore Pilates!",
      react: (
        <CareersApplyConfirmation fullName={fullName} responseTimeHours="2-3" />
      ),
    });

    if (
      adminEmailResponse.status === "success" &&
      userEmailResponse.status === "success"
    ) {
      return data({ success: true });
    } else {
      console.log("❌ Email sending failed");

      if (adminEmailResponse.status !== "success") {
        console.error(
          "Failed to send application info to admin:",
          adminEmailResponse
        );
      }
      if (userEmailResponse.status !== "success") {
        console.error(
          "Failed to send confirmation email to user:",
          userEmailResponse
        );
      }

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
  } catch (error) {
    console.error("💥 Unexpected error in action:");

    return data(
      {
        result: {
          status: "error",
          error: {
            "": ["An unexpected error occurred. Please try again."],
          },
        },
      },
      { status: 500 }
    );
  }
}

export default function CareersRoute() {
  return (
    <>
      <MobileContent />
      <div className="hidden md:flex flex-col">
        <div className="flex items-center gap-4 w-full mt-32 md:mt-32">
          <div className="h-1 w-full bg-overlay-foreground" />
          <h1 className="text-3xl md:text-3xl font-bold tracking-tight truncate min-w-60 text-center">
            WE'RE HIRING!
          </h1>
          <div className="h-1 w-full bg-overlay-foreground" />
        </div>

        <section className="flex flex-col md:grid md:grid-cols-2 gap-20 md:min-h-dvh p-20">
          <div className="col-span-1 flex justify-end">
            <div className="relative flex items-center justify-center overflow-hidden rounded-[76px] w-4/5">
              <Image
                src="/assets/images/5.webp"
                alt="Join our team image"
                className="size-full object-cover"
                priority={true}
              />
              <h2 className="absolute top-20 text-3xl text-foreground font-bold tracking-tight select-none">
                JOIN OUR TEAM!
              </h2>
            </div>
          </div>

          <div className="col-span-1 flex justify-start">
            <div className="flex flex-col items-center rounded-4xl md:rounded-[76px] md:border-[6px] border-overlay-foreground max-w-[475px]">
              <p className="text-center text-2xl p-10 pb-8">Apply below!</p>

              <Separator className="shrink-0 h-1 w-full bg-overlay-foreground" />

              <ApplyForm className="p-10 pt-8" />

              <div className="flex flex-col items-center gap-5 -mt-6">
                <p className="text-center text-lg">
                  Refer to the{" "}
                  <Link
                    to="/job-applicant-privacy-notice"
                    className="text-base underline"
                  >
                    Job Applicant Privacy Notice
                  </Link>
                </p>
                <p className="text-2xl font-brittany">
                  The flexcore pilates team
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function MobileContent() {
  return (
    <div className="flex md:hidden flex-col">
      <section className="flex flex-col md:grid md:grid-cols-12 md:h-dvh">
        <div className="md:col-span-6 relative flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/5.webp"
            alt="Join our team image"
            className="size-full object-cover min-h-[92dvh]"
            priority={true}
          />
          <h2 className="absolute top-24 text-3xl text-foreground font-bold tracking-tight select-none">
            JOIN OUR TEAM
          </h2>
        </div>

        <div className="col-span-6 flex items-center justify-center size-full px-10 py-20 md:p-20 md:pt-28">
          <div className="flex flex-col items-center gap-14 md:gap-12 md:p-10 rounded-4xl md:rounded-[76px] md:border-[6px] border-overlay-foreground max-w-[475px]">
            <p className="text-center text-2xl">Apply below!</p>

            <ApplyForm />

            <div className="flex flex-col items-center gap-14 -mt-4">
              <p className="text-center text-lg">
                Refer to the{" "}
                <Link
                  to="/job-applicant-privacy-notice"
                  className="text-base underline"
                >
                  Job Applicant Privacy Notice
                </Link>
              </p>
              <p className="text-2xl font-brittany">
                The flexcore pilates team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers | Flexcore Pilates Studio" },
    { name: "Careers", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
