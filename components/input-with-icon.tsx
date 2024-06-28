import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="relative ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <props.icon />
      </span>
      <input
        type={props.type}
        className={cn(
          "flex h-10 w-full rounded-md bg-background text-sm px-3 py-2 border file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "pl-9",
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
