import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

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

// ==== Single-file demo adapted for React + Vite (no Lenis, no Button import, using react-icons) ====
export default function Footer() {
  return (
    <div className="relative w-full">
      <StickyFooter />
    </div>
  );
}

// ===== StickyFooter (in-file) =====
function StickyFooter({ className = "" }) {
  return (
    <footer
      className={`relative h-[720px] w-full ${className}`}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
      }}
    >
      <div className="fixed bottom-0 h-[720px] w-full">
        <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
          <div
            className="relative flex size-full flex-col justify-between gap-5 px-4 py-8 md:px-12"
            style={{ borderColor: `${colors.text.muted}20` }}
          >
            {/* Decorative background (neutralized to work without custom CSS tokens) */}
            <div aria-hidden className="absolute inset-0 isolate z-0">
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 140,
                  transform: "translateY(-87.5px) rotate(-45deg)",
                  background:
                    "radial-gradient(68% 69% at 55% 31%, rgba(200,180,160,.08) 0%, rgba(168,144,128,.04) 50%, rgba(200,180,160,.02) 80%)",
                }}
              />
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 240,
                  transform: "translate(5%,-50%) rotate(-45deg)",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(200,180,160,.06) 0%, rgba(200,180,160,.02) 80%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 rounded-full"
                style={{
                  height: 320,
                  width: 240,
                  transform: "translateY(-87.5px) rotate(-45deg)",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(200,180,160,.06) 0%, rgba(200,180,160,.02) 80%, transparent 100%)",
                }}
              />
            </div>

            <div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
              <AnimatedContainer className="w-full max-w-sm min-w-64 space-y-4 relative z-[1]">
                <img src="/logos/blink_logo.webp" alt="Logo" className="size-24" />
                <p className="mt-8 text-sm md:mt-0" style={{ color: colors.text.muted }}>
                  We create stunning websites, apps, branding, and digital experiences that make your business stand out online.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return Icon ? (
                      <a
                        key={link.title}
                        href={link.href}
                        aria-label={link.title}
                        className="inline-flex size-8 items-center justify-center rounded-md border transition hover:opacity-80"
                        style={{
                          borderColor: `${colors.text.muted}30`,
                          color: colors.text.secondary
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.bg.secondary;
                          e.currentTarget.style.borderColor = colors.text.muted;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.borderColor = `${colors.text.muted}30`;
                        }}
                      >
                        <Icon className="size-4" />
                      </a>
                    ) : null;
                  })}
                </div>
              </AnimatedContainer>

              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full relative z-[1]">
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-sm uppercase tracking-wide" style={{ color: colors.text.primary }}>{group.label}</h3>
                    <ul className="mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center transition-all duration-300"
                            style={{ color: colors.text.muted }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = colors.text.secondary;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = colors.text.muted;
                            }}
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            {/* BLINK STUDIO Text */}
            <motion.div
              className="w-full text-center relative z-[1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2
                className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
                style={{
                  color: colors.text.primary,
                  backgroundImage: `linear-gradient(to right, ${colors.text.muted}, ${colors.text.primary})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                BLINK STUDIO
              </h2>
            </motion.div>

            <div
              className="flex flex-col items-center justify-between gap-2 border-t pt-2 text-sm md:flex-row"
              style={{
                color: colors.text.muted,
                borderColor: `${colors.text.muted}20`
              }}
            >
              <p>© 2026 Blink Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== Types =====
type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type FooterLinkGroup = {
  label: string;
  links: FooterLink[];
};

// ===== Data =====
const socialLinks: FooterLink[] = [
  { title: "Instagram", href: "#", icon: FaInstagram },
  { title: "LinkedIn", href: "#", icon: FaLinkedin },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Services",
    links: [
      { title: "Websites", href: "/services/websites" },
      { title: "Ecommerce", href: "/services/ecommerce" },
      { title: "Branding", href: "/services/branding" },
      { title: "AI Chatbots", href: "/services/chatbots" },
    ],
  },
  {
    label: "Portfolio",
    links: [
      { title: "MT3 Arquitectos", href: "https://mt3arquitectos.com.mx" },
      { title: "Sinergia Telecomunicaciones", href: "https://sinergia-telecomunicaciones.com.mx" },
      { title: "Stellaris Education", href: "https://stellarisnashville.com" },
      { title: "Stoever", href: "https://stoever.com.mx" },
    ],
  },
];

// ===== Animated container =====
function AnimatedContainer({ delay = 0.1, children, className = "", ...props }: { delay?: number; children: React.ReactNode; className?: string;[key: string]: any }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
