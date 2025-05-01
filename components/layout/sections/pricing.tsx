"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Educator",
    popular: 0,
    price: 0,
    description:
      "Perfect for individual educators looking to enhance their teaching with game-based learning.",
    buttonText: "Start Free",
    benefitList: [
      "Up to 3 custom games",
      "Basic templates",
      "30 student accounts",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    title: "Institution",
    popular: 1,
    price: 49,
    description:
      "Ideal for schools and educational institutions that want comprehensive game-based learning solutions.",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited custom games",
      "All premium templates",
      "Up to 500 student accounts",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 199,
    description:
      "Complete solution for large educational organizations with custom integration needs.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited everything",
      "Custom game development",
      "Unlimited student accounts",
      "Dedicated support team",
      "Enterprise-level analytics",
    ],
  },
];

export const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="container py-24 sm:py-32 relative z-10">
        <div className="text-center space-y-4 mb-14">
          <AnimatedSection delay={0.2}>
            <h2 className="text-lg text-primary tracking-wider">
              Pricing
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your Learning Journey
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="md:w-1/2 mx-auto text-xl text-muted-foreground">
              Flexible plans designed to meet the needs of educators and institutions of all sizes
            </h3>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {plans.map(({ title, popular, price, description, buttonText, benefitList }, index) => (
            <AnimatedSection 
              key={title} 
              delay={0.5 + index * 0.1}
            >
              <Card
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : "border-border"
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2 text-foreground">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    {description}
                  </CardDescription>

                  <div>
                    <span className="text-3xl font-bold text-foreground">${price}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3 className="text-foreground">{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className={
                      popular === PopularPlan?.YES 
                      ? "w-full bg-card hover:bg-card/80 text-foreground border border-muted/20 px-8 py-6 h-auto text-lg font-medium rounded-lg" 
                      : "w-full bg-card/50 hover:bg-card/80 text-muted-foreground hover:text-foreground border border-muted/20 px-8 py-6 h-auto text-lg font-medium rounded-lg"
                    }
                  >
                    {buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
