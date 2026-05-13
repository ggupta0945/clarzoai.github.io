"use client";

import { cn, formatIndianCurrency } from "@/lib/utils";

export function NumberInput({
  label,
  hint,
  value,
  onChange,
  step = 1,
  min,
  max,
  prefix,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  min?: number;
  max?: number;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-1.5">
        <span className="text-xs font-medium text-ink-dim">{label}</span>
        {hint && <span className="text-[0.7rem] text-ink-muted">{hint}</span>}
      </span>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-muted">{prefix}</span>
        )}
        <input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          step={step}
          min={min}
          max={max}
          className={cn(
            "w-full glass !rounded-xl py-3 text-sm tabular outline-none focus:border-accent-light/40",
            prefix ? "pl-8 pr-3" : "px-3"
          )}
        />
      </div>
    </label>
  );
}

export function SelectInput({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink-dim mb-1.5">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass !rounded-xl px-3 py-3 text-sm outline-none focus:border-accent-light/40 cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-bg-elevated">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ResultPanel({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="glass p-7 h-full">
      {title && (
        <h4 className="text-xs uppercase tracking-wider text-accent-deep font-semibold mb-5">
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}

export function ResultRow({
  label,
  value,
  emphasized = false,
  highlight,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
  highlight?: "green" | "gold" | "blue" | "red";
}) {
  const colors: Record<string, string> = {
    green: "text-accent-deep",
    gold: "text-gold",
    blue: "text-chart-blue",
    red: "text-chart-red",
  };
  return (
    <div className="flex items-baseline justify-between py-2.5 border-b border-line last:border-0">
      <span className={cn("text-sm", emphasized ? "text-ink font-semibold" : "text-ink-dim")}>
        {label}
      </span>
      <span
        className={cn(
          "tabular font-display",
          emphasized ? "text-2xl font-semibold" : "text-sm font-semibold",
          highlight && colors[highlight]
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function fmt(n: number) {
  return formatIndianCurrency(n);
}

export function DonutLegend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4 text-xs text-ink-muted">
      {items.map((i) => (
        <span key={i.label} className="inline-flex items-center gap-1.5">
          <span className={`size-2.5 rounded-full ${i.color}`} />
          {i.label}
        </span>
      ))}
    </div>
  );
}

export function Donut({
  parts,
  centerLabel,
  centerValue,
}: {
  parts: { value: number; color: string }[];
  centerLabel?: string;
  centerValue?: string;
}) {
  const total = parts.reduce((s, p) => s + p.value, 0) || 1;
  let cumulative = 0;
  const radius = 70;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative aspect-square w-full max-w-[220px] mx-auto">
      <svg viewBox="0 0 200 200" className="-rotate-90 w-full h-full">
        <circle cx="100" cy="100" r={radius} fill="none" stroke="rgba(10,37,64,0.08)" strokeWidth={stroke} />
        {parts.map((p, i) => {
          const length = (p.value / total) * circumference;
          const offset = (cumulative / total) * circumference;
          cumulative += p.value;
          return (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={p.color}
              strokeWidth={stroke}
              strokeDasharray={`${length} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        {centerLabel && <div className="text-[0.7rem] text-ink-muted">{centerLabel}</div>}
        {centerValue && (
          <div className="font-display text-xl font-semibold tabular mt-0.5">{centerValue}</div>
        )}
      </div>
    </div>
  );
}
