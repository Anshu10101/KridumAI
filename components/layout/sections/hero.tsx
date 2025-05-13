"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, GamepadIcon, Bot } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Icons } from "@/components/icons";

const FeatureCard = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-foreground"
  >
    <Icon className="w-4 h-4 text-primary" />
    <span>{title}</span>
  </motion.div>
);

export const HeroSection = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-background" ref={containerRef}>
      {/* Background Gradient Effects */}
      <motion.div 
        initial={{ opacity: 0.8 }}
        style={{ opacity: backgroundOpacity }} 
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-transparent z-20" 
      />
      
      <motion.div 
        initial={{ opacity: 0.4 }}
        style={{ opacity: backgroundOpacity, y }} 
        className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse z-10" 
      />
      
      <motion.div 
        initial={{ opacity: 0.4 }}
        style={{ opacity: backgroundOpacity, y }} 
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700 z-10" 
      />

      <div className="container relative z-30">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(90vh-4rem)] pt-8 pb-16">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-5">
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <FeatureCard icon={Brain} title="AI-Powered Learning" delay={0.2} />
                <FeatureCard icon={Icons.kridumLogo} title="Game-Based Education" delay={0.4} />
                <FeatureCard icon={Bot} title="Adaptive Teaching" delay={0.6} />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Transform Learning with{" "}
                <div className="inline-block">
                  <Icons.kridumLogo size="3xl" className="text-foreground dark:text-white" />
                </div>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-xl">
                Experience the future of education where AI-powered games create personalized, engaging learning journeys for every student.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button asChild size="lg" className="group">
                  <Link href="#pricing">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">
                    Learn More
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Image */}
          <AnimatedSection delay={0.6} className="lg:block">
            <div className="relative group perspective-1000">
              <motion.div
                initial={{ rotateX: 0, rotateY: 0 }}
                animate={{ 
                  rotateX: [0, 2, 0], 
                  rotateY: [0, 5, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
                className="relative z-20"
              >
                <div className="max-w-[600px] mx-auto">
                  <Image
                    width={500}
                    height={250}
                    className="w-full rounded-lg relative z-10 border-[0.5px] border-muted/20"
                    src={theme === "light" ? "/hero-image-light.png" : "/hero-image-dark.png"}
                    alt="KridumAI platform"
                    priority={true}
                    quality={100}
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-8 right-10 bg-card/50 backdrop-blur-lg rounded-lg p-4 border border-border z-50"
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">AI-Powered Learning</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-6 left-10 bg-card/50 backdrop-blur-lg rounded-lg p-4 border border-muted z-50"
                >
                  <div className="flex items-center gap-2">
                    <GamepadIcon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Interactive Games</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
