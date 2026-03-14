"use client";

import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ASCEND...");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 25);

    const messages = [
      "LOADING EVENT MODULES...",
      "PREPARING COMPETITIONS...",
      "CONNECTING TO KKWIEER...",
      "CONFIGURING ASCEND 2K26...",
      "READY TO RISE.",
    ];
    let idx = 0;
    const msgInterval = setInterval(() => {
      if (idx < messages.length) {
        setStatusText(messages[idx]);
        idx++;
      }
    }, 700);

    setTimeout(onComplete, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: "circIn" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-64 md:w-96 relative"
      >
        <div className="flex justify-between text-[10px] text-purple-500 mb-2 font-bold tracking-tighter">
          <span>ASCEND_2K26_LOADER</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-[2px] w-full bg-gray-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-6 text-center text-cyan-400 text-[10px] animate-pulse tracking-[0.3em] font-bold uppercase">
          {statusText}
        </p>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10 animate-pulse" />
    </motion.div>
  );
};
