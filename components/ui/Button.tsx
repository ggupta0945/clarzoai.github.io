import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow-accent hover:bg-accent-deep hover:-translate-y-px hover:shadow-[0_18px_42px_-12px_rgba(16,185,129,0.55)] active:translate-y-0",
  secondary:
    "bg-ink text-white hover:bg-[#0d2e4f] hover:-translate-y-px shadow-card active:translate-y-0",
  ghost:
    "bg-white text-ink hover:bg-bg-surface border border-line hover:border-line-strong shadow-[0_1px_2px_rgba(10,37,64,0.04)]",
  outline:
    "bg-white/60 text-ink border border-line-strong hover:border-accent hover:text-accent-deep backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.85rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-12 sm:h-13 px-7 text-[0.95rem]",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };
type ButtonAsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLElement, Props>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
    "whitespace-nowrap select-none",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
