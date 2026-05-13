import { Hero } from "@/components/landing/Hero";
import { IntegrationsStrip } from "@/components/landing/IntegrationsStrip";
import { PainSection } from "@/components/landing/PainSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { BentoSection } from "@/components/landing/BentoSection";
import { ExpertSection } from "@/components/landing/ExpertSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntegrationsStrip />
      <PainSection />
      <JourneySection />
      <BentoSection />
      <ExpertSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
