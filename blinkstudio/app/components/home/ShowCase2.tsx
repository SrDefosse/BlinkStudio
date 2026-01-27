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

  // Imagen (reemplaza si quieres otra)
  const desktopImage =
    "/home-imgs/showcase2/showcase2_PC.png";
  const mobileImage =
    "/home-imgs/showcase2/showcase2_mobile.png";

  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[200px] md:pt-[300px]" style={{ backgroundColor: colors.bg.primary }}>
      <div
        ref={containerRef}
        className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      >
        <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
          {/* Header */}
          <motion.div style={{ translateY }} className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-semibold" style={{ color: colors.text.primary }}>
              We build what you<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
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
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 p-2 md:p-6 rounded-[30px] shadow-2xl"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl md:p-4" style={{ backgroundColor: colors.bg.tertiary }}>
              {/* Contenido (imagen) */}
              <img
                src={isMobile ? mobileImage : desktopImage}
                alt="hero"
                draggable={false}
                className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
