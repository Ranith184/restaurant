export default function robots() {
  const baseUrl = "https://yourrestaurantluxury.com"; // Change to actual production URL

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
