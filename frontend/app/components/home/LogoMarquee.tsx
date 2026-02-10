// LogoMarquee.tsx
import React, { type CSSProperties } from "react";

const LOGOS = [
  { src: "home-imgs/hero/logos/stellaris_logo.webp", alt: "Stellaris Education" },
  { src: "home-imgs/hero/logos/MT3_logo.webp", alt: "MT3" },
  { src: "home-imgs/hero/logos/stoever_logo.webp", alt: "Stoever" },
  { src: "home-imgs/hero/logos/mit_logo.webp", alt: "MIT Consultores" },
  { src: "home-imgs/hero/logos/sinergia_logo.webp", alt: "Sinergia Telecomunicaciones" },
  { src: "home-imgs/hero/logos/fer_tovar_logo.webp", alt: "Fer Tovar" },
  { src: "home-imgs/hero/logos/malpe_logo.webp", alt: "Malpe" },
  { src: "home-imgs/hero/logos/8esencias_logo.webp", alt: "8 Esencias" },
];

interface LogoMarqueeProps {
  speed?: number; // segundos por vuelta
  className?: string;
  gapRem?: number; // separación en rem
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  speed = 20,
  className = "",
  gapRem = 2.5,
}) => {
  const maskStyle: CSSProperties = {
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  };

  return (
    <>
      <style>{`
        .logo-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          --marquee-duration: ${speed}s;
          --marquee-gap: ${gapRem}rem;
        }

        .logo-marquee-stage {
          position: relative;
          width: 100%;
          height: 3rem; /* h-12 */
        }

        .logo-marquee-track {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;

          gap: var(--marquee-gap);

          /* ✅ Esto hace que el espacio entre “último → primero” sea igual al gap */
          padding-right: var(--marquee-gap);

          width: max-content;
          height: 100%;
          will-change: transform;
          transform: translateZ(0);
        }

        .logo-marquee-track.track-a {
          animation: marquee-a var(--marquee-duration) linear infinite;
        }

        .logo-marquee-track.track-b {
          animation: marquee-b var(--marquee-duration) linear infinite;
        }

        @keyframes marquee-a {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-b {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track {
            animation: none !important;
            transform: none !important;
            position: static;
            padding-right: 0;
          }
          .logo-marquee-stage {
            height: auto;
          }
        }
      `}</style>

      <div className={`logo-marquee-wrapper ${className}`} style={maskStyle}>
        <div className="logo-marquee-stage" aria-label="Clientes / Marcas">
          <div className="logo-marquee-track track-a" aria-hidden="true">
            {LOGOS.map((logo, index) => (
              <div
                key={`a-${index}`}
                className="flex flex-shrink-0 items-center justify-center h-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1) opacity(0.95)" }}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="logo-marquee-track track-b" aria-hidden="true">
            {LOGOS.map((logo, index) => (
              <div
                key={`b-${index}`}
                className="flex flex-shrink-0 items-center justify-center h-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1) opacity(0.95)" }}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoMarquee;
