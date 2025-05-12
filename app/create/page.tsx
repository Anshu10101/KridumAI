"use client";

import { useState } from "react";
import { GameTypeCarousel } from "./game-type-carousel";
import { CreateGameForm } from "./create-game-form";

export default function CreateGame() {
  const [selectedGameType, setSelectedGameType] = useState("mcq");

  const handleGameTypeChange = (gameType: string) => {
    setSelectedGameType(gameType);
  };

  return (
    <div className="container mx-auto py-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Game Type Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Choose Game Type</h2>
          <GameTypeCarousel onGameTypeChange={handleGameTypeChange} />
        </div>

        {/* Right side - Game Configuration */}
        <div className="space-y-6">
          <CreateGameForm gameType={selectedGameType} />
        </div>
      </div>
    </div>
  );
} 