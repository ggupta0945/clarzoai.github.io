import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FeatureSplitProps {
  tag: string;
  title: string;
  description: string;
  bullets: React.ReactNode[];
  visual: React.ReactNode;
  flip?: boolean;
  id?: string;
}

export function FeatureSplit({
  tag,
  title,
  description,
  bullets,
  visual,
  flip = false,
  id,
}: FeatureSplitProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className={cn(flip && "lg:order-2")}>
            <Tag>{tag}</Tag>
            <h2 className="mt-5 font-display text-display-md text-ink leading-tight">{title}</h2>
            <p className="mt-5 text-ink-dim leading-relaxed">{description}</p>
            <ul className="mt-7 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-dim leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-light" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={cn(flip && "lg:order-1")}>
            <div className="relative">{visual}</div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
