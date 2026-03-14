"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  DoorOpen,
  Mic,
  Image,
  Code2,
  Coffee,
  Cpu,
  Gamepad2,
  Award,
} from "lucide-react";

const timelineEvents = [
  { id: 1, event: "Registration & Check-in", timestamp: new Date("2024-02-28T08:00:00"), date: "FEB 28, 2024", day: "DAY 1", time: "08:00 – 09:00 AM", desc: "ARRIVAL & REGISTRATION", icon: <DoorOpen /> },
  { id: 2, event: "Opening Ceremony", timestamp: new Date("2024-02-28T09:00:00"), date: "FEB 28, 2024", day: "DAY 1", time: "09:00 – 10:00 AM", desc: "INAUGURATION & WELCOME", icon: <Mic /> },
  { id: 3, event: "Poster Competition", timestamp: new Date("2024-02-28T10:00:00"), date: "FEB 28, 2024", day: "DAY 1", time: "10:00 AM – 12:30 PM", desc: "CREATIVE SHOWCASE", icon: <Image /> },
  { id: 4, event: "Lunch Break", timestamp: new Date("2024-02-28T12:30:00"), date: "FEB 28, 2024", day: "DAY 1", time: "12:30 – 01:30 PM", desc: "RECHARGE & REFUEL", icon: <Coffee /> },
  { id: 5, event: "Blind Coding Competition", timestamp: new Date("2024-02-28T13:30:00"), date: "FEB 28, 2024", day: "DAY 1", time: "01:30 – 04:00 PM", desc: "CODE WITHOUT SIGHT", icon: <Code2 /> },
  { id: 6, event: "PUBG Tournament – Round 1", timestamp: new Date("2024-02-28T16:00:00"), date: "FEB 28, 2024", day: "DAY 1", time: "04:00 – 06:00 PM", desc: "BATTLE BEGINS", icon: <Gamepad2 /> },
  { id: 7, event: "Mini Hackathon Kickoff", timestamp: new Date("2024-03-01T09:00:00"), date: "MAR 01, 2024", day: "DAY 2", time: "09:00 – 09:30 AM", desc: "PROBLEM STATEMENT REVEAL", icon: <Cpu /> },
  { id: 8, event: "Mini Hackathon – Build Phase", timestamp: new Date("2024-03-01T09:30:00"), date: "MAR 01, 2024", day: "DAY 2", time: "09:30 AM – 01:00 PM", desc: "BUILD YOUR SOLUTION", icon: <Cpu /> },
  { id: 9, event: "PUBG Tournament – Finals", timestamp: new Date("2024-03-01T14:00:00"), date: "MAR 01, 2024", day: "DAY 2", time: "02:00 – 04:00 PM", desc: "FINAL SHOWDOWN", icon: <Gamepad2 /> },
  { id: 10, event: "Hackathon Presentations", timestamp: new Date("2024-03-01T14:00:00"), date: "MAR 01, 2024", day: "DAY 2", time: "02:00 – 04:00 PM", desc: "DEMO YOUR PROJECT", icon: <Cpu /> },
  { id: 11, event: "Prize Distribution & Closing", timestamp: new Date("2024-03-01T16:00:00"), date: "MAR 01, 2024", day: "DAY 2", time: "04:00 PM onwards", desc: "VICTORY CEREMONY", icon: <Award /> },
];

