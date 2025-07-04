import { Paperclip } from "lucide-react";
import React, { useState } from "react";

type FormData = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
};

export function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-10 md:gap-4 w-full"
    >
      <div className="flex flex-col gap-4 w-full">
        <fieldset className="flex items-center gap-4">
          <label
            htmlFor="firstName"
            className="block text-base md:text-lg mb-2 min-w-fit"
          >
            full name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2"
            required
          />
        </fieldset>

        <fieldset className="flex items-center gap-4">
          <label
            htmlFor="phoneNumber"
            className="block text-base md:text-lg mb-2 min-w-fit"
          >
            phone number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2"
            required
          />
        </fieldset>

        <fieldset className="flex items-center gap-4">
          <label
            htmlFor="emailAddress"
            className="block text-base md:text-lg mb-2 min-w-fit"
          >
            email address:
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full px-4 py-1.5 rounded-full border-0 bg-overlay-foreground focus:outline-none focus:ring-2"
            required
          />
        </fieldset>

        <fieldset className="flex items-center gap-4">
          <label
            htmlFor="message"
            className="block text-base md:text-lg mb-2 min-w-fit"
          >
            message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="px-4 py-1.5 rounded-2xl border-0 bg-overlay-foreground focus:outline-none focus:ring-2 resize-none w-full"
            required
          />
        </fieldset>
      </div>

      <fieldset className="flex items-center mr-auto gap-2">
        <Paperclip />
        <label
          htmlFor="message"
          className="block text-base md:text-lg min-w-fit"
        >
          Attach resume
        </label>
      </fieldset>

      <button
        type="submit"
        className="flex items-center gap-2 rounded-full bg-overlay-foreground px-5 py-2 w-fit hover:bg-overlay-foreground/70 active:shadow-xs"
      >
        submit
      </button>
    </form>
  );
}
