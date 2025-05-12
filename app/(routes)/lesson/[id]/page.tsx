"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Play } from "lucide-react";

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Section */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-primary/20 bg-background/50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lkIFF4maKMU"
              title="JavaScript Course for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Units Section */}
        <div className="space-y-4">
          <Card className="p-6 border-primary/20">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-primary">📘</span> Unit 1
            </h2>
            <p className="text-muted-foreground mt-2">
              Begin your journey with the basics
            </p>
            <Button className="w-full mt-4 bg-primary" size="lg">
              <Play className="w-5 h-5 mr-2" />
              Start Lesson
            </Button>
          </Card>

          <Card className="p-6 border-primary/20 bg-muted/50">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-muted-foreground">
              <span className="text-muted">📘</span> Intermediate
            </h2>
            <p className="text-muted-foreground mt-2">
              Advance your knowledge with complex concepts
            </p>
            <Button className="w-full mt-4" size="lg" variant="outline" disabled>
              <Lock className="w-5 h-5 mr-2" />
              Locked
            </Button>
          </Card>

          <Card className="p-6 border-primary/20 bg-muted/50">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-muted-foreground">
              <span className="text-muted">📘</span> Advanced
            </h2>
            <p className="text-muted-foreground mt-2">
              Master advanced techniques and patterns
            </p>
            <Button className="w-full mt-4" size="lg" variant="outline" disabled>
              <Lock className="w-5 h-5 mr-2" />
              Locked
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
} 