import type { Metadata } from "next";
import { KnowledgeClient } from "@/components/knowledge/KnowledgeClient";

export const metadata: Metadata = {
  title: "Knowledge Repo",
  description:
    "Articles, guides, and tools to help you make smarter financial decisions. No jargon. No hidden agendas. Just clarity.",
};

export default function KnowledgePage() {
  return <KnowledgeClient />;
}
