export default function Head() {
  const baseUrl = "https://ascend2k26.in";

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Art Arena — ASCEND 2K26",
    "description": "Art Arena is a poster-making competition that encourages creativity and design thinking. Participants can use any design tool of their choice to create a poster based on a problem statement.",
    "startDate": "2026-03-28T14:00:00+05:30",
    "endDate": "2026-03-28T15:00:00+05:30",
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
      "price": "40",
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
        name: "Art Arena",
        item: `${baseUrl}/events/art-arena`,
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
