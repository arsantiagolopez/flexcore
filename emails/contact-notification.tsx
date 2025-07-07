import * as E from "@react-email/components";
import { DOMAIN, INSTAGRAM_USERNAME } from "~/lib/utils/constants";

export default function ContactNotification({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  message,
  submissionDate,
}: {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  message: string;
  submissionDate: string;
}) {
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
          Hi Team,
        </E.Text>

        {/* Main content paragraphs */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          We've received a new contact form submission via our website.
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Please see the details below:
        </E.Text>

        {/* Contact details */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Name:</strong> {firstName} {lastName}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Phone number:</strong> {phoneNumber || "–"}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Email address:</strong> {emailAddress}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Submission date:</strong> {submissionDate}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Message:</strong>
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 32px 0",
            fontStyle: "italic",
          }}
        >
          "{message}"
        </E.Text>

        {/* Socials & Logo Footer */}
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
