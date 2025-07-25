import type { Route } from "./+types/schedule";
// import { MarianatekIntegration } from "~/components/marianatek-integration";

export default function AccountRoute() {
  return (
    <div className="flex flex-col min-h-[92dvh]">
      <section className="flex flex-col items-center p-8 py-20 md:p-32">
        <h1 className="text-3xl md:text-5xl font-bold">ACCOUNT</h1>
        {/* <MarianatekIntegration type="/account" /> */}
        <div data-mariana-integrations="/account" />
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Account | Flexcore Pilates Studio" },
    { name: "Account", content: "Welcome Flexcore Pilates Studio!" },
  ];
}
