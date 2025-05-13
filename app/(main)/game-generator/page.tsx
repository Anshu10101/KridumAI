import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function GameGeneratorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-24 pb-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Game Generator</h1>
      <div className="w-full max-w-xl bg-card rounded-2xl shadow-xl px-8 py-10 border border-border">
        <Tabs defaultValue="concept" className="w-full">
          <TabsList className="w-full flex justify-between mb-8 gap-2">
            <TabsTrigger value="concept" className="flex-1">Generate Concept</TabsTrigger>
            <TabsTrigger value="style" className="flex-1">Generate Game Style</TabsTrigger>
            <TabsTrigger value="asset" className="flex-1">Generate Single Asset</TabsTrigger>
          </TabsList>
          <TabsContent value="concept">
            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="topic" className="mb-1 block">Topic</Label>
                <Input id="topic" placeholder="Enter your game topic here..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="mb-1 block">Description</Label>
                <Textarea id="description" placeholder="Describe your game idea in detail..." />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full" variant="default" size="lg">Generate Concept</Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="style">
            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="style-name" className="mb-1 block">Style Name</Label>
                <Input id="style-name" placeholder="Enter the game style name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="style-description" className="mb-1 block">Style Description</Label>
                <Textarea id="style-description" placeholder="Describe the style in detail..." />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full" variant="default" size="lg">Generate Game Style</Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="asset">
            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="asset-name" className="mb-1 block">Asset Name</Label>
                <Input id="asset-name" placeholder="Enter the asset name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="asset-description" className="mb-1 block">Asset Description</Label>
                <Textarea id="asset-description" placeholder="Describe the asset in detail..." />
              </div>
              <div className="pt-2">
                <Button type="submit" className="w-full" variant="default" size="lg">Generate Asset</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 