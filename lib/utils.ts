import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Clarzo.ai",
  loginUrl: "https://app.clarzo.ai/login",
  askUrl: "https://app.clarzo.ai/ask",
  email: "contact@clarzo.ai",
  careersEmail: "careers@clarzo.ai",
  tagline: "See Your Money. Understand Your Life.",
  description:
    "Your AI-powered wealth partner — helping you track, plan, and grow your money with personalized insights and smarter financial decisions.",
  copyright: "© 2021–2025 Clarzo. All Rights Reserved | Made with ❤️",
  closing: "Your money deserves better.",
} as const;

export function formatIndianCurrency(amount: number, withSymbol = true): string {
  const rounded = Math.round(amount);
  const negative = rounded < 0;
  const x = Math.abs(rounded).toString();
  let lastThree = x.slice(-3);
  const otherNumbers = x.slice(0, -3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return `${negative ? "-" : ""}${withSymbol ? "₹" : ""}${formatted}`;
}

export function formatCompact(amount: number): string {
  const abs = Math.abs(amount);
  if (abs >= 1e7) return `₹${(amount / 1e7).toFixed(2)} Cr`;
  if (abs >= 1e5) return `₹${(amount / 1e5).toFixed(2)} L`;
  if (abs >= 1e3) return `₹${(amount / 1e3).toFixed(1)}K`;
  return formatIndianCurrency(amount);
}
