export type MetaTagsProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    twitterCard?: "summary" | "summary_large_image" | "app" | "player";
};

export function getMetaTags({
    title = "Blink Studio | Creative Digital Agency",
    description = "Blink Studio is a premier digital agency specializing in custom websites, strategic branding, and AI-powered boutique solutions.",
    image = "/process-imgs/process-1.jpg",
    url = "https://blinkstudio.dev",
    twitterCard = "summary_large_image",
}: MetaTagsProps) {
    const SITE_URL = "https://blinkstudio.dev";
    const fullTitle = title.includes("Blink Studio") ? title : `${title} | Blink Studio`;
    const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;

    return [
        { title: fullTitle },
        { name: "description", content: description },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: fullUrl },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: description },
        { property: "og:image", content: fullImage },

        // Twitter
        { name: "twitter:card", content: twitterCard },
        { name: "twitter:domain", content: "blinkstudio.dev" },
        { name: "twitter:url", content: fullUrl },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: fullImage },
    ];
}
