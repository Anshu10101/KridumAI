import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KridumAI - Game-Based Learning Platform",
  description: "Transform education through interactive gaming experiences powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased relative theme-transition", inter.className)}>
        {/* Futuristic background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
