import type { Route } from "./+types/terms-and-conditions";

export default function TermsAndConditionsRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-20 p-8 py-20 md:p-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          TERMS AND CONDITIONS
        </h1>

        <div className="flex flex-col gap-8 max-w-4xl text-left">
          <div className="flex flex-col gap-4">
            <p className="italic text-lg">
              <b>Last Updated:</b> June 2025
            </p>
            <p>
              Welcome to Flex Core Pilates LLC ("Studio", "we", "us", or "our").
              By accessing or using our studio facilities, classes, website, or
              services (collectively, the "Services"), you agree to be bound by
              the following Terms and Conditions ("Terms"). Please read them
              carefully.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">1. Eligibility</h2>
            <p>
              You must be at least 18 years of age or have the permission of a
              parent or legal guardian to use our Services. We reserve the right
              to refuse service to anyone for any reason at any time.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              2. Health and Medical Disclaimer
            </h2>
            <p>
              By participating in our classes or using our services, you confirm
              that:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                You have consulted with a medical professional about your
                ability to safely engage in physical exercise.
              </p>
              <p>
                You understand that Pilates involves physical exertion and
                carries the risk of injury.
              </p>
              <p>
                You accept full responsibility for your health and well-being
                during participation.
              </p>
              <p>
                You agree to inform the instructor of any pre-existing
                conditions or injuries before each class.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              3. Bookings and Cancellations
            </h2>
            <p>
              All classes must be booked in advance via our online booking
              system or app. Full payment is required at the time of booking to
              secure your spot in the class. All transactions are processed by
              third-party providers. By making a purchase, you acknowledge and
              accept their terms.
            </p>
            <p>
              A 12-hour cancellation policy applies. Cancellations made less
              than 12 hours before class time may result in a loss of the
              session or a cancellation fee.
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                Class Package Holders
              </h3>
              <p>
                Class reservations must be canceled 12 hours prior to the
                scheduled class. Failure to cancel within this window or failure
                to attend will result in the forfeiture of one class credit.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold italic">
                Unlimited Membership Holders
              </h3>
              <p>
                Reservations not canceled 12 hours prior will incur a
                non-refundable late cancellation fee of $15. Failure to attend a
                reserved class without prior cancellation will result in a
                non-refundable no-show fee of $25.
              </p>
            </div>

            <p>
              We reserve the right to cancel or reschedule classes due to
              instructor availability, low enrollment, or unforeseen
              circumstances.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              4. Class Waitlists
            </h2>
            <p>
              If you are placed on a waitlist and a spot opens up 4 or more
              hours before the scheduled class, you will be automatically
              enrolled in the class. It is your responsibility to monitor your
              waitlist status and cancel your enrollment according to our
              cancellation policy if you are no longer able to attend.
            </p>
            <p>
              If a spot becomes available less than 4 hours before the class,
              you will not be automatically enrolled. Instead, you must manually
              add yourself to the class through your account. We follow this
              policy to ensure that clients who are added from the waitlist have
              sufficient time to plan for their attendance.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              5. Payments and Refunds
            </h2>
            <div className="flex flex-col gap-2">
              <p>
                All prices are in U.S. dollars and subject to applicable taxes.
              </p>
              <p>
                Packages, memberships, and class passes are non-transferable and
                non-refundable unless required by California law.
              </p>
              <p>
                Clothing items may be exchanged for store credit only and must
                be exchanged within 14 days of the purchase date. All items must
                be unworn, unwashed, and in their original condition with tags
                attached. Please retain your receipt or proof of purchase for
                all exchanges.
              </p>
              <p>
                Grip socks are final sale and not eligible for return or
                exchange.
              </p>
              <p>Expiration dates on class packages are strictly enforced.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">6. Studio Rules</h2>
            <p>
              We kindly ask that you arrive at least 15 minutes prior to your
              scheduled class to allow ample time for parking and settling in.
              We enforce a strict 5-minute late policy—arrivals beyond this
              window will be marked as a no-show. This helps to ensure a smooth,
              uninterrupted experience for both the instructor and other clients
              already in session, as well as protect you from potential
              injuries.
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>Mobile phones must be silenced or turned off during class.</p>
              <p>
                Cleanliness and respectful behavior are expected at all times.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              7. Personal Belongings
            </h2>
            <p>
              You acknowledge and agree that Flexcore Pilates is not responsible
              for the loss, theft, or damage of any personal items brought into
              the studio. You assume full responsibility for the security of
              your belongings while on the premises.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              8. Intellectual Property
            </h2>
            <p>
              All content featured on our website—including but not limited to
              text, graphics, logos, and class materials—is the exclusive
              property of our studio and is protected under applicable
              intellectual property laws. Any reproduction, distribution, or use
              of this content without prior written authorization is strictly
              prohibited.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              9. Limitation of Liability
            </h2>
            <p>To the fullest extent permitted by California law:</p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                We are not liable for any injury, loss, or damage you may
                sustain while on our premises or using our services.
              </p>
              <p>
                You waive all claims against us arising out of your use of the
                services, including negligence.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              10. Privacy Policy
            </h2>
            <p>
              Your personal information is handled in accordance with our
              Privacy Policy, which forms part of these terms.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              11. Changes to Terms
            </h2>
            <p>
              We may modify these terms at any time. Any changes will be posted
              on our website and will take effect immediately. Continued use of
              the services constitutes your acceptance of the revised terms. We
              recommend checking this page occasionally to stay informed about
              any updates to our terms.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              12. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of California.
              Any disputes shall be resolved in the courts located in San Diego
              County, California.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="flex flex-col gap-2 pl-8">
              <p>
                <span className="italic font-semibold">Flexcore Pilates</span>
              </p>
              <p>
                <span className="italic font-semibold">
                  5628 La Jolla Blvd, Suite A
                </span>
              </p>
              <p>
                <span className="italic font-semibold">
                  San Diego, CA 92037
                </span>
              </p>
              <p>
                <span className="italic font-semibold">
                  flexcorepilatesstudio@gmail.com
                </span>
              </p>
              <p>
                <span className="italic font-semibold">
                  www.flexcorepilatesstudio.com
                </span>
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
    { title: "Terms and Conditions | Flexcore Pilates Studio" },
    {
      name: "Terms and Conditions",
      content: "Welcome Flexcore Pilates Studio!",
    },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
