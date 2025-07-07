import * as E from "@react-email/components";
import { getFirstName } from "~/lib/helpers/string";
import { DOMAIN, INSTAGRAM_USERNAME } from "~/lib/utils/constants";

export default function CareersApplyConfirmation({
  fullName,
  responseTimeHours = 48,
}: {
  fullName: string;
  responseTimeHours?: number | string;
}) {
  const firstName = getFirstName(fullName);

  return (
    <E.Html lang="en" dir="ltr">
      <E.Container
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          maxWidth: "600px",
          margin: "0 auto",
          padding: "40px 20px",
          backgroundColor: "#f2eeeb",
          lineHeight: "1.4",
        }}
      >
        {/* Greeting */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          Hi {firstName},
        </E.Text>

        {/* Main content paragraphs */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          Thank you for applying to join our team at Flexcore Pilates!
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          We've received your application and are thrilled that you're
          interested in becoming a part of our Pilates community.
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          Our team is currently reviewing all submissions, and we'll be in touch
          within the next {responseTimeHours} business days if we feel your
          experience aligns with our current needs. In the meantime, feel free
          to check us out on Instagram to get a better feel for our vibe and
          values!
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 32px 0",
          }}
        >
          Whether you're new to Pilates or a seasoned instructor, we truly
          appreciate your interest and the time you took to apply.
        </E.Text>

        {/* Signature section */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 0px 0",
          }}
        >
          Warmly,
        </E.Text>

        {/* Signature using your custom Brittany font */}
        <E.Img
          src={`${DOMAIN}/assets/images/team-signature.png`}
          alt="The Flexcore Pilates Team"
          width="auto"
          height="50"
          style={{
            margin: "0 0 32px 0",
          }}
        />

        {/* Socials & Signature */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Social icons floated left */}
          <div
            style={{
              float: "left",
              lineHeight: "89px", // Roughly the height of the logo 120x88.8
            }}
          >
            <E.Link
              href={DOMAIN}
              style={{
                textDecoration: "none",
                marginLeft: "16px",
                marginRight: "16px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <E.Img
                src={`${DOMAIN}/assets/icons/globe.png`}
                alt="Visit our website"
                width="24"
                height="24"
              />
            </E.Link>

            <E.Link
              href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
              style={{
                textDecoration: "none",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            >
              <E.Img
                src={`${DOMAIN}/assets/icons/instagram.png`}
                alt="Follow us on Instagram"
                width="24"
                height="24"
              />
            </E.Link>
          </div>

          {/* Logo floated right */}
          <div style={{ float: "right" }}>
            <E.Img
              src={`${DOMAIN}/assets/images/email-signature.png`}
              alt="Flexcore Logo"
              width="120"
              height="auto"
            />
          </div>
        </div>
      </E.Container>
    </E.Html>
  );
}
