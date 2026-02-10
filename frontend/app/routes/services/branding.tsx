
import ServiceLayout from "../../components/services/ServiceLayout";
import type { Route } from "./+types/branding";

import { getMetaTags } from "../../utils/seo";

export function meta({ }: Route.MetaArgs) {
    return getMetaTags({
        title: "Strategic Branding & Identity",
        description: "Define your legacy with a cohesive brand identity that resonates with your audience and stands the test of time.",
        image: "/home-imgs/values/innovation.webp",
    });
}

export default function Branding() {
    return (
        <ServiceLayout
            title="Strategic Branding"
            subtitle="More than just a logo. We build cohesive brand identities that tell your story and connect deeply with your audience."

            problemTitle="Identity Crisis?"
            problems={[
                {
                    title: "Inconsistency",
                    description: "Mixed visual messages confuse customers and dilute your brand's impact.",
                },
                {
                    title: "Forgettable Visuals",
                    description: "Blending in with competitors prevents you from capturing market share.",
                },
                {
                    title: "Lack of Direction",
                    description: "Without clear guidelines, your marketing efforts feel scattered and ineffective.",
                }
            ]}

            processTitle="Creative Methodology"
            process={[
                {
                    step: 1,
                    title: "Brand Research",
                    description: "understanding your market position, values, and audience psychology.",
                },
                {
                    title: "Visual Identity",
                    step: 2,
                    description: "Crafting the logo, color palette, and typography that form your visual language.",
                },
                {
                    title: "Brand Applications",
                    step: 3,
                    description: "Applying your new identity to business cards, social media, and packaging.",
                },
                {
                    title: "Brand Guidelines",
                    step: 4,
                    description: "Creating a comprehensive brand book to ensure consistency across all channels.",
                }
            ]}

            includesTitle="Deliverables"
            includes={[
                "Logo Design & Variations",
                "Color Palette & Typography System",
                "Brand Style Guide (Brand Book)",
                "Social Media Assets",
                "Stationery Design",
                "Tone of Voice Guidelines"
            ]}

            benefitsTitle="Brand Value"
            benefits={[
                {
                    title: "Premium Perception",
                    description: "A professional look allows you to command higher prices.",
                },
                {
                    title: "Customer Loyalty",
                    description: "Strong brands build emotional connections that last.",
                },
                {
                    title: "Marketing Efficiency",
                    description: "Consistent assets make creating new marketing materials faster and easier.",
                },
                {
                    title: "Differentiation",
                    description: "Clearly stand out from your competitors in the market.",
                }
            ]}

            stackTitle="Tools We Use"

            stackImages={[
                {
                    id: 1,
                    src: "/services-imgs/branding/branding-homie.jpg",
                    alt: "Homie Branding Project",
                },
                {
                    id: 2,
                    src: "/services-imgs/branding/branding-studio-lab.png",
                    alt: "Studio Lab Coat Branding",
                },
                {
                    id: 3,
                    src: "/services-imgs/branding/branding-m.jpg",
                    alt: "M Branding Logo",
                },
                {
                    id: 4,
                    src: "/services-imgs/branding/branding-bpm.jpg",
                    alt: "BPM Brand Application",
                },
                {
                    id: 5,
                    src: "/services-imgs/branding/branding-studio-aop.png",
                    alt: "Studio AOP Logo",
                },
            ]}

            ctaTitle="Define your legacy"
        />
    );
}
