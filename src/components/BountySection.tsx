"use client";

import { motion } from "framer-motion";
import { Image, Code2, Cpu, Gamepad2 } from "lucide-react";

export const BountySection = () => (
  <section id="bounty" className="py-20 md:py-40 relative z-10 bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-24 md:mb-32 relative">
        <motion.h2
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[6rem] sm:text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter uppercase absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full select-none pointer-events-none italic"
        >
          PRIZES
        </motion.h2>
        <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter relative z-10 leading-none">
          The Prizes
        </h2>
        <div className="inline-block px-6 sm:px-12 py-4 sm:py-6 bg-purple-600 text-white font-mono text-xl sm:text-3xl md:text-6xl tracking-tighter mt-8 md:mt-12 uppercase font-black italic shadow-[0_0_60px_rgba(168,85,247,0.6)] animate-pulse">
          EXCITING REWARDS!
        </div>
      </div>

      {/* Prize Cards by Event */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
        {/* Poster Competition */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 md:p-10 border-2 border-purple-500/20 bg-purple-500/5 rounded-sm relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8rem] font-black select-none group-hover:opacity-20 transition-opacity italic">
            01
          </div>
          <h3 className="text-xl sm:text-3xl font-black mb-6 md:mb-8 flex items-center gap-3 sm:gap-5 italic">
            <Image size={32} className="text-purple-500" />
            POSTER COMPETITION
          </h3>
          <div className="space-y-6">
            {[
              { label: "1ST PLACE", prize: "Winner", color: "text-purple-400" },
              { label: "2ND PLACE", prize: "Runner Up", color: "text-white" },
              { label: "3RD PLACE", prize: "2nd Runner Up", color: "text-white" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 sm:p-5 border border-white/10 bg-black group-hover:border-purple-500/30 transition-colors"
              >
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-[0.15em] sm:tracking-[0.3em] font-black">
                  {item.label}
                </span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-black ${item.color} font-mono tracking-tighter`}
                >
                  {item.prize}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Blind Coding */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 md:p-10 border-2 border-cyan-500/20 bg-cyan-500/5 rounded-sm relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8rem] font-black select-none group-hover:opacity-20 transition-opacity italic">
            02
          </div>
          <h3 className="text-xl sm:text-3xl font-black mb-6 md:mb-8 flex items-center gap-3 sm:gap-5 italic">
            <Code2 size={32} className="text-cyan-500" />
            BLIND CODING
          </h3>
          <div className="space-y-6">
            {[
              { label: "1ST PLACE", prize: "Winner", color: "text-cyan-400" },
              { label: "2ND PLACE", prize: "Runner Up", color: "text-white" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 sm:p-5 border border-white/10 bg-black group-hover:border-cyan-500/30 transition-colors"
              >
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-[0.15em] sm:tracking-[0.3em] font-black">
                  {item.label}
                </span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-black ${item.color} font-mono tracking-tighter`}
                >
                  {item.prize}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini Hackathon */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 md:p-10 border-2 border-green-500/20 bg-green-500/5 rounded-sm relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8rem] font-black select-none group-hover:opacity-20 transition-opacity italic">
            03
          </div>
          <h3 className="text-xl sm:text-3xl font-black mb-6 md:mb-8 flex items-center gap-3 sm:gap-5 italic">
            <Cpu size={32} className="text-green-500" />
            MINI HACKATHON
          </h3>
          <div className="space-y-6">
            {[
              { label: "1ST PLACE", prize: "Winner", color: "text-green-400" },
              { label: "2ND PLACE", prize: "Runner Up", color: "text-white" },
              { label: "3RD PLACE", prize: "2nd Runner Up", color: "text-white" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 sm:p-5 border border-white/10 bg-black group-hover:border-green-500/30 transition-colors"
              >
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-[0.15em] sm:tracking-[0.3em] font-black">
                  {item.label}
                </span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-black ${item.color} font-mono tracking-tighter`}
                >
                  {item.prize}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PUBG Tournament */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 md:p-10 border-2 border-orange-500/20 bg-orange-500/5 rounded-sm relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8rem] font-black select-none group-hover:opacity-20 transition-opacity italic">
            04
          </div>
          <h3 className="text-xl sm:text-3xl font-black mb-6 md:mb-8 flex items-center gap-3 sm:gap-5 italic">
            <Gamepad2 size={32} className="text-orange-500" />
            PUBG TOURNAMENT
          </h3>
          <div className="space-y-6">
            {[
              { label: "WINNER SQUAD", prize: "Champions", color: "text-orange-400" },
              { label: "RUNNER UP", prize: "2nd Place", color: "text-white" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 sm:p-5 border border-white/10 bg-black group-hover:border-orange-500/30 transition-colors"
              >
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-[0.15em] sm:tracking-[0.3em] font-black">
                  {item.label}
                </span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-black ${item.color} font-mono tracking-tighter`}
                >
                  {item.prize}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bonus Rewards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {["Certificates", "Trophies", "Goodies", "Experience"].map(
          (reward, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="px-4 sm:px-8 py-4 sm:py-6 border border-white/10 bg-[#050505] rounded-sm text-center group"
            >
              <span className="text-xs font-mono text-gray-400 tracking-[0.4em] uppercase font-black group-hover:text-purple-400 transition-colors italic">
                {reward}
              </span>
            </motion.div>
          )
        )}
      </div>
    </div>
  </section>
);
