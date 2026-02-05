import React from "react";
import { FiGlobe, FiShoppingCart, FiLayers, FiZap, FiCode, FiTrendingUp, FiClock, FiUsers, FiAward, FiTag, FiCpu, FiMessageCircle } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";

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

const BlinkStudioShowcase: React.FC = () => {
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
      `}</style>
      <section className="min-h-screen flex items-center justify-center w-full px-4 py-10 md:px-8 lg:px-12 bg-gradient-to-tr from-[#1a1d18] via-black to-[#2a2e26] relative overflow-hidden">
        {/* Fade to PASSION primary color at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
          style={{
            background: `linear-gradient(to top, ${colors.bg.primary} 0%, transparent 100%)`
          }}
        />
        {/* Grid pattern overlay - same as HomeHero */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-bento" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(200,180,160,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bento)" />
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

        <div className="mx-auto max-w-6xl lg:max-w-7xl relative z-10">
          {/* Masonry-style grid: 3 columns x 4 rows on large screens */}
          <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[minmax(150px,auto)]">
            {/* Hero image – Blink Studio (center, spans all rows) */}
            <div className="relative overflow-hidden rounded-3xl lg:col-start-2 lg:row-start-1 lg:row-span-4" style={{ backgroundColor: colors.bg.tertiary }}>
              <img
                src="/home-imgs/bento/bento-1.webp"
                alt="Blink Studio digital agency"
                className="h-full w-full object-cover min-h-[300px] md:min-h-[600px]"
              />
              <div className="absolute left-6 top-6">
                <img
                  src="/home-imgs/hero/blink_logo_white.png"
                  alt="Blink Studio"
                  className="h-6 md:h-8 w-auto object-contain opacity-90 drop-shadow-md"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl p-4 backdrop-blur-md" style={{ backgroundColor: `${colors.bg.secondary}B3` }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: colors.text.primary }}>
                    Based in Mexico
                  </p>
                  <p className="text-xs leading-relaxed opacity-80" style={{ color: colors.text.muted }}>
                    Serving clients worldwide with digital excellence and innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services (top-left) */}
            <div className="rounded-3xl p-6 shadow-sm border lg:row-span-2" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}20` }}>
              <div className="flex items-center gap-2 mb-4">
                <FiZap className="h-4 w-4" style={{ color: colors.text.secondary }} />
                <h3 className="text-sm font-semibold" style={{ color: colors.text.primary }}>
                  Our services
                </h3>
              </div>
              <p className="text-xs leading-relaxed mb-6" style={{ color: colors.text.muted }}>
                We deliver end-to-end digital solutions that drive growth and engagement.
              </p>

              <div className="grid grid-cols-1 gap-3">
                <ServiceItem icon={<FiGlobe className="h-4 w-4" />} label="Websites" />
                <ServiceItem icon={<FiShoppingCart className="h-4 w-4" />} label="Ecommerce" />
                <ServiceItem icon={<FiLayers className="h-4 w-4" />} label="Landing Pages" />
                <ServiceItem icon={<FiTag className="h-4 w-4" />} label="Branding" />
                <ServiceItem icon={<FiCpu className="h-4 w-4" />} label="AI Content" />
                <ServiceItem icon={<FiMessageCircle className="h-4 w-4" />} label="Chatbots" />
              </div>
            </div>

            {/* Tech Stack (top-right) */}
            <div className="rounded-3xl p-6 shadow-sm border lg:col-start-3 lg:row-start-1" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}20` }}>
              <div className="flex items-center gap-2 mb-4">
                <FiCode className="h-4 w-4" style={{ color: colors.text.secondary }} />
                <h3 className="text-xs font-semibold" style={{ color: colors.text.primary }}>
                  Tech stack
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <TechBadge>React</TechBadge>
                <TechBadge>TypeScript</TechBadge>
                <TechBadge>Node.js</TechBadge>
                <TechBadge>Remix</TechBadge>
                <TechBadge>Tailwind</TechBadge>
              </div>
            </div>

            {/* Combined Stats Card (bottom-right, spans 3 rows) */}
            <div className="rounded-3xl p-6 md:p-8 shadow-sm border flex flex-col justify-between lg:col-start-3 lg:row-start-2 lg:row-span-3" style={{ backgroundColor: colors.bg.tertiary, borderColor: `${colors.text.secondary}30` }}>
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full shadow-sm" style={{ backgroundColor: colors.bg.secondary }}>
                  <BsHeartFill className="h-5 w-5" style={{ color: colors.text.secondary }} />
                </span>
                <FiAward className="h-6 w-6" style={{ color: colors.text.secondary }} />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-bold tracking-tight mb-2" style={{ color: colors.text.primary }}>
                    100+
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: colors.text.muted }}>
                    Successful projects delivered worldwide with a 98% client satisfaction rate.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t" style={{ borderColor: `${colors.text.muted}20` }}>
                  <StatRow icon={<FiUsers className="h-4 w-4" />} label="50+ Active Clients" />
                  <StatRow icon={<FiGlobe className="h-4 w-4" />} label="15+ Countries" />
                  <StatRow icon={<FiTrendingUp className="h-4 w-4" />} label="3x Average ROI Growth" />
                </div>
              </div>
            </div>

            {/* Process (bottom-left) */}
            <div className="rounded-3xl p-6 shadow-sm border lg:col-start-1 lg:row-start-3 lg:row-span-2" style={{ backgroundColor: colors.bg.secondary, borderColor: `${colors.text.muted}20` }}>
              <div className="flex items-center gap-2 mb-4">
                <FiClock className="h-4 w-4" style={{ color: colors.text.secondary }} />
                <h3 className="text-sm font-semibold" style={{ color: colors.text.primary }}>
                  Our process
                </h3>
              </div>
              <p className="text-xs leading-relaxed mb-8" style={{ color: colors.text.muted }}>
                Efficient execution from concept to launch in 2–4 weeks.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ProcessStep number="1" label="Discovery" />
                <ProcessStep number="2" label="Design" />
                <ProcessStep number="3" label="Develop" />
                <ProcessStep number="4" label="Launch" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* Small reusable pieces */

const ServiceItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 group cursor-default">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: colors.bg.tertiary, color: colors.text.secondary }}>
      <div className="h-4 w-4 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <span className="text-xs font-medium group-hover:translate-x-1 transition-transform" style={{ color: colors.text.secondary }}>
      {label}
    </span>
  </div>
);

const ProcessStep: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="flex flex-col items-center gap-2 flex-1">
    <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium shadow-sm" style={{
      backgroundColor: colors.bg.tertiary,
      borderColor: `${colors.text.muted}40`,
      color: colors.text.secondary
    }}>
      {number}
    </div>
    <span className="text-[10px] text-center leading-tight" style={{ color: colors.text.muted }}>
      {label}
    </span>
  </div>
);

const TagPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    type="button"
    className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium shadow-sm hover:opacity-80 transition"
    style={{
      backgroundColor: colors.bg.tertiary,
      borderColor: `${colors.text.secondary}40`,
      color: colors.text.secondary
    }}
  >
    {children}
    <span className="text-base leading-none">+</span>
  </button>
);

const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="inline-flex items-center rounded-md border px-2.5 py-1 text-[10px] font-medium"
    style={{
      backgroundColor: `${colors.bg.tertiary}80`,
      borderColor: `${colors.text.muted}30`,
      color: colors.text.secondary
    }}
  >
    {children}
  </span>
);

const StatRow: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <div className="h-4 w-4 flex items-center justify-center" style={{ color: colors.text.secondary }}>
      {icon}
    </div>
    <span className="text-xs font-medium" style={{ color: colors.text.secondary }}>
      {label}
    </span>
  </div>
);

export default BlinkStudioShowcase;
