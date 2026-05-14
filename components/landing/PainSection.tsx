"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertCircle, Target } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SCATTERED = [
  { label: "Zerodha", x: "10%", y: "12%", delay: 0 },
  { label: "Groww", x: "65%", y: "8%", delay: 0.4 },
  { label: "HDFC Bank", x: "22%", y: "55%", delay: 0.8 },
  { label: "PPF", x: "78%", y: "48%", delay: 0.6 },
  { label: "CAMS", x: "5%", y: "82%", delay: 1.0 },
  { label: "Gold ETF", x: "55%", y: "80%", delay: 0.2 },
  { label: "Paytm", x: "82%", y: "78%", delay: 1.2 },
];

const PAIN_STATS = [
  {
    Icon: TrendingDown,
    big: "10+",
    label: "apps",
    body: "where your money is scattered with no unified view",
  },
  {
    Icon: AlertCircle,
    big: "₹0",
    label: "advisors",
    body: "the middle class has — while the wealthy have private bankers",
  },
  {
    Icon: Target,
    big: "78%",
    label: "of investors",
    body: "have no idea if they're beating the market — and no plan to find out",
  },
];

export function PainSection() {
  return (
    <section className="section">
      <Container size="wide">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="eyebrow mb-5">The Problem</div>
            <h2 className="font-display text-display-lg leading-tight">
              People have investments,
              <br />
              but <span className="text-gradient">no clarity</span>.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-dim leading-relaxed max-w-lg">
              Investments scattered across accounts and instruments. Low returns. No clear plan.{" "}
              <strong className="text-ink">Sound familiar?</strong>
            </p>
            <ul className="mt-7 space-y-3 max-w-lg">
              {[
                "Portfolio spread across apps, bank accounts, and instruments",
                "No idea if you're getting good returns vs the market",
                "Unsure which instruments are right for your goals",
                "Rebalancing? Never done it.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink-dim">
                  <span className="mt-1.5 size-1.5 rounded-full bg-chart-red shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: scattered apps visual */}
          <Reveal>
            <div className="relative aspect-[5/4] max-w-md mx-auto">
              <div
                className="absolute inset-8 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(239,68,68,0.08), rgba(245,158,11,0.06) 50%, transparent 75%)",
                }}
              />
              {SCATTERED.map((item) => (
                <motion.span
                  key={item.label}
                  className="absolute glass px-3.5 py-2 text-xs sm:text-sm font-medium text-ink shadow-card"
                  style={{ top: item.y, left: item.x }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut",
                  }}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stat strip below */}
        <div className="mt-16 sm:mt-24 grid sm:grid-cols-3 gap-5">
          {PAIN_STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="glass p-7 h-full">
                <s.Icon size={18} className="text-chart-red mb-4" />
                <div className="font-display text-4xl sm:text-5xl font-semibold tabular tracking-tight">
                  {s.big}
                  <span className="text-base sm:text-lg font-medium text-ink-muted ml-1.5">
                    {s.label}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
