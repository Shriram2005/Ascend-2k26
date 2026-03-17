import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bowled-Out — ASCEND 2K26",
  description:
    "Cricket-inspired elimination quiz at ASCEND 2K26 — one wrong answer and you're out! MCA Dept., KKWIEER Nashik.",
};

const event: EventData = {
  number: "04",
  title: "Bowled-Out",
  subtitle: "CRICKET QUIZ // ELIMINATION // RAPID FIRE",
  accent: "#FACC15",
  icon: <Trophy />,
  description:
    "Where cricket meets technology. Bowled-Out is a rapid-fire elimination quiz with a cricket twist — one wrong answer and you're bowled out of the game. Face off through multiple innings of increasingly difficult technical questions. From coding concepts to tech trivia, the last one standing takes the trophy.",
  teamSize: "Individual — 1 Participant",
  time: "09:30 AM – 11:00 AM",
  tags: ["Quiz", "Rapid Fire", "Elimination", "Tech Trivia", "Cricket Theme"],
  highlights: [
    { label: "Duration", value: "1.5 Hrs" },
    { label: "Team Size", value: "Solo" },
    { label: "Entry Fee", value: "Free" },
    { label: "Format", value: "Elimination" },
  ],
  prizes: [
    { label: "1st Place — Winner", value: "Trophy + Certificate" },
    { label: "2nd Place — Runner Up", value: "Certificate" },
  ],
  rules: [
    "Individual participation only. No team entries permitted.",
    "The event has multiple rounds (Innings) of increasing difficulty.",
    "One wrong answer = Bowled Out. You are immediately eliminated.",
    "Questions span: programming, algorithms, tech trivia, and aptitude.",
    "Each question has a time limit — hesitation may cost you your wicket.",
    "Lifelines (e.g., 50-50) may be available in early rounds at organizer discretion.",
    "The final round is a head-to-head 'Test Match' between the last two players.",
    "Organizers' and judges' decisions are final and cannot be challenged.",
  ],
};

export default function BowledOutPage() {
  return <EventDetailPage event={event} />;
}
