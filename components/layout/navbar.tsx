"use client";
import { Menu, User } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle, MobileThemeToggle } from "./theme-toggle";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  href: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Game Generator",
    description: "Create your own educational games easily.",
    href: "/game-generator"
  },
  {
    title: "Customize Games",
    description: "Tailor existing games to fit your curriculum.",
    href: "/customize-game"
  },
  {
    title: "Interactive Lessons",
    description: "Engage with structured, game-like lessons.",
    href: "/lesson/1"
  },
  {
    title: "Content Creator",
    description: "Build new educational content and activities.",
    href: "/create"
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = React.useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation for dropdown
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGamesDropdownOpen(false);
    };
    if (gamesDropdownOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gamesDropdownOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-shadow duration-200",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link 
          href="/" 
          className="font-bold text-lg flex items-center relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <Icons.kridumLogo 
            size="lg" 
            className="text-foreground dark:text-white relative" 
          />
        </Link>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <Menu className="h-6 w-6 relative text-foreground dark:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-background/95 backdrop-blur-xl border-l border-border/50"
            >
              <div className="h-full flex flex-col">
                <SheetHeader className="p-4 border-b border-border/50">
                  <SheetTitle>
                    <Link href="/" className="flex items-center">
                      <Icons.kridumLogo size="md" className="text-foreground dark:text-white" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-1 p-2">
                    {/* Features Button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base font-normal hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      Features
                    </Button>

                    {/* Route Links */}
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        variant="ghost"
                        className="w-full justify-start text-base font-normal hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </nav>
                <div className="mt-auto p-4 border-t border-border/50 bg-muted/50">
                  <div className="flex items-center justify-between">
                    <MobileThemeToggle />
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 transition-colors"
                    >
                      <Link href="/login">
                        <User className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Custom Featured Games Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md text-lg font-semibold bg-transparent hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              onClick={() => setGamesDropdownOpen((open) => !open)}
              onBlur={(e) => {
                // Only close if focus moves outside dropdown
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setGamesDropdownOpen(false);
                }
              }}
              aria-haspopup="true"
              aria-expanded={gamesDropdownOpen}
            >
              Featured Games
              <svg className={`w-4 h-4 transition-transform ${gamesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {gamesDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-xl z-50 animate-fade-in"
                tabIndex={-1}
                onMouseLeave={() => setGamesDropdownOpen(false)}
              >
                <ul className="divide-y divide-border">
                  {featureList.map(({ title, description, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="block px-5 py-4 hover:bg-primary/10 transition-colors rounded-xl focus:bg-primary/20 focus:outline-none"
                        tabIndex={0}
                      >
                        <div className="font-bold text-base text-foreground mb-1">{title}</div>
                        <div className="text-muted-foreground text-sm">{description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary relative"
            >
              <span className="relative">{label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="relative group"
          >
            <Link href="/login">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <User className="h-5 w-5 relative" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};