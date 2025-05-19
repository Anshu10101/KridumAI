import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, RefreshCw, Upload, Copy, ScanText } from "lucide-react";
import Image from "next/image";

export default function CustomizeGamePage() {
  return (
    <div className="min-h-[100vh] bg-background flex flex-col items-center py-12 px-2">
      <h1 className="text-5xl font-extrabold text-center mb-2 tracking-tight">Customize Your Game</h1>
      <p className="text-lg text-muted-foreground text-center mb-10">Generate unique images for your game elements</p>
      <div className="w-full max-w-3xl bg-muted/60 rounded-2xl shadow-xl p-8 md:p-12 border border-border">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-1">Hero Character</h2>
          <p className="text-muted-foreground mb-6">Create your game&apos;s main character</p>
          <div className="flex flex-col items-center justify-center">
            {/* Image Placeholder */}
            <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center mb-8">
              <Image 
                src="https://placehold.co/160x80/cccccc/222222?text=%20"
                alt="Hero Character"
                width={160}
                height={80}
                unoptimized
                className="object-contain w-32 h-32 opacity-80"
              />
            </div>
            <div className="flex gap-4 mb-6 w-full max-w-md">
              <Button variant="secondary" size="lg" className="flex-1" disabled>
                <RefreshCw className="w-5 h-5 mr-2" /> Regenerate
              </Button>
              <Button variant="default" size="lg" className="flex-1">
                <ArrowRight className="w-5 h-5 mr-2" /> Next: Obstacle
              </Button>
            </div>
            {/* Prompt Input Area */}
            <div className="w-full max-w-md bg-background border border-border rounded-xl p-4 flex flex-col gap-2 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Button variant="ghost" size="icon" type="button"><Upload className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" type="button"><ScanText className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" type="button"><Copy className="w-5 h-5" /></Button>
                <div className="flex-1" />
                <Button variant="secondary" size="icon" type="submit"><ArrowRight className="w-5 h-5" /></Button>
              </div>
              <Input placeholder="Enter image generation prompt" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 