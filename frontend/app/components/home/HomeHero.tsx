import { useEffect, useRef } from "react";
import { Link } from "react-router";
import LogoMarquee from "./LogoMarquee";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

export default function HomeHero() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes word-appear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(50);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }

        .word {
          opacity: 0;
          display: inline-block;
        }

        .grid-line {
          stroke: rgba(200, 180, 160, 0.1);
          stroke-width: 1;
          opacity: 0;
          animation: word-appear 1s ease-out forwards;
        }

        .detail-dot {
          fill: rgba(200, 180, 160, 0.3);
          opacity: 0;
          animation: word-appear 0.8s ease-out forwards;
        }

        .corner-element {
          position: absolute;
          opacity: 0;
          animation: word-appear 0.8s ease-out forwards;
        }

        .floating-element {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(200, 180, 160, 0.2);
          border-radius: 50%;
          opacity: 0;
          animation-play-state: paused;
        }

        .floating-element::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          border: 1px solid rgba(200, 180, 160, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: float 3s ease-in-out infinite;
        }

      `}</style>
      <div
        className="min-h-screen bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7] font-primary overflow-hidden relative w-full"
      >
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(200,180,160,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            className="grid-line"
            style={{ animationDelay: "2.5s", opacity: 0.05 }}
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            className="grid-line"
            style={{ animationDelay: "3s", opacity: 0.05 }}
          />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
        </svg>

        {/* Corner elements */}
        <div className="corner-element top-8 left-8" style={{ animationDelay: "4s" }}>
          <div
            className="absolute top-0 left-0 w-2 h-2 opacity-30"
            style={{ background: colors[200] }}
          ></div>
        </div>
        <div className="corner-element top-8 right-8" style={{ animationDelay: "4.2s" }}>
          <div
            className="absolute top-0 right-0 w-2 h-2 opacity-30"
            style={{ background: colors[200] }}
          ></div>
        </div>
        <div className="corner-element bottom-8 left-8" style={{ animationDelay: "4.4s" }}>
          <div
            className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
            style={{ background: colors[200] }}
          ></div>
        </div>
        <div className="corner-element bottom-8 right-8" style={{ animationDelay: "4.6s" }}>
          <div
            className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
            style={{ background: colors[200] }}
          ></div>
        </div>

        {/* Floating elements */}
        <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
        <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
        <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
        <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>

        <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 py-16 md:px-16 md:py-24">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <div
                className="opacity-0"
                style={{
                  animation: "word-appear 0.8s ease-out forwards",
                  animationDelay: "0s"
                }}
              >
                <img
                  src="/home-imgs/hero/blink_logo_white.png"
                  alt="Blink Studio"
                  className="h-28 md:h-32 lg:h-36 w-auto object-contain"
                />
              </div>
              <p
                className="mt-2 text-xs md:text-sm font-mono uppercase tracking-[0.3em] opacity-0"
                style={{
                  color: colors[200],
                  animation: "word-appear 0.8s ease-out forwards",
                  animationDelay: "0.4s"
                }}
              >
                Digital Agency
              </p>
            </div>
            <div
              className="text-right text-xs font-mono uppercase tracking-wider opacity-0"
              style={{
                color: colors[300],
                animation: "word-appear 0.8s ease-out forwards",
                animationDelay: "0.6s"
              }}
            >
              Based in<br />
              <span style={{ color: colors[100] }}>Mexico</span>
            </div>
          </div>

          {/* Services - Main content */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-4xl">
              <div className="space-y-1 md:space-y-2">
                {[
                  { text: "WEBSITES", delay: 800, link: "/services/websites" },
                  { text: "ECOMMERCE WEBSITES", delay: 1000, link: "/services/ecommerce" },
                  { text: "BRANDING", delay: 1400, link: "/services/branding" },
                  { text: "CHATBOTS", delay: 1800, link: "/services/chatbots" },
                ].map((service, index) => (
                  <Link
                    to={service.link}
                    key={index}
                    className="group flex items-center gap-4 py-2 md:py-3 border-b border-[#c8b4a0]/10 hover:border-[#c8b4a0]/30 transition-colors cursor-pointer"
                  >
                    <span
                      className="word text-[#c8b4a0]/40 text-sm font-mono"
                      data-delay={service.delay}
                    >
                      /
                    </span>
                    <span
                      className="word text-lg md:text-2xl lg:text-3xl font-light tracking-wide group-hover:tracking-wider transition-all duration-300"
                      data-delay={service.delay + 100}
                      style={{ color: colors[100] }}
                    >
                      {service.text}
                    </span>
                    <div
                      className="flex-1 h-px opacity-0 group-hover:opacity-20 transition-opacity"
                      style={{ background: colors[200] }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA + Client Marquee */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 overflow-hidden opacity-0"
              style={{
                animation: "word-appear 0.8s ease-out forwards",
                animationDelay: "2.4s",
              }}
            >
              <div
                className="absolute inset-0 border transition-all duration-300 group-hover:scale-105"
                style={{ borderColor: colors[200] }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${colors[200]}10 0%, transparent 100%)` }}
              />
              <span
                className="relative text-sm md:text-base font-mono uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300"
                style={{ color: colors[100] }}
              >
                Book A Call
              </span>
              <span
                className="relative ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: colors[200] }}
              >
                →
              </span>
            </a>

            {/* Client Logos Marquee */}
            <div
              className="w-full md:w-80 lg:w-96 opacity-0"
              style={{
                animation: "word-appear 0.8s ease-out forwards",
                animationDelay: "2.6s",
              }}
            >
              <p
                className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3 text-right"
                style={{ color: colors[300] }}
              >
                Trusted by
              </p>
              <LogoMarquee speed={22} />
            </div>
          </div>
        </div>

        <div
          id="mouse-gradient"
          ref={gradientRef}
          className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
          style={{
            background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
          }}
        >      </div>
      </div>
    </>
  );
}