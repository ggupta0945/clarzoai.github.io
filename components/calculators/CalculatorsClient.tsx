"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  NumberInput,
  SelectInput,
  ResultPanel,
  ResultRow,
  Donut,
  DonutLegend,
  fmt,
} from "./shared";
import {
  buildAmortization,
  calcEMI,
  calcFD,
  calcGratuity,
  calcLumpSum,
  calcPPF,
  calcRetirement,
  calcSIP,
  calcTax,
} from "@/lib/calculators";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "emi", emoji: "🏠", label: "EMI Calculator" },
  { id: "tax", emoji: "📋", label: "Tax Calculator" },
  { id: "sip", emoji: "📈", label: "SIP Calculator" },
  { id: "lumpsum", emoji: "💰", label: "Lump Sum" },
  { id: "retirement", emoji: "🏖️", label: "Retirement" },
  { id: "ppf", emoji: "🏛️", label: "PPF Calculator" },
  { id: "fd", emoji: "🏦", label: "FD Calculator" },
  { id: "gratuity", emoji: "🎁", label: "Gratuity" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function CalculatorsClient() {
  const [active, setActive] = useState<TabId>("emi");
  const tabsRef = useRef<HTMLDivElement>(null);

  // Honour hash on first load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.slice(1) as TabId;
      if (TABS.some((t) => t.id === hash)) setActive(hash);
    }
  }, []);

  return (
    <>
      <section className="pt-36 sm:pt-40 pb-10">
        <Container>
          <Reveal className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-display-xl text-ink">
              Financial <span className="text-gradient">Calculators</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-dim leading-relaxed">
              Plan smarter with real numbers. Every calculator uses accurate Indian financial
              formulas.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Sticky tab nav */}
      <div className="sticky top-20 z-20 backdrop-blur-xl bg-white/85 border-y border-line" ref={tabsRef}>
        <Container>
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-2.5">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                  active === t.id
                    ? "bg-accent/12 text-accent-deep border border-accent/30"
                    : "text-ink-dim hover:text-ink hover:bg-bg-elevated/60 border border-transparent"
                )}
              >
                <span>{t.emoji}</span>
                {t.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <section className="py-12 sm:py-14">
        <Container>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {active === "emi" && <EMICalc />}
            {active === "tax" && <TaxCalc />}
            {active === "sip" && <SIPCalc />}
            {active === "lumpsum" && <LumpSumCalc />}
            {active === "retirement" && <RetirementCalc />}
            {active === "ppf" && <PPFCalc />}
            {active === "fd" && <FDCalc />}
            {active === "gratuity" && <GratuityCalc />}
          </motion.div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="glass p-5 flex items-start gap-3 text-xs sm:text-sm text-ink-dim">
            <AlertTriangle size={16} className="text-chart-amber shrink-0 mt-0.5" />
            <p>
              For educational purposes only. Not financial advice. Consult a qualified advisor
              before making financial decisions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ── Layout shell ────────────────────────────────────────────────────── */
function CalcShell({
  title,
  inputs,
  output,
}: {
  title: string;
  inputs: React.ReactNode;
  output: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.15fr] gap-5">
      <div className="glass p-7">
        <h3 className="font-display text-xl font-semibold mb-6">{title}</h3>
        <div className="space-y-5">{inputs}</div>
      </div>
      <div>{output}</div>
    </div>
  );
}

