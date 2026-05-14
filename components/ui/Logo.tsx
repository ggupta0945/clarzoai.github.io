import { cn } from "@/lib/utils";

export function Logo({ className, accentClassName }: { className?: string; accentClassName?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.35rem] font-semibold tracking-tight inline-flex items-baseline",
        className
      )}
    >
      Clarzo<span className={cn("text-accent-deep", accentClassName)}>.ai</span>
    </span>
  );
}
