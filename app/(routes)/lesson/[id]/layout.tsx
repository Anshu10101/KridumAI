import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Lesson Navigation Bar - positioned below main nav */}
      <div className="relative mt-[64px]"> {/* Add margin-top to account for main navbar */}
        <nav className="w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="flex items-center gap-6">
              {/* Back Button */}
              <Link href="/">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>

              {/* Course Title */}
              <div className="py-2">
                <h1 className="text-base font-medium">
                  JavaScript Course for Beginners
                </h1>
              </div>
            </div>

            {/* Right side navigation items can be added here */}
            <div className="ml-auto flex items-center gap-4">
              {/* Add any additional navigation items here */}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
} 