/* ── 1. EMI ──────────────────────────────────────────────────────────── */
function EMICalc() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const { emi, totalInterest, totalAmount } = calcEMI(principal, rate, years);
  const [showAmort, setShowAmort] = useState(false);
  const amort = buildAmortization(principal, rate, years);

  return (
    <>
      <CalcShell
        title="EMI Calculator"
        inputs={
          <>
            <NumberInput label="Loan amount (₹)" value={principal} onChange={setPrincipal} step={10000} prefix="₹" />
            <NumberInput label="Interest Rate (% per year)" value={rate} onChange={setRate} step={0.1} />
            <NumberInput label="Loan Tenure (years)" value={years} onChange={setYears} step={1} min={1} max={30} />
          </>
        }
        output={
          <ResultPanel>
            <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
              <div className="space-y-1">
                <ResultRow label="Monthly EMI" value={fmt(emi)} emphasized highlight="green" />
                <ResultRow label="Principal amount" value={fmt(principal)} />
                <ResultRow label="Total interest" value={fmt(totalInterest)} highlight="blue" />
                <ResultRow label="Total amount" value={fmt(totalAmount)} />
              </div>
              <div>
                <Donut
                  parts={[
                    { value: principal, color: "#10b981" },
                    { value: totalInterest, color: "#60a5fa" },
                  ]}
                />
                <DonutLegend
                  items={[
                    { label: "Principal", color: "bg-accent" },
                    { label: "Interest", color: "bg-chart-blue" },
                  ]}
                />
              </div>
            </div>

            <button
              onClick={() => setShowAmort((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 text-sm text-ink-dim hover:text-accent-deep transition-colors"
            >
              Your Amortization Details (Yearly)
              <ChevronDown
                size={14}
                className={cn("transition-transform", showAmort && "rotate-180")}
              />
            </button>
            {showAmort && (
              <div className="mt-4 max-h-80 overflow-y-auto rounded-xl border border-line">
                <table className="w-full text-xs">
                  <thead className="bg-bg-elevated/80 sticky top-0">
                    <tr className="text-left text-ink-muted">
                      <th className="px-3 py-2.5 font-medium">Year</th>
                      <th className="px-3 py-2.5 font-medium">Principal</th>
                      <th className="px-3 py-2.5 font-medium">Interest</th>
                      <th className="px-3 py-2.5 font-medium">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amort.map((y) => (
                      <tr key={y.year} className="border-t border-line">
                        <td className="px-3 py-2 tabular">{y.year}</td>
                        <td className="px-3 py-2 tabular">{fmt(y.principal)}</td>
                        <td className="px-3 py-2 tabular text-chart-blue">{fmt(y.interest)}</td>
                        <td className="px-3 py-2 tabular">{fmt(y.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </ResultPanel>
        }
      />
    </>
  );
}

/* ── 2. Tax ──────────────────────────────────────────────────────────── */
function TaxCalc() {
  const [income, setIncome] = useState(1200000);
  const [c80c, set80c] = useState(150000);
  const [c80d, set80d] = useState(25000);
  const [hra, setHra] = useState(0);
  const { oldTax, newTax, saves, better } = calcTax(income, c80c, c80d, hra);

  return (
    <CalcShell
      title="Income Tax Calculator"
      inputs={
        <>
          <NumberInput label="Annual Income (₹)" value={income} onChange={setIncome} step={10000} prefix="₹" />
          <NumberInput
            label="80C Deductions (₹)"
            hint="PPF, ELSS, LIC, etc. (max ₹1.5L)"
            value={c80c}
            onChange={set80c}
            step={1000}
            prefix="₹"
          />
          <NumberInput
            label="80D (Health Insurance) (₹)"
            value={c80d}
            onChange={set80d}
            step={1000}
            prefix="₹"
          />
          <NumberInput label="HRA Exemption (₹)" value={hra} onChange={setHra} step={1000} prefix="₹" />
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Old Regime Tax" value={fmt(oldTax)} highlight="green" />
              <ResultRow label="New Regime Tax" value={fmt(newTax)} highlight="blue" />
              <ResultRow
                label="You save"
                value={`${fmt(Math.abs(saves))} with ${better}`}
                emphasized
                highlight="green"
              />
            </div>
            <div>
              <Donut
                parts={[
                  { value: Math.max(1, oldTax), color: "#10b981" },
                  { value: Math.max(1, newTax), color: "#60a5fa" },
                ]}
                centerLabel="Better Regime"
                centerValue={better}
              />
              <DonutLegend
                items={[
                  { label: "Old Regime", color: "bg-accent" },
                  { label: "New Regime", color: "bg-chart-blue" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 3. SIP ──────────────────────────────────────────────────────────── */
function SIPCalc() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const { maturity, invested, gained } = calcSIP(monthly, rate, years);

  return (
    <CalcShell
      title="SIP Calculator"
      inputs={
        <>
          <NumberInput label="Monthly SIP Amount (₹)" value={monthly} onChange={setMonthly} step={500} prefix="₹" />
          <NumberInput label="Expected Return (% per year)" value={rate} onChange={setRate} step={0.5} />
          <NumberInput label="Time Period (years)" value={years} onChange={setYears} step={1} min={1} max={40} />
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Maturity Value" value={fmt(maturity)} emphasized highlight="green" />
              <ResultRow label="Total Invested" value={fmt(invested)} />
              <ResultRow label="Wealth Gained" value={fmt(gained)} highlight="gold" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: invested, color: "#10b981" },
                  { value: gained, color: "#f5c842" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Invested", color: "bg-accent" },
                  { label: "Returns", color: "bg-gold" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 4. Lump Sum ─────────────────────────────────────────────────────── */
function LumpSumCalc() {
  const [amount, setAmount] = useState(500000);
  const [cagr, setCagr] = useState(12);
  const [years, setYears] = useState(10);
  const { future, invested, returns } = calcLumpSum(amount, cagr, years);

  return (
    <CalcShell
      title="Lump Sum Returns Calculator"
      inputs={
        <>
          <NumberInput label="Investment Amount (₹)" value={amount} onChange={setAmount} step={10000} prefix="₹" />
          <NumberInput label="Expected CAGR (%)" value={cagr} onChange={setCagr} step={0.5} />
          <NumberInput label="Time Period (years)" value={years} onChange={setYears} step={1} min={1} max={40} />
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Future Value" value={fmt(future)} emphasized highlight="green" />
              <ResultRow label="Invested" value={fmt(invested)} />
              <ResultRow label="Total Returns" value={fmt(returns)} highlight="gold" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: invested, color: "#10b981" },
                  { value: returns, color: "#f5c842" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Principal", color: "bg-accent" },
                  { label: "Returns", color: "bg-gold" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 5. Retirement ───────────────────────────────────────────────────── */
function RetirementCalc() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [monthly, setMonthly] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [postReturn, setPostReturn] = useState(8);
  const { corpus, monthlyAtRetire, years } = calcRetirement(
    currentAge,
    retireAge,
    monthly,
    inflation,
    postReturn
  );

  return (
    <CalcShell
      title="Retirement Calculator"
      inputs={
        <>
          <div className="grid grid-cols-2 gap-3">
            <NumberInput label="Current Age (Yr)" value={currentAge} onChange={setCurrentAge} step={1} min={18} max={70} />
            <NumberInput label="Retirement Age (Yr)" value={retireAge} onChange={setRetireAge} step={1} min={40} max={80} />
          </div>
          <NumberInput label="Monthly Expenses Today (₹)" value={monthly} onChange={setMonthly} step={1000} prefix="₹" />
          <div className="grid grid-cols-2 gap-3">
            <NumberInput label="Inflation Rate (%)" value={inflation} onChange={setInflation} step={0.5} />
            <NumberInput label="Post-Retirement Return (%)" value={postReturn} onChange={setPostReturn} step={0.5} />
          </div>
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Corpus Needed" value={fmt(corpus)} emphasized highlight="green" />
              <ResultRow label="Monthly Expense at Retirement" value={fmt(monthlyAtRetire)} />
              <ResultRow label="Years to Retire" value={`${years} years`} highlight="blue" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: monthlyAtRetire * 12 * 20, color: "#10b981" },
                  { value: corpus, color: "#a78bfa" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Expenses (inflated)", color: "bg-accent" },
                  { label: "Buffer", color: "bg-chart-purple" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 6. PPF ──────────────────────────────────────────────────────────── */
function PPFCalc() {
  const [yearly, setYearly] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);
  const { maturity, deposited, interest } = calcPPF(yearly, rate, years);

  return (
    <CalcShell
      title="PPF Calculator"
      inputs={
        <>
          <NumberInput label="Yearly Deposit (₹)" hint="Max ₹1.5L per year" value={yearly} onChange={setYearly} step={1000} prefix="₹" />
          <NumberInput label="Interest Rate (%)" value={rate} onChange={setRate} step={0.1} />
          <NumberInput label="Duration (years)" value={years} onChange={setYears} step={1} min={15} max={50} />
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Maturity Value" value={fmt(maturity)} emphasized highlight="green" />
              <ResultRow label="Total Deposited" value={fmt(deposited)} />
              <ResultRow label="Interest Earned" value={fmt(interest)} highlight="gold" />
              <ResultRow label="Tax on Returns" value="₹0 (EEE exempt)" highlight="green" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: deposited, color: "#10b981" },
                  { value: interest, color: "#f5c842" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Deposited", color: "bg-accent" },
                  { label: "Interest", color: "bg-gold" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 7. FD ───────────────────────────────────────────────────────────── */
function FDCalc() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [comp, setComp] = useState<"quarterly" | "halfYearly" | "annually">("quarterly");
  const { maturity, interest } = calcFD(principal, rate, years, comp);

  return (
    <CalcShell
      title="FD Calculator"
      inputs={
        <>
          <NumberInput label="Deposit Amount (₹)" value={principal} onChange={setPrincipal} step={10000} prefix="₹" />
          <NumberInput label="Interest Rate (%)" value={rate} onChange={setRate} step={0.1} />
          <NumberInput label="Tenure (years)" value={years} onChange={setYears} step={1} min={1} max={20} />
          <SelectInput
            label="Compounding"
            value={comp}
            onChange={(v) => setComp(v as typeof comp)}
            options={[
              { value: "quarterly", label: "Quarterly" },
              { value: "halfYearly", label: "Half-Yearly" },
              { value: "annually", label: "Annually" },
            ]}
          />
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Maturity Value" value={fmt(maturity)} emphasized highlight="green" />
              <ResultRow label="Principal" value={fmt(principal)} />
              <ResultRow label="Interest Earned" value={fmt(interest)} highlight="gold" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: principal, color: "#10b981" },
                  { value: interest, color: "#f5c842" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Principal", color: "bg-accent" },
                  { label: "Interest", color: "bg-gold" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}

/* ── 8. Gratuity ─────────────────────────────────────────────────────── */
function GratuityCalc() {
  const [basic, setBasic] = useState(80000);
  const [years, setYears] = useState(12);
  const { amount, taxFree, taxable, eligible } = calcGratuity(basic, years);

  return (
    <CalcShell
      title="Gratuity Calculator"
      inputs={
        <>
          <NumberInput label="Last Drawn Basic + DA (₹/month)" value={basic} onChange={setBasic} step={1000} prefix="₹" />
          <NumberInput label="Years of Service (Yr)" value={years} onChange={setYears} step={1} min={0} max={50} />
          {!eligible && (
            <div className="rounded-xl border border-chart-amber/30 bg-chart-amber/8 px-4 py-3 text-xs text-chart-amber flex items-start gap-2">
              <AlertTriangle size={14} className="shrink-0 mt-0.5" />
              Minimum 5 years of service required for gratuity eligibility.
            </div>
          )}
        </>
      }
      output={
        <ResultPanel>
          <div className="grid sm:grid-cols-[1fr_220px] gap-5 items-center">
            <div className="space-y-1">
              <ResultRow label="Gratuity Amount" value={fmt(amount)} emphasized highlight="green" />
              <ResultRow label="Tax-Free (up to ₹20L)" value={fmt(taxFree)} highlight="green" />
              <ResultRow label="Taxable" value={fmt(taxable)} highlight="red" />
              <ResultRow label="Formula" value="(Basic × 15 × Yrs) / 26" />
            </div>
            <div>
              <Donut
                parts={[
                  { value: Math.max(1, taxFree), color: "#10b981" },
                  { value: Math.max(1, taxable), color: "#f87171" },
                ]}
              />
              <DonutLegend
                items={[
                  { label: "Tax-Free", color: "bg-accent" },
                  { label: "Taxable", color: "bg-chart-red" },
                ]}
              />
            </div>
          </div>
        </ResultPanel>
      }
    />
  );
}
