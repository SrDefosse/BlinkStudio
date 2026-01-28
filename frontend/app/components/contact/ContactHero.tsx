import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative pt-40 pb-20 px-4 bg-[#1a1d18] text-[#e6e1d7] overflow-hidden">

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[0]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                    {/* Left Side - Big Heading */}
                    <div className="space-y-6">
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#c8b4a0] font-mono uppercase tracking-widest text-sm md:text-base mb-4"
                            >
                                Contact Us
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85]"
                            >
                                Let's <br /> <span className="text-[#544237]/50 lg:ml-24">Talk</span>
                            </motion.h1>
                        </div>
                    </div>

                    {/* Right Side - Description & Decoration */}
                    <div className="lg:mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="w-full h-[1px] bg-[#c8b4a0]/30 origin-left"></div>

                            <p className="text-xl md:text-2xl text-[#9ca3af] max-w-md leading-relaxed">
                                Ready to bring your vision to life? We're here to help you build digital experiences that matter.
                            </p>

                            <div className="flex gap-4 items-center text-[#c8b4a0] font-mono text-sm uppercase tracking-wider">
                                <span className="w-2 h-2 bg-[#c8b4a0] rounded-full animate-pulse"></span>
                                Currently accepting new projects
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#c8b4a0]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        </section>
    );
}
