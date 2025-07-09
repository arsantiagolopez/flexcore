import { Image } from "~/components/image";
import type { Route } from "./+types/classes";

const classes = [
  {
    id: "classic-core",
    label: "Classic Core",
    image: "/assets/images/2.webp",
    content: (
      <div className="flex flex-col gap-6 text-center">
        <p className="italic text-lg">Low intensity · Foundational movement</p>
        <p>
          Rediscover the roots of Pilates in this low-intensity, mat-based class
          that honors the classical repertoire.{" "}
          <span className="italic font-bold">Classic Core</span> focuses on
          precision, breath, and control—building deep abdominal strength,
          posture, and alignment with the use of minimal weights. Ideal for
          beginners, those returning to movement, or anyone seeking a mindful
          reset, this class moves at a deliberate pace to reinforce proper
          technique and deepen body awareness.
        </p>
        <p>
          Perfect for all levels—especially those who appreciate the power of
          simplicity.
        </p>
      </div>
    ),
  },
  {
    id: "sculpt-core",
    label: "Sculpt Core",
    image: "/assets/images/3.webp",
    content: (
      <div className="flex flex-col gap-6 text-center">
        <p className="italic text-lg">Full-body strength · Muscle-building</p>
        <p>
          <span className="italic font-bold">Sculpt Core</span> is your go-to
          class for building lean muscle, boosting metabolism, and taking your
          Pilates strength to the next level. This fast-paced, full-body workout
          uses heavier weights and high-intensity sequences to drive serious
          muscle engagement and calorie burn. With minimal rest and nonstop
          movement, you'll challenge your core while sculpting arms, legs, and
          glutes through resistance-based training.
        </p>
        <p>
          Expect sweat, power, and results. Best for intermediate to advanced
          clients ready to lift heavier and move harder.
        </p>
      </div>
    ),
  },
];

export default function ClassesRoute() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center gap-16 md:gap-12 p-8 py-20 md:p-20 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold">CLASSES</h1>
        <div className="flex flex-col gap-20 md:gap-4 w-full">
          {classes.map(({ id, label, image, content }) => (
            <ClassLayout
              key={id}
              label={label}
              image={image}
              content={content}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ClassLayout({
  label,
  image,
  content,
}: Pick<(typeof classes)[number], "label" | "image" | "content">) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 md:p-8 rounded-[76px] md:hover:outline-4 md:outline-overlay-foreground transition-all ease-in-out duration-500">
      <div className="relative flex items-center justify-center overflow-hidden min-w-full md:min-w-80 aspect-square rounded-[76px]">
        <Image alt={label} src={image} priority={true} />
        <div className="absolute flex items-center justify-center max-w-20 text-center select-none">
          <h2 className="text-3xl md:text-4xl text-overlay-foreground italic font-semibold">
            {label}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        {content}
        <button className="italic rounded-full bg-overlay-foreground px-10 py-1.5 w-fit hover:bg-overlay-foreground/70 active:shadow-xs">
          book now
        </button>
      </div>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Classes | Flexcore Pilates Studio" },
    { name: "Classes", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
