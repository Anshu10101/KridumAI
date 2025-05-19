"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "Kahoot!",
  },
  {
    icon: "Vegan",
    name: "Quizizz",
  },
  {
    icon: "Ghost",
    name: "Blooket",
  },
  {
    icon: "Puzzle",
    name: "Gimkit",
  },
  {
    icon: "Squirrel",
    name: "Prodigy",
  },
  {
    icon: "Cookie",
    name: "Cool Math Games",
  },
  {
    icon: "Drama",
    name: "iCivics",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Interactive Learning Games
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium text-foreground"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="currentColor"
                className="mr-2 text-foreground"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
