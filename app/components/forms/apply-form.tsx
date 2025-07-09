import React from "react";
import {
  getFormProps,
  getInputProps,
  useForm,
  type SubmissionResult,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { z } from "zod";
import { Paperclip } from "lucide-react";
import { ErrorList, Field, TextareaField } from "./forms";
import { Form, useActionData, useNavigation } from "react-router";
import { cn } from "~/lib/utils";
import { Toast } from "@base-ui-components/react";

export const ApplyFormSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(1, "Full name is required"),
  phoneNumber: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  emailAddress: z
    .string({ required_error: "Email address is required" })
    .email("Please enter a valid email address"),
  message: z
    .string()
    .optional()
    .transform((val) => val || undefined),
  resume: z
    .instanceof(File, { message: "Resume is required" })
    .refine((file) => file.size > 0, "Resume is required")
    .refine(
      (file) =>
        file.type === "application/pdf" || file.type.startsWith("application/"),
      "Resume must be a PDF or document file"
    ),
});

export function ApplyForm({ className }: { className?: string }) {
  const actionData = useActionData<{
    result?: SubmissionResult;
    success?: boolean;
  }>();
  const [selectedFile, setSelectedFile] = React.useState<string>("");
  const toastManager = Toast.useToastManager();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const [form, fields] = useForm({
    // @bug-fix – Removing the ID prop is the only way to get the
    // form to submit. Really nasty bug.
    // id: "careers-apply-form",
    constraint: getZodConstraint(ApplyFormSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ApplyFormSchema });
    },
    shouldRevalidate: "onBlur",
  });

  React.useEffect(() => {
    if (actionData?.success) {
      toastManager.add({
        title: "Application submitted!",
        description: "Thank you for applying. We'll get back to you soon.",
        type: "success",
      });
    }
  }, [actionData]);

  return (
    <div className={cn("w-full", className)}>
      <Form
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col items-center gap-10 md:gap-4 w-full"
        {...getFormProps(form)}
      >
        {/* Honeypot inputs for spam protection - these would be rendered as hidden inputs */}
        <div style={{ display: "none" }}>
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Field
            labelProps={{
              children: "full name:",
              className: "block text-base md:text-lg min-w-fit",
            }}
            inputProps={{
              ...getInputProps(fields.fullName, { type: "text" }),
              className:
                "w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2",
              autoComplete: "name",
            }}
            errors={fields.fullName.errors}
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

        <fieldset className="flex items-center gap-3 mr-auto">
          <div className="relative">
            <input
              accept=".pdf,.doc,.docx"
              required
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setSelectedFile(file ? file.name : "");
              }}
              {...getInputProps(fields.resume, { type: "file" })}
            />
            <label
              htmlFor={fields.resume.id}
              className={cn(
                "flex items-center gap-2 text-base md:text-lg min-w-fit cursor-pointer hover:underline truncate",
                fields.resume.errors && "text-destructive"
              )}
            >
              <Paperclip />
              Attach resume
            </label>
          </div>

          {selectedFile && (
            <span className="text-sm text-foreground/50 line-clamp-2">
              {selectedFile}
            </span>
          )}

          {fields.resume.errors && (
            <span className="mt-px">
              <ErrorList
                id={`${fields.resume.id}-error`}
                errors={fields.resume.errors}
              />
            </span>
          )}
        </fieldset>

        <ErrorList id={form.errorId} errors={form.errors} />

        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-overlay-foreground px-5 py-2 w-fit hover:bg-gray-200 active:shadow-xs"
        >
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </Form>
    </div>
  );
}
