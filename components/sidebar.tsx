"use client";

import {
  House,
  LayoutGrid,
  ReceiptText,
  Settings,
  UtensilsCrossed,
} from "lucide-react";

import { Separator } from "./ui/separator";
import Nav from "./nav";

export default function Sidebar() {
  return (
    <section className="flex flex-col gap-6 ">
      <header className="space-y-2">
        <div className="pl-2 pr-6 pt-6 flex gap-2 justify-center items-center">
          <UtensilsCrossed className="size-8" />
          <h1 className="text-xl font-bold">Dine!</h1>
        </div>
      </header>
      <div className="px-6">
        <Separator className="bg-stone-200" />
      </div>
      <section className="space-y-2">
        <h2 className="capitalize text-xs font-semibold px-4">main menu</h2>
        <nav className="grid font-semibold text-sm">
          <Nav
            links={[
              {
                id: "home",
                name: "home",
                icon: House,
                path: "/",
              },
              {
                id: "explore",
                name: "explore",
                icon: LayoutGrid,
                path: "/explore",
              },
              {
                id: "orders",
                name: "orders",
                icon: ReceiptText,
                path: "/orders",
              },
            ]}
          />
        </nav>
      </section>
      <div className="px-6">
        <Separator />
      </div>
      <footer className="space-y-2 pb-6">
        <h2 className="capitalize text-xs font-semibold px-4">Others</h2>
        <Nav
          links={[
            {
              id: "settings",
              name: "settings",
              icon: Settings,
              path: "/Settings",
            },
          ]}
        />
      </footer>
    </section>
  );
}
