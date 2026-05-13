"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Star, ArrowRight, Download, Mail } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Card";
import {
  ARTICLES,
  FEATURED_ARTICLE,
  FILTER_CATEGORIES,
  RESOURCES,
  CALCULATORS_INDEX,
} from "@/lib/data/knowledge";
import { cn } from "@/lib/utils";

export function KnowledgeClient() {
  const [filter, setFilter] = useState<(typeof FILTER_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesFilter = filter === "All" || a.category === filter;
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 sm:pt-40 pb-12">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-display-xl text-ink">
              Knowledge Repo — <span className="text-gradient">Learn Money</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-dim leading-relaxed">
              Articles, guides, and tools to help you make smarter financial decisions. No jargon.
              No hidden agendas. Just clarity.
            </p>

            <div className="mt-8 relative max-w-lg mx-auto">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, guides, resources..."
                className="w-full glass pl-11 pr-4 py-3.5 text-sm placeholder:text-ink-muted outline-none focus:border-accent-light/40"
              />
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {FILTER_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-medium transition-all border",
                    filter === c
                      ? "border-accent-light/50 bg-accent/10 text-accent-deep"
                      : "border-line bg-bg-elevated/40 text-ink-dim hover:border-line-strong hover:text-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured */}
      <section className="pb-12">
        <Container>
          <Reveal>
            <Link
              href="#"
              className="glass glass-edge block p-7 sm:p-10 group hover:border-accent-light/40 transition-colors relative overflow-hidden"
            >
              <div
                className="absolute -top-32 -right-32 size-96 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,200,66,0.12), transparent 70%)",
                }}
              />
              <div className="relative flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-gold">
                  <Star size={11} fill="currentColor" strokeWidth={0} />
                  Featured
                </span>
                <Tag>{FEATURED_ARTICLE.category}</Tag>
              </div>
              <h2 className="relative font-display text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight font-semibold">
                {FEATURED_ARTICLE.title}
              </h2>
              <p className="relative mt-4 text-sm sm:text-base text-ink-dim leading-relaxed max-w-3xl">
                {FEATURED_ARTICLE.excerpt}
              </p>
              <div className="relative mt-6 inline-flex items-center gap-2 text-sm text-accent-deep font-medium group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Latest Articles */}
      <section className="pb-16">
        <Container>
          <div className="flex items-end justify-between mb-7">
            <h2 className="font-display text-display-md">Latest Articles</h2>
            <span className="text-sm text-ink-muted">{filtered.length} articles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              >
                <Link
                  href="#"
                  className="glass glass-hover glass-edge p-6 h-full flex flex-col block group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{a.emoji}</span>
                    <span className="text-[0.7rem] uppercase tracking-wider text-accent-deep font-semibold">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-accent-deep transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-dim leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                    <span>{a.readTime}</span>
                    <ArrowRight
                      size={14}
                      className="text-ink-muted group-hover:text-accent-deep group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="glass p-10 text-center text-ink-dim text-sm">
              No articles match your filter or search.
            </div>
          )}
        </Container>
      </section>

      {/* Guides & Resources */}
      <section className="pb-16">
        <Container>
          <h2 className="font-display text-display-md mb-8">Guides & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r) => (
              <Reveal key={r.title}>
                <div className="glass glass-hover glass-edge p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{r.icon}</div>
                    <div className="text-right">
                      <div className="text-[0.7rem] uppercase tracking-wider text-accent-deep font-semibold">
                        {r.type}
                      </div>
                      <div className="text-[0.7rem] text-ink-muted">{r.size}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed flex-1">{r.description}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep hover:gap-2.5 transition-all"
                  >
                    <Download size={13} />
                    Download Free →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Financial Calculators */}
      <section className="pb-16">
        <Container>
          <h2 className="font-display text-display-md mb-8">🧮 Financial Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CALCULATORS_INDEX.map((c) => (
              <Reveal key={c.slug}>
                <Link
                  href={`/calculators#${c.slug}`}
                  className="glass glass-hover glass-edge p-6 block h-full group"
                >
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <h3 className="font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-xs text-ink-dim leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-accent-deep group-hover:gap-2.5 transition-all">
                    Launch Calculator →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="glass relative overflow-hidden p-9 sm:p-12 text-center">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08), transparent 60%)",
                }}
              />
              <Mail className="mx-auto text-accent-deep relative" size={28} />
              <h3 className="relative font-display text-display-md mt-4">Clarzo Weekly Digest</h3>
              <p className="relative mt-3 text-sm text-ink-dim max-w-md mx-auto">
                One email a week. Market insights, portfolio tips, and new articles — curated by
                our team. No spam, ever.
              </p>
              <form className="relative mt-7 flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 glass px-4 py-3 text-sm placeholder:text-ink-muted outline-none focus:border-accent-light/40"
                />
                <Button variant="primary" size="md">
                  Subscribe →
                </Button>
              </form>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
