"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FRAME =
  "glass glass-edge p-6 sm:p-7 relative overflow-hidden min-h-[320px]";

const FRAME_GLOW = (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.07), transparent 60%)",
    }}
  />
);

/* ── 1. Portfolio Connect ────────────────────────────────────────────── */
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

export function VisualConnect() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="eyebrow !text-[0.65rem] mb-4">Connected Instruments</div>
        <div className="grid grid-cols-2 gap-2">
          {INSTRUMENTS.map((i, idx) => (
            <motion.div
              key={i.label}
              className="flex items-center gap-2 rounded-xl border border-line bg-bg-elevated/70 px-3 py-2.5 text-sm hover:border-accent-light/40 hover:bg-accent/8 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <span>{i.icon}</span>
              {i.label}
            </motion.div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-accent/30 bg-accent/8 px-4 py-3 flex items-center gap-2.5 text-sm text-accent-deep">
          <Check size={14} strokeWidth={3} />
          All accounts synced — total net worth: <span className="font-bold tabular">₹24,87,350</span>
        </div>
      </div>
    </div>
  );
}

/* ── 2. Insights ─────────────────────────────────────────────────────── */
export function VisualInsights() {
  const rows = [
    { label: "Equity Performance", value: "+18.3%", green: true },
    { label: "Debt Returns", value: "+7.1%", green: true },
    { label: "Gold Returns", value: "+14.8%", green: true },
    { label: "Crypto", value: "-4.2%", green: false },
  ];
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="font-display text-3xl font-semibold tabular">₹24.8L</div>
            <div className="text-xs text-accent-deep mt-1">+12.4% vs Nifty&apos;s +8.2%</div>
          </div>
          <span className="text-[0.7rem] text-ink-muted bg-bg-elevated px-2.5 py-1 rounded-lg">1Y Return</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-2.5 border-b border-line/70 last:border-0"
          >
            <span className="text-sm text-ink-dim">{r.label}</span>
            <span className={`text-sm font-semibold tabular ${r.green ? "text-accent-deep" : "text-chart-red"}`}>
              {r.value}
            </span>
          </div>
        ))}
        <div className="mt-5 rounded-xl border border-accent/20 bg-accent/8 p-3 text-xs text-accent-deep">
          💡 Your portfolio outperformed 78% of similar investors this year.
        </div>
      </div>
    </div>
  );
}

/* ── 3. ClarzoGPT ────────────────────────────────────────────────────── */
const CHAT = [
  { role: "user", text: "What's my best performing asset?" },
  {
    role: "ai",
    text: "Your gold holdings are up 14.8% this year — the best in your portfolio. Equity MFs follow at +12.4%. Want a breakdown by individual fund?",
  },
  { role: "user", text: "Am I too exposed to small caps?" },
  {
    role: "ai",
    text: "Yes — 38% of your equity is in small caps. For your risk profile, cap at 20%. Consider shifting ₹1.5L into flexi-cap funds for a safer balance.",
  },
  { role: "user", text: "Agar main ₹2000 har mahine invest karu, kya milega?" },
  {
    role: "ai",
    text: "At 12% annual return, ₹2,000/month SIP would grow to ~₹5.9L in 10 years and ~₹20L in 20 years. Want me to suggest funds that match?",
  },
] as const;

