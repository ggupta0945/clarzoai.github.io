export const PRINCIPLES = [
  {
    title: "Clarity over features.",
    text: "A financial product that overwhelms users has failed, no matter how powerful it is. Every screen, every interaction, every word should earn its place.",
  },
  {
    title: "Craft is a first principle.",
    text: "We obsess over the details — clean APIs, well-tuned animations, microcopy that actually helps. Nothing ships until it feels right.",
  },
  {
    title: "Ownership beats hierarchy.",
    text: "We're too small for layers. You'll own real problems end-to-end, make calls that matter, and be responsible for the outcomes.",
  },
  {
    title: "Honesty over comfort.",
    text: "The hard conversations make the team stronger. We say the thing that's hard to say, because we assume the best of each other.",
  },
] as const;

export type Role = {
  id: string;
  emoji: string;
  department: string;
  type: string;
  title: string;
  overview: string;
  responsibilities: string[];
  stackLabel: string;
  stack: string[];
  bonusLabel: string;
  bonus: string[];
  mattersLabel: string;
  matters: string[];
};

export const ROLES: Role[] = [
  {
    id: "backend",
    emoji: "🛠️",
    department: "Engineering",
    type: "Founding Full-time",
    title: "Founding Engineer (Backend)",
    overview:
      "You'll own the backend end-to-end — APIs, infrastructure, data pipelines, integrations, security. You decide the architecture. You ship the system. You set the bar for the engineers who come after you.",
    responsibilities: [
      "Designing and shipping the core API and services that power the Clarzo product",
      "Building integrations with Account Aggregator, KYC, broker APIs, and payment rails",
      "Owning data infrastructure — ingestion, modelling, storage, observability",
      "Setting up security, auth, and compliance foundations for a fintech product",
      "Making the architectural calls and writing the playbook for the engineering team",
    ],
    stackLabel: "Core stack",
    stack: ["Python", "Node.js", "PostgreSQL", "REST / GraphQL", "AWS / GCP"],
    bonusLabel: "Bonus, not required",
    bonus: ["Account Aggregator", "KYC", "Broker APIs", "Payments"],
    mattersLabel: "What matters most",
    matters: [
      "Can you ship clean code, fast, and own the system once it's live?",
      "Do you reason from first principles, not from frameworks?",
      "Are you ready to be the most senior engineer in the room — and act like it?",
    ],
  },
  {
    id: "design",
    emoji: "🎨",
    department: "Design",
    type: "Founding Full-time",
    title: "Product Designer",
    overview:
      "You'll own the product experience — flows, dashboards, microcopy, animations, the feel of every single screen. Portfolio of shipped work matters way more than where you studied or worked.",
    responsibilities: [
      "End-to-end product flows — onboarding, dashboards, insights, recommendations",
      "The visual system, motion language, and component library that defines Clarzo",
      "Microcopy and product writing that makes finance feel human, not jargon-heavy",
      "Prototyping, user testing, and iterating with engineers in tight loops",
      "Setting the design bar — every screen should feel inevitable, not designed",
    ],
    stackLabel: "Tools you'll likely use",
    stack: ["Figma", "Framer", "Rive / Lottie", "Notion"],
    bonusLabel: "Bonus, not required",
    bonus: ["Fintech experience", "Motion design", "Front-end skills", "Brand sensibility"],
    mattersLabel: "What matters most",
    matters: [
      "A portfolio of shipped work — real products, real users, real outcomes",
      "Obsession with craft — micro-interactions, spacing, copy, the feel of a click",
      "You can lead a product, not just take tickets — and partner with engineers as peers",
    ],
  },
];
