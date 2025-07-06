import * as E from "@react-email/components";

export function ContactNotification({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  message,
}: {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  message: string;
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
        {/* Header with elegant spacing */}
        <E.Section style={{ textAlign: "center", marginBottom: "48px" }}>
          <E.Text
            style={{
              fontSize: "28px",
              fontWeight: "300",
              color: "#2c2c2c",
              margin: "0",
              letterSpacing: "0.5px",
            }}
          >
            New Contact Inquiry
          </E.Text>
          <E.Hr
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "#d4c5b3",
              border: "none",
              margin: "24px auto",
            }}
          />
        </E.Section>

        {/* Contact details in clean cards */}
        <E.Section
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
            marginBottom: "32px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <E.Row>
            <E.Column>
              <E.Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8b7355",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: "0 0 8px 0",
                }}
              >
                Contact Information
              </E.Text>
            </E.Column>
          </E.Row>

          <E.Row style={{ marginBottom: "16px" }}>
            <E.Column style={{ width: "30%" }}>
              <E.Text
                style={{
                  fontSize: "16px",
                  color: "#8b7355",
                  margin: "0",
                }}
              >
                Name
              </E.Text>
            </E.Column>
            <E.Column style={{ width: "70%" }}>
              <E.Text
                style={{
                  fontSize: "16px",
                  color: "#2c2c2c",
                  margin: "0",
                  fontWeight: "400",
                }}
              >
                {firstName} {lastName}
              </E.Text>
            </E.Column>
          </E.Row>

          <E.Row style={{ marginBottom: "16px" }}>
            <E.Column style={{ width: "30%" }}>
              <E.Text
                style={{
                  fontSize: "16px",
                  color: "#8b7355",
                  margin: "0",
                }}
              >
                Email
              </E.Text>
            </E.Column>
            <E.Column style={{ width: "70%" }}>
              <E.Text
                style={{
                  fontSize: "16px",
                  color: "#2c2c2c",
                  margin: "0",
                }}
              >
                {emailAddress}
              </E.Text>
            </E.Column>
          </E.Row>

          {phoneNumber && (
            <E.Row>
              <E.Column style={{ width: "30%" }}>
                <E.Text
                  style={{
                    fontSize: "16px",
                    color: "#8b7355",
                    margin: "0",
                  }}
                >
                  Phone
                </E.Text>
              </E.Column>
              <E.Column style={{ width: "70%" }}>
                <E.Text
                  style={{
                    fontSize: "16px",
                    color: "#2c2c2c",
                    margin: "0",
                  }}
                >
                  {phoneNumber}
                </E.Text>
              </E.Column>
            </E.Row>
          )}
        </E.Section>

        {/* Message section */}
        <E.Section>
          <E.Text
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#8b7355",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "0 0 16px 0",
            }}
          >
            Message
          </E.Text>

          <E.Section
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "8px",
              borderLeft: "4px solid #d4c5b3",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <E.Text
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#2c2c2c",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              "{message}"
            </E.Text>
          </E.Section>
        </E.Section>

        {/* Footer */}
        <E.Section
          style={{
            textAlign: "center",
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid #d4c5b3",
          }}
        >
          <E.Text
            style={{
              fontSize: "12px",
              color: "#8b7355",
              margin: "0",
            }}
          >
            Sent from Flexcore Pilates Studio
          </E.Text>
        </E.Section>
      </E.Container>
    </E.Html>
  );
}
