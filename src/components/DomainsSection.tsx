"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Brain, Palette, Gamepad2, Users } from "lucide-react";

const highlights = [
  { title: "Exciting Prizes", desc: "Win Amazing Rewards", icon: <Trophy /> },
  { title: "Tech Skills", desc: "Test Your Coding Ability", icon: <Brain /> },
  { title: "Creative Edge", desc: "Showcase Innovation", icon: <Palette /> },
  { title: "Gaming Glory", desc: "Esports Action", icon: <Gamepad2 /> },
  { title: "Networking", desc: "Meet Like-Minded Peers", icon: <Users /> },
];

export const DomainsSection = () => (
  <section className="py-20 md:py-40 relative z-10 bg-black border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-4xl sm:text-5xl md:text-[8rem] font-black mb-10 md:mb-20 uppercase tracking-tighter italic leading-none opacity-90">
        Why ASCEND?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 md:p-10 border border-white/10 bg-[#050505] rounded-sm hover:border-purple-500 transition-all text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              {React.isValidElement(item.icon) &&
                React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 100 })}
            </div>
            <div className="mb-8 text-purple-400 scale-125 origin-left">
              {item.icon}
            </div>
            <h4 className="font-black text-2xl mb-3 text-white uppercase tracking-tighter leading-tight">
              {item.title}
            </h4>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em] font-bold">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
