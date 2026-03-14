"use client";

import { memo } from "react";

export const CyberBackground = memo(() => (
  <div className="fixed inset-0 z-0 bg-[#000000] overflow-hidden will-change-auto">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0d0d1a_0%,#000000_100%)]" />
    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600 rounded-full blur-[200px] mix-blend-screen animate-[nebula-pulse_10s_ease-in-out_infinite]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-600 rounded-full blur-[200px] mix-blend-screen animate-[nebula-pulse_15s_ease-in-out_2s_infinite]" />
    <div className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[80vh] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(75deg)] origin-bottom opacity-30" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
  </div>
));

CyberBackground.displayName = "CyberBackground";
