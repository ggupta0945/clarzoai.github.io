import type { Metadata } from "next";
import { DiscoveryClient } from "@/components/discovery/DiscoveryClient";

export const metadata: Metadata = {
  title: "Stock Discovery",
  description:
    "Explore sectors, research companies, and make informed decisions. We show you the facts, the pros, and the cons — you decide what's right for you.",
};

export default function DiscoveryPage() {
  return <DiscoveryClient />;
}
