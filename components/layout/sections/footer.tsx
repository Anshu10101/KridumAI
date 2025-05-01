"use client";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface FooterProps {
  className?: string;
}

interface FooterColumn {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Integrations", href: "#integrations" },
      { name: "Pricing", href: "#pricing" },
      { name: "Changelog", href: "#changelog" },
      { name: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "News", href: "#news" },
      { name: "Partners", href: "#partners" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Help Center", href: "#help" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Webinars", href: "#webinars" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookies", href: "#cookies" },
      { name: "Accessibility", href: "#accessibility" },
      { name: "Sitemap", href: "#sitemap" },
    ],
  },
];

export const FooterSection = ({ className }: FooterProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <footer className="container py-8 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <motion.div 
        className="relative z-10 space-y-8"
        style={{ opacity, scale }}
      >
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-6 border-b border-muted/20">
          <AnimatedSection delay={0.2}>
            <div>
              <Link href="/" className="text-2xl font-bold">
                <span className="text-white">
                  Kridum<span className="text-neutral-400">AI</span>
                </span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-base font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KridumAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
