"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortfolioMock } from "./mocks/PortfolioMock";
import { SITE } from "@/lib/utils";

const STATS = [
  { num: "100", suffix: "%", label: "Portfolio Clarity" },
  { num: "4", suffix: "x", label: "Smarter Rebalancing" },
  { num: "10", suffix: "+", label: "Asset Classes" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <Container size="wide">
        {/* Top eyebrow pill */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 backdrop-blur-sm pl-1.5 pr-4 py-1.5 text-xs font-medium text-ink-dim shadow-[0_1px_2px_rgba(10,37,64,0.04)] hover:border-accent/40 transition-colors"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft text-accent-deep px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider">
              New
            </span>
            AI-Powered Wealth Intelligence
            <ArrowRight size={12} />
          </a>
        </motion.div>

        {/* Centered hero text */}
        <motion.div
          className="text-center max-w-5xl mx-auto mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h1 className="font-display text-display-xl text-ink">
            See your money.
            <br />
            <span className="text-gradient">Understand your life.</span>
          </h1>
          <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-ink-dim">
            From connecting your accounts to planning your future — Clarzo is your AI co-pilot for
            clarity, growth, and peace of mind.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={SITE.loginUrl} variant="primary" size="lg">
              Get Started Free
              <ArrowRight size={16} />
            </Button>
            <Button href="#features" variant="ghost" size="lg">
              See How It Works
            </Button>
          </div>
        </motion.div>

        {/* Full-width product dashboard (Stripe-style: large mock under hero) */}
        <motion.div
          className="relative mt-16 sm:mt-20 mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Bottom glow shadow under dashboard */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(16,185,129,0.18), transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative grid sm:grid-cols-[1.4fr_1fr] gap-4 sm:gap-5 items-stretch">
            <div className="sm:row-span-2">
              <PortfolioMock />
            </div>

            <FloatCard
              delay={1.2}
              icon={<Sparkles size={14} className="text-accent-deep" />}
              title="AI Insights"
              body="Your portfolio outperformed 78% of similar investors this year."
            />

            <FloatCard
              delay={1.45}
              icon={<TrendingUp size={14} className="text-accent-deep" />}
              title="Portfolio Health"
              body={
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-semibold text-accent-deep">Strong</span>
                  <span className="text-ink-muted">·</span>
                  <span>+12.4% YTD</span>
                </span>
              }
            />
          </div>
        </motion.div>

        {/* Stats strip below dashboard */}
        <div className="mt-14 sm:mt-20 max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
            >
              <div className="font-display text-3xl sm:text-5xl font-semibold tabular tracking-tight">
                {s.num}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-ink-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FloatCard({
  delay,
  icon,
  title,
  body,
}: {
  delay: number;
  icon?: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <motion.div
      className="glass glass-edge p-5"
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        {icon && (
          <span className="size-8 rounded-lg bg-accent-soft border border-accent/20 flex items-center justify-center">
            {icon}
          </span>
        )}
        <span className="text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-ink-muted">
          {title}
        </span>
      </div>
      <div className="text-sm text-ink leading-snug">{body}</div>
    </motion.div>
  );
}
