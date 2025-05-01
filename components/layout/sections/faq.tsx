"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface FAQProps {
  question: string;
  answer: string;
}

const faqList: FAQProps[] = [
  {
    question: "What is KridumAi?",
    answer:
      "KridumAi is an innovative educational platform that combines the power of games and artificial intelligence to create engaging and interactive learning experiences for students of all ages.",
  },
  {
    question: "Do I need coding experience to create games?",
    answer:
      "Not at all! Our platform features an intuitive interface and pre-built templates that allow educators with no coding or game development experience to easily create and customize educational games.",
  },
  {
    question: "How does game-based learning benefit students?",
    answer:
      "Game-based learning has been proven to increase student engagement, improve knowledge retention, foster critical thinking skills, and make learning more enjoyable. It creates a dynamic environment where students are motivated to actively participate in their educational journey.",
  },
  {
    question: "Can I integrate this with my existing LMS?",
    answer:
      "Yes, our platform offers integration capabilities with most popular Learning Management Systems. Our Enterprise plan includes dedicated support for custom integrations with your specific educational infrastructure.",
  },
  {
    question: "Is the platform accessible to all students?",
    answer:
      "Absolutely. We've designed our platform with accessibility in mind, ensuring that students of all abilities can benefit from our game-based learning approach. We comply with educational accessibility standards and continuously work to improve accessibility features.",
  },
];

export const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="faq" className="container py-24 sm:py-32 relative" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        style={{ opacity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        <div className="text-center space-y-4 mb-14">
          <AnimatedSection delay={0.2}>
            <h2 className="text-lg text-primary tracking-wider">
              FAQ
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="md:w-1/2 mx-auto text-xl text-muted-foreground">
              Have questions about our game-based learning platform? Find answers to common questions below.
            </h3>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <Accordion type="single" collapsible className="w-full lg:w-[60%] mx-auto">
            {faqList.map(({ question, answer }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};
