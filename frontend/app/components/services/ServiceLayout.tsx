
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../lib/utils";
import VerticalImageStack from "./VerticalImageStack";
import { LogoCarousel } from "./LogoCarousel";
import { FramerMotionIcon, HydrogenIcon, NextJsIcon, TailwindIcon, TypeScriptIcon } from "./TechIcons";
import HomeBackground from "../home/HomeBackground";

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    heroImage?: string;
    problemTitle?: string;
    problems?: { title: string; description: string }[];
    processTitle?: string;
    process?: { title: string; description: string; step: number }[];
    includesTitle?: string;
    includes?: string[];
    stackTitle?: string;
    stack?: string[];
    stackImages?: { id: number; src: string; alt: string; }[];
    benefitsTitle?: string;
    benefits?: { title: string; description: string; }[];
    ctaTitle?: string;
    ctaDescription?: string;
}

export default function ServiceLayout({
    title,
    subtitle,
    problemTitle = "The Problem",
    problems = [],
    processTitle = "Our Process",
    process = [],
    includesTitle = "What's Included",
    includes = [],
    stackTitle = "Tech Stack",
    stack = [],
    stackImages,
    benefitsTitle = "The Benefits",
    benefits = [],
    ctaTitle = "Ready to start?",
    ctaDescription = "Let's build something amazing together.",
}: ServiceLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <HomeBackground>
            <div ref={containerRef} className="text-[#e6e1d7] font-primary overflow-x-hidden selection:bg-[#c8b4a0] selection:text-[#1a1d18]">

                {/* Hero Section */}
                <section className="relative h-screen flex flex-col items-center justify-center p-4">
                    <motion.div
                        style={{ y, scale, opacity }}
                        className="relative z-10 text-center max-w-7xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase mix-blend-difference text-transparent bg-clip-text bg-gradient-to-b from-[#e6e1d7] to-[#544237]">
                                {title.split(' ')[0]} <br />
                                <span className="text-[12vw] text-[#e6e1d7] outline-text">{title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-12 text-xl md:text-2xl max-w-2xl mx-auto font-mono text-[#c8b4a0] uppercase tracking-widest"
                        >
                            {subtitle}
                        </motion.p>
                    </motion.div>

                    {/* Decorative Lines */}
                    <div className="absolute inset-0 z-0 flex justify-between px-[10%] opacity-10 pointer-events-none">
                        <div className="w-[1px] h-full bg-[#c8b4a0]"></div>
                        <div className="w-[1px] h-full bg-[#c8b4a0]"></div>
                        <div className="w-[1px] h-full bg-[#c8b4a0]"></div>
                    </div>
                </section>

                {/* Vertical Image Stack */}
                <section className="py-20">
                    <VerticalImageStack images={stackImages} />
                </section>

                {/* Horizontal Scroll Problems */}
                {problems.length > 0 && (
                    <section className="py-32 border-t border-[#544237]/20">
                        <div className="px-4 md:px-12 mb-16 flex items-end justify-between">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">{problemTitle}</h2>
                            <div className="hidden md:block w-32 h-[1px] bg-[#c8b4a0]"></div>
                        </div>

                        <div className="overflow-x-auto pb-12 hide-scrollbar px-4 md:px-12 relative [mask-image:linear-gradient(to_right,black_85%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_90%,transparent_100%)]">
                            <div className="flex gap-8 w-max pr-12">
                                {problems.map((prob, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                                        className="w-[85vw] md:w-[30vw] min-h-[40vh] p-8 md:p-12 border border-[#544237] hover:bg-[#c8b4a0] hover:text-[#1a1d18] transition-all duration-500 group flex flex-col justify-between"
                                    >
                                        <span className="text-6xl font-mono opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{prob.title}</h3>
                                            <p className="text-lg md:text-xl opacity-70 group-hover:opacity-100 leading-relaxed font-mono">{prob.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Mobile Swipe Indicator */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 1,
                                    delay: 1
                                }}
                                className="absolute bottom-0 right-8 md:hidden flex items-center gap-2 text-[#c8b4a0] opacity-80 pointer-events-none pb-4"
                            >
                                <span className="text-sm font-mono uppercase tracking-widest">Swipe</span>
                                <FaArrowRight />
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Sticky Process */}
                {process.length > 0 && (
                    <section className="py-32 relative">
                        <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-1/3 lg:sticky lg:top-32 h-min">
                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-none">{processTitle}</h2>
                                <p className="text-[#c8b4a0] text-lg font-mono uppercase tracking-widest">How we make it happen</p>
                            </div>

                            <div className="lg:w-2/3 space-y-20">
                                {process.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="relative pl-8 md:pl-0 border-l border-[#544237] lg:border-none"
                                    >
                                        <span className="text-6xl md:text-8xl font-bold text-[#c8b4a0]/20 block mb-4 md:-ml-1 leading-none">
                                            {String(step.step).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-bold mb-4">{step.title}</h3>
                                        <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed max-w-xl">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Tech Stack Carousel */}
                <section className="py-20 text-[#1a1d18] overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                    <div className="mb-12">
                        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter opacity-80 text-[#e6e1d7]">{stackTitle}</h3>
                    </div>
                    <div className="w-full max-w-5xl mx-auto px-4">
                        <LogoCarousel columnCount={3} logos={[
                            { name: "Framework", id: 1, img: "/images/tech/logo-1.png" },
                            { name: "Design", id: 2, img: "/images/tech/logo-2.png" },
                            { name: "Language", id: 3, img: "/images/tech/logo-3.png", className: "invert brightness-0" },
                            { name: "Animation", id: 4, img: "/images/tech/logo-4.png" },
                            { name: "Backend", id: 5, img: "/images/tech/logo-5.png" },
                            { name: "Hydrogen", id: 6, img: "/images/tech/logo-6.png" },
                        ]} />
                    </div>
                </section>


                {/* Included Grid */}
                <section className="py-32 px-4 md:px-12 max-w-[90vw] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 sticky top-32">{includesTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {includes.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 border-b border-[#544237] hover:pl-10 transition-all duration-300 cursor-default group"
                                >
                                    <span className="text-2xl md:text-3xl group-hover:text-[#c8b4a0] transition-colors">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                {benefits.length > 0 && (
                    <section className="py-32 px-4 md:px-12 max-w-[90vw] mx-auto border-t border-[#544237]/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 sticky top-32">{benefitsTitle}</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-8">
                                {benefits.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-8 border border-[#544237] hover:bg-[#c8b4a0] hover:text-[#1a1d18] transition-all duration-300 group"
                                    >
                                        <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
                                        <p className="text-lg opacity-70 group-hover:opacity-100 font-mono">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Big CTA */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
                    <div className="text-center z-10">
                        <motion.h2
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[0.8]"
                        >
                            {ctaTitle}
                        </motion.h2>
                        <Link to="/contact" className="group relative inline-block">
                            <span className="absolute inset-0 bg-[#c8b4a0] translate-y-2 translate-x-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="relative block border border-[#c8b4a0] bg-[#1a1d18] px-12 py-6 text-xl md:text-2xl font-mono uppercase tracking-widest group-hover:bg-[#c8b4a0] group-hover:text-[#1a1d18] transition-colors">
                                Start Project
                            </span>
                        </Link>
                    </div>


                </section>

                <style>{`
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
            .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            .outline-text {
                -webkit-text-stroke: 1px #e6e1d7;
                color: transparent;
            }
        `}</style>
            </div>
        </HomeBackground>
    );
}
