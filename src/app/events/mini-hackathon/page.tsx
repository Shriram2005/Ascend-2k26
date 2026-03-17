import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Cpu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Hackathon — ASCEND 2K26",
  description:
    "Build a working prototype in limited time at the Mini Hackathon event — ASCEND 2K26, MCA Dept., KKWIEER Nashik.",
};

const event: EventData = {
  number: "01",
  title: "Mini Hackathon",
  subtitle: "BUILD // INNOVATE // PROTOTYPE",
  accent: "#00FF55",
  icon: <Cpu />,
  description:
    "Got an idea? Build it. The Mini Hackathon challenges teams to conceive, design, and develop a working prototype within a tight deadline. From web apps to automation tools — if you can dream it, you can build it. Present your solution to our panel of judges and compete for the top spot.",
  teamSize: "2 – 4 Members Per Team",
  time: "01:30 PM – 04:00 PM",
  tags: ["Teamwork", "Problem Solving", "Prototype", "Innovation", "Full Stack"],
  highlights: [
    { label: "Duration", value: "2.5 Hrs" },
    { label: "Team Size", value: "2–4" },
    { label: "Entry Fee", value: "₹200" },
    { label: "Venue", value: "D Block" },
  ],
  prizes: [
    { label: "1st Place — Winner", value: "Trophy + Certificate" },
    { label: "2nd Place — Runner Up", value: "Certificate" },
    { label: "3rd Place — 2nd Runner Up", value: "Certificate" },
  ],
  rules: [
    "Teams of 2 to 4 participants. Solo entries are not permitted.",
    "All code must be written during the event — no pre-built projects.",
    "Any programming language, framework, or platform is allowed.",
    "Use of AI tools (ChatGPT, Copilot, etc.) is allowed and encouraged.",
    "Teams must submit their project within the allotted time.",
    "A 5-minute live demonstration is required for judging.",
    "Judging criteria: Innovation, Functionality, UI/UX, and Presentation.",
    "Organizers' and judges' decisions are final and binding.",
  ],
  registrationLink: "https://forms.gle/minihackathon",
};

export default function MiniHackathonPage() {
  return <EventDetailPage event={event} />;
}
