import type { Route } from "./+types/privacy-policy";

export default function PrivacyPolicyRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-20 p-8 py-20 md:p-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold">PRIVACY POLICY</h1>

        <div className="flex flex-col gap-8 max-w-4xl text-left">
          <div className="flex flex-col gap-4">
            <p className="italic text-lg">
              <b>Effective Date:</b> June 2025
            </p>
            <p className="italic text-lg">
              <b>Studio Name:</b> Flexcore Pilates Studio
            </p>
            <p className="italic text-lg">
              <b>Location:</b> San Diego, California
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">1. Introduction</h2>
            <p>
              Flex Core Pilates LLC ("we," "us," or "our") respects your privacy
              and is committed to protecting the personal information you
              provide to us. This Privacy Policy outlines how we collect, use,
              and protect your information when you visit our website, use our
              services, or interact with us.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              2. Information We Collect
            </h2>
            <p>
              We may collect several types of information to provide you with a
              safe, personalized, and effective experience at our studio.
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                i. Personal Information
              </h3>
              <p>
                When you book classes, sign up for our newsletter, create an
                account, or contact us directly, we may collect personal
                information such as your full name, email address, phone number,
                emergency contact information and, if applicable, your mailing
                address.
              </p>
              <p>
                If you make a purchase or book a class online, we also collect
                payment details, including credit or debit card information and
                billing address. However, we do not store your credit card
                information.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                ii. Usage Data
              </h3>
              <p>
                As you interact with our website, we automatically gather
                certain technical information to help us understand and improve
                user experience. This may include your IP address, browser type
                and version, device and operating system, date and time of your
                visit, the specific pages you viewed, how long you spent on each
                page, and how you arrived at our site (such as through a
                referral link or search engine). Refer to the "Cookies and
                Tracking Technologies" section below for additional information.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                iii. Health and Wellness Information
              </h3>
              <p>
                To support your well-being and tailor our services to your
                needs, we may collect health-related information you voluntarily
                provide. This can include details about any injuries,
                pre-existing medical conditions, physical limitations,
                sensitivity to heat or equipment, or other relevant factors. We
                may also request emergency medical information and ask you to
                acknowledge the physical nature of our services by signing
                waivers or intake forms. This information is collected solely to
                ensure your safety and comfort and is handled with the utmost
                confidentiality.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Process class bookings and payments</p>
              <p>Communicate with you about your class bookings or updates</p>
              <p>
                Respond to inquiries or customer service requests submitted
                through our contact forms
              </p>
              <p>
                Send newsletters or marketing communications regarding
                promotions or future events (if you opt in)
              </p>
              <p>Improve our website and service offerings</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell or rent your personal information. We may share
              your information with:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Payment processors to process transactions</p>
              <p>Scheduling platforms for appointment booking</p>
              <p>
                Service providers that help us operate our business, subject to
                confidentiality agreements
              </p>
              <p>Satisfy obligations under the law</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar technologies to improve your
              experience and analyze site usage. The type and amount of data
              collected depend entirely on the permissions you allow through
              your browser settings. You can choose to accept, block, or delete
              cookies at any time. However, please note that limiting cookies
              may affect how some features work. We only collect information
              your settings permit, and you remain in control of what is shared.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">6. Data Security</h2>
            <p>
              We work hard to keep your personal information safe using a mix of
              physical, technical, and administrative protections. That said, no
              internet or electronic system is ever completely risk-free.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">7. Your Rights</h2>
            <p>
              Under the California Consumer Privacy Act (CCPA), you have the
              right to:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                Request to know what personal data we collect and how we use it
              </p>
              <p>Request deletion of your personal information</p>
              <p>
                Opt out of receiving marketing emails by following the
                unsubscribe instructions included in each message. To
                discontinue SMS communications, reply with "STOP" to any text
                message received from our studio.
              </p>
            </div>
            <p>
              To exercise your rights, contact us at:{" "}
              <span className="italic font-semibold">
                flexcorepilatesstudio@gmail.com
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of such sites.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              9. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 13 years of
              age. We do not knowingly collect personal data from children.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              10. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Updates will be posted on this page with an updated effective
              date. We recommend checking this page occasionally to stay
              informed about any updates to our policy.
            </p>
          </div>

          <div className="flex flex-col gap-6 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                <b>Email:</b>{" "}
                <span className="italic font-semibold">
                  flexcorepilatesstudio@gmail.com
                </span>
              </p>
              <p>
                <b>Address:</b>{" "}
                <span className="italic font-semibold">
                  5628 La Jolla Blvd, Suite A, La Jolla, CA 92037
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-8 md:pt-16">
            <p className="italic">
              By accessing or using our site, you confirm that you have read,
              understood, and agreed to the terms outlined in this Privacy
              Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Flexcore Pilates Studio" },
    { name: "Privacy Policy", content: "Welcome Flexcore Pilates Studio!" },
  ];
}
