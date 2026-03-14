"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const defaultConfig = {
  duration: { instant: 0, fast: 150, normal: 300, slow: 500, verySlow: 800 },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: { stiffness: 300, damping: 20 },
  },
  stagger: { fast: 30, normal: 50, slow: 100 },
  viewport: { margin: "0px 0px -100px 0px", once: true },
};

const AnimationContext = createContext<{ config: typeof defaultConfig } | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [config] = useState(defaultConfig);

  return (
    <AnimationContext.Provider value={{ config }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimationContext must be used within AnimationProvider");
  }
  return context;
}

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: defaultConfig.duration.normal / 1000,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: defaultConfig.duration.slow / 1000,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: defaultConfig.duration.slow / 1000,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: defaultConfig.duration.slow / 1000,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: defaultConfig.stagger.normal / 1000,
      delayChildren: 0.1,
    },
  },
};
