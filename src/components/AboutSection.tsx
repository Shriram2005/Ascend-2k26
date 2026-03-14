"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { slideUp, staggerContainer } from "@/components/AnimationProvider";

const PURPLE = "#A855F7";
const CYAN = "#00CCFF";
const GREEN = "#00FF55";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent?: string;
}

const StatCard = ({ icon, title, desc, accent = CYAN }: StatCardProps) => (
  <motion.div
    variants={slideUp}
    whileHover={{ x: 10 }}
    className="flex items-start gap-4 sm:gap-6 p-5 sm:p-8 border border-white/5 bg-white/5 transition-all group rounded-sm text-left relative overflow-hidden"
  >
    <div
      className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-300"
      style={{ backgroundColor: accent }}
    />
    <div
      className="transition-all group-hover:translate-x-1 group-hover:scale-110"
      style={{ color: accent }}
    >
      {icon}
    </div>
    <div>
      <h4 className="font-black text-2xl sm:text-3xl mb-1 uppercase tracking-tighter text-white italic">
        {title}
      </h4>
      <p className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.3em] font-black">
        {desc}
      </p>
    </div>
  </motion.div>
);

export const AboutSection = () => (
  <section
    id="about"
    className="py-20 md:py-40 px-4 md:px-6 relative z-10 bg-black overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent -z-10" />
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <div className="inline-block px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-[10px] tracking-[0.4em] font-black mb-8 uppercase italic">
            ./ABOUT_ASCEND
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black mb-10 tracking-tighter uppercase leading-[0.85]">
            It&apos;s Time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400 shadow-glow">
              to Rise
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg sm:text-2xl mb-10 font-bold tracking-tight">
            <span className="text-purple-400">ASCEND 2K26</span> is a National-Level
            Technical Event organized by the Department of MCA at K. K. Wagh Institute
            of Engineering Education &amp; Research, Nashik. Compete in exciting
            events like Poster Competition, Blind Coding, Mini Hackathon, and
            PUBG Tournament!
          </p>
          <div className="p-8 border-l-4 border-purple-600 bg-white/5 rounded-sm backdrop-blur-sm">
            <p className="text-white text-sm font-mono tracking-widest uppercase italic font-black">
              HOST: K. K. WAGH INSTITUTE OF ENGINEERING EDUCATION &amp; RESEARCH
            </p>
            <p className="text-gray-400 text-[10px] font-mono mt-2 tracking-widest uppercase">
              DEPT. OF MCA | KKWIEER | NASHIK, MAHARASHTRA
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-6"
        >
          <StatCard icon={<Sparkles />} title="4 EVENTS" desc="TECH & FUN" accent={PURPLE} />
          <StatCard icon={<Calendar />} title="1 DAY" desc="28 MARCH 2026" accent={GREEN} />
          <StatCard icon={<Users />} title="200+" desc="PARTICIPANTS" accent={CYAN} />
          <StatCard icon={<MapPin />} title="NASHIK" desc="KKWIEER CAMPUS" accent="#FFF" />
        </motion.div>
      </div>
    </div>
  </section>
);
