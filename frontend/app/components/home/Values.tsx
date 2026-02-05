import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const colors = {
  bg: {
    primary: "#1a1d18",
    secondary: "#2a2e26",
    tertiary: "#3c4237",
  },
  text: {
    primary: "#e6e1d7",
    secondary: "#c8b4a0",
    muted: "#a89080",
  }
};

export default function Values() {
  const sectionRef = useRef(null);

  // Recalcular ancho del viewport para el desplazamiento horizontal
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slides = [
    { label: "PASSION", bg: colors.bg.primary, image: "/home-imgs/values/passion.webp" },
    { label: "VISION", bg: colors.bg.secondary, image: "/home-imgs/values/vision.webp" },
    { label: "TEAMWORK", bg: colors.bg.tertiary, image: "/home-imgs/values/teamwork.webp" },
    { label: "INNOVATION", bg: colors.bg.secondary, image: "/home-imgs/values/innovation.webp" },
    { label: "COMMUNICATION", bg: colors.bg.primary, image: "/home-imgs/values/communication.webp" },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalShift = (slides.length - 1) * vw;
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalShift]);

  return (
    <section ref={sectionRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.ul className="flex h-full will-change-transform" style={{ x }}>
          {slides.map((s, i) => {
            const segStart = i / slides.length;
            const segEnd = (i + 1) / slides.length;
            const headerX = useTransform(
              scrollYProgress,
              [segStart, segEnd],
              [400, -400]
            );

            return (
              <li
                key={s.label}
                className="flex-none w-screen h-screen flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: s.bg }}
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${colors.text.muted}10 1px, transparent 1px), linear-gradient(to bottom, ${colors.text.muted}10 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                  }}
                />
                {/* Radial gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, ${s.bg} 100%)`
                  }}
                />
                <motion.h2
                  className="text-[15vw] md:text-[10vw] font-semibold leading-none relative z-10"
                  style={{ x: headerX, color: colors.text.primary }}
                >
                  {s.label}
                </motion.h2>
                {/* Decorative accent line */}
                <div
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-px"
                  style={{ backgroundColor: colors.text.secondary, opacity: 0.3 }}
                />
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
