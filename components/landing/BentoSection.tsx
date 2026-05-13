"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Wallet,
  Target,
  Users,
  Bell,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const INSTRUMENTS = [
  { icon: "📈", label: "Stocks" },
  { icon: "📊", label: "Mutual Funds" },
  { icon: "🥇", label: "Gold & Silver" },
  { icon: "🏦", label: "Fixed Deposits" },
  { icon: "₿", label: "Crypto" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "🏛️", label: "PPF / NPS / EPF" },
  { icon: "💳", label: "Bank Accounts" },
];

const SPENDING = [
  { label: "Food & Dining", amount: "₹12,400", pct: 65, color: "bg-chart-amber" },
  { label: "Subscriptions", amount: "₹4,200", pct: 35, color: "bg-chart-blue" },
  { label: "Shopping", amount: "₹8,900", pct: 50, color: "bg-chart-purple" },
];

const GOALS = [
  { emoji: "🏠", name: "Home Down Payment — 2027", pct: 62, color: "bg-accent" },
  { emoji: "🎓", name: "Kids Education — 2034", pct: 28, color: "bg-chart-blue" },
  { emoji: "🏖️", name: "Retirement — 2048", pct: 15, color: "bg-gold" },
];

export function BentoSection() {
  return (
    <section className="section">
      <Container size="wide">
        <SectionHeader
          eyebrow="More than tracking"
          title={
            <>
              A complete <span className="text-gradient">wealth operating system</span>.
            </>
          }
          subtitle="Track spending, map goals, manage family investments — all from one place."
          align="center"
          className="mb-14"
        />

        {/* Row 1: Two large feature cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          <Reveal>
            <ModuleCard
              Icon={Link2}
              tag="All instruments"
              title="Every asset class, one view."
              body="Connect and track everything you own — from stocks and mutual funds to real estate and government schemes."
            >
              <div className="grid grid-cols-2 gap-2">
                {INSTRUMENTS.map((i) => (
                  <span
                    key={i.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2.5 text-xs sm:text-sm font-medium text-ink hover:border-accent/40 transition-colors"
                  >
                    <span>{i.icon}</span>
                    {i.label}
                  </span>
                ))}
              </div>
            </ModuleCard>
          </Reveal>

          <Reveal>
            <ModuleCard
              Icon={Target}
              tag="Goal mapping"
              title="Every rupee with a mission."
              body="Align investments with life goals — retirement, home, kids' education, vehicle. Track progress and stay on course."
            >
              <div className="space-y-2.5">
                {GOALS.map((g) => (
                  <div
                    key={g.name}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3"
                  >
                    <span className="text-xl">{g.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{g.name}</div>
                      <div className="mt-1.5 h-1 rounded-full bg-line overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${g.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${g.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-ink-dim tabular w-9 text-right">
                      {g.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </ModuleCard>
          </Reveal>
        </div>

        {/* Row 2: Four compact cards */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Reveal>
            <CompactCard
              Icon={Wallet}
              tag="Spending"
              title="Where your money goes."
              body="Category-wise spend analysis, net flow, month/week breakdowns from your bank accounts."
            >
              <div className="space-y-2.5">
                {SPENDING.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[0.72rem] font-medium">
                      <span>{s.label}</span>
                      <span className="tabular">{s.amount}</span>
                    </div>
                    <div className="mt-1 h-1 rounded-full bg-line overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${s.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CompactCard>
          </Reveal>

          <Reveal>
            <CompactCard
              Icon={Users}
              tag="Family"
              title="Joint household view."
              body="Combine yours, your spouse's, and your parents' investments for a complete picture."
            />
          </Reveal>

          <Reveal>
            <CompactCard
              Icon={Bell}
              tag="Nudges"
              title="Proactive, not noisy."
              body='"3 SIPs expire next month." "Overlapping funds detected." Quiet but timely.'
            />
          </Reveal>

          <Reveal>
            <CompactCard
              Icon={ShieldCheck}
              tag="Read-only"
              title="We never move money."
              body="Bank-grade encryption. Read-only access. Your data is yours — never sold."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ModuleCard({
  Icon,
  tag,
  title,
  body,
  children,
}: {
  Icon: typeof Link2;
  tag: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="glass glass-edge h-full p-7 sm:p-8 group">
      <div className="flex items-center justify-between mb-5">
        <div className="inline-flex items-center gap-2">
          <span className="size-10 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent-deep">
            <Icon size={18} />
          </span>
          <span className="text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-ink-muted">
            {tag}
          </span>
        </div>
        <ArrowUpRight
          size={18}
          className="text-ink-faint group-hover:text-accent-deep group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
        />
      </div>
      <h3 className="font-display text-2xl font-semibold leading-tight">{title}</h3>
      <p className="mt-3 text-sm text-ink-dim leading-relaxed max-w-md">{body}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

function CompactCard({
  Icon,
  tag,
  title,
  body,
  children,
}: {
  Icon: typeof Link2;
  tag: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="glass glass-hover h-full p-6 group">
      <div className="flex items-center gap-2 mb-4">
        <span className="size-9 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center text-accent-deep">
          <Icon size={16} />
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.15em] font-semibold text-ink-muted">
          {tag}
        </span>
      </div>
      <h4 className="font-display text-lg font-semibold leading-snug">{title}</h4>
      <p className="mt-2 text-[0.85rem] text-ink-dim leading-relaxed">{body}</p>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
