"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

interface LineDropProps {
  delay?: number;
  duration?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export const LineDrop = ({
  delay = 0,
  duration = 1.5,
  height = 100,
  className = "",
  style = {},
}: LineDropProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isVisible ? height : 0 }}
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
      style={style}
      className={`w-[1px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent ${className}`}
    />
  );
}; 