import type { Route } from "./+types/privacy-policy";

export function PrivacyPolicyRoute() {
  return <></>;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Flexcore Pilates Studio" },
    { name: "Privacy Policy", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
