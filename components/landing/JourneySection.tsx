"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChartLine, MessagesSquare, Scale } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  label: string;
  Icon: typeof Sparkles;
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "create",
    label: "Create",
    Icon: Sparkles,
    title: "Your personalized portfolio, built for you.",
    description:
      "Tell us your financial goals, risk appetite, and timeline. Clarzo's AI creates a personalized portfolio suggestion tailored to your unique situation — not a generic template.",
    bullets: [
      "Goal-based allocation across 10+ asset classes",
      "Risk profile from your age, income & dependents",
      "Tax-efficient instrument mix",
    ],
    visual: <SuggestedAllocationMock />,
  },
  {
    id: "insights",
    label: "Insights",
    Icon: ChartLine,
    title: "Your portfolio's story — in plain English.",
    description:
      "No financial jargon. Clarzo tells you exactly how your money is performing — last month, last year, and compared to the market. Clear, honest, actionable.",
    bullets: [
      "Real returns vs Nifty/Sensex/peer investors",
      "Per-asset class performance breakdown",
      "Sector exposure, drift & overlap detection",
    ],
    visual: <InsightsMock />,
  },
  {
    id: "ask",
    label: "Ask Anything",
    Icon: MessagesSquare,
    title: "Your personal finance chatbot.",
    description:
      'Ask any question about your portfolio — in plain language. "Can I afford a new car?" "Am I saving enough for retirement?" Get instant, personalized answers.',
    bullets: [
      "Natural language, Hindi + English",
      "Grounded in your real holdings, not generic advice",
      "Multi-turn — drill into details, scenarios, what-ifs",
    ],
    visual: <ChatMock />,
  },
  {
    id: "rebalance",
    label: "Rebalancing",
    Icon: Scale,
    title: "Stay balanced, stay confident.",
    description:
      "Clarzo detects when your portfolio drifts from your ideal allocation and guides you back — for risk control and consistent growth. No guesswork required.",
    bullets: [
      "Drift alerts the moment allocation slips",
      "Specific rupee-amount rebalance suggestions",
      "Educational, never prescriptive — your call",
    ],
    visual: <RebalanceMock />,
  },
];

