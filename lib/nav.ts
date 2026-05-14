export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Discovery", href: "/discovery" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "Knowledge Repo", href: "/knowledge" },
    { label: "Calculators", href: "/calculators" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy & Security", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  getStarted: [
    { label: "Login", href: "https://app.clarzo.ai/login" },
    { label: "Review Portfolio", href: "https://app.clarzo.ai/login" },
    { label: "Talk to Expert", href: "https://app.clarzo.ai/ask" },
  ],
} as const;
