import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { FeaturedGamesSection } from "@/components/layout/sections/featuredgames";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "KridumAi - Game-Based Learning Platform",
  description: "Revolutionizing education through game-based learning and AI",
  openGraph: {
    type: "website",
    url: "https://www.kridumai.com/",
    title: "KridumAi - Game-Based Learning Platform",
    description: "Revolutionizing education through game-based learning and AI",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "KridumAi - Game-Based Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.kridumai.com/",
    title: "KridumAi - Game-Based Learning Platform",
    description: "Revolutionizing education through game-based learning and AI",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
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
    </>
  );
}
