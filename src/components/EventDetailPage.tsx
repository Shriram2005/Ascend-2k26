"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Trophy, BookOpen, AlertCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CyberBackground } from "./CyberBackground";

export interface Prize {
  label: string;
  value: string;
}

export interface EventData {
  number: string;
  title: string;
  subtitle: string;
  accent: string;
  icon: React.ReactNode;
  description: string;
  teamSize: string;
  time: string;
  tags: string[];
  prizes: Prize[];
  rules: string[];
  highlights: { label: string; value: string }[];
  registrationLink?: string;
}

export const EventDetailPage = ({ event }: { event: EventData }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      <CyberBackground />
      <Navbar />

      {event.registrationLink && (
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-80 inline-flex items-center justify-center px-5 sm:px-7 py-3.5 font-mono text-[10px] tracking-[0.18em] uppercase font-black border border-black/20 rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
          style={{
            background: event.accent,
            color: "#000",
            boxShadow: `0 0 20px ${event.accent}50`,
          }}
          aria-label={`Register for ${event.title}`}
        >
          Register Now
        </a>
      )}

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-60 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

      {/* ─── HERO ─── */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10 md:mb-14"
          >
            <Link
              href="/#events"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-mono text-xs tracking-[0.2em] uppercase font-black group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </Link>
          </motion.div>

          {/* Number tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-mono text-[10px] tracking-[0.6em] mb-4 uppercase font-black"
            style={{ color: event.accent }}
          >
            {`EVENT_${event.number} | ASCEND_2K26`}
          </motion.p>

          {/* Title row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-5 md:gap-8 mb-6"
          >
            <div
              className="shrink-0 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center border bg-white/5 rounded-sm mt-1"
              style={{ borderColor: `${event.accent}50` }}
            >
              {React.isValidElement(event.icon) &&
                React.cloneElement(
                  event.icon as React.ReactElement<{ size?: number; style?: React.CSSProperties }>,
                  { size: 32, style: { color: event.accent } }
                )}
            </div>
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black uppercase tracking-tight italic leading-[0.95]">
                {event.title}
              </h1>
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-gray-300 uppercase mt-3 font-black">
                {event.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <Clock size={11} style={{ color: event.accent }} />
              <span className="font-mono text-[10px] sm:text-xs text-gray-200 tracking-[0.2em] uppercase font-black">
                {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <Users size={11} style={{ color: event.accent }} />
              <span className="font-mono text-[10px] sm:text-xs text-gray-200 tracking-[0.2em] uppercase font-black">
                {event.teamSize}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5">
              <span
                className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-black"
                style={{ color: event.accent }}
              >
                28 MARCH 2026 · KKWIEER, NASHIK
              </span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-white/10 text-[10px] text-gray-200 uppercase tracking-[0.12em] bg-white/5 font-semibold rounded-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT + RULES ─── */}
      <section className="py-16 md:py-24 relative z-10 bg-[#020202] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={14} style={{ color: event.accent }} />
              <h2 className="font-mono text-[10px] tracking-[0.28em] uppercase font-black text-gray-300">
                About This Event
              </h2>
            </div>
            <p className="text-gray-200 font-semibold text-base sm:text-lg leading-relaxed tracking-normal">
              {event.description}
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {event.highlights.map((h) => (
                <div
                  key={h.label}
                  className="p-4 border border-white/5 bg-white/2"
                >
                  <p className="font-mono text-[10px] text-gray-300 tracking-[0.18em] uppercase mb-2 font-black">
                    {h.label}
                  </p>
                  <p
                    className="text-xl font-black uppercase tracking-tighter italic"
                    style={{ color: event.accent }}
                  >
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={14} style={{ color: event.accent }} />
              <h2 className="font-mono text-[9px] tracking-[0.4em] uppercase font-black text-gray-400">
                Rules &amp; Regulations
              </h2>
            </div>
            <div className="space-y-5">
              {event.rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <span
                    className="shrink-0 font-mono text-[9px] font-black mt-0.5"
                    style={{ color: event.accent }}
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-gray-300 font-mono text-[11px] uppercase tracking-[0.2em] font-black leading-relaxed">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── REGISTRATION CTA ─── */}
      {event.registrationLink && (
        <section className="py-16 md:py-24 relative z-10 bg-linear-to-r from-white/2 to-white/1 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-mono text-[10px] tracking-[0.32em] uppercase font-black text-gray-300 mb-4">
                Ready to Compete?
              </p>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-8">
                Register Now
              </h2>
              <p className="text-gray-200 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                Secure your spot and join the competition. Limited slots available!
              </p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 font-mono text-[10px] sm:text-xs tracking-[0.18em] uppercase font-black border border-black/20 rounded-sm hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                style={{
                  background: event.accent,
                  color: "#000",
                  boxShadow: `0 0 26px ${event.accent}45`,
                }}
              >
                Register For This Event
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── PRIZES ─── */}
      <section className="py-16 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3 mb-3">
              <Trophy size={14} style={{ color: event.accent }} />
              <p className="font-mono text-[9px] tracking-[0.5em] uppercase font-black text-gray-400">
                Rewards
              </p>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
              Win Big
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {event.prizes.map((prize, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx }}
                whileHover={{ y: -6 }}
                className="relative p-6 md:p-8 border bg-white/2 overflow-hidden"
                style={{
                  borderColor: idx === 0 ? `${event.accent}70` : "rgba(255,255,255,0.07)",
                }}
              >
                {idx === 0 && (
                  <div
                    className="absolute -top-px left-0 right-0 h-0.5"
                    style={{ background: event.accent }}
                  />
                )}
                <div
                  className="absolute top-0 right-0 p-3 opacity-5 font-mono text-[5rem] font-black select-none leading-none"
                >
                  {String(idx + 1)}
                </div>
                <p className="font-mono text-[10px] text-gray-300 tracking-[0.2em] uppercase mb-3 font-black">
                  {prize.label}
                </p>
                <p
                  className="text-3xl md:text-4xl font-black tracking-tighter italic"
                  style={{ color: idx === 0 ? event.accent : "white" }}
                >
                  {prize.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#events"
              className="px-8 py-4 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all font-mono text-[10px] tracking-[0.4em] uppercase font-black"
            >
              ← All Events
            </Link>
            {event.registrationLink ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-mono text-[10px] tracking-[0.18em] uppercase font-black border border-black/20 rounded-sm hover:shadow-lg transition-all"
                style={{
                  background: event.accent,
                  color: "#000",
                  boxShadow: `0 0 16px ${event.accent}35`,
                }}
              >
                Register Now
              </a>
            ) : (
              <div
                className="px-8 py-4 font-mono text-[10px] tracking-[0.4em] uppercase font-black"
                style={{ background: event.accent, color: "#000" }}
              >
                28 MARCH 2026 · KKWIEER
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
