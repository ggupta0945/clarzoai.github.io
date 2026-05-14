"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/data/faqs";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="font-display text-display-lg text-ink">
              Got Questions?
              <br />
              We&apos;ve Got Answers.
            </h2>
            <p className="mt-5 text-ink-dim leading-relaxed max-w-md">
              Everything you need to know about Clarzo.ai.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={faq.q}
                    className={`glass overflow-hidden transition-colors duration-300 ${
                      isOpen ? "border-accent/40" : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-ink-muted shrink-0"
                      >
                        <Plus size={16} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm text-ink-dim leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
