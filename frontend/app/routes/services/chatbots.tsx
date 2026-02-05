
import ServiceLayout from "../../components/services/ServiceLayout";
import type { Route } from "./+types/chatbots";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "AI Chatbots | Blink Studio" },
        { name: "description", content: "24/7 customer support and lead generation powered by AI." },
    ];
}

export default function Chatbots() {
    return (
        <ServiceLayout
            title="AI Chatbots & Automation"
            subtitle="Leverage the power of Artificial Intelligence to automate support, qualify leads, and scale your operations 24/7."

            problemTitle="Operational Bottlenecks"
            problems={[
                {
                    title: "Missed Leads",
                    description: "Customers expect instant answers. If you're offline, you're losing business.",
                },
                {
                    title: "High Support Costs",
                    description: "Scaling a human support team is expensive and time-consuming.",
                },
                {
                    title: "Repetitive Tasks",
                    description: " valuable human time is wasted answering the same FAQs over and over.",
                }
            ]}

            processTitle="Automation Flow"
            process={[
                {
                    step: 1,
                    title: "Workflow Analysis",
                    description: "Identifying where automation can deliver the highest ROI in your current process.",
                },
                {
                    step: 2,
                    title: "Conversation Design",
                    description: "Scripting natural, helpful dialogue flows that feel human and empathetic.",
                },
                {
                    step: 3,
                    title: "Integration",
                    description: "Connecting the AI to your CRM, calendar, and knowledge base.",
                },
                {
                    step: 4,
                    title: "Training & refinement",
                    description: "Continuously improving the AI's responses based on real user interactions.",
                }
            ]}

            includesTitle="System Features"
            includes={[
                "Custom AI Model Training",
                "Multi-channel Support (Web, WhatsApp, etc.)",
                "CRM Integration (Salesforce, HubSpot)",
                "Lead Qualification Logic",
                "Appointment Scheduling",
                "Live Agent Handoff"
            ]}

            benefitsTitle="AI Advantage"
            benefits={[
                {
                    title: "24/7 Availability",
                    description: "Make money and solve problems while you sleep.",
                },
                {
                    title: "Instant Response",
                    description: "Zero wait time ensures high customer satisfaction.",
                },
                {
                    title: "Cost Reduction",
                    description: "Handle 80% of queries automatically without adding headcount.",
                },
                {
                    title: "Consistency",
                    description: "Every customer gets the correct answer, every time.",
                }
            ]}

            stackTitle="AI Tech Stack"
            stack={["OpenAI API", "LangChain", "Python", "Vector Databases", "Vercel AI SDK", "Supabase"]}

            ctaTitle="Future-proof your business"
            ctaDescription="Start automating your growth with intelligent agents."
        />
    );
}
