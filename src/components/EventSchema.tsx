import { EventData } from "./EventDetailPage";

export const getEventSchema = (event: EventData, eventSlug: string) => {
  const baseUrl = "https://ascend2k26.in";
  const eventUrl = `${baseUrl}/events/${eventSlug}`;

  const getEventTiming = (eventNumber: string) => {
    const timingMap: { [key: string]: { start: string; end: string } } = {
      "01": { start: "14:00", end: "17:00" }, // Mini Hackathon
      "02": { start: "10:30", end: "12:30" }, // BGMI
      "03": { start: "14:00", end: "15:00" }, // Art Arena
      "04": { start: "11:00", end: "15:00" }, // Bowl'ed Out
    };
    return timingMap[eventNumber] || { start: "14:00", end: "17:00" };
  };

  const timing = getEventTiming(event.number);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.title} — ASCEND 2K26`,
    description: event.description,
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    startDate: `2026-03-28T${timing.start}:00+05:30`,
    endDate: `2026-03-28T${timing.end}:00+05:30`,
    location: {
      "@type": "Place",
      name: "K. K. Wagh Institute of Engineering Education and Research (KKWIEER)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "D Block Campus",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        postalCode: "422003",
        addressCountry: "IN",
      },
    },
    image: `${baseUrl}/events/${eventSlug}-seo.jpg`,
    organizer: {
      "@type": "Organization",
      name: "Department of MCA, KKWIEER",
      url: baseUrl,
      sameAs: [
        "https://www.kkwieer.edu.in",
      ],
    },
    category: "Technology & Innovation",
    offers: {
      "@type": "Offer",
      url: eventUrl,
      price: event.highlights.find((h) => h.label === "Entry Fee")?.value.replace("₹", "").split("/")[0] || "50",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: `2026-01-01T00:00:00+05:30`,
      validThrough: `2026-03-27T23:59:59+05:30`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "87",
    },
    attendee: {
      "@type": "EducationalAudience",
      educationalRole: "Student",
    },
  };

  return schema;
};

export const EventSchemaScript = ({ event, eventSlug }: { event: EventData; eventSlug: string }) => {
  const schema = getEventSchema(event, eventSlug);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
