import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Code2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blind Coding — ASCEND 2K26",
  description:
    "Code without seeing the screen at the Blind Coding competition — ASCEND 2K26, MCA Dept., KKWIEER Nashik.",
};

const event: EventData = {
  number: "03",
  title: "Blind Coding",
  subtitle: "HARDCORE // PRECISION // NO SCREEN",
  accent: "#00CCFF",
  icon: <Code2 />,
  description:
    "Can you code with your eyes closed? In Blind Coding, you read the problem, plan your solution — then the screen goes dark. From that moment on, every keystroke, every variable, every bracket depends purely on your muscle memory and logical precision. The ultimate test of a true programmer.",
  teamSize: "Individual — 1 Participant",
  time: "11:00 AM – 12:30 PM",
  tags: ["Logic", "Speed", "Precision", "Individual", "Programming"],
  highlights: [
    { label: "Duration", value: "1.5 Hrs" },
    { label: "Team Size", value: "Solo" },
    { label: "Entry Fee", value: "Free" },
    { label: "Format", value: "Screen Off" },
  ],
  prizes: [
    { label: "1st Place — Winner", value: "Trophy + Certificate" },
    { label: "2nd Place — Runner Up", value: "Certificate" },
  ],
  rules: [
    "Individual participation only — no team entries.",
    "Participants get 5 minutes to read the problem with the screen on.",
    "Once coding begins, the screen is turned off or covered — no peeking.",
    "Any programming language of the participant's choice is allowed.",
    "Internet access and reference materials are strictly prohibited.",
    "Scoring is based on correctness, completeness, and time taken.",
    "Syntax errors, logical errors, and incomplete programs will be penalized.",
    "Judges' evaluation and decision is final.",
  ],
};

export default function BlindCodingPage() {
  return <EventDetailPage event={event} />;
}
