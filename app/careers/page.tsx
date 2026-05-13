import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Pill, Tag } from "@/components/ui/Card";
import { PRINCIPLES, ROLES } from "@/lib/data/careers";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the future of wealth clarity with us. At Clarzo.ai we're crafting digital experiences that are intuitive, modern, and impactful.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-12">
        <Container>
          <Reveal className="max-w-3xl">
            <div className="eyebrow mb-5">We&apos;re Hiring · Founding Team</div>
            <h1 className="font-display text-display-xl text-ink">
              Build the Future of Wealth{" "}
              <span className="text-gradient">Clarity</span>{" "}
              with Us
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-dim leading-relaxed">
              At Clarzo.ai, we&apos;re crafting digital experiences that are intuitive, modern, and
              impactful — helping every investor see, understand, and act on their complete
              financial picture. Join us as a founding team member.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#roles" variant="primary" size="lg">
                See open roles
                <ArrowRight size={16} />
              </Button>
              <Button href={`mailto:${SITE.careersEmail}`} variant="outline" size="lg">
                <Mail size={14} />
                {SITE.careersEmail}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="eyebrow mb-5">
                Why <span className="text-gradient ml-1">Clarzo</span> exists
              </div>
              <h2 className="font-display text-display-md leading-tight">
                Most People don&apos;t have a financial problem.
                <br />
                They have a <span className="text-gradient">clarity problem</span>.
              </h2>
            </Reveal>
            <Reveal>
              <div className="space-y-5 text-ink-dim leading-relaxed">
                <p>
                  Decisions about money — where to invest, how much to save, when to take a risk —
                  are still made through WhatsApp forwards, Telegram tips, and apps that hide
                  complexity behind dashboards no one understands.
                </p>
                <p>
                  We&apos;re building Clarzo to change that. A platform that treats financial
                  planning the way it should be treated: as a craft, not a checklist. Clear enough
                  for a 22-year-old earning their first salary. Powerful enough for someone managing
                  a portfolio across equities, debt, gold, and options.
                </p>
                <p>
                  We&apos;re pre-product. We&apos;re small. The first hires will shape every
                  meaningful decision — the architecture, the brand, the way users feel when they
                  open the app. If that&apos;s the kind of work you&apos;ve been waiting for,
                  you&apos;re in the right place.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="section">
        <Container>
          <Reveal className="max-w-2xl mb-12">
            <div className="eyebrow mb-5">
              What we <span className="text-gradient ml-1">believe</span>
            </div>
            <h2 className="font-display text-display-lg">Our Principles</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title}>
                <div className="glass glass-hover glass-edge p-7 h-full">
                  <div className="font-display text-3xl font-semibold text-gradient tabular mb-4">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="font-display text-lg font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section id="roles" className="section scroll-mt-28">
        <Container>
          <Reveal className="mb-10">
            <div className="eyebrow mb-5">Open Roles</div>
            <h2 className="font-display text-display-lg">
              Founding seats. <span className="text-gradient">Real ownership.</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            {ROLES.map((r) => (
              <Reveal key={r.id}>
                <article
                  id={r.id}
                  className="glass glass-edge p-7 sm:p-9 scroll-mt-28 relative overflow-hidden"
                >
                  <div
                    className="absolute -top-32 -right-32 size-80 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(16,185,129,0.07), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Tag>
                            <span>{r.emoji}</span>
                            {r.department}
                          </Tag>
                          <Pill>{r.type}</Pill>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                          {r.title}
                        </h3>
                      </div>
                      <Button
                        href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent(r.title)}`}
                        variant="primary"
                        size="md"
                      >
                        Apply Now
                        <ArrowRight size={14} />
                      </Button>
                    </div>

                    <p className="text-ink-dim leading-relaxed max-w-3xl">{r.overview}</p>

                    <div className="mt-7 grid lg:grid-cols-[1.4fr_1fr] gap-8">
                      <div>
                        <div className="eyebrow !text-[0.65rem] mb-3">What you&apos;ll own</div>
                        <ul className="space-y-2.5">
                          {r.responsibilities.map((rr) => (
                            <li
                              key={rr}
                              className="flex items-start gap-3 text-sm text-ink-dim leading-relaxed"
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-light" />
                              {rr}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="eyebrow !text-[0.65rem] mb-3">{r.stackLabel}</div>
                          <div className="flex flex-wrap gap-1.5">
                            {r.stack.map((s) => (
                              <Pill key={s}>{s}</Pill>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="eyebrow !text-[0.65rem] mb-3 !text-gold">
                            {r.bonusLabel}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {r.bonus.map((s) => (
                              <span
                                key={s}
                                className="inline-flex items-center rounded-full border border-gold/30 bg-gold/8 px-3 py-1 text-xs font-medium text-gold"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 pt-6 border-t border-line">
                      <div className="eyebrow !text-[0.65rem] mb-3">{r.mattersLabel}</div>
                      <ul className="space-y-2">
                        {r.matters.map((m) => (
                          <li key={m} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                            <span className="text-accent-deep shrink-0 mt-0.5">→</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Button
                        href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent(r.title)}`}
                        variant="primary"
                        size="md"
                      >
                        Apply Now <ArrowRight size={14} />
                      </Button>
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-dim hover:text-accent-deep transition-colors"
                      >
                        About Clarzo <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <Container>
          <Reveal>
            <h2 className="font-display text-display-lg">
              Ready to Turn Ideas into Experiences People{" "}
              <span className="text-gradient">Love</span>?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-dim max-w-2xl mx-auto leading-relaxed">
              The financial services space is full of products that optimize for the company, not
              the customer. Clarzo is the chance to build the opposite. If that resonates — even if
              there isn&apos;t a role listed that matches your background — write to us.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#roles" variant="primary" size="lg">
                See open roles
                <ArrowRight size={16} />
              </Button>
              <a
                href={`mailto:${SITE.careersEmail}`}
                className="text-sm text-ink-dim hover:text-accent-deep transition-colors inline-flex items-center gap-1.5"
              >
                Or email us at{" "}
                <span className="text-accent-deep font-medium">{SITE.careersEmail}</span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
