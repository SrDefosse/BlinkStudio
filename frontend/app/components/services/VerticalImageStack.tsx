"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"

// Replaced next/image with standard img tag for Vite compatibility
// You might need to adjust styles or use a compatible image component if available

const images = [
    {
        id: 1,
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-black-sneaker-with-red-sole-on-grey-backgro-hj40sZT8MUUSeLz18VN7EjhcnV0kSD.jpg",
        alt: "Black sneaker with red sole",
    },
    {
        id: 2,
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/white-minimalist-sneaker-on-light-background-xQxkXgGrSrAe6pvLPNC6yrh20Atqoa.jpg",
        alt: "White minimalist sneaker",
    },
    {
        id: 3,
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/navy-blue-running-shoe-on-gradient-background-E1spqSK9gDvh3gTNwASkttEg76nZgm.jpg",
        alt: "Navy blue running shoe",
    },
    {
        id: 4,
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/red-athletic-sneaker-on-dark-background-skamDX1NbCRW4jvHxijkfmCnHGr6NJ.jpg",
        alt: "Red athletic sneaker",
    },
    {
        id: 5,
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/green-forest-hiking-boot-on-natural-background-T41PNLzI60G2u6rFIRxeCbKT6RWKOH.jpg",
        alt: "Green hiking boot",
    },
]

interface ImageItems {
    id: number;
    src: string;
    alt: string;
}

interface VerticalImageStackProps {
    images?: ImageItems[];
}

export default function VerticalImageStack({ images: propImages }: VerticalImageStackProps) {
    const displayImages = propImages || images;
    const [currentIndex, setCurrentIndex] = useState(0)
    const lastNavigationTime = useRef(0)
    const navigationCooldown = 400 // ms between navigations

    const navigate = useCallback((newDirection: number) => {
        const now = Date.now()
        if (now - lastNavigationTime.current < navigationCooldown) return
        lastNavigationTime.current = now

        setCurrentIndex((prev) => {
            if (newDirection > 0) {
                return prev === displayImages.length - 1 ? 0 : prev + 1
            }
            return prev === 0 ? displayImages.length - 1 : prev - 1
        })
    }, [])

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50
        if (info.offset.y < -threshold) {
            navigate(1)
        } else if (info.offset.y > threshold) {
            navigate(-1)
        }
    }

    const handleWheel = useCallback(
        (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > 30) {
                if (e.deltaY > 0) {
                    navigate(1)
                } else {
                    navigate(-1)
                }
            }
        },
        [navigate],
    )

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: true })
        return () => window.removeEventListener("wheel", handleWheel)
    }, [handleWheel])

    const getCardStyle = (index: number) => {
        const total = displayImages.length
        let diff = index - currentIndex
        if (diff > total / 2) diff -= total
        if (diff < -total / 2) diff += total

        if (diff === 0) {
            return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
        } else if (diff === -1) {
            return { y: -160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: 8 }
        } else if (diff === -2) {
            return { y: -280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: 15 }
        } else if (diff === 1) {
            return { y: 160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: -8 }
        } else if (diff === 2) {
            return { y: 280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: -15 }
        } else {
            return { y: diff > 0 ? 400 : -400, scale: 0.6, opacity: 0, zIndex: 0, rotateX: diff > 0 ? -20 : 20 }
        }
    }

    const isVisible = (index: number) => {
        const total = displayImages.length
        let diff = index - currentIndex
        if (diff > total / 2) diff -= total
        if (diff < -total / 2) diff += total
        return Math.abs(diff) <= 2
    }

    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />
            </div>

            {/* Card Stack */}
            <div className="relative flex h-[500px] w-[320px] items-center justify-center" style={{ perspective: "1200px" }}>
                {displayImages.map((image, index) => {
                    if (!isVisible(index)) return null
                    const style = getCardStyle(index)
                    const isCurrent = index === currentIndex

                    return (
                        <motion.div
                            key={image.id}
                            className="absolute cursor-grab active:cursor-grabbing"
                            animate={{
                                y: style.y,
                                scale: style.scale,
                                opacity: style.opacity,
                                rotateX: style.rotateX,
                                zIndex: style.zIndex,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass: 1,
                            }}
                            drag={isCurrent ? "y" : false}
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            style={{
                                transformStyle: "preserve-3d",
                                zIndex: style.zIndex,
                            }}
                        >
                            <div
                                className="relative h-[420px] w-[280px] overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/20"
                                style={{
                                    boxShadow: isCurrent
                                        ? "0 25px 50px -12px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                                        : "0 10px 30px -10px rgba(255, 255, 255, 0.1)",
                                }}
                            >
                                {/* Card inner glow - uses foreground with low opacity */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-transparent" />

                                <img
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    className="object-cover w-full h-full"
                                    draggable={false}
                                />

                                {/* Bottom gradient overlay - uses background color */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Navigation dots */}
            <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                {displayImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== currentIndex) {
                                setCurrentIndex(index)
                            }
                        }}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "h-6 bg-white" : "bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Instruction hint */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <div className="flex flex-col items-center gap-2 text-neutral-400">
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14M5 12l7-7 7 7" />
                        </svg>
                    </motion.div>
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll or drag</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-light text-white tabular-nums">
                        {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="my-2 h-px w-8 bg-white/20" />
                    <span className="text-sm text-neutral-400 tabular-nums">{String(displayImages.length).padStart(2, "0")}</span>
                </div>
            </div>
        </div>
    )
}
