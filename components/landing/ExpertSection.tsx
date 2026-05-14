"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const FEATURES = [
  "SEBI-registered investment advisors",
  "One-on-one video consultations",
  "Goal-specific financial planning",
  "Tax optimization strategies",
];

const EXPERTS = [
  {
    initials: "RS",
    name: "Rahul Sharma, CFP",
    role: "Retirement & Tax Planning",
    rating: "4.9",
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    initials: "PM",
    name: "Priya Mehta, CFA",
    role: "Equity & Mutual Funds",
    rating: "4.8",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    initials: "AK",
    name: "Arjun Kapoor, CFP",
    role: "Wealth & Estate Planning",
    rating: "4.9",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function ExpertSection() {
  return (
    <section id="expert" className="section">
      <Container>
        <Reveal>
          <div className="glass relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div
              className="absolute -top-32 -right-32 size-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)",
              }}
            />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
              <div>
                <div className="eyebrow mb-5">Human + AI</div>
                <h2 className="font-display text-display-md text-ink leading-tight">
                  Smarter with AI.
                  <br />
                  Stronger with Experts.
                </h2>
                <p className="mt-5 text-ink-dim leading-relaxed">
                  Sometimes you need more than AI. Clarzo connects you with certified financial
                  planners for personalized strategies you can truly rely on.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink-dim">
                      <span className="size-6 rounded-full bg-accent/15 text-accent-deep flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                {EXPERTS.map((e, i) => (
                  <motion.div
                    key={e.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass glass-hover flex items-center gap-4 p-5"
                  >
                    <div
                      className={`size-12 rounded-full bg-gradient-to-br ${e.gradient} flex items-center justify-center font-display font-bold text-white shrink-0`}
                    >
                      {e.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{e.name}</div>
                      <div className="text-xs text-ink-dim">{e.role}</div>
                      <div className="text-[0.7rem] text-gold mt-1 flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} size={10} fill="currentColor" strokeWidth={0} />
                        ))}
                        <span className="ml-1 text-ink-dim">{e.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
