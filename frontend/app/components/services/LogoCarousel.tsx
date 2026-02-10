
import React from "react"
import { motion } from "framer-motion"

interface Logo {
    name: string
    id: number
    img: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
    className?: string
}

interface LogoCarouselProps {
    columnCount?: number
    logos: Logo[]
    speed?: number
}

export function LogoCarousel({ logos, speed = 35 }: LogoCarouselProps) {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-max"
                style={{
                    animation: `logo-scroll ${speed}s linear infinite`,
                }}
            >
                {/* First set */}
                {logos.map((logo, i) => (
                    <LogoItem key={`a-${logo.id}-${i}`} logo={logo} />
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, i) => (
                    <LogoItem key={`b-${logo.id}-${i}`} logo={logo} />
                ))}
            </motion.div>

            <style>{`
                @keyframes logo-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    )
}

function LogoItem({ logo }: { logo: Logo }) {
    const LogoImg = logo.img

    return (
        <div
            className="flex-shrink-0 flex items-center justify-center px-6 md:px-10"
            style={{ height: "80px" }}
        >
            {typeof LogoImg === "string" ? (
                <img
                    src={LogoImg}
                    alt={logo.name}
                    className={`h-12 w-auto max-w-[100px] md:h-16 md:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
                    draggable={false}
                />
            ) : (
                <LogoImg
                    className={`h-12 w-auto max-w-[100px] md:h-16 md:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
                />
            )}
        </div>
    )
}
