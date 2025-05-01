"use client";
import { Menu, GamepadIcon, User } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
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
  return (
    <header className="shadow-lg w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-50 rounded-xl flex justify-between items-center p-3 glass-effect border-[0.5px] border-border relative overflow-hidden group">
      {/* Animated glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2s_infinite]" />
      </div>

      <Link href="/" className="font-bold text-lg flex items-center relative group/logo">
        <div className="flex items-center justify-center bg-primary rounded-lg p-2 mr-3 relative">
          <div className="absolute inset-0 rounded-lg bg-primary opacity-50 blur-lg group-hover/logo:opacity-70 transition-opacity duration-300"></div>
          <div className="relative">
            <GamepadIcon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <span className="text-xl font-extrabold flex items-center">
          <span className="text-foreground drop-shadow-[0_0_3px_rgba(0,0,0,0.3)] dark:text-white dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]">
            Kridum
          </span>
          <span className="text-primary dark:text-neutral-400">
            AI
          </span>
        </span>
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden text-white hover:text-primary transition-colors"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-xl rounded-br-xl glass-effect border-white/10"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center group/logo">
                    <div className="flex items-center justify-center bg-primary rounded-lg p-2 mr-3 relative">
                      <div className="absolute inset-0 rounded-lg bg-primary opacity-50 blur-lg group-hover/logo:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative">
                        <GamepadIcon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <span className="text-xl font-extrabold flex items-center">
                      <span className="text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]">
                        Kridum
                      </span>
                      <span className="text-primary drop-shadow-[0_0_3px_rgba(var(--primary),0.3)]">
                        AI
                      </span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base hover:text-white hover:bg-neutral-800"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2 bg-white/10" />
              <ThemeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block mx-auto relative">
        <NavigationMenuList className="relative">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-lg py-2 hover:bg-primary/10 hover:text-foreground data-[state=open]:bg-primary/10 data-[state=open]:text-foreground transition-all duration-300">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full">
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4 bg-background border border-border rounded-xl shadow-lg">
                <div className="flex items-center justify-center bg-card p-8 rounded-lg border border-border backdrop-blur-xl">
                  <div className="text-center group/logo">
                    <div className="flex items-center justify-center bg-primary rounded-lg p-3 mx-auto mb-4 shadow-lg w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-lg bg-primary opacity-50 blur-lg group-hover/logo:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative">
                        <GamepadIcon className="w-10 h-10 text-primary-foreground" />
                      </div>
                    </div>
                    <span className="text-3xl font-extrabold flex items-center justify-center">
                      <span className="text-foreground">
                        Kridum
                      </span>
                      <span className="text-primary dark:text-neutral-400">
                        AI
                      </span>
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-lg p-3 text-sm hover:bg-accent transition-all duration-300 group"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground group-hover:text-primary transition-colors">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
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
                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-primary/10 hover:text-white focus:bg-primary/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
              >
                <Link href={href}>{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggle />
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="hover:bg-primary/10 hover:text-white"
        >
          <Link href="/login">
            <User className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
