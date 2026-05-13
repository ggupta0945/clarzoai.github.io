import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/utils";

export function FinalCTA({
  heading = (
    <>
      Ready to take control
      <br />
      of your <span className="text-gradient">finances</span>?
    </>
  ),
  subtitle = "Join thousands of Indians building wealth with clarity and confidence.",
}: {
  heading?: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="section relative overflow-hidden">
      <Container size="wide">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-white px-8 sm:px-16 py-20 sm:py-28 text-center shadow-card">
            {/* gradient mesh background */}
            <div className="absolute inset-0 mesh-soft -z-10" />
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-72 pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(16,185,129,0.22), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <h2 className="font-display text-display-xl text-ink leading-[1.02]">{heading}</h2>
            <p className="mt-6 text-base sm:text-lg text-ink-dim max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href={SITE.loginUrl} variant="primary" size="lg">
                Get Started Free
                <ArrowRight size={16} />
              </Button>
              <Button href={SITE.askUrl} variant="ghost" size="lg">
                Talk to Clarzo AI
              </Button>
            </div>
            <div className="mt-8 text-xs text-ink-muted">
              Free forever for tracking · No credit card required
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
