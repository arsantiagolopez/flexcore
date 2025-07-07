import * as E from "@react-email/components";
import { DOMAIN, INSTAGRAM_USERNAME } from "~/lib/utils/constants";

export default function CareersApplyNotification({
  fullName,
  emailAddress,
  phoneNumber,
  message,
  resumeUrl,
  submissionDate,
}: {
  fullName: string;
  emailAddress: string;
  phoneNumber?: string;
  message?: string;
  resumeUrl?: string;
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
          A new employment application has been submitted through our website.
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
          Please find the details below:
        </E.Text>

        {/* Application details */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Name:</strong> {fullName}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Phone Number:</strong> {phoneNumber || "–"}
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Email Address:</strong> {emailAddress}
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
            margin: "0 0 16px 0",
            fontStyle: "italic",
          }}
        >
          {message ? (
            `"${message}"`
          ) : (
            <span className="italic">No message was provided</span>
          )}
        </E.Text>

        {/* Resume section */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          <strong>Resume:</strong>
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 16px 0",
          }}
        >
          {resumeUrl ? (
            <E.Link
              href={resumeUrl}
              style={{
                color: "#8b7355",
                textDecoration: "underline",
              }}
            >
              Link to Uploaded Resume
            </E.Link>
          ) : (
            'Resume attached or "Resume attached" if included in email system'
          )}
        </E.Text>

        {/* Submission date */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 32px 0",
          }}
        >
          <strong>Submission Date:</strong> {submissionDate}
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
