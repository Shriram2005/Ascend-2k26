export async function GET() {
  const baseUrl = "https://ascend2k26.in";

  const staticPages = [
    {
      url: `/`,
      lastmod: new Date().toISOString().split('T')[0],
      priority: "1.0",
      changefreq: "daily",
    },
  ];

  const eventPages = [
    {
      url: `/events/mini-hackathon`,
      lastmod: "2026-03-27",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      url: `/events/bgmi`,
      lastmod: "2026-03-27",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      url: `/events/art-arena`,
      lastmod: "2026-03-27",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      url: `/events/bowled-out`,
      lastmod: "2026-03-27",
      priority: "0.9",
      changefreq: "weekly",
    },
  ];

  const allPages = [...staticPages, ...eventPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
    `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
