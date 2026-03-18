/**
 * Organization Schema Component
 * Generates schema.org structured data for ASCEND 2K26
 */

export const getOrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": "https://ascend2k26.in",
    name: "ASCEND 2K26 — A Technical Symposium",
    alternateName: ["ASCEND", "ASCEND 2026", "ASCEND KKW", "ASCEND Event"],
    description:
      "ASCEND 2K26 is a national-level technical symposium organized by the Department of MCA at K. K. Wagh Institute of Engineering Education and Research (KKWIEER), Nashik.",
    image: "https://ascend2k26.in/ascend_logo.jpeg",
    startDate: "2026-03-28T09:00:00+05:30",
    endDate: "2026-03-28T18:30:00+05:30",
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "K. K. Wagh Institute of Engineering Education and Research",
      address: {
        "@type": "PostalAddress",
        streetAddress: "K. K. Wagh Campus, D Block",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        postalCode: "422003",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Department of MCA, KKWIEER",
      url: "https://kkwieer.edu.in",
      logo: "https://ascend2k26.in/clg_logo_white.png",
      sameAs: ["https://www.kkwieer.edu.in"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Event Information",
        email: "contact@ascend2k26.in",
        availableLanguage: ["en-IN"],
      },
    },
    subEvent: [
      {
        "@type": "Event",
        name: "Mini Hackathon",
        startDate: "2026-03-28T14:00:00+05:30",
        endDate: "2026-03-28T17:00:00+05:30",
      },
      {
        "@type": "Event",
        name: "BGMI Tournament",
        startDate: "2026-03-28T10:30:00+05:30",
        endDate: "2026-03-28T12:30:00+05:30",
      },
      {
        "@type": "Event",
        name: "Art Arena",
        startDate: "2026-03-28T14:00:00+05:30",
        endDate: "2026-03-28T15:00:00+05:30",
      },
      {
        "@type": "Event",
        name: "Bowl'ed Out",
        startDate: "2026-03-28T11:00:00+05:30",
        endDate: "2026-03-28T15:00:00+05:30",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "50",
      highPrice: "200",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "200",
      reviewCount: "45",
    },
  };

  return schema;
};

export const OrganizationSchema = () => {
  const schema = getOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
