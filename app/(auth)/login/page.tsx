"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Icons } from "@/components/icons";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-[0.1]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse z-0" 
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700 z-0" 
      />

      <Card className="w-full max-w-md relative z-10 border-border/40 shadow-lg backdrop-blur-sm">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Icons.kridumLogo size="lg" className="text-foreground dark:text-white" />
            </Link>
          </div>
          <div className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password"
              className="bg-background/50"
            />
          </div>
          <Button className="w-full" size="lg">
            Sign In
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="w-full">
              <FcGoogle className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full">
              <FaFacebook className="h-5 w-5 text-blue-600" />
            </Button>
            <Button variant="outline" className="w-full">
              <FaGithub className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center">
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link 
              href="/register" 
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
          <Link 
            href="#" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Forgot your password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
} 