import { BenefitsSection } from "../components/layout/sections/benefits";
import { CommunitySection } from "../components/layout/sections/community";
import { ContactSection } from "../components/layout/sections/contact";
import { FAQSection } from "../components/layout/sections/faq";
import { FeaturesSection } from "../components/layout/sections/features";
import { FooterSection } from "../components/layout/sections/footer";
import { HeroSection } from "../components/layout/sections/hero";
import { PricingSection } from "../components/layout/sections/pricing";
import { ServicesSection } from "../components/layout/sections/services";
import { SponsorsSection } from "../components/layout/sections/sponsors";
import { FeaturedGamesSection } from "../components/layout/sections/featuredgames";
import { TestimonialSection } from "../components/layout/sections/testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <FeaturedGamesSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
