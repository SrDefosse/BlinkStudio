import { type MetaFunction } from "react-router";
import HomeBackground from "../layout/HomeBackground";
import { DraggableContainer, GridBody, GridItem } from "../components/portfolio/DraggableContainer";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio | Blink Studio" },
        { name: "description", content: "Our recent work and projects." },
    ];
};

const colors = {
    50: "#f8f7f5",
    100: "#e6e1d7",
    200: "#c8b4a0",
    300: "#a89080",
    400: "#8a7060",
    500: "#6b5545",
    600: "#544237",
    700: "#3c4237",
    800: "#2a2e26",
    900: "#1a1d18",
};

// Images collected from service pages
const portfolioImages = [
    // Websites
    { id: 1, src: "/services-imgs/websites/website-creacy.jpg", alt: "Creacy Website Design" },
    { id: 2, src: "/services-imgs/websites/mobile-habit.jpg", alt: "Mobile Habit Tracking App" },
    { id: 3, src: "/services-imgs/websites/dashboard-logistics.jpg", alt: "Logistics Dashboard" },
    { id: 4, src: "/services-imgs/websites/website-strive.jpg", alt: "Strive Studio Website" },
    { id: 5, src: "/services-imgs/websites/dashboard-sales.jpg", alt: "Sales CRM Dashboard" },
    // Ecommerce
    { id: 6, src: "/services-imgs/ecommerce/ecommerce-furniture.jpg", alt: "Furniture Store Design" },
    { id: 7, src: "/services-imgs/ecommerce/ecommerce-mobile-app.jpg", alt: "Mobile Commerce App" },
    { id: 8, src: "/services-imgs/ecommerce/ecommerce-furniture-app.jpg", alt: "Furniture Shopping App" },
    { id: 9, src: "/services-imgs/ecommerce/ecommerce-pet-store.png", alt: "Pet Store E-commerce" },
    { id: 10, src: "/services-imgs/ecommerce/ecommerce-skincare.png", alt: "Skincare Product Page" },
    // Branding
    { id: 11, src: "/services-imgs/branding/branding-homie.jpg", alt: "Homie Branding Project" },
    { id: 12, src: "/services-imgs/branding/branding-studio-lab.png", alt: "Studio Lab Coat Branding" },
    { id: 13, src: "/services-imgs/branding/branding-m.jpg", alt: "M Branding Logo" },
    { id: 14, src: "/services-imgs/branding/branding-bpm.jpg", alt: "BPM Brand Application" },
    { id: 15, src: "/services-imgs/branding/branding-studio-aop.png", alt: "Studio AOP Logo" },
    // Chatbots
    { id: 16, src: "/services-imgs/chatbots/chatbot-voice.jpg", alt: "AI Voice Interface" },
    { id: 17, src: "/services-imgs/chatbots/blink-studio-logo.jpg", alt: "Blink Studio Identity" },
    { id: 18, src: "/services-imgs/chatbots/blink-ia-graph.jpg", alt: "AI Logic Flow" },
    { id: 19, src: "/services-imgs/chatbots/automation-workflow.jpg", alt: "Home Automation Workflow" },
    { id: 20, src: "/services-imgs/chatbots/blink-ia-voice.jpg", alt: "AI Voice Interaction" },
];

export default function Portfolio() {
    return (
        <HomeBackground>
            <main className="w-full relative min-h-screen flex flex-col overflow-hidden">
                {/* Navbar is in root.tsx */}

                <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-between pb-12 pt-32 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto w-full">
                        <p className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: colors[300] }}>
                            Our Work
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8" style={{ color: colors[100] }}>
                            Selected <br className="hidden md:block" /> Projects.
                        </h1>
                    </div>
                    <div className="max-w-7xl mx-auto w-full">
                        <p className="text-sm font-mono uppercase tracking-widest" style={{ color: colors[300] }}>
                            Drag to explore
                        </p>
                    </div>
                </div>

                <section className="flex-1 w-full h-dvh relative z-20">
                    <DraggableContainer className="gap-2 p-2 md:gap-4 md:p-4">
                        <GridBody className="gap-2 p-2 md:gap-4 md:p-4">
                            {portfolioImages.map((image) => (
                                <GridItem key={image.id} className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-xs md:text-sm font-medium text-[#e6e1d7] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {image.alt}
                                        </p>
                                    </div>
                                </GridItem>
                            ))}
                        </GridBody>
                    </DraggableContainer>
                </section>

                {/* Footer Explicitly Excluded */}
            </main>
        </HomeBackground>
    );
}