export function JourneySection() {
  const [active, setActive] = useState(STEPS[0].id);
  const step = STEPS.find((s) => s.id === active)!;

  return (
    <section id="features" className="section">
      <Container size="wide">
        <SectionHeader
          eyebrow="How Clarzo works"
          title={
            <>
              From scattered to <span className="text-gradient">clear</span>{" "}
              in four steps.
            </>
          }
          subtitle="Connect everything. See the big picture. Make smarter moves."
          align="center"
          className="mb-12 sm:mb-14"
        />

        {/* Tab strip */}
        <Reveal className="mb-8">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
            {STEPS.map((s, i) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-ink text-white shadow-card"
                      : "border border-line bg-white text-ink-dim hover:border-line-strong hover:text-ink"
                  )}
                >
                  <span className="font-display tabular text-xs opacity-70">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <s.Icon size={14} />
                  {s.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active step display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center"
          >
            <div>
              <div className="font-display text-eyebrow uppercase tracking-[0.18em] text-accent-deep mb-4">
                Step {STEPS.findIndex((s) => s.id === step.id) + 1} of 4
              </div>
              <h3 className="font-display text-display-md leading-tight">{step.title}</h3>
              <p className="mt-5 text-ink-dim leading-relaxed text-base sm:text-lg max-w-lg">
                {step.description}
              </p>
              <ul className="mt-7 space-y-3 max-w-md">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-dim leading-relaxed">
                    <span className="mt-1 size-5 rounded-full bg-accent-soft text-accent-deep flex items-center justify-center shrink-0">
                      <ArrowRight size={11} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* soft halo behind the visual */}
              <div
                className="absolute inset-0 -z-10 mesh-soft rounded-[2.5rem] blur-2xl"
                style={{ opacity: 0.6 }}
              />
              {step.visual}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

/* ────────── Visuals ────────── */

function MockShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass glass-edge p-6 sm:p-7 relative overflow-hidden min-h-[340px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.05), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function MockRow({
  icon,
  name,
  value,
  color,
}: {
  icon?: string;
  name: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-line last:border-0">
      <span className="flex items-center gap-2.5 text-sm">
        {icon && (
          <span className={`size-7 rounded-full flex items-center justify-center text-xs ${color}`}>
            {icon}
          </span>
        )}
        {name}
      </span>
      <span className="font-semibold text-sm tabular">{value}</span>
    </div>
  );
}

function SuggestedAllocationMock() {
  return (
    <MockShell>
      <div className="eyebrow !text-[0.65rem] mb-4">Suggested Allocation</div>
      <MockRow icon="📈" name="Large Cap Funds" value="35%" color="bg-accent-soft text-accent-deep" />
      <MockRow icon="🏛" name="Debt Funds" value="25%" color="bg-blue-100 text-chart-blue" />
      <MockRow icon="🪙" name="Gold" value="15%" color="bg-amber-100 text-gold-deep" />
      <MockRow icon="🏠" name="REITs" value="10%" color="bg-purple-100 text-chart-purple" />
      <MockRow icon="🔬" name="Small Cap" value="15%" color="bg-orange-100 text-chart-amber" />
      <div className="mt-5 rounded-xl bg-accent-soft border border-accent/20 p-3 text-xs text-accent-deep flex items-start gap-2">
        <Sparkles size={14} className="mt-0.5 shrink-0" />
        Tailored for moderate risk, 15-year horizon, and ₹50K monthly investing capacity.
      </div>
    </MockShell>
  );
}

function InsightsMock() {
  return (
    <MockShell>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="font-display text-3xl font-semibold tabular">₹24.8L</div>
          <div className="text-xs text-accent-deep mt-1 font-medium">
            +12.4% vs Nifty&apos;s +8.2%
          </div>
        </div>
        <div className="text-[0.7rem] text-ink-muted bg-bg-elevated px-2.5 py-1 rounded-lg border border-line">
          1Y Return
        </div>
      </div>
      <MockRow name="Equity Performance" value="+18.3%" />
      <MockRow name="Debt Returns" value="+7.1%" />
      <MockRow name="Gold Returns" value="+14.8%" />
      <div className="mt-5 rounded-xl bg-accent-soft border border-accent/20 p-3 text-xs text-accent-deep flex items-start gap-2">
        <Sparkles size={14} className="mt-0.5 shrink-0" />
        Your portfolio outperformed 78% of similar investors this year.
      </div>
    </MockShell>
  );
}

function ChatMock() {
  return (
    <MockShell>
      <div className="flex flex-col gap-3">
        <ChatBubble role="user">Can I afford a ₹15L car without hurting my goals?</ChatBubble>
        <ChatBubble role="ai">
          <div className="text-[0.6rem] uppercase tracking-[0.15em] text-accent-deep font-bold mb-1.5">
            Clarzo AI
          </div>
          Based on your current savings rate and portfolio growth, you can comfortably afford a ₹15L
          car if you take a 3-year loan at ~9%. Your emergency fund stays intact and retirement goal
          stays on track. Want me to show the impact on your monthly cash flow?
        </ChatBubble>
        <ChatBubble role="user">Yes, show me the breakdown</ChatBubble>
      </div>
    </MockShell>
  );
}

function ChatBubble({ role, children }: { role: "user" | "ai"; children: React.ReactNode }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] px-4 py-2.5 text-[0.85rem] leading-relaxed ${
          role === "user"
            ? "rounded-2xl rounded-br-sm bg-ink text-white"
            : "rounded-2xl rounded-bl-sm bg-bg-elevated border border-line text-ink"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function RebalanceMock() {
  return (
    <MockShell>
      <div className="text-[0.7rem] text-ink-muted mb-2 font-medium">Current Allocation</div>
      <Bar parts={[
        { pct: 52, color: "bg-accent" },
        { pct: 22, color: "bg-chart-blue" },
        { pct: 18, color: "bg-gold" },
        { pct: 8, color: "bg-chart-purple" },
      ]} />
      <div className="text-[0.7rem] text-ink-muted mt-4 mb-2 font-medium">Target Allocation</div>
      <Bar parts={[
        { pct: 45, color: "bg-accent" },
        { pct: 30, color: "bg-chart-blue" },
        { pct: 15, color: "bg-gold" },
        { pct: 10, color: "bg-chart-purple" },
      ]} />
      <div className="grid grid-cols-2 gap-2 mt-3 text-[0.72rem] text-ink-dim">
        <Legend color="bg-accent" label="Equity 52% → 45%" />
        <Legend color="bg-chart-blue" label="Debt 22% → 30%" />
        <Legend color="bg-gold" label="Gold 18% → 15%" />
        <Legend color="bg-chart-purple" label="FDs 8% → 10%" />
      </div>
      <div className="mt-4 rounded-xl bg-accent-soft border border-accent/20 p-3 text-xs text-accent-deep flex items-start gap-2">
        ⚡{" "}
        <span>Suggestion: Move ₹1.2L from equity to debt funds for optimal balance</span>
      </div>
    </MockShell>
  );
}

function Bar({ parts }: { parts: { pct: number; color: string }[] }) {
  return (
    <div className="flex h-7 rounded-lg overflow-hidden border border-line">
      {parts.map((p, i) => (
        <motion.div
          key={i}
          className={p.color}
          initial={{ width: 0 }}
          whileInView={{ width: `${p.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`size-2.5 rounded ${color}`} />
      <span>{label}</span>
    </div>
  );
}
