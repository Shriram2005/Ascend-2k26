import { getOrganizationSchema } from "@/components/OrganizationSchema";

export default function Head() {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch for faster resolution */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Additional meta tags for better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#050505" />

      {/* Preload critical resources */}
      <link rel="preload" as="image" href="/ascend_logo.jpeg" />
      <link rel="preload" as="image" href="/clg_logo_white.png" />
    </>
  );
}
