const plans = [
  { id: "credits", title: "Class Credits" },
  { id: "packs", title: "Class Packs" },
  { id: "memberships", title: "Memberships" },
];

export default function PricingRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-20 p-8 py-20 md:p-32">
        <h1 className="text-3xl md:text-5xl font-bold">Our Pricing</h1>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full">
          {plans.map(({ id, title }) => (
            <PricingPlan key={id} title={title} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PricingPlan({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 cursor-pointer hover:scale-[102%] transition-transform duration-300">
      <h2 className="text-2xl italic font-semibold">{title}</h2>
      <div className="size-full aspect-square bg-overlay-foreground rounded-2xl" />
    </div>
  );
}
