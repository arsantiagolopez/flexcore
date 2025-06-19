import type React from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <main className="size-full md:-mt-20">{children}</main>
      <Footer />
    </div>
  );
}
