import { ApplyForm } from "~/components/forms/apply-form";
import type { Route } from "./+types/careers";
import { Image } from "~/components/image";
import { Link } from "react-router";

export default function CareersRoute() {
  return (
    <>
      <MobileContent />
      <div className="hidden md:flex flex-col">
        <div className="flex items-center gap-4 w-full mt-32 md:mt-32">
          <div className="h-1 w-full bg-overlay-foreground" />
          <h1 className="text-3xl md:text-3xl font-bold italic tracking-tight truncate min-w-44 text-center">
            We're hiring!
          </h1>
          <div className="h-1 w-full bg-overlay-foreground" />
        </div>

        <section className="flex flex-col md:grid md:grid-cols-2 gap-20 md:min-h-dvh p-20">
          <div className="col-span-1 flex justify-end">
            <div className="relative flex items-center justify-center overflow-hidden rounded-[76px] w-4/5">
              <Image
                src="/assets/images/5.webp"
                alt="Connect with us image"
                className="size-full object-cover"
                priority={true}
              />
              <h2 className="absolute top-20 text-4xl text-foreground tracking-tight italic select-none">
                Join our team!
              </h2>
            </div>
          </div>

          <div className="col-span-1 flex justify-start">
            <div className="flex flex-col items-center gap-14 md:gap-12 md:p-10 rounded-4xl md:rounded-[76px] md:border-[6px] border-overlay-foreground max-w-[475px]">
              <p className="text-center text-2xl">Apply below!</p>

              <ApplyForm />

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
            alt="Connect with us image"
            className="size-full object-cover min-h-[92dvh]"
            priority={true}
          />
          <h2 className="absolute top-32 text-3xl text-foreground tracking-tight italic select-none">
            Join our team!
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
