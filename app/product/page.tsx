import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Card";
import { FeatureSplit } from "@/components/product/FeatureSplit";
import { FinalCTA } from "@/components/landing/FinalCTA";
import {
  VisualConnect,
  VisualInsights,
  VisualClarzoGPT,
  VisualRebalance,
  VisualSpending,
  VisualGoals,
  VisualFamily,
  VisualExpert,
} from "@/components/product/visuals";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Clarzo.ai summarizes, simplifies, and strategizes your entire investment journey.",
};

const HERO_BADGES = [
  "Portfolio Connect",
  "AI Insights",
  "ClarzoGPT",
  "Goal Mapping",
  "Expert Access",
];

const ALL_FEATURES = [
  { icon: "🔗", title: "Portfolio Connect", text: "All accounts, one place" },
  { icon: "💡", title: "Smart Insights", text: "Performance vs market" },
  { icon: "🤖", title: "ClarzoGPT", text: "Ask anything, get answers" },
  { icon: "⚖️", title: "Rebalancing", text: "Drift alerts & nudges" },
  { icon: "💳", title: "Spending Tracker", text: "Where your money goes" },
  { icon: "🎯", title: "Goal Mapping", text: "Invest with purpose" },
  { icon: "👨‍👩‍👧‍👦", title: "Family View", text: "Household net worth" },
  { icon: "👨‍💼", title: "Expert Connect", text: "SEBI-registered advisors" },
  { icon: "🔔", title: "Proactive Nudges", text: "SIP expiry, overlap alerts" },
  { icon: "📊", title: "Loan EMI Calculator", text: "Plan before you borrow" },
  { icon: "🛡️", title: "Insurance Insights", text: "Coverage gap analysis" },
  { icon: "📋", title: "Tax Filing", text: "Tax-saving integrations" },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-12 sm:pt-44 sm:pb-16 text-center">
        <Container>
          <Reveal>
            <div className="eyebrow justify-center mb-5">The Product</div>
            <h1 className="font-display text-display-xl text-ink">
              An Intelligent AI-Powered
              <br />
              <span className="text-gradient">Portfolio Whisperer</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-ink-dim leading-relaxed">
              Clarzo.ai summarizes, simplifies, and strategizes your entire investment journey. It
              educates you on risk vs. return dynamically — and tells you exactly what to do next.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {HERO_BADGES.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Feature deep dives */}
      <FeatureSplit
        id="connect"
        tag="Foundation"
        title="Portfolio Connect — All Accounts in One Place"
        description="Your money is scattered across Zerodha, Groww, CAMS, bank accounts, PPF, EPF, and even your parents' portfolios. Clarzo.ai pulls it all together using AI to parse and unify your complete financial footprint."
        bullets={[
          "Parse data from emails/SMS — CDSL, CAMS, Zerodha, Groww, Paytm, Scripbox",
          "Accept CSVs or screenshots of demat holdings",
          "Input real estate, FDs, gold manually or via lookup",
          "Supports 10+ asset classes across platforms",
        ]}
        visual={<VisualConnect />}
      />

      <FeatureSplit
        id="insights"
        tag="Intelligence"
        title="Your Portfolio's Story — In Plain English"
        description="No financial jargon. Clarzo tells you exactly how your money is performing — last month, last year, and compared to the market. Clear, honest, actionable. Categorized by asset class, risk level, sector exposure, goal alignment, and time horizon."
        bullets={[
          '"Your equity portfolio grew 12% YoY, but was highly volatile in the last 3 months."',
          '"Your mutual fund SIPs have returned 8.3% CAGR since start."',
          "Compare your returns against Nifty, Sensex, and similar investors",
          'Proactive nudges: "3 SIPs expire next month" "Overlapping funds detected"',
        ]}
        visual={<VisualInsights />}
        flip
      />

      <FeatureSplit
        id="gpt"
        tag="AI Engine"
        title="ClarzoGPT — Talk to Your Portfolio"
        description={`Ask any question about your portfolio — in plain language. "What's my best performing asset?" "Am I too exposed to small caps?" "How much did I invest in tech sector last year?" Get instant, personalized answers powered by an LLM with custom-trained financial ontology.`}
        bullets={[
          "Natural language answers about holdings, allocation, and performance",
          'Understands Hindi + English — "Kya yeh mutual fund sahi hai?"',
          "Answers based on your real data, not generic advice",
          'Ask about affordability: "Can I afford a ₹15L car?"',
        ]}
        visual={<VisualClarzoGPT />}
      />

      <FeatureSplit
        id="rebalance"
        tag="Strategy"
        title="Smart Rebalancing — Stay Balanced, Stay Confident"
        description="Clarzo detects when your portfolio drifts from your ideal allocation and guides you back — for risk control and consistent growth. Based on your age, goals, and volatility preference."
        bullets={[
          '"Shift 10% from equity to short-duration debt to reduce drawdown risk."',
          '"Real estate is over 40% of your portfolio — consider liquidity tradeoffs."',
          "Drift alerts when allocation deviates from your target",
          "Educational tone — never prescriptive, always your decision",
        ]}
        visual={<VisualRebalance />}
        flip
      />

      <FeatureSplit
        id="spending"
        tag="Money Flow"
        title="Spending Behavior — Know Where Your Money Goes"
        description="Connect your bank accounts and see the full picture — not just what you invest, but what you spend. Category-wise analysis, net credit/debit flow, month-wise and week-wise breakdowns."
        bullets={[
          "The sectors where you're spending and investing",
          "Net credit/debit flow with month and week-wise analysis",
          "Identify auto-payments and subscriptions draining money",
          "Savings rate tracking vs your target",
        ]}
        visual={<VisualSpending />}
      />

      <FeatureSplit
        id="goals"
        tag="Life Goals"
        title="Goal Mapping — Every Rupee With a Mission"
        description="Align your investments with life goals — retirement, home purchase, kids' education, vehicle. Track progress and stay on course. Clarzo maps your existing investments to your future plans."
        bullets={[
          '"Your ₹4L in debt fund aligns with your home down payment in 2026."',
          '"Consider term insurance — your dependents exceed current coverage."',
          "Visual progress tracking for each goal",
          "Retirement, vehicle, house purchase, kids education & more",
        ]}
        visual={<VisualGoals />}
        flip
      />

      <FeatureSplit
        id="family"
        tag="Household"
        title="Family Investment Tracking"
        description="In India, money decisions are never just yours. Combine household investments — yours, your spouse's, your parents' — for a complete family net worth picture. Joint financial planning, the way it should be."
        bullets={[
          "Add family members and their portfolios",
          "Combined household net worth dashboard",
          "Individual vs family allocation views",
          "Track parents' investments alongside yours",
        ]}
        visual={<VisualFamily />}
      />

      <FeatureSplit
        id="expert"
        tag="Human + AI"
        title="Connect to an Expert"
        description="Sometimes you need more than AI. Clarzo connects you with certified financial planners for personalized strategies you can truly rely on. One-on-one video consultations for the decisions that matter most."
        bullets={[
          "SEBI-registered investment advisors",
          "One-on-one video consultations",
          "Goal-specific financial planning",
          "Tax optimization strategies",
        ]}
        visual={<VisualExpert />}
        flip
      />

      {/* All Features Grid */}
      <section className="section">
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center mb-5">Everything Included</div>
            <h2 className="font-display text-display-lg">Every Feature at a Glance</h2>
            <p className="mt-5 text-ink-dim leading-relaxed">
              From portfolio tracking to tax planning — here&apos;s everything Clarzo.ai offers.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_FEATURES.map((f) => (
              <Reveal key={f.title}>
                <div className="glass glass-hover glass-edge p-6 h-full flex items-start gap-4">
                  <div className="text-2xl shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-display font-semibold text-base">{f.title}</div>
                    <div className="text-sm text-ink-dim mt-1">{f.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
