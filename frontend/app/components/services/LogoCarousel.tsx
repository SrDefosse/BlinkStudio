
import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
    name: string
    id: number
    img: React.ComponentType<React.SVGProps<SVGSVGElement>> | string
    className?: string
}

interface LogoColumnProps {
    logos: Logo[]
    index: number
    currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
    const shuffled = shuffleArray(allLogos)
    const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

    // First distribute all logos evenly
    shuffled.forEach((logo, index) => {
        columns[index % columnCount].push(logo)
    })

    // Calculate max length needed
    const maxLength = Math.max(...columns.map((col) => col.length))

    // Fill shorter columns deterministically to avoid random duplicates
    columns.forEach((col, colIndex) => {
        let textIndex = 0;
        while (col.length < maxLength) {
            // Pick a logo from the shuffled list that isn't already the last one in this column
            // We use a simple wrap-around index from the shuffled list
            let nextLogo = shuffled[textIndex % shuffled.length];

            // If it matches the last one, try the next one
            if (col.length > 0 && col[col.length - 1].id === nextLogo.id) {
                textIndex++;
                nextLogo = shuffled[textIndex % shuffled.length];
            }

            col.push(nextLogo);
            textIndex++;
        }
    })

    return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
    ({ logos, index, currentTime }) => {
        const cycleInterval = 2000
        const columnDelay = index * 200
        const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
        const currentIndex = Math.floor(adjustedTime / cycleInterval)
        const currentLogoObj = logos[currentIndex]
        const CurrentLogo = useMemo(() => currentLogoObj.img, [currentLogoObj])

        return (
            <motion.div
                className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${currentLogoObj.id}-${currentIndex}`}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
                        animate={{
                            y: "0%",
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                mass: 1,
                                bounce: 0.2,
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            y: "-20%",
                            opacity: 0,
                            filter: "blur(6px)",
                            transition: {
                                type: "tween",
                                ease: "easeIn",
                                duration: 0.3,
                            },
                        }}
                    >
                        {typeof CurrentLogo === 'string' ? (
                            <img
                                src={CurrentLogo}
                                alt={currentLogoObj.name}
                                className={`h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32 ${currentLogoObj.className || ""}`}
                            />
                        ) : (
                            <CurrentLogo className={`h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32 ${currentLogoObj.className || ""}`} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        )
    }
)

interface LogoCarouselProps {
    columnCount?: number
    logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
    const [logoSets, setLogoSets] = useState<Logo[][]>([])
    const [currentTime, setCurrentTime] = useState(0)

    const updateTime = useCallback(() => {
        setCurrentTime((prevTime) => prevTime + 100)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(updateTime, 100)
        return () => clearInterval(intervalId)
    }, [updateTime])

    useEffect(() => {
        const distributedLogos = distributeLogos(logos, columnCount)
        setLogoSets(distributedLogos)
    }, [logos, columnCount])

    return (
        <div className="flex space-x-12 justify-center">
            {logoSets.map((logos, index) => (
                <LogoColumn
                    key={index}
                    logos={logos}
                    index={index}
                    currentTime={currentTime}
                />
            ))}
        </div>
    )
}
