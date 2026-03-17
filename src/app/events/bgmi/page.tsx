import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Gamepad2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BGMI Tournament — ASCEND 2K26",
  description:
    "Squad up and battle it out in the BGMI Tournament at ASCEND 2K26, MCA Dept., KKWIEER Nashik.",
};

const event: EventData = {
  number: "02",
  title: "BGMI",
  subtitle: "GAMING // BATTLE ROYALE // ESPORTS",
  accent: "#FF6B35",
  icon: <Gamepad2 />,
  description:
    "The arena is set. Squad up with your crew and fight for dominance in an intense Battlegrounds Mobile India tournament. Outlast, outsmart, and outshoot every squad standing in your way. Only the last team standing claims the title. Are you ready to drop hot?",
  teamSize: "Squad — 4 Members (Fixed)",
  time: "02:00 PM – 04:30 PM",
  tags: ["Strategy", "Teamwork", "Battle Royale", "Esports", "BGMI"],
  highlights: [
    { label: "Duration", value: "2.5 Hrs" },
    { label: "Squad Size", value: "4 Players" },
    { label: "Entry Fee", value: "Free" },
    { label: "Platform", value: "Mobile" },
  ],
  prizes: [
    { label: "Winner Squad — 1st Place", value: "Trophy + Certificate" },
    { label: "Runner Up — 2nd Place", value: "Certificate" },
  ],
  rules: [
    "Squads must consist of exactly 4 players — no substitutions allowed.",
    "Only the official Battlegrounds Mobile India (BGMI) app is permitted.",
    "Use of hacks, mods, emulators, or any third-party tools results in immediate disqualification.",
    "All players must use their own registered BGMI accounts.",
    "Matches will be played on Erangel map, Squad mode, by default.",
    "Final ranking is based on placement points + kill points combined.",
    "Any dispute or suspicious activity will be investigated by organizers.",
    "Organizers reserve the right to modify rules; final decision is theirs.",
  ],
};

export default function BGMIPage() {
  return <EventDetailPage event={event} />;
}
