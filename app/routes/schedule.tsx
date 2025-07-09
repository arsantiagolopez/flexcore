import type { Route } from "./+types/schedule";

const days = [
  { id: "monday", name: "MON" },
  { id: "tuesday", name: "TUE" },
  { id: "wednesday", name: "WED" },
  { id: "thursday", name: "THU" },
  { id: "friday", name: "FRI" },
  { id: "saturday", name: "SAT" },
  { id: "sunday", name: "SUN" },
];

export default function ScheduleRoute() {
  return (
    <div className="flex flex-col min-h-[92dvh]">
      <section className="flex flex-col items-center gap-16 md:gap-20 p-8 py-20 md:p-32">
        <h1 className="text-3xl md:text-5xl font-bold">SCHEDULE</h1>
        <ul className="flex flex-col md:flex-row items-center gap-6">
          {days.map(({ id, name }) => (
            <li key={id} className="text-center text-3xl font-semibold w-24">
              {name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schedule | Flexcore Pilates Studio" },
    { name: "Schedule", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
