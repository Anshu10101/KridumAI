"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface CreateGameFormProps {
  gameType: string;
}

export function CreateGameForm({ gameType }: CreateGameFormProps) {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setYoutubeUrl(url);
    
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      setThumbnail(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    } else {
      setThumbnail("");
    }
  };

  const getGameTypeTitle = () => {
    switch (gameType) {
      case "mcq":
        return "Multiple Choice Questions";
      case "fill-blanks":
        return "Fill in the Blanks";
      case "drag-drop":
        return "Drag and Drop";
      case "match-pairs":
        return "Match the Pairs";
      default:
        return "Multiple Choice Questions";
    }
  };

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Create <span className="text-primary">{getGameTypeTitle()}</span>
          </h2>
          <p className="text-muted-foreground">
            Create an interactive game from YouTube content
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Content Type</label>
            <Select defaultValue="youtube">
              <SelectTrigger>
                <SelectValue placeholder="YouTube" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty Level</label>
            <Select defaultValue="easy">
              <SelectTrigger>
                <SelectValue placeholder="Easy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">YouTube URL</label>
            <Input
              type="url"
              placeholder="Enter YouTube video URL"
              className="bg-background/50"
              value={youtubeUrl}
              onChange={handleUrlChange}
            />
          </div>

          {thumbnail && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-primary/20">
              <Image
                src={thumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
            </div>
          )}

          <Button className="w-full">Create {getGameTypeTitle()} Game</Button>
        </div>
      </CardContent>
    </Card>
  );
} 