import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("services/websites", "routes/services/websites.tsx"),
    route("services/ecommerce", "routes/services/ecommerce.tsx"),
    route("services/branding", "routes/services/branding.tsx"),
    route("services/chatbots", "routes/services/chatbots.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("sitemap.xml", "routes/sitemap.xml.ts"),
] satisfies RouteConfig;
