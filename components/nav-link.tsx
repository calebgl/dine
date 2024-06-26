"use client";

import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = LinkProps & {
  children?: React.ReactNode;
  className?: string;
};

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <Link
      {...props}
      className={cn(props.className, "text-sm capitalize transition-colors", {
        active: isActive(props.href.toString()),
      })}
    >
      <div className="px-6 py-3">{props.children}</div>
    </Link>
  );
}
