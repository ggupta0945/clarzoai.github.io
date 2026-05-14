import { Lock, ShieldCheck, Eye, Server, KeyRound } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const BADGES = [
  { Icon: Lock, label: "256-bit AES encryption" },
  { Icon: ShieldCheck, label: "SOC 2 Type II compliant" },
  { Icon: Eye, label: "Read-only access" },
  { Icon: Server, label: "Data stored in India" },
  { Icon: KeyRound, label: "Two-factor auth" },
];

export function SecuritySection() {
  return (
    <section className="py-12 sm:py-16">
      <Container size="wide">
        <Reveal>
          <div className="glass px-6 sm:px-10 py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-sm">
              <div className="eyebrow mb-2">Trust & Security</div>
              <p className="font-display text-lg font-semibold leading-snug">
                100% safe. Your security and privacy are our top priority.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-dim"
                >
                  <b.Icon size={14} className="text-accent-deep" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
