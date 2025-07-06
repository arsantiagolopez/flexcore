import * as E from "@react-email/components";
import { DOMAIN, INSTAGRAM_USERNAME } from "~/lib/utils/constants";

export default function ContactConfirmation({
  responseTimeHours = 48,
}: {
  responseTimeHours?: number;
}) {
  return (
    <E.Html lang="en" dir="ltr">
      <E.Head>
        <style>
          {`
            @font-face {
              font-family: "Brittany";
              src: url("${DOMAIN}/assets/fonts/brittany.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </E.Head>
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
          Hello,
        </E.Text>

        {/* Main content paragraphs */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          Thank you for reaching out to Flexcore Pilates!
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          We've received your message and just wanted to let you know we're on
          it. One of our team members will get back to you within{" "}
          {responseTimeHours} hours.
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 24px 0",
          }}
        >
          In the meantime, feel free to browse our website, check our class
          schedule, or follow us on our socials to see what's new in our studio!
        </E.Text>

        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 32px 0",
          }}
        >
          We appreciate your patience and look forward to connecting with you
          soon!
        </E.Text>

        {/* Signature section */}
        <E.Text
          style={{
            fontSize: "16px",
            color: "#000000",
            margin: "0 0 8px 0",
          }}
        >
          Warmly,
        </E.Text>

        {/* Signature using your custom Brittany font */}
        <E.Text
          style={{
            fontFamily: '"Brittany", cursive, Georgia, serif',
            fontSize: "18px",
            color: "#000000",
            margin: "0 0 40px 0",
          }}
        >
          The Flexcore Pilates Team
        </E.Text>

        {/* Socials & Signature */}
        <div
          style={{
            marginTop: "60px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Social icons floated left */}
          <div style={{ float: "left" }}>
            <E.Link
              href={DOMAIN}
              style={{
                textDecoration: "none",
                marginRight: "16px",
                display: "inline-block",
              }}
            >
              <E.Img
                src={`${DOMAIN}/assets/icons/globe.webp`}
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
              }}
            >
              <E.Img
                src={`${DOMAIN}/assets/icons/instagram.webp`}
                alt="Follow us on Instagram"
                width="24"
                height="24"
              />
            </E.Link>
          </div>

          {/* Logo floated right */}
          <div style={{ float: "right" }}>
            <E.Img
              src={`${DOMAIN}/assets/images/email-signature.webp`}
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
