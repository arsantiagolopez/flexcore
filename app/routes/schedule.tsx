import type { Route } from "./+types/schedule";
// import { MarianatekIntegration } from "~/components/marianatek-integration";

export default function ScheduleRoute() {
  return (
    <div className="flex flex-col min-h-[92dvh]">
      <section className="flex flex-col items-center p-8 py-20 md:p-32">
        <h1 className="text-3xl md:text-5xl font-bold">SCHEDULE</h1>
        {/* <MarianatekIntegration type="/schedule/daily" /> */}
        <div data-mariana-integrations="/schedule/daily" />
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schedule | Flexcore Pilates Studio" },
    { name: "Schedule", content: "Welcome Flexcore Pilates Studio!" },
  ];
}
