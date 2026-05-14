"use client";

import { motion } from "framer-motion";

const HEIGHTS = [35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 55, 75];
const ALLOC = [
  { name: "Equity", pct: "45%", color: "bg-accent-light" },
  { name: "Debt", pct: "30%", color: "bg-chart-blue" },
  { name: "Gold", pct: "15%", color: "bg-gold" },
  { name: "FDs", pct: "10%", color: "bg-chart-purple" },
];

export function PortfolioMock() {
  return (
    <div className="glass glass-edge p-7 sm:p-8 relative">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 0%, rgba(16,185,129,0.08), transparent 50%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-ink">Total Portfolio</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 text-accent-deep px-2.5 py-1 text-[0.7rem] font-semibold">
            <span className="size-1.5 rounded-full bg-accent-light animate-pulse" />
            Live
          </span>
        </div>

        <div className="font-display text-[2.4rem] sm:text-[2.6rem] font-semibold tabular tracking-tight">
          ₹24,87,350
        </div>
        <div className="text-accent-deep text-sm font-medium mt-0.5">↑ +12.4% this year</div>

        <div className="mt-7 flex items-end gap-1.5 h-20">
          {HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-[3px] origin-bottom"
              style={{
                height: `${h}%`,
                background:
                  "linear-gradient(to top, #047857, rgba(52,211,153,0.35))",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-7">
          {ALLOC.map((a, i) => (
            <motion.div
              key={a.name}
              className="rounded-xl bg-bg-elevated/70 border border-line p-2.5 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
            >
              <div className={`size-2 rounded-full mx-auto mb-1.5 ${a.color}`} />
              <div className="text-[0.65rem] text-ink-muted">{a.name}</div>
              <div className="text-[0.9rem] font-bold text-ink tabular">{a.pct}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
