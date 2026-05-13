import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => (
    <div ref={ref} className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)} {...props} />
  )
);
Container.displayName = "Container";
