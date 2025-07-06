import * as E from "@react-email/components";

export function ContactConfirmation({
  firstName,
  responseTimeHours = 48,
}: {
  firstName: string;
  responseTimeHours?: number;
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
        }}
      >
        {/* Main content */}
        <E.Section style={{ marginBottom: "40px" }}>
          <E.Text
            style={{
              fontSize: "20px",
              fontWeight: "300",
              color: "#2c2c2c",
              margin: "0 0 24px 0",
              lineHeight: "1.4",
            }}
          >
            Hi {firstName},
          </E.Text>

          <E.Text
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#2c2c2c",
              margin: "0 0 24px 0",
            }}
          >
            Thank you for reaching out to Flexcore Pilates! We've received your
            message and just wanted to let you know we're on it.
          </E.Text>

          <E.Section
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "8px",
              margin: "24px 0",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <E.Text
              style={{
                fontSize: "16px",
                color: "#2c2c2c",
                margin: "0",
                fontWeight: "400",
              }}
            >
              One of our team members will get back to you within{" "}
              <strong>{responseTimeHours} hours</strong>
            </E.Text>
          </E.Section>

          <E.Text
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#2c2c2c",
              margin: "24px 0",
            }}
          >
            In the meantime, feel free to browse our{" "}
            <E.Link
              href={process.env.DOMAIN}
              style={{
                color: "#8b7355",
                textDecoration: "underline",
                textDecorationColor: "#d4c5b3",
              }}
            >
              website
            </E.Link>
            , check our class schedule, or follow us on our socials to see
            what's new in our studio.
          </E.Text>

          <E.Text
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#2c2c2c",
              margin: "24px 0 32px 0",
            }}
          >
            We appreciate your patience and look forward to connecting with you
            soon!
          </E.Text>

          <E.Text
            style={{
              fontSize: "16px",
              color: "#2c2c2c",
              margin: "0 0 24px 0",
              fontStyle: "italic",
            }}
          >
            Warmly,
          </E.Text>

          {/* Your logo here - keeping your original */}
          <E.Img
            src={`${process.env.DOMAIN}/assets/images/email.webp`}
            alt={`${process.env.BRAND_NAME} Logo`}
            width="100"
            height="auto"
            style={{ margin: "0 0 24px 0" }}
          />
        </E.Section>

        {/* Social links */}
        <E.Section
          style={{
            textAlign: "center",
            marginTop: "40px",
            paddingTop: "32px",
            borderTop: "1px solid #d4c5b3",
          }}
        >
          <E.Text
            style={{ marginBottom: "16px", fontSize: "14px", color: "#8b7355" }}
          >
            Our socials:
          </E.Text>

          <E.Section
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <E.Link
              href={`https://instagram.com/${process.env.INSTAGRAM_USERNAME}`}
              style={{
                color: "#8b7355",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Instagram
            </E.Link>
            <E.Text
              style={{
                color: "#d4c5b3",
                margin: "0",
                display: "inline",
              }}
            >
              •
            </E.Text>
            <E.Link
              href={process.env.DOMAIN}
              style={{
                color: "#8b7355",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Website
            </E.Link>
          </E.Section>
        </E.Section>
      </E.Container>
    </E.Html>
  );
}
