"use client";

import { useState } from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { AboutSection } from "@/components/AboutSection";
import { TracksSection } from "@/components/TracksSection";
import { DomainsSection } from "@/components/DomainsSection";
import { BountySection } from "@/components/BountySection";
import { TimelineSection } from "@/components/TimelineSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CyberBackground } from "@/components/CyberBackground";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-400 origin-left shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_5px_rgba(34,211,238,0.4)] relative"
          style={{ scaleX }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white blur-sm opacity-50" />
        </motion.div>
      </div>

      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <CyberBackground />
          <Navbar />
          <HeroSection />
          <StatsBar />
          <AboutSection />
          <TracksSection />
          <DomainsSection />
          <BountySection />
          <TimelineSection />
          <SponsorsSection />
          <FAQSection />
          <Footer />

          {/* Scanlines Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
        </motion.div>
      )}
    </div>
  );
}
