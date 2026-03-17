export default function Head() {
  const baseUrl = "https://ascend2k26.in";

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "BGMI Tournament — ASCEND 2K26",
    "description": "The arena is set. Squad up with your crew and fight for dominance in an intense Battlegrounds Mobile India tournament.",
    "startDate": "2026-03-28T10:30:00+05:30",
    "endDate": "2026-03-28T12:30:00+05:30",
    "eventStatus": "EventScheduled",
    "eventAttendanceMode": "OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "K. K. Wagh Institute of Engineering Education and Research (KKWIEER)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "D Block Campus",
        "addressLocality": "Nashik",
        "addressRegion": "Maharashtra",
        "postalCode": "422003",
        "addressCountry": "IN",
      },
    },
    "organizer": {
      "@type": "Organization",
      "name": "Department of MCA, KKWIEER",
      "url": baseUrl,
    },
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "INR",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: `${baseUrl}/#events`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "BGMI Tournament",
        item: `${baseUrl}/events/bgmi`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
