import type { Metadata } from "next";
import { ArrowRight, Eye, Brain, Target, Handshake } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Clarzo.ai is an AI-powered wealth intelligence platform that helps you see, understand, and act on your complete financial picture.",
};

const MISSION_CARDS = [
  { Icon: Eye, emoji: "👁️", title: "See Everything", text: "One dashboard for every asset class, every account, every platform" },
  { Icon: Brain, emoji: "🧠", title: "Understand Deeply", text: "AI-powered insights in plain language — no jargon, no confusion" },
  { Icon: Target, emoji: "🎯", title: "Act Confidently", text: "Smart recommendations aligned with your goals and risk profile" },
  { Icon: Handshake, emoji: "🤝", title: "Stay in Control", text: "Read-only access always. Your money, your decisions" },
];

const STATS = [
  { value: "140M+", label: "Demat accounts in India and growing every quarter" },
  { value: "10+", label: "Apps where the average investor's money is scattered" },
  { value: "Zero", label: "Platforms offering unbiased clarity across all asset classes" },
];

const TIMELINE = [
  {
    n: "01",
    title: "The frustration.",
    text: "Realized our own portfolios were scattered across 10+ platforms with zero unified view.",
  },
  {
    n: "02",
    title: "The insight.",
    text: "People don't need more charts. They need confidence — in plain language they understand.",
  },
  {
    n: "03",
    title: "The build.",
    text: "Combined AI, behavioral finance, and design thinking to create a wealth intelligence platform.",
  },
  {
    n: "04",
    title: "The mission.",
    text: "Make financial clarity accessible to every Indian — not just those who can afford a wealth manager.",
  },
];

const TEAM = [
  {
    initials: "GG",
    name: "Gaurav Gupta",
    role: "Founding Member",
    bio: "A data science and machine learning enthusiast with expertise in computer vision and NLP. Gaurav thrives on turning structured and unstructured data into valuable insights that drive real impact.",
    tags: ["Data Science", "Computer Vision", "NLP", "IIT Kharagpur"],
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    initials: "VN",
    name: "Videet Nimsarkar",
    role: "Founding Member",
    bio: "Exceptional skills in machine learning and deep learning, focused on delivering bottom-line impact. His interests include predictive data modelling, NLP, and solving real-world problems. Also an avid badminton player.",
    tags: ["Machine Learning", "Deep Learning", "Predictive Modelling", "IIT Kharagpur"],
    gradient: "from-blue-500 to-indigo-500",
  },
];

