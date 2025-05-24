"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function GameGeneratorPage() {
  const [activeTab, setActiveTab] = useState("concept");
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => window.innerWidth < 768; // Changed to md breakpoint for better mobile experience
    setIsMobileView(checkMobile());

    const handleResize = () => setIsMobileView(checkMobile());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, type: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // TODO: Handle the form submission based on type
    console.log(`Generating ${type}:`, data);
  };

  return (
    <main className="min-h-screen w-full bg-background px-4 py-6 sm:py-12 pt-24 sm:pt-32">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Game Generator</h1>
        
        <div className="bg-card/80 rounded-xl shadow-lg border border-border/50 overflow-hidden">
          {isMounted ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* TabsList */}
              {isMobileView ? (
                /* Mobile View */
                <TabsList className="w-full flex flex-row md:hidden">
                  <TabsTrigger 
                    value="concept" 
                    className="flex-1 rounded-none border-r border-border/50 py-3 text-xs sm:text-sm"
                  >
                    Concept
                  </TabsTrigger>
                  <TabsTrigger 
                    value="style" 
                    className="flex-1 rounded-none border-r border-border/50 py-3 text-xs sm:text-sm"
                  >
                    Style
                  </TabsTrigger>
                  <TabsTrigger 
                    value="asset" 
                    className="flex-1 rounded-none py-3 text-xs sm:text-sm"
                  >
                    Asset
                  </TabsTrigger>
                </TabsList>
              ) : (
                /* Desktop View */
                <TabsList className="hidden md:flex justify-between gap-2 p-2 w-full">
                  <TabsTrigger value="concept" className="flex-1">Generate Concept</TabsTrigger>
                  <TabsTrigger value="style" className="flex-1">Generate Style</TabsTrigger>
                  <TabsTrigger value="asset" className="flex-1">Generate Asset</TabsTrigger>
                </TabsList>
              )}

              {/* Form Content */}
              <div className="p-4 sm:p-6">
                <TabsContent value="concept" className="mt-0">
                  <form onSubmit={(e) => handleSubmit(e, "concept")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="concept-topic" className="text-sm font-medium">Topic</Label>
                      <Input 
                        id="concept-topic"
                        name="topic"
                        placeholder="Enter your game topic here..." 
                        className="w-full bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="concept-description" className="text-sm font-medium">Description</Label>
                      <Textarea 
                        id="concept-description"
                        name="description"
                        placeholder="Describe your game idea in detail..." 
                        className="w-full min-h-[120px] bg-background/50"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`} 
                      variant={theme === 'dark' ? 'outline' : 'default'} 
                      size="lg"
                    >
                      Generate Concept
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="style" className="mt-0">
                  <form onSubmit={(e) => handleSubmit(e, "style")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="style-name" className="text-sm font-medium">Style Name</Label>
                      <Input 
                        id="style-name"
                        name="styleName"
                        placeholder="Enter the game style name..." 
                        className="w-full bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="style-description" className="text-sm font-medium">Style Description</Label>
                      <Textarea 
                        id="style-description"
                        name="styleDescription"
                        placeholder="Describe the style in detail..." 
                        className="w-full min-h-[120px] bg-background/50"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`} 
                      variant={theme === 'dark' ? 'outline' : 'default'} 
                      size="lg"
                    >
                      Generate Style
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="asset" className="mt-0">
                  <form onSubmit={(e) => handleSubmit(e, "asset")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="asset-name" className="text-sm font-medium">Asset Name</Label>
                      <Input 
                        id="asset-name"
                        name="assetName"
                        placeholder="Enter the asset name..." 
                        className="w-full bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asset-description" className="text-sm font-medium">Asset Description</Label>
                      <Textarea 
                        id="asset-description"
                        name="assetDescription"
                        placeholder="Describe the asset in detail..." 
                        className="w-full min-h-[120px] bg-background/50"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className={`w-full ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`} 
                      variant={theme === 'dark' ? 'outline' : 'default'} 
                      size="lg"
                    >
                      Generate Asset
                    </Button>
                  </form>
                </TabsContent>
              </div>
            </Tabs>
          ) : (
            // Loading state
            <div className="p-8 text-center text-muted-foreground">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-4 w-20 bg-muted rounded mb-4"></div>
                <div className="h-32 w-full bg-muted rounded"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}