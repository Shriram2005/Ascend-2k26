"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is there a registration fee?",
    a: "No! ASCEND 2K26 is completely free for all participants. Just register and show up!",
  },
  {
    q: "What is the team size?",
    a: "For Mini Hackathon: 2-4 members per team. For PUBG Tournament: Squad of 4. Poster Competition & Blind Coding are individual events.",
  },
  {
    q: "Can I participate in multiple events?",
    a: "Yes! You can register for multiple events as long as the timings don't clash. Check the schedule — all events are on 28th March 2026.",
  },
  {
    q: "What should I bring?",
    a: "Bring your own laptop for coding events. For PUBG, bring your mobile phone with PUBG installed. For Poster Competition, materials will be specified during registration.",
  },
  {
    q: "Is it open for all colleges?",
    a: "Yes! ASCEND 2K26 is a National-Level event open to students from all colleges and universities.",
  },
  {
    q: "Where is the venue?",
    a: "MCA Department, 4th Floor, D Block, K. K. Wagh Institute of Engineering Education & Research (KKWIEER), Nashik.",
  },
];

export const FAQSection = () => (
  <section id="faq" className="py-20 md:py-40 relative z-10 bg-black">
    <div className="max-w-5xl mx-auto px-4 md:px-6 text-left">
      <div className="mb-12 md:mb-24">
        <h2 className="text-5xl sm:text-7xl md:text-[8rem] font-black uppercase tracking-tighter italic leading-none mb-4">
          FAQs
        </h2>
        <p className="text-purple-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">
          ASCEND_2K26_QUERIES
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 border border-white/10 bg-[#030303] hover:border-purple-500/50 transition-all group"
          >
            <div className="flex items-start gap-6 mb-6">
              <HelpCircle className="text-purple-500 shrink-0 mt-1" size={24} />
              <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight italic group-hover:text-white transition-colors">
                {faq.q}
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed pl-8 sm:pl-12 text-sm font-bold tracking-tight">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
