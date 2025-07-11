import type { Route } from "./+types/job-applicant-privacy-notice";

export default function JobApplicantPrivacyNoticeRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-20 p-8 py-20 md:p-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          JOB APPLICANT PRIVACY NOTICE
        </h1>

        <div className="flex flex-col gap-8 max-w-4xl text-left">
          <div className="flex flex-col gap-4">
            <p className="italic text-lg">
              <b>Last updated:</b> June 2025
            </p>
            <p>
              This privacy notice explains how Flexcore Pilates, a Pilates
              studio based in San Diego, California, collects, uses, and
              protects the personal information of individuals who apply for
              instructor positions.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              1. What Information We Collect
            </h2>
            <p>
              When you apply for a position with us, we collect the following
              types of personal information:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Name and contact information (email address, phone number)</p>
              <p>Resume details (education, work history, certifications)</p>
              <p>Any information you voluntarily provide in your application</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              2. How We Use Your Information
            </h2>
            <p>We collect and use this information to:</p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Review your qualifications and experience</p>
              <p>Contact you regarding the position</p>
              <p>Make hiring decisions</p>
              <p>Maintain records of our hiring process</p>
            </div>
            <p>
              We do <span className="font-bold">not</span> use your information
              for marketing purposes or share it with third parties for
              advertising.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              3. How We Share Your Information
            </h2>
            <p>
              We do <span className="font-bold">not sell</span> your
              information. We may share your personal information with:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Internal staff involved in hiring</p>
              <p>
                Third-party service providers (e.g., secure email or file
                storage services) solely to support the application process
              </p>
            </div>
            <p>
              All third parties are required to maintain confidentiality and
              comply with applicable privacy laws.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              4. Data Retention
            </h2>
            <p>
              If you are not hired, we may retain your application and resume
              for up to <span className="font-bold">1 year</span> in case other
              opportunities arise, unless you request that we delete it sooner.
            </p>
            <p>
              If you are hired, your information will become part of your
              employment record and will be kept in accordance with California
              labor laws.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">5. Your Rights</h2>
            <p>You have the right to:</p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Request access to your personal information</p>
              <p>Ask us to correct or delete your information</p>
            </div>
            <p>
              To exercise these rights, please contact us using the information
              below.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              6. How to Contact Us
            </h2>
            <p>
              If you have any questions about this notice or wish to exercise
              your privacy rights, please contact:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                <span className="italic font-semibold">
                  Flexcore Pilates Studio
                </span>
              </p>
              <p>
                <span className="italic font-semibold">Email</span>:
                flexcorepilatesstudio@gmail.com
              </p>
              <p>
                <span className="italic font-semibold">Address</span>: 5628 La
                Jolla Blvd, Suite A, La Jolla, California 92037
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
    { title: "Job Applicant Privacy Notice | Flexcore Pilates Studio" },
    {
      name: "Job Applicant Privacy Notice",
      content: "Welcome Flexcore Pilates Studio!",
    },
  ];
}
