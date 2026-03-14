"use client";

import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";
import { staggerContainer, slideUp } from "@/components/AnimationProvider";

const glitchVariant = {
  animate: {
    x: [0, -2, 2, -2, 2, 0],
    y: [0, 1, -1, 1, -1, 0],
    filter: [
      "none",
      "hue-rotate(90deg) opacity(0.8)",
      "hue-rotate(-90deg) opacity(0.8)",
      "none",
    ],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};

const CountdownTimer = memo(() => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("March 28, 2026 09:00:00").getTime();
    const interval = setInterval(() => {
      const diff = target - new Date().getTime();
      if (diff < 0) {
        clearInterval(interval);
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6 font-mono justify-center mb-12">
      {Object.entries(time).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-purple-500/40 blur-sm opacity-100 group-hover:bg-purple-500/60 transition-all duration-300" />
            <div className="relative text-xl sm:text-3xl md:text-5xl font-black text-white bg-white/5 border border-white/20 px-2 md:px-5 py-2 w-14 sm:w-20 md:w-28 flex items-center justify-center rounded-sm backdrop-blur-md">
              <span className="tabular-nums">{String(value).padStart(2, "0")}</span>
            </div>
          </div>
          <span className="text-[7px] md:text-[9px] text-gray-500 mt-2 tracking-[0.3em] font-black uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
});
CountdownTimer.displayName = "CountdownTimer";

export const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 px-3 md:px-4 group overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.06),transparent_60%)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center relative z-20 max-w-7xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={slideUp}
          className="inline-flex items-center gap-3 px-5 py-2 border border-purple-500/20 bg-purple-500/5 rounded-full mb-6 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="font-mono text-[9px] text-purple-400 tracking-[0.5em] font-black uppercase">
            K. K. Wagh Education Society&apos;s
          </span>
        </motion.div>

        {/* Dept */}
        <motion.div variants={slideUp} className="mb-4">
          <span className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-[0.4em] font-black uppercase">
            Department of MCA Presents
          </span>
        </motion.div>

        {/* Title */}
        <motion.div variants={slideUp} className="relative mb-6">
          <motion.h1
            variants={glitchVariant}
            animate="animate"
            className="text-6xl sm:text-8xl md:text-[14rem] font-black leading-[0.8] tracking-tighter relative z-10 uppercase scale-y-110 italic"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-white to-cyan-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              ASCEND
              <br />
              <span className="text-4xl sm:text-6xl md:text-[8rem]">2K26</span>
            </span>
          </motion.h1>
          <div
            className="absolute inset-0 text-white/5 blur-3xl -z-10 animate-pulse select-none"
            aria-hidden="true"
          >
            ASCEND 2K26
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          variants={slideUp}
          className="text-xl sm:text-2xl md:text-5xl font-black text-cyan-400 tracking-tighter mb-8 uppercase opacity-90 leading-none italic"
        >
          <span className="text-white">It&apos;s Time</span> to Rise
        </motion.h2>

        {/* Event Info */}
        <motion.div variants={slideUp} className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-4 text-gray-400 font-mono text-xs md:text-sm tracking-[0.2em] font-bold">
            <Calendar size={16} className="text-purple-500" />
            <span>28 MARCH, 2026</span>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span>NASHIK_HQ</span>
          </div>
          <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
            K. K. Wagh Institute of Engineering Education &amp; Research
          </p>
          <p className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">
            MCA Department, 4th Floor, D Block, KKWIEER, Nashik
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={slideUp}>
          <CountdownTimer />
        </motion.div>

        {/* Events Highlight */}
        <motion.div
          variants={slideUp}
          className="flex flex-wrap items-center justify-center gap-3 mt-4"
        >
          {["Poster Competition", "Blind Coding", "Mini Hackathon", "PUBG Tournament"].map(
            (event) => (
              <div
                key={event}
                className="px-4 md:px-6 py-2 md:py-3 bg-white/5 border border-purple-500/20 rounded-sm backdrop-blur-sm"
              >
                <span className="text-[10px] md:text-xs font-mono text-purple-300 tracking-[0.2em] font-black uppercase">
                  {event}
                </span>
              </div>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll Down Button */}
      {showScroll && (
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          className="fixed right-6 bottom-8 z-50 flex flex-col items-center select-none focus:outline-none group"
          style={{ pointerEvents: "auto" }}
          aria-label="Scroll Down"
        >
          <span className="animate-bounce-slow">
            <ChevronDown
              size={40}
              className="text-purple-400 drop-shadow-lg group-active:scale-90 transition-transform"
            />
          </span>
          <span className="text-xs text-purple-400 font-mono mt-1 tracking-widest bg-black/70 px-2 py-0.5 rounded">
            Scroll Down
          </span>
        </button>
      )}

      {/* Bottom Left Debug Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <div className="flex flex-col gap-2 font-mono text-[8px] text-cyan-700 uppercase font-black tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-cyan-700" /> EVENT: ASCEND_2K26
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-cyan-700" /> STATUS: LIVE
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-cyan-700" /> VENUE: KKWIEER_NASHIK
          </div>
        </div>
      </motion.div>
    </section>
  );
};
