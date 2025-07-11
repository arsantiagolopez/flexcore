import { MarianatekIntegration } from "~/components/marianatek-integration";
import type { Route } from "./+types/schedule";

export default function JoinRoute() {
  return (
    <div className="flex flex-col min-h-[92dvh]">
      <section className="flex flex-col items-center p-8 py-20 md:p-32">
        <h1 className="text-3xl md:text-5xl font-bold">JOIN NOW</h1>
        <MarianatekIntegration type="/account/create" />
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Join Now | Flexcore Pilates Studio" },
    { name: "Join Now", content: "Welcome Flexcore Pilates Studio!" },
  ];
}
