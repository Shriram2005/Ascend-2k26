import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Cpu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Hackathon — ASCEND 2K26 | Project-Based Innovation Competition",
  description:
    "Mini Hackathon at ASCEND 2K26: Present pre-developed projects in 2.5 hours. ₹200/team entry. Win trophy & certificate. Innovation, problem-solving & presentation skills. 28 March 2026 at KKWIEER Nashik.",
  keywords: "mini hackathon,ASCEND 2K26,hackathon competition,innovation challenge,project demo,technical symposium,KKWIEER,Nashik,student competition",
  openGraph: {
    title: "Mini Hackathon — ASCEND 2K26 | Innovation Project Competition",
    description: "Present your pre-developed project at ASCEND 2K26 Mini Hackathon. 2-4 member teams, ₹200 entry, prizes available.",
  },
  twitter: {
    title: "Mini Hackathon — ASCEND 2K26",
    description: "Project-based hackathon competition at ASCEND 2K26. March 28, 2026. Register now!",
  },
};

const event: EventData = {
  number: "01",
  title: "Mini Hackathon",
  subtitle: "PROJECT // PRESENT // INNOVATE",
  accent: "#00FF55",
  icon: <Cpu />,
  description:
    "The Mini Hackathon is a project-based competition where participants present a pre-developed solution for a given problem statement. Teams showcase their project, explain their approach, and demonstrate core functionality to a panel of judges.",
  teamSize: "2 – 4 Members Per Team",
  time: "02:00 PM – 05:00 PM",
  tags: ["Innovation", "Problem Solving", "Project Demo", "Presentation", "Teamwork"],
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
    "Individual or team participation is allowed (as per organizer confirmation).",
    "Projects must be pre-built and based on the announced problem context.",
    "Presentation and live demonstration are mandatory.",
    "Judging focuses on innovation, problem-solving approach, technical implementation, and presentation.",
    "Teams must complete presentation within the allocated time slot.",
    "The judges' decision will be final.",
    "Any plagiarism or copied work can lead to disqualification.",
    "Organizers' and judges' decisions are final and binding.",
  ],
  registrationLink: "https://forms.gle/vsoBRnjPcU4jz7ak7",
};

export default function MiniHackathonPage() {
  return <EventDetailPage event={event} />;
}
