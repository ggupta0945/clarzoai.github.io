import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/utils";

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "X", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line mt-16 sm:mt-24 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div className="max-w-sm">
            <Logo className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-ink-dim">{SITE.description}</p>
            <div className="flex items-center gap-2 mt-5">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-line bg-bg-surface/60 flex items-center justify-center text-ink-dim hover:text-accent-deep hover:border-accent-light/40 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Explore" links={FOOTER_LINKS.explore} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
          <FooterColumn title="Get Started" links={FOOTER_LINKS.getStarted} />
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-ink-muted">
          <span>{SITE.copyright}</span>
          <span className="font-display italic">{SITE.closing}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-eyebrow uppercase font-semibold text-ink mb-4">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink-dim hover:text-accent-deep transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
