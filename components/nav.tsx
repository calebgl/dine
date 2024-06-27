"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import type { UUID } from "node:crypto";

import { cn } from "@/lib/utils";

type NavProps = {
  links: {
    id: string | UUID;
    name: string;
    path: string;
    icon: LucideIcon;
  }[];
};

export default function Nav(props: NavProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="grid font-semibold text-sm">
      {props.links.map((link) => (
        <Link
          className="text-sm capitalize px-4"
          href={link.path}
          key={link.id}
        >
          <div
            className={cn(
              "px-4 py-3 flex gap-2 items-center rounded-md transition-colors",
              isActive(link.path) && "bg-stone-100/90",
            )}
          >
            <link.icon />
            {link.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
