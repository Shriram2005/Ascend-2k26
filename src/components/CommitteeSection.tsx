"use client";

import { motion } from "framer-motion";

const committeeMembers = [
  { name: "Hardik Jain", role: "EVENT_COORDINATOR", initials: "HJ", color: "text-green-400 border-green-500/50 bg-green-500/10" },
  { name: "Varun Kapse", role: "EVENT_COORDINATOR", initials: "VK", color: "text-green-400 border-green-500/50 bg-green-500/10" },
  { name: "Sahil Gite", role: "DESIGN_COMMITTEE_HEAD", initials: "SG", color: "text-purple-400 border-purple-500/50 bg-purple-500/10" },
  { name: "Shriram Mange", role: "DESIGN_COMMITTEE_CO_HEAD", initials: "SM", color: "text-purple-400 border-purple-500/50 bg-purple-500/10" },
  { name: "Anushka Shinde", role: "PROMOTION_COMMITTEE_HEAD", initials: "AS", color: "text-cyan-400 border-cyan-500/50 bg-cyan-500/10" },
  { name: "Uday Rakhame", role: "DECORATION_COMMITTEE_HEAD", initials: "UR", color: "text-gray-300 border-gray-500/50 bg-gray-500/10" },
  { name: "Harshvardhan Bhusare", role: "MEDIA_COMMITTEE_HEAD", initials: "HB", color: "text-purple-400 border-purple-500/50 bg-purple-500/10" },
];

export const CommitteeSection = () => (
  <section className="py-20 md:py-40 relative z-10 bg-[#050505] overflow-hidden">
    {/* Matrix-style background effect */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] text-green-500 leading-3 overflow-hidden break-all whitespace-pre-wrap">
      {Array.from({ length: 200 }).map((_, i) => (
        <span key={i}>
          {Array.from({ length: 40 }).map(() =>
            String.fromCharCode(0x30A0 + Math.random() * 96)
          ).join("")}
        </span>
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24"
      >
        <div className="flex items-center justify-end mb-4">
          <span className="text-gray-500 font-mono text-[10px] tracking-[0.5em] font-black uppercase">
            {"// ORG: SYS_OP_TEAM"}
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-[7rem] font-black uppercase tracking-tighter italic leading-none text-right">
          ASCEND{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            COMMITTEE
          </span>
        </h2>
      </motion.div>

      {/* Committee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {committeeMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * idx, duration: 0.5 }}
            whileHover={{ y: -8, borderColor: "rgba(168,85,247,0.4)" }}
            className="group relative border border-white/5 bg-[#0a0a0a] p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.02]"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-purple-500/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-purple-500/50 transition-colors" />

            {/* Initials Badge */}
            <div
              className={`w-14 h-14 rounded-sm border-2 flex items-center justify-center mb-6 font-mono text-lg font-black tracking-tight ${member.color} transition-transform group-hover:scale-110`}
            >
              {member.initials}
            </div>

            {/* Name */}
            <h4 className="text-white font-black text-xl md:text-2xl tracking-tight mb-3 group-hover:text-white transition-colors">
              {member.name}
            </h4>

            {/* Role */}
            <p className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-purple-400 transition-colors">
              {"< "}{member.role}{" />"}
            </p>

            {/* Hover glow line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
