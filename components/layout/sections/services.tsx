"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  description: string;
  pro: ProService;
}

const serviceList: ServiceProps[] = [
  {
    title: "Game-Based Curriculum Development",
    description:
      "Custom design of educational games aligned with your specific curriculum and learning objectives.",
    pro: 0,
  },
  {
    title: "Educator Training & Support",
    description:
      "Comprehensive training and ongoing support to help educators maximize the platform's potential.",
    pro: 0,
  },
  {
    title: "Custom Game Design Services",
    description: "Specialized game development tailored to your unique educational requirements.",
    pro: 0,
  },
  {
    title: "Enterprise Integration Solutions",
    description: "Seamless integration with existing learning management systems and educational platforms.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <AnimatedSection className="space-y-4 relative">
        <AnimatedSection delay={0.2}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Services
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Transforming Education Together
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            Beyond our platform, we offer specialized services to help educational institutions implement game-based learning effectively.
          </h3>
        </AnimatedSection>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto relative z-10">
        {serviceList.map(({ title, description, pro }, index) => (
          <AnimatedSection
            key={title}
            delay={0.2 * (index + 1)}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Card
              className="bg-muted/60 dark:bg-card h-full relative backdrop-blur-sm border border-muted/40 hover:border-primary/20 transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <Badge
                data-pro={ProService.YES === pro}
                variant="secondary"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                PREMIUM
              </Badge>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
