"use client";

import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Engaging Learning Experience",
    description:
      "Transform traditional education into a fun, immersive experience that inspires curiosity and a love for learning.",
  },
  {
    icon: "LineChart",
    title: "Improved Knowledge Retention",
    description:
      "Game-based learning has been proven to significantly increase knowledge retention compared to traditional methods.",
  },
  {
    icon: "Wallet",
    title: "Accessible to All",
    description:
      "Our platform is designed to be inclusive and accessible to students of all ages, abilities, and learning styles.",
  },
  {
    icon: "Sparkle",
    title: "Develop Critical Skills",
    description:
      "Foster critical thinking, problem-solving, creativity, and collaboration through interactive gameplay.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col items-center max-w-3xl mx-auto mb-16 space-y-4">
        <AnimatedSection delay={0.2}>
          <h2 className="text-lg font-medium text-primary tracking-wider">
            Benefits
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            The Power of Game-Based Learning
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Our innovative approach to education combines the engagement of gaming with the effectiveness of personalized learning.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefitList.map(({ icon, title, description }, index) => (
          <AnimatedSection
            key={title}
            delay={0.2 * (index + 1)}
            className="border bg-card shadow-sm rounded-xl p-6 group hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-accent text-foreground p-3 rounded-lg shadow-inner shrink-0">
                <Icon
                  color="hsl(var(--foreground))"
                  name={icon as keyof typeof icons}
                  size={24}
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