export const TimelineSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const [liveProgress, setLiveProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const first = timelineEvents[0].timestamp;
      const last = timelineEvents[timelineEvents.length - 1].timestamp;
      if (now < first) setLiveProgress(0);
      else if (now > last) setLiveProgress(100);
      else {
        const total = last.getTime() - first.getTime();
        setLiveProgress(((now.getTime() - first.getTime()) / total) * 100);
      }
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-24 md:py-60 relative z-10 bg-[#020202] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="mb-16 md:mb-32 flex flex-col items-center">
          <p className="text-purple-500 font-mono text-[10px] tracking-[0.5em] sm:tracking-[1em] mb-4 uppercase font-black italic">
            {"// EVENT_SCHEDULE"}
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-center uppercase tracking-tighter italic leading-none">
            The Schedule
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line (desktop) */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-10 hidden md:block">
            <div
              className="absolute top-0 w-full bg-gradient-to-b from-purple-500 via-purple-500/50 to-purple-500/0 transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              style={{ height: `${liveProgress}%` }}
            />
          </div>

          {/* Live Marker */}
          {liveProgress > 0 && liveProgress < 100 && (
            <div
              className="absolute left-10 md:left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center transition-all duration-1000 ease-linear"
              style={{ top: `${liveProgress}%` }}
            >
              <div className="w-10 h-10 border border-purple-500 rounded-full animate-ping absolute -left-[19px]" />
              <div className="ml-8 bg-purple-500 text-black px-2 py-0.5 text-[8px] font-black font-mono skew-x-[-12deg] shadow-[4px_4px_0_rgba(255,255,255,0.1)]">
                EVENT_IN_PROGRESS
              </div>
            </div>
          )}

          {/* Mobile Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-white/5 md:hidden" />

          {/* Events */}
          <div className="space-y-24 relative">
            {timelineEvents.map((evt, idx) => {
              const isPast = new Date() > evt.timestamp;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -120 : 120 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className={`relative flex items-center gap-4 sm:gap-12 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isPast ? "opacity-40" : "opacity-100"}`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-10 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020202] border-2 ${
                      isPast ? "border-gray-800" : "border-purple-500"
                    } z-30 flex items-center justify-center`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isPast ? "bg-gray-800" : "bg-purple-500 animate-pulse"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-20 md:pl-0">
                    <div
                      className={`flex flex-col ${
                        idx % 2 === 0
                          ? "md:items-end md:text-right"
                          : "md:items-start md:text-left"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        {idx % 2 !== 0 && (
                          <div
                            className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                              isPast
                                ? "border-white/5 text-gray-800"
                                : "border-purple-500/50 text-purple-500"
                            } bg-white/[0.02]`}
                          >
                            {React.isValidElement(evt.icon) &&
                              React.cloneElement(evt.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                          </div>
                        )}
                        <div className="space-y-0.5">
                          <span
                            className={`block font-mono text-[7px] sm:text-[9px] font-black tracking-wider sm:tracking-widest uppercase ${
                              isPast ? "text-gray-600" : "text-purple-500"
                            }`}
                          >
                            {evt.day} • {evt.date} • {evt.time}
                          </span>
                          <h3
                            className={`text-xl sm:text-3xl font-black uppercase tracking-tighter italic ${
                              isPast ? "text-gray-500" : "text-white"
                            }`}
                          >
                            {evt.event}
                          </h3>
                        </div>
                        {idx % 2 === 0 && (
                          <div
                            className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                              isPast
                                ? "border-white/5 text-gray-800"
                                : "border-purple-500/50 text-purple-500"
                            } bg-white/[0.02]`}
                          >
                            {React.isValidElement(evt.icon) &&
                              React.cloneElement(evt.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.3em] font-bold max-w-xs">
                        {evt.desc}
                      </p>
                    </div>
                  </div>

                  {/* Time (desktop) */}
                  <div className="hidden md:flex flex-1 flex-col justify-center">
                    <div
                      className={`p-4 ${
                        idx % 2 === 0 ? "text-left pl-12" : "text-right pr-12"
                      }`}
                    >
                      <span
                        className={`text-5xl font-black font-mono italic transition-colors uppercase select-none ${
                          isPast
                            ? "text-white/5"
                            : "text-white/20 opacity-100 group-hover:text-white/40"
                        }`}
                      >
                        {evt.time}
                      </span>
                    </div>
                  </div>

                  {/* Time (mobile) */}
                  <div className="md:hidden absolute top-[-24px] left-[60px]">
                    <span
                      className={`text-[11px] font-mono font-black tracking-widest ${
                        isPast ? "text-gray-500" : "text-purple-500/80"
                      }`}
                    >
                      {evt.time}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
