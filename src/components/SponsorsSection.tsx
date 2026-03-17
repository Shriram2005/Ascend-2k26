"use client";

import { motion } from "framer-motion";

const sponsors = [
  { name: "K. K. Wagh Education Society", status: "ORGANIZER" },
  { name: "Dept. of MCA", status: "HOST_DEPT" },
  { name: "KKWIEER", status: "INSTITUTE" },
  { name: "Sponsor / Partner", status: "COMING_SOON" },
];

const loopedSponsors = [...sponsors, ...sponsors];

export const SponsorsSection = () => (
  <section className="py-20 md:py-40 relative z-10 bg-[#020202] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
      <p className="text-gray-300 font-mono text-xs sm:text-sm tracking-[0.4em] sm:tracking-[1em] mb-12 md:mb-20 uppercase font-black italic select-none">
        {"// ORGANIZED_BY"}
      </p>
      <div className="relative overflow-hidden border border-white/5 bg-[#050505] py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-6"
        >
          {loopedSponsors.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="h-32 w-64 sm:w-72 border border-white/10 bg-white/[0.01] flex flex-col items-center justify-center p-6 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />
              <span className="text-gray-200 font-mono text-xs sm:text-sm tracking-widest font-black uppercase mb-2 text-center">
                {sponsor.name}
              </span>
              <span className="text-[10px] font-mono text-purple-400 tracking-[0.3em] font-bold uppercase">
                {sponsor.status}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
