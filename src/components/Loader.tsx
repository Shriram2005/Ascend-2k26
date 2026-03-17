"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYMPOSIUM CORE...");

  useEffect(() => {
    const totalDuration = 3200;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        if (prev < 55) return prev + 2.2;
        if (prev < 85) return prev + 1.4;
        return prev + 0.8;
      });
    }, 45);

    const messages = [
      "SYNCING EVENT MATRIX...",
      "LOADING TRACKS AND RULESETS...",
      "AUTHENTICATING KKWIEER NODE...",
      "PREPARING REGISTRATION PORTALS...",
      "A TECHNICAL SYMPOSIUM.",
    ];
    let idx = 0;
    const msgInterval = setInterval(() => {
      if (idx < messages.length) {
        setStatusText(messages[idx]);
        idx++;
      }
    }, 620);

    const completeTimer = setTimeout(onComplete, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.14),rgba(0,0,0,0)_55%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.14),rgba(0,0,0,0)_45%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(255,255,255,0.08)_50%,transparent_51%)] bg-[size:100%_3px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-[19rem] sm:w-[24rem] md:w-[32rem] relative z-10"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] text-cyan-300 tracking-[0.38em] uppercase font-black">ASCEND 2K26</p>
            <h2 className="text-2xl sm:text-3xl text-white font-black tracking-tight leading-none uppercase italic">
              Boot Sequence
            </h2>
          </div>
          <motion.div
            className="w-11 h-11 rounded-full border border-cyan-400/40 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </motion.div>
        </div>

        <div className="flex justify-between text-[10px] text-purple-300 mb-2 font-bold tracking-[0.2em] uppercase">
          <span>Loading Experience Layer</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.45),0_0_18px_rgba(168,85,247,0.35)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.p
          key={statusText}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-6 text-center text-cyan-300 text-[10px] sm:text-[11px] tracking-[0.25em] font-bold uppercase min-h-[1rem]"
        >
          {statusText}
        </motion.p>

        <div className="mt-5 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-1.5 h-1.5 rounded-full bg-purple-300"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.14 }}
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.32em] uppercase text-white/35 font-bold">
        Department of MCA • KKWIEER • Nashik
      </div>
    </motion.div>
  );
};
