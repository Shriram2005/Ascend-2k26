"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { Palette, Cpu, Gamepad2, Trophy, ArrowRight } from "lucide-react";

interface EventCardProps {
  title: string;
  subtitle: string;
  accent: string;
  icon: React.ReactNode;
  desc: string;
  tags: string[];
  href: string;
}

const EventCard = ({ title, subtitle, accent, icon, desc, tags, href }: EventCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative min-h-[380px] sm:min-h-[420px] bg-[#050505] border border-white/5 p-6 sm:p-8 md:p-10 overflow-hidden backdrop-blur-sm text-left transition-colors hover:border-white/10 flex flex-col"
    >
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
      {/* Accent top line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: accent }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="w-20 h-20 mb-8 flex items-center justify-center border border-white/10 bg-white/5 rounded-sm relative group-hover:scale-110 transition-transform"
          style={{ borderColor: `${accent}30` }}
        >
          {React.isValidElement(icon) &&
            React.cloneElement(icon as React.ReactElement<{ size?: number; style?: React.CSSProperties }>, {
              size: 40,
              style: { color: accent },
            })}
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        </div>

        <div
          className="mb-3 font-mono text-[10px] font-black tracking-[0.5em]"
          style={{ color: accent }}
        >
          {subtitle}
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-white uppercase tracking-tighter leading-[0.85] italic">
          {title}
        </h3>
        <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-tight font-bold tracking-tight flex-grow">
          {desc}
        </p>

        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-white/5 text-[9px] font-mono text-gray-400 uppercase tracking-widest bg-black font-black italic"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase font-black transition-colors group/link mt-1"
            style={{ color: accent }}
          >
            View Details
            <ArrowRight
              size={12}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const TracksSection = () => (
  <section id="events" className="py-20 md:py-40 relative z-10 bg-[#020202]">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 text-center"
      >
        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter italic">
          Our Events
        </h2>
        <div className="flex items-center justify-center gap-4 text-purple-500 font-mono text-[10px] tracking-[0.5em] font-black uppercase">
          <div className="w-12 h-px bg-purple-500/30" />
          ASCEND_2K26_COMPETITIONS
          <div className="w-12 h-px bg-purple-500/30" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <EventCard
          title="MINI HACKATHON"
          subtitle="EVENT_01 // BUILD"
          accent="#00FF55"
          icon={<Cpu />}
          desc="Build a working prototype in a limited time. Solve real-world problems with your team and impress the judges with your innovative solution."
          tags={["Teamwork", "Problem Solving", "Prototype"]}
          href="/events/mini-hackathon"
        />
        <EventCard
          title="BGMI TOURNAMENT"
          subtitle="EVENT_02 // GAMING"
          accent="#FF6B35"
          icon={<Gamepad2 />}
          desc="Battle it out in an intense BGMI squad tournament. Team up, strategize, and claim victory in the ultimate mobile gaming showdown."
          tags={["Strategy", "Teamwork", "Battle Royale"]}
          href="/events/bgmi"
        />
        <EventCard
          title="ART ARENA"
          subtitle="EVENT_03 // CREATIVE"
          accent="#00CCFF"
          icon={<Palette />}
          desc="A poster-making challenge where creativity meets tech thinking. Build an original poster from the on-spot problem statement."
          tags={["Creativity", "Design", "Originality"]}
          href="/events/art-arena"
        />
        <EventCard
          title="BOWLED-OUT"
          subtitle="EVENT_04 // QUIZ"
          accent="#FACC15"
          icon={<Trophy />}
          desc="A cricket-themed rapid-fire elimination quiz. One wrong answer and you're out! Test your tech knowledge and survive every inning."
          tags={["Quiz", "Rapid Fire", "Elimination"]}
          href="/events/bowled-out"
        />
      </div>
    </div>
  </section>
);
