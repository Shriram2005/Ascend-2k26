"use client";

import { motion } from "framer-motion";

const sponsors = [
  { name: "K. K. Wagh Education Society", status: "ORGANIZER" },
  { name: "Dept. of MCA", status: "HOST_DEPT" },
  { name: "KKWIEER", status: "INSTITUTE" },
  { name: "Sponsor / Partner", status: "COMING_SOON" },
];

export const SponsorsSection = () => (
  <section className="py-20 md:py-40 relative z-10 bg-[#020202] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
      <p className="text-gray-300 font-mono text-xs sm:text-sm tracking-[0.4em] sm:tracking-[1em] mb-12 md:mb-20 uppercase font-black italic select-none">
        {"// ORGANIZED_BY"}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -5,
              borderColor: "rgba(168,85,247,0.5)",
              backgroundColor: "rgba(168,85,247,0.05)",
            }}
            className="h-44 sm:h-48 border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-crosshair group relative overflow-hidden rounded-sm"
          >
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-purple-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-purple-500 transition-colors" />
            <span className="text-gray-200 font-mono text-sm sm:text-base tracking-widest font-black uppercase group-hover:text-white transition-colors mb-3 text-center">
              {sponsor.name}
            </span>
            <span className="text-xs font-mono text-gray-400 tracking-[0.3em] font-bold uppercase group-hover:text-purple-500 transition-all">
              {sponsor.status}
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/5 transition-all" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