const VALUES = [
  {
    icon: "🔒",
    title: "Trust First",
    text: "Read-only access. Bank-grade encryption. We never sell your data, move your money, or push products for commissions. Your trust is our foundation.",
  },
  {
    icon: "💬",
    title: "Clarity Over Complexity",
    text: "Finance shouldn't need a dictionary. We speak in plain language, not jargon. If you don't understand it, we haven't done our job.",
  },
  {
    icon: "⚖️",
    title: "Unbiased Always",
    text: "We don't earn commissions. We don't push products. Our only incentive is to help you make better financial decisions for yourself.",
  },
  {
    icon: "🇮🇳",
    title: "Built for India",
    text: "Designed for the Indian investor — understanding local instruments, tax structures, family dynamics, and the reality of money scattered across platforms.",
  },
  {
    icon: "🤖",
    title: "AI with Purpose",
    text: "We use AI not because it's trendy, but because it solves a real problem — making sense of complex, scattered financial data at scale.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Wealth is Family",
    text: "In India, money decisions are never just yours. We build for households — because real financial planning includes your parents, your spouse, and your future.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-12 text-center">
        <Container>
          <Reveal>
            <div className="eyebrow justify-center mb-5">About Clarzo.ai</div>
            <h1 className="font-display text-display-xl text-ink">
              We&apos;re Not Here to Sell You Funds.
              <br />
              <span className="text-gradient">We&apos;re Here to Give You Clarity.</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg max-w-2xl mx-auto text-ink-dim leading-relaxed">
              Clarzo.ai is an AI-powered wealth intelligence platform that helps you see,
              understand, and act on your complete financial picture — across every investment,
              every account, every family member.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="eyebrow mb-5">Our Mission</div>
              <h2 className="font-display text-display-lg">Make Financial Self-Awareness Mainstream</h2>
              <p className="mt-5 text-ink-dim leading-relaxed">
                We believe wealth clarity shouldn&apos;t be a luxury reserved for the ultra-rich.
                Every Indian investor — whether they manage ₹1 lakh or ₹1 crore — deserves to know
                exactly where their money is, how it&apos;s performing, and what to do next.
              </p>
              <blockquote className="mt-8 glass p-6 sm:p-7 border-l-4 border-l-accent-light !rounded-r-2xl !rounded-l-md">
                <p className="font-display text-lg sm:text-xl text-ink leading-snug italic">
                  &ldquo;We help you see your money clearly. We don&apos;t touch it. We don&apos;t
                  move it.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {MISSION_CARDS.map((c) => (
                  <div key={c.title} className="glass glass-hover glass-edge p-6">
                    <div className="text-2xl mb-3">{c.emoji}</div>
                    <div className="font-display text-base font-semibold">{c.title}</div>
                    <div className="text-sm text-ink-dim mt-2 leading-relaxed">{c.text}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why we exist */}
      <section className="section">
        <Container>
          <Reveal className="max-w-3xl">
            <div className="eyebrow mb-5">Why We Exist</div>
            <h2 className="font-display text-display-lg">
              India is Investing Like Never Before.
              <br />
              But Clarity Hasn&apos;t Caught Up.
            </h2>
            <p className="mt-5 text-ink-dim leading-relaxed">
              Across India, individuals are investing more than ever — in mutual funds, stocks,
              gold, FDs, real estate, and even crypto. Yet despite this growing financial activity,
              most people are stuck asking the same questions.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass glass-edge p-7">
                  <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient tabular">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-ink-dim leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 max-w-3xl">
            <p className="text-ink-dim leading-relaxed">
              The wealthy have private bankers. The ultra-rich have wealth managers and advisors.
              But the middle class? They have 10 apps, 30 emails, 50 SMSes… and zero clarity.{" "}
              <strong className="text-ink">We&apos;re changing that.</strong>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="eyebrow mb-5">Our Story</div>
              <h2 className="font-display text-display-lg">Born from a Simple Frustration</h2>
              <div className="mt-5 space-y-4 text-ink-dim leading-relaxed">
                <p>
                  We started Clarzo.ai because we faced the same problem every Indian investor faces
                  — our money was everywhere, but our understanding of it was nowhere.
                </p>
                <p>
                  Stocks on one app. Mutual funds on another. FDs in a bank. PPF on a government
                  portal. Parents&apos; investments buried in WhatsApp PDFs. And no single place
                  that could tell us: &ldquo;Here&apos;s your complete picture. Here&apos;s
                  what&apos;s working. Here&apos;s what to do next.&rdquo;
                </p>
                <p>
                  As IIT Kharagpur graduates with deep expertise in data science, machine learning,
                  and NLP — we knew this was a problem AI could solve. Not by selling financial
                  products, but by making financial understanding accessible to everyone.
                </p>
                <p>
                  That&apos;s why Clarzo.ai exists. Not to push transactions. Not to sell funds.
                  But to turn confusion into confidence — and make financial self-awareness
                  mainstream in India.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <ol className="space-y-3">
                {TIMELINE.map((t) => (
                  <li key={t.n} className="glass glass-hover p-6 flex items-start gap-5">
                    <span className="font-display text-3xl font-semibold text-gradient tabular shrink-0">
                      {t.n}
                    </span>
                    <div>
                      <div className="font-display text-base font-semibold">{t.title}</div>
                      <div className="text-sm text-ink-dim mt-1 leading-relaxed">{t.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center mb-12">
            <div className="eyebrow justify-center mb-5">The Founders</div>
            <h2 className="font-display text-display-lg">
              Built by People Who Understand
              <br />
              Both Data and Money
            </h2>
            <p className="mt-5 text-ink-dim leading-relaxed">
              IIT Kharagpur graduates with deep expertise in AI, machine learning, and a shared
              obsession with solving real-world problems.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {TEAM.map((m) => (
              <Reveal key={m.name}>
                <div className="glass glass-hover glass-edge p-8 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`size-14 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center font-display font-bold text-white`}
                    >
                      {m.initials}
                    </div>
                    <div>
                      <div className="font-display text-xl font-semibold">{m.name}</div>
                      <div className="text-xs text-accent-deep uppercase tracking-wider font-semibold">
                        {m.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-ink-dim leading-relaxed">{m.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section">
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-5">What We Stand For</div>
            <h2 className="font-display text-display-lg">Our Principles</h2>
            <p className="mt-5 text-ink-dim leading-relaxed">
              These aren&apos;t just words on a wall. They guide every feature we build and every
              decision we make.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <div className="glass glass-hover glass-edge p-7 h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <div className="font-display text-lg font-semibold">{v.title}</div>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision CTA */}
      <section className="section text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-lg text-ink">
              We&apos;re Not Here to Sell Funds.
              <br />
              <span className="text-gradient">
                We&apos;re Here to Make Clarity Mainstream.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-dim max-w-xl mx-auto font-display italic">
              Clarzo.ai: See your money. Understand your life.
            </p>
            <div className="mt-8">
              <Button href={SITE.loginUrl} variant="primary" size="lg">
                Get Started Free
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
