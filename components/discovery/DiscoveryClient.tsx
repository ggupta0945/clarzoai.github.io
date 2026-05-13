"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  Building2,
  Eye,
  Flame,
  ArrowLeft,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Card";
import { SECTORS, type Company, type Sector } from "@/lib/data/discovery";
import { SITE, cn } from "@/lib/utils";

type View =
  | { kind: "sectors" }
  | { kind: "companies"; sectorId: string }
  | { kind: "company"; sectorId: string; companyId: string };

export function DiscoveryClient() {
  const [view, setView] = useState<View>({ kind: "sectors" });
  const [query, setQuery] = useState("");

  const filteredSectors = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTORS;
    return SECTORS.filter((s) => {
      if (s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) return true;
      return s.companies.some(
        (c) =>
          c.shortName.toLowerCase().includes(q) ||
          c.fullName.toLowerCase().includes(q) ||
          c.bseCode.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <>
      <section className="pt-36 sm:pt-40 pb-10">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-display-xl text-ink">
              Discover Where to <span className="text-gradient">Invest</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-dim leading-relaxed">
              Explore sectors, research companies, and make informed decisions. We show you the
              facts, the pros, and the cons — you decide what&apos;s right for you.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-chart-amber/30 bg-chart-amber/8 px-3.5 py-1.5 text-[0.75rem] text-chart-amber">
              <AlertTriangle size={12} />
              This is for educational purposes only. Not investment advice. Always do your own
              research.
            </div>

            <div className="mt-8 relative max-w-lg mx-auto">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sectors or companies..."
                className="w-full glass pl-11 pr-4 py-3.5 text-sm placeholder:text-ink-muted focus:border-accent-light/40 outline-none"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <AnimatePresence mode="wait">
        {view.kind === "sectors" && (
          <motion.div
            key="sectors"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <SectorsView
              sectors={filteredSectors}
              onSelect={(id) => setView({ kind: "companies", sectorId: id })}
            />
          </motion.div>
        )}

        {view.kind === "companies" && (
          <motion.div
            key="companies"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <CompaniesView
              sector={SECTORS.find((s) => s.id === view.sectorId)!}
              onBack={() => setView({ kind: "sectors" })}
              onSelect={(companyId) =>
                setView({ kind: "company", sectorId: view.sectorId, companyId })
              }
            />
          </motion.div>
        )}

        {view.kind === "company" && (
          <motion.div
            key="company"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <CompanyView
              sector={SECTORS.find((s) => s.id === view.sectorId)!}
              company={
                SECTORS.find((s) => s.id === view.sectorId)!.companies.find(
                  (c) => c.id === view.companyId
                )!
              }
              onBack={() => setView({ kind: "companies", sectorId: view.sectorId })}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Sectors grid ────────────────────────────────────────────────────── */
function SectorsView({
  sectors,
  onSelect,
}: {
  sectors: Sector[];
  onSelect: (id: string) => void;
}) {
  return (
    <section className="pb-20">
      <Container>
        <div className="text-xs text-ink-muted mb-5">All Sectors</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className="glass glass-hover glass-edge p-7 text-left group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.emoji}</span>
                <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                  <Eye size={12} /> {s.views}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                {s.trending && (
                  <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider text-chart-amber">
                    <Flame size={11} fill="currentColor" /> Trending
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-dim leading-relaxed">{s.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={12} /> {s.companiesCount} companies
                </span>
                <span>{s.updated}</span>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Companies in a sector ───────────────────────────────────────────── */
function CompaniesView({
  sector,
  onBack,
  onSelect,
}: {
  sector: Sector;
  onBack: () => void;
  onSelect: (companyId: string) => void;
}) {
  return (
    <section className="pb-20">
      <Container>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-accent-deep transition-colors mb-6"
        >
          <ArrowLeft size={14} /> All Sectors
        </button>

        <div className="glass p-7 sm:p-9 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-display-md text-ink">
                <span className="mr-2">{sector.emoji}</span>
                {sector.name}
              </h2>
              <p className="mt-3 text-sm text-ink-dim leading-relaxed">{sector.description}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <Pill>{sector.companiesCount} Companies</Pill>
              <Pill>{sector.views}</Pill>
            </div>
          </div>
        </div>

        {sector.overview && (
          <div className="glass p-7 mb-8">
            <h3 className="font-display text-lg font-semibold mb-3">Sector Overview</h3>
            <p className="text-sm text-ink-dim leading-relaxed mb-6">{sector.overview.summary}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-deep mb-3">
                  Tailwinds
                </div>
                <ul className="space-y-2">
                  {sector.overview.tailwinds.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-ink-dim">
                      <span className="text-accent-deep mt-1">↑</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-chart-red mb-3">
                  Headwinds
                </div>
                <ul className="space-y-2">
                  {sector.overview.headwinds.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-ink-dim">
                      <span className="text-chart-red mt-1">↓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {sector.companies.length > 0 ? (
          <div className="space-y-2.5">
            {sector.companies.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelect(c.id)}
                className="glass glass-hover w-full px-5 sm:px-7 py-5 grid grid-cols-[1fr_auto] sm:grid-cols-[1.5fr_1fr_1fr_auto] items-center gap-4 text-left"
              >
                <div>
                  <div className="font-display text-base font-semibold">{c.shortName}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{c.bseCode}</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold tabular">{c.price}</div>
                  <div
                    className={cn(
                      "text-xs tabular mt-0.5",
                      c.changePositive ? "text-accent-deep" : "text-chart-red"
                    )}
                  >
                    {c.change}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-ink-muted">Market Cap</div>
                  <div className="text-sm font-semibold tabular">{c.marketCap}</div>
                </div>
                <ChevronRight size={18} className="text-ink-muted shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <div className="glass p-10 text-center text-ink-dim text-sm">
            Company data for this sector is coming soon. We&apos;re adding BSE-listed companies
            every week.
          </div>
        )}

        <CTABanner
          heading="Researching investments? See how they fit your portfolio."
          body="Connect your existing portfolio and Clarzo.ai will show you how any new investment impacts your allocation, risk, and goals."
        />
      </Container>
    </section>
  );
}

/* ── Company detail ──────────────────────────────────────────────────── */
function CompanyView({
  sector,
  company,
  onBack,
}: {
  sector: Sector;
  company: Company;
  onBack: () => void;
}) {
  return (
    <section className="pb-20">
      <Container>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-accent-deep transition-colors mb-6"
        >
          <ArrowLeft size={14} /> {sector.name}
        </button>

        <div className="glass p-7 sm:p-9 mb-6">
          <div className="text-xs text-ink-muted mb-1">{company.bseCode} · {sector.name}</div>
          <h2 className="font-display text-display-md">{company.fullName}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-7">
            {[
              { label: "Price", value: company.price },
              {
                label: "Today",
                value: company.change,
                green: company.changePositive,
                red: !company.changePositive,
              },
              { label: "Market Cap", value: company.marketCap },
              ...company.facts
                .filter((f) => ["P/E Ratio", "ROE"].includes(f.label))
                .map((f) => ({ label: f.label, value: f.value })),
            ].map((m: any) => (
              <div key={m.label} className="rounded-xl bg-bg-elevated/60 border border-line p-4">
                <div className="text-[0.7rem] text-ink-muted">{m.label}</div>
                <div
                  className={cn(
                    "font-display text-lg font-semibold mt-1 tabular",
                    m.green && "text-accent-deep",
                    m.red && "text-chart-red"
                  )}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="glass p-7">
            <h3 className="font-display text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-ink-dim leading-relaxed mb-5">{company.about}</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {company.facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between text-xs">
                  <span className="text-ink-muted">{f.label}</span>
                  <span className="font-semibold tabular">{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-7">
            <h3 className="font-display text-lg font-semibold mb-4">Pros & Cons</h3>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-deep mb-2.5">
                Strengths
              </div>
              <ul className="space-y-1.5 mb-5">
                {company.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-ink-dim">
                    <span className="text-accent-deep mt-0.5">+</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="text-xs font-semibold uppercase tracking-wider text-chart-red mb-2.5">
                Risks
              </div>
              <ul className="space-y-1.5">
                {company.risks.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-ink-dim">
                    <span className="text-chart-red mt-0.5">−</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <CompanyGPT company={company} />

        <CTABanner
          heading="Like what you see? Check how it fits your portfolio."
          body="Already invested in this sector? Clarzo.ai shows your current exposure and suggests optimal allocation."
        />
      </Container>
    </section>
  );
}

/* ── CompanyGPT mock chat ────────────────────────────────────────────── */
function CompanyGPT({ company }: { company: Company }) {
  const [answer, setAnswer] = useState<{ q: string; a: string; source: string } | null>(null);

  return (
    <div className="glass p-7 mt-5">
      <div className="flex items-start gap-3 mb-4">
        <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-deep shrink-0">
          <Sparkles size={18} />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">
            CompanyGPT — {company.shortName}
          </h3>
          <p className="text-sm text-ink-dim mt-0.5">
            Ask anything about {company.fullName}. Answers based on quarterly reports, annual
            filings, and public data.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {company.gptSuggestions.map((q) => {
          const match = company.gptAnswers?.find((a) => a.q === q);
          return (
            <button
              key={q}
              onClick={() => match && setAnswer(match)}
              disabled={!match}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs transition-all",
                match
                  ? "border-line bg-bg-elevated/70 text-ink-dim hover:border-accent-light/40 hover:text-accent-deep"
                  : "border-line bg-bg-elevated/30 text-ink-muted cursor-not-allowed"
              )}
            >
              {q}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {answer && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl bg-bg-elevated/80 border border-line p-5 mb-4">
              <div className="text-xs text-accent-deep font-semibold uppercase tracking-wider mb-2">
                {answer.q}
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-line text-ink">{answer.a}</p>
              <div className="text-xs text-ink-muted mt-4">{answer.source}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder={`Ask about ${company.shortName}...`}
          className="flex-1 glass px-4 py-2.5 text-sm placeholder:text-ink-muted outline-none focus:border-accent-light/40"
        />
        <Button variant="primary" size="sm">
          Ask →
        </Button>
      </div>

      <div className="mt-4 text-xs text-ink-muted inline-flex items-start gap-1.5">
        <AlertTriangle size={12} className="mt-0.5 shrink-0" />
        CompanyGPT provides information based on publicly available data. This is not investment
        advice. Always verify with official filings.
      </div>
    </div>
  );
}

/* ── CTA banner ──────────────────────────────────────────────────────── */
function CTABanner({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="glass relative overflow-hidden p-7 sm:p-10 mt-8 grid lg:grid-cols-[2fr_auto] gap-6 items-center">
      <div
        className="absolute -top-24 -right-24 size-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)",
        }}
      />
      <div className="relative">
        <h3 className="font-display text-xl sm:text-2xl font-semibold">{heading}</h3>
        <p className="mt-2 text-sm text-ink-dim leading-relaxed">{body}</p>
      </div>
      <div className="relative">
        <Button href={SITE.loginUrl} variant="primary" size="md">
          Connect Portfolio — Free →
        </Button>
      </div>
    </div>
  );
}
