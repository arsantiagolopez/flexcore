import React from "react";
import { cn } from "~/lib/utils";

type FieldProps = {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
  };
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  errors?: string[];
  className?: string;
};

export function Field({
  labelProps,
  inputProps,
  errors,
  className = "",
}: FieldProps) {
  const fallbackId = React.useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  return (
    <div className={className}>
      {/* Your original fieldset layout: label and input side by side */}
      <fieldset className="flex items-start gap-4">
        <label
          htmlFor={id}
          {...labelProps}
          className={cn("h-9", labelProps.className)}
        />
        <div className="flex flex-col gap-1 w-full">
          <input
            id={id}
            aria-invalid={errors?.length ? true : undefined}
            aria-describedby={errorId}
            {...inputProps}
            className={cn(
              "h-9",
              inputProps.className,
              errors?.length &&
                "outline-2 outline-destructive focus:ring-destructive/80"
            )}
          />
          {/* Error messages below the fieldset */}
          {errors?.length ? <ErrorList id={errorId} errors={errors} /> : null}
        </div>
      </fieldset>
    </div>
  );
}

type TextareaFieldProps = {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
  };
  textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  errors?: string[];
  className?: string;
};

export function TextareaField({
  labelProps,
  textareaProps,
  errors,
  className = "",
}: TextareaFieldProps) {
  const fallbackId = React.useId();
  const id = textareaProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  return (
    <div className={className}>
      {/* Your original fieldset layout: label and textarea side by side */}
      <fieldset className="flex items-center gap-4">
        <label htmlFor={id} {...labelProps} />
        <div className="flex flex-col gap-1 w-full">
          <textarea
            id={id}
            aria-invalid={errorId ? true : undefined}
            aria-describedby={errorId}
            spellCheck={false}
            {...textareaProps}
            className={cn(
              textareaProps.className,
              errors?.length &&
                "outline-2 outline-destructive focus:ring-destructive/80"
            )}
          />
          {/* Error messages below the fieldset */}
          {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
        </div>
      </fieldset>
    </div>
  );
}

type ErrorListProps = {
  id?: string;
  errors?: Array<string | null | undefined> | null;
};

export function ErrorList({ id, errors }: ErrorListProps) {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length) return null;
  return (
    <div id={id} className="pl-2">
      {errorsToRender.map((e, index) => (
        <div key={index} className="text-sm text-destructive">
          {e}
        </div>
      ))}
    </div>
  );
}
