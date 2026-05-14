import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  edge?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-7 sm:p-9",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, edge = false, padding = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass relative overflow-hidden",
        hover && "glass-hover",
        edge && "glass-edge",
        paddings[padding],
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-deep",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-dim shadow-[0_1px_2px_rgba(10,37,64,0.04)]",
        className
      )}
    >
      {children}
    </span>
  );
}
