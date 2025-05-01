"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  delay?: number;
}

export const ScrollAnimation = ({
  children,
  direction = "up",
  className = "",
  delay = 0,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"], // Start animation when element is out of view, end when it's in view
  });

  const directions = {
    up: [50, 0],
    down: [-50, 0],
    left: [50, 0],
    right: [-50, 0],
  };

  const yValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" || direction === "down" ? directions[direction] : [0, 0]
  );

  const xValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" || direction === "right" ? directions[direction] : [0, 0]
  );

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityValue,
        x: xValue,
        y: yValue,
      }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 