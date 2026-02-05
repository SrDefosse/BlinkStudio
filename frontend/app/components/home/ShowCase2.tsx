import React from "react";
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

/**
 * ShowCase2 — Container Scroll Animation (React + Vite, single file)
 * Uso: <ShowCase2 />
 * Opcional: personaliza las imágenes y el título editando los valores dentro del componente.
 */
export default function ShowCase2() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Dimensiones de escala dependientes del viewport
  const scaleRange = isMobile ? [0.7, 0.9] : [1.05, 1];

  // Mapeos del scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Video (asegúrate de colocar el archivo en public/showcase.mp4)
  const videoSrc = "/home-imgs/showcase2/Showcase.1.mp4";

  return (
    <div className="flex flex-col overflow-hidden pb-[200px] pt-[100px] md:pt-[150px]">
      <div
        ref={containerRef}
        className="h-[40rem] md:h-[55rem] flex items-center justify-center relative p-4 md:p-12"
      >
        <div className="py-10 w-full relative" style={{ perspective: "1000px" }}>
          {/* Header */}
          <motion.div style={{ translateY }} className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-semibold" style={{ color: colors.text.primary }}>
              We build what you<br />
              <span className="text-3xl md:text-[4.5rem] font-bold mt-1 leading-none">
                Imagine
              </span>
            </h1>
          </motion.div>

          {/* Card */}
          <motion.div
            style={{
              rotateX,
              scale,
              borderColor: colors.bg.tertiary,
              backgroundColor: colors.bg.secondary,
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-4xl mx-auto aspect-video w-full border-4 p-2 md:p-4 rounded-[30px] shadow-2xl"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl" style={{ backgroundColor: colors.bg.tertiary }}>
              {/* Contenido (imagen) */}
              {/* Contenido (video) */}
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto rounded-2xl object-cover h-full w-full object-left-top scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
