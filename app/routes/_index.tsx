import { VercelImage } from "~/components/vercel-image";
import type { Route } from "./+types/_index";

export default function HomeRoute() {
  return (
    <div className="flex flex-col">
      <section className="relative flex items-center justify-center h-[92dvh]">
        <VercelImage
          src="/assets/images/hero.webp"
          alt="Hero image"
          className="size-full object-[50%_48%]"
          priority={true}
        />
        <VercelImage
          src="/assets/images/logo-white.webp"
          alt="Hero logo"
          className="absolute h-auto w-2/3 md:w-[600px] -mt-10"
          priority={true}
        />
      </section>
      <section className="flex flex-col-reverse md:flex-row items-center gap-20 md:gap-20 lg:gap-28 xl:gap-40 md:h-dvh p-8 md:px-14 py-20 md:py-20">
        <div className="relative flex items-center justify-center h-full w-full min-w-[35dvw] rounded-t-full overflow-hidden">
          <div className="absolute flex flex-col items-center gap-4 lg:gap-6">
            <p className="text-4xl lg:text-6xl text-overlay-foreground select-none">
              Welcome to
            </p>
            <VercelImage
              src="/assets/images/logo-white.webp"
              alt="Logo white"
              className="w-2/3 lg:w-1/2"
              priority={true}
            />
          </div>
          <VercelImage
            src="/assets/images/1.webp"
            alt="Welcome image"
            priority={true}
          />
        </div>

        <div className="flex flex-col text-base md:text-lg text-center gap-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <p>
              Experience the power of movement in our infrared-heated studio,
              where every class is designed to meet you where you are. From
              high-energy sessions with weights to foundational Pilates that
              reconnects you to your core, we’ve got a class for every body and
              every goal.
            </p>
            <p>
              At Flexcore pilates, we empower individuals through mindful
              movement, meaningful connections and elevated wellness. Our studio
              is more than a place to move—it’s a space to belong. We believe in
              the power of community, where familiar faces and shared commitment
              create connection beyond the mat.
            </p>
            <p>
              Step into the heated room and reconnect with your most empowered
              self—physically, mentally, and energetically.
            </p>
          </div>

          <p className="text-2xl font-brittany">The flexcore pilates team</p>
        </div>
      </section>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flexcore Pilates Studio | Home" },
    { name: "home", content: "Welcome Flexcore Pilates Studio!" },
    {
      tagName: "link",
      rel: "preload",
      href: "/assets/images/hero.webp",
      as: "image",
    },
  ];
}
