import { PricingSection } from "@/components/sections/PricingSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <PricingSection />
      <FeatureSection />
      <SuccessStoriesSection />
      <HeroSection />
      <RoadmapSection />
      <TalentSection />
      <QuizSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
