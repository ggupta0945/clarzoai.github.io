import type { Metadata } from "next";
import { CalculatorsClient } from "@/components/calculators/CalculatorsClient";

export const metadata: Metadata = {
  title: "Financial Calculators",
  description:
    "Plan smarter with real numbers. Every calculator uses accurate Indian financial formulas.",
};

export default function CalculatorsPage() {
  return <CalculatorsClient />;
}
