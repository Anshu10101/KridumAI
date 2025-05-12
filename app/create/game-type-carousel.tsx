"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GameTypeCarouselProps {
  onGameTypeChange?: (gameType: string) => void;
}

const gameTypes = [
  {
    id: "mcq",
    title: "MCQ",
    description: "Multiple Choice Questions Games",
    color: "bg-orange-500",
  },
  {
    id: "fill-blanks",
    title: "Fill in the Blanks",
    description: "Complete the sentences with correct words",
    color: "bg-blue-500",
  },
  {
    id: "drag-drop",
    title: "Drag and Drop",
    description: "Drag items to their correct positions",
    color: "bg-green-500",
  },
  {
    id: "match-pairs",
    title: "Match the Pairs",
    description: "Connect related items together",
    color: "bg-purple-500",
  },
];

export function GameTypeCarousel({ onGameTypeChange }: GameTypeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % gameTypes.length;
    setCurrentIndex(nextIndex);
    onGameTypeChange?.(gameTypes[nextIndex].id);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + gameTypes.length) % gameTypes.length;
    setCurrentIndex(prevIndex);
    onGameTypeChange?.(gameTypes[prevIndex].id);
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {gameTypes.map((game) => (
            <div key={game.id} className="w-full flex-shrink-0">
              <Card className={cn("backdrop-blur-sm border-primary/20", game.color + "/20")}>
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[300px] text-center space-y-4">
                  <h3 className={cn("text-4xl font-bold", game.color.replace("bg-", "text-"))}>
                    {game.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {game.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
} 