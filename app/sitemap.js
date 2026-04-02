export default function sitemap() {
  const baseUrl = "https://yourrestaurantluxury.com"; // Change to actual production URL

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
