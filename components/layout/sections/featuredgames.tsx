"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import Link from "next/link";

interface GameInfo {
  src: string;
  title: string;
  description: string;
  href: string;
}

export const FeaturedGamesSection = () => {
  const games: GameInfo[] = [
    {
      src: "/ft1.png",
      title: "Game Generator",
      description: "Create your own educational games easily.",
      href: "/game-generator"
    },
    {
      src: "/ft2.png",
      title: "Customize Games",
      description: "Tailor existing games to fit your curriculum.",
      href: "/customize-game"
    },
    {
      src: "/featured.png",
      title: "Interactive Lessons",
      description: "Engage with structured, game-like lessons.",
      href: "/lesson/1"
    },
    {
      src: "/ft4.png",
      title: "Content Creator",
      description: "Build new educational content and activities.",
      href: "/create"
    },
  ];

  return (
    <section id="featured-games" className="container lg:w-[75%] py-24 sm:py-32">
      <AnimatedSection className="text-center mb-12">
        <AnimatedSection delay={0.2}>
          <h2 className="text-lg text-primary text-center mb-3 tracking-wider font-semibold">
            Featured Games
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Explore Our Game Collection
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted educational games designed to make learning engaging and fun
          </p>
        </AnimatedSection>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {games.map(({ src, title, description, href }, index) => {
          return (
            <AnimatedSection
              key={index}
              delay={0.2 * (index + 1)}
              direction="up"
            >
              <Link href={href} className="block h-full">
                <Card className="group bg-muted/60 dark:bg-card border-2 border-muted hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}; 