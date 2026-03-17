import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Palette } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Arena — ASCEND 2K26",
  description:
    "Poster-making competition at ASCEND 2K26 where creativity meets design thinking.",
};

const event: EventData = {
  number: "03",
  title: "Art Arena",
  subtitle: "POSTER MAKING // CREATIVITY // DESIGN",
  accent: "#00CCFF",
  icon: <Palette />,
  description:
    "Art Arena is a poster-making competition that encourages creativity and design thinking. Participants can use any design tool of their choice (excluding AI tools) to create a poster based on a problem statement revealed on the event day.",
  teamSize: "Individual — 1 Participant",
  time: "02:00 PM – 03:00 PM",
  tags: ["Creativity", "Design Thinking", "Poster", "Originality", "Visual Appeal"],
  highlights: [
    { label: "Duration", value: "1 Hr" },
    { label: "Team Size", value: "Solo" },
    { label: "Entry Fee", value: "₹50" },
    { label: "Prize", value: "₹1000" },
  ],
  prizes: [
    { label: "Winner", value: "₹1000 + Certificate" },
    { label: "Participation", value: "Certificate" },
  ],
  rules: [
    "No AI-generated designs are allowed.",
    "Any software/tool can be used except AI tools.",
    "Topic will be disclosed on the spot.",
    "Judging will focus on creativity and relevance to theme.",
    "Visual appeal and originality carry major weight.",
    "Participants must submit before the deadline.",
    "Plagiarized work will be disqualified.",
    "Judges' and organizers' decisions are final.",
  ],
  registrationLink: "https://forms.gle/4qeqifrFGjGgVsKS9",
};

export default function ArtArenaPage() {
  return <EventDetailPage event={event} />;
}
