
import ServiceLayout from "../../components/services/ServiceLayout";
import type { Route } from "./+types/websites";

import { getMetaTags } from "../../utils/seo";

export function meta({ }: Route.MetaArgs) {
    return getMetaTags({
        title: "Custom Website Development",
        description: "We craft high-performance, mobile-first websites that blend aesthetics with technical excellence.",
        image: "/process-imgs/process-1.jpg",
    });
}

export default function Websites() {
    return (
        <ServiceLayout
            title="Custom Websites"
            subtitle="We craft digital experiences that blend aesthetics with performance, ensuring your brand stands out in a crowded digital landscape."

            problemTitle="Why a template isn't enough"
            problems={[
                {
                    title: "Generic Design",
                    description: "Templates look the same. Your brand deserves a unique identity that reflects your values and vision.",
                },
                {
                    title: "Slow Performance",
                    description: "Bloated code and unnecessary plugins in standard builders slow down your site, hurting SEO and user experience.",
                },
                {
                    title: "Limited Scalability",
                    description: "As your business grows, you need a platform that can evolve without breaking or requiring a complete rebuild.",
                }
            ]}

            processTitle="Development Process"
            process={[
                {
                    step: 1,
                    title: "Discovery & Strategy",
                    description: "We dive deep into your business goals, target audience, and competition to map out a strategic direction.",
                },
                {
                    step: 2,
                    title: "UX/UI Design",
                    description: "We create wireframes and high-fidelity mockups, focusing on intuitive navigation and stunning visuals.",
                },
                {
                    step: 3,
                    title: "Development",
                    description: "Our engineers build your site using modern, clean code, ensuring pixel-perfect implementation of the design.",
                },
                {
                    step: 4,
                    title: "Optimization & Launch",
                    description: "Rigorous testing for speed, mobile responsiveness, and SEO before we go live.",
                }
            ]}

            includesTitle="What's Included"
            includes={[
                "Custom UI/UX Design",
                "Responsive Mobile-First Layouts",
                "SEO Fundamentals Implementation",
                "CMS Integration (sanity, Strapi, etc.)",
                "Performance Optimization",
                "Analytics Setup"
            ]}

            benefitsTitle="The Impact"
            benefits={[
                {
                    title: "Higher Conversion",
                    description: "Optimized user flows lead to more inquiries and sales.",
                },
                {
                    title: "Brand Authority",
                    description: "A premium look builds instant trust with your visitors.",
                },
                {
                    title: "Top-Tier Performance",
                    description: "Lightning fast load times improve Google rankings and UX.",
                },
                {
                    title: "Future Proof",
                    description: "Built on modern tech stacks that are easy to maintain and scale.",
                }
            ]}

            stackTitle="Our Tech Stack"

            stackImages={[
                {
                    id: 1,
                    src: "/services-imgs/websites/website-creacy.jpg",
                    alt: "Creacy Website Design",
                },
                {
                    id: 2,
                    src: "/services-imgs/websites/mobile-habit.jpg",
                    alt: "Mobile Habit Tracking App",
                },
                {
                    id: 3,
                    src: "/services-imgs/websites/dashboard-logistics.jpg",
                    alt: "Logistics Dashboard",
                },
                {
                    id: 4,
                    src: "/services-imgs/websites/website-strive.jpg",
                    alt: "Strive Studio Website",
                },
                {
                    id: 5,
                    src: "/services-imgs/websites/dashboard-sales.jpg",
                    alt: "Sales CRM Dashboard",
                },
            ]}

            ctaTitle="Ready to upgrade your web presence?"
        />
    );
}
