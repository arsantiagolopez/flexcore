import * as E from "@react-email/components";

export function CareersApplyNotification({
  fullName,
  emailAddress,
  phoneNumber,
  message,
}: {
  fullName: string;
  emailAddress: string;
  phoneNumber?: string;
  message?: string;
}) {
  return (
    <E.Html lang="en" dir="ltr">
      <E.Container>
        <h1>
          <E.Text>New Job Application Received</E.Text>
        </h1>
        <h2>
          <E.Text>Applicant Details:</E.Text>
        </h2>
        <p>
          <E.Text>
            <strong>Name:</strong> {fullName}
          </E.Text>
        </p>
        <p>
          <E.Text>
            <strong>Email:</strong> {emailAddress}
          </E.Text>
        </p>
        {phoneNumber && (
          <p>
            <E.Text>
              <strong>Phone:</strong> {phoneNumber}
            </E.Text>
          </p>
        )}
        {message && (
          <>
            <h2>
              <E.Text>Message:</E.Text>
            </h2>
            <p>
              <E.Text>{message}</E.Text>
            </p>
          </>
        )}
        <p>
          <E.Text>
            <strong>Note:</strong> Resume attachment is included with this
            application.
          </E.Text>
        </p>
      </E.Container>
    </E.Html>
  );
}
