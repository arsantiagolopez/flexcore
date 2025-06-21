import type { Route } from "./+types/terms-and-conditions";

export function TermsAndConditionsRoute() {
  return <></>;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms and Conditions | Flexcore Pilates Studio" },
    {
      name: "Terms and Conditions",
      content: "Welcome Flexcore Pilates Studio!",
    },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
