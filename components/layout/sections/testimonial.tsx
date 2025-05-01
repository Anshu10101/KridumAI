"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface ReviewProps {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  rating?: number;
}

const reviewData: ReviewProps[] = [
  {
    name: "Dr. Emily Chen",
    role: "Middle School Science Teacher",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimonial:
      "KridumAi platform has completely revolutionized how I teach science. My students are more engaged than ever, and I've seen a significant improvement in their test scores.",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    role: "High School History Teacher",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimonial:
      "I was skeptical about game-based learning at first, but KridumAi changed my perspective. Creating interactive history quests has made historical events come alive for my students.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Elementary School Principal",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    testimonial:
      "After implementing KridumAi across our entire school, we've seen dramatic improvements in student attendance, participation, and achievement.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Educational Technology Director",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    testimonial:
      "From a technical perspective, KridumAi stands out for its seamless integration with our existing systems and its robust analytics capabilities.",
    rating: 5,
  },
];

// Double the reviews for seamless scrolling
const infiniteReviews = [...reviewData, ...reviewData];

const TestimonialCard = ({ review, index }: { review: ReviewProps; index: number }) => {
  return (
    <div className="px-4 py-2">
      <AnimatedSection delay={0.1 * (index % 4)}>
        <Card className="relative w-[450px] bg-secondary/20 dark:bg-secondary/10 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />
          
          <CardHeader className="relative z-10 pb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div>
                <CardTitle className="text-lg font-semibold">{review.name}</CardTitle>
                <CardDescription className="text-primary/80 font-medium">{review.role}</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="mb-3">
              {Array.from({ length: review.rating || 5 }).map((_, i) => (
                <Star key={i} className="inline-block w-4 h-4 text-primary fill-primary mr-1" />
              ))}
            </div>
            
            <div className="relative">
              <Quote className="absolute -left-1 -top-1 w-6 h-6 text-primary/20 rotate-180" />
              <p className="text-foreground/90 relative z-10 pl-5 leading-relaxed">
                {review.testimonial}
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  return (
    <section id="testimonials" className="relative overflow-hidden bg-background/50" ref={containerRef}>
      {/* Background Elements */}
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 z-0" />
      <motion.div
        style={{ opacity, scale }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ opacity, scale }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 py-24 sm:py-32">
        <div className="container mb-16">
          <AnimatedSection className="text-center space-y-4">
            <AnimatedSection delay={0.2}>
              <h2 className="text-lg text-primary tracking-wider font-semibold">
                Testimonials
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold">
                Loved by Educators Worldwide
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
                Discover how KridumAI is transforming classrooms and improving learning outcomes for students across the globe.
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        <div className="relative w-full">
          {/* Gradient Overlays */}
          <motion.div 
            style={{ opacity }}
            className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-20" 
          />
          <motion.div 
            style={{ opacity }}
            className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-20" 
          />

          {/* Scrolling Container */}
          <div className="overflow-hidden relative">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex items-center"
            >
              {infiniteReviews.map((review, index) => (
                <TestimonialCard key={`${review.name}-${index}`} review={review} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
