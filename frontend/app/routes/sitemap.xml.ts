import type { Route } from "./+types/sitemap.xml";

export async function loader({ request }: Route.LoaderArgs) {
    const baseUrl = "https://blinkstudio.dev";

    // Today's date for lastmod (Formatted as YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    const pages = [
        { loc: "", lastmod: today, priority: "1.0" },
        { loc: "portfolio", lastmod: today, priority: "0.9" },
        { loc: "services/websites", lastmod: today, priority: "0.8" },
        { loc: "services/ecommerce", lastmod: today, priority: "0.8" },
        { loc: "services/branding", lastmod: today, priority: "0.8" },
        { loc: "services/chatbots", lastmod: today, priority: "0.8" },
        { loc: "contact", lastmod: today, priority: "0.7" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
            .map(
                (page) => `
  <url>
    <loc>${baseUrl}/${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
            )
            .join("")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=18000",
        },
    });
}
