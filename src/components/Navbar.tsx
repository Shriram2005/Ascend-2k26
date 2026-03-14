"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "./ABOUT", href: "#about" },
  { label: "./EVENTS", href: "#events" },
  { label: "./PRIZES", href: "#bounty" },
  { label: "./SCHEDULE", href: "#timeline" },
  { label: "./FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
              className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-cyan-400 to-blue-500 rounded-lg opacity-30 blur-md group-hover:opacity-60 transition-opacity" />
              <div className="relative w-full h-full border border-white/20 bg-black/60 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden p-1">
                <Image
                  src="/logo-new.png"
                  alt="ASCEND Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl tracking-tighter leading-none">
                ASCEND<span className="text-purple-400">2K26</span>
              </span>
              <span className="text-[0.5rem] md:text-[0.55rem] text-gray-500 tracking-[0.3em] md:tracking-[0.4em] font-mono font-bold">
                DEPT_OF_MCA
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-white/5 active:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold text-gray-400 font-mono tracking-widest">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-[70] bg-[#050505] border-l border-white/10 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/5">
                <span className="font-mono text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
                  NAVIGATION
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm bg-white/5 active:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-5">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all rounded-sm group"
                      >
                        <span className="w-6 text-[10px] font-mono font-black text-gray-500 group-hover:text-purple-500 transition-colors">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase">
                          {link.label}
                        </span>
                        <ChevronRight
                          size={14}
                          className="ml-auto text-gray-600 group-hover:text-purple-500 transition-colors"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-5 border-t border-white/5">
                <p className="text-center font-mono text-[8px] text-gray-500 tracking-[0.3em] uppercase font-bold">
                  K. K. WAGH INSTITUTE, NASHIK
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
