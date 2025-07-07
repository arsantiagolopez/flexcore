import React from "react";
import { Form, useActionData, useNavigation } from "react-router";
import {
  getFormProps,
  getInputProps,
  useForm,
  type SubmissionResult,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { z } from "zod";
import { Mail } from "lucide-react";
import { ErrorList, Field, TextareaField } from "./forms";
import { Toast } from "@base-ui-components/react";

export const ContactFormSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name is required"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name is required"),
  phoneNumber: z
    .string()
    .optional()
    .transform((val) => val || undefined), // Convert empty string to undefined
  emailAddress: z
    .string({ required_error: "Email address is required" })
    .email("Please enter a valid email address"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
});

export function ContactForm() {
  const actionData = useActionData<{
    result?: SubmissionResult;
    success?: boolean;
  }>();
  const toastManager = Toast.useToastManager();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const [form, fields] = useForm({
    id: "contact-form",
    constraint: getZodConstraint(ContactFormSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ContactFormSchema });
    },
    shouldRevalidate: "onInput",
  });

  React.useEffect(() => {
    if (actionData?.success) {
      toastManager.add({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        type: "success",
      });
    }
  }, [actionData]);

  return (
    <div className="w-full">
      <Form
        {...getFormProps(form)}
        method="POST"
        className="flex flex-col items-center gap-10 md:gap-6 w-full"
      >
        {/* Honeypot inputs for spam protection - these would be rendered as hidden inputs */}
        <div style={{ display: "none" }}>
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Field
            labelProps={{
              children: "first name:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            inputProps={{
              ...getInputProps(fields.firstName, { type: "text" }),
              className:
                "w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2",
              autoComplete: "given-name",
            }}
            errors={fields.firstName.errors}
          />

          <Field
            labelProps={{
              children: "last name:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            inputProps={{
              ...getInputProps(fields.lastName, { type: "text" }),
              className:
                "w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2",
              autoComplete: "family-name",
            }}
            errors={fields.lastName.errors}
          />

          <Field
            labelProps={{
              children: "phone number:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            inputProps={{
              ...getInputProps(fields.phoneNumber, { type: "tel" }),
              className:
                "w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2",
              autoComplete: "tel",
              disabled: false, // Explicitly ensure it's not disabled
              readOnly: false, // Explicitly ensure it's not readonly
            }}
            errors={fields.phoneNumber.errors}
          />

          <Field
            labelProps={{
              children: "email address:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            inputProps={{
              ...getInputProps(fields.emailAddress, { type: "email" }),
              className:
                "w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2",
              autoComplete: "email",
            }}
            errors={fields.emailAddress.errors}
          />

          <TextareaField
            labelProps={{
              children: "message:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            textareaProps={{
              ...getInputProps(fields.message, { type: "text" }),
              rows: 3,
              className:
                "px-4 py-1.5 rounded-2xl border-0 bg-overlay-foreground focus:outline-none focus:ring-2 resize-none w-full",
            }}
            errors={fields.message.errors}
          />
        </div>

        {/* Display form-level errors using Epic Stack's ErrorList component */}
        <ErrorList id={form.errorId} errors={form.errors} />

        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-overlay-foreground px-5 py-2 w-fit hover:bg-gray-200 active:shadow-xs"
        >
          <Mail size={20} />
          {isSubmitting ? "sending..." : "send"}
        </button>
      </Form>
    </div>
  );
}
