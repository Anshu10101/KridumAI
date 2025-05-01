"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { DiscordIcon } from "@/components/icons/discord-icon";

export const CommunitySection = () => {
  return (
    <section className="container py-24 sm:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-0 -left-[10%] w-[120%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]"
      />

      <div className="relative z-10">
        <AnimatedSection className="grid place-items-center text-center">
          <AnimatedSection delay={0.2}>
            <div className="bg-card/80 rounded-2xl p-4 mb-8 border border-border shadow-lg">
              <DiscordIcon className="w-20 h-20 text-primary dark:text-white" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to join this{" "}
              <span className="text-gray-700 dark:text-white">
                community
              </span>
              ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl text-muted-foreground mb-12 md:w-[60%] mx-auto">
              Join our vibrant Discord community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-card dark:hover:bg-card/80 dark:text-foreground border border-border px-12 py-6 text-lg font-medium rounded-lg"
            >
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Join Discord
              </a>
            </Button>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};
