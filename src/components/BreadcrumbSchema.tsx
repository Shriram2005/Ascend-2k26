/**
 * Breadcrumb Schema Component
 * Generates structured data for breadcrumb navigation
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return schema;
};

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = getBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
