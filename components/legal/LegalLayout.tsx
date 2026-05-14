"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  intro: string;
  updated: string;
  sections: { id: string; label: string; icon?: string; content: ReactNode }[];
}

export function LegalLayout({ title, intro, updated, sections }: LegalLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <section className="pt-36 sm:pt-40 pb-10">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-display-xl text-ink">{title}</h1>
            <p className="mt-6 text-base sm:text-lg text-ink-dim leading-relaxed">{intro}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated/40 px-3 py-1.5 text-xs text-ink-muted">
              Last updated: {updated}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-[240px_1fr] gap-10">
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="glass p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3 px-2">
                  Sections
                </div>
                <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible no-scrollbar">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={cn(
                        "shrink-0 lg:shrink rounded-lg px-3 py-2 text-xs font-medium transition-all whitespace-nowrap lg:whitespace-normal",
                        active === s.id
                          ? "bg-accent/10 text-accent-deep border border-accent/25"
                          : "text-ink-dim hover:text-ink hover:bg-bg-elevated/50 border border-transparent"
                      )}
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="space-y-14">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">
                    {s.icon && <span className="mr-2">{s.icon}</span>}
                    {s.label}
                  </h2>
                  <div className="legal-prose">{s.content}</div>
                </section>
              ))}
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm sm:text-[0.95rem] text-ink-dim leading-relaxed mb-4 last:mb-0">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <div className="glass !rounded-2xl p-5 sm:p-6 border-accent/30 mb-5">
      <p className="text-sm sm:text-[0.95rem] text-ink leading-relaxed">{children}</p>
    </div>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2.5 mb-5">
      {children}
    </ul>
  );
}

export function LI({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-[0.95rem] text-ink-dim leading-relaxed">
      <span className="mt-2 size-1.5 rounded-full bg-accent-light shrink-0" />
      <span>
        {label && <strong className="text-ink font-semibold">{label}: </strong>}
        {children}
      </span>
    </li>
  );
}

export function Note({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="glass !rounded-2xl p-5 sm:p-6 my-5">
      {title && <div className="text-sm font-semibold text-ink mb-2">{title}</div>}
      <div className="text-sm sm:text-[0.95rem] text-ink-dim leading-relaxed">{children}</div>
    </div>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string[] | ReactNode[])[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line my-5">
      <table className="w-full text-sm">
        <thead className="bg-bg-elevated/60">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent-deep"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-ink-dim leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