export function VisualClarzoGPT() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative flex flex-col gap-2.5 max-h-[420px] overflow-y-auto no-scrollbar">
        {CHAT.map((m, i) => (
          <motion.div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <div
              className={`max-w-[88%] px-4 py-2.5 text-[0.82rem] leading-relaxed ${
                m.role === "user"
                  ? "rounded-2xl rounded-br-sm bg-accent-deep text-white"
                  : "rounded-2xl rounded-bl-sm bg-bg-elevated border border-line text-ink"
              }`}
            >
              {m.role === "ai" && (
                <div className="text-[0.6rem] uppercase tracking-[0.15em] text-accent-deep font-bold mb-1.5">
                  ClarzoGPT
                </div>
              )}
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── 4. Rebalancing ──────────────────────────────────────────────────── */
function Bar({ parts }: { parts: { pct: number; color: string }[] }) {
  return (
    <div className="flex h-7 rounded-lg overflow-hidden">
      {parts.map((p, i) => (
        <motion.div
          key={i}
          className={p.color}
          initial={{ width: 0 }}
          whileInView={{ width: `${p.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.08 }}
        />
      ))}
    </div>
  );
}

export function VisualRebalance() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="text-[0.7rem] text-ink-muted mb-2">Current Allocation</div>
        <Bar parts={[
          { pct: 52, color: "bg-accent-deep" },
          { pct: 22, color: "bg-chart-blue" },
          { pct: 18, color: "bg-gold" },
          { pct: 8, color: "bg-chart-purple" },
        ]} />
        <div className="text-[0.7rem] text-ink-muted mt-4 mb-2">Target Allocation</div>
        <Bar parts={[
          { pct: 45, color: "bg-accent-deep" },
          { pct: 30, color: "bg-chart-blue" },
          { pct: 15, color: "bg-gold" },
          { pct: 10, color: "bg-chart-purple" },
        ]} />
        <div className="grid grid-cols-2 gap-2 mt-3 text-[0.72rem] text-ink-dim">
          {[
            ["bg-accent-deep", "Equity 52% → 45%"],
            ["bg-chart-blue", "Debt 22% → 30%"],
            ["bg-gold", "Gold 18% → 15%"],
            ["bg-chart-purple", "FDs 8% → 10%"],
          ].map(([c, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className={`size-2.5 rounded ${c}`} />
              <span>{l}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-accent/8 border border-accent/20 p-3 text-xs text-accent-deep flex items-start gap-2">
          ⚡{" "}
          <span>Suggestion: Move ₹1.2L from equity to debt funds for optimal balance</span>
        </div>
      </div>
    </div>
  );
}

/* ── 5. Spending ─────────────────────────────────────────────────────── */
const SPEND = [
  { label: "Food & Dining", amt: "₹12,400", pct: 70, color: "bg-chart-amber" },
  { label: "Shopping", amt: "₹8,900", pct: 50, color: "bg-chart-purple" },
  { label: "Subscriptions", amt: "₹4,200", pct: 30, color: "bg-chart-blue" },
  { label: "Transport", amt: "₹3,800", pct: 25, color: "bg-accent-light" },
];

export function VisualSpending() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="eyebrow !text-[0.65rem] mb-4">Monthly Breakdown · Mar 2026</div>
        <div className="space-y-4">
          {SPEND.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-sm">
                <span>{s.label}</span>
                <span className="tabular font-semibold">{s.amt}</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-line overflow-hidden">
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
        <div className="mt-5 rounded-xl bg-accent/8 border border-accent/20 p-3 text-sm text-accent-deep flex items-center justify-between">
          <span>Net Flow</span>
          <span className="font-bold tabular">+₹34,200 saved</span>
        </div>
      </div>
    </div>
  );
}

/* ── 6. Goals ────────────────────────────────────────────────────────── */
const GOALS = [
  { emoji: "🏠", name: "Home Down Payment — 2027", pct: 62, color: "bg-accent-light" },
  { emoji: "🚗", name: "New Car — 2026", pct: 84, color: "bg-chart-amber" },
  { emoji: "🎓", name: "Kids Education — 2034", pct: 28, color: "bg-chart-blue" },
  { emoji: "🏖️", name: "Retirement Corpus — 2048", pct: 15, color: "bg-chart-purple" },
];

export function VisualGoals() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="eyebrow !text-[0.65rem] mb-4">Your Goals</div>
        <div className="space-y-3">
          {GOALS.map((g) => (
            <div key={g.name} className="flex items-center gap-3 rounded-xl bg-bg-elevated/70 border border-line px-4 py-3">
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
              <span className="text-xs font-bold text-ink-dim tabular w-9 text-right">{g.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 7. Family ───────────────────────────────────────────────────────── */
const MEMBERS = [
  { i: "A", n: "Arjun (You)", r: "Primary", a: "₹24.8L", g: "from-emerald-600 to-emerald-400" },
  { i: "S", n: "Sneha", r: "Spouse", a: "₹18.2L", g: "from-blue-500 to-indigo-500" },
  { i: "D", n: "Dad", r: "Parent", a: "₹22.1L", g: "from-amber-500 to-orange-500" },
  { i: "M", n: "Mom", r: "Parent", a: "₹13.3L", g: "from-purple-500 to-fuchsia-500" },
];

export function VisualFamily() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative">
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="eyebrow !text-[0.65rem]">Family Net Worth</div>
            <div className="font-display text-3xl font-semibold tabular mt-1">₹78.4L</div>
          </div>
        </div>
        <div className="space-y-2.5">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.n}
              className="flex items-center gap-3 rounded-xl bg-bg-elevated/70 border border-line px-4 py-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className={`size-10 rounded-full bg-gradient-to-br ${m.g} flex items-center justify-center text-white font-bold`}>
                {m.i}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{m.n}</div>
                <div className="text-xs text-ink-muted">{m.r}</div>
              </div>
              <div className="font-display font-semibold tabular text-sm">{m.a}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 8. Expert ───────────────────────────────────────────────────────── */
const EXPERTS = [
  { i: "RS", n: "Rahul Sharma, CFP", r: "Retirement & Tax Planning", rt: "4.9", g: "from-emerald-600 to-emerald-400" },
  { i: "PM", n: "Priya Mehta, CFA", r: "Equity & Mutual Funds", rt: "4.8", g: "from-blue-500 to-indigo-500" },
  { i: "AK", n: "Arjun Kapoor, CFP", r: "Wealth & Estate Planning", rt: "4.9", g: "from-amber-500 to-orange-500" },
];

export function VisualExpert() {
  return (
    <div className={FRAME}>
      {FRAME_GLOW}
      <div className="relative space-y-3">
        <div className="eyebrow !text-[0.65rem] mb-3">Available Experts</div>
        {EXPERTS.map((e, i) => (
          <motion.div
            key={e.n}
            className="flex items-center gap-4 rounded-xl bg-bg-elevated/70 border border-line p-4 hover:border-accent-light/40 transition-colors"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`size-11 rounded-full bg-gradient-to-br ${e.g} flex items-center justify-center text-white font-bold text-sm`}>
              {e.i}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">{e.n}</div>
              <div className="text-xs text-ink-muted">{e.r}</div>
              <div className="text-[0.7rem] text-gold mt-0.5">★★★★★ {e.rt}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
