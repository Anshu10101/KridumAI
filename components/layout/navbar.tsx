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
import { ThemeToggle } from "./theme-toggle";
import { Icons } from "../icons";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#featured-games",
    label: "Featured Games",
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
    title: "Game-Based Learning",
    description: "Transform education through interactive gaming experiences.",
  },
  {
    title: "AI-Powered Education",
    description:
      "Leverage artificial intelligence to create personalized learning paths.",
  },
  {
    title: "Educator Tools",
    description:
      "Comprehensive tools for teachers to design and monitor educational games.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/70 backdrop-blur-xl shadow-lg" 
        : "bg-background/40 backdrop-blur-sm"
    }`}>
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
              side="left" 
              className="bg-background/95 backdrop-blur-xl border-r border-border/50"
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
                    <ThemeToggle />
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 transition-colors"
                    >
                      <Link href="/(auth)/login">
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
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="relative">
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent text-lg py-2 hover:bg-primary/10 hover:text-foreground data-[state=open]:bg-primary/10 data-[state=open]:text-foreground transition-all duration-300"
                >
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-full">
                  <div className="grid w-[600px] grid-cols-2 gap-5 p-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center bg-card/50 p-8 rounded-lg border border-border/50 backdrop-blur-xl">
                      <div className="text-center group/logo relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl blur opacity-0 group-hover/logo:opacity-100 transition duration-500" />
                        <div className="relative">
                          <div className="flex items-center justify-center bg-primary/20 rounded-lg p-3 mx-auto mb-4 shadow-lg w-16 h-16 relative overflow-hidden group-hover/logo:bg-primary/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                            <Icons.kridumLogo className="w-10 h-10 text-primary-foreground relative z-10" />
                          </div>
                          <span className="text-3xl font-extrabold flex items-center justify-center">
                            <span className="text-foreground">Kridum</span>
                            <span className="text-primary dark:text-neutral-400">AI</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="grid gap-3">
                      {featureList.map(({ title, description }) => (
                        <li
                          key={title}
                          className="rounded-lg p-3 text-sm hover:bg-primary/10 transition-all duration-300 group relative"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                          <div className="relative">
                            <p className="mb-1 font-semibold leading-none text-foreground group-hover:text-primary transition-colors">
                              {title}
                            </p>
                            <p className="line-clamp-2 text-muted-foreground">
                              {description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {routeList.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    asChild
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary relative"
                  >
                    <Link href={href}>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <span className="relative">{label}</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="relative group"
          >
            <Link href="/(auth)/login">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <User className="h-5 w-5 relative" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
