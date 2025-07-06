import * as E from "@react-email/components";

export function CareersApplyConfirmation({
  fullName,
  responseTimeHours = 48,
}: {
  fullName: string;
  responseTimeHours?: number;
}) {
  return (
    <E.Html lang="en" dir="ltr">
      <E.Container>
        <h1>
          <E.Text>Thank you for your application!</E.Text>
        </h1>
        <p>
          <E.Text>Hi {fullName},</E.Text>
        </p>
        <p>
          <E.Text>
            We've received your job application and appreciate your interest in
            joining our team.
          </E.Text>
        </p>
        <p>
          <E.Text>
            Our hiring team will review your application and resume, and we'll
            get back to you within the next {responseTimeHours} hours.
          </E.Text>
        </p>
        <p>
          <E.Text>
            Thank you for considering us as your next career opportunity!
          </E.Text>
        </p>
        <p>
          <E.Text>
            Best regards,
            <br />
            The Hiring Team
          </E.Text>
        </p>
      </E.Container>
    </E.Html>
  );
}
