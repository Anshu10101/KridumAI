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
import { LineDrop } from "@/components/animations/line-drop";

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
  
  // Line positions for the dropping animation
  const linePositions = Array.from({ length: 30 }, (_, index) => ({
    left: `${(index + 1) * 3.33}%`,
    delay: index * 0.05,
    height: Math.floor(Math.random() * (700 - 400) + 400),
  }));
  
  return (
    <section className="relative overflow-hidden min-h-screen bg-background" ref={containerRef}>
      {/* Professional Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-[0.1]" />
      
      {/* Line Dropping Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {linePositions.map((pos, index) => (
          <LineDrop
            key={index}
            delay={pos.delay}
            height={pos.height}
            className="absolute top-0"
            style={{ left: pos.left }}
          />
        ))}
      </div>

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
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)] py-20">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <FeatureCard icon={Brain} title="AI-Powered Learning" delay={0.2} />
                <FeatureCard icon={GamepadIcon} title="Game-Based Education" delay={0.4} />
                <FeatureCard icon={Bot} title="Adaptive Teaching" delay={0.6} />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Learning with{" "}
                <span className="text-foreground dark:text-white">
                  Kridum<span className="text-primary dark:text-neutral-400">AI</span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-xl">
                Experience the future of education where AI-powered games create personalized, engaging learning journeys for every student.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group px-6 font-semibold"
                >
                  <Link href="https://www.kridumai.com/" target="_blank" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                
                <Button
                  variant="secondary"
                  size="default"
                  className="border border-muted hover:bg-accent transition-all duration-300 px-6"
                >
                  <Link href="https://www.KridumAI.com/" target="_blank" className="flex items-center gap-2">
                    Watch Demo
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Interactive Image */}
          <AnimatedSection delay={0.6}>
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
                <Image
                  width={1200}
                  height={1200}
                  className="w-full rounded-lg relative z-10 border border-muted/20"
                  src={theme === "light" ? "/hero-image-light.png" : "/hero-image-dark.png"}
                  alt="KridumAI platform"
                  priority={true}
                />
                
                {/* Floating Elements */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-8 right-10 bg-card/50 backdrop-blur-lg rounded-lg p-4 border border-border"
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
                  className="absolute -bottom-6 left-10 bg-card/50 backdrop-blur-lg rounded-lg p-4 border border-muted"
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
