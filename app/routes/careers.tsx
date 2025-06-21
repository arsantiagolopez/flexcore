import type { Route } from "./+types/careers";

export default function CareersRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-12 p-8 py-20 md:p-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold">Careers</h1>
        <div className="flex flex-col gap-20 md:gap-4 w-full"></div>
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers | Flexcore Pilates Studio" },
    { name: "Careers", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
