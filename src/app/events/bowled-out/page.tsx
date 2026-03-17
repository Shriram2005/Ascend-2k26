import { EventDetailPage, EventData } from "@/components/EventDetailPage";
import { Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bowled-Out — ASCEND 2K26 | Cricket Accuracy Team Competition",
  description:
    "Bowled-Out at ASCEND 2K26: Unique cricket tournament where 6-player teams hit stumps for precision. ₹150/team entry. Win ₹1500 prize. 28 March 2026 at KKWIEER Nashik. Test your cricket accuracy!",
  keywords: "bowl'ed out,cricket tournament,team sports,accuracy challenge,cricket game,ASCEND 2K26,sports competition,Nashik,student tournament",
  openGraph: {
    title: "Bowled-Out — ASCEND 2K26 | Cricket Team Tournament",
    description: "6-player cricket accuracy tournament at ASCEND 2K26. ₹150 entry, ₹1500 prize, 4 hours duration.",
  },
  twitter: {
    title: "Bowled-Out — ASCEND 2K26",
    description: "Cricket accuracy tournament at ASCEND 2K26. 6-player teams, ₹150 entry. March 28, 2026. Register now!",
  },
}

const event: EventData = {
  number: "04",
  title: "Bowl'ed Out",
  subtitle: "CRICKET // ACCURACY // TOURNAMENT",
  accent: "#FACC15",
  icon: <Trophy />,
  description:
    "A unique cricket-based game where teams aim to directly hit the stumps without a batter. Teams compete in tournament-style rounds that test throwing accuracy and consistency under pressure.",
  teamSize: "Team of 6 Players",
  time: "11:00 AM – 03:00 PM",
  tags: ["Cricket", "Accuracy", "Team Event", "Tournament", "Sports"],
  highlights: [
    { label: "Duration", value: "4 Hrs" },
    { label: "Team Size", value: "6" },
    { label: "Entry Fee", value: "₹150 / Team" },
    { label: "Prize", value: "₹1500" },
  ],
  prizes: [
    { label: "1st Place — Winner", value: "Trophy + Certificate" },
    { label: "2nd Place — Runner Up", value: "Certificate" },
  ],
  rules: [
    "Each team must have exactly 6 players.",
    "Each team gets 3 overs in a round.",
    "Each player bowls 3 deliveries.",
    "Points are based on direct stump hits.",
    "Highest total stump hits determine winners.",
    "Unsporting behavior may lead to disqualification.",
    "Organizers' and judges' decisions are final.",
    "All safety and ground rules must be followed.",
  ],
  registrationLink: "https://forms.gle/D1BQcMofDDWrWLjM6",
};

export default function BowledOutPage() {
  return <EventDetailPage event={event} />;
}
