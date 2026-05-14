"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const INTEGRATIONS = [
  "Zerodha",
  "Groww",
  "CAMS",
  "CDSL",
  "HDFC Bank",
  "ICICI",
  "Paytm Money",
  "Scripbox",
  "EPFO",
  "NPS",
];

export function IntegrationsStrip() {
  return (
    <section className="relative py-10 sm:py-12 border-y border-line bg-white/40 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          <div className="text-center lg:text-left max-w-xs shrink-0">
            <div className="eyebrow mb-2">Connects with</div>
            <p className="text-sm text-ink-dim leading-relaxed">
              Every broker, depository, bank, and government scheme — in one read-only feed.
            </p>
          </div>
          <div className="flex-1 w-full overflow-hidden relative">
            {/* fade edges */}
            <div
              className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0))",
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(-90deg, rgba(255,255,255,1), rgba(255,255,255,0))",
              }}
            />

            <motion.div
              className="flex gap-3 sm:gap-4"
              animate={{ x: [0, -800] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-dim shadow-[0_1px_2px_rgba(10,37,64,0.04)]"
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
