import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

/**
 * ShowCase1 — Hero con clip-path y parallax, listo para React + Vite
 * Props opcionales:
 *  - scrollHeight (px) = 1500
 *  - desktopImage, mobileImage
 *  - initialClipPercentage = 25
 *  - finalClipPercentage = 75
 */
export default function ShowCase1({
  scrollHeight = 1500,
  desktopImage = "/showcase/showcase1/showcase1_PC.webp",
  mobileImage = "/showcase/showcase1/showcase1_mobile.png",
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) {
  // Wrapper que define el tramo de scroll de este hero
  const sectionRef = useRef(null);

  // Progreso de scroll relativo SOLO a esta sección (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Animaciones basadas en el progreso 0..1
  const clipStart = useTransform(scrollYProgress, [0, 1], [initialClipPercentage, 0]);
  const clipEnd = useTransform(scrollYProgress, [0, 1], [finalClipPercentage, 100]);
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["170%", "100%"]);

  return (
    // Altura total = tramo scrolleable + 100vh para que el sticky tenga recorrido
    <div
      ref={sectionRef}
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full bg-[#FAF8F3]"
    >
      {/* Capa sticky que ocupa el viewport durante el tramo de scroll */}
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          willChange: "clip-path, background-size, transform, opacity",
        }}
      >
        {/* Fondo móvil */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Fondo desktop */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Contenido opcional */}
        <div className="absolute inset-0 grid place-items-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight text-center drop-shadow">
            
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
