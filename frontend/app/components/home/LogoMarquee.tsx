// LogoMarquee.tsx
import React, { type CSSProperties } from "react";

const LOGOS = [
  { src: "home-imgs/hero/logos/stellaris_logo.webp", alt: "Stellaris Education" },
  { src: "home-imgs/hero/logos/MT3_logo.webp", alt: "MT3" },
  { src: "home-imgs/hero/logos/stoever_logo.webp", alt: "Stoever" },
  { src: "home-imgs/hero/logos/mit_logo.webp", alt: "MIT Consultores" },
  { src: "home-imgs/hero/logos/sinergia_logo.webp", alt: "Sinergia Telecomunicaciones" },
  { src: "home-imgs/hero/logos/fer_tovar_logo.webp", alt: "Fer Tovar" },
  { src: "home-imgs/hero/logos/entheo_logo.webp", alt: "Entheo" },
  { src: "home-imgs/hero/logos/8esencias_logo.webp", alt: "8 Esencias" },
];

interface LogoMarqueeProps {
  speed?: number;
  className?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ speed = 20, className = "" }) => {
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
        }

        .logo-marquee-track {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          width: max-content;
          animation: logo-marquee ${speed}s linear infinite;
        }

        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className={`logo-marquee-wrapper ${className}`} style={maskStyle}>
        <div className="logo-marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center h-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
                style={{
                  filter: "brightness(0) invert(1) opacity(0.95)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoMarquee;
