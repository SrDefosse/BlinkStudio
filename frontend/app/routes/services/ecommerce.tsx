
import ServiceLayout from "../../components/services/ServiceLayout";
import type { Route } from "./+types/ecommerce";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Ecommerce Solutions | Blink Studio" },
        { name: "description", content: "Drive sales with seamless online shopping experiences." },
    ];
}

export default function Ecommerce() {
    return (
        <ServiceLayout
            title="Ecommerce Solutions"
            subtitle="Turn visitors into loyal customers with a seamless, secure, and beautiful online shopping experience."

            problemTitle="Common E-commerce Pitfalls"
            problems={[
                {
                    title: "Cart Abandonment",
                    description: "Complex checkout processes and hidden costs cause users to leave before buying.",
                },
                {
                    title: "Poor Mobile Experience",
                    description: "With most traffic coming from mobile, a non-optimized site means lost revenue.",
                },
                {
                    title: "Management Chaos",
                    description: "Disorganized inventory and order management systems waste your team's time.",
                }
            ]}

            processTitle="Our Approach"
            process={[
                {
                    step: 1,
                    title: "Platform Selection",
                    description: "We help you choose the right platform (Shopify, Custom, etc.) based on your specific needs.",
                },
                {
                    step: 2,
                    title: "Experience Design",
                    description: "Designing product pages and checkouts that minimize friction and maximize desire.",
                },
                {
                    step: 3,
                    title: "Secure Integration",
                    description: "Setting up payment gateways, shipping calculators, and inventory sync seamlessly.",
                },
                {
                    step: 4,
                    title: "Growth Tuning",
                    description: "Implementing upsells, cross-sells, and recovery emails to boost lifetime value.",
                }
            ]}

            includesTitle="What We Deliver"
            includes={[
                "Custom Store Design",
                "Payment Gateway Setup (Stripe, PayPal)",
                "Product Catalog Migration",
                "Mobile Optimization",
                "Abandoned Cart Recovery",
                "Inventory Management Setup"
            ]}

            benefitsTitle="Business Outcomes"
            benefits={[
                {
                    title: "Increased Sales",
                    description: "Frictionless buying experiences directly boost your bottom line.",
                },
                {
                    title: "Scalability",
                    description: "Handle thousands of orders without your site crashing.",
                },
                {
                    title: "Automated Operations",
                    description: "Streamline shipping and tax calculations automatically.",
                },
                {
                    title: "Global Reach",
                    description: "Multi-currency and multi-language support to sell everywhere.",
                }
            ]}

            stackTitle="Technologies"

            stackImages={[
                {
                    id: 1,
                    src: "/services-imgs/ecommerce/ecommerce-furniture.jpg",
                    alt: "Furniture Store Design",
                },
                {
                    id: 2,
                    src: "/services-imgs/ecommerce/ecommerce-mobile-app.jpg",
                    alt: "Mobile Commerce App",
                },
                {
                    id: 3,
                    src: "/services-imgs/ecommerce/ecommerce-furniture-app.jpg",
                    alt: "Furniture Shopping App",
                },
                {
                    id: 4,
                    src: "/services-imgs/ecommerce/ecommerce-pet-store.png",
                    alt: "Pet Store E-commerce",
                },
                {
                    id: 5,
                    src: "/services-imgs/ecommerce/ecommerce-skincare.png",
                    alt: "Skincare Product Page",
                },
            ]}

            ctaTitle="Start selling more today"
        />
    );
}
