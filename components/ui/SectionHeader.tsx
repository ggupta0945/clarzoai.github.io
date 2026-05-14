import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center mx-auto", "max-w-3xl", className)}>
      {eyebrow && (
        <div className={cn("eyebrow mb-5", align === "center" && "justify-center")}>{eyebrow}</div>
      )}
      <h2 className="font-display text-display-lg text-ink">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg text-ink-dim leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
