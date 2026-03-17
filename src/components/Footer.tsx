"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => (
  <footer className="py-16 md:py-32 border-t border-white/10 bg-black relative z-10">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 items-start mb-16 md:mb-24 text-left">
        {/* College Info */}
        <div className="col-span-1 sm:col-span-2">
          <h4 className="font-black text-2xl sm:text-4xl mb-6 md:mb-8 uppercase tracking-tighter italic">
            K. K. Wagh Institute
          </h4>
          <p className="text-gray-400 font-mono text-xs leading-relaxed uppercase tracking-[0.2em] font-black">
            K. K. Wagh Education Society&apos;s
            <br />
            K. K. Wagh Institute of Engineering Education &amp; Research
            <br />
            Department of MCA
            <br />
            Nashik, Maharashtra, India
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="text-[9px] font-mono text-purple-400 tracking-widest uppercase font-bold border border-purple-500/20 px-3 py-1">
              NAAC Accredited
            </span>
            <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase font-bold border border-cyan-500/20 px-3 py-1">
              Autonomous Institute
            </span>
          </div>
        </div>

        {/* Event Links */}
        <div>
          <h4 className="text-gray-400 font-mono text-xs uppercase tracking-[0.5em] mb-12 font-black">
            EVENTS
          </h4>
          <div className="flex flex-col gap-6 text-xs font-black tracking-widest uppercase">
            <Link
              href="/events/mini-hackathon"
              className="text-gray-400 hover:text-purple-500 transition-colors italic"
            >
              ./MINI_HACKATHON
            </Link>
            <Link
              href="/events/bgmi"
              className="text-gray-400 hover:text-purple-500 transition-colors italic"
            >
              ./BGMI_TOURNAMENT
            </Link>
            <Link
              href="/events/art-arena"
              className="text-gray-400 hover:text-purple-500 transition-colors italic"
            >
              ./ART_ARENA
            </Link>
            <Link
              href="/events/bowled-out"
              className="text-gray-400 hover:text-purple-500 transition-colors italic"
            >
              ./BOWLED_OUT
            </Link>
          </div>
        </div>

        {/* Contact & Faculty */}
        <div>
          <h4 className="text-gray-400 font-mono text-xs uppercase tracking-[0.5em] mb-12 font-black">
            CONTACT
          </h4>
          <div className="flex flex-col gap-5 text-xs font-black">
            <div>
              <p className="text-[9px] text-gray-500 font-mono mb-1 tracking-widest">DIRECTOR</p>
              <p className="text-white tracking-widest italic">Dr. K. N. Nandurkar</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-500 font-mono mb-1 tracking-widest">HEAD OF DEPT.</p>
              <p className="text-white tracking-widest italic">Dr. V. C. Bagal</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-500 font-mono mb-1 tracking-widest">COORDINATORS</p>
              <p className="text-gray-300 tracking-widest italic text-[11px]">
                Mr. Shahu Rasal &amp; Ms. Janhavi Lindait
              </p>
              <p className="text-gray-300 tracking-widest italic text-[11px] mt-1">
                Dr. Vijay Dhawale &amp; Ms. Swarna Patil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 relative rounded-sm border border-white/20 overflow-hidden grayscale group hover:grayscale-0 transition-all">
            <Image
              src="/clg_logo_white.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter uppercase leading-none">
              ASCEND <span className="text-purple-400">2K26</span>
            </span>
            <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest">
              It&apos;s Time to Rise
            </span>
          </div>
        </div>
        <p className="text-gray-400 text-[10px] sm:text-xs font-mono tracking-[0.3em] sm:tracking-[0.5em] font-black uppercase text-center">
          © 2026 ASCEND 2K26 // DEPT. OF MCA, KKWIEER NASHIK
        </p>
      </div>
    </div>
  </footer>
);
