"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "TOTAL_EVENTS", value: "4", color: "text-purple-400" },
  { label: "DURATION", value: "1 Day", color: "text-cyan-400" },
  { label: "PARTICIPANTS", value: "200+", color: "text-green-500" },
  { label: "STARTING_FEE", value: "₹50", color: "text-yellow-400" },
];

export const StatsBar = () => (
  <div className="relative z-20 py-16 bg-[#030303] border-y border-white/5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + 0.1 * idx }}
          className="relative group px-2 sm:px-6 border-l border-white/5 first:border-l-0"
        >
          <p className="text-gray-400 font-mono text-[7px] sm:text-[9px] mb-2 sm:mb-3 tracking-[0.15em] sm:tracking-[0.2em] font-black">
            {stat.label}
          </p>
          <p
            className={`text-2xl sm:text-4xl md:text-6xl font-black ${stat.color} tracking-tighter font-mono group-hover:scale-105 transition-transform cursor-default`}
          >
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);
