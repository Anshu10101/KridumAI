"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "AI-Generated Content",
    description:
      "Our platform leverages artificial intelligence to create educational content that adapts to each learner's needs and preferences.",
  },
  {
    icon: "BadgeCheck",
    title: "Quest-Based Learning",
    description:
      "Students embark on engaging quests that make learning fun while developing critical thinking skills and knowledge retention.",
  },
  {
    icon: "Goal",
    title: "Multiplayer Functionality",
    description:
      "Foster collaboration and community through multiplayer games that encourage teamwork and social learning.",
  },
  {
    icon: "PictureInPicture",
    title: "Pre-Built Templates",
    description:
      "Even educators with no coding experience can easily create engaging games using our vast library of customizable templates.",
  },
  {
    icon: "MousePointerClick",
    title: "Intuitive Interface",
    description:
      "Our user-friendly interface makes it simple to create, customize, and share educational games tailored to your curriculum.",
  },
  {
    icon: "Newspaper",
    title: "Progress Tracking",
    description:
      "Monitor student progress and achievement through comprehensive analytics and reporting tools.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-0 -left-[10%] w-[120%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]"
      />

      <AnimatedSection className="grid place-items-center mb-8 relative">
        <AnimatedSection delay={0.2}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Features
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Why Choose KridumAi?
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mt-4">
            Our platform offers a wide range of features designed to transform traditional learning into an engaging and immersive experience.
          </h3>
        </AnimatedSection>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {featureList.map(({ icon, title, description }, index) => (
          <AnimatedSection
            key={title}
            delay={0.15 * (index + 1)}
            direction={
              index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"
            }
          >
            <Card className="bg-card/50 dark:bg-muted/30 h-full backdrop-blur-sm border-muted/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="space-y-1 flex md:flex-row md:items-start gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.15 * (index + 1) + 0.3
                  }}
                  className="h-12 w-12 flex items-center justify-center bg-accent rounded-lg shadow-inner"
                >
                  <Icon name={icon as keyof typeof icons} size={24} color="hsl(var(--foreground))" className="text-foreground" />
                </motion.div>

                <div className="space-y-1">
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardContent className="p-0 text-muted-foreground">
                    {description}
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
